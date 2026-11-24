import { useEffect } from "react";
import siteConfig from "../data/siteConfig.js";

function setMeta(attribute, key, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    if (siteConfig.siteUrl) {
      setMeta("property", "og:url", siteConfig.siteUrl);
      setMeta("property", "og:image", `${siteConfig.siteUrl}/images/hero.jpg`);
    }
  }, [title, description]);

  return null;
}
