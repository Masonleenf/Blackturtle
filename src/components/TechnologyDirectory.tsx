import React, { useState } from 'react';
import { Search, Cpu, Zap, Beaker, Atom, ArrowRight, Calendar, CheckCircle, Clock, AlertCircle, TrendingUp, DollarSign, Building2 } from 'lucide-react';

interface TechnologyDirectoryProps {
  onNavigateToDetail?: (techId: string) => void;
}

const TechnologyDirectory = ({ onNavigateToDetail }: TechnologyDirectoryProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTrlLevel, setSelectedTrlLevel] = useState('all');
  const [sortBy, setSortBy] = useState('bcRatio');

  // 샘플 기술 데이터
  const technologies = [
    {
      id: "deep-learning-medical",
      name: "딥러닝 의료영상 진단 AI",
      category: "AI/머신러닝",
      company: "테크이노베이션",
      description: "CT, MRI 영상을 실시간으로 분석하여 암세포를 95% 정확도로 검출하는 딥러닝 알고리즘",
      bcRatio: "6.8x",
      rdCost: "45억원",
      trlLevel: 8,
      period: "2020-2024",
      status: "verified",
      marketSize: "2,400억원",
      accuracy: "95%",
      patents: 12
    },
    {
      id: "lithium-battery-material",
      name: "차세대 리튬배터리 소재",
      category: "소재",
      company: "에너지솔루션",
      description: "기존 대비 30% 향상된 에너지 밀도와 50% 연장된 수명을 제공하는 실리콘 나노구조 음극재",
      bcRatio: "4.2x",
      rdCost: "78억원",
      trlLevel: 7,
      period: "2019-2023",
      status: "verified",
      marketSize: "1,800억원",
      improvement: "30%",
      patents: 8
    },
    {
      id: "mrna-vaccine-platform",
      name: "mRNA 백신 플랫폼",
      category: "바이오",
      company: "바이오헬스",
      description: "개인 맞춤형 암 치료용 mRNA 백신 개발을 위한 범용 플랫폼 기술",
      bcRatio: "9.1x",
      rdCost: "125억원",
      trlLevel: 6,
      period: "2021-2025",
      status: "developing",
      marketSize: "5,600억원",
      effectiveness: "87%",
      patents: 15
    },
    {
      id: "quantum-cryptography",
      name: "양자암호통신 시스템",
      category: "양자기술",
      company: "퀀텀시큐어",
      description: "양자역학 원리를 이용한 해킹 불가능한 통신 보안 시스템",
      bcRatio: "12.5x",
      rdCost: "89억원",
      trlLevel: 5,
      period: "2022-2026",
      status: "research",
      marketSize: "3,200억원",
      security: "99.9%",
      patents: 6
    },
    {
      id: "graphene-display",
      name: "그래핀 투명 디스플레이",
      category: "나노기술",
      company: "나노디스플레이",
      description: "투명도 95% 이상의 플렉서블 그래핀 기반 투명 디스플레이 기술",
      bcRatio: "5.7x",
      rdCost: "67억원",
      trlLevel: 7,
      period: "2020-2024",
      status: "verified",
      marketSize: "2,100억원",
      transparency: "95%",
      patents: 10
    },
    {
      id: "fusion-reactor-control",
      name: "핵융합 플라즈마 제어",
      category: "에너지",
      company: "퓨전에너지",
      description: "인공지능 기반 핵융합 플라즈마 실시간 제어 시스템",
      bcRatio: "15.2x",
      rdCost: "156억원",
      trlLevel: 4,
      period: "2021-2027",
      status: "research",
      marketSize: "8,900억원",
      efficiency: "78%",
      patents: 4
    }
  ];

  const categories = [
    { value: 'all', label: '전체 분야', icon: Cpu },
    { value: 'AI/머신러닝', label: 'AI/머신러닝', icon: Cpu },
    { value: '바이오', label: '바이오', icon: Beaker },
    { value: '소재', label: '소재', icon: Atom },
    { value: '양자기술', label: '양자기술', icon: Zap },
    { value: '나노기술', label: '나노기술', icon: Atom },
    { value: '에너지', label: '에너지', icon: Zap }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'verified':
        return { label: '검증완료', color: 'text-[#00DEA3] bg-[#00DEA3]/10', icon: CheckCircle };
      case 'developing':
        return { label: '개발중', color: 'text-[#FFCC40] bg-[#FFCC40]/10', icon: Clock };
      case 'research':
        return { label: '연구단계', color: 'text-[#5FA8B4] bg-[#5FA8B4]/10', icon: AlertCircle };
      default:
        return { label: '검토중', color: 'text-[#6F6C99] bg-[#6F6C99]/10', icon: Clock };
    }
  };

  const filteredTechnologies = technologies.filter(tech => {
    const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tech.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tech.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tech.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || tech.category === selectedCategory;
    const matchesTrl = selectedTrlLevel === 'all' || tech.trlLevel.toString() === selectedTrlLevel;
    
    return matchesSearch && matchesCategory && matchesTrl;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FFFE] via-[#F0F9F8] to-[#E8F4F3]">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-[#1A1E29] font-[Pretendard] tracking-[0.384px] mb-2">
            핵심 기술 현황
          </h1>
          <p className="text-[16px] text-[#6F6C99] font-[Pretendard] tracking-[-0.28px]">
            NTIS 기반 검증된 사업화 기술 포트폴리오
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#5FA8B4] to-[#89CDD6] flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#00DEA3]" />
            </div>
            <h3 className="text-[14px] text-[#6F6C99] font-[Pretendard] mb-2">등록 기술</h3>
            <p className="text-[24px] font-bold text-[#1A1E29] font-[Inter]">{technologies.length}개</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#DC143C] to-[#F23985] flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#00DEA3]" />
            </div>
            <h3 className="text-[14px] text-[#6F6C99] font-[Pretendard] mb-2">검증완료</h3>
            <p className="text-[24px] font-bold text-[#1A1E29] font-[Inter]">
              {technologies.filter(t => t.status === 'verified').length}개
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#A8D5DD] to-[#5FA8B4] flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#00DEA3]" />
            </div>
            <h3 className="text-[14px] text-[#6F6C99] font-[Pretendard] mb-2">평균 B/C</h3>
            <p className="text-[24px] font-bold text-[#1A1E29] font-[Inter]">7.2x</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#89CDD6] to-[#A8D5DD] flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <TrendingUp className="w-5 h-5 text-[#00DEA3]" />
            </div>
            <h3 className="text-[14px] text-[#6F6C99] font-[Pretendard] mb-2">참여기업</h3>
            <p className="text-[24px] font-bold text-[#1A1E29] font-[Inter]">
              {new Set(technologies.map(t => t.company)).size}개
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search */}
            <div className="lg:col-span-5 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#AEB6CF] w-5 h-5" />
              <input
                type="text"
                placeholder="기술명, 분야, 기업명으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[48px] pl-12 pr-4 bg-[#F8FFFE] border border-[#E8F4F3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-[Pretendard] text-[14px] tracking-[-0.28px] placeholder:text-[#AEB6CF]"
              />
            </div>

            {/* Category Filter */}
            <div className="lg:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-[48px] px-4 bg-white border border-[#E4E7ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-[Pretendard] text-[14px] tracking-[-0.28px]"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* TRL Filter */}
            <div className="lg:col-span-2">
              <select
                value={selectedTrlLevel}
                onChange={(e) => setSelectedTrlLevel(e.target.value)}
                className="w-full h-[48px] px-4 bg-white border border-[#E4E7ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-[Pretendard] text-[14px] tracking-[-0.28px]"
              >
                <option value="all">전체 TRL</option>
                {[4,5,6,7,8,9].map(level => (
                  <option key={level} value={level.toString()}>TRL {level}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="lg:col-span-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-[48px] px-4 bg-white border border-[#E4E7ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-[Pretendard] text-[14px] tracking-[-0.28px]"
              >
                <option value="bcRatio">B/C 비율순</option>
                <option value="trlLevel">TRL 레벨순</option>
                <option value="rdCost">R&D 투자순</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-[16px] text-[#6F6C99] font-[Pretendard] tracking-[-0.28px]">
            총 <span className="font-bold text-[#1A1E29]">{filteredTechnologies.length}</span>개 기술
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTechnologies.map((tech) => {
            const statusInfo = getStatusInfo(tech.status);
            const StatusIcon = statusInfo.icon;
            
            return (
              <div
                key={tech.id}
                onClick={() => onNavigateToDetail?.(tech.id)}
                className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] hover:border-[#5FA8B4] transition-all duration-300 cursor-pointer group"
              >
                {/* Tech Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#5FA8B4] to-[#89CDD6] rounded-xl flex items-center justify-center text-[24px]">
                      {categories.find(c => c.value === tech.category)?.icon && 
                        React.createElement(categories.find(c => c.value === tech.category)!.icon, {
                          className: "w-7 h-7 text-white"
                        })
                      }
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-bold text-[#1A1E29] font-[Pretendard] tracking-[0.288px] mb-2 group-hover:text-[#5FA8B4] transition-colors">
                        {tech.name}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-[12px] bg-[#5FA8B4]/10 text-[#5FA8B4] px-2 py-1 rounded-full font-[Pretendard]">
                          {tech.category}
                        </span>
                        <span className={`text-[12px] px-2 py-1 rounded-full font-[Pretendard] flex items-center space-x-1 ${statusInfo.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          <span>{statusInfo.label}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#AEB6CF] group-hover:text-[#5FA8B4] group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-[14px] text-[#6F6C99] font-[Pretendard] mb-6 leading-relaxed">
                  {tech.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-[#F8FFFE] rounded-lg p-3 border border-[#E8F4F3]">
                    <p className="text-[12px] text-[#6F6C99] font-[Pretendard] mb-1">B/C 비율</p>
                    <p className="text-[16px] font-bold text-[#00DEA3] font-[Inter]">{tech.bcRatio}</p>
                  </div>
                  <div className="bg-[#F8FFFE] rounded-lg p-3 border border-[#E8F4F3]">
                    <p className="text-[12px] text-[#6F6C99] font-[Pretendard] mb-1">TRL</p>
                    <p className="text-[16px] font-bold text-[#1A1E29] font-[Inter]">{tech.trlLevel}</p>
                  </div>
                  <div className="bg-[#F8FFFE] rounded-lg p-3 border border-[#E8F4F3]">
                    <p className="text-[12px] text-[#6F6C99] font-[Pretendard] mb-1">R&D 투자</p>
                    <p className="text-[16px] font-bold text-[#1A1E29] font-[Inter]">{tech.rdCost}</p>
                  </div>
                </div>

                {/* Company & Period */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E8F4F3]">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-4 h-4 text-[#6F6C99]" />
                    <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">{tech.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-[#6F6C99]" />
                    <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">{tech.period}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {filteredTechnologies.length > 12 && (
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

export default TechnologyDirectory;