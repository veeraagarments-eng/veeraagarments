import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Mail, Menu, Phone } from "lucide-react";
import Logo from "./Logo.jsx";
import MobileMenu from "./MobileMenu.jsx";
import Container from "./Container.jsx";
import siteConfig, { navigation } from "../data/siteConfig.js";
import products from "../data/products.js";
import cx from "../utils/cx.js";

export default function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_rgba(14,77,146,0.08)]">
      <div className="bg-blue text-white">
        <Container className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1 py-2 text-[13px] sm:text-sm">
          <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-orange">
            <Mail size={15} aria-hidden="true" />
            {siteConfig.email}
          </a>
          <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center gap-2 hover:text-orange">
            <Phone size={15} aria-hidden="true" />
            {siteConfig.phoneDisplay}
          </a>
        </Container>
      </div>

      <Container className="flex h-[4.5rem] items-center justify-between gap-4 sm:h-20">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
            if (item.to === "/products") {
              return (
                <div key={item.to} className="group relative">
                  <Link
                    to={item.to}
                    className={cx(
                      "inline-flex items-center gap-1 py-2 text-[15px] font-medium text-ink",
                      active && "text-orange",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    <ChevronDown size={16} aria-hidden="true" />
                    <span
                      className={cx(
                        "absolute right-0 -bottom-1 left-0 h-0.5 bg-orange transition-opacity",
                        active ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                      )}
                    />
                  </Link>
                  <div className="invisible absolute top-full left-1/2 z-20 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="max-h-80 overflow-auto rounded-xl bg-white py-2 shadow-xl ring-1 ring-black/5">
                      <li>
                        <Link to="/products" className="block px-4 py-2 text-sm font-semibold text-blue hover:bg-paper hover:text-orange">
                          All Products
                        </Link>
                      </li>
                      {products.map((product) => (
                        <li key={product.id}>
                          <Link
                            to={`/products/${product.id}`}
                            className="block px-4 py-2 text-sm text-ink hover:bg-paper hover:text-orange"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "relative py-2 text-[15px] font-medium text-ink hover:text-orange",
                  active && "text-orange",
                )}
              >
                {item.label}
                <span
                  className={cx(
                    "absolute right-0 -bottom-1 left-0 h-0.5 bg-orange",
                    active ? "opacity-100" : "opacity-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden min-h-11 items-center rounded-lg bg-orange px-5 text-sm font-semibold tracking-wide text-white uppercase hover:bg-orange-deep sm:inline-flex"
          >
            Enquiry Now
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-blue/15 text-blue lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
