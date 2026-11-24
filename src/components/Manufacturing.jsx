import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import images from "../data/assets.js";
import { processSteps } from "../data/content.js";

const stepImages = [
  images.factory.fabricWeaving,
  images.factory.fabricDevelopment,
  images.factory.bagStitching,
  images.factory.printingProcess,
  images.factory.qualityControl,
  images.factory.packaging,
];

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="bg-beige py-16 sm:py-20 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Manufacturing"
            title="Complete Manufacturing Under One Roof."
            description="From our own fabric weaving to bag manufacturing and in-house printing, customised bag production is handled within our facilities."
          />
          <p className="mt-6 max-w-3xl border-l border-forest pl-4 font-display text-2xl text-forest italic sm:text-3xl">
            From fabric production to finished bags, we manage the complete manufacturing process.
          </p>
        </Reveal>

        <div className="relative mt-12 xl:mt-16">
          <span
            className="absolute top-0 bottom-0 left-5 w-px bg-sage/40 sm:hidden"
            aria-hidden="true"
          />
          <ol className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-10 xl:gap-y-14">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="relative pl-14 sm:pl-0">
                {index % 3 !== 2 ? (
                  <span
                    className="pointer-events-none absolute top-5 left-14 right-[-2.5rem] hidden h-px bg-sage/50 xl:block"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="absolute top-0 left-0 z-10 grid h-10 w-10 place-items-center bg-beige font-display text-forest sm:static sm:mb-5 sm:bg-transparent">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-sage/50 bg-beige text-sm">
                    {step.number}
                  </span>
                </div>
                <Reveal delay={Math.min(index * 0.04, 0.16)}>
                  <div className="overflow-hidden bg-ivory">
                    <img
                      src={stepImages[index]}
                      alt={`Placeholder photograph for ${step.title.toLowerCase()}`}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-forest">
                    <Icon size={18} aria-hidden="true" />
                    <h3 className="font-display text-2xl">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{step.text}</p>
                </Reveal>
              </li>
            );
          })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
