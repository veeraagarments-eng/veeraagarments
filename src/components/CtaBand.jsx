import { Phone } from "lucide-react";
import Container from "./Container.jsx";
import siteConfig, { whatsappUrl } from "../data/siteConfig.js";

export default function CtaBand() {
  return (
    <section className="bg-blue py-16 text-white sm:py-20">
      <Container className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Partner with a fabric bag manufacturer</h2>
        <p className="mt-4 text-white/85">
          Wholesale manufacturing for retail programmes, corporate orders and export enquiries.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-orange px-6 font-semibold text-white hover:bg-orange-deep sm:w-auto"
          >
            <Phone size={18} aria-hidden="true" />
            Call Now: {siteConfig.phoneDisplay}
          </a>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-white px-6 font-semibold text-white hover:bg-white hover:text-blue sm:w-auto"
          >
            WhatsApp Us
          </a>
        </div>
      </Container>
    </section>
  );
}
