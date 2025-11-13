"use client";
import { useEffect, useRef, useState } from "react";

type StickVariant = "left" | "rightTop" | "rightBottom";

type StickProps = {
  label: string;
  description: string;
  videoX: number;
  videoY: number;
  variant?: StickVariant;
  hover?: string;
};

function Stick({
  label,
  description,
  variant = "left",
  videoX,
  hover = "lg:group-hover:-translate-y-10 max-lg:group-focus:-translate-y-10",
  videoY,
}: StickProps) {
  const isRightTop = variant === "rightTop";
  const isRightBottom = variant === "rightBottom";

  const direction = isRightBottom ? "flex-col-reverse" : "flex-col";
  const align = isRightTop || isRightBottom ? "items-end" : "items-start";
  const gap = isRightTop || isRightBottom ? "gap-2" : "";

  const renderSvg = () => {
    if (variant === "left") {
      return (
        <div className="mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="143"
            height="73"
            viewBox="0 0 143 73"
            fill="none"
            className="block max-[500px]:hidden"
          >
            <g opacity="0.4">
              <circle
                cx="4"
                cy="4"
                r="4"
                transform="matrix(1 0 0 -1 135 72.5)"
                fill="white"
              />
              <path d="M0 0.5L90.5262 0.5L139 68.5" stroke="white" />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="28"
            viewBox="0 0 64 28"
            fill="none"
            className="hidden max-[500px]:block"
          >
            <g opacity="0.4">
              <circle
                cx="1.93103"
                cy="1.93103"
                r="1.93103"
                transform="matrix(1 0 0 -1 60.1367 27.5)"
                fill="white"
              />
              <path d="M0 0.5H43.875L62 25.5" stroke="white" />
            </g>
          </svg>
        </div>
      );
    }

    if (variant === "rightTop") {
      return (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="145"
            height="88"
            viewBox="0 0 145 88"
            fill="none"
            className="block max-[500px]:hidden"
          >
            <g opacity="0.4">
              <circle
                cx="4"
                cy="83.5"
                r="4"
                transform="rotate(180 4 83.5)"
                fill="white"
              />
              <path d="M145 0.5L63.4331 0.5L4 83.5" stroke="white" />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="28"
            viewBox="0 0 61 28"
            fill="none"
            className="hidden max-[500px]:block"
          >
            <g opacity="0.4">
              <circle
                cx="1.93103"
                cy="25.569"
                r="1.93103"
                transform="rotate(180 1.93103 25.569)"
                fill="white"
              />
              <path d="M60.9988 0.5H20.1238L1.99879 25.5" stroke="white" />
            </g>
          </svg>
        </div>
      );
    }

    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="143"
          height="73"
          viewBox="0 0 143 73"
          fill="none"
          className="block max-[500px]:hidden"
        >
          <g opacity="0.4">
            <circle
              cx="4"
              cy="4"
              r="4"
              transform="matrix(-1 0 0 1 8 0)"
              fill="white"
            />
            <path d="M143 72L52.4738 72L4 4" stroke="white" />
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="20"
          viewBox="0 0 54 20"
          fill="none"
          className="hidden max-[500px]:block"
        >
          <g opacity="0.4">
            <path d="M54.0007 19H14.0841L2.00074 2" stroke="white" />
            <circle
              cx="1.93103"
              cy="1.93103"
              r="1.93103"
              transform="rotate(180 1.93103 1.93103)"
              fill="white"
            />
          </g>
        </svg>
      </div>
    );
  };

  return (
    <div
      className={`absolute group z-10 flex ${direction} ${align} ${gap}`}
      style={{
        left: `${videoX}%`,
        top: `${videoY}%`,
        transform: "translate(-50%, -50%)",
      }}
      tabIndex={0}
      role="button"
    >
      <div
        className={`relative inline-block transition-transform duration-300 ${hover}`}
      >
        <h4 className="text-white font-['Host_Grotesk'] text-[12px] font-medium leading-[100%] tracking-[0.36px] uppercase">
          {label}
        </h4>
        <p className="absolute left-0 top-full mt-[2px] w-[100px] lg:w-[180px] text-white/80 font-['Host_Grotesk'] text-[12px] font-medium leading-[100%] tracking-[0.36px] uppercase opacity-0 pointer-events-none transition-opacity duration-300 lg:group-hover:opacity-70 max-lg:group-focus:opacity-70">
          {description}
        </p>
      </div>
      {renderSvg()}
    </div>
  );
}

type Rect = { width: number; height: number; left: number; top: number };

type ResponsiveConfig = {
  minWidth: number;
  maxWidth: number;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  invertX?: boolean;
  invertY?: boolean;
};

const STICK_RESPONSIVE_CONFIG: Record<
  "step1" | "step2" | "step3",
  ResponsiveConfig
> = {
  step1: {
    minWidth: 900,
    maxWidth: 1920,
    minX: 12,
    maxX: 40,
    minY: 38.6,
    maxY: 36,
    invertY: true,
  },
  step2: {
    minWidth: 900,
    maxWidth: 1920,
    minX: 56,
    maxX: 64,
    minY: 22,
    maxY: 38,
    invertX: true,
    invertY: true,
  },
  step3: {
    minWidth: 900,
    maxWidth: 1920,
    minX: 60,
    maxX: 94,
    minY: 50.2,
    maxY: 52,
    invertX: true,
    invertY: true,
  },
};

function getResponsiveValue(
  windowWidth: number,
  config: ResponsiveConfig,
  axis: "x" | "y"
): number {
  const { minWidth, maxWidth, minX, maxX, minY, maxY, invertX, invertY } =
    config;

  if (!windowWidth) {
    if (axis === "x") return invertX ? minX : maxX;
    return invertY ? minY : maxY;
  }

  const isX = axis === "x";
  const min = isX ? minX : minY;
  const max = isX ? maxX : maxY;
  const invert = isX ? invertX : invertY;

  if (windowWidth <= minWidth) {
    return invert ? min : max;
  }

  if (windowWidth >= maxWidth) {
    return invert ? max : min;
  }

  const t = (windowWidth - minWidth) / (maxWidth - minWidth);

  if (invert) {
    return min + (max - min) * t;
  }

  return max + (min - max) * t;
}

export function Sticks() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoRect, setVideoRect] = useState<Rect>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryPlay = () => {
      video.play().catch(() => {});
    };

    tryPlay();

    const updateVideoRect = () => {
      if (!video.videoWidth || !video.videoHeight) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setWindowWidth(vw);

      const videoAspect = video.videoWidth / video.videoHeight;
      const viewportAspect = vw / vh;

      let width: number;
      let height: number;
      let left: number;
      let top: number;

      if (viewportAspect > videoAspect) {
        width = vw;
        height = vw / videoAspect;
        left = 0;
        top = (vh - height) / 2;
      } else {
        height = vh;
        width = vh * videoAspect;
        top = 0;
        left = (vw - width) / 2;
      }

      setVideoRect({ width, height, left, top });
    };

    video.addEventListener("loadedmetadata", updateVideoRect);
    window.addEventListener("resize", updateVideoRect);
    updateVideoRect();

    return () => {
      video.removeEventListener("loadedmetadata", updateVideoRect);
      window.removeEventListener("resize", updateVideoRect);
    };
  }, []);

  const step1X = getResponsiveValue(
    windowWidth,
    STICK_RESPONSIVE_CONFIG.step1,
    "x"
  );
  const step1Y = getResponsiveValue(
    windowWidth,
    STICK_RESPONSIVE_CONFIG.step1,
    "y"
  );

  const step2X = getResponsiveValue(
    windowWidth,
    STICK_RESPONSIVE_CONFIG.step2,
    "x"
  );
  const step2Y = getResponsiveValue(
    windowWidth,
    STICK_RESPONSIVE_CONFIG.step2,
    "y"
  );

  const step3X = getResponsiveValue(
    windowWidth,
    STICK_RESPONSIVE_CONFIG.step3,
    "x"
  );
  const step3Y = getResponsiveValue(
    windowWidth,
    STICK_RESPONSIVE_CONFIG.step3,
    "y"
  );

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      <video
        ref={videoRef}
        className="pointer-events-none fixed inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg-vid.mp4" type="video/mp4" />
      </video>

      {videoRect.width > 0 && (
        <div
          className="fixed"
          style={{
            left: `${videoRect.left}px`,
            top: `${videoRect.top}px`,
            width: `${videoRect.width}px`,
            height: `${videoRect.height}px`,
          }}
        >
          <div className="relative w-full h-full">
            <Stick
              label="Step 1"
              description="nest exchange fees fuel perpetual HYPE accumulation."
              videoX={step1X}
              videoY={step1Y}
              variant="left"
            />
            <Stick
              label="Step 2"
              description="HYPE becomes MEGAHYPE, compounding exposure."
              videoX={step2X}
              videoY={step2Y}
              variant="rightTop"
              hover="lg:group-hover:-translate-y-6 max-lg:group-focus:-translate-y-12"
            />
            <Stick
              label="Step 3"
              description="MEGAHYPE rewards flow back to voters, powering the flywheel."
              videoX={step3X}
              videoY={step3Y}
              variant="rightBottom"
              hover="lg:group-hover:translate-y-1 max-lg:group-focus:translate-y-1"
            />
          </div>
        </div>
      )}
    </div>
  );
}
