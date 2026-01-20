// src/services/apiClient.ts
// FastAPI 백엔드와 통신하기 위한 API 클라이언트

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

// 토큰 저장/조회 함수
export const getAccessToken = (): string | null => {
  return localStorage.getItem('access_token');
};

export const setAccessToken = (token: string): void => {
  localStorage.setItem('access_token', token);
};

export const removeAccessToken = (): void => {
  localStorage.removeItem('access_token');
};

// API 요청 함수
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAccessToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      removeAccessToken();
      window.location.href = '/login';
    }
    const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
    throw new Error(error.detail || `HTTP ${response.status}`);
  }

  return response.json();
}

// API 인터페이스 타입
export interface LoginRequest {
  username: string;  // FastAPI OAuth2는 email을 username으로 받음
  password: string;
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
}

export interface Company {
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

export interface CompaniesResponse {
  data: Company[];
  count: number;
}

export interface Technology {
  technology_id: number;
  id: string;
  name: string;
  category: string | null;
  government_investment: number | null;
  company_investment: number | null;
  commercialization_revenue: number | null;
  description: string | null;
  development_start_date: string | null;
  development_end_date: string | null;
  trl_level: number | null;
  commercialization_status: string | null;
  market_size: number | null;
  verification_date: string | null;
  verification_org: string | null;
  patents_filed: number;
}

export interface TechnologiesResponse {
  data: Technology[];
  count: number;
}

export interface CompanyFinancial {
  financial_id: number;
  company_id: string;
  year: number;
  revenue: number | null;
  assets: number | null;
  operating_profit: number | null;
  cost_of_sales: number | null;
  rd_investment: number | null;
}

// API 클라이언트
export const apiClient = {
  // 인증
  auth: {
    login: async (credentials: LoginRequest): Promise<TokenResponse> => {
      const formData = new URLSearchParams();
      formData.append('username', credentials.username);
      formData.append('password', credentials.password);

      const response = await fetch(`${API_BASE_URL}/login/access-token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      return response.json();
    },
    
    testToken: async () => {
      return request('/login/test-token');
    },
  },

  // 기업 API
  companies: {
    list: async (params?: { skip?: number; limit?: number }): Promise<CompaniesResponse> => {
      const queryParams = new URLSearchParams();
      if (params?.skip) queryParams.append('skip', params.skip.toString());
      if (params?.limit) queryParams.append('limit', params.limit.toString());
      
      const query = queryParams.toString();
      return request(`/companies${query ? `?${query}` : ''}`);
    },

    get: async (companyId: number): Promise<Company> => {
      return request(`/companies/${companyId}`);
    },
  },

  // 기술 API
  technologies: {
    list: async (params?: { skip?: number; limit?: number }): Promise<TechnologiesResponse> => {
      const queryParams = new URLSearchParams();
      if (params?.skip) queryParams.append('skip', params.skip.toString());
      if (params?.limit) queryParams.append('limit', params.limit.toString());
      
      const query = queryParams.toString();
      return request(`/technologies${query ? `?${query}` : ''}`);
    },

    get: async (technologyId: number): Promise<Technology> => {
      return request(`/technologies/${technologyId}`);
    },
  },
};

export default apiClient;