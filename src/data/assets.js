/**
 * Central image and video paths.
 *
 * Replace the files in public/images and public/videos, keeping these
 * filenames, or update the paths here. Components read only this file.
 *
 * The photographs currently in the project are temporary layout references.
 * They are not VEERAA Garments product, facility, or team photography.
 *
 * To publish the manufacturing film:
 * 1. Add public/videos/manufacturing.mp4
 * 2. Set video.available to true in src/data/siteConfig.js
 */

const images = {
  hero: "/images/hero.jpg",
  about: "/images/about.jpg",
  products: {
    cottonTote: "/images/products/cotton-tote.jpg",
    canvasBag: "/images/products/canvas-bag.jpg",
    shoppingBag: "/images/products/shopping-bag.jpg",
    promotionalBag: "/images/products/promotional-bag.jpg",
    customPrintedBag: "/images/products/custom-printed-bag.jpg",
    reusableFabricBag: "/images/products/reusable-fabric-bag.jpg",
    corporateGiftBag: "/images/products/corporate-gift-bag.jpg",
    customFabricBag: "/images/products/custom-fabric-bag.jpg",
  },
  factory: {
    fabricWeaving: "/images/factory/fabric-weaving.jpg",
    fabricDevelopment: "/images/factory/fabric-development.jpg",
    bagStitching: "/images/factory/bag-stitching.jpg",
    printingProcess: "/images/factory/printing-process.jpg",
    qualityControl: "/images/factory/quality-control.jpg",
    packaging: "/images/factory/packaging.jpg",
  },
  facilities: {
    erode: "/images/facilities/erode-facility.jpg",
    unjalur: "/images/facilities/unjalur-facility.jpg",
    musiri: "/images/facilities/musiri-facility.jpg",
  },
  sustainability: {
    forest: "/images/sustainability/forest.jpg",
    craft: "/images/sustainability/craft.jpg",
    workshop: "/images/sustainability/workshop.jpg",
  },
};

export default images;
