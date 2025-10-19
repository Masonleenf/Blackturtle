# BlackTurtle 프로젝트 구현 가이드 (최종본)

## 📋 프로젝트 개요

### 서비스 설명
- **서비스명**: BlackTurtle
- **목적**: NTIS 기반 정부 R&D 사업화 성공 기술 데이터 제공
- **고객**: VC, CVC 등 벤처투자사
- **핵심가치**: 정부납부기술료 지불 기술 = 사업화 성공 기술
- **차별점**: B/C ratio로 투자가치 정량화

### 기술 스택
```
프론트엔드: React (TypeScript, .tsx)
백엔드: Flask (Python)
데이터베이스: PostgreSQL
배포: Cloudtype
데이터소스: NTIS API + 직접조사
```

---

## 🎯 핵심 비즈니스 로직

### B/C Ratio 계산식
```
B/C Ratio = (사업화실적 금액) / (정부지원금 + 기업투자금) × 매출총이익률

여기서:
- 사업화실적 금액: technologies.commercialization_revenue
- 정부지원금: technologies.government_investment
- 기업투자금: technologies.company_investment
- 매출총이익률: (revenue - cost_of_sales) / revenue
```

### 예시
```
기술명: 차세대 암 면역치료기술
정부지원: 20억원
기업투자: 12억원
사업화실적: 750억원
기업 매출총이익률: 20%

B/C Ratio = 750 / (20 + 12) × 0.20
          = 750 / 32 × 0.20
          = 23.44 × 0.20
          = 4.69x
```

---

## 🗂️ 데이터베이스 구조

### 테이블 4개
1. **companies** - 기업 기본 정보
2. **company_financials** - 기업 재무 데이터 (시계열 - 연도별)
3. **technologies** - 기술 정보 + R&D 투자 + 사업화 실적
4. **users** - 사용자 인증

### 관계도
```
companies (1) ──< (N) company_financials [시계열]
companies (1) ──< (N) technologies
```

### 주요 필드

**technologies 테이블 핵심 컬럼:**
- `government_investment` - 정부지원금 (억원)
- `company_investment` - 기업자체투자 (억원)
- `commercialization_revenue` - 사업화실적 금액 (억원)

**company_financials 테이블 핵심 컬럼:**
- `revenue` - 매출액 (억원)
- `cost_of_sales` - 매출원가 (억원) ⭐ B/C ratio 계산에 필수
- `rd_investment` - 전사 R&D 투자 (억원)

---

## 📊 페이지별 데이터 흐름

### 1️⃣ Dashboard (랜딩 페이지)
- **목적**: 서비스 소개, CTA
- **데이터**: 정적 컨텐츠만

### 2️⃣ Login (로그인)
- **API**: `POST /api/auth/login`
- **데이터**: users 테이블

### 3️⃣ CompanyDirectory (기업 디렉토리)
- **API**: `GET /api/companies?search=&industry=&sort=`
- **쿼리**:
  ```sql
  SELECT companies.*, 
         COUNT(technologies) as tech_count,
         MAX(B/C ratio) as max_bc_ratio
  FROM companies
  LEFT JOIN technologies
  LEFT JOIN company_financials (최신 연도)
  GROUP BY companies.id
  ```

### 4️⃣ CompanyDetail (기업 상세)
- **API**: `GET /api/companies/:id`
- **데이터**:
  - companies 테이블 (기본 정보)
  - company_financials 테이블 (재무 이력 - 차트용)
  - technologies 테이블 (보유 기술 목록)
- **차트**: 연도별 매출, 영업이익, R&D 투자

### 5️⃣ TechnologyDirectory (기술 디렉토리)
- **API**: `GET /api/technologies?category=&trl=&sort=`
- **쿼리**:
  ```sql
  SELECT technologies.*,
         companies.name,
         (B/C ratio 계산) as bc_ratio
  FROM technologies
  JOIN companies
  JOIN company_financials (최신 연도)
  WHERE category = ? AND trl_level = ?
  ORDER BY bc_ratio DESC
  ```

### 6️⃣ TechnologyProfile (기술 상세)
- **API**: `GET /api/technologies/:id`
- **데이터**:
  - technologies 테이블 (기술 정보)
  - companies 테이블 (소속 기업 정보)
  - company_financials 테이블 (매출총이익률 계산용)
  - B/C ratio (실시간 계산)

### 7️⃣ MarketAnalytics (시장 분석)
- **API**: 
  - `GET /api/analytics/industry` - 산업별 통계
  - `GET /api/analytics/region` - 지역별 통계
  - `GET /api/analytics/kpi` - KPI 지표
- **집계**:
  ```sql
  SELECT industry,
         COUNT(companies) as company_count,
         COUNT(technologies) as tech_count,
         AVG(B/C ratio) as avg_bc_ratio,
         SUM(commercialization_revenue) as total_revenue
  FROM companies
  JOIN technologies
  GROUP BY industry
  ```

---

## 🚀 구현 단계

### Phase 1: 데이터베이스 설계 (3일)
**작업:**
- [ ] PostgreSQL 스키마 생성
- [ ] 4개 테이블 구조 확정
- [ ] B/C ratio 계산 View 생성
- [ ] 인덱스 설정
- [ ] 샘플 데이터 입력

**체크포인트:**
```sql
-- B/C ratio 계산 확인
SELECT 
    t.name,
    t.commercialization_revenue,
    (t.government_investment + t.company_investment) as total_rd,
    ((cf.revenue - cf.cost_of_sales) / cf.revenue) as gross_margin,
    (t.commercialization_revenue / 
     (t.government_investment + t.company_investment)) * 
    ((cf.revenue - cf.cost_of_sales) / cf.revenue) as bc_ratio
FROM technologies t
JOIN companies c ON t.company_id = c.id
JOIN company_financials cf ON c.id = cf.company_id
WHERE cf.year = (SELECT MAX(year) FROM company_financials);
```

### Phase 2: Flask API 구현 (1주)
**작업:**
- [ ] 기본 CRUD API
- [ ] B/C ratio 계산 로직 구현
- [ ] 검색/필터링 엔드포인트
- [ ] 인증 시스템
- [ ] 에러 핸들링

**핵심 로직 (Python):**
```python
def calculate_bc_ratio(tech, latest_financial):
    """B/C 비율 계산"""
    total_investment = (tech.government_investment + 
                       tech.company_investment)
    
    if total_investment == 0 or latest_financial.revenue == 0:
        return 0
    
    gross_margin = ((latest_financial.revenue - 
                    latest_financial.cost_of_sales) / 
                   latest_financial.revenue)
    
    bc_ratio = (tech.commercialization_revenue / 
                total_investment) * gross_margin
    
    return round(bc_ratio, 2)
```

### Phase 3: React 프론트엔드 (2주)
**작업:**
- [ ] 7개 주요 페이지 구현
- [ ] API 연동
- [ ] 차트 라이브러리 (Recharts)
- [ ] 검색/필터 UI
- [ ] 반응형 디자인

**컴포넌트 구조:**
```
App.tsx
├── Dashboard.tsx (랜딩)
├── Login.tsx
├── CompanyDirectory.tsx
│   └── CompanyDetail.tsx
├── TechnologyDirectory.tsx
│   └── TechnologyProfile.tsx
├── MarketAnalytics.tsx
├── Header.tsx
└── Footer.tsx
```

### Phase 4: NTIS 데이터 수집 (1주)
**작업:**
- [ ] NTIS Open API 연동
- [ ] 데이터 크롤링 스크립트
- [ ] 데이터 변환 로직
- [ ] DB 저장 자동화
- [ ] 스케줄러 설정

**수집 데이터:**
1. 기술료 납부 기술 정보
2. 정부지원금액
3. 사업화 실적
4. 기업 정보

### Phase 5: 테스트 및 배포 (3일)
**작업:**
- [ ] API 테스트
- [ ] 프론트엔드 테스트
- [ ] B/C ratio 계산 검증
- [ ] Cloudtype 배포
- [ ] 모니터링 설정

---

## 📌 중요 구현 포인트

### 1. B/C Ratio는 저장하지 않음
- ❌ DB에 bc_ratio 컬럼 생성 X
- ✅ 항상 실시간 계산
- ✅ View나 함수로 구현

**이유:**
- 기업의 재무 데이터가 업데이트되면 B/C ratio도 변경
- 데이터 일관성 유지
- 계산 로직 중앙화

### 2. 매출총이익률 필수
- `cost_of_sales` (매출원가) 컬럼 필수
- NTIS 데이터에 없으면 기업 재무제표에서 수집
- 없을 경우 업종 평균값 사용

### 3. 시계열 데이터
- **company_financials만 시계열**
- technologies는 전체 기간 누적 데이터
- 최신 연도의 매출총이익률 사용

### 4. 프론트엔드 표시
```typescript
// DB에서 받아온 값을 그대로 표시
interface Technology {
  bcRatio: number;  // 백엔드에서 계산된 값
}

// 표시
<div>{tech.bcRatio.toFixed(1)}x</div>
```

---

## 🎨 UI/UX 가이드라인

### 색상 팔레트
```
Primary: #5FA8B4 (민트블루)
Secondary: #DC143C (크림슨)
Accent: #00DEA3 (에메랄드)
Background: #F8FFFE (아이보리화이트)
Text: #1A1E29 (다크그레이)
```

### B/C Ratio 표시
- **4.0 이상**: 초록색 (#00DEA3) - 우수
- **2.0~3.9**: 파란색 (#5FA8B4) - 양호
- **1.0~1.9**: 주황색 - 보통
- **1.0 미만**: 회색 - 주의

### 차트 스타일
- Recharts 라이브러리 사용
- 라인 차트: 재무 추이
- 바 차트: 산업별 비교
- 도넛 차트: 지역별 분포

---

## 📊 API 엔드포인트 목록

### 인증
```
POST   /api/auth/login
POST   /api/auth/logout
```

### 기업
```
GET    /api/companies
       ?search=검색어
       &industry=산업
       &sort=bcRatio|revenue

GET    /api/companies/:id
GET    /api/companies/:id/technologies
GET    /api/companies/:id/financials
```

### 기술
```
GET    /api/technologies
       ?search=검색어
       &category=카테고리
       &trl=레벨
       &sort=bcRatio|trlLevel

GET    /api/technologies/:id
```

### 분석
```
GET    /api/analytics/industry
GET    /api/analytics/region
GET    /api/analytics/kpi
GET    /api/analytics/trends
```

---

## ⚠️ 주의사항 및 제약사항

### 데이터 품질
1. **매출원가 누락 시**
   - 업종별 평균 매출총이익률 적용
   - 또는 사용자에게 입력 요청

2. **NTIS 데이터 한계**
   - 모든 기업이 NTIS에 등록되지 않음
   - 직접 조사로 보완 필요

3. **B/C Ratio 해석**
   - 업종별로 적정 비율이 다름
   - 절대값보다 상대 비교에 활용

### 성능 최적화
1. **인덱스 필수**
   - companies.industry
   - technologies.category
   - technologies.company_id
   - company_financials.(company_id, year)

2. **View 활용**
   - B/C ratio 계산 View 생성
   - 자주 조회되는 집계 데이터 View화

3. **캐싱**
   - 산업별 통계 등 자주 안 바뀌는 데이터 캐싱
   - Redis 활용 고려

