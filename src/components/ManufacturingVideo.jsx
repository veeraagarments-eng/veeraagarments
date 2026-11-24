import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Container from "./Container.jsx";
import SectionHeading from "./SectionHeading.jsx";
import siteConfig from "../data/siteConfig.js";

export default function ManufacturingVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [notice, setNotice] = useState(false);
  const { video } = siteConfig;

  function onPlay() {
    if (!video.available) {
      setNotice(true);
      return;
    }
    setPlaying(true);
    window.requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  }

  return (
    <section id="film" className="bg-forest-deep py-16 text-ivory sm:py-20 lg:py-28">
      <Container>
        <SectionHeading
          light
          eyebrow="Manufacturing film"
          title="From Our Own Looms to Finished Bags."
          description="Explore our fabric production, bag manufacturing and customised printing capabilities."
        />
        <div className="relative mx-auto mt-10 max-w-5xl overflow-hidden bg-forest">
          <div className="relative aspect-video">
            {playing && video.available ? (
              <video
                ref={videoRef}
                className="h-full w-full bg-black object-cover"
                poster={video.poster}
                controls
                playsInline
                preload="metadata"
                src={video.src}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={video.poster}
                alt="Placeholder poster for the VEERAA Garments manufacturing film"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}
            {!playing ? (
              <div className="absolute inset-0 flex items-center justify-center bg-forest-deep/25">
                <button
                  type="button"
                  onClick={onPlay}
                  className="inline-flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-ivory text-forest shadow-lg transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-20"
                  aria-label={
                    video.available ? "Play manufacturing film" : "Manufacturing film is not added yet"
                  }
                >
                  <Play size={28} className="ml-1" aria-hidden="true" />
                </button>
              </div>
            ) : null}
            {notice ? (
              <p className="absolute inset-x-4 bottom-4 bg-ivory/95 px-4 py-3 text-sm leading-relaxed text-charcoal sm:inset-x-8">
                The manufacturing film will appear here. Add manufacturing.mp4 and
                enable it in the site configuration. No enquiry or playback has
                been simulated.
              </p>
            ) : null}
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-5xl text-xs leading-relaxed text-ivory/60">
          {siteConfig.placeholderNote}
        </p>
      </Container>
    </section>
  );
}
