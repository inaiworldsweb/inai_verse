import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiVideo, FiZap, FiDollarSign, FiClock } from "react-icons/fi";

const TruthCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group rounded-[20px] p-[2.3px] overflow-hidden isolate bg-[#0B0B0B] h-full"
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,white_360deg)] group-hover:animate-[spin_4s_linear_infinite]" />
      </div>

      <div className="relative z-10 bg-[#0B0B0B] rounded-[18px] p-8 border border-white/5 h-full flex flex-col">
        <div className="w-11 h-11 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-8">
          <Icon className="text-white text-xl" />
        </div>

        <h3 className="text-white text-[24px] font-bold mb-4 tracking-[1px] [font-stretch:700%]">
          {title}
        </h3>

        <p className="text-[#ccc] text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const MobileTruthCard = ({ title, description, icon: Icon, isOpen, onClick }) => {
  return (
    <div
      className="mb-5 overflow-hidden rounded-[24px] border border-white/15 relative"
      style={{
        background: `linear-gradient(180deg, rgba(38,38,38,0.8) 0%, rgba(10,10,10,0.95) 100%)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <button
        onClick={onClick}
        className="w-full p-6 text-left relative z-10 focus:outline-none"
      >
        <div className="flex w-full items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/20 shadow-2xl">
            <Icon className="text-xl text-white" />
          </div>

          <div
            className={`mt-3 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
              }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <span className="text-[22px] font-bold text-white mt-8 block tracking-[1px] [font-stretch:700%]">
          {title}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden relative z-10"
          >
            <div className="p-6 pt-0">
              <p className="text-[15px] leading-relaxed text-[#ccc] font-medium">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MiraaiSimpleTruth = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const truths = [
    {
      title: "What We Do",
      description:
        "Create High-Quality Videos And Images That Elevate Your Brand Across Ads, Social Media, Catalogs, And Digital Platforms.",
      icon: FiVideo,
    },
    {
      title: "How We Do It",
      description:
        "Use Advanced AI Technology Combined With Creative Intelligence To Produce Professional Visuals—Without Studios, Shoots, Or Long Production Cycles.",
      icon: FiZap,
    },
    {
      title: "What You Get",
      description:
        "Premium, Agency-Level Content At Nearly 10% Of The Traditional Cost, Making High-End Creativity Accessible To Every Brand.",
      icon: FiDollarSign,
    },
    {
      title: "When You Get It",
      description:
        "Fast Delivery In 2-4 Days, Instead Of Waiting 2-4 Months With Traditional Production.",
      icon: FiClock,
    },
  ];

  return (
    <section className="pt-10 -mb-10 md:-mb-0 md:py-20 bg-black overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* Header Section */}
          <div className="w-full lg:w-[400px] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[25px] md:text-[40px] font-bold text-white mb-6 tracking-[1px] [font-stretch:700%] leading-tight"
            >
              The Simple Truth
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#ccc] text-[15px] md:text-[20px] font-normal leading-[1.4] max-w-[320px] lg:max-w-none -mb-10 md:mb-0"
            >
              We handle everything from concept to final delivery. You just tell us what you need.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="flex-1 w-full">

            {/* Desktop (Unchanged) */}
            <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
              {truths.map((truth, index) => (
                <TruthCard key={index} index={index} {...truth} />
              ))}
            </div>

            {/* Mobile with High Spread Center Glow */}
            <div className="md:hidden relative py-10">

              {/* HIGH SPREAD BACKGROUND GLOW */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10"
                style={{
                  background: `
                    radial-gradient(circle at center,
                      rgba(255,255,255,0.15) 0%,
                      rgba(255,255,255,0.08) 30%,
                      rgba(255,255,255,0.03) 55%,
                      transparent 80%
                    )
                  `,
                  filter: "blur(60px)",
                }}
              />

              <div className="flex flex-col gap-4 relative z-10">
                {truths.map((truth, index) => (
                  <MobileTruthCard
                    key={index}
                    {...truth}
                    isOpen={openIndex === index}
                    onClick={() =>
                      setOpenIndex(prev =>
                        prev === index ? null : index
                      )
                    }
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MiraaiSimpleTruth;