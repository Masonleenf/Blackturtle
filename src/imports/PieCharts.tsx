import svgPaths from "./svg-e478ju15fy";
import { imgSections, imgCircle, imgSections1, imgCircle1 } from "./svg-ec648";

function Pie() {
  return (
    <div className="absolute left-[890.35px] size-[276.59px] top-[2150.27px]" data-name="Pie">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 277 277">
        <g id="Pie">
          <path d={svgPaths.p23439000} fill="var(--fill-0, #E5EAFC)" id="Section 5" />
          <path d={svgPaths.p3adad700} fill="var(--fill-0, #C6D2FD)" id="Secton 4" />
          <path d={svgPaths.p42a4f00} fill="var(--fill-0, #93AAFD)" id="Section 3" />
          <path d={svgPaths.p2c6f6e00} fill="var(--fill-0, #2D5BFF)" id="Section 2" />
          <path d={svgPaths.p3fc7e000} fill="var(--fill-0, #4A3AFF)" id="Section 1" />
        </g>
      </svg>
    </div>
  );
}

function Indicator2() {
  return (
    <div className="absolute left-[1112.13px] size-[47.372px] top-[2194.02px]" data-name="Indicator 2">
      <div className="absolute bottom-[-80.22%] left-[-63.33%] right-0 top-[-1.49%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 87">
          <g id="Indicator 2">
            <g filter="url(#filter0_d_11_1137)" id="Dot">
              <circle cx="36.8291" cy="41.5432" fill="var(--fill-0, #1E1B39)" r="6.8291" />
            </g>
            <line id="Line" stroke="var(--stroke-0, #1E1B39)" x1="36.4755" x2="77.0188" y1="41.1897" y2="0.646447" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="73.6582" id="filter0_d_11_1137" width="73.6582" x="0" y="12.7141">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_1137" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_11_1137" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HoverStat() {
  return (
    <div className="absolute contents left-[1151.8px] top-[2129.12px]" data-name="Hover Stat">
      <div className="absolute bg-[#1e1b39] h-[68px] left-[1151.8px] rounded-[13px] top-[2129.12px] w-[82.809px]" data-name="Container" />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[24px] left-[1192.6px] not-italic text-[18px] text-center text-nowrap text-white top-[2161.12px] translate-x-[-50%] whitespace-pre">12,799</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[1192.6px] not-italic text-[#e5e5ef] text-[16px] text-center text-nowrap top-[2141.12px] translate-x-[-50%] whitespace-pre">Chrome</p>
    </div>
  );
}

function Indicator3() {
  return (
    <div className="absolute contents left-[1112.13px] top-[2129.12px]" data-name="Indicator 2">
      <Indicator2 />
      <HoverStat />
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute h-[26.226px] left-[878.49px] top-[2215.17px] w-[47.456px]" data-name="Indicator">
      <div className="absolute inset-[-35.96%_-63.22%_-144.89%_-0.91%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 75">
          <g id="Indicator">
            <g filter="url(#filter0_d_11_1129)" id="Dot">
              <circle cx="6.8291" cy="6.8291" fill="var(--fill-0, #1E1B39)" r="6.8291" transform="matrix(-1 0 0 1 48.4563 22.5681)" />
            </g>
            <line id="Line" stroke="var(--stroke-0, #1E1B39)" x1="41.4118" x2="0.784571" y1="29.8484" y2="10.4512" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="73.6582" id="filter0_d_11_1129" width="73.6582" x="4.79809" y="0.568113">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="15" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.15 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_1129" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_11_1129" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HoverStat1() {
  return (
    <div className="absolute contents left-[805.64px] top-[2150.27px]" data-name="Hover Stat">
      <div className="absolute bg-[#1e1b39] h-[68px] left-[805.64px] rounded-[13px] top-[2150.27px] w-[82.809px]" data-name="Active Bar Hover" />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[24px] left-[846.45px] not-italic text-[18px] text-center text-nowrap text-white top-[2182.27px] translate-x-[-50%] whitespace-pre">2,811</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[846.45px] not-italic text-[#e5e5ef] text-[16px] text-center text-nowrap top-[2162.27px] translate-x-[-50%] whitespace-pre">Firefox</p>
    </div>
  );
}

function Indicator1() {
  return (
    <div className="absolute contents left-[805.64px] top-[2150.27px]" data-name="Indicator 1">
      <Indicator />
      <HoverStat1 />
    </div>
  );
}

function AmountInfo() {
  return (
    <div className="absolute contents left-[1151.64px] not-italic text-nowrap text-right top-[2037.12px] whitespace-pre" data-name="Amount Info">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[34px] left-[1251.64px] text-[#1e1b39] text-[24px] top-[2057.12px] translate-x-[-100%]">229,293</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[1251.64px] text-[#9291a5] text-[18px] top-[2037.12px] translate-x-[-100%]">This week</p>
    </div>
  );
}

function CardInfo() {
  return (
    <div className="absolute contents left-[805.64px] not-italic text-nowrap top-[2037.12px] whitespace-pre" data-name="Card Info.">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[805.64px] text-[#1e1b39] text-[22px] top-[2061.12px]">Browser usage</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[805.64px] text-[#9291a5] text-[18px] top-[2037.12px]">Statistics</p>
    </div>
  );
}

function Chart9() {
  return (
    <div className="absolute contents left-[773.64px] top-[2005.12px]" data-name="Chart 9">
      <div className="absolute bg-white h-[469.424px] left-[773.64px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[2005.12px] w-[510px]" data-name="Container" />
      <Pie />
      <Indicator3 />
      <Indicator1 />
      <div className="absolute h-0 left-[805.64px] top-[2113.12px] w-[446px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 446 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="446" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <AmountInfo />
      <CardInfo />
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute contents left-[342.43px] top-[2411.86px]" data-name="Label 1">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[18px] left-[418.64px] not-italic text-[#1e1b39] text-[16px] text-nowrap top-[2411.86px] whitespace-pre">65%</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[364.64px] not-italic text-[#9291a5] text-[16px] text-nowrap top-[2411.86px] whitespace-pre">Salary</p>
      <div className="absolute left-[342.43px] size-[14.216px] top-[2414.75px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #4A3AFF)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute contents left-[492.64px] top-[2411.86px]" data-name="Label 2">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[18px] left-[612.86px] not-italic text-[#1e1b39] text-[16px] text-nowrap top-[2411.86px] whitespace-pre">35%</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[514.86px] not-italic text-[#9291a5] text-[16px] text-nowrap top-[2411.86px] whitespace-pre">Investments</p>
      <div className="absolute left-[492.64px] size-[14.216px] top-[2414.75px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #F0E5FC)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Identifiers() {
  return (
    <div className="absolute contents left-[342.43px] top-[2411.86px]" data-name="Identifiers">
      <Label1 />
      <Label2 />
    </div>
  );
}

function Circle() {
  return (
    <div className="absolute left-[371.2px] size-[246.886px] top-[2134.98px]" data-name="Circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 247">
        <g id="Circle">
          <path d={svgPaths.p3d2a7880} fill="var(--fill-0, #4A3AFF)" id="Filled Section" />
          <path d={svgPaths.pfb82800} fill="var(--fill-0, #F0E5FC)" id="Empty Section" />
        </g>
      </svg>
    </div>
  );
}

function ChartInfo() {
  return (
    <div className="absolute contents left-[429.14px] not-italic text-center text-nowrap top-[2230.56px] whitespace-pre" data-name="Chart Info">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[494.64px] text-[#1e1b39] text-[22px] top-[2250.56px] translate-x-[-50%]">$54,000.00</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[494.64px] text-[#615e83] text-[16px] top-[2230.56px] translate-x-[-50%]">{`Total income `}</p>
    </div>
  );
}

function CardInfo1() {
  return (
    <div className="absolute contents left-[272.73px] not-italic text-nowrap top-[2028.98px] whitespace-pre" data-name="Card Info.">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[272.73px] text-[#1e1b39] text-[22px] top-[2052.98px]">Yearly income</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[272.73px] text-[#9291a5] text-[18px] top-[2028.98px]">Statistics</p>
    </div>
  );
}

function Chart8() {
  return (
    <div className="absolute contents left-[239.64px] top-[1996.98px]" data-name="Chart 8">
      <div className="absolute bg-white h-[477.574px] left-[239.64px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[1996.98px] w-[510px]" data-name="Container" />
      <Identifiers />
      <Circle />
      <ChartInfo />
      <div className="absolute h-0 left-[272.73px] top-[2102.98px] w-[443.55px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="443.55" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardInfo1 />
    </div>
  );
}

function Label5() {
  return (
    <div className="absolute contents left-[485.28px] top-[1795.24px]" data-name="Label 1">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[640.28px] not-italic text-[#04ce00] text-[14px] text-nowrap top-[1795.38px] whitespace-pre">(+2.98%)</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[576.28px] not-italic text-[#615e83] text-[14px] text-nowrap top-[1795.24px] whitespace-pre">39.11%</p>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[501.28px] not-italic text-[#1e1b39] text-[14px] text-nowrap top-[1795.24px] whitespace-pre">USA</p>
      <div className="absolute bg-[#4a3aff] left-[485.28px] rounded-[40px] size-[8px] top-[1799.24px]" data-name="Identifier" />
    </div>
  );
}

function Label6() {
  return (
    <div className="absolute contents left-[485.28px] top-[1829.16px]" data-name="Label 2">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[640.28px] not-italic text-[#ff718b] text-[14px] text-nowrap top-[1829.16px] whitespace-pre">(-3.25%)</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[576.28px] not-italic text-[#615e83] text-[14px] text-nowrap top-[1829.16px] whitespace-pre">28.02%</p>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[501.28px] not-italic text-[#1e1b39] text-[14px] text-nowrap top-[1829.16px] whitespace-pre">Canada</p>
      <div className="absolute bg-[#2d5bff] left-[485.28px] rounded-[40px] size-[8px] top-[1833.16px]" data-name="Identifier" />
    </div>
  );
}

function Label3() {
  return (
    <div className="absolute contents left-[485.28px] top-[1866.35px]" data-name="Label 3">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[640.28px] not-italic text-[#04ce00] text-[14px] text-nowrap top-[1866.35px] whitespace-pre">(+0.14%)</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[576.28px] not-italic text-[#615e83] text-[14px] text-nowrap top-[1866.35px] whitespace-pre">23.13%</p>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[501.28px] not-italic text-[#1e1b39] text-[14px] text-nowrap top-[1866.35px] whitespace-pre">U.K.</p>
      <div className="absolute bg-[#93aafd] left-[485.28px] rounded-[40px] size-[8px] top-[1870.35px]" data-name="Identifier" />
    </div>
  );
}

function Label4() {
  return (
    <div className="absolute contents left-[485.28px] top-[1903.54px]" data-name="Label 4">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[640.28px] not-italic text-[#ff718b] text-[14px] text-nowrap top-[1903.54px] whitespace-pre">(-1.11%)</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[576.28px] not-italic text-[#615e83] text-[14px] text-nowrap top-[1904.65px] whitespace-pre">5.03%</p>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[16px] left-[501.28px] not-italic text-[#1e1b39] text-[14px] text-nowrap top-[1903.54px] whitespace-pre">Australia</p>
      <div className="absolute bg-[#c6d2fd] left-[485.28px] rounded-[40px] size-[8px] top-[1907.54px]" data-name="Identifier" />
    </div>
  );
}

function Identifiers1() {
  return (
    <div className="absolute contents left-[485.28px] top-[1795.24px]" data-name="Identifiers">
      <Label5 />
      <Label6 />
      <Label3 />
      <Label4 />
    </div>
  );
}

function Pie1() {
  return (
    <div className="absolute left-[277px] size-[162.576px] top-[1778.39px]" data-name="Pie">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 163 163">
        <g id="Pie">
          <path d={svgPaths.p3b18cd70} fill="var(--fill-0, #E5EAFC)" id="Section 5" />
          <path d={svgPaths.pb192080} fill="var(--fill-0, #C6D2FD)" id="Section 4" />
          <path d={svgPaths.pb3def80} fill="var(--fill-0, #93AAFD)" id="Section 3" />
          <path d={svgPaths.p3d168d80} fill="var(--fill-0, #2D5BFF)" id="Section 2" />
          <path d={svgPaths.p3189fc80} fill="var(--fill-0, #4A3AFF)" id="Section 1" />
        </g>
      </svg>
    </div>
  );
}

function DropSelector() {
  return (
    <div className="absolute bg-[ghostwhite] box-border content-stretch flex gap-[24px] items-center justify-end px-[16px] py-[10px] right-[723.72px] rounded-[20px] top-[1683.79px]" data-name="Drop Selector">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#615e83] text-[14px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">2021</p>
      </div>
      <div className="h-[5.458px] relative shrink-0 w-[9.679px]" data-name="Chevron">
        <div className="absolute bottom-0 left-[0.01%] right-0 top-[0.01%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p3b3fc800} fill="var(--fill-0, #615E83)" id="Chevron" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardInfo2() {
  return (
    <div className="absolute contents left-[272.73px] not-italic text-nowrap top-[1673.79px] whitespace-pre" data-name="Card Info.">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[272.73px] text-[#9291a5] text-[18px] top-[1673.79px]">Statistics</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[272.73px] text-[#1e1b39] text-[22px] top-[1697.79px]">Views by country</p>
    </div>
  );
}

function Chart7() {
  return (
    <div className="absolute contents left-[239.64px] top-[1641.79px]" data-name="Chart 7">
      <div className="absolute bg-white h-[331.187px] left-[239.64px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[1641.79px] w-[510px]" data-name="Container" />
      <div className="absolute h-0 left-[272.73px] top-[1747.79px] w-[443.55px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="443.55" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Identifiers1 />
      <Pie1 />
      <DropSelector />
      <CardInfo2 />
    </div>
  );
}

function Label7() {
  return (
    <div className="absolute contents left-[852.96px] top-[1722.57px]" data-name="Label 1">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[1204.33px] not-italic text-[#9291a5] text-[18px] text-nowrap text-right top-[1726.68px] translate-x-[-100%] whitespace-pre">410</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[883.18px] not-italic text-[#615e83] text-[22px] text-nowrap top-[1722.57px] whitespace-pre">Approved</p>
      <div className="absolute bg-[#4a3aff] left-[852.96px] rounded-[24px] size-[14.216px] top-[1729.47px]" data-name="Identifier" />
    </div>
  );
}

function Label8() {
  return (
    <div className="absolute contents left-[852.96px] top-[1780.57px]" data-name="Label 2">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[1204.33px] not-italic text-[#9291a5] text-[18px] text-nowrap text-right top-[1782.57px] translate-x-[-100%] whitespace-pre">142</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[883.18px] not-italic text-[#615e83] text-[22px] text-nowrap top-[1780.57px] whitespace-pre">Pending</p>
      <div className="absolute bg-[#e0c6fd] left-[852.96px] rounded-[14px] size-[14.216px] top-[1787.47px]" data-name="Identifier" />
    </div>
  );
}

function Label9() {
  return (
    <div className="absolute contents left-[852.96px] top-[1838.57px]" data-name="Label 3">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[1204.33px] not-italic text-[#9291a5] text-[18px] text-nowrap text-right top-[1843.57px] translate-x-[-100%] whitespace-pre">340</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[883.18px] not-italic text-[#615e83] text-[22px] text-nowrap top-[1838.57px] whitespace-pre">Under review</p>
      <div className="absolute bg-[#962dff] left-[852.96px] rounded-[24px] size-[14.216px] top-[1845.47px]" data-name="Identifier" />
    </div>
  );
}

function Label10() {
  return (
    <div className="absolute contents left-[852.96px] top-[1896.57px]" data-name="Label 4">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[1204.33px] not-italic text-[#9291a5] text-[18px] text-nowrap text-right top-[1901.57px] translate-x-[-100%] whitespace-pre">590</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[883.18px] not-italic text-[#615e83] text-[22px] text-nowrap top-[1896.57px] whitespace-pre">Rejected</p>
      <div className="absolute bg-[#c6d2fd] left-[852.96px] rounded-[14px] size-[14.216px] top-[1903.47px]" data-name="Identifier" />
    </div>
  );
}

function Identifiers2() {
  return (
    <div className="absolute contents left-[852.96px] top-[1722.57px]" data-name="Identifiers">
      <Label7 />
      <Label8 />
      <Label9 />
      <Label10 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute contents left-[845.07px] top-[1283.72px]" data-name="Section 1">
      <div className="absolute left-[845.07px] size-[322.297px] top-[1283.72px]" data-name="Section">
        <div className="absolute bottom-[62.53%] left-[6.65%] right-1/2 top-[0.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 121">
            <path d={svgPaths.pd8c12f0} fill="var(--fill-0, #4A3AFF)" id="Section" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[922.33px] not-italic text-[22px] text-nowrap text-white top-[1329.47px] whitespace-pre">11%</p>
    </div>
  );
}

function Secton2() {
  return (
    <div className="absolute contents left-[855.07px] top-[1306.92px]" data-name="Secton 2">
      <div className="absolute left-[855.07px] size-[355.65px] top-[1306.92px]" data-name="Section">
        <div className="absolute bottom-1/2 left-1/2 right-[0.07%] top-[0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 178">
            <path d={svgPaths.p1d1ca900} fill="var(--fill-0, #962DFF)" id="Section" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[1118.36px] not-italic text-[22px] text-nowrap text-white top-[1374.77px] whitespace-pre">24%</p>
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute contents left-[855.07px] top-[1306.92px]" data-name="Section 3">
      <div className="absolute left-[855.07px] size-[355.65px] top-[1306.92px]" data-name="Section">
        <div className="absolute bottom-[0.07%] left-1/2 right-[0.07%] top-1/2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179 179">
            <path d={svgPaths.pa87d800} fill="var(--fill-0, #E0C6FD)" id="Section" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[1110.69px] not-italic text-[22px] text-nowrap text-white top-[1570.61px] whitespace-pre">26%</p>
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute contents left-[856.57px] top-[1306.92px]" data-name="Section 4">
      <div className="absolute left-[856.57px] size-[355.65px] top-[1306.92px]" data-name="Section">
        <div className="absolute bottom-[0.1%] left-0 right-[50.26%] top-[29.51%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177 252">
            <path d={svgPaths.p35c19d00} fill="var(--fill-0, #C6D2FD)" id="Section" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[892.83px] not-italic text-[22px] text-nowrap text-white top-[1548.61px] whitespace-pre">39%</p>
    </div>
  );
}

function PieSections() {
  return (
    <div className="absolute contents left-[845.07px] top-[1283.72px]" data-name="Pie Sections">
      <Section1 />
      <Secton2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

function ChartInfo1() {
  return (
    <div className="absolute contents left-[971.14px] not-italic text-center text-nowrap top-[1447.75px] whitespace-pre" data-name="Chart Info">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-[1033.14px] text-[#9291a5] text-[0px] text-[18px] top-[1489.75px] translate-x-[-50%]">
        <span className="not-italic">{`Average `}</span>range
      </p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[52px] left-[1033.64px] text-[#1e1b39] text-[44px] top-[1447.75px] translate-x-[-50%]">1.05</p>
    </div>
  );
}

function CardInfo3() {
  return (
    <div className="absolute contents left-[805.64px] not-italic text-nowrap top-[1171.72px] whitespace-pre" data-name="Card Info.">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[805.64px] text-[#1e1b39] text-[22px] top-[1195.72px]">Monthly activity</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[805.64px] text-[#9291a5] text-[18px] top-[1171.72px]">Statistics</p>
    </div>
  );
}

function Chart6() {
  return (
    <div className="absolute contents left-[773.64px] top-[1139.72px]" data-name="Chart 6">
      <div className="absolute bg-white h-[841.408px] left-[773.64px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[1139.72px] w-[510px]" data-name="Container" />
      <Identifiers2 />
      <PieSections />
      <ChartInfo1 />
      <div className="absolute h-0 left-[805.64px] top-[1247.72px] w-[446px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 446 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="446" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardInfo3 />
    </div>
  );
}

function Label11() {
  return (
    <div className="absolute contents left-[304.39px] top-[1546.75px]" data-name="Label 1">
      <div className="absolute left-[304.39px] size-[14.216px] top-[1549.64px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #962DFF)" id="Identifier" r="7.10791" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[326.61px] not-italic text-[#9291a5] text-[16px] text-nowrap top-[1546.75px] whitespace-pre">Active</p>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[18px] left-[378.61px] not-italic text-[#1e1b39] text-[16px] text-nowrap top-[1546.75px] whitespace-pre">513</p>
    </div>
  );
}

function Label12() {
  return (
    <div className="absolute contents left-[438.46px] top-[1546.75px]" data-name="Label 2">
      <div className="absolute left-[438.46px] size-[14.216px] top-[1549.64px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #F7F7FB)" id="Identifier" r="6.60791" stroke="var(--stroke-0, #9291A5)" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[460.68px] not-italic text-[#9291a5] text-[16px] text-nowrap top-[1546.75px] whitespace-pre">Inactive</p>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[18px] left-[524.68px] not-italic text-[#1e1b39] text-[16px] text-nowrap top-[1546.75px] whitespace-pre">741</p>
    </div>
  );
}

function Label13() {
  return (
    <div className="absolute contents left-[583.68px] top-[1546.75px]" data-name="Label 3">
      <div className="absolute left-[583.68px] size-[14.216px] top-[1549.64px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #E0C6FD)" id="Identifier" r="7.10791" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[605.9px] not-italic text-[#9291a5] text-[16px] text-nowrap top-[1546.75px] whitespace-pre">Offline</p>
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[18px] left-[659.9px] not-italic text-[#1e1b39] text-[16px] text-nowrap top-[1546.75px] whitespace-pre">121</p>
    </div>
  );
}

function Identifiers3() {
  return (
    <div className="absolute contents left-[304.39px] top-[1546.75px]" data-name="Identifiers">
      <Label11 />
      <Label12 />
      <Label13 />
    </div>
  );
}

function Sections() {
  return (
    <div className="absolute h-[369.329px] left-[312.38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.001px_9.868px] mask-size-[364.528px_172.816px] top-[1281.35px] w-[362.69px]" data-name="Sections" style={{ maskImage: `url('${imgSections}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 363 370">
        <g id="Sections">
          <path d={svgPaths.p34c3fd00} fill="var(--fill-0, #962DFF)" id="Section 1" />
          <path d={svgPaths.p2b349800} fill="var(--fill-0, #F7F7FB)" id="Sectio 2" />
          <path d={svgPaths.p52c9cf1} fill="var(--fill-0, #E0C6FD)" id="Section 3" />
        </g>
      </svg>
    </div>
  );
}

function Circle1() {
  return (
    <div className="absolute contents left-[312.38px] top-[1291.21px]" data-name="Circle">
      <Sections />
    </div>
  );
}

function ChartInfo2() {
  return (
    <div className="absolute contents left-[436.64px] not-italic text-center text-nowrap top-[1396.15px] whitespace-pre" data-name="Chart Info">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[52px] left-[494.64px] text-[#1e1b39] text-[44px] top-[1428.15px] translate-x-[-50%]">1,375</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[32px] left-[494.64px] text-[#615e83] text-[18px] top-[1396.15px] translate-x-[-50%]">Total Count</p>
    </div>
  );
}

function CardInfo4() {
  return (
    <div className="absolute contents left-[272.73px] not-italic text-nowrap top-[1172.21px] whitespace-pre" data-name="Card Info.">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[272.73px] text-[#1e1b39] text-[22px] top-[1196.21px]">Total viewers</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[272.73px] text-[#9291a5] text-[18px] top-[1172.21px]">Statistics</p>
    </div>
  );
}

function Chart5() {
  return (
    <div className="absolute contents left-[239.64px] top-[1140.21px]" data-name="Chart 5">
      <div className="absolute bg-white h-[477.574px] left-[239.64px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[1140.21px] w-[510px]" data-name="Container" />
      <Identifiers3 />
      <div className="absolute h-0 left-[239.64px] top-[1514.75px] w-[510px]" data-name="Divider 2">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 510 1">
            <line id="Divider 2" stroke="var(--stroke-0, #E5E5EF)" x2="510" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Circle1 />
      <ChartInfo2 />
      <div className="absolute h-0 left-[272.73px] top-[1246.21px] w-[443.55px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="443.55" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardInfo4 />
    </div>
  );
}

function Circle2() {
  return (
    <div className="absolute h-[416.053px] left-[820.64px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[416px_213.268px] top-[850.3px] w-[415.69px]" data-name="Circle" style={{ maskImage: `url('${imgCircle}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 416 417">
        <g id="Circle">
          <g id="Fill">
            <mask fill="white" id="path-1-inside-1_11_1121">
              <path d={svgPaths.p2e0d7e00} />
            </mask>
            <path d={svgPaths.p2e0d7e00} mask="url(#path-1-inside-1_11_1121)" stroke="var(--stroke-0, #4A3AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60" />
          </g>
          <g id="Empty Circle">
            <mask fill="white" id="path-2-inside-2_11_1121">
              <path d={svgPaths.p3312500} />
            </mask>
            <path d={svgPaths.p3312500} mask="url(#path-2-inside-2_11_1121)" stroke="var(--stroke-0, #E5EAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="60" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Circle3() {
  return (
    <div className="absolute contents left-[820.64px] top-[850.3px]" data-name="Circle">
      <Circle2 />
    </div>
  );
}

function Circle4() {
  return (
    <div className="absolute contents left-[820.64px] top-[848.22px]" data-name="Circle">
      <Circle3 />
      <div className="absolute left-[1052.67px] size-[52.745px] top-[848.22px]" data-name="Indicator Dot">
        <div className="absolute bottom-[-30.33%] left-[-15.17%] right-[-15.17%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 69">
            <g filter="url(#filter0_d_11_1039)" id="Indicator Dot">
              <circle cx="34.3723" cy="26.3723" fill="var(--fill-0, #4A3AFF)" r="26.3723" />
              <circle cx="34.3723" cy="26.3723" r="23.8723" stroke="var(--stroke-0, white)" strokeWidth="5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="68.7445" id="filter0_d_11_1039" width="68.7445" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="8" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_1039" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_11_1039" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChartInfo3() {
  return (
    <div className="absolute contents left-[947.14px] not-italic text-[#1e1b39] text-center text-nowrap top-[947.56px] whitespace-pre" data-name="Chart Info">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[84px] left-[1028.64px] text-[78px] top-[947.56px] translate-x-[-50%]">72%</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1028.64px] text-[0px] top-[1031.56px] translate-x-[-50%]">
        <span className="leading-[32px] text-[18px]">{`Sales: `}</span>
        <span className="font-['Inter:Bold',_sans-serif] font-bold leading-[28px] not-italic text-[22px]">$24,400</span>
      </p>
    </div>
  );
}

function GoalRemaining() {
  return (
    <div className="absolute contents left-[1161.73px] not-italic text-nowrap text-right top-[738.22px] whitespace-pre" data-name="Goal Remaining">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[1250.73px] text-[#1e1b39] text-[22px] top-[762.22px] translate-x-[-100%]">$7,600</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[1250.73px] text-[#ff718b] text-[18px] top-[738.22px] translate-x-[-100%]">Remaining</p>
    </div>
  );
}

function GoalAmount() {
  return (
    <div className="absolute contents left-[806.73px] not-italic text-nowrap top-[738.22px] whitespace-pre" data-name="Goal Amount">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[806.73px] text-[#1e1b39] text-[22px] top-[762.22px]">$32,000</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[806.73px] text-[#615e83] text-[18px] top-[738.22px]">Sales goal</p>
    </div>
  );
}

function Chart4() {
  return (
    <div className="absolute contents left-[773.64px] top-[706.22px]" data-name="Chart 4">
      <div className="absolute bg-white h-[410px] left-[773.64px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[706.22px] w-[510px]" data-name="Container" />
      <Circle4 />
      <ChartInfo3 />
      <div className="absolute h-0 left-[806.87px] top-[812.22px] w-[443.55px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="443.55" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <GoalRemaining />
      <GoalAmount />
    </div>
  );
}

function Sections1() {
  return (
    <div className="absolute left-[310.08px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.831px_1.798px] mask-size-[359.462px_184.009px] size-[371.612px] top-[930.41px]" data-name="Sections" style={{ maskImage: `url('${imgSections1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 372 372">
        <g id="Sections">
          <g id="Section 1">
            <mask fill="white" id="path-1-inside-1_11_1113">
              <path d={svgPaths.p21c59880} />
            </mask>
            <path d={svgPaths.p21c59880} mask="url(#path-1-inside-1_11_1113)" stroke="var(--stroke-0, #F0E5FC)" strokeWidth="100" />
          </g>
          <g id="Section 2">
            <mask fill="white" id="path-2-inside-2_11_1113">
              <path d={svgPaths.p16625680} />
            </mask>
            <path d={svgPaths.p16625680} mask="url(#path-2-inside-2_11_1113)" stroke="var(--stroke-0, #C893FD)" strokeWidth="100" />
          </g>
          <g id="Section 3">
            <mask fill="white" id="path-3-inside-3_11_1113">
              <path d={svgPaths.pcd29c00} />
            </mask>
            <path d={svgPaths.pcd29c00} mask="url(#path-3-inside-3_11_1113)" stroke="var(--stroke-0, #E5EAFC)" strokeWidth="100" />
          </g>
          <g id="Section 4">
            <mask fill="white" id="path-4-inside-4_11_1113">
              <path d={svgPaths.p17a75280} />
            </mask>
            <path d={svgPaths.p17a75280} mask="url(#path-4-inside-4_11_1113)" stroke="var(--stroke-0, #C6D2FD)" strokeWidth="100" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Pie2() {
  return (
    <div className="absolute contents left-[314.91px] top-[932.21px]" data-name="Pie">
      <Sections1 />
    </div>
  );
}

function HoverStat2() {
  return (
    <div className="absolute contents left-[441.61px] top-[911.22px]" data-name="Hover Stat">
      <div className="absolute h-[65.423px] left-[441.61px] top-[911.22px] w-[106.071px]" data-name="Container">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 107 66">
          <path d={svgPaths.p23de0980} fill="var(--fill-0, #1E1B39)" id="Container" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[494.64px] not-italic text-[22px] text-center text-nowrap text-white top-[925.36px] translate-x-[-50%] whitespace-pre">3,450</p>
    </div>
  );
}

function Label14() {
  return (
    <div className="absolute contents left-[272.73px] top-[834px]" data-name="Label 1">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[294.95px] not-italic text-[#615e83] text-[18px] text-nowrap top-[834px] whitespace-pre">OSX</p>
      <div className="absolute left-[272.73px] size-[14.216px] top-[836.89px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #F0E5FC)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Label15() {
  return (
    <div className="absolute contents left-[380.41px] top-[834px]" data-name="Label 2">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[402.62px] not-italic text-[#615e83] text-[18px] text-nowrap top-[834px] whitespace-pre">Windows</p>
      <div className="absolute left-[380.41px] size-[14.216px] top-[836.89px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #C893FD)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Label16() {
  return (
    <div className="absolute contents left-[529.08px] top-[834px]" data-name="Label 3">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[551.3px] not-italic text-[#615e83] text-[18px] text-nowrap top-[834px] whitespace-pre">Android</p>
      <div className="absolute left-[529.08px] size-[14.216px] top-[836.89px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #E5EAFC)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Label17() {
  return (
    <div className="absolute contents left-[666.76px] top-[834px]" data-name="Label 4">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[688.98px] not-italic text-[#615e83] text-[18px] text-nowrap top-[834px] whitespace-pre">iOS</p>
      <div className="absolute left-[666.76px] size-[14.216px] top-[836.89px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #C6D2FD)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Identifiers4() {
  return (
    <div className="absolute contents left-[272.73px] top-[834px]" data-name="Identifiers">
      <Label14 />
      <Label15 />
      <Label16 />
      <Label17 />
    </div>
  );
}

function GrowthIndicator() {
  return (
    <div className="absolute left-[694.53px] size-[21.756px] top-[742.46px]" data-name="Growth Indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Growth Indicator">
          <circle cx="10.8781" cy="10.8781" fill="var(--fill-0, #04CE00)" id="Circle" r="10.8781" />
          <path d={svgPaths.p14cf4400} fill="var(--fill-0, white)" id="Arrow" />
        </g>
      </svg>
    </div>
  );
}

function GrowthPercentage() {
  return (
    <div className="absolute contents left-[652.64px] top-[742.46px]" data-name="Growth Percentage">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[18px] left-[652.64px] not-italic text-[#1e1b39] text-[16px] text-nowrap top-[744.34px] whitespace-pre">1.3%</p>
      <GrowthIndicator />
    </div>
  );
}

function GrowthInfo() {
  return (
    <div className="absolute contents left-[605.28px] top-[742.46px]" data-name="Growth Info">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[716.28px] not-italic text-[#615e83] text-[14px] text-nowrap text-right top-[768.22px] tracking-[0.84px] translate-x-[-100%] uppercase whitespace-pre">VS LAST WEEK</p>
      <GrowthPercentage />
    </div>
  );
}

function CardInfo5() {
  return (
    <div className="absolute contents left-[272.73px] not-italic text-nowrap top-[738.22px] whitespace-pre" data-name="Card Info.">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[351.09px] text-[#615e83] text-[18px] top-[767.22px]">users</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[272.73px] text-[#1e1b39] text-[22px] top-[762.22px]">12,563</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[272.73px] text-[#9291a5] text-[18px] top-[738.22px]">Visits</p>
    </div>
  );
}

function Chart3() {
  return (
    <div className="absolute contents left-[239.64px] top-[706.22px]" data-name="Chart 3">
      <div className="absolute bg-white h-[410px] left-[239.64px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[706.22px] w-[510px]" data-name="Container" />
      <Pie2 />
      <HoverStat2 />
      <Identifiers4 />
      <div className="absolute h-0 left-[272.73px] top-[812.22px] w-[443.55px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 444 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="443.55" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <GrowthInfo />
      <CardInfo5 />
    </div>
  );
}

function Circle5() {
  return (
    <div className="absolute left-[916.09px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.045px_-5.382px] mask-size-[340.056px_181.364px] size-[337.964px] top-[357.59px]" data-name="Circle" style={{ maskImage: `url('${imgCircle1}')` }}>
      <div className="absolute bottom-0 left-0 right-[-1.87%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 345 338">
          <g id="Circle">
            <g id="Red">
              <mask fill="white" id="path-1-inside-1_11_1006">
                <path d={svgPaths.p1a9ac040} />
              </mask>
              <path d={svgPaths.p1a9ac040} mask="url(#path-1-inside-1_11_1006)" stroke="var(--stroke-0, #FF718B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28.3966" />
            </g>
            <g id="Pink">
              <mask fill="white" id="path-2-inside-2_11_1006">
                <path d={svgPaths.p24105080} />
              </mask>
              <path d={svgPaths.p24105080} mask="url(#path-2-inside-2_11_1006)" stroke="var(--stroke-0, #FCB5C3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28.3966" />
            </g>
            <g id="Yellow">
              <mask fill="white" id="path-3-inside-3_11_1006">
                <path d={svgPaths.p1af37780} />
              </mask>
              <path d={svgPaths.p1af37780} mask="url(#path-3-inside-3_11_1006)" stroke="var(--stroke-0, #FFEB3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28.3966" />
            </g>
            <g id="Green">
              <mask fill="white" id="path-4-inside-4_11_1006">
                <path d={svgPaths.p27fb1280} />
              </mask>
              <path d={svgPaths.p27fb1280} mask="url(#path-4-inside-4_11_1006)" stroke="var(--stroke-0, #7FE47E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28.3966" />
            </g>
            <g filter="url(#filter0_d_11_1006)" id="Indicator Dot">
              <circle cx="319.131" cy="113.646" fill="var(--fill-0, white)" r="17.1387" />
              <circle cx="319.131" cy="113.646" r="13.6387" stroke="var(--stroke-0, #7FE47E)" strokeWidth="7" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50.2773" id="filter0_d_11_1006" width="50.2773" x="293.992" y="96.5077">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_1006" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_11_1006" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[915.05px] top-[352.21px]" data-name="Mask group">
      <Circle5 />
    </div>
  );
}

function CardInfo6() {
  return (
    <div className="absolute contents left-[919.87px] not-italic text-nowrap top-[241.04px] whitespace-pre" data-name="Card Info.">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[919.87px] text-[#1e1b39] text-[22px] top-[265.05px]">Credit score</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[919.87px] text-[#9291a5] text-[18px] top-[241.04px]">Statistics</p>
    </div>
  );
}

function Chat2() {
  return (
    <div className="absolute contents left-[886.51px] top-[208.94px]" data-name="Chat 2">
      <div className="absolute bg-white h-[473.28px] left-[886.51px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[208.94px] w-[397.137px]" data-name="Container" />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[24px] left-[1085.07px] not-italic text-[#1e1b39] text-[18px] text-center text-nowrap top-[558.58px] translate-x-[-50%] whitespace-pre">{`Your credit score is  `}</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[18px] left-[1085.07px] not-italic text-[#615e83] text-[16px] text-center text-nowrap top-[593.58px] translate-x-[-50%] whitespace-pre">Updated Nov 24, 2022</p>
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[84px] left-[1085.07px] not-italic text-[#1e1b39] text-[78px] text-center text-nowrap top-[456.03px] translate-x-[-50%] whitespace-pre">821</p>
      <MaskGroup />
      <div className="absolute h-0 left-[919.87px] top-[314.94px] w-[331.776px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="331.776" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardInfo6 />
    </div>
  );
}

function Label18() {
  return (
    <div className="absolute contents left-[615.35px] top-[571.58px]" data-name="Label 3">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[637.56px] not-italic text-[#615e83] text-[18px] text-nowrap top-[571.58px] whitespace-pre">Development team</p>
      <div className="absolute left-[615.35px] size-[14.216px] top-[574.47px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #4A3AFF)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Label19() {
  return (
    <div className="absolute contents left-[615.35px] top-[513.58px]" data-name="Label 2">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[637.56px] not-italic text-[#615e83] text-[18px] text-nowrap top-[513.58px] whitespace-pre">Marketing team</p>
      <div className="absolute left-[615.35px] size-[14.216px] top-[516.47px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #C6D2FD)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Label20() {
  return (
    <div className="absolute contents left-[615.35px] top-[455.57px]" data-name="Label 1">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[637.56px] not-italic text-[#615e83] text-[18px] text-nowrap top-[455.57px] whitespace-pre">Product team</p>
      <div className="absolute left-[615.35px] size-[14.216px] top-[458.47px]" data-name="Identifier">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <circle cx="7.10791" cy="7.10791" fill="var(--fill-0, #962DFF)" id="Identifier" r="7.10791" />
        </svg>
      </div>
    </div>
  );
}

function Identifiers5() {
  return (
    <div className="absolute contents left-[615.35px] top-[455.57px]" data-name="Identifiers">
      <Label18 />
      <Label19 />
      <Label20 />
    </div>
  );
}

function Out() {
  return (
    <div className="absolute left-[291.28px] size-[271.28px] top-[350.94px]" data-name="Out">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 272">
        <g id="Out">
          <circle cx="135.643" cy="136.316" id="Out Circle" r="129.583" stroke="var(--stroke-0, #E5E5EF)" strokeWidth="8.51899" />
          <g id="Out Fill">
            <mask fill="white" id="path-2-inside-1_11_1049">
              <path d={svgPaths.pe40e180} />
            </mask>
            <path d={svgPaths.pe40e180} mask="url(#path-2-inside-1_11_1049)" stroke="var(--stroke-0, #962DFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="17.038" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Medium() {
  return (
    <div className="absolute h-[203.465px] left-[323.3px] top-[385.39px] w-[207.26px]" data-name="Medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 204">
        <g id="Medium">
          <circle cx="103.632" cy="101.86" id="Medium Crcle" r="97.0481" stroke="var(--stroke-0, #E5E5EF)" strokeWidth="8.51899" />
          <g id="Medium Fill">
            <mask fill="white" id="path-2-inside-1_11_1133">
              <path d={svgPaths.pea35880} />
            </mask>
            <path d={svgPaths.pea35880} mask="url(#path-2-inside-1_11_1133)" stroke="var(--stroke-0, #C6D2FD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28.3966" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Inner() {
  return (
    <div className="absolute h-[136.413px] left-[358.08px] top-[418.86px] w-[137.692px]" data-name="Inner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138 137">
        <g id="Inner">
          <circle cx="68.8454" cy="68.3889" id="Inner Circle" r="63.7646" stroke="var(--stroke-0, #E5E5EF)" strokeWidth="8.51899" />
          <g id="Inner Fill">
            <mask fill="white" id="path-2-inside-1_11_1072">
              <path d={svgPaths.p22547140} />
            </mask>
            <path d={svgPaths.p22547140} mask="url(#path-2-inside-1_11_1072)" stroke="var(--stroke-0, #4A3AFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="28.3966" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PieChart() {
  return (
    <div className="absolute contents left-[291.28px] top-[350.94px]" data-name="Pie Chart">
      <Out />
      <Medium />
      <Inner />
    </div>
  );
}

function CardInfo7() {
  return (
    <div className="absolute contents left-[271.64px] not-italic text-nowrap top-[240.94px] whitespace-pre" data-name="Card Info.">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[28px] left-[271.64px] text-[#1e1b39] text-[22px] top-[264.94px]">Productivity</p>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[271.64px] text-[#9291a5] text-[18px] top-[240.94px]">Statistics</p>
    </div>
  );
}

function Chart1() {
  return (
    <div className="absolute contents left-[239.64px] top-[208.94px]" data-name="Chart 1">
      <div className="absolute bg-white h-[473.28px] left-[239.64px] rounded-[20px] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-[208.94px] w-[622.863px]" data-name="Container" />
      <Identifiers5 />
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[52px] left-[612.56px] not-italic text-[#1e1b39] text-[44px] text-nowrap top-[370.57px] whitespace-pre">7hr 32m</p>
      <PieChart />
      <div className="absolute h-0 left-[271.64px] top-[314.94px] w-[558.863px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 559 1">
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x2="558.863" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <CardInfo7 />
    </div>
  );
}

function DashAbstraction() {
  return (
    <div className="absolute contents left-[239.64px] top-[123.19px]" data-name="Dash Abstraction">
      <div className="absolute bg-[#9291a5] h-[16.62px] left-[239.64px] rounded-[10px] top-[123.19px] w-[113.45px]" data-name="Dash Element" />
      <div className="absolute bg-[#e5e5ef] h-[17px] left-[240px] rounded-[10px] top-[152.81px] w-[185px]" data-name="Dash Element" />
    </div>
  );
}

function DashboardEelements() {
  return (
    <div className="absolute contents left-[239.64px] top-[122px]" data-name="Dashboard Eelements">
      <DashAbstraction />
      <div className="absolute bg-[#4a3aff] h-[49px] left-[1160px] rounded-[56px] top-[122px] w-[124px]" data-name="Abstract Button" />
    </div>
  );
}

function Panel() {
  return (
    <div className="absolute h-[9705px] left-0 top-0 w-[83px]" data-name="Panel">
      <div className="absolute inset-[-0.04%_-7.23%_-0.08%_-7.23%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 95 9717">
          <g id="Panel">
            <g filter="url(#filter0_d_11_1093)" id="Panel Container">
              <rect fill="var(--fill-0, white)" height="9705" width="83" x="6" y="4" />
            </g>
            <line id="Divider" stroke="var(--stroke-0, #E5E5EF)" x1="17.5" x2="77.5" y1="360.5" y2="360.5" />
            <circle cx="47.4998" cy="115.016" fill="var(--fill-0, #4A3AFF)" id="Active Element" opacity="0.7" r="9.01642" />
            <circle cx="47.4998" cy="162" fill="var(--fill-0, #E5E5EF)" id="Panel Element" r="9.01642" />
            <circle cx="47.4998" cy="208.984" fill="var(--fill-0, #E5E5EF)" id="Panel Element_2" r="9.01642" />
            <circle cx="47.4998" cy="412.516" fill="var(--fill-0, #E5E5EF)" id="Panel Element_3" r="9.01642" />
            <circle cx="47.4998" cy="255.967" fill="var(--fill-0, #E5E5EF)" id="Panel Element_4" r="9.01642" />
            <circle cx="47.4998" cy="459.5" fill="var(--fill-0, #E5E5EF)" id="Panel Element_5" r="9.01642" />
            <circle cx="47.4998" cy="302.951" fill="var(--fill-0, #E5E5EF)" id="Panel Element_6" r="9.01642" />
            <circle cx="47.4998" cy="506.484" fill="var(--fill-0, #E5E5EF)" id="Panel Element_7" r="9.01642" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="9717" id="filter0_d_11_1093" width="95" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_11_1093" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_11_1093" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[0.9%_96.22%_98.11%_3.27%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 26">
        <g id="Group 3">
          <path clipRule="evenodd" d={svgPaths.p34788ab0} fill="var(--fill-0, #8055FA)" fillRule="evenodd" id="Oval" />
          <path clipRule="evenodd" d={svgPaths.p2176e440} fill="var(--fill-0, #7550FB)" fillRule="evenodd" id="Oval Copy" />
          <path clipRule="evenodd" d={svgPaths.p2e305400} fill="var(--fill-0, #6A4AFC)" fillRule="evenodd" id="Oval Copy 2" />
        </g>
      </svg>
    </div>
  );
}

function Group3Copy() {
  return (
    <div className="absolute inset-[1.25%_96.85%_98.11%_2.62%]" data-name="Group 3 Copy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 17">
        <g id="Group 3 Copy">
          <path clipRule="evenodd" d={svgPaths.p10315300} fill="var(--fill-0, #6045FD)" fillRule="evenodd" id="Oval Copy" />
          <path clipRule="evenodd" d={svgPaths.p2a0fbb00} fill="var(--fill-0, #553FFE)" fillRule="evenodd" id="Oval Copy 2" />
        </g>
      </svg>
    </div>
  );
}

function Group3Copy2() {
  return (
    <div className="absolute inset-[1.61%_97.51%_98.11%_1.99%]" data-name="Group 3 Copy 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="Group 3 Copy 2">
          <path clipRule="evenodd" d={svgPaths.pb4b1380} fill="var(--fill-0, #4A3AFF)" fillRule="evenodd" id="Oval Copy 2" />
        </g>
      </svg>
    </div>
  );
}

function Group5Copy() {
  return (
    <div className="absolute contents inset-[0.9%_96.22%_98.11%_1.99%]" data-name="Group 5 Copy">
      <Group3 />
      <Group3Copy />
      <Group3Copy2 />
    </div>
  );
}

function BrixLogo() {
  return (
    <div className="absolute contents inset-[0.9%_96.22%_98.11%_1.99%]" data-name="BRIX Logo">
      <Group5Copy />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Header">
      <div className="absolute bg-white bottom-[97.27%] left-0 right-[-0.07%] shadow-[0px_2px_6px_0px_rgba(13,10,44,0.08)] top-0" data-name="Header Container" />
      <div className="absolute bg-[#f7f7fb] inset-[0.58%_63.47%_97.85%_15.69%] rounded-[50px]" data-name="Input" />
      <div className="absolute bg-[#e5e5ef] h-[11px] left-[1274px] rounded-[10px] top-[39.87px] w-[112px]" data-name="Header Element" />
      <div className="absolute bg-[#9291a5] h-[11.745px] left-[1274px] rounded-[10px] top-[22px] w-[75.948px]" data-name="Header Element" />
      <div className="absolute bg-[#e5e5ef] h-[13.091px] left-[108px] rounded-[10px] top-[29.91px] w-[93.902px]" data-name="Header Element" />
      <div className="absolute left-[1226px] size-[40px] top-[15.5px]" data-name="Header Element">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, #E9E7FF)" id="Header Element" r="20" />
        </svg>
      </div>
      <BrixLogo />
    </div>
  );
}

function Dashboard() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Dashboard">
      <DashboardEelements />
      <Panel />
      <Header />
    </div>
  );
}

export default function PieCharts() {
  return (
    <div className="bg-[ghostwhite] relative size-full" data-name="Pie Charts">
      <Chart9 />
      <Chart8 />
      <Chart7 />
      <Chart6 />
      <Chart5 />
      <Chart4 />
      <Chart3 />
      <Chat2 />
      <Chart1 />
      <Dashboard />
    </div>
  );
}