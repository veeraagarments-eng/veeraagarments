import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Logo from "./Logo.jsx";
import { navigation, whatsappUrl } from "../data/siteConfig.js";
import products from "../data/products.js";
import cx from "../utils/cx.js";

export default function MobileMenu({ open, onClose }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-50 cursor-pointer bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-sm flex-col overflow-hidden bg-white text-ink"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-blue/10 px-5 py-4">
              <Logo />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-blue/15 text-blue"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="min-h-0 flex-1 overflow-y-auto px-5 py-4" aria-label="Mobile">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const active = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
                  return (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cx(
                          "block rounded-lg px-3 py-3 text-lg font-semibold",
                          active ? "bg-beige text-orange" : "text-blue",
                        )}
                      >
                        {item.label}
                      </Link>
                      {item.to === "/products" ? (
                        <ul className="mb-2 ml-3 border-l border-orange/30 pl-3">
                          {products.map((product) => (
                            <li key={product.id}>
                              <Link
                                to={`/products/${product.id}`}
                                onClick={onClose}
                                className="block py-1.5 text-sm text-ink/80 hover:text-orange"
                              >
                                {product.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="space-y-3 border-t border-blue/10 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex min-h-12 items-center justify-center rounded-lg bg-orange font-semibold text-white uppercase"
              >
                Enquiry Now
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-12 items-center justify-center rounded-lg border border-blue font-semibold text-blue"
              >
                WhatsApp
              </a>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
