import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo.jsx";
import Container from "./Container.jsx";
import siteConfig, { navigation, sectionPath, whatsappUrl } from "../data/siteConfig.js";
import products from "../data/products.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-ivory">
      <Container className="grid gap-12 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/80">
            VEERAA Garments is a fabric bag manufacturing company committed to
            promoting sustainable alternatives to single-use plastic bags.
          </p>
          <p className="mt-4 font-display text-xl text-beige">{siteConfig.tagline}</p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-beige">
            Quick links
          </h2>
          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link to={sectionPath(item.id)} className="text-sm text-ivory/80 hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-beige">
            Products
          </h2>
          <ul className="mt-5 space-y-3">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/#${product.id}`}
                  className="text-sm text-ivory/80 hover:text-ivory"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-beige">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-ivory/80">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-beige" aria-hidden="true" />
              <span>{siteConfig.location}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-beige" aria-hidden="true" />
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-ivory">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="mt-0.5 shrink-0 text-beige" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-ivory">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center text-beige hover:text-ivory"
              >
                WhatsApp {siteConfig.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-ivory/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.business}</p>
        </Container>
      </div>
    </footer>
  );
}
