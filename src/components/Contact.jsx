import { Mail, MapPin, Phone } from "lucide-react";
import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import EnquiryForm from "./EnquiryForm.jsx";
import Button from "./Button.jsx";
import siteConfig, { whatsappUrl } from "../data/siteConfig.js";

export default function Contact() {
  return (
    <section id="enquiry" className="scroll-mt-24 bg-ivory py-16 sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Create Something Sustainable Together."
          description="Share your bulk, customised or international requirement. Manufacturing, wholesale and export enquiries are welcome."
        />
        <div className="mt-10 grid overflow-hidden lg:grid-cols-12">
          <div className="bg-forest px-6 py-8 text-ivory sm:px-8 sm:py-10 lg:col-span-5 lg:px-10 lg:py-12">
            <p className="font-display text-3xl">{siteConfig.name}</p>
            <p className="mt-3 text-beige">{siteConfig.tagline}</p>
            <p className="mt-6 text-sm leading-relaxed text-ivory/80">{siteConfig.business}</p>
            <p className="mt-2 text-sm leading-relaxed text-ivory/80">
              International Business Enquiries Welcome.
            </p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-beige" aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-beige" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-beige">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-beige" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-beige">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <Button href={whatsappUrl()} variant="ivory" className="mt-8 w-full sm:w-auto">
              WhatsApp {siteConfig.whatsapp.display}
            </Button>
          </div>
          <div className="bg-beige px-6 py-8 sm:px-8 sm:py-10 lg:col-span-7 lg:px-10 lg:py-12">
            <h3 className="font-display text-3xl text-forest">Enquiry form</h3>
            <p className="mt-3 mb-6 text-sm leading-relaxed text-charcoal/75">
              Fields marked * are required. The form will only confirm delivery after it is connected to an enquiry service.
            </p>
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
