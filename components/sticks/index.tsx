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
  delay?: number;
};

function Stick({
  label,
  description,
  variant = "left",
  videoX,
  hover = "lg:group-hover:-translate-y-10 max-lg:group-focus:-translate-y-10",
  videoY,
  delay,
}: StickProps) {
  const isRightTop = variant === "rightTop";
  const isRightBottom = variant === "rightBottom";

  const direction = isRightBottom ? "flex-col-reverse" : "flex-col";
  const align = isRightTop || isRightBottom ? "items-start " : "items-start";
  const gap = isRightTop || isRightBottom ? "gap-2" : "";
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHovered(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const renderSvg = () => {
    if (variant === "left") {
      return (
        <div className="mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="191"
            height="73"
            viewBox="0 0 191 73"
            fill="none"
            className="block max-[500px]:hidden"
          >
            <g opacity="0.4">
              <circle
                cx="4"
                cy="4"
                r="4"
                transform="matrix(1 0 0 -1 183 72.5)"
                fill="white"
              />
              <path d="M0 0.5L138.526 0.5L187 68.5" stroke="white" />
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
            width="225"
            height="88"
            viewBox="0 0 225 88"
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
              <path d="M225 0.5L63.4331 0.5L4 83.5" stroke="white" />
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
          width="217"
          height="73"
          className="block max-[500px]:hidden"
          viewBox="0 0 217 73"
          fill="none"
        >
          <g opacity="0.4">
            <circle
              cx="4"
              cy="4"
              r="4"
              transform="matrix(-1 0 0 1 8 0)"
              fill="white"
            />
            <path d="M216.5 72H52.4738L4 4" stroke="white" />
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
      className={`absolute group transition-opacity duration-300  ${
        isHovered ? "opacity-100" : "opacity-0"
      } z-20 flex ${direction} ${align} ${gap}`}
      style={{
        left: `${videoX}%`,
        top: `${videoY}%`,
        transform: "translate(-50%, -50%)",
      }}
      tabIndex={0}
      role="button"
    >
      <div
        className={`relative inline-block transition-transform duration-300 ${
          variant !== "left" && " ml-7 lg:ml-16"
        }  ${hover}`}
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
  xB?: number;
  yB?: number;
  xM?: number;
  yM?: number;
  invertY?: boolean;
};

const STICK_RESPONSIVE_CONFIG: Record<
  "step1" | "step2" | "step3",
  ResponsiveConfig
> = {
  step1: {
    minWidth: 800,
    maxWidth: 1920,
    minX: 25,
    maxX: 36,
    minY: 16,
    maxY: 12,
    invertY: true,
    xB: 16,
    yB: 10.4,
    xM: 34,
    yM: 6,
  },
  step2: {
    minWidth: 600,
    maxWidth: 2000,
    minX: 56,
    maxX: 65.5,
    minY: 28,
    maxY: 22,
    invertX: true,
    invertY: true,
    xB: 59,
    yB: 25,
    xM: 65,
    yM: 34,
  },
  step3: {
    minWidth: 900,
    maxWidth: 1920,
    minX: 57,
    maxX: 80,
    minY: 48.2,
    maxY: 52,
    invertX: true,
    invertY: true,
    xB: 70,
    yB: 52,
    xM: 80,
    yM: 50,
  },
};

function getResponsiveValue(
  windowWidth: number,
  config: ResponsiveConfig,
  axis: "x" | "y"
): number {
  const {
    minWidth,
    maxWidth,
    minX,
    maxX,
    minY,
    maxY,
    invertX,
    invertY,
    xB,
    yB,
    xM,
    yM,
  } = config;

  if (windowWidth <= 500 && xM) {
    if (axis === "x") {
      return xM;
    }
    return yM ? yM : maxY;
  }
  if (windowWidth >= 2060 && xB) {
    if (axis === "x") {
      return xB;
    }
    return yB ? yB : maxY;
  }

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
  const appearVideoRef = useRef<HTMLVideoElement>(null);
  const loopVideoRef = useRef<HTMLVideoElement>(null);

  const [videoRect, setVideoRect] = useState<Rect>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  const [windowWidth, setWindowWidth] = useState(0);
  const [showLoop, setShowLoop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setShowLoop(false);
  }, [isMobile]);

  useEffect(() => {
    const appear = appearVideoRef.current;
    const loop = loopVideoRef.current;
    if (!appear || !loop) return;

    const startVideo = async () => {
      try {
        appear.currentTime = 0;
        await appear.play();
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    };

    const prepareLoop = async () => {
      try {
        await loop.play();
        loop.pause();
        loop.currentTime = 0;
      } catch (error) {
        console.log("Loop preparation failed:", error);
      }
    };

    const handleAppearEnded = async () => {
      appear.style.display = "none";
      loop.style.display = "block";
      loop.currentTime = 0;
      try {
        await loop.play();
      } catch (error) {
        console.log("Loop play failed:", error);
      }
    };

    appear.load();
    loop.load();

    prepareLoop();

    appear.addEventListener("loadedmetadata", startVideo);
    appear.addEventListener("ended", handleAppearEnded);

    const handleUserInteraction = () => {
      if (appear.paused && appear.style.display !== "none") {
        appear.play().catch(() => {});
      }
    };

    document.addEventListener("touchstart", handleUserInteraction, {
      once: true,
    });
    document.addEventListener("click", handleUserInteraction, { once: true });

    return () => {
      appear.removeEventListener("loadedmetadata", startVideo);
      appear.removeEventListener("ended", handleAppearEnded);
      document.removeEventListener("touchstart", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
    };
  }, [isMobile]);
  useEffect(() => {
    const updateVideoRect = () => {
      setVideoRect({
        width: window.innerWidth,
        height: window.innerHeight,
        left: 0,
        top: 0,
      });
      setWindowWidth(window.innerWidth);
    };

    updateVideoRect();

    window.addEventListener("resize", updateVideoRect);

    const video = appearVideoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", updateVideoRect);
    }

    return () => {
      window.removeEventListener("resize", updateVideoRect);
      if (video) {
        video.removeEventListener("loadedmetadata", updateVideoRect);
      }
    };
  }, [isMobile]);
  const step1OffsetX = getResponsiveValue(
    windowWidth,
    STICK_RESPONSIVE_CONFIG.step1,
    "x"
  );
  const step1OffsetY = getResponsiveValue(
    windowWidth,
    STICK_RESPONSIVE_CONFIG.step1,
    "y"
  );
  const step1X = 50 - step1OffsetX;
  const step1Y = 50 - step1OffsetY;

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
    <div className="w-full h-screen  relative overflow-hidden">
      <video
        ref={appearVideoRef}
        className="pointer-events-none fixed inset-0 w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        style={{ display: "block" }}
      >
        <source
          src={
            isMobile
              ? "/video/AppearForMobile.mp4"
              : "/background/Appear For Pc.webm"
          }
        />
      </video>

      <video
        ref={loopVideoRef}
        className="pointer-events-none fixed inset-0 w-full h-full object-cover"
        muted
        playsInline
        loop
        style={{ display: "none" }}
      >
        <source
          src={
            isMobile
              ? "/video/LoopForMobile.mp4"
              : "/background/Loop For Pc.webm"
          }
        />
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
              description="nest exchange fees fuel perpetual HYPE accumulation"
              videoX={step1X}
              videoY={step1Y}
              variant="left"
              hover="lg:group-hover:-translate-y-10 max-lg:group-focus:-translate-y-16"
              delay={500}
            />
            <Stick
              label="Step 2"
              description="HYPE becomes MEGAHYPE, compounding exposure"
              videoX={step2X}
              videoY={step2Y}
              variant="rightTop"
              hover="lg:group-hover:-translate-y-6 max-lg:group-focus:-translate-y-12"
              delay={750}
            />
            <Stick
              label="Step 3"
              description="MEGAHYPE rewards flow back to voters, powering the flywheel"
              videoX={step3X}
              videoY={step3Y}
              variant="rightBottom"
              hover="lg:group-hover:translate-y-1 max-lg:group-focus:translate-y-1"
              delay={1000}
            />
          </div>
        </div>
      )}
    </div>
  );
}
