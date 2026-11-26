import Seo from "../components/Seo.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import HomeAbout from "../components/HomeAbout.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import FeatureRow from "../components/FeatureRow.jsx";
import ClientStrip from "../components/ClientStrip.jsx";
import CtaBand from "../components/CtaBand.jsx";
import siteConfig from "../data/siteConfig.js";

export default function Home() {
  return (
    <>
      <Seo title={siteConfig.seo.title} description={siteConfig.seo.description} />
      <HeroSlider />
      <HomeAbout />
      <ProductGrid limit={6} />
      <FeatureRow />
      <ClientStrip />
      <CtaBand />
    </>
  );
}
