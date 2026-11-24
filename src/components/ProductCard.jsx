import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article id={product.id} className="group flex scroll-mt-28 flex-col">
      <div className="overflow-hidden bg-beige">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 50vw"
          className={`aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.04] ${product.position}`}
        />
      </div>
      <h3 className="mt-4 font-display text-xl leading-tight text-forest sm:text-2xl">
        {product.name}
      </h3>
      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-charcoal/75 sm:text-sm">
        {product.description}
      </p>
      <Link
        to={`/?product=${encodeURIComponent(product.name)}#enquiry`}
        className="mt-4 inline-flex min-h-11 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-forest sm:text-xs"
      >
        Enquire Now
        <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}
