import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo.jsx";
import Container from "./Container.jsx";
import siteConfig, { navigation, whatsappUrl } from "../data/siteConfig.js";
import products from "../data/products.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-deep text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <h2 className="mt-5 text-lg font-semibold">About Us</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
            VEERAA Garments manufactures reusable fabric bags in Erode, from our own weaving through stitching, printing and packing.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-sm text-white/80 hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-lg font-semibold">Our Products</h2>
          <ul className="mt-4 space-y-2">
            {products.slice(0, 6).map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`} className="text-sm text-white/80 hover:text-orange">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
              <span>{siteConfig.location}</span>
            </li>
            <li>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="text-orange hover:text-white">
                WhatsApp {siteConfig.whatsapp.display}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-4 text-center text-xs text-white/70">
          Copyright © {year} All Rights Reserved By {siteConfig.name}
        </Container>
      </div>
    </footer>
  );
}
