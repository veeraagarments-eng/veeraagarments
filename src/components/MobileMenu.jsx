import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import { navigation, sectionPath, whatsappUrl } from "../data/siteConfig.js";
import cx from "../utils/cx.js";

export default function MobileMenu({ open, onClose, activeId }) {
  const reduce = useReducedMotion();
  const closeRef = useRef(null);

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
            className="fixed inset-0 z-50 cursor-pointer bg-charcoal/50"
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
            className="fixed inset-y-0 right-0 z-50 flex h-dvh w-full max-w-full flex-col overflow-hidden bg-forest text-ivory sm:max-w-md"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? { opacity: 0 } : { x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-5">
              <Logo light />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-ivory/30"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="min-h-0 flex-1 overflow-y-auto px-5 pb-6" aria-label="Mobile">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <Link
                        to={sectionPath(item.id)}
                        onClick={onClose}
                        aria-current={isActive ? "page" : undefined}
                        className={cx(
                          "block border-b border-ivory/10 py-3 font-display text-3xl",
                          isActive ? "text-beige" : "text-ivory",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="space-y-3 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <Button to={sectionPath("enquiry")} variant="ivory" className="w-full" onClick={onClose}>
                Get a Quote
              </Button>
              <Button
                href={whatsappUrl()}
                variant="outline-light"
                className="w-full"
                onClick={onClose}
              >
                WhatsApp
              </Button>
              <p className="pt-2 text-sm text-ivory/70">Erode, Tamil Nadu, India</p>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
