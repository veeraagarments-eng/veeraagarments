import Seo from "../components/Seo.jsx";
import PageHero from "../components/PageHero.jsx";
import Contact from "../components/Contact.jsx";
import images from "../data/assets.js";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | VEERAA GARMENTS"
        description="Contact VEERAA GARMENTS in Erode, Tamil Nadu for fabric bag manufacturing, wholesale and international business enquiries."
      />
      <PageHero
        eyebrow="Enquiries"
        title="Contact"
        lede="Manufacturing, wholesale and export conversations start here."
        image={images.hero}
        imageAlt="Placeholder photograph of a textile workshop"
      />
      <Contact />
    </>
  );
}
