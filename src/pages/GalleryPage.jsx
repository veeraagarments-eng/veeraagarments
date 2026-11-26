import Seo from "../components/Seo.jsx";
import PageBanner from "../components/PageBanner.jsx";
import Container from "../components/Container.jsx";
import PhotoSlot from "../components/PhotoSlot.jsx";
import products from "../data/products.js";
import facilities from "../data/facilities.js";

const slots = [
  ...products.map((product) => product.name),
  ...facilities.map((facility) => facility.location),
];

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery | VEERAA GARMENTS"
        description="Gallery space for VEERAA GARMENTS product and manufacturing photographs. Images will be added when they are received."
      />
      <PageBanner
        title="Gallery"
        lede="Product and factory photographs will be placed in this gallery when they are sent."
      />
      <section className="bg-paper py-14">
        <Container className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {slots.map((label, index) => (
            <PhotoSlot
              key={label}
              label={label}
              tone={index % 2 === 0 ? "blue" : "orange"}
              className="aspect-[4/3] rounded-2xl"
            />
          ))}
        </Container>
      </section>
    </>
  );
}
