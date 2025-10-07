import React, { useState } from 'react';
import { Download, TrendingUp, TrendingDown, Building2, Target, DollarSign, BarChart3, Cpu, Beaker, Zap, Users, Calendar, Award, ArrowUp, ArrowDown, Filter } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  ResponsiveContainer, 
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Tooltip, 
  Legend
} from 'recharts';

const MarketAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('2024');
  
  // KPI Metrics
  const kpiMetrics = [
    {
      icon: Building2,
      title: "R&D 수행 기업",
      value: "1,847개",
      change: "+15.2%",
      trend: "up",
      color: "from-[#5FA8B4] to-[#89CDD6]"
    },
    {
      icon: Target,
      title: "평균 B/C 비율",
      value: "5.9x",
      change: "+8.7%",
      trend: "up",
      color: "from-[#DC143C] to-[#F23985]"
    },
    {
      icon: DollarSign,
      title: "R&D 투자금액",
      value: "3,247억",
      change: "+22.1%",
      trend: "up",
      color: "from-[#A8D5DD] to-[#5FA8B4]"
    },
    {
      icon: Award,
      title: "사업화실적",
      value: "12,223억",
      change: "+3.2%",
      trend: "up",
      color: "from-[#89CDD6] to-[#A8D5DD]"
    }
  ];

  // Industry Performance Data
  const industryData = [
    { name: 'AI/ML', bcRatio: 6.8, companies: 342, investment: 847, color: '#5FA8B4' },
    { name: '바이오', bcRatio: 8.2, companies: 298, investment: 1245, color: '#DC143C' },
    { name: '에너지', bcRatio: 4.3, companies: 187, investment: 523, color: '#89CDD6' },
    { name: '소재', bcRatio: 5.1, companies: 234, investment: 678, color: '#A8D5DD' },
    { name: '반도체', bcRatio: 7.6, companies: 156, investment: 934, color: '#F23985' },
    { name: '로봇', bcRatio: 3.9, companies: 123, investment: 456, color: '#00DEA3' }
  ];

  // Monthly Trend Data
  const monthlyTrendData = [
    { month: '1월', investment: 245, companies: 23, bcRatio: 5.2 },
    { month: '2월', investment: 312, companies: 31, bcRatio: 5.8 },
    { month: '3월', investment: 289, companies: 28, bcRatio: 6.1 },
    { month: '4월', investment: 356, companies: 35, bcRatio: 6.4 },
    { month: '5월', investment: 398, companies: 42, bcRatio: 6.0 },
    { month: '6월', investment: 445, companies: 48, bcRatio: 6.7 },
    { month: '7월', investment: 423, companies: 39, bcRatio: 6.2 },
    { month: '8월', investment: 467, companies: 44, bcRatio: 6.8 },
    { month: '9월', investment: 512, companies: 52, bcRatio: 7.1 },
    { month: '10월', investment: 489, companies: 46, bcRatio: 6.9 },
    { month: '11월', investment: 534, companies: 55, bcRatio: 7.3 },
    { month: '12월', investment: 578, companies: 61, bcRatio: 7.5 }
  ];

  // Regional Distribution Data
  const regionalData = [
    { name: '서울', value: 34, color: '#5FA8B4' },
    { name: '경기', value: 28, color: '#DC143C' },
    { name: '대전', value: 15, color: '#89CDD6' },
    { name: '부산', value: 12, color: '#A8D5DD' },
    { name: '기타', value: 11, color: '#F23985' }
  ];

  // Top Performers
  const topPerformers = [
    { rank: 1, company: "바이오헬스케어", industry: "바이오", bcRatio: "12.8x", investment: "156억원", growth: "+89%" },
    { rank: 2, company: "퀀텀AI", industry: "AI/ML", bcRatio: "11.4x", investment: "134억원", growth: "+67%" },
    { rank: 3, company: "그린에너지텍", industry: "에너지", bcRatio: "10.2x", investment: "98억원", growth: "+54%" },
    { rank: 4, company: "나노소재", industry: "소재", bcRatio: "9.7x", investment: "87억원", growth: "+43%" },
    { rank: 5, company: "로보틱스코리아", industry: "로봇", bcRatio: "8.9x", investment: "76억원", growth: "+38%" }
  ];

  const COLORS = ['#5FA8B4', '#DC143C', '#89CDD6', '#A8D5DD', '#F23985'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FFFE] via-[#F0F9F8] to-[#E8F4F3]">
      <div className="max-w-[1440px] mx-auto px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-[32px] font-bold text-[#1A1E29] font-[Pretendard] tracking-[0.384px] mb-2">
              시장 분석 리포트
            </h1>
            <p className="text-[16px] text-[#6F6C99] font-[Pretendard] tracking-[-0.28px]">
              데이터 기반 투자 인사이트 및 시장 동향 분석
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 bg-white border border-[#E4E7ED] rounded-lg text-[14px] font-[Pretendard] focus:outline-none focus:ring-2 focus:ring-[#5FA8B4]"
            >
              <option value="2024">2024년</option>
              <option value="2023">2023년</option>
              <option value="2022">2022년</option>
            </select>
            <button className="flex items-center space-x-2 bg-[#DC143C] text-white px-4 py-2 rounded-lg hover:bg-[#B91C3C] transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-[14px] font-[Pretendard]">리포트 다운로드</span>
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED]">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center space-x-1 text-sm font-medium ${
                    metric.trend === 'up' ? 'text-[#00DEA3]' : 'text-[#F23985]'
                  }`}>
                    {metric.trend === 'up' ? (
                      <ArrowUp className="w-4 h-4" />
                    ) : (
                      <ArrowDown className="w-4 h-4" />
                    )}
                    <span className="font-[Inter]">{metric.change}</span>
                  </div>
                </div>
                <h3 className="text-[14px] text-[#6F6C99] font-[Pretendard] mb-2">{metric.title}</h3>
                <p className="text-[24px] font-bold text-[#1A1E29] font-[Inter]">{metric.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Monthly Investment Trend */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[20px] font-bold text-[#1A1E29] font-[Pretendard]">TRL 단계별 B/C 분석</h2>
              <div className="flex items-center space-x-4 text-[12px] font-[Pretendard]">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#5FA8B4] rounded-full"></div>
                  <span className="text-[#6F6C99]">평균 B/C 비율</span>
                </div>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={[
                  { trl: 'TRL 3', bc: 1.2, count: 5 },
                  { trl: 'TRL 4', bc: 1.8, count: 8 },
                  { trl: 'TRL 5', bc: 2.4, count: 12 },
                  { trl: 'TRL 6', bc: 3.1, count: 15 },
                  { trl: 'TRL 7', bc: 3.7, count: 18 },
                  { trl: 'TRL 8', bc: 4.2, count: 22 },
                  { trl: 'TRL 9', bc: 4.8, count: 16 }
                ]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <XAxis 
                    dataKey="trl" 
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
                    label={{ value: 'B/C 비율', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fontSize: '12px', fill: '#6F6C99' } }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E4E7ED',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value, name) => [
                      name === 'bc' ? `${value}` : value,
                      name === 'bc' ? 'B/C 비율' : name === 'count' ? '기업수' : name
                    ]}
                  />
                  <Bar 
                    dataKey="bc" 
                    fill="#5FA8B4"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Regional Distribution */}
          <div className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6">
            <h2 className="text-[20px] font-bold text-[#1A1E29] font-[Pretendard] mb-6">지역별 분포</h2>
            <div className="h-[200px] mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionalData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    dataKey="value"
                  >
                    {regionalData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E4E7ED',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {regionalData.map((region, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: COLORS[index] }}
                    ></div>
                    <span className="text-[14px] text-[#6F6C99] font-[Pretendard]">{region.name}</span>
                  </div>
                  <span className="text-[14px] font-bold text-[#1A1E29] font-[Inter]">{region.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Industry Performance */}
          <div className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6">
            <h2 className="text-[20px] font-bold text-[#1A1E29] font-[Pretendard] mb-6">업종별 성과</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryData} layout="horizontal">
                  <XAxis type="number" axisLine={false} tickLine={false} fontSize={12} fill="#6F6C99" />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    fontSize={12} 
                    fill="#6F6C99" 
                    width={60}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #E4E7ED',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="bcRatio" radius={[0, 4, 4, 0]}>
                    {industryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Performers */}
          <div className="bg-white rounded-xl shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] border border-[#E4E7ED] p-6">
            <h2 className="text-[20px] font-bold text-[#1A1E29] font-[Pretendard] mb-6">상위 성과 기업</h2>
            <div className="space-y-4">
              {topPerformers.map((performer) => (
                <div 
                  key={performer.rank} 
                  className="flex items-center p-4 bg-[#F8FFFE] rounded-lg border border-[#E8F4F3]"
                >
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-[#5FA8B4] to-[#89CDD6] rounded-lg text-white font-bold text-[14px] font-[Inter] mr-4">
                    {performer.rank}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[14px] font-bold text-[#1A1E29] font-[Pretendard] mb-1">
                      {performer.company}
                    </h4>
                    <p className="text-[12px] text-[#6F6C99] font-[Pretendard]">{performer.industry}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] font-bold text-[#00DEA3] font-[Inter] mb-1">
                      {performer.bcRatio}
                    </p>
                    <p className="text-[12px] text-[#6F6C99] font-[Inter]">{performer.investment}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span className="text-[12px] font-bold text-[#00DEA3] font-[Inter]">
                      {performer.growth}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalytics;