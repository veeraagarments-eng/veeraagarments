import images from "./assets.js";

const products = [
  {
    id: "cotton-tote",
    name: "Cotton Tote Bags",
    description:
      "Cotton totes for retail programmes, corporate use and everyday reusable carry.",
    image: images.products.cottonTote,
    alt: "Placeholder photograph of a cotton tote bag",
    position: "object-center",
  },
  {
    id: "canvas-bag",
    name: "Canvas Bags",
    description:
      "Canvas bags for shopping, gifting and longer-use brand programmes.",
    image: images.products.canvasBag,
    alt: "Placeholder photograph of a canvas bag",
    position: "object-[center_30%]",
  },
  {
    id: "shopping-bag",
    name: "Shopping Bags",
    description:
      "Reusable shopping bags produced as an alternative to single-use plastic bags.",
    image: images.products.shoppingBag,
    alt: "Placeholder photograph of a reusable shopping bag",
    position: "object-center",
  },
  {
    id: "promotional-bag",
    name: "Promotional Bags",
    description:
      "Fabric bags for promotions, events and branded buyer programmes.",
    image: images.products.promotionalBag,
    alt: "Placeholder photograph of printed promotional tote bags",
    position: "object-center",
  },
  {
    id: "custom-printed-bag",
    name: "Custom Printed Bags",
    description:
      "Fabric bags prepared for in-house customised printing.",
    image: images.products.customPrintedBag,
    alt: "Placeholder photograph of a patterned fabric tote bag",
    position: "object-center",
  },
  {
    id: "reusable-fabric-bag",
    name: "Reusable Fabric Bags",
    description:
      "Reusable fabric bags made to replace disposable carry bags.",
    image: images.products.reusableFabricBag,
    alt: "Placeholder photograph of a natural reusable fabric bag",
    position: "object-center",
  },
  {
    id: "corporate-gift-bag",
    name: "Corporate Gift Bags",
    description:
      "Fabric bags for corporate gifting and organised buyer requirements.",
    image: images.products.corporateGiftBag,
    alt: "Placeholder photograph of fabric gift bags",
    position: "object-[80%_center]",
  },
  {
    id: "custom-fabric-bag",
    name: "Special Customised Fabric Bags",
    description:
      "Customised fabric bags developed to a buyer’s brief, from fabric through to the finished bag.",
    image: images.products.customFabricBag,
    alt: "Placeholder photograph of a set of natural fabric bags",
    position: "object-center",
  },
];

export const productOptions = [
  "Cotton Tote Bags",
  "Canvas Bags",
  "Shopping Bags",
  "Promotional Bags",
  "Custom Printed Bags",
  "Reusable Fabric Bags",
  "Corporate Gift Bags",
  "Special Customised Fabric Bags",
  "Other",
];

export default products;
