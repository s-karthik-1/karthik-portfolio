import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const galleryImages = [
  { src: "/Gallery/1.jpeg", category: "badging-ceremony" },
  { src: "/Gallery/2.jpeg", category: "badging-ceremony" },
  { src: "/Gallery/3.jpeg", category: "badging-ceremony" },
  { src: "/Gallery/4.jpeg", category: "badging-ceremony" },
  { src: "/Gallery/5.jpeg", category: "organizing-events" },
  { src: "/Gallery/6.jpeg", category: "organizing-events" },
  { src: "/Gallery/7.jpeg", category: "organizing-events" },
  { src: "/Gallery/8.jpeg", category: "organizing-events" },
  { src: "/Gallery/9.jpeg", category: "event-participations" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "event-participations", label: "Event Participations" },
  { id: "badging-ceremony", label: "Badging Ceremony" },
  { id: "organizing-events", label: "Organizing Events" },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIdx, setActiveIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((image) => image.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!filteredImages.length) return;
    setActiveIdx((prev) => (prev >= filteredImages.length ? 0 : prev));
  }, [filteredImages]);

  useEffect(() => {
    if (filteredImages.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % filteredImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [filteredImages, isPaused]);

  const next = () => {
    if (!filteredImages.length) return;
    setActiveIdx((prev) => (prev + 1) % filteredImages.length);
  };

  const previous = () => {
    if (!filteredImages.length) return;
    setActiveIdx((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(166,94,255,0.15),_transparent_55%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Captured moments
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Gallery
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveIdx(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_25px_rgba(168,85,247,0.35)]"
                    : "glass text-muted-foreground border-white/10 hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div
            className="relative overflow-hidden rounded-[28px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="glass p-4 md:p-8 rounded-[28px] glow-border animate-fade-in animation-delay-200">
              <div className="relative overflow-hidden rounded-[22px] aspect-[16/10] bg-black/10">
                <div
                  className="flex h-full transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${activeIdx * 100}%)` }}
                >
                  {filteredImages.map((image, index) => (
                    <div
                      key={`${image.src}-${index}`}
                      className="relative w-full flex-shrink-0 h-full overflow-hidden"
                    >
                      <img
                        src={image.src}
                        alt={image.category}
                        className="absolute inset-0 h-full w-full object-contain p-2 md:p-3"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <button
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={previous}
                    aria-label="Previous image"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                    onClick={next}
                    aria-label="Next image"
                  >
                    <ChevronRight />
                  </button>
                </div>

                <div className="flex gap-2">
                  {filteredImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIdx(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIdx
                          ? "w-8 bg-primary"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Search className="w-4 h-4" />
                  View All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[28px] border border-white/10 bg-surface/80 glass-strong">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="px-4 py-5 md:px-8 md:py-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setActiveIdx(0);
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground border-primary"
                          : "glass text-muted-foreground border-white/10 hover:text-foreground"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>

                <div className="text-sm text-muted-foreground">
                  {filteredImages.length} photos
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {filteredImages.map((image, index) => (
                  <div
                    key={`${image.src}-${index}`}
                    className="group relative overflow-hidden rounded-xl border border-white/10"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.category}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;