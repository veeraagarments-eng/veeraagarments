const siteConfig = {
  name: "VEERAA GARMENTS",
  shortName: "VEERAA",
  established: "2018",
  tagline: "Manufacturing Sustainable Bags. Empowering Communities.",
  supportingTagline: "From Our Own Looms to Global Markets.",
  location: "Erode, Tamil Nadu, India",
  business: "Manufacturing | Wholesale | Export",
  phoneDisplay: "+91 99522 94194",
  phoneTel: "+919952294194",
  email: "Veeraagarments@gmail.com",
  logo: "/logo.jpg",
  siteUrl: "",
  whatsapp: {
    phone: "919952294194",
    display: "+91 99522 94194",
    message:
      "Hello VEERAA GARMENTS, I am interested in your fabric bags. Please share your product details and quotation.",
  },
  enquiry: {
    endpoint: "",
  },
  seo: {
    title: "VEERAA GARMENTS | Sustainable Fabric Bag Manufacturer in India",
    description:
      "VEERAA GARMENTS, established in 2018, manufactures sustainable fabric bags with own weaving facilities, in-house printing and customised bag manufacturing solutions in Erode, Tamil Nadu, India.",
  },
  placeholderNote: "Product and factory photographs will be added when the client sends them.",
};

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact Us", to: "/contact" },
];

export function whatsappUrl(message = siteConfig.whatsapp.message) {
  return `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}

export default siteConfig;
