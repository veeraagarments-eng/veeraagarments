import { Leaf, BadgeCheck, PenLine } from "lucide-react";
import Container from "./Container.jsx";

const features = [
  {
    title: "100% Reusable",
    text: "Fabric bags made to replace single-use plastic carry bags for retail and everyday use.",
    icon: Leaf,
  },
  {
    title: "Premium Quality",
    text: "Own weaving, in-house stitching and quality checks before bags are packed for supply.",
    icon: BadgeCheck,
  },
  {
    title: "Custom Designs",
    text: "Custom sizes and in-house printing for brands, events, corporate gifts and wholesale orders.",
    icon: PenLine,
  },
];

export default function FeatureRow() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-2xl bg-paper px-6 py-8 text-center">
            <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange text-white">
              <feature.icon size={28} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-bold text-blue">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">{feature.text}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}
