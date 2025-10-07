import React, { useState } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

interface HeaderProps {
  onPageChange?: (page: string) => void;
  currentPage?: string;
}

const Header = ({ onPageChange, currentPage = 'home' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)] sticky top-0 z-50 border-b border-[#E4E7ED]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="figma:asset/822b4e5b73469e007fc7798ea88672760df2cb37.png"
                alt="BlackTurtle Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-[406px] mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#AEB6CF] w-5 h-5" />
              <input
                type="text"
                placeholder="기업명, 기술명으로 검색하세요"
                className="w-full h-[48px] pl-12 pr-4 bg-white border border-[#E4E7ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-nanumgothic text-[14px] tracking-[-0.28px] placeholder:text-[#AEB6CF]"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-[#F9F9F9] rounded-lg p-1">
            <button
              onClick={() => handleNavClick('companies')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 font-nanumgothic text-[14px] tracking-[0.256px] ${
                currentPage === 'companies'
                  ? 'bg-white text-[#00DEA3] shadow-sm'
                  : 'text-[#6F6C99] hover:text-[#00DEA3] hover:bg-white/50'
              }`}
            >
              기업
            </button>
            <button
              onClick={() => handleNavClick('tech')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 font-nanumgothic text-[14px] tracking-[0.256px] ${
                currentPage === 'tech'
                  ? 'bg-white text-[#00DEA3] shadow-sm'
                  : 'text-[#6F6C99] hover:text-[#00DEA3] hover:bg-white/50'
              }`}
            >
              기술
            </button>
            <button
              onClick={() => handleNavClick('insights')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 font-nanumgothic text-[14px] tracking-[0.256px] ${
                currentPage === 'insights'
                  ? 'bg-white text-[#00DEA3] shadow-sm'
                  : 'text-[#6F6C99] hover:text-[#00DEA3] hover:bg-white/50'
              }`}
            >
              인사이트
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-3 bg-white border border-[#E4E7ED] rounded-lg hover:bg-[#F9F9F9] transition-colors shadow-[0px_4px_16px_0px_rgba(0,153,112,0.08)]">
              <Bell className="w-5 h-5 text-[#6F6C99]" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#F23985] rounded-full"></span>
            </button>

            {/* Profile */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="text-right">
                <p className="text-[14px] font-medium text-[#1A1E29] font-nanumsquare tracking-[0.256px]">김투자 님</p>
                <p className="text-[12px] text-[#6F6C99] font-nanumgothic tracking-[-0.24px]">관리자</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-[#5FA8B4] to-[#89CDD6] rounded-xl flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Mobile Menu */}
            <button 
              className="lg:hidden p-2 text-[#6F6C99] hover:text-[#00DEA3] transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#E4E7ED] bg-white">
            <nav className="flex flex-col py-4 space-y-2">
              <button
                onClick={() => handleNavClick('companies')}
                className={`text-[14px] font-medium transition-colors duration-200 px-4 py-3 text-left font-[Pretendard] rounded-lg mx-4 ${
                  currentPage === 'companies' 
                    ? 'bg-[#00DEA3]/10 text-[#00DEA3]' 
                    : 'text-[#6F6C99] hover:text-[#00DEA3] hover:bg-[#F9F9F9]'
                }`}
              >
                기업
              </button>
              <button
                onClick={() => handleNavClick('tech')}
                className={`text-[14px] font-medium transition-colors duration-200 px-4 py-3 text-left font-[Pretendard] rounded-lg mx-4 ${
                  currentPage === 'tech' 
                    ? 'bg-[#00DEA3]/10 text-[#00DEA3]' 
                    : 'text-[#6F6C99] hover:text-[#00DEA3] hover:bg-[#F9F9F9]'
                }`}
              >
                기술
              </button>
              <button
                onClick={() => handleNavClick('insights')}
                className={`text-[14px] font-medium transition-colors duration-200 px-4 py-3 text-left font-[Pretendard] rounded-lg mx-4 ${
                  currentPage === 'insights' 
                    ? 'bg-[#00DEA3]/10 text-[#00DEA3]' 
                    : 'text-[#6F6C99] hover:text-[#00DEA3] hover:bg-[#F9F9F9]'
                }`}
              >
                인사이트
              </button>
              
              {/* Mobile Search */}
              <div className="px-4 pt-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#AEB6CF] w-5 h-5" />
                  <input
                    type="text"
                    placeholder="검색..."
                    className="w-full h-[48px] pl-12 pr-4 bg-white border border-[#E4E7ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5FA8B4] focus:border-transparent font-[Pretendard] text-[14px] tracking-[-0.28px] placeholder:text-[#AEB6CF]"
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;