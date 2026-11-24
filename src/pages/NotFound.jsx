import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Container from "../components/Container.jsx";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | VEERAA GARMENTS"
        description="The page you requested is not available on the VEERAA GARMENTS website."
      />
      <section className="flex min-h-[70vh] items-center bg-forest-deep text-ivory">
        <Container className="py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-beige">404</p>
          <h1 className="mt-4 font-display text-5xl">This page is not available.</h1>
          <p className="mt-4 max-w-xl text-ivory/80">
            The address may have changed. Return to the homepage to explore our fabric bags and manufacturing.
          </p>
          <Link
            to="/#home"
            className="mt-8 inline-flex min-h-12 items-center bg-ivory px-6 text-xs font-semibold uppercase tracking-[0.14em] text-forest"
          >
            Back to Home
          </Link>
        </Container>
      </section>
    </>
  );
}
