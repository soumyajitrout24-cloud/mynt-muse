import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/herooo.png";

const HeroSection = () => {
const titleEmeraldWithGold = {
    color: "#064e3b",
    textShadow: `
      0 0 5px #0fb072,
      0 0 10px #1ace86,
      0 0 20px #1ace86,,
      0 0 30px #1ace86,
    `
  };
  // "Mynt Girlfriend" title with stronger gold glow
  const titleGold = {
    color: "#0f9c56",
    textShadow: `
      0 2px 4px rgba(255, 215, 0, 0.8),
      0 4px 8px rgba(255, 215, 0, 0.5)
    `
  };

  // All other texts premium gold (subtle shadow)
  const premiumGold = {
    color: "#FFD700",
    textShadow: "0 1px 2px rgba(0,0,0,0.4)"
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mynt Girlfriend - Elite Indian Model & Companion Service"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto mt-24 md:mt-32">

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-elegant text-sm md:text-base tracking-[0.4em] uppercase mb-4"
          style={premiumGold}
        >
          Elite Indian Model & Companion Service
        </motion.p>

       
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] mb-6"
          style={titleEmeraldWithGold}
        >
          Mynt
          <br />
          <span className="font-elegant italic text-4xl md:text-5xl lg:text-6xl tracking-[0.2em]">
            Girlfriend
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-32 h-[2px] mx-auto mb-6"
          style={{ background: "#FFD700" }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-body text-xs md:text-sm tracking-[0.2em] uppercase mb-4"
          style={premiumGold}
        >
          India's Premier Model Service for Discerning Clients
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-elegant text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          style={premiumGold}
        >
          We bridge extraordinary talent with elevated experiences, designed for high-quality consumption at fair value. Combining professionalism, care, discretion, and premium service standards.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >

          <Link
            to="/contact"
            className="bg-emerald-600 text-white font-body text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:bg-emerald-700 transition duration-300"
          >
            Book Consultation
          </Link>

          <Link
            to="/services"
            className="border border-emerald-600 text-emerald-600 font-body text-xs tracking-[0.2em] uppercase px-8 py-3.5 rounded-full hover:border-emerald-500 hover:text-emerald-500 transition duration-300"
          >
            View Services
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;