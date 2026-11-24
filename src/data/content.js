import {
  Boxes,
  Building2,
  Calendar,
  ClipboardCheck,
  Factory,
  Globe,
  Layers,
  ListChecks,
  Package,
  PenLine,
  Printer,
  ShoppingBag,
} from "lucide-react";

export const facts = [
  { label: "Established", value: "2018" },
  { label: "Based in", value: "Erode, Tamil Nadu" },
  { label: "Capability", value: "Weaving to Printing" },
  { label: "Business", value: "Manufacturing, Wholesale and Export" },
];

export const timeline = [
  {
    label: "2018",
    title: "Established",
    text: "Founded with a vision to reduce the use of single-use plastic bags and promote reusable, eco-friendly fabric bags.",
  },
  {
    label: "The start",
    title: "Bag manufacturing",
    text: "Production began on a small scale. Fabrics were sourced from external suppliers, with the work concentrated on quality fabric bags.",
  },
  {
    label: "In-house",
    title: "Own weaving",
    text: "Weaving facilities were established so fabrics could be manufactured in-house, with better control over quality, production and consistency.",
  },
  {
    label: "Today",
    title: "Multiple facilities",
    text: "VEERAA Garments operates multiple manufacturing facilities, with a continued commitment to quality, sustainability and customer satisfaction.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Fabric Weaving",
    text: "Fabrics are woven in our own weaving facilities.",
    icon: Factory,
  },
  {
    number: "02",
    title: "Fabric Development",
    text: "Fabric is sourced and developed for the bags we manufacture.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Bag Manufacturing",
    text: "Fabric bags are cut, stitched and finished in our manufacturing units.",
    icon: ShoppingBag,
  },
  {
    number: "04",
    title: "In-house Printing",
    text: "Customised printing is carried out in our printing facilities.",
    icon: Printer,
  },
  {
    number: "05",
    title: "Quality Control",
    text: "Bags are checked for consistency before they move on.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Packaging",
    text: "Finished bags are packed for domestic and export supply.",
    icon: Package,
  },
];

export const reasons = [
  {
    title: "Established in 2018",
    text: "A fabric bag manufacturer working since 2018.",
    icon: Calendar,
  },
  {
    title: "Own Fabric Weaving Facilities",
    text: "In-house weaving for closer control of quality, production and consistency.",
    icon: Factory,
  },
  {
    title: "Multiple Manufacturing Units",
    text: "Facilities in Erode, Unjalur and near Musiri.",
    icon: Building2,
  },
  {
    title: "In-house Printing Facilities",
    text: "Printing is handled within our own facilities.",
    icon: Printer,
  },
  {
    title: "Complete Customisation",
    text: "Customised fabric bag solutions from fabric through to the finished bag.",
    icon: PenLine,
  },
  {
    title: "Consistent Quality Control",
    text: "Quality control is part of the manufacturing process.",
    icon: ListChecks,
  },
  {
    title: "Reliable Manufacturing Capacity",
    text: "Production organised for wholesale and export orders.",
    icon: Boxes,
  },
  {
    title: "Domestic & International Supply",
    text: "Supply for buyers in India, with international enquiries welcome.",
    icon: Globe,
  },
];
