import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Logo from "./Logo.jsx";
import MobileMenu from "./MobileMenu.jsx";
import useActiveSection from "../hooks/useActiveSection.js";
import { navigation, sectionIds, sectionPath, whatsappUrl } from "../data/siteConfig.js";
import cx from "../utils/cx.js";

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(sectionIds);
  const solid = scrolled || open || location.pathname !== "/";

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        solid
          ? "bg-ivory/95 text-forest shadow-[0_1px_0_rgba(41,43,38,0.08)] backdrop-blur-md"
          : "bg-transparent text-ivory",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-6 lg:px-8">
        <Logo light={!solid} />

        <nav className="hidden items-center gap-4 xl:flex xl:gap-6" aria-label="Primary">
          {navigation.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                to={sectionPath(item.id)}
                aria-current={isActive ? "page" : undefined}
                className={cx(
                  "relative py-2 text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors 2xl:text-[13px] 2xl:tracking-[0.14em]",
                  isActive
                    ? solid
                      ? "text-forest"
                      : "text-ivory"
                    : solid
                      ? "text-charcoal/70 hover:text-forest"
                      : "text-ivory/75 hover:text-ivory",
                )}
              >
                {item.label}
                <span
                  className={cx(
                    "absolute right-0 bottom-0 left-0 h-px transition-colors",
                    isActive ? (solid ? "bg-sage" : "bg-beige") : "bg-transparent",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp VEERAA GARMENTS"
            className={cx(
              "inline-flex h-11 w-11 items-center justify-center border transition-colors",
              solid
                ? "border-forest/20 text-forest hover:bg-forest hover:text-ivory"
                : "border-ivory/40 text-ivory hover:bg-ivory hover:text-forest",
            )}
          >
            <WhatsAppIcon />
          </a>
          <Link
            to={sectionPath("enquiry")}
            className={cx(
              "hidden min-h-12 items-center px-4 text-[12px] font-semibold uppercase tracking-[0.14em] sm:inline-flex",
              solid ? "bg-forest text-ivory hover:bg-forest-deep" : "bg-ivory text-forest hover:bg-beige",
            )}
          >
            Get a Quote
          </Link>
          <button
            type="button"
            className={cx(
              "inline-flex h-11 w-11 cursor-pointer items-center justify-center border xl:hidden",
              solid ? "border-forest/20 text-forest" : "border-ivory/40 text-ivory",
            )}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} activeId={activeId} />
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.7L1 23l6.5-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.9.6.6-3.8-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 4 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}
