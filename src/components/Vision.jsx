import images from "../data/assets.js";
import Container from "./Container.jsx";

export default function Vision() {
  return (
    <section id="vision" className="relative flex min-h-[70vh] items-center bg-forest-deep text-ivory">
      <img
        src={images.sustainability.forest}
        alt="Placeholder photograph of a forest, used for the sustainability vision"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-forest-deep/75" />
      <Container className="relative z-10 py-20 text-center sm:py-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-beige">
          Our vision
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-6xl">
          Our Commitment to a Greener Future.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg">
          We believe every reusable fabric bag represents a small step towards
          reducing plastic pollution.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg">
          Our vision is to become a trusted fabric bag manufacturing partner in
          domestic and international markets.
        </p>
        <p className="mt-8 font-display text-2xl text-beige italic sm:text-4xl">
          Replace Plastic. Reuse More. Protect Nature.
        </p>
      </Container>
    </section>
  );
}
