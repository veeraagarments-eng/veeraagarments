import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import PageBanner from "../components/PageBanner.jsx";
import Container from "../components/Container.jsx";
import PhotoSlot from "../components/PhotoSlot.jsx";
import products from "../data/products.js";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) return <Navigate to="/products" replace />;

  return (
    <>
      <Seo title={`${product.name} | VEERAA GARMENTS`} description={product.description} />
      <PageBanner title={product.name} lede={product.description} />
      <section className="bg-white py-14">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <PhotoSlot label="Photo coming soon" className="aspect-[4/3] rounded-3xl" />
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-orange uppercase">Collection</p>
            <h2 className="mt-2 text-3xl font-bold text-ink">{product.name}</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{product.description}</p>
            <p className="mt-4 text-sm text-ink/60">
              Photographs for this collection will be added when the client sends them. Share your size, fabric, print and quantity for a quotation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-orange px-6 font-semibold text-white hover:bg-orange-deep"
              >
                Enquiry Now
              </Link>
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-blue px-6 font-semibold text-blue"
              >
                All Products
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
