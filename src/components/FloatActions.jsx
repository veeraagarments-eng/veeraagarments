import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import siteConfig, { whatsappUrl } from "../data/siteConfig.js";

export default function FloatActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex flex-col items-center gap-3">
      <a
        href={`tel:${siteConfig.phoneTel}`}
        aria-label={`Call ${siteConfig.phoneDisplay}`}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue text-white shadow-lg hover:bg-blue-deep"
      >
        <Phone size={20} />
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg hover:brightness-95"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="currentColor">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 16.7L1 23l6.5-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.9.6.6-3.8-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 4 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
        </svg>
      </a>
      {visible ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-orange text-white shadow-lg hover:bg-orange-deep"
        >
          <ArrowUp size={18} />
        </button>
      ) : null}
    </div>
  );
}
