import React from "react";
import { motion } from "framer-motion";
import {
  SiOpenai,
  SiHuggingface,
  SiGoogle
} from "react-icons/si";

const MiraaiTrust = () => {
  const brands = [
    {
      name: "DALL·E 2",
      icon: <SiOpenai className="w-8 h-8 text-white/70" />
    },
    {
      name: "Hugging Face",
      icon: <SiHuggingface className="w-8 h-8 text-white/70" />
    },
    {
      name: "Bard",
      icon: <SiGoogle className="w-8 h-8 text-white/70" />
    },
    {
      name: "OpenAI",
      icon: <SiOpenai className="w-8 h-8 text-white/70" />
    }
  ];

  return (
    <section className="py-10 md:py-16  px-6 sm:px-6  bg-black relative">
      <div className="max-w-[1400px] mx-auto   text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-black tracking-[1px] [font-stretch:700%] text-white">
            Trusted By Global Giants
          </h2>
          <p className="text-[#ccc] text-sm md:text-base font-medium uppercase tracking-wider">
            Creating Content For 500+ Brands
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden mt-8 px-4">

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: "-50%" }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity
              }}
              className="flex gap-4 md:gap-8 min-w-full py-8"
            >
              {[...brands, ...brands, ...brands, ...brands].map(
                (brand, index) => (
                  <motion.div
                    key={`${brand.name}-${index}`}
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      scale: 1.02
                    }}
                    className="flex items-center gap-6 px-8 py-5 rounded-[1.5rem] bg-[#0A0A0A] border border-white/5 transition-all duration-300 min-w-[200px] md:min-w-[240px] group cursor-default flex-shrink-0"
                  >
                    <div className="flex-shrink-0">
                      {brand.icon}
                    </div>
                    <span className="text-base md:text-lg font-black text-white/60 group-hover:text-white transition-colors tracking-tight">
                      {brand.name}
                    </span>
                  </motion.div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Top subtle line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default MiraaiTrust;