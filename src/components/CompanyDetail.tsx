import React, { useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Building2, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Calendar,
  MapPin,
  Award,
  Lightbulb,
  Share2,
  Download,
  Heart,
  CheckCircle,
  BarChart3,
  Target,
  Globe,
  Phone,
  Mail
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Tooltip, Legend } from 'recharts';

interface CompanyDetailProps {
  companyId?: string;
  onNavigateBack: () => void;
  onNavigateToTechnology?: (techId: string) => void;
}

const CompanyDetail = ({ companyId, onNavigateBack, onNavigateToTechnology }: CompanyDetailProps) => {
  const [isInterested, setIsInterested] = useState(false);

  // Sample company data
  const companyData = useMemo(() => {
    const companies = {
      'tech-innovation': {
        id: 'tech-innovation',
        name: '테크이노베이션',
        industry: 'AI/머신러닝',
        location: '서울',
        founded: 2018,
        ceo: '김혁신',
        website: 'www.techinnovation.co.kr',
        phone: '02-1234-5678',
        email: 'contact@techinnovation.co.kr',
        description: '딥러닝 기반 의료영상 진단 AI 전문기업으로 CT, MRI 영상을 실시간으로 분석하여 암세포를 95% 정확도로 검출하는 기술을 보유하고 있습니다.',
        totalAssets: '285억원',
        revenue: '127억원',
        rdInvestment: '45억원',
        employees: 120,
        operatingMargin: '18.5%',
        growthRate: '+32.4%',
        patents: 12,
        bcRatio: '6.2x',
        trlLevel: 8,
        marketSize: '2,400억원',
        competitivePosition: '1위',
        technologies: [
          {
            id: 'deep-learning-medical',
            name: '딥러닝 의료영상 진단 AI',
            description: 'CT, MRI 영상 실시간 분석 및 암세포 검출',
            trlLevel: 8,
            bcRatio: '6.8x'
          },
          {
            id: 'ai-pathology',
            name: 'AI 병리학 진단 시스템',
            description: '조직병리 슬라이드 자동 분석',
            trlLevel: 7,
            bcRatio: '5.4x'
          }
        ]
      },
      'bio-solution': {
        id: 'bio-solution',
        name: '바이오솔루션',
        industry: '바이오헬스',
        location: '대전',
        founded: 2016,
        ceo: '박바이오',
        website: 'www.biosolution.co.kr',
        phone: '042-1234-5678',
        email: 'info@biosolution.co.kr',
        description: '신약개발 플랫폼 기술을 보유한 바이오헬스 전문기업으로 mRNA 백신 및 개인맞춤형 치료제 개발에 특화되어 있습니다.',
        totalAssets: '412억원',
        revenue: '198억원',
        rdInvestment: '78억원',
        employees: 67,
        operatingMargin: '24.1%',
        growthRate: '+28.7%',
        patents: 15,
        bcRatio: '4.8x',
        trlLevel: 7,
        marketSize: '5,600억원',
        competitivePosition: '2위',
        technologies: [
          {
            id: 'mrna-platform',
            name: 'mRNA 백신 플랫폼',
            description: '개인맞춤형 암 치료용 mRNA 백신',
            trlLevel: 6,
            bcRatio: '9.1x'
          }
        ]
      }
    };

    return companies[companyId as keyof typeof companies] || companies['tech-innovation'];
  }, [companyId]);

  // Financial trend data
  const financialTrend = [
    { year: '2020', revenue: 45, assets: 156, rdInvestment: 28 },
    { year: '2021', revenue: 67, assets: 198, rdInvestment: 32 },
    { year: '2022', revenue: 89, assets: 234, rdInvestment: 38 },
    { year: '2023', revenue: 105, assets: 267, rdInvestment: 42 },
    { year: '2024', revenue: parseInt(companyData.revenue), assets: parseInt(companyData.totalAssets), rdInvestment: parseInt(companyData.rdInvestment) }
  ];

  // Investment metrics
  const investmentMetrics = [
    {
      title: "기업가치",
      value: "1,847억원",
      description: "최근 평가기준",
      icon: Building2,
      color: "from-[#5FA8B4] to-[#89CDD6]"
    },
    {
      title: "투자수익률",
      value: companyData.bcRatio,
      description: "B/C 비율",
      icon: Target,
      color: "from-[#DC143C] to-[#F23985]"
    },
    {
      title: "시장규모",
      value: companyData.marketSize,
      description: "데이터베이스 동종업계 총자산", 
      icon: BarChart3,
      color: "from-[#A8D5DD] to-[#5FA8B4]"
    },
    {
      title: "경쟁우위",
      value: companyData.competitivePosition,
      description: "동종업계 중 총자산순위",
      icon: Award,
      color: "from-[#89CDD6] to-[#A8D5DD]"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FFFE] via-[#F0F9F8] to-[#E8F4F3]">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onNavigateBack}
              className="flex items-center space-x-2 text-[#6F6C99] hover:text-[#5FA8B4] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-[14px] font-[Pretendard]">뒤로가기</span>
            </button>
            <div className="w-px h-6 bg-[#E4E7ED]"></div>
            <h1 className="text-[32px] font-bold text-[#1A1E29] font-[Pretendard] tracking-[0.384px]">
              {companyData.name}
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-[#E4E7ED] rounded-lg hover:bg-[#F8FFFE] transition-colors">
              <Share2 className="w-4 h-4 text-[#6F6C99]" />
              <span className="text-[14px] font-[Pretendard] text-[#6F6C99]">공유</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-[#E4E7ED] rounded-lg hover:bg-[#F8FFFE] transition-colors">
              <Download className="w-4 h-4 text-[#6F6C99]" />
              <span className="text-[14px] font-[Pretendard] text-[#6F6C99]">리포트</span>
            </button>
            <button 
              onClick={() => setIsInterested(!isInterested)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                isInterested 
                  ? 'bg-[#DC143C] text-white' 
                  : 'bg-white border border-[#E4E7ED] text-[#6F6C99] hover:bg-[#F8FFFE]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isInterested ? 'fill-current' : ''}`} />
              <span className="text-[14px] font-[Pretendard]">관심기업</span>
            </button>
          </div>
        </div>

        {/* Company Overview */}
        <div className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#5FA8B4] to-[#89CDD6] rounded-xl flex items-center justify-center">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-[28px] font-bold text-[#1A1E29] font-[Pretendard] tracking-[0.384px] mb-2">
                    {companyData.name}
                  </h2>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="bg-[#5FA8B4]/10 text-[#5FA8B4] px-3 py-1 rounded-full text-[12px] font-medium font-[Pretendard]">
                      {companyData.industry}
                    </span>
                    <span className="bg-[#E8F4F3] text-[#6F6C99] px-3 py-1 rounded-full text-[12px] font-medium font-[Pretendard] flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {companyData.location}
                    </span>
                    <span className="bg-[#E8F4F3] text-[#6F6C99] px-3 py-1 rounded-full text-[12px] font-medium font-[Pretendard] flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {companyData.founded}년 설립
                    </span>
                  </div>
                  <p className="text-[16px] text-[#6F6C99] font-[Pretendard] leading-relaxed mb-6">
                    {companyData.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-[#6F6C99]" />
                      <a href={`https://${companyData.website}`} className="text-[14px] text-[#5FA8B4] font-[Pretendard] hover:underline">
                        {companyData.website}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#6F6C99]" />
                      <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">{companyData.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#6F6C99]" />
                      <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">{companyData.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              <h3 className="text-[18px] font-bold text-[#1A1E29] font-[Pretendard] mb-4">핵심 지표</h3>
              <div className="space-y-3">
                <div className="bg-[#F8FFFE] rounded-lg p-4 border border-[#E8F4F3]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] text-[#6F6C99] font-[Pretendard]">B/C 비율</span>
                    <TrendingUp className="w-4 h-4 text-[#00DEA3]" />
                  </div>
                  <p className="text-[20px] font-bold text-[#00DEA3] font-[Inter]">{companyData.bcRatio}</p>
                </div>
                <div className="bg-[#F8FFFE] rounded-lg p-4 border border-[#E8F4F3]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] text-[#6F6C99] font-[Pretendard]">TRL 수준</span>
                    <CheckCircle className="w-4 h-4 text-[#5FA8B4]" />
                  </div>
                  <p className="text-[20px] font-bold text-[#1A1E29] font-[Inter]">{companyData.trlLevel}</p>
                </div>
                <div className="bg-[#F8FFFE] rounded-lg p-4 border border-[#E8F4F3]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] text-[#6F6C99] font-[Pretendard]">성장률</span>
                    <TrendingUp className="w-4 h-4 text-[#00DEA3]" />
                  </div>
                  <p className="text-[20px] font-bold text-[#00DEA3] font-[Inter]">{companyData.growthRate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {investmentMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED]">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-[14px] text-[#6F6C99] font-[Pretendard] mb-2">{metric.title}</h3>
                <p className="text-[24px] font-bold text-[#1A1E29] font-[Inter] mb-1">{metric.value}</p>
                <p className="text-[12px] text-[#6F6C99] font-[Pretendard]">{metric.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Financial Performance */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6">
            <h2 className="text-[20px] font-bold text-[#1A1E29] font-[Pretendard] mb-6">재무 성과 추이</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={financialTrend}>
                  <XAxis 
                    dataKey="year" 
                    axisLine={false}
                    tickLine={false}
                    fontSize={12}
                    fill="#6F6C99"
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    fontSize={12}
                    fill="#6F6C99"
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E4E7ED',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="#5FA8B4" 
                    strokeWidth={3}
                    name="매출액 (억원)"
                    dot={{ fill: '#5FA8B4', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="assets" 
                    stroke="#DC143C" 
                    strokeWidth={3}
                    name="총자산 (억원)"
                    dot={{ fill: '#DC143C', strokeWidth: 2, r: 4 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rdInvestment" 
                    stroke="#89CDD6" 
                    strokeWidth={3}
                    name="R&D 투자 (억원)"
                    dot={{ fill: '#89CDD6', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Company Details */}
          <div className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6">
            <h2 className="text-[20px] font-bold text-[#1A1E29] font-[Pretendard] mb-6">기업 정보</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">대표자</span>
                <span className="text-[14px] font-medium text-[#1A1E29] font-[Pretendard]">{companyData.ceo}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">직원 수</span>
                <span className="text-[14px] font-medium text-[#1A1E29] font-[Inter]">{companyData.employees}명</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">총 자산</span>
                <span className="text-[14px] font-medium text-[#1A1E29] font-[Inter]">{companyData.totalAssets}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">매출액</span>
                <span className="text-[14px] font-medium text-[#1A1E29] font-[Inter]">{companyData.revenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">R&D 투자</span>
                <span className="text-[14px] font-medium text-[#1A1E29] font-[Inter]">{companyData.rdInvestment}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">영업이익률</span>
                <span className="text-[14px] font-medium text-[#00DEA3] font-[Inter]">{companyData.operatingMargin}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">보유 특허</span>
                <span className="text-[14px] font-medium text-[#1A1E29] font-[Inter]">{companyData.patents}건</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6">
          <h2 className="text-[20px] font-bold text-[#1A1E29] font-[Pretendard] mb-6">보유 기술</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyData.technologies.map((tech, index) => (
              <div 
                key={index}
                onClick={() => onNavigateToTechnology?.(tech.id)}
                className="p-6 bg-[#F8FFFE] rounded-lg border border-[#E8F4F3] hover:border-[#5FA8B4] hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#DC143C] to-[#F23985] rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <button className="text-[12px] text-[#5FA8B4] font-medium font-[Pretendard] group-hover:underline">
                    상세보기 →
                  </button>
                </div>
                <h3 className="text-[16px] font-bold text-[#1A1E29] font-[Pretendard] mb-2 group-hover:text-[#5FA8B4] transition-colors">
                  {tech.name}
                </h3>
                <p className="text-[14px] text-[#6F6C99] font-[Pretendard] mb-4">{tech.description}</p>
                <div className="flex justify-between">
                  <div className="text-center">
                    <p className="text-[12px] text-[#6F6C99] font-[Pretendard] mb-1">TRL</p>
                    <p className="text-[16px] font-bold text-[#1A1E29] font-[Inter]">{tech.trlLevel}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[12px] text-[#6F6C99] font-[Pretendard] mb-1">B/C 비율</p>
                    <p className="text-[16px] font-bold text-[#00DEA3] font-[Inter]">{tech.bcRatio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;