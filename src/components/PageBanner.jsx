import { Link } from "react-router-dom";
import Container from "./Container.jsx";

export default function PageBanner({ title, lede }) {
  return (
    <section className="bg-blue py-14 text-white sm:py-16">
      <Container>
        <nav aria-label="Breadcrumb" className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
          <Link to="/" className="hover:text-orange">
            Home
          </Link>
          <span aria-hidden="true" className="px-2">
            /
          </span>
          <span aria-current="page">{title}</span>
        </nav>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
        {lede ? <p className="mt-3 max-w-2xl text-white/85">{lede}</p> : null}
      </Container>
    </section>
  );
}
