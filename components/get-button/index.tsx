"use client";

import { useState } from "react";

export function GetButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="absolute w-[1px] h-[250px] bg-[#2D3231] right-[730px] transform translate-x-1/2 bottom-0 z-8"></div>

      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
        className="
          absolute text-black
          hover:opacity-70 transition-opacity active:opacity-50
          z-10 cursor-pointer
          text-[16px] font-semibold leading-[100%] tracking-[-0.48px]
          px-[16px] lg:px-6 bottom-[8px] right-1/2 max-lg:translate-x-1/2 lg:right-[10px]
          w-[97%] lg:w-[704px] h-[48px]
          flex flex-row justify-between items-center bg-[#9CE0DA]
        "
      >
        <div className="relative w-full h-full">
          <p
            className={`
              absolute transition-opacity duration-300
              left-0 top-1/2 transform -translate-y-1/2
              ${hovered ? "opacity-0" : "opacity-100"}
            `}
          >
            Get MEGAHYPE
          </p>

          <p
            className={`
            absolute transition-opacity duration-300
              left-0 top-1/2 transform -translate-y-1/2
              ${hovered ? "opacity-100" : "opacity-0"}
            `}
          >
            Coming Soon
          </p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M2.8125 9H15.1875"
            stroke="black"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.125 3.9375L15.1875 9L10.125 14.0625"
            stroke="black"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
