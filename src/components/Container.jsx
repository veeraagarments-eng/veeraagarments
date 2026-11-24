import cx from "../utils/cx.js";

export default function Container({ className = "", children }) {
  return (
    <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
