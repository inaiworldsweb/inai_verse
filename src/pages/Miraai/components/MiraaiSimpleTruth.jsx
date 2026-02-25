import React, { useState } from "react";
import { motion } from "framer-motion";
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
      {/* Spinning snake border */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,white_360deg)] group-hover:animate-[spin_4s_linear_infinite]" />
      </div>

      {/* Inner content */}
      <div className="relative z-10 bg-[#0B0B0B] rounded-[18px] p-8 border border-white/5 h-full flex flex-col">
        <div className="w-11 h-11 rounded-lg bg-black border border-white/10 flex items-center justify-center mb-8">
          <Icon className="text-white text-xl" />
        </div>

        <h3 className="text-white text-[24px] font-bold mb-4 tracking-tight">
          {title}
        </h3>

        <p className="text-white/40 text-[15px] leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const MobileTruthCard = ({ title, description, icon: Icon, isOpen, onClick }) => {
  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-[#0B0B0B]">
      <button
        onClick={onClick}
        className="w-full p-5 text-left"
      >
        <div className="flex w-full items-start justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black border border-white/10">
            <Icon className="text-lg text-white" />
          </div>
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <span className="text-lg font-bold text-white block">{title}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0">
          <p className="text-sm leading-relaxed text-white/40">
            {description}
          </p>
        </div>
      </motion.div>
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
    <section className="pt-10 -mb-5 md:py-32 bg-black overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Header Section */}
          <div className="w-full lg:w-[400px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[25px] md:text-[40px] font-bold text-white mb-6 md:mb-6 tracking-tight leading-tight"
            >
              The Simple Truth
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 text-[15px] md:text-[20px] font-medium leading-[1.4] max-w-[320px] lg:max-w-none"
            >
              We handle everything from concept to final delivery. You just tell us what you need.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="flex-1">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 gap-6 lg:gap-8">
              {truths.map((truth, index) => (
                <TruthCard key={index} index={index} {...truth} />
              ))}
            </div>

            {/* Mobile Accordions */}
            <div className="md:hidden flex flex-col gap-4">
              {truths.map((truth, index) => (
                <MobileTruthCard
                  key={index}
                  {...truth}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(prev => prev === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiraaiSimpleTruth;