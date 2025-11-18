import { ENGINE_HYPE_STATS } from "@/constants";
import Image from "next/image";

export function HeroHeader() {
  return (
    <header className="w-full flex  lg:flex-row lg:items-end  z-10 flex-row-reverse justify-between items-center mt-[24px] z-10">
      <div className="flex flex-row gap-[24px] text-white font-semibold tracking-[-0.42px] text-[14px] z-10">
        {["About us", "Docs"].map((item) => (
          <p
            key={item}
            className="hover:opacity-70 active:opacity-50 transition-colors cursor-pointer z-10"
          >
            {item}
          </p>
        ))}
      </div>
      <Image
        src="/icon/logo.svg"
        alt="logo"
        width={142.637}
        height={32}
        className="z-10"
      />
      <div className="flex flex-col-reverse lg:flex-row gap-2  items-center max-lg:absolute bottom-[280px] z-10">
        <span className="border active:bg-transparent active:border-[#15231F] hover:bg-white/10  hover:border-[#151B19] cursor-pointer transition-colors w-10 h-10 bg-transparent flex items-center justify-center pr-0.5 rounded-full border-[#343635]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
          >
            <path
              d="M7.45544 10.5451L7.14115 15.0122C7.59082 15.0122 7.78558 14.817 8.01912 14.5827L10.1274 12.5467L14.4959 15.7794C15.2971 16.2306 15.8616 15.993 16.0777 15.0346L18.9452 1.45712L18.946 1.45632C19.2001 0.259523 18.5177 -0.208475 17.7371 0.085124L0.882079 6.60589C-0.268241 7.05709 -0.250824 7.70508 0.686532 7.99868L4.99568 9.35308L15.005 3.02431C15.476 2.70911 15.9043 2.88351 15.552 3.19871L7.45544 10.5451Z"
              fill="white"
            />
          </svg>
        </span>
        <span className="border active:bg-transparent active:border-[#15231F] hover:bg-white/10 hover:border-[#151B19] cursor-pointer transition-colors w-10 h-10 bg-transparent flex items-center justify-center pr-0.5 rounded-full border-[#343635]">
          <Image src="/icon/x.svg" alt="discord" width={18} height={18} />
        </span>
      </div>

      <div className="flex flex-col items-start gap-3  absolute lg:hidden top-[88px] left-[20px] z-10">
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
    </header>
  );
}
