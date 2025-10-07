import React from 'react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface HeroSectionProps {
  onNavigateToCompanies?: () => void;
}

const HeroSection = ({ onNavigateToCompanies }: HeroSectionProps) => {
  // 샘플 데이터
  const pieData = [
    { name: 'IT/SW', value: 35, color: '#5FA8B4' },
    { name: '바이오', value: 25, color: '#89CDD6' },
    { name: '제조', value: 20, color: '#A8D5DD' },
    { name: '기타', value: 20, color: '#E8F4F6' }
  ];

  const growthData = [
    { month: '1월', value: 100 },
    { month: '2월', value: 120 },
    { month: '3월', value: 135 },
    { month: '4월', value: 155 },
    { month: '5월', value: 180 },
    { month: '6월', value: 210 }
  ];

  return (
    <section className="min-h-[85vh] flex items-center">
      <div className="max-w-[1440px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-6">
              <p className="text-[14px] font-bold text-[#DC143C] uppercase tracking-wider font-[Pretendard]">
                검증된 사업화 실적 데이터
              </p>
              
              <h1 className="text-4xl lg:text-[64px] font-bold text-[#2C3E50] leading-tight max-w-[600px] font-[Pretendard]">
                투자가치 높은 기술기업을 발굴하세요
              </h1>
              
              <p className="text-xl text-[#5D6D7E] leading-[1.7] max-w-[550px] font-[Pretendard]">
                NTIS 기반 기술료 납부 데이터로 검증된 사업화 성과를 독점 제공합니다
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onNavigateToCompanies}
                className="bg-[#DC143C] text-white text-base font-semibold px-10 py-4 rounded-[28px] hover:bg-[#B91C3C] hover:shadow-lg transition-all duration-200 font-[Pretendard]"
              >
                기업 검색하기
              </button>
              <button className="bg-transparent border-2 border-[#DC143C] text-[#DC143C] text-base font-semibold px-10 py-4 rounded-[28px] hover:bg-[#DC143C] hover:text-white transition-all duration-200 font-[Pretendard]">
                플랫폼 소개
              </button>
            </div>
          </div>

          {/* Right Column - 40% */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
              <div className="space-y-8">
                {/* 검증된 기업 수 */}
                <div className="text-center">
                  <div className="text-[48px] font-bold text-[#DC143C] font-[JetBrains_Mono]">
                    1,247
                  </div>
                  <div className="text-[16px] text-[#5D6D7E] uppercase tracking-wider font-[Pretendard]">
                    검증된 기업
                  </div>
                </div>

                {/* B/C 비율 */}
                <div className="text-center">
                  <div className="text-[32px] font-bold text-[#DC143C] font-[JetBrains_Mono]">
                    평균 B/C 4.7x
                  </div>
                  <div className="text-[14px] text-[#5D6D7E] font-[Pretendard]">
                    투자 대비 수익률
                  </div>
                </div>

                {/* 기술 분야 파이 차트 */}
                <div>
                  <h4 className="text-center text-[16px] font-semibold text-[#2C3E50] mb-4 font-[Pretendard]">
                    기술 분야 분포
                  </h4>
                  <ResponsiveContainer width="100%" height={180}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {pieData.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-[12px] text-[#5D6D7E] font-[Pretendard]">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 성장 트렌드 */}
                <div>
                  <h4 className="text-center text-[16px] font-semibold text-[#2C3E50] mb-4 font-[Pretendard]">
                    투자 성장 트렌드
                  </h4>
                  <ResponsiveContainer width="100%" height={120}>
                    <LineChart data={growthData}>
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                      <YAxis hide />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#DC143C" 
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;