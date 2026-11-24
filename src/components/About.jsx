import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import images from "../data/assets.js";
import siteConfig from "../data/siteConfig.js";
import { timeline } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="bg-ivory py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="A Journey of Purpose, Growth & Sustainability."
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
              <p>
                VEERAA Garments was established in 2018 with a vision to reduce
                the use of single-use plastic bags and promote reusable,
                eco-friendly fabric bags.
              </p>
              <p>
                Our journey began on a small scale with fabric bag manufacturing.
                Initially, we sourced fabrics from external suppliers and
                concentrated on producing quality fabric bags.
              </p>
              <p>
                As our business expanded, we took an important step forward by
                establishing our own weaving facilities. This enabled us to
                manufacture fabrics in-house and maintain better control over
                quality, production and consistency.
              </p>
              <p>Today, we operate multiple manufacturing facilities.</p>
              <p>
                Our journey continues with a commitment to quality, sustainability
                and customer satisfaction.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative">
              <img
                src={images.about}
                alt="Placeholder photograph of fabric prepared in a textile workshop"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-ivory/95 px-4 py-3 sm:bottom-6 sm:left-6 sm:px-5">
                <p className="font-display text-3xl text-forest">{siteConfig.established}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/70">
                  Established in Erode
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-charcoal/55">
              {siteConfig.placeholderNote}
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <span
            className="absolute top-[5px] right-0 left-0 hidden h-px bg-sage/40 lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <li key={item.title} className="relative">
              <span className="relative z-10 mb-4 block h-3 w-3 rounded-full bg-forest" aria-hidden="true" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-forest">
                {item.label}
              </p>
              <h3 className="mt-2 font-display text-2xl text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{item.text}</p>
            </li>
          ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
