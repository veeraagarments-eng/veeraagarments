import cx from "../utils/cx.js";

export default function PhotoSlot({ label = "Photo coming soon", className = "", tone = "blue" }) {
  const wash = tone === "orange" ? "from-orange to-orange-deep" : "from-blue to-blue-deep";

  return (
    <div
      className={cx(
        "relative flex items-end overflow-hidden bg-gradient-to-br text-white",
        wash,
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 14px, rgba(255,255,255,0.35) 14px 15px), repeating-linear-gradient(0deg, transparent 0 14px, rgba(255,255,255,0.2) 14px 15px)",
        }}
      />
      <span className="relative m-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-blue uppercase">
        {label}
      </span>
    </div>
  );
}
