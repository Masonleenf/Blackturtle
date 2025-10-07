import React, { useState } from 'react';
import { Search, ChevronDown, Building2, MapPin, Calendar, TrendingUp, DollarSign, Cpu, ArrowRight, Filter } from 'lucide-react';

interface CompanyDirectoryProps {
  onNavigateToCompany?: (companyId: string) => void;
}

const CompanyDirectory = ({ onNavigateToCompany }: CompanyDirectoryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedAssetSize, setSelectedAssetSize] = useState('all');
  const [sortBy, setSortBy] = useState('bcRatio');

  // 샘플 기업 데이터
  const companies = [
    {
      id: "tech-innovation",
      name: "테크이노베이션",
      industry: "AI/머신러닝",
      location: "서울",
      founded: 2018,
      totalAssets: "285억원",
      revenue: "127억원",
      rdInvestment: "45억원",
      mainTech: "딥러닝 의료영상 진단",
      bcRatio: "6.2x",
      trlLevel: 8,
      growthRate: "+15.2%",
      employees: 42
    },
    {
      id: "bio-solution", 
      name: "바이오솔루션",
      industry: "바이오헬스",
      location: "대전",
      founded: 2016,
      totalAssets: "412억원",
      revenue: "198억원",
      rdInvestment: "78억원",
      mainTech: "신약개발 플랫폼",
      bcRatio: "4.8x",
      trlLevel: 7,
      growthRate: "+22.5%",
      employees: 67
    },
    {
      id: "green-energy",
      name: "그린에너지텍", 
      industry: "신재생에너지",
      location: "부산",
      founded: 2019,
      totalAssets: "356억원",
      revenue: "142억원",
      rdInvestment: "62억원",
      mainTech: "차세대 태양전지",
      bcRatio: "5.1x",
      trlLevel: 9,
      growthRate: "+8.7%",
      employees: 29
    },
    {
      id: "smart-material",
      name: "스마트머티리얼",
      industry: "신소재",
      location: "경기",
      founded: 2017,
      totalAssets: "523억원",
      revenue: "267억원",
      rdInvestment: "95억원",
      mainTech: "나노소재 개발",
      bcRatio: "7.3x",
      trlLevel: 8,
      growthRate: "+18.9%",
      employees: 85
    },
    {
      id: "robot-tech",
      name: "로봇테크놀로지",
      industry: "로보틱스",
      location: "인천",
      founded: 2020,
      totalAssets: "167억원",
      revenue: "73억원",
      rdInvestment: "41억원",
      mainTech: "산업용 로봇 제어",
      bcRatio: "3.2x",
      trlLevel: 6,
      growthRate: "+45.1%",
      employees: 34
    },
    {
      id: "quantum-sys",
      name: "퀀텀시스템즈",
      industry: "양자기술",
      location: "대구",
      founded: 2021,
      totalAssets: "98억원",
      revenue: "32억원",
      rdInvestment: "67억원",
      mainTech: "양자컴퓨팅 하드웨어",
      bcRatio: "2.8x",
      trlLevel: 5,
      growthRate: "+78.3%",
      employees: 19
    }
  ];

  const industries = [
    { value: 'all', label: '전체 업종' },
    { value: 'AI/머신러닝', label: 'AI/머신러닝' },
    { value: '바이오헬스', label: '바이오헬스' },
    { value: '신재생에너지', label: '신재생에너지' },
    { value: '신소재', label: '신소재' },
    { value: '로보틱스', label: '로보틱스' },
    { value: '양자기술', label: '양자기술' }
  ];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.mainTech.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
    
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FFFE] via-[#F0F9F8] to-[#E8F4F3]">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-[#1A1E29] font-[Pretendard] tracking-[0.384px] mb-2">
            투자대상 기업검색
          </h1>
          <p className="text-[16px] text-[#6F6C99] font-[Pretendard] tracking-[-0.28px]">
            NTIS 검증된 기술보유 기업 현황
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search */}
            <div className="lg:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#AEB6CF] w-5 h-5" />
              <input
                type="text"
                placeholder="기업명, 기술명, 업종으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[48px] pl-12 pr-4 bg-[#F8FFFE] border border-[#E8F4F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-[Pretendard] text-[14px] tracking-[-0.28px] placeholder:text-[#AEB6CF]"
              />
            </div>

            {/* Industry Filter */}
            <div className="lg:col-span-3">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full h-[48px] px-4 bg-white border border-[#E4E7ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-[Pretendard] text-[14px] tracking-[-0.28px]"
              >
                {industries.map(industry => (
                  <option key={industry.value} value={industry.value}>
                    {industry.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:col-span-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-[48px] px-4 bg-white border border-[#E4E7ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-[Pretendard] text-[14px] tracking-[-0.28px]"
              >
                <option value="bcRatio">B/C 비율 높은순</option>
                <option value="revenue">매출액 높은순</option>
                <option value="growthRate">성장률 높은순</option>
                <option value="founded">설립연도 최신순</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-[16px] text-[#6F6C99] font-[Pretendard] tracking-[-0.28px]">
            총 <span className="font-bold text-[#1A1E29]">{filteredCompanies.length}</span>개 기업
          </p>
          <div className="flex items-center space-x-2 text-[14px] text-[#6F6C99] font-[Pretendard]">
            <Filter className="w-4 h-4" />
            <span>필터 적용됨</span>
          </div>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              onClick={() => onNavigateToCompany?.(company.id)}
              className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] hover:border-[#5FA8B4] transition-all duration-300 cursor-pointer group"
            >
              {/* Company Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5FA8B4] to-[#89CDD6] rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#1A1E29] font-[Pretendard] tracking-[0.288px] group-hover:text-[#5FA8B4] transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-[12px] text-[#6F6C99] font-[Pretendard] tracking-[-0.24px]">
                      {company.industry}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#AEB6CF] group-hover:text-[#5FA8B4] group-hover:translate-x-1 transition-all" />
              </div>

              {/* Company Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-[#6F6C99] font-[Pretendard]">주요기술</span>
                  <span className="text-[#1A1E29] font-medium font-[Pretendard]">{company.mainTech}</span>
                </div>
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-[#6F6C99] font-[Pretendard]">위치</span>
                  <span className="text-[#1A1E29] font-medium font-[Pretendard] flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {company.location}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-[#6F6C99] font-[Pretendard]">설립</span>
                  <span className="text-[#1A1E29] font-medium font-[Pretendard] flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {company.founded}년
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#F8FFFE] rounded-lg p-3 border border-[#E8F4F3]">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-[#00DEA3]" />
                    <span className="text-[12px] text-[#6F6C99] font-[Pretendard]">B/C 비율</span>
                  </div>
                  <p className="text-[16px] font-bold text-[#00DEA3] font-[Inter]">{company.bcRatio}</p>
                </div>
                <div className="bg-[#F8FFFE] rounded-lg p-3 border border-[#E8F4F3]">
                  <div className="flex items-center space-x-2 mb-1">
                    <DollarSign className="w-4 h-4 text-[#5FA8B4]" />
                    <span className="text-[12px] text-[#6F6C99] font-[Pretendard]">매출액</span>
                  </div>
                  <p className="text-[16px] font-bold text-[#1A1E29] font-[Inter]">{company.revenue}</p>
                </div>
              </div>

              {/* Growth Indicator */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#00DEA3] rounded-full"></div>
                  <span className="text-[12px] text-[#6F6C99] font-[Pretendard]">성장률</span>
                </div>
                <span className="text-[14px] font-bold text-[#00DEA3] font-[Inter]">{company.growthRate}</span>
              </div>

              {/* Tags */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#E8F4F3]">
                <div className="flex space-x-2">
                  <span className="text-[10px] bg-[#5FA8B4]/10 text-[#5FA8B4] px-2 py-1 rounded-full font-[Pretendard]">
                    TRL {company.trlLevel}
                  </span>
                  <span className="text-[10px] bg-[#DC143C]/10 text-[#DC143C] px-2 py-1 rounded-full font-[Pretendard]">
                    직원 {company.employees}명
                  </span>
                </div>
                <button className="text-[12px] text-[#5FA8B4] font-medium font-[Pretendard] hover:underline">
                  상세보기 →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredCompanies.length > 12 && (
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-white border border-[#E4E7ED] rounded-lg text-[14px] font-[Pretendard] hover:bg-[#F8FFFE] transition-colors">
                이전
              </button>
              <button className="px-4 py-2 bg-[#5FA8B4] text-white rounded-lg text-[14px] font-[Pretendard]">
                1
              </button>
              <button className="px-4 py-2 bg-white border border-[#E4E7ED] rounded-lg text-[14px] font-[Pretendard] hover:bg-[#F8FFFE] transition-colors">
                2
              </button>
              <button className="px-4 py-2 bg-white border border-[#E4E7ED] rounded-lg text-[14px] font-[Pretendard] hover:bg-[#F8FFFE] transition-colors">
                다음
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyDirectory;