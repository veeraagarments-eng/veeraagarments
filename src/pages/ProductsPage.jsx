import Seo from "../components/Seo.jsx";
import PageBanner from "../components/PageBanner.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import CtaBand from "../components/CtaBand.jsx";

export default function ProductsPage() {
  return (
    <>
      <Seo
        title="Products | VEERAA GARMENTS"
        description="Cotton tote bags, canvas bags, shopping bags, promotional bags and custom printed fabric bags manufactured by VEERAA GARMENTS in Erode."
      />
      <PageBanner
        title="Products"
        lede="A manufacturing catalogue for wholesale and custom fabric bag programmes. Prices are shared on enquiry."
      />
      <ProductGrid showHeading={false} />
      <CtaBand />
    </>
  );
}
