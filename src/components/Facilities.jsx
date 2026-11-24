import { MapPin } from "lucide-react";
import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import facilities from "../data/facilities.js";
import siteConfig from "../data/siteConfig.js";

export default function Facilities() {
  return (
    <section id="facilities" className="bg-beige py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Facilities"
            title="Multiple Facilities. One Manufacturing Vision."
            description="Production is organised across our main facility in Erode and manufacturing units in Unjalur and near Musiri."
          />
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-charcoal/60">
            {siteConfig.placeholderNote}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <article key={facility.id} className="flex flex-col bg-ivory">
              <img
                src={facility.image}
                alt={facility.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-2xl text-forest">{facility.name}</h3>
                <p className="mt-3 flex items-start gap-2 text-sm font-medium text-charcoal">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-forest" aria-hidden="true" />
                  <span>{facility.location}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                  {facility.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
