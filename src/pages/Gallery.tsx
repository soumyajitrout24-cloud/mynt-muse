import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "@/components/FadeInSection";

const categories = [
  "All",
  "High Fashion Models",
  "Event Hosts",
  "Brand Ambassadors",
  "Lifestyle Models",
];

// AUTO IMPORT ALL IMAGES FROM ASSETS (FAST)
const images = Object.values(
  import.meta.glob("@/assets/*.{jpg,jpeg,png}", { eager: true })
).map((img) => (img as { default: string }).default);

// RANDOM NAMES
const names = [
  "Aisha K.","Riya S.","Meera V.","Ananya D.","Kavya R.","Zara M.","Nisha P.","Ira T.",
  "Sana K.","Pooja V.","Simran R.","Alina S.","Diya M.","Ritika P.","Tanya R.","Maya K.",
];

// RANDOM DESCRIPTIONS
const descriptions = [
  "Editorial Model","Luxury Events","Fashion Shoots","Premium Hosting","Brand Campaigns",
  "Lifestyle Sessions","Elite Appearances",
];

// RANDOM CATEGORY LIST
const categoryList = [
  "High Fashion Models","Event Hosts","Brand Ambassadors","Lifestyle Models",
];

// GENERATE GALLERY ONCE (FAST)
const generateGallery = () => {
  const items = images.map((img, index) => ({
    id: index + 1,
    category: categoryList[Math.floor(Math.random() * categoryList.length)],
    name: names[Math.floor(Math.random() * names.length)],
    desc: descriptions[Math.floor(Math.random() * descriptions.length)],
    image: img,
  }));

  return items.sort(() => Math.random() - 0.5);
};

const Gallery = () => {
  const [active, setActive] = useState("All");
  const galleryItems = useMemo(() => generateGallery(), []);

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === active);

  return (
    <div className="bg-pink-page min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <FadeInSection>
          <div className="text-center mb-5 md:mb-6">
            <p className="font-elegant text-xs md:text-sm tracking-[0.3em] uppercase text-emerald-dark/50 mb-3">
              Our Portfolio
            </p>
            <h1 className="font-display text-3xl md:text-5xl tracking-wider text-emerald-dark">
              Gallery & Profiles
            </h1>
            <div className="h-[1px] w-20 mx-auto mt-4 bg-gradient-to-r from-transparent via-emerald-dark/40 to-transparent" />
          </div>
        </FadeInSection>

        {/* Description */}
        <FadeInSection delay={0.1}>
          <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            <p className="font-elegant text-sm md:text-base text-emerald-dark/50 leading-relaxed mb-3">
              Explore our carefully curated portfolio of models — each verified and presented with true, unedited images and professional details.
            </p>
            <p className="font-elegant text-xs md:text-sm text-emerald-dark/40 italic">
              Full gallery access is available upon advance reservation and private consultation.
            </p>
          </div>
        </FadeInSection>

        {/* Filter Buttons */}
        <FadeInSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-body text-[10px] md:text-xs tracking-wider uppercase px-4 md:px-5 py-2 md:py-2.5 rounded-full border transition-all duration-300 ${
                  active === cat
                    ? "bg-gold text-emerald-dark border-gold"
                    : "border-gold/50 text-emerald-dark/60 hover:border-gold hover:text-emerald-dark"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeInSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-gold/20"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={`${item.name} - ${item.desc}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Top half blur overlay */}
                <div className="absolute top-0 left-0 w-full h-1/2 backdrop-blur-md bg-white/20 pointer-events-none"></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-dark/80 flex items-end p-3 md:p-4">
                  <div>
                    <h3 className="font-display text-sm md:text-lg text-pink-page">
                      {item.name}
                    </h3>
                    <p className="font-elegant text-[10px] md:text-xs tracking-wider text-pink-page/70">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Gallery;