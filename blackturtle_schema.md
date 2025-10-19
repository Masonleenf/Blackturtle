# BlackTurtle 데이터 스키마 정의서 (수정본)

## 📊 데이터베이스 구조 개요

### 핵심 테이블 4개
1. **companies** - 기업 기본 정보
2. **company_financials** - 기업 재무 데이터 (시계열 - 연도별)
3. **technologies** - 기술 정보 + 사업화 실적
4. **users** - 사용자 인증

### ⚠️ 중요 변경사항
- ❌ **bc_ratio_history 테이블 삭제** - B/C ratio는 계산 필드
- ✅ **B/C ratio 계산식**: `(사업화실적 금액) / (정부지원 + 기업투자) * 매출총이익률`
- ✅ **시계열 데이터는 company_financials만 존재**

---

## 📋 1. COMPANIES (기업 정보) 테이블

### 테이블 구조
```sql
CREATE TABLE companies (
    company_id SERIAL PRIMARY KEY,
    id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(200) NOT NULL,
    industry VARCHAR(100),
    region VARCHAR(50),
    location VARCHAR(200),
    founded INTEGER,
    ceo VARCHAR(100),
    website VARCHAR(200),
    phone VARCHAR(50),
    email VARCHAR(100),
    description TEXT,
    total_assets NUMERIC(15, 2),     -- 억원
    employee_count INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 변수명 매핑표

| 용도 | 프론트엔드 (TSX) | PostgreSQL | Flask API | 데이터 타입 | 비고 |
|------|-----------------|------------|-----------|-----------|------|
| 기업 고유키 | `company.id` | `id` | `company_id` | VARCHAR(50) | "1", "tech-innovation" |
| 기업명 | `company.name` | `name` | `name` | VARCHAR(200) | "바이오젠코리아" |
| 산업분류 | `company.industry` | `industry` | `industry` | VARCHAR(100) | "바이오기술" |
| 지역 | `company.region` | `region` | `region` | VARCHAR(50) | "경기" |
| 상세주소 | `company.location` | `location` | `location` | VARCHAR(200) | "경기도 성남시" |
| 설립연도 | `company.founded` | `founded` | `founded` | INTEGER | 2018 |
| 대표이사 | `company.ceo` | `ceo` | `ceo` | VARCHAR(100) | "김바이오" |
| 웹사이트 | `company.website` | `website` | `website` | VARCHAR(200) | "www.company.com" |
| 전화번호 | `company.phone` | `phone` | `phone` | VARCHAR(50) | "02-1234-5678" |
| 이메일 | `company.email` | `email` | `email` | VARCHAR(100) | "contact@company.com" |
| 기업설명 | `company.description` | `description` | `description` | TEXT | 기업 소개 |
| 총자산 | `company.totalAssets` | `total_assets` | `total_assets` | NUMERIC | 2400 (억원) |
| 직원수 | `company.employeeCount` | `employee_count` | `employee_count` | INTEGER | 1250 |

---

## 💰 2. COMPANY_FINANCIALS (기업 재무 정보 - 시계열) 테이블

### 테이블 구조
```sql
CREATE TABLE company_financials (
    financial_id SERIAL PRIMARY KEY,
    company_id VARCHAR(50) REFERENCES companies(id),
    year INTEGER NOT NULL,
    revenue NUMERIC(15, 2),          -- 매출액 (억원)
    assets NUMERIC(15, 2),           -- 자산 (억원)
    operating_profit NUMERIC(15, 2), -- 영업이익 (억원)
    cost_of_sales NUMERIC(15, 2),    -- 매출원가 (억원)
    rd_investment NUMERIC(15, 2),    -- 전사 R&D 투자 (억원)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(company_id, year)
);
```

### 변수명 매핑표

| 용도 | 프론트엔드 (TSX) | PostgreSQL | Flask API | 계산식 | 비고 |
|------|-----------------|------------|-----------|--------|------|
| 연도 | `financialHistory[].year` | `year` | `year` | - | 2023 |
| 매출액 | `financials.revenue` | `revenue` | `revenue` | - | 8500 (억원) |
| 자산 | `financialHistory[].assets` | `assets` | `assets` | - | 2400 (억원) |
| 영업이익 | `financialHistory[].operatingProfit` | `operating_profit` | `operating_profit` | - | 1292 (억원) |
| 매출원가 | - | `cost_of_sales` | `cost_of_sales` | - | 6200 (억원) |
| R&D 투자 | `financials.rdInvestment` | `rd_investment` | `rd_investment` | - | 1270 (억원) |
| **매출총이익률** | - | - | `gross_margin` | `(revenue - cost_of_sales) / revenue * 100` | **15.2% (계산)** |
| **이익률** | `financials.profitMargin` | - | `profit_margin` | `operating_profit / revenue * 100` | 15.2% (계산) |
| **매출성장률** | `financials.revenueGrowth` | - | `revenue_growth` | `(현재 revenue - 전년 revenue) / 전년 revenue * 100` | 23.4% (계산) |

**중요: 매출총이익률은 B/C ratio 계산에 사용됨**

---

## 🔬 3. TECHNOLOGIES (기술 정보) 테이블

### 테이블 구조
```sql
CREATE TABLE technologies (
    technology_id SERIAL PRIMARY KEY,
    id VARCHAR(50) UNIQUE NOT NULL,
    company_id VARCHAR(50) REFERENCES companies(id),
    name VARCHAR(300) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    
    -- R&D 투자 정보
    government_investment NUMERIC(15, 2),    -- 정부지원금 (억원)
    company_investment NUMERIC(15, 2),       -- 기업자체투자 (억원)
    
    -- 사업화 실적
    commercialization_revenue NUMERIC(15, 2), -- 사업화실적 금액 (억원)
    
    -- 기술 정보
    development_start_date DATE,
    development_end_date DATE,
    trl_level INTEGER CHECK (trl_level BETWEEN 1 AND 9),
    commercialization_status VARCHAR(50),
    market_size NUMERIC(15, 2),
    verification_date DATE,
    verification_org VARCHAR(200),
    patents_filed INTEGER DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 변수명 매핑표

| 용도 | 프론트엔드 (TSX) | PostgreSQL | Flask API | 계산식 | 비고 |
|------|-----------------|------------|-----------|--------|------|
| 기술 고유키 | `tech.id` | `id` | `technology_id` | - | "tech1" |
| 소속기업 | `tech.companyId` | `company_id` | `company_id` | - | FK |
| 기술명 | `tech.name` | `name` | `name` | - | "차세대 암 면역치료기술" |
| 기술설명 | `tech.description` | `description` | `description` | - | 상세 설명 |
| 기술분야 | `tech.category` | `category` | `category` | - | "바이오기술" |
| **정부지원금** | - | `government_investment` | `government_investment` | - | **20 (억원)** |
| **기업투자금** | - | `company_investment` | `company_investment` | - | **12 (억원)** |
| **총 R&D 비용** | `tech.rdCost` | - | `rd_cost` | `government_investment + company_investment` | **32억 (계산)** |
| **사업화실적** | - | `commercialization_revenue` | `commercialization_revenue` | - | **150 (억원)** |
| **B/C 비율** | `tech.bcRatio` | - | `bc_ratio` | `commercialization_revenue / (government_investment + company_investment) * gross_margin` | **4.7x (계산)** |
| 개발시작일 | - | `development_start_date` | `development_start_date` | - | '2019-01-01' |
| 개발종료일 | - | `development_end_date` | `development_end_date` | - | '2023-12-31' |
| 개발기간 | `tech.period` | - | `development_period` | `CONCAT(YEAR(start), '-', YEAR(end))` | "2019-2023" (계산) |
| TRL 레벨 | `tech.trlLevel` | `trl_level` | `trl_level` | - | 8 |
| 사업화상태 | `tech.status` | `commercialization_status` | `commercialization_status` | - | "verified" |
| 시장규모 | `tech.marketSize` | `market_size` | `market_size` | - | 2400 (억원) |
| 검증일자 | `tech.verificationDate` | `verification_date` | `verification_date` | - | '2024-08-15' |
| 검증기관 | `tech.verificationOrg` | `verification_org` | `verification_org` | - | "한국산업기술진흥원" |
| 특허출원 | `tech.patents` | `patents_filed` | `patents_filed` | - | 24 |

---

## 📊 B/C 비율 계산 로직

### SQL 쿼리
```sql
-- B/C ratio 계산 (기업의 최신 매출총이익률 사용)
SELECT 
    t.id,
    t.name,
    t.commercialization_revenue,
    t.government_investment,
    t.company_investment,
    (t.government_investment + t.company_investment) as total_rd_cost,
    
    -- 매출총이익률 계산
    ((cf.revenue - cf.cost_of_sales) / NULLIF(cf.revenue, 0)) as gross_margin,
    
    -- B/C ratio 계산
    ROUND(
        (t.commercialization_revenue / 
         NULLIF(t.government_investment + t.company_investment, 0)) * 
        ((cf.revenue - cf.cost_of_sales) / NULLIF(cf.revenue, 0)),
        2
    ) as bc_ratio
    
FROM technologies t
JOIN companies c ON t.company_id = c.id
JOIN company_financials cf ON c.id = cf.company_id
WHERE cf.year = (
    SELECT MAX(year) 
    FROM company_financials 
    WHERE company_id = c.id
);
```

### Python (Flask) 계산
```python
def calculate_bc_ratio(tech, latest_financial):
    """B/C 비율 계산"""
    try:
        # 총 R&D 투자
        total_investment = (tech.government_investment or 0) + (tech.company_investment or 0)
        
        if total_investment == 0:
            return 0
        
        # 매출총이익률
        gross_margin = 0
        if latest_financial and latest_financial.revenue:
            gross_margin = (latest_financial.revenue - (latest_financial.cost_of_sales or 0)) / latest_financial.revenue
        
        # B/C ratio
        bc_ratio = (tech.commercialization_revenue / total_investment) * gross_margin
        
        return round(bc_ratio, 2)
    except:
        return 0
```

### TypeScript (React) 표시
```typescript
// 프론트엔드에서는 백엔드에서 계산된 값을 받아서 표시만
interface Technology {
  id: string;
  name: string;
  bcRatio: number;  // 백엔드에서 계산된 값
  rdCost: number;   // government_investment + company_investment
  commercializationRevenue: number;
}

// 표시
<span>{tech.bcRatio.toFixed(1)}x</span>
```

---

## 👤 4. USERS (사용자) 테이블

### 테이블 구조
```sql
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(200) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(200),
    organization VARCHAR(200),
    role VARCHAR(50) DEFAULT 'investor',
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔍 주요 SQL 쿼리

### 1. 기업 목록 조회 (최고 B/C ratio 포함)
```sql
SELECT 
    c.*,
    COUNT(t.id) as tech_count,
    MAX(
        ROUND(
            (t.commercialization_revenue / 
             NULLIF(t.government_investment + t.company_investment, 0)) * 
            ((cf.revenue - cf.cost_of_sales) / NULLIF(cf.revenue, 0)),
            2
        )
    ) as max_bc_ratio
FROM companies c
LEFT JOIN technologies t ON c.id = t.company_id
LEFT JOIN company_financials cf ON c.id = cf.company_id
    AND cf.year = (SELECT MAX(year) FROM company_financials WHERE company_id = c.id)
WHERE c.name ILIKE '%검색어%'
GROUP BY c.company_id
ORDER BY max_bc_ratio DESC;
```

### 2. 기술 상세 조회 (B/C ratio 계산)
```sql
SELECT 
    t.*,
    c.name as company_name,
    (t.government_investment + t.company_investment) as total_rd_cost,
    cf.revenue as company_revenue,
    ((cf.revenue - cf.cost_of_sales) / NULLIF(cf.revenue, 0)) as gross_margin,
    ROUND(
        (t.commercialization_revenue / 
         NULLIF(t.government_investment + t.company_investment, 0)) * 
        ((cf.revenue - cf.cost_of_sales) / NULLIF(cf.revenue, 0)),
        2
    ) as bc_ratio
FROM technologies t
JOIN companies c ON t.company_id = c.id
LEFT JOIN company_financials cf ON c.id = cf.company_id
    AND cf.year = (SELECT MAX(year) FROM company_financials WHERE company_id = c.id)
WHERE t.id = 'tech1';
```

### 3. 산업별 평균 B/C ratio
```sql
SELECT 
    c.industry,
    COUNT(DISTINCT c.id) as company_count,
    COUNT(t.id) as tech_count,
    ROUND(
        AVG(
            (t.commercialization_revenue / 
             NULLIF(t.government_investment + t.company_investment, 0)) * 
            ((cf.revenue - cf.cost_of_sales) / NULLIF(cf.revenue, 0))
        ),
        2
    ) as avg_bc_ratio
FROM companies c
LEFT JOIN technologies t ON c.id = t.company_id
LEFT JOIN company_financials cf ON c.id = cf.company_id
    AND cf.year = (SELECT MAX(year) FROM company_financials WHERE company_id = c.id)
GROUP BY c.industry
ORDER BY avg_bc_ratio DESC;
```

---

## 📝 샘플 데이터

### Companies
```sql
INSERT INTO companies (id, name, industry, region, total_assets, employee_count) VALUES
('1', '바이오젠코리아', '바이오기술', '경기', 24000, 1250);
```

### Company Financials (시계열)
```sql
INSERT INTO company_financials (company_id, year, revenue, assets, operating_profit, cost_of_sales, rd_investment) VALUES
('1', 2020, 4200, 18000, 630, 3360, 840),
('1', 2021, 5800, 20000, 870, 4640, 980),
('1', 2022, 6900, 22000, 1035, 5520, 1100),
('1', 2023, 8500, 24000, 1292, 6800, 1270);

-- 2023년 매출총이익률: (8500 - 6800) / 8500 = 20%
```

### Technologies
```sql
INSERT INTO technologies (
    id, company_id, name, description, category,
    government_investment, company_investment, commercialization_revenue,
    development_start_date, development_end_date, trl_level, 
    commercialization_status, verification_org, patents_filed
) VALUES (
    'tech1', '1', 
    '차세대 암 면역치료기술',
    '고형암 대상 신규 CAR-T 세포치료 플랫폼',
    '바이오기술',
    20, 12, 150,  -- 정부 20억 + 기업 12억 = 총 32억, 사업화 150억
    '2019-01-01', '2023-12-31', 8,
    'verified', '한국산업기술진흥원', 24
);

-- B/C ratio 계산: (150 / 32) * 0.20 = 4.69 * 0.20 = 0.94
-- (만약 매출총이익률이 더 높다면 B/C ratio도 증가)
```

---

## 🎯 데이터 흐름

```
1. NTIS에서 데이터 수집
   ↓
2. technologies 테이블에 저장
   - government_investment (정부지원금)
   - company_investment (기업투자)
   - commercialization_revenue (사업화실적)
   ↓
3. company_financials에서 최신 재무 조회
   - revenue, cost_of_sales로 매출총이익률 계산
   ↓
4. B/C ratio 계산 (Flask API)
   = (사업화실적 / 총투자) * 매출총이익률
   ↓
5. 프론트엔드에서 표시
```

---

## ⚠️ 중요 사항

1. **B/C ratio는 저장하지 않음** - 항상 실시간 계산
2. **매출총이익률 필수** - cost_of_sales 컬럼 필수
3. **시계열은 company_financials만** - 연도별 재무 데이터
4. **technologies는 누적 데이터** - 전체 기간의 사업화 실적 합계

---

## 📊 ER 다이어그램 (수정)

```
companies (1) ──< (N) company_financials [시계열]
companies (1) ──< (N) technologies
```

**삭제된 관계:**
- ~~bc_ratio_history~~
- ~~technology_performance~~ (선택적, 필요시 별도 구현)