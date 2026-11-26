import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Container from "./Container.jsx";
import PhotoSlot from "./PhotoSlot.jsx";
import siteConfig from "../data/siteConfig.js";

export default function HomeAbout() {
  const years = new Date().getFullYear() - Number(siteConfig.established);

  return (
    <section className="bg-white py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-ink/70 uppercase">
            Crafting quality since {siteConfig.established}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            One of the growing fabric bag manufacturers
          </h2>
          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-paper px-5 py-4">
            <span className="border-l-4 border-orange pl-4 text-4xl font-bold text-blue">{years}+</span>
            <p className="text-sm font-medium text-ink/80">Years of excellence in fabric bag manufacturing</p>
          </div>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/80">
            <p>
              <strong className="text-ink">VEERAA Garments</strong> was established in {siteConfig.established} to make reusable fabric bags in place of single-use plastic. We weave fabric in-house, then cut, stitch, print and pack the finished bags.
            </p>
            <p>
              We manufacture cotton tote bags, canvas bags, shopping bags, promotional bags, corporate gift bags and special customised fabric bags.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-md ring-1 ring-black/5">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-beige text-orange">
              <Phone size={22} />
            </span>
            <div>
              <p className="text-sm text-ink/60">Direct support line</p>
              <a href={`tel:${siteConfig.phoneTel}`} className="text-xl font-bold text-blue">
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
          <Link
            to="/about"
            className="mt-6 inline-flex min-h-12 items-center rounded-lg border-2 border-blue px-6 font-semibold text-blue hover:bg-blue hover:text-white"
          >
            Learn More About Us
          </Link>
        </div>
        <div className="relative mx-auto w-full max-w-lg pb-10 pr-4 sm:pr-8">
          <PhotoSlot label="Factory photo coming soon" className="aspect-[4/3] rounded-3xl" />
          <PhotoSlot
            label="Workshop photo coming soon"
            tone="orange"
            className="absolute -right-2 -bottom-8 aspect-square w-40 rounded-2xl shadow-xl ring-4 ring-white sm:w-52"
          />
        </div>
      </Container>
    </section>
  );
}
