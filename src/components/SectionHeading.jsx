import cx from "../utils/cx.js";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  as = "h2",
}) {
  const Heading = as;
  return (
    <div className={cx(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
      {eyebrow ? (
        <p
          className={cx(
            "mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] sm:text-xs",
            light ? "text-beige" : "text-forest",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cx(
          "font-display text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.12]",
          light ? "text-ivory" : "text-forest",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cx(
            "mt-5 text-base leading-relaxed sm:text-lg",
            light ? "text-ivory/85" : "text-charcoal/80",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
