import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import ProductCard from "./ProductCard.jsx";
import products from "../data/products.js";
import siteConfig from "../data/siteConfig.js";

export default function Products() {
  return (
    <section id="products" className="bg-ivory py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Catalogue"
          title="Our Product Collection."
          description="Fabric bags for corporate buyers, wholesalers, retailers, distributors, promotional companies and international importers."
        />
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-charcoal/60">
          {siteConfig.placeholderNote} Prices are not listed. This is a manufacturing
          and wholesale catalogue.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
