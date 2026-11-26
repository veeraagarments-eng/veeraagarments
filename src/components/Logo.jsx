import { Link } from "react-router-dom";
import siteConfig from "../data/siteConfig.js";
import cx from "../utils/cx.js";

export default function Logo({ className = "" }) {
  return (
    <Link to="/" className={cx("inline-flex shrink-0 items-center", className)} aria-label="VEERAA GARMENTS home">
      <img
        src={siteConfig.logo}
        alt="Veera Cotton Mills"
        className="h-14 w-14 rounded-full object-cover shadow-sm sm:h-16 sm:w-16"
      />
    </Link>
  );
}
