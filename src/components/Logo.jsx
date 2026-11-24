import { Link } from "react-router-dom";
import cx from "../utils/cx.js";

export default function Logo({ light = false, className = "" }) {
  return (
    <Link
      to="/#home"
      className={cx(
        "inline-flex items-center gap-3 no-underline",
        light ? "text-ivory" : "text-forest",
        className,
      )}
      aria-label="VEERAA GARMENTS home"
    >
      <svg viewBox="0 0 40 40" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect
          x="1.5"
          y="1.5"
          width="37"
          height="37"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M8 31V9h24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M13 9v18M18.5 9v18M24 9v18M29.5 9v18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M8 15h24M8 21h24M8 27h24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
      </svg>
      <span className="leading-none">
        <span className="block font-display text-[1.35rem] tracking-[0.04em]">
          VEERAA
        </span>
        <span className="mt-1 block text-[10px] font-semibold tracking-[0.28em]">
          GARMENTS
        </span>
      </span>
    </Link>
  );
}
