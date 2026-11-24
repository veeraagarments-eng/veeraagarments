import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import Manufacturing from "../components/Manufacturing.jsx";
import ManufacturingVideo from "../components/ManufacturingVideo.jsx";
import EnquiryBand from "../components/EnquiryBand.jsx";
import images from "../data/assets.js";

export default function ManufacturingPage() {
  return (
    <>
      <Seo
        title="Manufacturing | VEERAA GARMENTS"
        description="VEERAA Garments manages fabric weaving, fabric development, bag manufacturing, in-house printing, quality control and packaging under one roof in Tamil Nadu, India."
      />
      <PageHero
        eyebrow="Capabilities"
        title="Manufacturing"
        lede="From our own fabric weaving to bag manufacturing and in-house printing."
        image={images.factory.fabricWeaving}
        imageAlt="Placeholder photograph of fabric weaving"
      />
      <Manufacturing />
      <ManufacturingVideo />
      <EnquiryBand />
    </>
  );
}
