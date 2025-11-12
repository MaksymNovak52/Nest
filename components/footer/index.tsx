import { ENGINE_HYPE_STATS } from "@/constants";

export function HeroFooter() {
  return (
    <footer className="lg:w-[238px]  w-[380px] mt-auto flex   absolute bottom-[104px] left-[40px] max-lg:left-1/2 max-lg:translate-x-[-50%] lg:bottom-[22px]">
      <div className="font-medium  px-2 text-[12px] text-[#6F7371] uppercase tracking-[0.30px] leading-[14px] flex lg:hidden flex-row justify-start relative left-[8px] items-start text-start  flex-wrap">
        <span className="">
          <span className="text-[#FFFFFF]">Like Strategy₿ onchain.</span>{" "}
          Perpetual accumulation{" "}
        </span>
        <span className=" ">compounding $HYPE into $MEGAHYPE</span>
      </div>
      <div className="w-[180px] lg:flex flex-col gap-[51px] hidden ">
        <span className="font-medium text-[12px] text-[#6F7371] ">
          <span className="text-[#FFFFFF]">Amplify your conviction</span> with
          HYPE’s strongest growth asset
        </span>
        <div className="flex flex-col items-start gap-3 ">
          {ENGINE_HYPE_STATS.map((item) => (
            <div className="flex flex-row items-center gap-2" key={item.title}>
              <span className="font-medium text-[12px] text-[#CCCDCD]">
                {item.price}
              </span>
              <span className="font-normal text-[12px] text-[#808181] whitespace-nowrap">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
