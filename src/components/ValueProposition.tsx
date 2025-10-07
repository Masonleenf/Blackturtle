import React from 'react';
import { Shield, Lock, Zap } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Shield,
      title: "검증된 데이터",
      description: "기술료 납부로 검증된 실제 사업화 성과"
    },
    {
      icon: Lock,
      title: "독점 정보",
      description: "NTIS 연계 독점 제공 데이터"
    },
    {
      icon: Zap,
      title: "빠른 발굴",
      description: "AI 기반 투자가치 스크리닝"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-semibold text-[#2C3E50] font-[Pretendard]">
            왜 BlackTutle인가?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-[#DC143C] rounded-full flex items-center justify-center">
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-[24px] font-semibold text-[#2C3E50] mb-4 font-[Pretendard]">
                  {feature.title}
                </h3>
                
                <p className="text-[16px] text-[#5D6D7E] leading-relaxed max-w-[300px] mx-auto font-[Pretendard]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;