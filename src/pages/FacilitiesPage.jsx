import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import Facilities from "../components/Facilities.jsx";
import EnquiryBand from "../components/EnquiryBand.jsx";
import images from "../data/assets.js";

export default function FacilitiesPage() {
  return (
    <>
      <Seo
        title="Facilities | VEERAA GARMENTS"
        description="VEERAA Garments operates a main facility in Erode, Tamil Nadu, with manufacturing units in Unjalur and near Musiri."
      />
      <PageHero
        eyebrow="Locations"
        title="Facilities"
        lede="A main facility in Erode, with manufacturing units in Unjalur and near Musiri."
        image={images.facilities.erode}
        imageAlt="Placeholder photograph for VEERAA Garments facilities"
      />
      <Facilities />
      <EnquiryBand />
    </>
  );
}
