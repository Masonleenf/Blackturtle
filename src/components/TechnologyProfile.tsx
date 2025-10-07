import React, { useState, useMemo } from 'react';
import { 
  ChevronRight, 
  Building2, 
  Calendar, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Globe, 
  Award, 
  ArrowRight, 
  Share2, 
  Bell, 
  ExternalLink,
  Lightbulb,
  Target,
  AlertTriangle,
  BarChart3,
  FileText,
  User
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip } from 'recharts';

interface TechnologyProfileProps {
  onNavigateBack?: () => void;
  onNavigateToCompany?: () => void;
  techId?: string;
}

const TechnologyProfile = ({ onNavigateBack, onNavigateToCompany, techId }: TechnologyProfileProps) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isInterested, setIsInterested] = useState(false);
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  // Sample technology data
  const technologyData = useMemo(() => ({
    id: "tech-001",
    name: "딥러닝 의료영상 진단 AI",
    category: "AI/머신러닝",
    description: "CT, MRI 영상을 실시간으로 분석하여 암세포를 95% 정확도로 검출하는 딥러닝 알고리즘",
    icon: "🧠",
    bcRatio: "6.8x",
    rdInvestment: "₩45억",
    developmentPeriod: "2020-2024",
    trlLevel: 8,
    verificationDate: "2024.08.15",
    verificationOrg: "한국산업기술진흥원",
    company: {
      name: "테크이노베이션",
      logo: "🏢",
      industry: "AI/머신러닝",
      location: "서울",
      totalAssets: "285억원",
      employees: "127명",
      revenueGrowth: "+42%"
    },
    keyFeatures: [
      "실시간 의료영상 분석 (< 3초)",
      "95% 이상의 정확도 달성",
      "기존 시스템과 완벽 호환",
      "FDA 승인 획득",
      "다국어 지원 인터페이스"
    ],
    applications: [
      { icon: "🏥", title: "종합병원", desc: "대용량 영상 진단" },
      { icon: "🔬", title: "검진센터", desc: "정밀 검사 지원" },
      { icon: "📱", title: "모바일 헬스", desc: "원격 진단 서비스" },
      { icon: "🌐", title: "글로벌 헬스케어", desc: "해외 진출 확대" }
    ],
    expectedRevenue: "₩127억",
    marketSize: "₩2.4조",
    marketGrowth: "+18.5%",
    competitionScore: "9.2/10",
    timeline: [
      { year: 2020, stage: "기초연구", description: "딥러닝 모델 개발", trl: 3, completed: true },
      { year: 2021, stage: "프로토타입", description: "초기 알고리즘 구현", trl: 4, completed: true },
      { year: 2022, stage: "파일럿", description: "임상시험 시작", trl: 6, completed: true },
      { year: 2023, stage: "상용화", description: "제품 출시", trl: 7, completed: true },
      { year: 2024, stage: "확산", description: "시장 확대", trl: 8, completed: true }
    ],
    specifications: [
      { label: "기술분류", value: "인공지능 > 딥러닝 > 의료영상분석" },
      { label: "TRL 단계", value: "8단계 (시범사업 완료)" },
      { label: "특허 현황", value: "국내 3건, 국외 2건 등록" },
      { label: "인증/수상", value: "FDA 승인, CES 혁신상 수상" },
      { label: "개발기관", value: "테크이노베이션 AI연구소" },
      { label: "연구책임자", value: "김박사 (KAIST 전자공학과)" }
    ],
    expectedOutcomes: [
      {
        icon: DollarSign,
        title: "매출 성장",
        description: "향후 3년간 연평균 35% 매출 증가 예상",
        impact: "시장 규모 ₩2.4조 예상"
      },
      {
        icon: TrendingUp,
        title: "비용 절감",
        description: "진단 시간 70% 단축으로 운영비 절감",
        impact: "병원당 연간 ₩5억 절약"
      },
      {
        icon: Globe,
        title: "시장 확대",
        description: "아시아 태평양 지역 진출 계획",
        impact: "15개국 수출 목표"
      },
      {
        icon: Award,
        title: "특허 가치",
        description: "핵심 특허 포트폴리오 구축",
        impact: "특허 가치 ₩120억 추정"
      }
    ],
    strengths: [
      "검증된 높은 B/C 비율 (6.8x)",
      "FDA 승인으로 글로벌 신뢰성 확보",
      "강력한 시장 수요와 성장 잠재력",
      "경쟁사 대비 우수한 기술 성능",
      "안정적인 수익 모델 확립"
    ],
    considerations: [
      "글로벌 경쟁 심화 가능성",
      "규제 변화에 따른 리스크",
      "대규모 투자 필요한 확장 단계",
      "의료진 교육 및 적응 기간 필요"
    ]
  }), [techId]);

  // Performance projection data
  const projectionData = useMemo(() => [
    { year: 1, conservative: 15, expected: 25, optimistic: 40 },
    { year: 2, conservative: 28, expected: 45, optimistic: 75 },
    { year: 3, conservative: 42, expected: 70, optimistic: 115 },
    { year: 4, conservative: 58, expected: 95, optimistic: 155 },
    { year: 5, conservative: 75, expected: 125, optimistic: 200 }
  ], []);

  // Similar technologies data
  const similarTechnologies = useMemo(() => [
    { name: "AI 병리진단 시스템", bcRatio: "5.2x", trl: 7, status: "상용화" },
    { name: "의료영상 분석 플랫폼", bcRatio: "4.8x", trl: 8, status: "확산" },
    { name: "딥러닝 진단보조 도구", bcRatio: "6.1x", trl: 6, status: "임상시험" },
    { name: "AI 방사선 판독 시스템", bcRatio: "3.9x", trl: 9, status: "상용화" }
  ], []);

  const getTrlColor = useMemo(() => {
    return (level: number) => {
      if (level >= 8) return 'bg-green-500';
      if (level >= 6) return 'bg-yellow-500';
      return 'bg-orange-500';
    };
  }, []);

  const tabs = [
    { id: 'overview', label: '기술 상세', icon: Lightbulb },
    { id: 'performance', label: '사업화 실적', icon: BarChart3 },
    { id: 'patents', label: '특허 정보', icon: FileText },
    { id: 'team', label: '연구진', icon: User },
    { id: 'documents', label: '관련 문서', icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-[14px] text-gray-600 font-[Pretendard]">
            <button 
              onClick={onNavigateBack}
              className="hover:text-[#DC143C] transition-colors"
            >
              Home
            </button>
            <ChevronRight size={14} />
            <button 
              onClick={onNavigateBack}
              className="hover:text-[#DC143C] transition-colors"
            >
              기술
            </button>
            <ChevronRight size={14} />
            <span className="text-[#DC143C]">{technologyData.category}</span>
            <ChevronRight size={14} />
            <span className="text-[#2C3E50] font-semibold">{technologyData.name}</span>
          </nav>
        </div>
      </div>

      {/* Technology Hero */}
      <section className="bg-white py-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <div className="text-[120px] mb-6">{technologyData.icon}</div>
              <h1 className="text-[56px] font-bold text-[#2C3E50] mb-4 leading-tight font-[Pretendard]">
                {technologyData.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-block bg-[#5FA8B4] text-white px-4 py-2 rounded-full text-[14px] font-semibold font-[Pretendard]">
                  {technologyData.category}
                </span>
                <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-[14px] font-semibold">
                  <CheckCircle size={16} />
                  사업화 실적 검증 완료
                </div>
              </div>
              <p className="text-[20px] font-medium text-gray-700 leading-relaxed font-[Pretendard]">
                {technologyData.description}
              </p>
            </div>

            {/* Right Column - Key Metrics */}
            <div className="bg-[#F5F1E8] rounded-[20px] p-8">
              <div className="text-center mb-8">
                <div className="text-[96px] font-bold text-[#DC143C] mb-2 font-[JetBrains_Mono] leading-none">
                  {technologyData.bcRatio}
                </div>
                <div className="text-[18px] font-semibold text-gray-700 mb-4 font-[Pretendard]">
                  투자 대비 사업화 성과
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 text-[14px]">카테고리 평균 (3.8x)</span>
                    <span className="text-green-600 font-semibold">+79% 우수</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#DC143C] h-3 rounded-full" style={{ width: '79%' }}></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-[32px] font-bold text-[#2C3E50] font-[JetBrains_Mono]">
                    {technologyData.rdInvestment}
                  </div>
                  <div className="text-[14px] text-gray-600 font-[Pretendard]">R&D 투자액</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar size={20} className="text-gray-600" />
                    <span className="text-[16px] font-semibold text-[#2C3E50] font-[Pretendard]">
                      {technologyData.developmentPeriod}
                    </span>
                  </div>
                  <div className="text-[14px] text-gray-600 font-[Pretendard]">개발 기간</div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className={`inline-block px-4 py-2 rounded-full text-white text-[16px] font-semibold ${getTrlColor(technologyData.trlLevel)}`}>
                  TRL {technologyData.trlLevel}단계
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Owner Company Section */}
      <section className="py-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h2 className="text-[24px] font-semibold text-[#2C3E50] mb-6 font-[Pretendard]">
              보유 기업
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-[60px]">{technologyData.company.logo}</div>
                <div>
                  <button 
                    onClick={onNavigateToCompany}
                    className="text-[28px] font-bold text-[#DC143C] hover:underline font-[Pretendard]"
                  >
                    {technologyData.company.name}
                  </button>
                  <div className="flex gap-3 mt-2">
                    <span className="inline-block bg-[#5FA8B4] text-white px-3 py-1 rounded-full text-[12px] font-semibold">
                      {technologyData.company.industry}
                    </span>
                    <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[12px] font-semibold">
                      {technologyData.company.location}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mt-4">
                    <div>
                      <div className="text-[18px] font-bold text-[#2C3E50] font-[Pretendard]">
                        {technologyData.company.totalAssets}
                      </div>
                      <div className="text-[12px] text-gray-600 font-[Pretendard]">총자산</div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold text-[#2C3E50] font-[Pretendard]">
                        {technologyData.company.employees}
                      </div>
                      <div className="text-[12px] text-gray-600 font-[Pretendard]">직원수</div>
                    </div>
                    <div>
                      <div className="text-[18px] font-bold text-green-600 font-[Pretendard]">
                        {technologyData.company.revenueGrowth}
                      </div>
                      <div className="text-[12px] text-gray-600 font-[Pretendard]">매출성장률</div>
                    </div>
                  </div>
                </div>
              </div>
              <button 
                onClick={onNavigateToCompany}
                className="flex items-center gap-2 bg-[#DC143C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B91C3C] transition-colors font-[Pretendard]"
              >
                상세보기
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Description */}
      <section className="py-8">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h2 className="text-[28px] font-semibold text-[#2C3E50] mb-6 font-[Pretendard]">
              기술 개요
            </h2>
            <p className="text-[18px] leading-relaxed text-gray-700 mb-8 font-[Pretendard]">
              {technologyData.description}. 이 기술은 의료진의 진단 정확도를 크게 향상시키고 진단 시간을 단축하여 
              환자 치료 결과를 개선하는 혁신적인 솔루션입니다. 특히 조기 암 발견률을 높여 환자의 생존율 향상에 
              직접적으로 기여하고 있습니다.
            </p>

            <h3 className="text-[20px] font-semibold text-[#2C3E50] mb-4 font-[Pretendard]">
              핵심 기능
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {technologyData.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#DC143C] flex-shrink-0" />
                  <span className="text-[16px] text-gray-700 font-[Pretendard]">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="text-[20px] font-semibold text-[#2C3E50] mb-4 font-[Pretendard]">
              사업화 실적
            </h3>
            <div className="bg-white rounded-[12px] overflow-hidden shadow-[0px_20px_27px_0px_rgba(0,0,0,0.05)]">
              {/* Table Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-[14px] font-bold text-[#8392ab] tracking-[-0.3872px] font-[Pretendard]">
                    사업화 실적명
                  </div>
                  <div className="text-[14px] font-bold text-[#8392ab] tracking-[-0.3872px] font-[Pretendard]">
                    거래처
                  </div>
                  <div className="text-[14px] font-bold text-[#8392ab] tracking-[-0.3872px] font-[Pretendard]">
                    금액
                  </div>
                  <div className="text-[14px] font-bold text-[#8392ab] tracking-[-0.3872px] font-[Pretendard]">
                    날짜
                  </div>
                </div>
              </div>
              
              {/* Table Rows */}
              <div className="divide-y divide-gray-100">
                <div className="px-6 py-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-[16px] font-semibold text-[#141414] font-[Pretendard]">
                      AI시스템 공급
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Pretendard]">
                      삼성전자
                    </div>
                    <div className="text-[14px] text-[#252f40] font-[Inter]">
                      100억원
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Inter]">
                      2024-10
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-[16px] font-semibold text-[#141414] font-[Pretendard]">
                      진단 알고리즘 라이선스
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Pretendard]">
                      LG화학
                    </div>
                    <div className="text-[14px] text-[#252f40] font-[Inter]">
                      35억원
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Inter]">
                      2024-08
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-[16px] font-semibold text-[#141414] font-[Pretendard]">
                      데이터 분석 플랫폼
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Pretendard]">
                      현대자동차
                    </div>
                    <div className="text-[14px] text-[#252f40] font-[Inter]">
                      28억원
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Inter]">
                      2024-06
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-[16px] font-semibold text-[#141414] font-[Pretendard]">
                      맞춤형 솔루션 개발
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Pretendard]">
                      SK텔레콤
                    </div>
                    <div className="text-[14px] text-[#252f40] font-[Inter]">
                      45억원
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Inter]">
                      2024-04
                    </div>
                  </div>
                </div>
                
                <div className="px-6 py-4">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-[16px] font-semibold text-[#141414] font-[Pretendard]">
                      기술 컨설팅 서비스
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Pretendard]">
                      네이버
                    </div>
                    <div className="text-[14px] text-[#252f40] font-[Inter]">
                      12억원
                    </div>
                    <div className="text-[14px] text-[#8392ab] font-[Inter]">
                      2024-02
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Similar Technologies */}
      <section className="bg-[#F5F1E8] py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            <h2 className="text-[24px] font-semibold text-[#2C3E50] mb-8 font-[Pretendard]">
              유사 기술 List
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 text-[16px] font-semibold text-[#2C3E50] font-[Pretendard]">기업명</th>
                    <th className="text-left py-4 px-4 text-[16px] font-semibold text-[#2C3E50] font-[Pretendard]">기술명</th>
                    <th className="text-center py-4 px-4 text-[16px] font-semibold text-[#2C3E50] font-[Pretendard]">B/C</th>
                    <th className="text-center py-4 px-4 text-[16px] font-semibold text-[#2C3E50] font-[Pretendard]">기술단계(TRL)</th>
                  </tr>
                </thead>
                <tbody>
                  {/* 메드테크이노베이션 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      메드테크이노베이션
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      {technologyData.name} (현재 기술)
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      {technologyData.bcRatio}
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className={`px-3 py-1 rounded-full text-white text-[12px] font-semibold ${getTrlColor(technologyData.trlLevel)}`}>
                        TRL {technologyData.trlLevel}
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      메드테크이노베이션
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      스마트 진단 솔루션
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      2.8
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-green-500">
                        TRL 8
                      </span>
                    </td>
                  </tr>
                  
                  {/* 바이오헬스케어 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      바이오헬스케어
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      유전자 분석 플랫폼
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      3.2
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-blue-500">
                        TRL 7
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      바이오헬스케어
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      개인맞춤형 치료제 개발
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      4.1
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-orange-500">
                        TRL 6
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      바이오헬스케어
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      바이오마커 검사키트
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      2.5
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-green-500">
                        TRL 9
                      </span>
                    </td>
                  </tr>

                  {/* 스마트테크솔루션 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      스마트테크솔루션
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      IoT 기반 모니터링 시스템
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      2.9
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-blue-500">
                        TRL 7
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      스마트테크솔루션
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      클라우드 데이터 분석 엔진
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      3.7
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-green-500">
                        TRL 8
                      </span>
                    </td>
                  </tr>

                  {/* 그린에너지테크 */}
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      그린에너지테크
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      태양광 효율 최적화 기술
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      3.4
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-orange-500">
                        TRL 6
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      그린에너지테크
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      에너지 저장 시스템
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      2.6
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-blue-500">
                        TRL 7
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-[Pretendard]">
                      그린에너지테크
                    </td>
                    <td className="py-4 px-4 font-[Pretendard]">
                      스마트 그리드 관리 플랫폼
                    </td>
                    <td className="py-4 px-4 text-center font-[JetBrains_Mono] font-semibold">
                      4.3
                    </td>
                    <td className="py-4 px-4 text-center font-[Pretendard]">
                      <span className="px-3 py-1 rounded-full text-white text-[12px] font-semibold bg-red-500">
                        TRL 5
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      {/* Action Section - Sticky Bottom Bar */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 shadow-lg z-50">
        <div className="max-w-[1440px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[20px] font-semibold text-[#2C3E50] mb-2 font-[Pretendard]">
                이 기술이 관심있으신가요?
              </h3>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-[14px] text-gray-600 font-[Pretendard] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationEnabled}
                    onChange={(e) => setNotificationEnabled(e.target.checked)}
                    className="w-4 h-4 text-[#DC143C] focus:ring-[#DC143C] border-gray-300 rounded"
                  />
                  기술 업데이트 알림 받기
                </label>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#DC143C] font-semibold font-[Pretendard]">
                <Share2 size={18} />
                공유하기
              </button>
              <button className="bg-white border-2 border-[#DC143C] text-[#DC143C] px-6 py-3 rounded-lg font-semibold hover:bg-[#DC143C] hover:text-white transition-colors font-[Pretendard]">
                상세 리포트 받기
              </button>
              <button 
                onClick={() => setIsInterested(!isInterested)}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors font-[Pretendard] ${
                  isInterested 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-[#DC143C] text-white hover:bg-[#B91C3C]'
                }`}
              >
                {isInterested ? '관심 기술 등록됨 ✓' : '관심 기술 등록'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyProfile;