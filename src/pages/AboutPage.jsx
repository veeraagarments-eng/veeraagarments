import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import About from "../components/About.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import EnquiryBand from "../components/EnquiryBand.jsx";
import images from "../data/assets.js";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | VEERAA GARMENTS"
        description="VEERAA Garments was established in 2018 in Erode, Tamil Nadu, to manufacture reusable fabric bags, with its own weaving facilities and multiple manufacturing units."
      />
      <PageHero
        eyebrow="Established 2018"
        title="About Us"
        lede="A fabric bag manufacturer in Erode, Tamil Nadu, working from its own looms toward global markets."
        image={images.about}
        imageAlt="Placeholder photograph for the about page"
      />
      <About />
      <WhyChooseUs />
      <EnquiryBand />
    </>
  );
}
