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
      className="relative group rounded-2xl p-[2px] overflow-hidden isolate bg-[#0A0A0A]"
    >
      {/* --- THE SMOOTH SNAKE BORDER --- */}
      <div className="
    absolute inset-0 z-0
    opacity-0 group-hover:opacity-100
    transition-opacity duration-500
  ">
        {/* Yeh div ghoomega aur mask ki wajah se sirf border dikhega */}
        <div className="
      absolute inset-[-100%]
      bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,white_360deg)]
      group-hover:animate-[spin_3s_linear_infinite]
    "></div>
      </div>

      {/* --- INNER CONTENT (Masking the center) --- */}
      <div className="
    relative z-10
    bg-[#0A0A0A]
    rounded-[14px]
    h-full w-full
    p-6 md:p-8
    border border-white/5
  ">
        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
          <Icon className="text-white text-xl md:text-2xl" />
        </div>

        <h3 className="text-white text-xl mb-3 tracking-tight">
          {title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed">
          {description}
        </p>
      </div>


    </motion.div>
  );
};

const MobileTruthCard = ({ title, description, icon: Icon, isOpen, onClick }) => {
  return (
    <div className="md:mb-4  overflow-hidden rounded-xl border border-white/30 bg-gradient-to-b from-white/10 to-[#0A0A0A]">
      <button
        onClick={onClick}
        className="w-full p-5 text-left"
      >
        <div className="flex w-full items-start justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
            <Icon className="text-lg text-white" />
          </div>
          <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <span className="text-lg font-medium text-white block">{title}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="bg-[#0A0A0A] p-5 pt-0">
          <p className="text-sm leading-relaxed text-white/60">
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
    <section className="pt-12 md:pt-20 -mb-3 md:mb-0 md:pb-16 bg-black overflow-hidden relative">
      {/* Ambient Background Gradient */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-10 xl:gap-16">
          {/* Header Section - Centered on Mobile/Tablet, Left on Desktop */}
          <div className="w-full lg:w-2/5 xl:w-1/3 flex flex-col items-center lg:items-start justify-center text-center lg:text-left top-0 lg:sticky lg:top-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[25px] md:text-[40px] text-white mb-8 md:mb-8 tracking-tighter leading-snug"
            >
              The Simple Truth
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hidden md:block text-white/80 text-[15px] md:text-[20px] leading-relaxed max-w-2xl lg:max-w-none"
            >
              We handle everything from concept to final delivery. You just tell
              us what you need.
            </motion.p>
          </div>

          {/* Cards Grid */}
          <div className="w-full lg:w-3/5 xl:w-2/3">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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

            {/* Mobile Paragraph at Bottom */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="block md:hidden text-white/60 text-[15px] leading-relaxed mt-8 text-center"
            >
              We handle everything from concept to final delivery. You just tell
              us what you need.
            </motion.p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default MiraaiSimpleTruth;