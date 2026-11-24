import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WhatsAppButton from "./WhatsAppButton.jsx";
import BackToTop from "./BackToTop.jsx";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hash = location.hash.replace(/^#/, "");

    if (hash) {
      const timer = window.setTimeout(() => {
        const target = document.getElementById(hash);
        if (target) {
          target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        }
      }, 50);
      return () => window.clearTimeout(timer);
    }

    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
    return undefined;
  }, [location.pathname, location.hash, location.search]);

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-charcoal">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
