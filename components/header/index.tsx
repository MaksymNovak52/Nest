import Image from "next/image";
import Link from "next/link";

export function HeroHeader() {
  return (
    <header className="w-full flex  lg:flex-row lg:items-center  z-10 flex-row-reverse justify-between items-center mt-[24px] z-10">
      <div className="flex flex-row gap-[24px] text-white font-semibold tracking-[-0.42px] text-[14px] z-10">
        {/* {["About us", "Docs"].map((item) => (
          <p
            key={item}
            className="hover:opacity-70 active:opacity-50 transition-colors cursor-pointer z-10"
          >
            {item}
          </p>
        ))} */}
        <div className="flex flex-row items-center gap-2 hover:opacity-70 active:opacity-50 transition-colors cursor-pointer z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
          >
            <path
              d="M7.4998 0C3.36437 0 0 3.36437 0 7.5002C0 11.636 3.36437 15 7.4998 15C11.6352 15 15 11.6356 15 7.5002C15 3.36477 11.6356 0 7.4998 0ZM11.0649 5.66988C11.4069 5.75164 11.7279 5.84595 12.0242 5.9524C13.2494 6.39237 13.5178 6.84287 13.5178 6.97968C13.5178 7.11649 13.2494 7.56658 12.0242 8.00656C11.8583 8.06606 11.6842 8.12232 11.5029 8.17413C11.5093 8.07941 11.5126 7.98389 11.5126 7.88756C11.5126 7.20716 11.3535 6.42597 11.0649 5.66988ZM7.4998 1.45714C9.82717 1.45714 11.8518 2.77989 12.8608 4.71343C12.7503 4.66769 12.6358 4.62357 12.5168 4.58107C11.8336 4.33579 11.0402 4.14636 10.1793 4.01927C9.88869 3.6222 9.5576 3.27289 9.19372 3.00008C8.68696 2.62123 8.11625 2.39132 7.5002 2.39132C6.88416 2.39132 6.31345 2.62123 5.80669 3.00008C5.4424 3.27289 5.11171 3.6222 4.8211 4.01927C3.96017 4.14636 3.16684 4.33579 2.48361 4.58107C2.36339 4.62438 2.24844 4.6685 2.13916 4.71343C3.14782 2.77989 5.17243 1.45714 7.4998 1.45714ZM10.0555 7.88756C10.0555 8.09641 10.0332 8.30001 9.9915 8.49551C9.21598 8.61208 8.37286 8.67279 7.5002 8.67279C6.62754 8.67279 5.78402 8.61208 5.0085 8.49551C4.96681 8.30001 4.94455 8.09641 4.94455 7.88756C4.94455 7.1347 5.22707 6.1734 5.67474 5.37886C5.71359 5.30883 5.75447 5.24043 5.79616 5.17324C6.32114 4.33134 6.94204 3.84846 7.5002 3.84846C8.05837 3.84846 8.67927 4.33134 9.20424 5.17324C9.24593 5.24043 9.28681 5.30883 9.32567 5.37886C9.77333 6.1734 10.0555 7.1347 10.0555 7.88756ZM3.49713 8.17413C3.31579 8.12232 3.14175 8.06606 2.9758 8.00656C1.75059 7.56658 1.48223 7.11609 1.48223 6.97968C1.48223 6.84328 1.75059 6.39237 2.9758 5.9524C3.27208 5.84595 3.59305 5.75164 3.93508 5.66988C3.64648 6.42597 3.48741 7.20716 3.48741 7.88756C3.48741 7.98389 3.49065 8.07941 3.49713 8.17413ZM7.4998 13.5429C5.95807 13.5429 4.5495 12.9624 3.48053 12.0084C4.72274 12.3355 6.08921 12.5079 7.5002 12.5079C8.91119 12.5079 10.2773 12.3355 11.5195 12.0084C10.4505 12.9624 9.04153 13.5429 7.4998 13.5429ZM13.0406 9.91176C12.2622 10.2898 11.3697 10.5796 10.4052 10.7723C9.49 10.9552 8.50967 11.0508 7.5002 11.0508C6.49073 11.0508 5.51 10.9552 4.59484 10.7723C3.63029 10.5796 2.7378 10.2898 1.95944 9.91176C1.83437 9.626 1.73116 9.3285 1.65142 9.0221C1.90156 9.15 2.17923 9.2686 2.48361 9.37788C2.92115 9.53493 3.40363 9.66931 3.92051 9.7786C4.5576 9.91419 5.2465 10.0121 5.96616 10.0696C6.46483 10.1093 6.97887 10.1299 7.5002 10.1299C8.02153 10.1299 8.53517 10.1093 9.03384 10.0696C9.7535 10.0121 10.4424 9.91419 11.0795 9.7786C11.5964 9.66931 12.0788 9.53493 12.5168 9.37788C12.8309 9.26536 13.1065 9.14636 13.3482 9.02372C13.2684 9.32972 13.1652 9.62641 13.0406 9.91176Z"
              fill="white"
            />
          </svg>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.usenest.xyz/"}
            className="text-white leading-none font-semibold text-sm tracking-[-0.42px] font-[Host_Grotesk]"
          >
            nest Exchange
          </Link>
        </div>
      </div>
      <Image
        src="/icon/logo.svg"
        alt="logo"
        width={142.637}
        height={32}
        className="z-10"
      />
      <div className="flex flex-col-reverse lg:flex-row gap-2  items-center max-lg:absolute bottom-[220px] z-10">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://discord.com/invite/7eAk78ZQXC"}
          className="border active:bg-transparent active:border-[#15231F] hover:bg-white/10 hover:border-[#151B19] cursor-pointer  transition-colors w-10 h-10 bg-transparent flex items-center justify-center pr-0 rounded-full border-[#343635]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M16.9419 1.34C15.6473 0.714 14.263 0.259052 12.8157 0C12.638 0.332095 12.4304 0.77877 12.2872 1.1341C10.7487 0.894993 9.22445 0.894993 7.7143 1.1341C7.57116 0.77877 7.3588 0.332095 7.17947 0C5.73067 0.259052 4.3448 0.715671 3.05016 1.34331C0.438869 5.42136 -0.269009 9.39811 0.0849305 13.3184C1.81688 14.655 3.49534 15.467 5.14548 15.9984C5.55291 15.4189 5.91628 14.8028 6.22931 14.1536C5.63313 13.9195 5.06211 13.6306 4.52256 13.2952C4.6657 13.1856 4.80571 13.071 4.94098 12.9531C8.23183 14.5438 11.8074 14.5438 15.0589 12.9531C15.1958 13.071 15.3358 13.1856 15.4774 13.2952C14.9362 13.6322 14.3637 13.9211 13.7675 14.1553C14.0805 14.8028 14.4423 15.4205 14.8513 16C16.503 15.4687 18.183 14.6567 19.915 13.3184C20.3303 8.77378 19.2056 4.83355 16.9419 1.34ZM6.67765 10.9075C5.68977 10.9075 4.87963 9.95435 4.87963 8.7937C4.87963 7.63305 5.67247 6.67831 6.67765 6.67831C7.68285 6.67831 8.49297 7.63138 8.47567 8.7937C8.47723 9.95435 7.68285 10.9075 6.67765 10.9075ZM13.3223 10.9075C12.3344 10.9075 11.5243 9.95435 11.5243 8.7937C11.5243 7.63305 12.3171 6.67831 13.3223 6.67831C14.3275 6.67831 15.1376 7.63138 15.1203 8.7937C15.1203 9.95435 14.3275 10.9075 13.3223 10.9075Z"
              fill="white"
            />
          </svg>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://t.me/NestExchangeHL"}
          className="border active:bg-transparent active:border-[#15231F] hover:bg-white/10  hover:border-[#151B19] cursor-pointer transition-colors w-10 h-10 bg-transparent flex items-center justify-center pr-0.5 rounded-full border-[#343635]"
        >
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
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://x.com/TheHypeEngine"}
          className="border active:bg-transparent active:border-[#15231F] hover:bg-white/10 hover:border-[#151B19] cursor-pointer  transition-colors w-10 h-10 bg-transparent flex items-center justify-center pr-0 rounded-full border-[#343635]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="17"
            viewBox="0 0 19 17"
            fill="none"
          >
            <path
              d="M11.3094 7.19917L18.3838 0H16.708L10.5627 6.24966L5.6582 0H0L7.41823 9.45149L0 17H1.6758L8.16113 10.3987L13.3418 17H19M2.28063 1.10634H4.85513L16.7067 15.948H14.1316"
              fill="white"
            />
          </svg>{" "}
        </Link>
      </div>
      <div className="font-medium w-[270px]  px-2 text-[12px] text-[#6F7371] uppercase tracking-[0.30px] leading-[14px] flex lg:hidden flex-row justify-start absolute top-[88px] left-[12px] z-10 items-start text-start  flex-wrap">
        <span className="font-medium text-[12px] text-[#6F7371] uppercase">
          <span className="text-[#FFFFFF]">Like Strategy₿ onchain.</span>{" "}
          Perpetual accumulation compounding $HYPE into $MEGAHYPE
        </span>
      </div>

      {/* <div className="flex flex-col items-start gap-3  absolute lg:hidden top-[88px] left-[20px] z-10">
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
      </div> */}
    </header>
  );
}
