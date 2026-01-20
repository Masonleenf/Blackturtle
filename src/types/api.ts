// API 응답 타입 정의
export interface APICompany {
  company_id: number;
  id: string;
  name: string;
  industry: string | null;
  region: string | null;
  location: string | null;
  founded: number | null;
  ceo: string | null;
  website: string | null;
  phone: string | null;
  email: string | null;
  description: string | null;
  total_assets: number | null;
  employee_count: number | null;
}

export interface APITechnology {
  technology_id: number;
  id: string;
  company_id: string;
  name: string;
  description: string | null;
  category: string | null;
  government_investment: number | null;
  company_investment: number | null;
  commercialization_revenue: number | null;
  development_start_date: string | null;
  development_end_date: string | null;
  trl_level: number | null;
  commercialization_status: string | null;
  market_size: number | null;
  verification_date: string | null;
  verification_org: string | null;
  patents_filed: number;
}

// 프론트엔드 UI 타입 (기존 mockData 타입)
export interface UICompany {
  id: string;
  name: string;
  industry: string;
  location: string;
  founded: number;
  totalAssets: string;
  revenue: string;
  rdInvestment: string;
  mainTech: string;
  bcRatio: string;
  trlLevel: number;
  growthRate: string;
  employees: number;
}

// API → UI 변환 함수
export function convertAPICompanyToUI(
  apiCompany: APICompany,
  latestFinancial?: APIFinancial
): UICompany {
  return {
    id: apiCompany.id,
    name: apiCompany.name,
    industry: apiCompany.industry || '미분류',
    location: apiCompany.location || apiCompany.region || '미정',
    founded: apiCompany.founded || 0,
    totalAssets: formatCurrency(apiCompany.total_assets),
    revenue: formatCurrency(latestFinancial?.revenue),
    rdInvestment: formatCurrency(latestFinancial?.rd_investment),
    mainTech: '조회 필요', // 별도 API 호출 필요
    bcRatio: 'N/A', // 계산 필요
    trlLevel: 0, // 기술 정보에서 가져와야 함
    growthRate: calculateGrowthRate(latestFinancial),
    employees: apiCompany.employee_count || 0,
  };
}

function formatCurrency(value: number | null | undefined): string {
  if (!value) return '₩0';
  
  if (value >= 1000000000000) {
    return `₩${(value / 1000000000000).toFixed(1)}조`;
  } else if (value >= 100000000) {
    return `₩${(value / 100000000).toFixed(0)}억`;
  } else if (value >= 10000) {
    return `₩${(value / 10000).toFixed(0)}만`;
  }
  return `₩${value.toLocaleString()}`;
}

function calculateGrowthRate(financial?: APIFinancial): string {
  // TODO: 전년 대비 성장률 계산 로직
  return '+0%';
}