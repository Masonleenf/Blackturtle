import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import svgPaths from "../imports/svg-p8mpxgvfto";
import imgBgLeft from "figma:asset/1f0a76e48c1f01e1ef5c0f8953e237bc82aae330.png";

interface LoginProps {
  onNavigateBack?: () => void;
  onLogin?: () => void;
}

const Login = ({ onNavigateBack, onLogin }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="bg-white relative min-h-screen flex">
      {/* Left Side - Background Image and Content */}
      <div className="relative w-1/2 bg-gradient-to-br from-[#A8D5DD] via-[#89CDD6] to-[#5FA8B4] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img alt="" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" src={imgBgLeft} />
        
        {/* BlackTurtle Logo */}
        <div className="relative z-10 mb-8">
          <img 
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQwIiBoZWlnaHQ9IjY0IiB2aWV3Qm94PSIwIDAgMjQwIDY0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8IS0tIFR1cnRsZSBJY29uIC0tPgo8cGF0aCBkPSJNMzIgMjRDMzYuNDE4MyAyNCA0MCAyNy41ODE3IDQwIDMyUzM2LjQxODMgNDAgMzIgNDBDMjcuNTgxNyA0MCAyNCAzNi40MTgzIDI0IDMyUzI3LjU4MTcgMjQgMzIgMjRaTSIgZmlsbD0iIzFBMUUyOSIvPgo8cGF0aCBkPSJNMjggMjBDMzAgMTggMzQgMTggMzYgMjBDMzggMjIgMzggMjQgMzYgMjZDMzQgMjggMzAgMjggMjggMjZDMjYgMjQgMjYgMjIgMjggMjBaIiBmaWxsPSIjMUExRTI5Ii8+CjxwYXRoIGQ9Ik0yNiAzMkMyNiAzMCAyNiAyOCAyOCAyOEMzMCAyOCAzMiAzMCAzMiAzMkMzMiAzNCAzMCAzNiAyOCAzNkMyNiAzNiAyNiAzNCAyNiAzMloiIGZpbGw9IiMxQTFFMjkiLz4KPHA+aCBkPSJNMzcgMzJDMzcgMzAgMzcgMjggMzkgMjhDNDEgMjggNDMgMzAgNDMgMzJDNDMgMzQgNDEgMzYgMzkgMzZDMzcgMzYgMzcgMzQgMzcgMzJaIiBmaWxsPSIjMUExRTI5Ii8+CjxwYXRoIGQ9Ik0zMiA0M0MzNCA0MyAzNiA0MyAzNiA0NUMzNiA0NyAzNCA0OSAzMiA0OUMzMCA0OSAyOCA0NyAyOCA0NUMyOCA0MyAzMCA0MyAzMiA0M1oiIGZpbGw9IiMxQTFFMjkiLz4KPCEtLSBCcmFuZCBUZXh0IC0tPgo8dGV4dCB4PSI2MCIgeT0iMjYiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzFBMUUyOSI+QmxhY2s8L3RleHQ+Cjx0ZXh0IHg9IjYwIiB5PSI0NCIgZm9udC1mYW1pbHk9InN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iNzAwIiBmaWxsPSIjMUExRTI5Ij5UdXJ0bGU8L3RleHQ+Cjwvc3ZnPgo="
            alt="BlackTurtle Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Heading */}
        <div className="relative z-10 text-center text-white mb-8 max-w-md px-6">
          <h1 className="text-[32px] font-bold leading-[38px] mb-4 font-nanumgothic">
            기술투자의 새로운 기준
          </h1>
          <p className="text-[16px] leading-[28px] text-white/90 font-nanumgothic">
            NTIS 기반의 검증된 사업화 실적 데이터로 투자가치 높은 중소기업 기술을 발굴하고 분석합니다.
          </p>
        </div>

        {/* Illustration Elements */}
        <div className="absolute top-1/4 left-8 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-12 w-2 h-2 bg-[#DC143C]/60 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-16 w-4 h-4 bg-white/30 rounded-full animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-8 w-3 h-3 bg-[#DC143C]/40 rounded-full animate-pulse animation-delay-3000"></div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center px-16 bg-white">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-[32px] font-bold text-[#242424] mb-2 font-nanumsquare tracking-[-0.5px]">
            BlackTurtle에 오신 것을 환영합니다
          </h2>
          

        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <label className="block text-[12.8px] text-[#757575] font-nanumgothic mb-2">
              Email or Username
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndadev"
              className="w-full text-[16px] text-[#212121] font-nanumgothic bg-transparent border-none border-b-2 border-[#BDBDBD] pb-2 focus:border-[#5FA8B4] focus:outline-none transition-colors"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-[12.8px] text-[#757575] font-nanumgothic mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="**************"
                className="w-full text-[16px] text-[#424242] font-nanumgothic bg-transparent border-none border-b-2 border-[#BDBDBD] pb-2 focus:border-[#5FA8B4] focus:outline-none transition-colors pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#BEBEBE] hover:text-[#5FA8B4] transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me and Login Button */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="sr-only"
                />
                <label
                  htmlFor="remember"
                  className="flex items-center cursor-pointer"
                >
                  <div className={`w-5 h-5 border-2 rounded ${rememberMe ? 'border-[#5FA8B4] bg-[#5FA8B4]/10' : 'border-[#5FA8B4]/25'} flex items-center justify-center mr-3`}>
                    {rememberMe && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 12 10">
                        <path d={svgPaths.p26e89200} stroke="#5FA8B4" strokeWidth="1.5" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[10.24px] text-[#757575] font-nanumgothic">Remember me</span>
                </label>
              </div>
            </div>

            <button
              type="button"
              onClick={onLogin}
              className="bg-[#5FA8B4] hover:bg-[#4A9AA5] text-white px-8 py-3 rounded-full shadow-[0px_34px_40px_-8px_rgba(95,168,180,0.24)] font-bold text-[12.8px] font-nanumsquare transition-colors"
            >
              LOG IN
            </button>
          </div>
        </form>



        {/* Back Button */}
        {onNavigateBack && (
          <button
            onClick={onNavigateBack}
            className="absolute top-8 right-8 text-[#757575] hover:text-[#5FA8B4] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;