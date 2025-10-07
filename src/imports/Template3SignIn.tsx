import svgPaths from "./svg-p8mpxgvfto";
import imgBgLeft from "figma:asset/1f0a76e48c1f01e1ef5c0f8953e237bc82aae330.png";
import { imgGroup780, imgBackground } from "./svg-ggtnq";

function Label() {
  return (
    <div className="[grid-area:1_/_1] h-[22.53px] ml-0 mt-0 overflow-clip relative w-[68.688px]" data-name="label">
      <p className="absolute bottom-[-2.09%] font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif] leading-[22.53px] left-0 not-italic text-[#757575] text-[12.8px] text-nowrap top-0 whitespace-pre">Email or Username</p>
    </div>
  );
}

function InputLineUsername() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Input-line/username">
      <p className="[grid-area:1_/_1] font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif] leading-[28.16px] ml-0 mt-[28.53px] not-italic relative text-[#212121] text-[16px] text-nowrap whitespace-pre">johndadev</p>
      <div className="[grid-area:1_/_1] h-[2px] ml-0 mt-[63.03px] relative w-[380px]" data-name="Line">
        <div className="absolute bottom-1/4 left-[-0.13%] right-[-0.13%] top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 2">
            <path d="M1 1H381" id="Line" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Label />
    </div>
  );
}

function Eye() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="eye">
        <mask height="16" id="mask0_19_2980" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="16" x="0" y="0">
          <rect fill="var(--fill-0, white)" height="16" id="Background" width="16" />
        </mask>
        <g mask="url(#mask0_19_2980)">
          <path clipRule="evenodd" d={svgPaths.p23df5180} fill="var(--fill-0, #BEBEBE)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.pa9fc280} fill="var(--fill-0, #BEBEBE)" fillRule="evenodd" id="Shape_2" />
        </g>
      </g>
    </svg>
  );
}

function ExIconEye() {
  return (
    <div className="[grid-area:1_/_1] ml-[364px] mt-[34.09px] relative size-[16px]" data-name="ex-icon/eye">
      <Eye />
    </div>
  );
}

function Label1() {
  return (
    <div className="[grid-area:1_/_1] h-[22.53px] ml-0 mt-0 overflow-clip relative w-[68.688px]" data-name="label">
      <p className="absolute bottom-[-2.09%] font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif] leading-[22.53px] left-0 not-italic text-[#757575] text-[12.8px] top-0 w-[68.688px]">Password</p>
    </div>
  );
}

function InputLineEmailCopy() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Input-line/email Copy">
      <p className="[grid-area:1_/_1] font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif] leading-[28.16px] ml-0 mt-[28.59px] not-italic relative text-[#424242] text-[16px] text-nowrap whitespace-pre">**************</p>
      <ExIconEye />
      <div className="[grid-area:1_/_1] h-[2px] ml-0 mt-[61.09px] relative w-[380px]" data-name="Line">
        <div className="absolute bottom-1/4 left-[-0.13%] right-[-0.13%] top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 382 2">
            <path d="M1 1H381" id="Line" stroke="var(--stroke-0, #BDBDBD)" strokeLinecap="square" />
          </svg>
        </div>
      </div>
      <Label1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0">
      <InputLineUsername />
      <InputLineEmailCopy />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="absolute bottom-[3.91%] left-0 right-[86.94%] top-[0.43%]" data-name="checkbox">
      <div className="absolute inset-[-2.27%_-2.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="checkbox">
            <rect fill="var(--fill-0, #7B76F1)" fillOpacity="0.0980392" height="22" id="Rectangle" rx="2" stroke="var(--stroke-0, #7B76F1)" strokeOpacity="0.25098" width="21.5243" x="1" y="1" />
            <path d={svgPaths.p26e89200} id="New shape" stroke="var(--stroke-0, #7B76F1)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CheckboxLabel() {
  return (
    <div className="h-[23px] overflow-clip relative shrink-0 w-[164.75px]" data-name="checkbox/label">
      <p className="absolute bottom-0 font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif] leading-[22.53px] left-[26.75px] not-italic text-[#757575] text-[10.24px] text-nowrap top-0 whitespace-pre">Remember me</p>
      <Checkbox />
    </div>
  );
}

function BtnPryTemplate1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="btn-pry/template/1">
      <div className="[grid-area:1_/_1] bg-[#7b76f1] h-[56px] ml-0 mt-0 rounded-[56px] shadow-[0px_34px_40px_-8px_rgba(123,118,241,0.24)] w-[153px]" />
      <div className="[grid-area:1_/_1] flex flex-col font-['Zen_Kaku_Gothic_Antique:Bold',_sans-serif] h-[42px] justify-center ml-[76.5px] mt-[28px] not-italic relative text-[12.8px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[114.75px]">
        <p className="leading-[22.53px]">LOG IN</p>
      </div>
    </div>
  );
}

function FlexCol() {
  return (
    <div className="content-stretch flex gap-[62px] items-center relative shrink-0" data-name="flex-col">
      <CheckboxLabel />
      <BtnPryTemplate1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[899.13px] top-[311.45px]">
      <Frame6 />
      <FlexCol />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute contents left-[899.13px] top-[311.45px]" data-name="form">
      <Frame7 />
    </div>
  );
}

function Icons8Google() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[10.87%] relative size-[18px]" data-name="icons8-google">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="icons8-google">
          <mask height="18" id="mask0_19_3039" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="18" id="Background" width="18" />
          </mask>
          <g mask="url(#mask0_19_3039)">
            <path clipRule="evenodd" d={svgPaths.peeb0f00} fill="var(--fill-0, #FFC107)" fillRule="evenodd" id="Shape" />
            <path clipRule="evenodd" d={svgPaths.p20e9b800} fill="var(--fill-0, #FF3D00)" fillRule="evenodd" id="Shape_2" />
            <path clipRule="evenodd" d={svgPaths.p2ac6a700} fill="var(--fill-0, #4CAF50)" fillRule="evenodd" id="Shape_3" />
            <path clipRule="evenodd" d={svgPaths.p266aa00} fill="var(--fill-0, #1976D2)" fillRule="evenodd" id="Shape_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Span() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[12.36%] mt-1/4 place-items-start relative" data-name="span">
      <p className="[grid-area:1_/_1] font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif] leading-[22.53px] ml-[134px] mt-0 not-italic relative text-[#616161] text-[12.8px] text-nowrap text-right tracking-[-0.2px] translate-x-[-100%] whitespace-pre">Log In with Google</p>
      <Icons8Google />
    </div>
  );
}

function BtnOutlineTemplate1Copy() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="btn-outline/template/1 Copy">
      <div className="[grid-area:1_/_1] bg-neutral-50 h-[48px] ml-0 mt-0 relative rounded-[48px] w-[178px]">
        <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-[-0.5px] pointer-events-none rounded-[48.5px]" />
      </div>
      <Span />
    </div>
  );
}

function Span1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[12.36%] mt-1/4 place-items-start relative" data-name="span">
      <p className="[grid-area:1_/_1] font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif] leading-[22.53px] ml-[134px] mt-0 not-italic relative text-[#616161] text-[12.8px] text-nowrap text-right tracking-[-0.2px] translate-x-[-100%] whitespace-pre">Log In with Github</p>
      <div className="[grid-area:1_/_1] h-[17.704px] ml-[27px] mt-0 w-[17.151px]" data-name="Background" />
      <div className="[grid-area:1_/_1] h-[18px] ml-0 mt-[8.696%] relative w-[18.461px]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
          <path clipRule="evenodd" d={svgPaths.pac601c0} fill="var(--fill-0, black)" fillRule="evenodd" id="Shape" />
        </svg>
      </div>
    </div>
  );
}

function BtnOutlineTemplate1Copy2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="btn-outline/template/1 Copy 2">
      <div className="[grid-area:1_/_1] bg-neutral-50 h-[48px] ml-0 mt-0 relative rounded-[48px] w-[178px]">
        <div aria-hidden="true" className="absolute border border-[#eeeeee] border-solid inset-[-0.5px] pointer-events-none rounded-[48.5px]" />
      </div>
      <Span1 />
    </div>
  );
}

function BtnGroup() {
  return (
    <div className="absolute content-stretch flex gap-[9px] items-start justify-center leading-[0] left-[906.63px] top-[222.2px]" data-name="btn-group">
      <BtnOutlineTemplate1Copy />
      <BtnOutlineTemplate1Copy2 />
    </div>
  );
}

function Group780() {
  return (
    <div className="absolute inset-[8.89%_78.54%_84.44%_17.29%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[233px_60px]" data-name="Group_780" style={{ maskImage: `url('${imgGroup780}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Group_780">
          <path clipRule="evenodd" d={svgPaths.p10986300} fill="var(--fill-0, #918EF4)" fillRule="evenodd" id="Rectangle_239" />
          <path clipRule="evenodd" d={svgPaths.p11b88100} fill="var(--fill-0, white)" fillRule="evenodd" id="braces" />
          <path clipRule="evenodd" d={svgPaths.p30e200c0} fill="var(--fill-0, white)" fillRule="evenodd" id="Rectangle_240" />
        </g>
      </svg>
    </div>
  );
}

function Group781() {
  return (
    <div className="absolute contents inset-[8.89%_67.08%_84.44%_17.29%]" data-name="Group_781">
      <p className="absolute font-['SF_Pro_Display:Regular',_sans-serif] inset-[9.89%_67.08%_85.89%_22.43%] leading-[38px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-74px_-9px] mask-size-[233px_60px] not-italic text-[32px] text-nowrap text-white whitespace-pre" style={{ maskImage: `url('${imgGroup780}')` }}>
        CodeSquid
      </p>
      <Group780 />
    </div>
  );
}

function CodesquidLogo() {
  return (
    <div className="absolute contents inset-[8.89%_66.53%_84.44%_17.29%]" data-name="codesquid logo">
      <Group781 />
    </div>
  );
}

function Chat1() {
  return (
    <div className="absolute inset-[89%_2.99%_4.78%_93.13%]" data-name="CHAT">
      <div className="absolute inset-[-75.89%_-81.25%_-87.23%_-81.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 148 148">
          <g id="CHAT">
            <g filter="url(#filter0_d_19_3060)" id="Ellipse Union">
              <path d={svgPaths.p2ad20f80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p9947400} fill="var(--stroke-0, #F0EFFD)" />
            </g>
            <g id="chat">
              <mask height="25" id="mask0_19_3060" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="24" x="62" y="59">
                <rect fill="var(--fill-0, white)" height="24" id="Background" width="24" x="62" y="59.001" />
              </mask>
              <g mask="url(#mask0_19_3060)">
                <path clipRule="evenodd" d={svgPaths.p9731180} fill="url(#paint0_linear_19_3060)" fillRule="evenodd" id="Shape" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="147.355" id="filter0_d_19_3060" width="147" x="0.5" y="0.5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="22.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.027451 0 0 0 0 0.298039 0 0 0 0.0784314 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_19_3060" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_19_3060" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_19_3060" x1="50" x2="71.4806" y1="71.0009" y2="94.8684">
              <stop stopColor="#918EFA" />
              <stop offset="0.551645" stopColor="#625DEF" />
              <stop offset="1" stopColor="#4A44ED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute inset-[24%_61.99%_36.37%_13.24%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-37.617px_0px] mask-size-[423.108px_356.648px]" data-name="Background" style={{ maskImage: `url('${imgBackground}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 357 357">
        <g id="Background">
          <circle cx="178.324" cy="178.324" fill="var(--fill-0, #F1F0FF)" id="Ellipse_59" r="178.324" />
        </g>
      </svg>
    </div>
  );
}

function MiddleGround() {
  return (
    <div className="absolute contents inset-[25.92%_65.06%_42.05%_11.78%]" data-name="Middle_ground">
      <div className="absolute bg-white inset-[35.18%_67.51%_46.01%_24.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-205.56px_-100.581px] mask-size-[423.108px_356.648px]" data-name="Rectangle_224" style={{ maskImage: `url('${imgBackground}')` }} />
      <div className="absolute inset-[46.55%_68.84%_53.23%_23.38%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-183.644px_-202.931px] mask-size-[423.108px_356.648px]" data-name="Line_48" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 2">
            <path d="M0 1H112.116" id="Line_48" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[47.78%_68.84%_52%_23.38%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-183.644px_-214.004px] mask-size-[423.108px_356.648px]" data-name="Line_49" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 2">
            <path d="M0 1H112.116" id="Line_48" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.01%_68.84%_50.77%_23.38%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-183.644px_-225.077px] mask-size-[423.108px_356.648px]" data-name="Line_50" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 2">
            <path d="M0 1H112.116" id="Line_48" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[50.24%_68.84%_49.54%_23.38%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-183.644px_-236.15px] mask-size-[423.108px_356.648px]" data-name="Line_51" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 2">
            <path d="M0 1H112.116" id="Line_48" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.48%_69.32%_56.16%_26.71%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-231.628px_-121.343px] mask-size-[423.108px_356.648px]" data-name="Ellipse_60" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <ellipse cx="28.606" cy="28.606" fill="var(--fill-0, #F2F2F2)" id="Ellipse_60" rx="28.606" ry="28.606" />
        </svg>
      </div>
      <div className="absolute bg-[#98b9f2] inset-[41.87%_65.7%_53.47%_31.16%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-295.76px_-160.792px] mask-size-[423.108px_356.648px] opacity-70" data-name="Rectangle_225" style={{ maskImage: `url('${imgBackground}')` }} />
      <p className="absolute font-['Helvetica:Regular',_sans-serif] inset-[43.58%_66.43%_55.2%_31.97%] leading-[11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-307.349px_-176.205px] mask-size-[423.108px_356.648px] not-italic text-[11px] text-nowrap text-white whitespace-pre" style={{ maskImage: `url('${imgBackground}')` }}>{`< / >`}</p>
      <div className="absolute inset-[25.92%_71.27%_56.24%_11.78%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.624px_-17.302px] mask-size-[423.108px_356.648px]" data-name="Rectangle_226" style={{ maskImage: `url('${imgBackground}')` }}>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute inset-[26.76%_71.27%_73.02%_11.78%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.624px_-24.838px] mask-size-[423.108px_356.648px]" data-name="Line_52" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 245 2">
            <path d="M0 1H244.071" id="Line_52" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[28.46%_81.89%_63.39%_13.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-34.387px_-40.14px] mask-size-[423.108px_356.648px]" data-name="Rectangle_227" style={{ maskImage: `url('${imgBackground}')` }}>
        <div aria-hidden="true" className="absolute border border-black border-solid inset-[-0.5px] pointer-events-none" />
      </div>
      <div className="absolute inset-[29.07%_73.13%_70.71%_19.09%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-121.819px_-45.6px] mask-size-[423.108px_356.648px]" data-name="Line_53" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 2">
            <path d="M0 1H112.116" id="Line_48" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.3%_73.13%_69.48%_19.09%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-121.819px_-56.673px] mask-size-[423.108px_356.648px]" data-name="Line_54" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 2">
            <path d="M0 1H112.116" id="Line_48" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[31.53%_73.13%_68.25%_19.09%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-121.819px_-67.746px] mask-size-[423.108px_356.648px]" data-name="Line_55" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 2">
            <path d="M0 1H112.116" id="Line_48" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[32.76%_73.13%_67.02%_19.09%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-121.819px_-78.819px] mask-size-[423.108px_356.648px]" data-name="Line_56" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 2">
            <path d="M0 1H112.116" id="Line_48" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[30.61%_83.05%_65.54%_14.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-51.089px_-59.518px] mask-size-[423.108px_356.648px]" data-name="Path_1847" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 35">
          <path clipRule="evenodd" d={svgPaths.pd766000} fill="var(--fill-0, #918EF4)" fillRule="evenodd" id="Path_1847" opacity="0.44" />
        </svg>
      </div>
      <div className="absolute inset-[26.18%_87.71%_73.36%_12%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-19.854px_-19.609px] mask-size-[423.108px_356.648px]" data-name="Ellipse_61" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <ellipse cx="2.076" cy="2.076" fill="var(--fill-0, #AB8DE5)" id="Ellipse_61" rx="2.076" ry="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[26.18%_87.21%_73.36%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-27.005px_-19.609px] mask-size-[423.108px_356.648px]" data-name="Ellipse_62" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.076" cy="2.076" fill="var(--fill-0, #73E5E2)" id="Ellipse_62" r="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[26.18%_86.72%_73.36%_13%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-34.156px_-19.609px] mask-size-[423.108px_356.648px]" data-name="Ellipse_63" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.076" cy="2.076" fill="var(--fill-0, #50B89D)" id="Ellipse_63" r="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[39.79%_80.28%_59.53%_19.23%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-123.987px_-142.106px] mask-size-[423.108px_356.648px]" data-name="Path_1848" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <path clipRule="evenodd" d={svgPaths.p2ff83800} fill="var(--fill-0, #AB8DE5)" fillRule="evenodd" id="Path_1848" />
        </svg>
      </div>
      <div className="absolute inset-[37.25%_77.52%_60.13%_18.76%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-117.205px_-119.267px] mask-size-[423.108px_356.648px]" data-name="Rectangle_228" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 24">
          <path clipRule="evenodd" d={svgPaths.p311a5e00} fill="var(--fill-0, #AB8DE5)" fillRule="evenodd" id="Rectangle_228" />
        </svg>
      </div>
      <div className="absolute inset-[38.33%_79.73%_61.21%_19.98%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-134.738px_-128.956px] mask-size-[423.108px_356.648px]" data-name="Ellipse_64" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.076" cy="2.076" fill="var(--fill-0, white)" id="Ellipse_64" r="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[38.33%_79.23%_61.21%_20.48%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-141.889px_-128.956px] mask-size-[423.108px_356.648px]" data-name="Ellipse_65" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <ellipse cx="2.076" cy="2.076" fill="var(--fill-0, white)" id="Ellipse_65" rx="2.076" ry="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[38.33%_78.74%_61.21%_20.98%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-149.04px_-128.956px] mask-size-[423.108px_356.648px]" data-name="Ellipse_66" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <ellipse cx="2.076" cy="2.076" fill="var(--fill-0, white)" id="Ellipse_65" rx="2.076" ry="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[32.1%_65.53%_67.22%_33.98%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-336.361px_-72.898px] mask-size-[423.108px_356.648px]" data-name="Path_1849" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <path clipRule="evenodd" d={svgPaths.p19686600} fill="var(--fill-0, #98B9F2)" fillRule="evenodd" id="Path_1849" />
        </svg>
      </div>
      <div className="absolute inset-[29.56%_65.06%_67.82%_31.23%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-296.683px_-50.06px] mask-size-[423.108px_356.648px]" data-name="Rectangle_229" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 24">
          <path clipRule="evenodd" d={svgPaths.p31549bc0} fill="var(--fill-0, #98B9F2)" fillRule="evenodd" id="Rectangle_229" />
        </svg>
      </div>
      <div className="absolute inset-[30.64%_66.27%_68.9%_33.44%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-328.518px_-59.749px] mask-size-[423.108px_356.648px]" data-name="Ellipse_67" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <ellipse cx="2.076" cy="2.076" fill="var(--fill-0, white)" id="Ellipse_67" rx="2.076" ry="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[30.64%_66.77%_68.9%_32.94%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-321.366px_-59.749px] mask-size-[423.108px_356.648px]" data-name="Ellipse_68" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <ellipse cx="2.076" cy="2.076" fill="var(--fill-0, white)" id="Ellipse_67" rx="2.076" ry="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[30.64%_67.27%_68.9%_32.45%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-314.215px_-59.749px] mask-size-[423.108px_356.648px]" data-name="Ellipse_69" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <ellipse cx="2.076" cy="2.076" fill="var(--fill-0, white)" id="Ellipse_67" rx="2.076" ry="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[25.95%_65.65%_73.59%_34.06%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-337.515px_-17.533px] mask-size-[423.108px_356.648px]" data-name="Ellipse_70" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <ellipse cx="2.076" cy="2.076" fill="var(--fill-0, #918EF4)" id="Ellipse_70" rx="2.076" ry="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[26.9%_65.34%_72.64%_34.37%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-341.898px_-26.068px] mask-size-[423.108px_356.648px]" data-name="Ellipse_71" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <ellipse cx="2.076" cy="2.076" fill="var(--fill-0, #918EF4)" id="Ellipse_71" rx="2.076" ry="2.076" />
        </svg>
      </div>
      <div className="absolute inset-[36.12%_68.58%_63.16%_30.97%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-292.991px_-109.117px] mask-size-[423.108px_356.648px]" data-name="Ellipse_72" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <ellipse cx="3.23" cy="3.23" fill="var(--fill-0, #918EF4)" id="Ellipse_72" rx="3.23" ry="3.23" />
        </svg>
      </div>
      <div className="absolute inset-[37.35%_67.27%_61.93%_32.28%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-311.908px_-120.19px] mask-size-[423.108px_356.648px]" data-name="Ellipse_73" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <ellipse cx="3.23" cy="3.23" fill="var(--fill-0, #918EF4)" id="Ellipse_72" rx="3.23" ry="3.23" />
        </svg>
      </div>
      <div className="absolute inset-[37.77%_87.45%_61.52%_12.1%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-21.238px_-123.881px] mask-size-[423.108px_356.648px]" data-name="Ellipse_74" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <ellipse cx="3.23" cy="3.23" fill="var(--fill-0, #F98B67)" id="Ellipse_74" rx="3.23" ry="3.23" />
        </svg>
      </div>
      <div className="absolute inset-[53.14%_68.28%_45.48%_29.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-277.822px_-262.262px] mask-size-[423.108px_356.648px]" data-name="Path_1850" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 13">
          <path clipRule="evenodd" d={svgPaths.p37c65680} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1850" />
        </svg>
      </div>
      <div className="absolute inset-[47.66%_67.88%_45.48%_29.91%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-277.662px_-212.928px] mask-size-[423.108px_356.648px]" data-name="Path_1851" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 62">
          <path clipRule="evenodd" d={svgPaths.p31203900} fill="var(--fill-0, #6F9CEB)" fillRule="evenodd" id="Path_1851" />
        </svg>
      </div>
      <div className="absolute inset-[47.97%_65.34%_45.48%_31.77%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-304.506px_-215.688px] mask-size-[423.108px_356.648px]" data-name="Path_1852" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 59">
          <path clipRule="evenodd" d={svgPaths.p157ab780} fill="var(--fill-0, #918EF4)" fillRule="evenodd" id="Path_1852" />
        </svg>
      </div>
      <div className="absolute inset-[48.29%_66.01%_45.58%_32.19%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-310.51px_-218.63px] mask-size-[423.108px_356.648px]" data-name="Path_1853" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute inset-[-0.36%_-0.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 57">
            <path d={svgPaths.p2a81740} id="Path_1853" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[52.09%_67.73%_46.6%_31.98%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-307.446px_-252.842px] mask-size-[423.108px_356.648px]" data-name="Path_1854" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute inset-[-1.7%_-4.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 13">
            <path d={svgPaths.p1c520700} id="Path_1854" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[48.09%_68.15%_45.68%_30.11%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-280.52px_-216.849px] mask-size-[423.108px_356.648px]" data-name="Path_1855" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute inset-[-0.36%_-0.8%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 58">
            <path d={svgPaths.p2c752300} id="Path_1855" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[54.52%_66.71%_42.05%_30.6%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-287.658px_-274.637px] mask-size-[423.108px_356.648px]" data-name="Path_1856" style={{ maskImage: `url('${imgBackground}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 31">
          <path clipRule="evenodd" d={svgPaths.p2c34b000} fill="var(--fill-0, #B37361)" fillRule="evenodd" id="Path_1856" />
        </svg>
      </div>
      <div className="absolute inset-[53.36%_68.8%_46.25%_30.14%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-281.069px_-264.27px] mask-size-[423.108px_356.648px]" data-name="Path_1857" style={{ maskImage: `url('${imgBackground}')` }}>
        <div className="absolute inset-[-5.74%_-1.31%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 5">
            <path d={svgPaths.p23eb3c00} id="Path_1857" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Man() {
  return (
    <div className="absolute inset-[29.25%_59.99%_41.78%_34.96%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-350.362px_-47.292px] mask-size-[423.108px_356.648px]" data-name="Man" style={{ maskImage: `url('${imgBackground}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 73 261">
        <g id="Man">
          <path clipRule="evenodd" d={svgPaths.p3a1da180} fill="var(--fill-0, #7472C1)" fillRule="evenodd" id="Path_1858" />
          <path clipRule="evenodd" d={svgPaths.p3fedf480} fill="var(--fill-0, #AB8DE5)" fillRule="evenodd" id="Path_1859" />
          <path clipRule="evenodd" d={svgPaths.p28c84400} fill="var(--fill-0, #6F9CEB)" fillRule="evenodd" id="Path_1860" />
          <path clipRule="evenodd" d={svgPaths.p9a853f0} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1861" />
          <path clipRule="evenodd" d={svgPaths.p5361880} fill="var(--fill-0, #F8CDBA)" fillRule="evenodd" id="Path_1862" />
          <path clipRule="evenodd" d={svgPaths.p3f1b6c80} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1863" />
          <circle cx="34.9936" cy="16.868" fill="var(--fill-0, #F8CDBA)" id="Ellipse_75" r="11.539" />
          <path clipRule="evenodd" d={svgPaths.p3d751300} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1864" />
          <ellipse cx="24.2116" cy="19.244" fill="var(--fill-0, #FA9E9F)" id="Ellipse_76" rx="2.021" ry="1.052" />
          <ellipse cx="36.9226" cy="19.244" fill="var(--fill-0, #FA9E9F)" id="Ellipse_77" rx="2.021" ry="1.052" />
          <path d={svgPaths.p271d2cc0} id="Path_1865" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <path d={svgPaths.p34f8e8e0} id="Path_1866" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <circle cx="45.6606" cy="18.197" fill="var(--fill-0, #F8CDBA)" id="Ellipse_78" r="2.667" />
          <path d={svgPaths.p2d849800} id="Path_1867" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <path d={svgPaths.p1ca5c900} id="Path_1868" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <path d={svgPaths.p2f396500} id="Path_1869" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <path clipRule="evenodd" d={svgPaths.p2c1f1400} fill="var(--fill-0, #F8CDBA)" fillRule="evenodd" id="Path_1870" />
          <path clipRule="evenodd" d={svgPaths.p3f718200} fill="var(--fill-0, #EBEBEB)" fillOpacity="0.25098" fillRule="evenodd" id="Path_1871" />
          <path clipRule="evenodd" d={svgPaths.p9e46100} fill="var(--fill-0, #EBEBEB)" fillOpacity="0.25098" fillRule="evenodd" id="Path_1872" />
        </g>
      </svg>
    </div>
  );
}

function Woman() {
  return (
    <div className="absolute inset-[35.04%_76.15%_43.48%_10.63%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.001px_-99.395px] mask-size-[423.108px_356.648px]" data-name="Woman" style={{ maskImage: `url('${imgBackground}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191 194">
        <g id="Woman">
          <rect fill="var(--fill-0, #B37361)" height="45.257" id="Rectangle_230" width="89.222" x="11.9996" y="148.062" />
          <path clipRule="evenodd" d={svgPaths.p2dfeebe8} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1873" />
          <path clipRule="evenodd" d={svgPaths.pefd4880} fill="var(--fill-0, #7472C1)" fillRule="evenodd" id="Path_1874" />
          <path clipRule="evenodd" d={svgPaths.p3103ba00} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1875" />
          <path clipRule="evenodd" d={svgPaths.pdfded80} fill="var(--fill-0, white)" fillRule="evenodd" id="Path_1876" />
          <path clipRule="evenodd" d={svgPaths.p18b65d80} fill="var(--fill-0, #F8CDBA)" fillRule="evenodd" id="Path_1877" />
          <path clipRule="evenodd" d={svgPaths.pe3cb800} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1878" />
          <path clipRule="evenodd" d={svgPaths.p38927900} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1879" />
          <path clipRule="evenodd" d={svgPaths.p20e21000} fill="var(--fill-0, #F8CDBA)" fillRule="evenodd" id="Path_1880" />
          <circle cx="38.3726" cy="4.9" fill="var(--fill-0, #1F161E)" id="Ellipse_79" r="4.9" />
          <path d={svgPaths.p6484d00} id="Path_1881" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <path d={svgPaths.p2b1a9600} id="Path_1882" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <path d={svgPaths.p3fc73200} id="Path_1883" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <ellipse cx="45.6946" cy="24.061" fill="var(--fill-0, #FA9E9F)" id="Ellipse_80" rx="1.901" ry="0.987" />
          <ellipse cx="59.8266" cy="24.061" fill="var(--fill-0, #FA9E9F)" id="Ellipse_81" rx="1.901" ry="0.987" />
          <path clipRule="evenodd" d={svgPaths.pf97efc0} fill="var(--fill-0, #F8CDBA)" fillRule="evenodd" id="Path_1884" />
          <path d={svgPaths.p1df02340} id="Path_1885" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <path d={svgPaths.p324f6580} id="Path_1886" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
          <path clipRule="evenodd" d={svgPaths.pf97efc0} fill="var(--fill-0, #F8CDBA)" fillRule="evenodd" id="Path_1887" />
          <path clipRule="evenodd" d={svgPaths.p33587700} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1888" />
          <path clipRule="evenodd" d={svgPaths.p95a9e80} fill="var(--fill-0, #1F161E)" fillRule="evenodd" id="Path_1889" />
          <path clipRule="evenodd" d={svgPaths.p3fa05580} fill="var(--fill-0, #969696)" fillRule="evenodd" id="Path_1890" />
          <rect fill="var(--fill-0, #969696)" height="1.033" id="Rectangle_231" width="43.448" x="60.6346" y="93.753" />
          <path clipRule="evenodd" d={svgPaths.pd6ed880} fill="var(--fill-0, #F8CDBA)" fillRule="evenodd" id="Path_1891" />
          <path d={svgPaths.p6124380} id="Path_1892" stroke="var(--stroke-0, #1F161E)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Layer2() {
  return (
    <div className="absolute contents inset-[24%_59.99%_36.37%_10.63%]" data-name="Layer_2">
      <Background />
      <MiddleGround />
      <Man />
      <Woman />
    </div>
  );
}

function Illustration() {
  return (
    <div className="absolute contents inset-[24%_59.99%_36.37%_10.63%]" data-name="Illustration">
      <Layer2 />
    </div>
  );
}

function TickBoxIcon() {
  return (
    <div className="absolute inset-[83.56%_38.54%_13.11%_59.38%]" data-name="Tick Box icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Tick Box icon">
          <mask height="30" id="mask0_19_3017" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="30" x="0" y="0">
            <rect fill="var(--fill-0, white)" height="30" id="Background" width="30" />
          </mask>
          <g mask="url(#mask0_19_3017)">
            <path clipRule="evenodd" d={svgPaths.p33a6b300} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Template3SignIn() {
  return (
    <div className="bg-white relative size-full" data-name="Template 3Sign In">
      <div className="absolute bottom-0 left-0 right-[49.31%] top-0" data-name="bg-left">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgBgLeft} />
      </div>
      <div className="absolute flex flex-col font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif] inset-[79.23%_61.46%_13.99%_12.15%] justify-center leading-[0] not-italic text-[16px] text-center text-neutral-100">
        <p className="leading-[28.16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
      </div>
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Bold',_sans-serif] inset-[66.14%_19.33%_31.74%_70.6%] leading-[normal] not-italic text-[#424242] text-[12.8px] text-center text-nowrap whitespace-pre">
        <span className="font-['Zen_Kaku_Gothic_Antique:Regular',_sans-serif]">{`No Account yet? `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-[#212121] underline">SIGN UP</span>
      </p>
      <Form />
      <p className="absolute font-['Zen_Kaku_Gothic_Antique:Bold',_sans-serif] inset-[12.74%_11.17%_78.92%_62.44%] leading-[37.5px] not-italic text-[#242424] text-[31.25px] text-center tracking-[-0.5px]">Welcome back to the CodeSquid Community</p>
      <div className="absolute font-['Zen_Kaku_Gothic_Antique:Bold',_sans-serif] inset-[69.12%_61.46%_22.54%_12.15%] leading-[37.5px] not-italic text-[31.25px] text-center text-white tracking-[-0.5px]">
        <p className="mb-0">{`Online Community For `}</p>
        <p>Front-end Developers</p>
      </div>
      <BtnGroup />
      <CodesquidLogo />
      <Chat1 />
      <Illustration />
      <div className="absolute inset-[82.33%_36.81%_17.56%_63.13%]" data-name="New shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="New shape"></g>
        </svg>
      </div>
      <TickBoxIcon />
    </div>
  );
}