import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import Products from "../components/Products.jsx";
import EnquiryBand from "../components/EnquiryBand.jsx";
import images from "../data/assets.js";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Products | VEERAA GARMENTS"
        description="Explore cotton tote bags, canvas bags, shopping bags, promotional bags, custom printed bags and other fabric bags manufactured by VEERAA Garments."
      />
      <PageHero
        eyebrow="Collection"
        title="Products"
        lede="Fabric bags for corporate, wholesale, retail, promotional and export programmes."
        image={images.products.canvasBag}
        imageAlt="Placeholder photograph of a canvas bag"
      />
      <Products />
      <EnquiryBand />
    </>
  );
}
