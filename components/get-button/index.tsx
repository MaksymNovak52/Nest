import Image from "next/image";
export function GetButton() {
  return (
    <button
      className=" absolute text-black
      hover:opacity-70
      transition-opacity
      active:opacity-50
      cursor-pointer
  text-[16px]
  font-semibold
  leading-[100%]
  tracking-[-0.48px]
 px-[16px] lg:px-6 bottom-[8px] right-1/2 max-lg:translate-x-1/2 lg:right-[10px] w-[360px] lg:w-[704px] h-[48px] flex flex-row justify-between items-center  bg-[#9CE0DA]"
    >
      Get MEGAHYPE
      <Image src="/icon/arrow-right.svg" alt="arrow" width={24} height={24} />
    </button>
  );
}
