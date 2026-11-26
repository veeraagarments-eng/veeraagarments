import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import siteConfig from "../data/siteConfig.js";

const slides = [
  {
    title: "Quality Fabric Bags",
    text: "Reusable cotton, canvas and custom printed bags made for retail, corporate and export orders.",
    tone: "bg-blue",
  },
  {
    title: "From Our Own Looms",
    text: "Weaving, bag making and printing stay inside our facilities, so quality stays consistent.",
    tone: "bg-blue-deep",
  },
  {
    title: "Custom Designs",
    text: "Sizes, fabrics and prints can be prepared to match a brand, event or wholesale programme.",
    tone: "bg-orange",
  },
];

export default function HeroSlider() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [reduce]);

  const slide = slides[index];

  return (
    <section className="relative min-h-[68vh] overflow-hidden text-white sm:min-h-[78vh]" aria-roledescription="carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.title}
          className={`absolute inset-0 ${slide.tone}`}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.45 }}
        />
      </AnimatePresence>
      <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:min-h-[78vh]">
        <img src={siteConfig.logo} alt="" className="mb-6 h-24 w-24 rounded-full object-cover shadow-lg sm:h-28 sm:w-28" />
        <p className="text-sm font-semibold tracking-[0.22em] uppercase">Eco-friendly fabric bags</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">{slide.title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">{slide.text}</p>
        <Link
          to="/contact"
          className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-white px-8 text-sm font-semibold tracking-[0.16em] text-blue uppercase shadow-sm hover:bg-orange hover:text-white"
        >
          Enquiry Now
        </Link>
      </div>
      <div className="absolute bottom-6 left-0 z-10 flex w-full justify-center gap-2">
        {slides.map((item, itemIndex) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show slide ${itemIndex + 1}`}
            aria-current={itemIndex === index ? "true" : undefined}
            onClick={() => setIndex(itemIndex)}
            className={`h-2.5 cursor-pointer rounded-full transition-all ${
              itemIndex === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
