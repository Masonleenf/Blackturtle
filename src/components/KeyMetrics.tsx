import React from 'react';
import { Building2, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';

const KeyMetrics = () => {
  const metrics = [
    {
      icon: Building2,
      number: "1,247",
      label: "검증기업",
      description: "NTIS 기반 검증된 기업"
    },
    {
      icon: TrendingUp,
      number: "4.7x",
      label: "평균 B/C",
      description: "투자 대비 수익률"
    },
    {
      icon: DollarSign,
      number: "₩2.4조",
      label: "투자액",
      description: "누적 투자 규모"
    },
    {
      icon: CheckCircle,
      number: "87%",
      label: "성공률",
      description: "사업화 성공률"
    }
  ];

  return (
    <section className="py-24 bg-white/10 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-[20px] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#5FA8B4] rounded-full flex items-center justify-center">
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>
                
                <div className="text-[48px] font-bold text-[#DC143C] mb-2 font-[JetBrains_Mono]">
                  {metric.number}
                </div>
                
                <div className="text-[16px] text-[#5D6D7E] uppercase tracking-wider font-semibold mb-2 font-[Pretendard]">
                  {metric.label}
                </div>
                
                <div className="text-[14px] text-[#5D6D7E] font-[Pretendard]">
                  {metric.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;