import Seo from "../components/Seo.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Manufacturing from "../components/Manufacturing.jsx";
import Products from "../components/Products.jsx";
import Facilities from "../components/Facilities.jsx";
import ManufacturingVideo from "../components/ManufacturingVideo.jsx";
import Sustainability from "../components/Sustainability.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Vision from "../components/Vision.jsx";
import Contact from "../components/Contact.jsx";
import siteConfig from "../data/siteConfig.js";

export default function Home() {
  return (
    <>
      <Seo title={siteConfig.seo.title} description={siteConfig.seo.description} />
      <Hero />
      <About />
      <Manufacturing />
      <Products />
      <Facilities />
      <ManufacturingVideo />
      <Sustainability />
      <WhyChooseUs />
      <Vision />
      <Contact />
    </>
  );
}
