import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import PhotoSlot from "./PhotoSlot.jsx";
import products from "../data/products.js";

export default function ProductGrid({ limit, showHeading = true }) {
  const items = typeof limit === "number" ? products.slice(0, limit) : products;

  return (
    <section className="bg-paper py-16 sm:py-20">
      <Container>
        {showHeading ? (
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-[0.18em] text-orange uppercase">Our expertise</p>
            <h2 className="mt-2 text-3xl font-bold text-ink sm:text-4xl">Specialized Products</h2>
            <p className="mt-3 text-ink/70">
              Fabric bags for corporate buyers, wholesalers, retailers and export programmes. Photographs will be placed here when they arrive.
            </p>
          </div>
        ) : null}
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showHeading ? "mt-10" : ""}`}>
          {items.map((product, index) => (
            <article key={product.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
              <PhotoSlot
                label="Photo coming soon"
                tone={index % 2 === 0 ? "blue" : "orange"}
                className="aspect-[4/3]"
              />
              <div className="px-5 py-5 text-center">
                <h3 className="text-lg font-semibold text-blue">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{product.description}</p>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-4 inline-flex text-sm font-semibold text-orange hover:text-orange-deep"
                >
                  View Collection
                </Link>
              </div>
            </article>
          ))}
        </div>
        {typeof limit === "number" ? (
          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex min-h-12 items-center rounded-lg bg-blue px-6 font-semibold text-white hover:bg-blue-deep"
            >
              Explore All Products
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
