import { Link } from "react-router-dom";
import Container from "./Container.jsx";

export default function PageHero({ eyebrow, title, lede, image, imageAlt }) {
  return (
    <section className="relative flex min-h-[46vh] items-end bg-forest-deep text-ivory md:min-h-[52vh]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/75 to-forest-deep/35" />
      <Container className="relative z-10 w-full pt-28 pb-10 sm:pt-32 sm:pb-14">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-beige">
          <Link to="/" className="hover:text-ivory">
            Home
          </Link>
          <span aria-hidden="true" className="px-2">
            /
          </span>
          <span aria-current="page">{title}</span>
        </nav>
        {eyebrow ? (
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-beige">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight sm:text-6xl">{title}</h1>
        {lede ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-ivory/85 sm:text-lg">{lede}</p> : null}
      </Container>
    </section>
  );
}
