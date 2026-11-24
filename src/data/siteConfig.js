import images from "./assets.js";

const siteConfig = {
  name: "VEERAA GARMENTS",
  shortName: "VEERAA",
  established: "2018",
  tagline: "Manufacturing Sustainable Bags. Empowering Communities.",
  supportingTagline: "From Our Own Looms to Global Markets.",
  location: "Erode, Tamil Nadu, India",
  business: "Manufacturing | Wholesale | Export",
  phoneDisplay: "9952294194",
  phoneTel: "+919952294194",
  email: "Veeraagarments@gmail.com",
  // Set the live domain, including https, when the site is published.
  // Open Graph image URLs are prefixed with this value when it is present.
  siteUrl: "",
  whatsapp: {
    phone: "919952294194",
    display: "+919952294194",
    message:
      "Hello VEERAA GARMENTS, I am interested in your fabric bags. Please share your product details and quotation.",
  },
  enquiry: {
    // Paste a form endpoint here when email delivery is connected.
    // While this is empty, the form validates and does not claim the enquiry was sent.
    endpoint: "",
  },
  video: {
    src: "/videos/manufacturing.mp4",
    available: false,
    poster: images.factory.fabricWeaving,
  },
  seo: {
    title: "VEERAA GARMENTS | Sustainable Fabric Bag Manufacturer in India",
    description:
      "VEERAA GARMENTS, established in 2018, manufactures sustainable fabric bags with own weaving facilities, in-house printing and customised bag manufacturing solutions in Erode, Tamil Nadu, India.",
  },
  placeholderNote:
    "Photographs are temporary layout references and will be replaced with VEERAA Garments images.",
};

// Single-page section links. Header active state follows the section in view.
export const navigation = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Manufacturing", id: "manufacturing" },
  { label: "Products", id: "products" },
  { label: "Facilities", id: "facilities" },
  { label: "Sustainability", id: "sustainability" },
  { label: "Contact", id: "enquiry" },
];

export const sectionIds = navigation.map((item) => item.id);

export function sectionPath(id) {
  return `/#${id}`;
}

export function whatsappUrl(message = siteConfig.whatsapp.message) {
  return `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}

export default siteConfig;
