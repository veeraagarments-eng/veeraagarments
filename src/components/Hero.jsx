import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import images from "../data/assets.js";
import siteConfig from "../data/siteConfig.js";
import { facts } from "../data/content.js";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="scroll-mt-0 bg-forest-deep text-ivory">
      <div className="relative flex min-h-[100svh] items-end md:items-center">
        <img
          src={images.hero}
          alt="Placeholder photograph of a weaving loom in a textile workshop"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-forest-deep/45 md:bg-gradient-to-r md:from-forest-deep md:via-forest-deep/75 md:to-forest-deep/25" />
        <Container className="relative z-10 w-full py-24 sm:py-28">
          <motion.div
            className="max-w-3xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-beige sm:text-xs">
              Established {siteConfig.established} · Erode, Tamil Nadu
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[2.05rem] leading-[1.12] sm:text-5xl lg:text-7xl lg:leading-[1.05]">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ivory/90 sm:text-lg">
              Established in 2018, VEERAA Garments is a fabric bag manufacturing
              company committed to promoting sustainable alternatives to
              single-use plastic bags.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory/80 sm:text-base">
              From our own fabric weaving to bag manufacturing and in-house
              printing, we provide complete customised fabric bag solutions
              under one roof.
            </p>
            <p className="mt-6 border-l border-beige pl-4 font-display text-xl text-beige italic sm:text-2xl">
              {siteConfig.supportingTagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/#products" variant="ivory">
                Explore Our Products
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
              <Button to="/#enquiry" variant="outline-light">
                Contact Us
              </Button>
              <Button to="/#enquiry" variant="beige">
                Get a Quote
              </Button>
            </div>
          </motion.div>
        </Container>
      </div>
      <div className="relative z-10 border-t border-forest/10 bg-beige text-charcoal">
        <Container className="grid grid-cols-2 gap-x-4 gap-y-6 py-6 md:grid-cols-4 md:py-8">
          {facts.map((fact) => (
            <div key={fact.label}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
                {fact.label}
              </p>
              <p className="mt-2 font-display text-lg leading-snug text-charcoal sm:text-xl">
                {fact.value}
              </p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
