import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import PageBanner from "../components/PageBanner.jsx";
import Container from "../components/Container.jsx";
import CtaBand from "../components/CtaBand.jsx";
import siteConfig from "../data/siteConfig.js";
import { timeline, processSteps } from "../data/content.js";
import facilities from "../data/facilities.js";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | VEERAA GARMENTS"
        description="VEERAA Garments was established in 2018 in Erode, Tamil Nadu, to manufacture reusable fabric bags, with its own weaving facilities and multiple manufacturing units."
      />
      <PageBanner
        title="About Us"
        lede="A fabric bag manufacturer in Erode, working from its own looms to finished, printed bags."
      />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-ink/80">
          <p>
            VEERAA Garments was established in {siteConfig.established} with a vision to reduce single-use plastic bags and promote reusable fabric bags.
          </p>
          <p>
            Production began on a small scale, with fabrics sourced from outside. Weaving was later brought in-house so quality, production and consistency could be controlled more closely.
          </p>
          <p>
            Today the company runs manufacturing facilities in Erode, Unjalur and near Musiri, covering weaving, bag making, printing, quality checks and packing.
          </p>
        </Container>
        <Container className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item) => (
            <article key={item.title} className="rounded-2xl bg-paper p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-orange uppercase">{item.label}</p>
              <h2 className="mt-2 text-xl font-bold text-blue">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{item.text}</p>
            </article>
          ))}
        </Container>
      </section>
      <section className="bg-paper py-16">
        <Container>
          <h2 className="text-3xl font-bold text-ink">How bags are made</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.number} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-orange">{step.number}</p>
                <h3 className="mt-1 text-lg font-semibold text-blue">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-3xl font-bold text-ink">Facilities</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {facilities.map((facility) => (
              <article key={facility.id} className="rounded-2xl border border-blue/10 p-5">
                <h3 className="text-lg font-semibold text-blue">{facility.name}</h3>
                <p className="mt-1 text-sm font-medium text-orange">{facility.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{facility.description}</p>
              </article>
            ))}
          </div>
          <Link to="/contact" className="mt-8 inline-flex font-semibold text-orange hover:text-orange-deep">
            Talk to us about a bulk order
          </Link>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
