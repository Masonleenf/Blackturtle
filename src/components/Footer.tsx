import React, { useState, useCallback } from 'react';
import { Linkedin, Twitter, Mail, MapPin, Phone, Clock } from 'lucide-react';

interface FooterProps {
  onPageChange?: (page: string) => void;
}

const Footer = ({ onPageChange }: FooterProps) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  }, [email]);

  const handleNavigation = useCallback((page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
  }, [onPageChange]);

  return (
    <footer className="bg-[#5FA8B4] text-white">
      {/* Newsletter Signup Section */}
      <div className="border-b border-white/20">

      </div>

      {/* Main Footer Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1 - Brand */}
            <div className="lg:pr-8">
              <h3 className="text-[24px] font-bold text-white mb-4 font-[Pretendard]">
                BlackTutle
              </h3>
              <p className="text-[14px] text-white/80 mb-4 font-[Pretendard]">
                검증된 기술투자 플랫폼
              </p>
              <p className="text-[14px] text-white/70 leading-[1.7] mb-8 font-[Pretendard]">
                NTIS 기반 기술료 납부 데이터로 검증된 사업화 성과를 제공하여 VC의 투자 의사결정을 돕습니다
              </p>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="mailto:invest@blacktutle.com" 
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Column 2 - Navigation */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-6 font-[Pretendard]">
                탐색
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => handleNavigation('home')}
                    className="text-[14px] text-white/80 hover:text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('companies')}
                    className="text-[14px] text-white/80 hover:text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                  >
                    기업 검색
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('tech')}
                    className="text-[14px] text-white/80 hover:text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                  >
                    기술 검색
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('insights')}
                    className="text-[14px] text-white/80 hover:text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                  >
                    시장 인사이트
                  </button>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[14px] text-white/80 hover:text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                  >
                    로그인
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[14px] text-white/80 hover:text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                  >
                    회원가입
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-6 font-[Pretendard]">
                리소스
              </h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-[14px] text-white/80 hover:text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                  >
                    플랫폼 소개
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-[14px] text-white/80 hover:text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                  >
                    데이터 검증 기준
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h4 className="text-[16px] font-bold text-white mb-6 font-[Pretendard]">
                문의
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] text-white/80 font-[Pretendard]">Email</p>
                    <a 
                      href="mailto:invest@blacktutle.com"
                      className="text-[14px] text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                    >
                      invest@blacktutle.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] text-white/80 font-[Pretendard]">Tel</p>
                    <a 
                      href="tel:02-1234-5678"
                      className="text-[14px] text-white hover:text-[#DC143C] transition-colors font-[Pretendard]"
                    >
                      02-1234-5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] text-white/80 font-[Pretendard]">Address</p>
                    <p className="text-[14px] text-white font-[Pretendard]">
                      67 Yeouinaru-ro, Yeongdeungpo District, Seoul
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-white/80 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[14px] text-white/80 font-[Pretendard]">Business Hours</p>
                    <p className="text-[14px] text-white font-[Pretendard]">
                      평일 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="border-t border-white/20 my-10"></div>
      </div>

      {/* Bottom Section */}
      <div className="pb-10">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Left - Copyright */}
            <div className="text-[13px] text-white/60 font-[Pretendard]">
              © 2024 BlackTutle. All rights reserved.
            </div>

            {/* Center - Legal Links */}
            <div className="flex items-center gap-1 text-[13px] text-white/70 font-[Pretendard]">
              <a 
                href="#" 
                className="hover:text-white hover:underline transition-colors"
              >
                개인정보처리방침
              </a>
              <span className="mx-2">|</span>
              <a 
                href="#" 
                className="hover:text-white hover:underline transition-colors"
              >
                이용약관
              </a>
              <span className="mx-2">|</span>
              <a 
                href="#" 
                className="hover:text-white hover:underline transition-colors"
              >
                쿠키정책
              </a>
            </div>

            {/* Right - Data Source Badge */}
            <div className="flex items-center gap-2 text-[12px] text-white/70 font-[Pretendard]">
              <div className="w-8 h-6 bg-white/20 rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">NTIS</span>
              </div>
              <span>Data by NTIS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;