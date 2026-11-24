import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import Sustainability from "../components/Sustainability.jsx";
import Vision from "../components/Vision.jsx";
import EnquiryBand from "../components/EnquiryBand.jsx";
import images from "../data/assets.js";

export default function SustainabilityPage() {
  return (
    <>
      <Seo
        title="Sustainability | VEERAA GARMENTS"
        description="VEERAA Garments manufactures reusable fabric bags and aims to create employment, support local communities and encourage skill development through its rural manufacturing units."
      />
      <PageHero
        eyebrow="Our purpose"
        title="Sustainability"
        lede="Reusable fabric bags, made with a commitment to communities and a greener future."
        image={images.sustainability.forest}
        imageAlt="Placeholder photograph of a forest"
      />
      <Sustainability />
      <Vision />
      <EnquiryBand />
    </>
  );
}
