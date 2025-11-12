type StickVariant = "left" | "rightTop" | "rightBottom";

type StickProps = {
  label: string;
  description: string;
  className?: string;
  translate?: string;
  variant?: StickVariant;
  hoverClass?: string;
};

function Stick({
  label,
  description,
  className = "",
  translate = "-translate-y-[120px]",
  variant = "left",
  hoverClass = "group-hover:-translate-y-10 group-focus:-translate-y-10",
}: StickProps) {
  const isLeft = variant === "left";
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
            className="block max-[500px]:hidden group-hover:translate-y-2 group-focus:translate-y-2 transition-transform duration-300 ease-in-out"
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
            className="hidden max-[500px]:block group-hover:translate-y-2 group-focus:translate-y-2 transition-transform duration-300 ease-in-out"
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
            className="block max-[500px]:hidden group-hover:translate-y-2 group-focus:translate-y-2 transition-transform duration-300 ease-in-out"
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
            className="hidden max-[500px]:block group-hover:translate-y-2 group-focus:translate-y-2 transition-transform duration-300 ease-in-out"
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
          className="block max-[500px]:hidden group-hover:-translate-y-2 group-focus:-translate-y-2 transition-transform duration-300 ease-in-out"
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
          className="hidden max-[500px]:block group-hover:-translate-y-2 group-focus:-translate-y-2 transition-transform duration-300 ease-in-out"
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
      className={`absolute group flex ${direction} ${align} ${gap} ${className}`}
      tabIndex={0}
      role="button"
    >
      <div
        className={`
          relative
          inline-block
          transition-transform
          duration-300
          ${hoverClass}
        `}
      >
        <h4
          className="
            text-white
            font-['Host_Grotesk']
            text-[12px]
            font-medium
            leading-[100%]
            tracking-[0.36px]
            uppercase
          "
        >
          {label}
        </h4>

        <p
          className="
            absolute
            left-0
            top-full
            mt-[2px]
            w-[100px]
            lg:w-[180px]
            text-white/80
            font-['Host_Grotesk']
            text-[12px]
            font-medium

            leading-[100%]
            tracking-[0.36px]
            uppercase
            opacity-0
            pointer-events-none
            transition-opacity
            duration-300
            group-hover:opacity-70
            group-focus:opacity-70
          "
        >
          {description}
        </p>
      </div>

      {renderSvg()}
    </div>
  );
}

export function Sticks() {
  return (
    <>
      <Stick
        hoverClass="lg:group-hover:-translate-y-7 group-focus:-translate-y-14"
        label="Step 1"
        description="nest exchange fees fuel perpetual HYPE accumulation"
        className="lg:top-[234px] lg:left-[145px] left-[17px] top-[306px]"
        translate="-translate-y-10"
        variant="left"
      />

      <Stick
        hoverClass="lg:group-hover:-translate-y-4 group-focus:-translate-y-10"
        label="Step 2"
        description="HYPE becomes MEGAHYPE, compounding exposure"
        className="lg:top-[130px] lg:right-[567px] top-[232px] right-[83px]"
        translate="-translate-y-10"
        variant="rightTop"
      />

      <Stick
        hoverClass="group-hover:-translate-y-1 group-focus:-translate-y-1"
        label="Step 3"
        description="MEGAHYPE rewards flow back to voters, powering the flywheel"
        className="lg:bottom-[316px] lg:right-[140px] bottom-[430px] right-[85px]"
        translate="translate-y-1"
        variant="rightBottom"
      />
    </>
  );
}
