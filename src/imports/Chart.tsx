import svgPaths from "./svg-d8tevcw3uf";
import imgFrame1149 from "figma:asset/7ae54b047cabfc389ad01185b8d32e9e77e92cb4.png";
import imgLine22 from "figma:asset/faa13dfe1c02773e34513b3c5dadd6ca22998d22.png";

function Frame10() {
  return (
    <div className="absolute h-[20.725px] left-[30.23px] top-[32.81px] w-[18.422px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 21">
        <g id="Frame 10">
          <path d={svgPaths.p102359b0} fill="var(--fill-0, #B388FE)" id="Vector 2" />
          <path d={svgPaths.p3cefa000} fill="var(--fill-0, #6E39CB)" id="Vector 3" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[53.645px] left-0 top-0 w-[78px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78 54">
        <g id="Frame 11">
          <path d={svgPaths.pab43a80} fill="var(--fill-0, #6E39CB)" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[53.645px] left-[70px] top-[50.37px] w-[78px]" data-name="logo">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function IconHome() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Icon/home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_16_1721)" id="Icon/home">
          <path d={svgPaths.p321b6800} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_16_1721">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1000003138() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <IconHome />
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Home</p>
    </div>
  );
}

function IconDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/down">
          <path d={svgPaths.pc928000} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003131() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]">
      <IconDown />
    </div>
  );
}

function Frame1000003132() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003138 />
      <Frame1000003131 />
    </div>
  );
}

function SideBarOption() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[155px] w-[206px]" data-name="side bar option">
      <Frame1000003132 />
    </div>
  );
}

function IconPages() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Icon/pages">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/pages">
          <path d={svgPaths.p27fc9300} fill="var(--fill-0, #6E39CB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]" data-name="Dashboard">
      <IconPages />
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#6e39cb] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Pages</p>
    </div>
  );
}

function IconUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/up">
          <path d={svgPaths.p2af69600} fill="var(--fill-0, #6E39CB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]" data-name="Icon">
      <IconUp />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[18px] left-[5px] top-[11px] w-[172px]" data-name="Text">
      <Dashboard />
      <Icon />
    </div>
  );
}

function SideBarOption1() {
  return (
    <div className="absolute bg-[#deccfe] h-[40px] left-[21px] rounded-[8px] top-0 w-[185px]" data-name="side bar option">
      <Text />
    </div>
  );
}

function SideIcon1() {
  return <div className="absolute bg-[#6e39cb] h-[40px] left-0 rounded-br-[20px] rounded-tr-[20px] top-0 w-[6px]" data-name="Side Icon" />;
}

function SideBarOption2() {
  return (
    <div className="absolute h-[40px] left-0 top-[225px] w-[206px]" data-name="Side Bar Option 2">
      <SideBarOption1 />
      <SideIcon1 />
    </div>
  );
}

function IconApplications() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Icon/applications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/applications">
          <path d={svgPaths.p260d00} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003139() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <IconApplications />
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Applications</p>
    </div>
  );
}

function IconDown2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/down">
          <path d={svgPaths.pc928000} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003133() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]">
      <IconDown2 />
    </div>
  );
}

function Frame1000003134() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003139 />
      <Frame1000003133 />
    </div>
  );
}

function SideBarOption3() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[605px] w-[206px]" data-name="side bar option">
      <Frame1000003134 />
    </div>
  );
}

function IconECommerce() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Icon/e commerce">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/e commerce">
          <path d={svgPaths.p1b527100} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003140() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <IconECommerce />
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">E-commerce</p>
    </div>
  );
}

function IconDown3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/down">
          <path d={svgPaths.pc928000} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003135() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]">
      <IconDown3 />
    </div>
  );
}

function Frame1000003141() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003140 />
      <Frame1000003135 />
    </div>
  );
}

function SideBarOption4() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[675px] w-[206px]" data-name="side bar option">
      <Frame1000003141 />
    </div>
  );
}

function IconAuthentication() {
  return (
    <div className="absolute left-0 size-[18px] top-0" data-name="Icon/authentication">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_16_1808)" id="Icon/authentication">
          <path d={svgPaths.p1aa17f00} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_16_1808">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1000003142() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <IconAuthentication />
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Authentication</p>
    </div>
  );
}

function IconDown4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/down">
          <path d={svgPaths.pc928000} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003143() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]">
      <IconDown4 />
    </div>
  );
}

function Frame1000003144() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003142 />
      <Frame1000003143 />
    </div>
  );
}

function SideBarOption5() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[745px] w-[206px]" data-name="side bar option">
      <Frame1000003144 />
    </div>
  );
}

function Frame1149() {
  return (
    <div className="absolute left-0 rounded-[21px] size-[28px] top-0">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21px]">
        <img alt="" className="absolute h-[132.14%] left-[-52.02%] max-w-none top-[-3.12%] w-[200%]" src={imgFrame1149} />
      </div>
    </div>
  );
}

function Frame1184() {
  return (
    <div className="relative shrink-0 size-[28px]">
      <Frame1149 />
    </div>
  );
}

function Frame1150() {
  return (
    <div className="content-stretch flex flex-col font-['Lato:Regular',_sans-serif] gap-px items-start leading-[normal] not-italic relative shrink-0 text-nowrap text-white whitespace-pre">
      <p className="relative shrink-0 text-[12.64px]">Anita Cruz</p>
      <p className="relative shrink-0 text-[10px]">anita@commerce.com</p>
    </div>
  );
}

function UserInfo() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[10px] top-[13px]" data-name="user info">
      <Frame1184 />
      <Frame1150 />
    </div>
  );
}

function IconMenu() {
  return (
    <div className="absolute left-[156px] size-[14px] top-[8px]" data-name="Icon/menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/menu">
          <path clipRule="evenodd" d={svgPaths.p26cce200} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003136() {
  return (
    <div className="absolute bg-[#6e39cb] bottom-[20px] h-[55px] left-1/2 overflow-clip rounded-[8px] translate-x-[-50%] w-[178px]">
      <UserInfo />
      <IconMenu />
    </div>
  );
}

function Frame1000003145() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Profile</p>
    </div>
  );
}

function IconDown5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/down">
          <path d={svgPaths.pc928000} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003146() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]">
      <IconDown5 />
    </div>
  );
}

function Frame1000003147() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003145 />
      <Frame1000003146 />
    </div>
  );
}

function SideBarOption6() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[10px] w-[206px]" data-name="side bar option">
      <Frame1000003147 />
    </div>
  );
}

function Frame1000003148() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Users</p>
    </div>
  );
}

function IconDown6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/down">
          <path d={svgPaths.pc928000} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003149() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]">
      <IconDown6 />
    </div>
  );
}

function Frame1000003150() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003148 />
      <Frame1000003149 />
    </div>
  );
}

function SideBarOption7() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[50px] w-[206px]" data-name="side bar option">
      <Frame1000003150 />
    </div>
  );
}

function Frame1000003151() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Account</p>
    </div>
  );
}

function IconDown7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/down">
          <path d={svgPaths.pc928000} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003152() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]">
      <IconDown7 />
    </div>
  );
}

function Frame1000003153() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003151 />
      <Frame1000003152 />
    </div>
  );
}

function SideBarOption8() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[90px] w-[206px]" data-name="side bar option">
      <Frame1000003153 />
    </div>
  );
}

function Frame1000003154() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Projects</p>
    </div>
  );
}

function IconDown8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon/down">
          <path d={svgPaths.pc928000} fill="var(--fill-0, #3A3541)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1000003155() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start right-0 top-[2px]">
      <IconDown8 />
    </div>
  );
}

function Frame1000003156() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003154 />
      <Frame1000003155 />
    </div>
  );
}

function SideBarOption9() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[130px] w-[206px]" data-name="side bar option">
      <Frame1000003156 />
    </div>
  );
}

function Frame1000003157() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#6e39cb] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Charts</p>
    </div>
  );
}

function Frame1000003158() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003157 />
    </div>
  );
}

function SideBarOption10() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[210px] w-[206px]" data-name="side bar option">
      <Frame1000003158 />
    </div>
  );
}

function Frame1000003159() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Pricing page</p>
    </div>
  );
}

function Frame1000003160() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003159 />
    </div>
  );
}

function SideBarOption11() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[170px] w-[206px]" data-name="side bar option">
      <Frame1000003160 />
    </div>
  );
}

function Frame1000003161() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Notification</p>
    </div>
  );
}

function Frame1000003162() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003161 />
    </div>
  );
}

function SideBarOption12() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[250px] w-[206px]" data-name="side bar option">
      <Frame1000003162 />
    </div>
  );
}

function Frame1000003163() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[95px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[26px] not-italic text-[#3a3541] text-[14.22px] text-nowrap top-[0.5px] whitespace-pre">Chat</p>
    </div>
  );
}

function Frame1000003164() {
  return (
    <div className="absolute h-[18px] left-[26px] top-[11px] w-[172px]">
      <Frame1000003163 />
    </div>
  );
}

function SideBarOption13() {
  return (
    <div className="absolute h-[40px] left-0 rounded-br-[8px] rounded-tr-[8px] top-[290px] w-[206px]" data-name="side bar option">
      <Frame1000003164 />
    </div>
  );
}

function Frame1000003137() {
  return (
    <div className="absolute h-[340px] left-0 overflow-clip top-[265px] w-[206px]">
      <SideBarOption6 />
      <SideBarOption7 />
      <SideBarOption8 />
      <SideBarOption9 />
      <SideBarOption10 />
      <SideBarOption11 />
      <SideBarOption12 />
      <SideBarOption13 />
    </div>
  );
}

function SideBar6() {
  return (
    <div className="absolute bg-white h-[1200px] left-0 top-0 w-[218px]" data-name="Side bar 6">
      <Logo />
      <SideBarOption />
      <SideBarOption2 />
      <SideBarOption3 />
      <SideBarOption4 />
      <SideBarOption5 />
      <Frame1000003136 />
      <Frame1000003137 />
    </div>
  );
}

function IconSearch() {
  return (
    <div className="h-[14px] relative shrink-0 w-[13px]" data-name="Icon/search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g clipPath="url(#clip0_16_1766)" id="Icon/search">
          <path d={svgPaths.p19f9d100} fill="var(--fill-0, #89868D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_16_1766">
            <rect fill="white" height="14" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center right-[15px] top-[16px]">
      <IconSearch />
    </div>
  );
}

function TextField1() {
  return (
    <div className="bg-white h-[46px] relative rounded-[30px] shrink-0 w-[330px]" data-name="Text field 1">
      <div className="h-[46px] overflow-clip relative rounded-[inherit] w-[330px]">
        <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[normal] left-[15px] text-[#89868d] text-[14.22px] text-nowrap top-[calc(50%-10px)] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Search anything here...
        </p>
        <Frame12 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dbdcde] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute content-stretch flex gap-[100px] items-center left-0 top-0" data-name="Top Bar">
      <p className="font-['Lato:Bold',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6e39cb] text-[25.63px] text-nowrap whitespace-pre">Chart</p>
      <TextField1 />
    </div>
  );
}

function Chart() {
  return (
    <div className="absolute h-[56px] leading-[normal] left-0 not-italic text-nowrap top-[76px] w-[164px] whitespace-pre" data-name="Chart">
      <p className="absolute font-['Lato:Bold',_sans-serif] left-0 text-[#3a3541] text-[25.63px] top-0">Charts</p>
      <p className="absolute font-['Lato:Regular',_sans-serif] left-0 text-[#89868d] text-[12.64px] top-[41px]">Charts on this page use Chart</p>
    </div>
  );
}

function Outcome() {
  return (
    <div className="absolute h-[10.875px] left-[464.42px] top-[3.2px] w-[48.617px]" data-name="Outcome">
      <div className="absolute bg-[#6e39cb] left-0 rounded-[6.397px] size-[5.118px] top-[2.88px]" data-name="Identifier" />
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[10.88px] not-italic text-[#6e39cb] text-[9.097px] text-nowrap top-0 whitespace-pre">Sales</p>
    </div>
  );
}

function SalesByAge() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[513px]" data-name="Sales by Age">
      <p className="absolute font-['Lato:Medium',_sans-serif] leading-[normal] left-0 not-italic text-[#3a3541] text-[12.954px] text-nowrap top-0 whitespace-pre">Line Chart</p>
      <Outcome />
    </div>
  );
}

function Sales() {
  return (
    <div className="absolute content-stretch flex font-['Lato:Medium',_sans-serif] gap-[19.191px] items-start leading-[normal] left-[58px] not-italic text-[#89868d] text-[10.235px] text-nowrap top-[327px] whitespace-pre" data-name="Sales">
      <p className="relative shrink-0">10</p>
      <p className="relative shrink-0">20</p>
      <p className="relative shrink-0">30</p>
      <p className="relative shrink-0">40</p>
      <p className="relative shrink-0">50</p>
      <p className="relative shrink-0">60</p>
      <p className="relative shrink-0">70</p>
      <p className="relative shrink-0">80</p>
      <p className="relative shrink-0">90</p>
      <p className="relative shrink-0">100</p>
      <p className="relative shrink-0">200</p>
      <p className="relative shrink-0">300</p>
      <p className="relative shrink-0">400</p>
      <p className="relative shrink-0">500</p>
    </div>
  );
}

function Component25To31() {
  return (
    <div className="absolute content-stretch flex gap-[19.191px] items-center left-0 top-[135px]" data-name="25 to 31">
      <p className="font-['Lato:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#89868d] text-[10.235px] text-nowrap whitespace-pre">25 to 30</p>
      <div className="h-0 relative shrink-0 w-[454.829px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.7px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Line 5" stroke="var(--stroke-0, #DBDCDE)" strokeLinecap="round" strokeWidth="0.69766" x1="0.34883" x2="454.48" y1="0.65117" y2="0.65117" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component30To36() {
  return (
    <div className="absolute content-stretch flex gap-[18.551px] items-center left-px top-[87px]" data-name="30 to 36">
      <p className="font-['Lato:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#89868d] text-[10.235px] text-nowrap whitespace-pre">30 to 35</p>
      <div className="h-0 relative shrink-0 w-[454.829px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.7px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Divider" stroke="var(--stroke-0, #DBDCDE)" strokeWidth="0.69766" x2="454.829" y1="0.65117" y2="0.65117" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component35To41() {
  return (
    <div className="absolute content-stretch flex gap-[18.551px] items-center left-px top-[39px]" data-name="35 to 41">
      <p className="font-['Lato:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#89868d] text-[10.235px] text-nowrap whitespace-pre">35 to 40</p>
      <div className="h-0 relative shrink-0 w-[454.829px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.7px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Divider" stroke="var(--stroke-0, #DBDCDE)" strokeWidth="0.69766" x2="454.829" y1="0.65117" y2="0.65117" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component20To26() {
  return (
    <div className="absolute content-stretch flex gap-[19.191px] items-center left-0 top-[183px]" data-name="20 to 26">
      <p className="font-['Lato:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#89868d] text-[10.235px] text-nowrap whitespace-pre">20 to 25</p>
      <div className="h-0 relative shrink-0 w-[454.829px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.7px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Line 6" stroke="var(--stroke-0, #DBDCDE)" strokeLinecap="round" strokeWidth="0.69766" x1="0.34883" x2="454.48" y1="0.65117" y2="0.65117" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component15To21() {
  return (
    <div className="absolute content-stretch flex gap-[19.191px] items-center left-0 top-[231px]" data-name="15 to 21">
      <p className="font-['Lato:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#89868d] text-[10.235px] text-nowrap whitespace-pre">15 to 20</p>
      <div className="h-0 relative shrink-0 w-[454.829px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.7px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Line 6" stroke="var(--stroke-0, #DBDCDE)" strokeLinecap="round" strokeWidth="0.69766" x1="0.34883" x2="454.48" y1="0.65117" y2="0.65117" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component10To16() {
  return (
    <div className="absolute content-stretch flex gap-[19.191px] items-center left-0 top-[279px]" data-name="10 to 16">
      <p className="font-['Lato:Medium',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#89868d] text-[10.235px] text-nowrap whitespace-pre">10 to 15</p>
      <div className="h-0 relative shrink-0 w-[454.829px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.7px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 455 1">
            <line id="Line 6" stroke="var(--stroke-0, #DBDCDE)" strokeLinecap="round" strokeWidth="0.69766" x1="0.34883" x2="454.48" y1="0.65117" y2="0.65117" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1000003644() {
  return (
    <div className="absolute h-[339px] left-[25px] top-[32px] w-[513px]">
      <SalesByAge />
      <Sales />
      <Component25To31 />
      <Component30To36 />
      <Component35To41 />
      <Component20To26 />
      <Component15To21 />
      <Component10To16 />
      <div className="absolute h-[136px] left-[85px] top-[148px] w-[344px]">
        <div className="absolute inset-[-3.99%_-6.23%_-25.61%_-5.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 385 177">
            <g filter="url(#filter0_d_16_1756)" id="Vector 127">
              <path d={svgPaths.p1a019be0} stroke="var(--stroke-0, #6E39CB)" strokeWidth="3.18812" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="176.268" id="filter0_d_16_1756" width="384.265" x="0.160519" y="0.567473">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dx="1.91911" dy="15.3529" />
                <feGaussianBlur stdDeviation="9.59554" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.0331945 0 0 0 0 0.244975 0 0 0 0 0.995833 0 0 0 0.26 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_16_1756" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_16_1756" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LineChart() {
  return (
    <div className="absolute bg-white h-[404px] left-0 overflow-clip rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] top-0 w-[565px]" data-name="Line chart">
      <Frame1000003644 />
    </div>
  );
}

function LoanIncome() {
  return (
    <div className="absolute h-[51px] leading-[normal] left-0 not-italic text-nowrap top-0 w-[130px] whitespace-pre" data-name="Loan income">
      <p className="absolute font-['Lato:Medium',_sans-serif] left-0 text-[#89868d] text-[18px] top-0">Bar Chart</p>
      <p className="absolute font-['Lato:Bold',_sans-serif] left-0 text-[#3a3541] text-[22.78px] top-[24px]">$860,472.29</p>
    </div>
  );
}

function Frame1000003481() {
  return (
    <div className="absolute h-[17px] left-0 top-[174px] w-[499px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#3a3541] text-[14.22px] text-nowrap top-0 whitespace-pre">0</p>
      <div className="absolute h-0 left-[21px] top-[8.5px] w-[478px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 2">
            <line id="Line 5" stroke="var(--stroke-0, #E5E5EF)" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="477.25" y1="1.25" y2="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1000003482() {
  return (
    <div className="absolute h-[17px] left-0 top-[121px] w-[506px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#3a3541] text-[14.22px] text-nowrap top-0 whitespace-pre">1k</p>
      <div className="absolute h-0 left-[28px] top-[8.5px] w-[478px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 2">
            <line id="Line 6" stroke="var(--stroke-0, #E5E5EF)" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="477.25" y1="1.25" y2="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1000003483() {
  return (
    <div className="absolute h-[17px] left-0 top-[68px] w-[506px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#3a3541] text-[14.22px] text-nowrap top-0 whitespace-pre">2k</p>
      <div className="absolute h-0 left-[28px] top-[8.5px] w-[478px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 2">
            <line id="Line 6" stroke="var(--stroke-0, #E5E5EF)" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="477.25" y1="1.25" y2="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1000003484() {
  return (
    <div className="absolute h-[17px] left-0 top-[15px] w-[506px]">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#3a3541] text-[14.22px] text-nowrap top-0 whitespace-pre">3k</p>
      <div className="absolute h-0 left-[28px] top-[8.5px] w-[478px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 2">
            <line id="Line 6" stroke="var(--stroke-0, #E5E5EF)" strokeDasharray="4 7" strokeLinecap="round" strokeWidth="1.5" x1="0.75" x2="477.25" y1="1.25" y2="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1000003492() {
  return (
    <div className="absolute h-[133.055px] left-0 top-[41.01px] w-[26.095px]">
      <div className="absolute bg-[#6e39cb] h-[60.538px] left-0 top-[72.52px] w-[26.095px]" data-name="Blue Bar" />
      <div className="absolute bg-[#d3bbfe] h-[50.804px] left-0 top-[21.71px] w-[26.095px]" data-name="Pink Bar" />
      <div className="absolute bg-[#d3bbfe] h-[22.705px] left-0 rounded-tl-[7px] rounded-tr-[7px] top-0 w-[26.095px]" data-name="Purple Bar" />
    </div>
  );
}

function Frame1000003496() {
  return (
    <div className="absolute h-[115.16px] left-[75.1px] top-[58.74px] w-[26.095px]">
      <div className="absolute bg-[#6e39cb] h-[25.045px] left-0 top-[90.11px] w-[26.095px]" data-name="Blue Bar" />
      <div className="absolute bg-[#d3bbfe] h-[42.904px] left-0 top-[47.21px] w-[26.095px]" data-name="Pink Bar" />
      <div className="absolute bg-[#d3bbfe] h-[47.212px] left-0 rounded-tl-[7px] rounded-tr-[7px] top-0 w-[26.095px]" data-name="Purple Bar" />
    </div>
  );
}

function Frame1000003487() {
  return (
    <div className="absolute h-[162.055px] left-[150.19px] top-[12.01px] w-[26.095px]">
      <div className="absolute bg-[#6e39cb] h-[41.674px] left-0 top-[120.38px] w-[26.095px]" data-name="Blue Bar" />
      <div className="absolute bg-[#d3bbfe] h-[61.268px] left-0 top-[59.11px] w-[26.095px]" data-name="Pink Bar" />
      <div className="absolute bg-[#d3bbfe] h-[59.112px] left-0 rounded-tl-[7px] rounded-tr-[7px] top-0 w-[26.095px]" data-name="Purple Bar" />
    </div>
  );
}

function Frame1000003494() {
  return (
    <div className="absolute h-[140.36px] left-[225.29px] top-[33.54px] w-[26.095px]">
      <div className="absolute bg-[#6e39cb] h-[41.675px] left-0 top-[98.69px] w-[26.095px]" data-name="Blue Bar" />
      <div className="absolute bg-[#d3bbfe] h-[40.01px] left-0 top-[58.67px] w-[26.095px]" data-name="Pink Bar" />
      <div className="absolute bg-[#d3bbfe] h-[58.675px] left-0 rounded-tl-[7px] rounded-tr-[7px] top-0 w-[26.095px]" data-name="Purple Bar" />
    </div>
  );
}

function Frame1000003493() {
  return (
    <div className="absolute h-[163.191px] left-[300.38px] top-[10.71px] w-[26.095px]">
      <div className="absolute bg-[#6e39cb] h-[84.372px] left-0 top-[78.82px] w-[26.095px]" data-name="Blue Bar" />
      <div className="absolute bg-[#d3bbfe] h-[51.753px] left-0 top-[27.07px] w-[26.095px]" data-name="Pink Bar" />
      <div className="absolute bg-[#d3bbfe] h-[27.067px] left-0 rounded-tl-[7px] rounded-tr-[7px] top-0 w-[26.095px]" data-name="Purple Bar" />
    </div>
  );
}

function Frame1000003495() {
  return (
    <div className="absolute h-[120.403px] left-[375.48px] top-[53.5px] w-[26.095px]">
      <div className="absolute bg-[#6e39cb] h-[44.658px] left-0 top-[75.75px] w-[26.095px]" data-name="Blue Bar" />
      <div className="absolute bg-[#d3bbfe] h-[33.431px] left-0 top-[42.31px] w-[26.095px]" data-name="Pink Bar" />
      <div className="absolute bg-[#d3bbfe] h-[42.314px] left-0 rounded-tl-[7px] rounded-tr-[7px] top-0 w-[26.095px]" data-name="Purple Bar" />
    </div>
  );
}

function Frame1000003491() {
  return (
    <div className="absolute h-[174.059px] left-[450.57px] top-0 w-[26.095px]">
      <div className="absolute bg-[#6e39cb] h-[54.771px] left-0 top-[119.29px] w-[26.095px]" data-name="Blue Bar" />
      <div className="absolute bg-[#d3bbfe] h-[47.071px] left-0 top-[72.22px] w-[26.095px]" data-name="Pink Bar" />
      <div className="absolute bg-[#d3bbfe] h-[74.278px] left-0 rounded-tl-[7px] rounded-tr-[7px] top-0 w-[26.095px]" data-name="Purple Bar" />
    </div>
  );
}

function Frame1000003497() {
  return (
    <div className="absolute h-[174.059px] left-[23px] top-[8.6px] w-[476.669px]">
      <Frame1000003492 />
      <Frame1000003496 />
      <Frame1000003487 />
      <Frame1000003494 />
      <Frame1000003493 />
      <Frame1000003495 />
      <Frame1000003491 />
    </div>
  );
}

function Frame1000003498() {
  return (
    <div className="absolute h-[210.288px] left-0 top-[66px] w-[506px]">
      <div className="absolute h-0 left-0 top-0 w-[506px]" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 506 1">
            <line id="Divider" stroke="var(--stroke-0, #DBDCDE)" x2="506" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame1000003481 />
      <Frame1000003482 />
      <Frame1000003483 />
      <Frame1000003484 />
      <Frame1000003497 />
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-[21px] not-italic text-[#3a3541] text-[10px] text-nowrap top-[198.29px] whitespace-pre">5Nov</p>
    </div>
  );
}

function LoanIncome1() {
  return (
    <div className="absolute h-[276px] left-[29px] top-[63px] w-[506px]" data-name="Loan income">
      <LoanIncome />
      <Frame1000003498 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="absolute bg-white h-[404px] left-0 overflow-clip rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] top-[436.5px] w-[565px]" data-name="Bar Chart">
      <LoanIncome1 />
    </div>
  );
}

function IconDown9() {
  return (
    <div className="relative shrink-0 size-[10.335px]" data-name="Icon/down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_16_1740)" id="Icon/down">
          <path d={svgPaths.p48bd900} fill="var(--fill-0, #6E39CB)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_16_1740">
            <rect fill="white" height="10.3347" width="10.3347" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1000003434() {
  return (
    <div className="content-stretch flex gap-[6.459px] items-center relative shrink-0">
      <p className="font-['Lato:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6e39cb] text-[9.185px] text-center text-nowrap whitespace-pre">This Month</p>
      <IconDown9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-[#f4f5f9] box-border content-stretch flex gap-[6.459px] items-start left-[431.47px] p-[6.459px] rounded-[5.167px] top-0">
      <Frame1000003434 />
    </div>
  );
}

function SalesFunnel() {
  return (
    <div className="absolute h-[23.899px] left-0 top-0 w-[507.044px]" data-name="Sales Funnel">
      <Frame13 />
      <p className="absolute font-['Lato:Medium',_sans-serif] leading-[normal] left-0 not-italic text-[#3a3541] text-[13.08px] text-nowrap top-0 whitespace-pre">Line Chart Gradient</p>
    </div>
  );
}

function Component100K() {
  return (
    <div className="absolute h-[9.689px] left-0 top-[35.52px] w-[507.047px]" data-name="100K">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#b4b2b7] text-[8.164px] text-nowrap top-0 whitespace-pre">100K</p>
      <div className="absolute h-0 left-[39.4px] top-[5.01px] w-[467.643px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.66px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468 1">
            <line id="Line 18" stroke="var(--stroke-0, #E7E7F4)" strokeDasharray="1.97 1.97" strokeLinecap="round" strokeWidth="0.657731" x1="0.328866" x2="467.314" y1="0.671134" y2="0.671134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component100K1() {
  return (
    <div className="absolute h-[9.689px] left-0 top-[92.21px] w-[507.047px]" data-name="100K">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#b4b2b7] text-[8.164px] text-nowrap top-0 whitespace-pre">80k</p>
      <div className="absolute h-0 left-[39.4px] top-[5.01px] w-[467.643px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.66px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468 1">
            <line id="Line 18" stroke="var(--stroke-0, #E7E7F4)" strokeDasharray="1.97 1.97" strokeLinecap="round" strokeWidth="0.657731" x1="0.328866" x2="467.314" y1="0.671134" y2="0.671134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component100K2() {
  return (
    <div className="absolute h-[9.689px] left-0 top-[148.9px] w-[507.047px]" data-name="100K">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#b4b2b7] text-[8.164px] text-nowrap top-0 whitespace-pre">60k</p>
      <div className="absolute h-0 left-[39.4px] top-[5.01px] w-[467.643px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.66px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468 1">
            <line id="Line 18" stroke="var(--stroke-0, #E7E7F4)" strokeDasharray="1.97 1.97" strokeLinecap="round" strokeWidth="0.657731" x1="0.328866" x2="467.314" y1="0.671134" y2="0.671134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component100K3() {
  return (
    <div className="absolute h-[9.689px] left-0 top-[205.59px] w-[507.047px]" data-name="100K">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#b4b2b7] text-[8.164px] text-nowrap top-0 whitespace-pre">40k</p>
      <div className="absolute h-0 left-[39.4px] top-[5.01px] w-[467.643px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.66px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468 1">
            <line id="Line 18" stroke="var(--stroke-0, #E7E7F4)" strokeDasharray="1.97 1.97" strokeLinecap="round" strokeWidth="0.657731" x1="0.328866" x2="467.314" y1="0.671134" y2="0.671134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component100K4() {
  return (
    <div className="absolute h-[9.689px] left-0 top-[262.28px] w-[507.047px]" data-name="100K">
      <p className="absolute font-['Lato:Regular',_sans-serif] leading-[normal] left-0 not-italic text-[#b4b2b7] text-[8.164px] text-nowrap top-0 whitespace-pre">40k</p>
      <div className="absolute h-0 left-[39.4px] top-[5.01px] w-[467.643px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.66px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468 1">
            <line id="Line 18" stroke="var(--stroke-0, #E7E7F4)" strokeDasharray="1.97 1.97" strokeLinecap="round" strokeWidth="0.657731" x1="0.328866" x2="467.314" y1="0.671134" y2="0.671134" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Numbers() {
  return (
    <div className="absolute content-stretch flex font-['Lato:Regular',_sans-serif] gap-[19.378px] items-start leading-[normal] left-[40px] not-italic text-[8.164px] text-nowrap top-[318.5px] whitespace-pre" data-name="Numbers">
      <p className="relative shrink-0 text-[#b4b2b7]">10</p>
      <p className="relative shrink-0 text-[#b4b2b7]">11</p>
      <p className="relative shrink-0 text-[#b4b2b7]">12</p>
      <p className="relative shrink-0 text-[#b4b2b7]">13</p>
      <p className="relative shrink-0 text-[#b4b2b7]">14</p>
      <p className="relative shrink-0 text-[#b4b2b7]">15</p>
      <p className="relative shrink-0 text-[#b4b2b7]">16</p>
      <p className="relative shrink-0 text-[#6e39cb]">17</p>
      <p className="relative shrink-0 text-[#b4b2b7]">18</p>
      <p className="relative shrink-0 text-[#b4b2b7]">19</p>
      <p className="relative shrink-0 text-[#b4b2b7]">20</p>
      <p className="relative shrink-0 text-[#b4b2b7]">21</p>
      <p className="relative shrink-0 text-[#b4b2b7]">22</p>
      <p className="relative shrink-0 text-[#b4b2b7]">23</p>
      <p className="relative shrink-0 text-[#b4b2b7]">24</p>
      <p className="relative shrink-0 text-[#b4b2b7]">25</p>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute h-[91.074px] left-[39.4px] top-[176.88px] w-[467.643px]" data-name="Vector">
      <div className="absolute bottom-0 left-0 right-0 top-[-1.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468 94">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p2fdbf500} fill="url(#paint0_linear_16_1734)" fillRule="evenodd" id="Vector 5 (Stroke)" />
            <path d={svgPaths.p2be54c80} id="Vector 4" stroke="var(--stroke-0, #6E39CB)" strokeLinecap="round" strokeWidth="1.29183" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_16_1734" x1="185.073" x2="185.073" y1="8.48" y2="89.1847">
              <stop stopColor="#6E39CB" stopOpacity="0.24" />
              <stop offset="1" stopColor="#6E39CB" stopOpacity="0.01" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#6e39cb] box-border content-stretch flex gap-[11.928px] items-start left-0 px-[9.542px] py-[2.386px] rounded-[4.771px] shadow-[0px_4.771px_9.542px_0px_rgba(0,0,0,0.1)] top-0">
      <p className="font-['Lato:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[15.076px] text-center text-nowrap text-white whitespace-pre">80,234</p>
    </div>
  );
}

function Component80234() {
  return (
    <div className="h-[28.03px] relative shrink-0 w-[66.794px]" data-name="80,234">
      <Frame15 />
      <div className="absolute h-[6.56px] left-[28.63px] top-[21.47px] w-[9.542px]">
        <div className="absolute inset-[-72.73%_-100%_-218.18%_-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 26">
            <g filter="url(#filter0_d_16_1794)" id="Rectangle 310">
              <path d={svgPaths.p27a06680} fill="var(--fill-0, #6E39CB)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.6443" id="filter0_d_16_1794" width="28.6262" x="0.457946" y="0.228973">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4.77103" />
                <feGaussianBlur stdDeviation="4.77103" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_16_1794" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_16_1794" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component80235() {
  return (
    <div className="h-[182.492px] relative shrink-0 w-[8.349px]" data-name="80,234">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[3.58px] top-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "182.484375", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[182.492px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1.19px]">
              <img alt="" className="block max-w-none size-full" height="1.193" src={imgLine22} width="182.492" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 size-[8.349px] top-[11.93px]">
        <div className="absolute inset-[-9.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <circle cx="5.17465" cy="5.17465" fill="var(--fill-0, white)" id="Ellipse 32" r="4.17465" stroke="var(--stroke-0, #6E39CB)" strokeLinecap="round" strokeWidth="1.51805" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Component80236() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[210.76px] top-[57.76px]" data-name="80,234">
      <Component80234 />
      <Component80235 />
    </div>
  );
}

function LineChart1() {
  return (
    <div className="absolute h-[328.5px] left-[30px] top-[30.5px] w-[507.047px]" data-name="Line Chart">
      <SalesFunnel />
      <Component100K />
      <Component100K1 />
      <Component100K2 />
      <Component100K3 />
      <Component100K4 />
      <Numbers />
      <Vector />
      <Component80236 />
    </div>
  );
}

function LineChartGradient() {
  return (
    <div className="absolute bg-white h-[404px] left-[595px] overflow-clip rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] top-[436.5px] w-[565px]" data-name="Line Chart Gradient">
      <LineChart1 />
    </div>
  );
}

function IconHelp() {
  return (
    <div className="absolute left-[486px] size-[18px] top-[3px]" data-name="Icon/help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_16_1726)" id="Icon/help">
          <path d={svgPaths.p30ccd500} fill="var(--fill-0, #89868D)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_16_1726">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1000003646() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[504px]">
      <p className="absolute font-['Lato:Medium',_sans-serif] leading-[normal] left-0 not-italic text-[#3a3541] text-[20.25px] text-nowrap top-0 whitespace-pre">Pie Chart</p>
      <IconHelp />
    </div>
  );
}

function Frame1000003317() {
  return (
    <div className="absolute h-[196px] left-0 top-0 w-[374px]">
      <div className="absolute bottom-0 left-0 right-[-0.16%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 196">
          <g id="Frame 1000003317">
            <g id="Fill">
              <mask fill="white" id="path-1-inside-1_16_1751">
                <path d={svgPaths.p21ab7e00} />
              </mask>
              <path d={svgPaths.p21ab7e00} mask="url(#path-1-inside-1_16_1751)" stroke="var(--stroke-0, #6E39CB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="54.0825" />
            </g>
            <g id="Empty Circle">
              <mask fill="white" id="path-2-inside-2_16_1751">
                <path d={svgPaths.p30d36080} />
              </mask>
              <path d={svgPaths.p30d36080} mask="url(#path-2-inside-2_16_1751)" stroke="var(--stroke-0, #D3BBFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="54.0825" />
            </g>
            <g filter="url(#filter0_d_16_1751)" id="Indicator Dot">
              <circle cx="232.916" cy="23.7713" fill="var(--fill-0, #6E39CB)" r="23.7713" />
              <circle cx="232.916" cy="23.7713" r="21.5179" stroke="var(--stroke-0, white)" strokeWidth="4.50688" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="61.9646" id="filter0_d_16_1751" width="61.9646" x="201.934" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="7.211" />
              <feGaussianBlur stdDeviation="3.6055" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_16_1751" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_16_1751" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Men() {
  return (
    <div className="absolute font-['Lato:Regular',_sans-serif] h-[44.46px] leading-[normal] left-[45.71px] not-italic text-nowrap top-0 w-[42.926px] whitespace-pre" data-name="Men">
      <p className="absolute left-0 text-[#3a3541] text-[21.801px] top-0">35%</p>
      <p className="absolute left-0 text-[#89868d] text-[15.331px] top-[26.06px]">Men</p>
    </div>
  );
}

function Men1() {
  return (
    <div className="absolute h-[44px] left-0 top-[229px] w-[87px]" data-name="Men">
      <Men />
      <div className="absolute left-0 size-[30.662px] top-[6.9px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
          <circle cx="15.3309" cy="15.3309" fill="var(--fill-0, #6E39CB)" id="Ellipse 206" r="15.3309" />
        </svg>
      </div>
    </div>
  );
}

function Women() {
  return (
    <div className="absolute font-['Lato:Regular',_sans-serif] h-[44.46px] leading-[normal] left-[45.71px] not-italic text-nowrap top-0 w-[53.658px] whitespace-pre" data-name="Women">
      <p className="absolute left-0 text-[#3a3541] text-[21.801px] top-0">45%</p>
      <p className="absolute left-0 text-[#89868d] text-[15.331px] top-[26.06px]">Women</p>
    </div>
  );
}

function Women1() {
  return (
    <div className="absolute h-[44px] left-[275px] top-[229px] w-[98px]" data-name="Women">
      <Women />
      <div className="absolute left-0 size-[30.662px] top-[6.9px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
          <circle cx="15.3309" cy="15.3309" fill="var(--fill-0, #D3BBFE)" id="Ellipse 206" r="15.3309" />
        </svg>
      </div>
    </div>
  );
}

function Frame1000003645() {
  return (
    <div className="absolute h-[273px] left-[65px] top-[57px] w-[374px]">
      <Frame1000003317 />
      <Men1 />
      <Women1 />
    </div>
  );
}

function Frame1000003647() {
  return (
    <div className="absolute h-[330px] left-[30px] top-[37px] w-[504px]">
      <Frame1000003646 />
      <Frame1000003645 />
    </div>
  );
}

function PieChart() {
  return (
    <div className="absolute bg-white h-[404px] left-[595px] overflow-clip rounded-[8px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] top-0 w-[564px]" data-name="Pie Chart">
      <Frame1000003647 />
    </div>
  );
}

function Charts() {
  return (
    <div className="absolute h-[840.5px] left-0 top-[162px] w-[1160px]" data-name="Charts">
      <LineChart />
      <BarChart />
      <LineChartGradient />
      <PieChart />
    </div>
  );
}

function Chart1() {
  return (
    <div className="absolute h-[1002.5px] left-[248px] top-[30px] w-[1160px]" data-name="Chart">
      <TopBar />
      <Chart />
      <Charts />
    </div>
  );
}

export default function Chart2() {
  return (
    <div className="bg-[#f4f5f9] relative size-full" data-name="Chart">
      <SideBar6 />
      <Chart1 />
    </div>
  );
}