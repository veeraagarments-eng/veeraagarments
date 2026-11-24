import Container from "./Container.jsx";
import Button from "./Button.jsx";
import { whatsappUrl } from "../data/siteConfig.js";

export default function EnquiryBand() {
  return (
    <section className="bg-forest py-14 text-ivory sm:py-16">
      <Container className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl">Planning a bulk or export order?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory/80 sm:text-base">
            Tell us the bags you need. International business enquiries are welcome.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button to="/#enquiry" variant="ivory">
            Get a Quote
          </Button>
          <Button href={whatsappUrl()} variant="outline-light">
            WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
