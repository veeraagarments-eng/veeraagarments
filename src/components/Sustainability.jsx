import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import Reveal from "./Reveal.jsx";
import images from "../data/assets.js";
import siteConfig from "../data/siteConfig.js";

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-beige py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-5 gap-3 sm:gap-4">
              <img
                src={images.sustainability.workshop}
                alt="Placeholder photograph of fabric work in a workshop"
                className="col-span-3 aspect-[3/4] h-full w-full object-cover"
                loading="lazy"
              />
              <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
                <img
                  src={images.sustainability.forest}
                  alt="Placeholder photograph of a forest path"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <img
                  src={images.sustainability.craft}
                  alt="Placeholder photograph of hands finishing a textile"
                  className="aspect-[4/5] w-full flex-1 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-charcoal/55">
              {siteConfig.placeholderNote}
            </p>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <SectionHeading eyebrow="Sustainability" title="Empowering Rural Communities." />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
              <p>Our vision goes beyond manufacturing.</p>
              <p>
                Through our manufacturing units in rural locations, we aim to
                create employment opportunities, support local communities and
                encourage skill development.
              </p>
              <p>We believe business growth should also contribute to society.</p>
            </div>
            <p className="mt-8 font-display text-2xl text-forest italic sm:text-3xl">
              Better Bags. Better Communities. Better Future.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
