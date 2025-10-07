function Placeholder() {
  return (
    <div className="absolute contents inset-[16.13%_15.36%]" data-name="Placeholder">
      <div className="absolute bg-[#2f1893] inset-[16.13%_15.36%] rounded-[10px]" data-name="Placeholder" />
    </div>
  );
}

function BigFill() {
  return (
    <div className="absolute inset-[60.16%_41.79%_30.16%_41.79%]" data-name="Big - Fill">
      <div className="absolute bg-[#25dac5] inset-0 rounded-[100px]" data-name="Rectangle" />
      <div className="absolute flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] left-1/2 text-[20px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[26px] whitespace-pre">Purchase for $249</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute contents font-['DM_Sans:Bold',_sans-serif] font-bold inset-[29.36%_25.29%_47.61%_25.36%] text-center text-white" data-name="Title">
      <p className="absolute inset-[35.61%_25.29%_47.61%_25.36%] leading-[52px] text-[42px] tracking-[-0.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Create your next project with Startup Framework
      </p>
      <p className="absolute leading-[26px] left-[46%] right-[45.93%] text-[14px] text-nowrap top-[calc(50%-128px)] tracking-[2px] uppercase whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Get Started
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[15.36%] right-[15.36%] top-[100px]" data-name="Group">
      <Placeholder />
      <BigFill />
      <Title />
    </div>
  );
}

export default function CallToAction3() {
  return (
    <div className="bg-white relative size-full" data-name="call_to_action_3">
      <Group />
    </div>
  );
}