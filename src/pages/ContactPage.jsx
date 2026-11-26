import { Mail, MapPin, Phone } from "lucide-react";
import Seo from "../components/Seo.jsx";
import PageBanner from "../components/PageBanner.jsx";
import Container from "../components/Container.jsx";
import EnquiryForm from "../components/EnquiryForm.jsx";
import siteConfig, { whatsappUrl } from "../data/siteConfig.js";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | VEERAA GARMENTS"
        description="Contact VEERAA GARMENTS in Erode, Tamil Nadu for fabric bag manufacturing, wholesale and international business enquiries."
      />
      <PageBanner
        title="Contact Us"
        lede="Manufacturing, wholesale and export enquiries are welcome."
      />
      <section className="bg-paper py-14">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="rounded-2xl bg-blue p-8 text-white lg:col-span-5">
            <h2 className="text-2xl font-bold">{siteConfig.name}</h2>
            <p className="mt-2 text-white/80">{siteConfig.tagline}</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-orange">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-orange" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-orange">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center rounded-lg bg-orange px-5 font-semibold text-white hover:bg-orange-deep"
            >
              WhatsApp {siteConfig.whatsapp.display}
            </a>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 lg:col-span-7">
            <h2 className="text-2xl font-bold text-blue">Enquiry form</h2>
            <p className="mt-2 mb-6 text-sm text-ink/70">
              Fields marked * are required. Until an enquiry inbox is connected, you can send the same details by email or WhatsApp.
            </p>
            <EnquiryForm />
          </div>
        </Container>
      </section>
    </>
  );
}
