import { Link } from "react-router-dom";
import cx from "../utils/cx.js";

const variants = {
  solid:
    "bg-forest text-ivory hover:bg-forest-deep focus-visible:outline-forest",
  ivory:
    "bg-ivory text-forest hover:bg-beige focus-visible:outline-ivory",
  beige:
    "bg-beige text-forest hover:bg-ivory focus-visible:outline-beige",
  outline:
    "border border-forest bg-transparent text-forest hover:bg-forest hover:text-ivory focus-visible:outline-forest",
  "outline-light":
    "border border-ivory/80 bg-transparent text-ivory hover:bg-ivory hover:text-forest focus-visible:outline-ivory",
};

export default function Button({
  to,
  href,
  children,
  variant = "solid",
  className = "",
  ...props
}) {
  const classes = cx(
    "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 px-6 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 sm:text-[13px]",
    variants[variant],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
