import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeaturedCompaniesProps {
  onNavigateToCompany?: (companyId: string) => void;
}

const FeaturedCompanies = ({ onNavigateToCompany }: FeaturedCompaniesProps) => {
  const companies = [
    {
      id: "tech-innovation",
      name: "테크이노베이션",
      industry: "AI/머신러닝",
      bcRatio: "6.2x",
      description: "딥러닝 기반 의료영상 진단 솔루션으로 글로벌 시장 진출"
    },
    {
      id: "bio-solution",
      name: "바이오솔루션",
      industry: "바이오헬스",
      bcRatio: "4.8x",
      description: "신약개발 플랫폼 기술로 다국적 제약회사와 기술이전 성공"
    },
    {
      id: "green-energy",
      name: "그린에너지텍",
      industry: "신재생에너지",
      bcRatio: "5.1x",
      description: "차세대 태양전지 기술로 에너지 효율성 30% 향상 달성"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-[36px] font-semibold text-[#2C3E50] font-[Pretendard]">
            주목할만한 기업
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 border-l-4 border-[#DC143C] cursor-pointer"
              onClick={() => onNavigateToCompany?.(company.id)}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-[24px] font-bold text-[#2C3E50] mb-3 font-[Pretendard]">
                    {company.name}
                  </h3>
                  
                  <div className="inline-block bg-[#5FA8B4] text-white px-3 py-1 rounded-full text-[12px] font-semibold font-[Pretendard]">
                    {company.industry}
                  </div>
                </div>

                <div className="text-center py-4">
                  <div className="text-[48px] font-bold text-[#DC143C] font-[JetBrains_Mono]">
                    {company.bcRatio}
                  </div>
                  <div className="text-[14px] text-[#5D6D7E] uppercase tracking-wider font-[Pretendard]">
                    B/C 비율
                  </div>
                </div>

                <p className="text-[14px] text-[#5D6D7E] leading-relaxed font-[Pretendard]">
                  {company.description}
                </p>

                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateToCompany?.(company.id);
                  }}
                  className="flex items-center gap-2 text-[#DC143C] font-semibold hover:gap-3 transition-all duration-200 font-[Pretendard]"
                >
                  상세보기
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;