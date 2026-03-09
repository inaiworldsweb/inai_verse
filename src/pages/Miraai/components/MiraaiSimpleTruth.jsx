import React from "react";
import { motion } from "framer-motion";
import { FiVideo, FiZap, FiDollarSign, FiClock } from "react-icons/fi";

const TruthCard = ({ title, description, icon: Icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group rounded-[20px] p-[1.5px] overflow-hidden isolate bg-[#0B0B0B]"
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,white_360deg)] group-hover:animate-[spin_4s_linear_infinite]" />
      </div>

      <div className="relative z-10 bg-[#0B0B0B] rounded-[18px] p-5 border border-white/5 flex flex-col h-full">
        <div className="w-11 h-11 rounded-lg bg-black border border-white/10 flex items-center justify-center">
          <Icon className="text-white text-2xl" />
        </div>

        <h3 className="  text-white text-[1rem] md:text-[1.1rem] font-bold tracking-[1px] [font-stretch:700%]">
          {title}
        </h3>

        <p className=" text-[#ccc] text-[0.75rem] md:text-[0.95rem] leading-snug">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const MobileTruthCard = ({ title, description, icon: Icon }) => {
  return (
    <div
      className="overflow-hidden rounded-[20px] border border-white/15 relative p-5"
      style={{
        background: `linear-gradient(180deg, rgba(38,38,38,0.8) 0%, rgba(10,10,10,0.95) 100%)`,
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-black border border-white/20 shadow-2xl">
          <Icon className="text-xl text-white" />
        </div>
        <span className="text-[0.95rem] font-bold text-white tracking-[0.5px] [font-stretch:700%]">
          {title}
        </span>
      </div>
      
      <p className="text-[0.8rem] leading-relaxed text-[#ccc] font-medium border-t border-white/5 pt-3">
        {description}
      </p>
    </div>
  );
};

const MiraaiSimpleTruth = () => {
  const truths = [
    {
      title: "What We Do",
      description: "Create High-Quality Videos And Images That Elevate Your Brand Across Ads, Social Media, Catalogs, And Digital Platforms.",
      icon: FiVideo,
    },
    {
      title: "How We Do It",
      description: "Use Advanced AI Technology Combined With Creative Intelligence To Produce Professional Visuals—Without Studios, Shoots, Or Long Production Cycles.",
      icon: FiZap,
    },
    {
      title: "What You Get",
      description: "Premium, Agency-Level Content At Nearly 10% Of The Traditional Cost, Making High-End Creativity Accessible To Every Brand.",
      icon: FiDollarSign,
    },
    {
      title: "When You Get It",
      description: "Fast Delivery In 2-4 Days, Instead Of Waiting 2-4 Months With Traditional Production.",
      icon: FiClock,
    },
  ];

  return (
    <section className="  px-6 sm:px-6  bg-black overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className=" md:mb-6 text-[1.5625rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-white tracking-[1px] [font-stretch:700%] leading-tight">
            The Simple Truth
          </h2>
          <p className=" mb-12 text-[#ccc] text-[0.875rem] md:text-[1rem] lg:text-[1.3125rem] font-normal leading-relaxed mx-auto">
            We handle everything from concept to final delivery. You just tell us what you need.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="w-full">
          {/* Desktop (2x2 grid) */}
          <div className="hidden md:grid grid-cols-2 gap-5">
            {truths.map((truth, index) => (
              <TruthCard key={index} index={index} {...truth} />
            ))}
          </div>

          {/* Mobile (Static Full View) */}
          <div className="md:hidden relative">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] -z-10"
              style={{
                background: `radial-gradient(circle at center, rgba(255,255,255,0.12) 0%, transparent 70%)`,
                filter: "blur(50px)",
              }}
            />

            <div className="flex flex-col gap-3 relative z-10">
              {truths.map((truth, index) => (
                <MobileTruthCard
                  key={index}
                  {...truth}
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