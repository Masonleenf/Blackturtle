import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import KeyMetrics from './components/KeyMetrics';
import ValueProposition from './components/ValueProposition';  
import FeaturedCompanies from './components/FeaturedCompanies';
import CompanyDirectory from './components/CompanyDirectory';
import CompanyDetail from './components/CompanyDetail';
import TechnologyDirectory from './components/TechnologyDirectory';
import TechnologyProfile from './components/TechnologyProfile';
import MarketAnalytics from './components/MarketAnalytics';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTechId, setSelectedTechId] = useState<string | null>(null);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSelectedTechId(null);
    setSelectedCompanyId(null);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('companies'); // 로그인 후 바로 CompanyDirectory로 이동
  };

  const handleTechDetailNavigation = (techId: string) => {
    setSelectedTechId(techId);
    setCurrentPage('tech-detail');
  };

  const handleCompanyDetailNavigation = (companyId: string) => {
    setSelectedCompanyId(companyId);
    setCurrentPage('company-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Dashboard onNavigateToLogin={() => setCurrentPage('login')} />;
      case 'companies':
        return (
          <>
            <CompanyDirectory onNavigateToCompany={handleCompanyDetailNavigation} />
            <Footer onPageChange={handlePageChange} />
          </>
        );
      case 'company-detail':
        return (
          <>
            <CompanyDetail 
              companyId={selectedCompanyId || undefined}
              onNavigateBack={() => setCurrentPage('companies')}
              onNavigateToTechnology={handleTechDetailNavigation}
            />
            <Footer onPageChange={handlePageChange} />
          </>
        );
      case 'tech':
        return (
          <>
            <TechnologyDirectory onNavigateToDetail={handleTechDetailNavigation} />
            <Footer onPageChange={handlePageChange} />
          </>
        );
      case 'tech-detail':
        return (
          <>
            <TechnologyProfile 
              techId={selectedTechId || undefined}
              onNavigateBack={() => setCurrentPage('tech')}
              onNavigateToCompany={() => handleCompanyDetailNavigation('tech-innovation')}
            />
            <Footer onPageChange={handlePageChange} />
          </>
        );
      case 'insights':
        return (
          <>
            <MarketAnalytics />
            <Footer onPageChange={handlePageChange} />
          </>
        );
      case 'login':
        return <Login onNavigateBack={() => setCurrentPage('home')} onLogin={handleLogin} />;

      default:
        return <Dashboard onNavigateToLogin={() => setCurrentPage('login')} />;
    }
  };

  // 랜딩페이지(home)와 로그인 페이지에서는 Header 숨김
  // 로그인 후에만 Header 표시
  const showHeader = currentPage !== 'home' && currentPage !== 'login' && isLoggedIn;

  return (
    <div className="min-h-screen">
      {showHeader && (
        <Header onPageChange={handlePageChange} currentPage={currentPage} />
      )}
      {renderPage()}
    </div>
  );
}