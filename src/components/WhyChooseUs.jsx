import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { reasons } from "../data/content.js";

export default function WhyChooseUs() {
  return (
    <section id="why-veeraa" className="bg-ivory py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow="The partnership" title="Why Choose VEERAA GARMENTS?" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <li
                key={reason.title}
                className="border border-charcoal/10 bg-ivory p-5 transition-colors duration-300 hover:border-sage sm:p-6"
              >
                <span className="grid h-11 w-11 place-items-center bg-beige text-forest">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-2xl leading-tight text-forest">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{reason.text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
