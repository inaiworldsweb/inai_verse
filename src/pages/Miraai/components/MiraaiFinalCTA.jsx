import React from "react";
import { motion } from "framer-motion";
import ctaBg from "../../../Assetsa/e.png";

const MiraaiFinalCTA = () => {
  return (
    <section className="py-10 md:py-6  bg-black w-full px-6 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full min-h-[400px] md:h-[400px] h-auto py-16 md:py-0 flex items-center justify-center text-center px-6"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
          <img
            src={ctaBg}
            alt="Workspace"
            className="w-full h-full object-cover object-center opacity-60 scale-105 rounded-[2rem] md:rounded-[3rem]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 rounded-[2rem] md:rounded-[3rem]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="  text-[1.5625rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-white tracking-tight leading-[1.2]"
          >
            Ready To Grow Your Brand With Professional Content?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className=" mb-6  text-white/80 text-[0.75rem] md:text-[0.9rem] lg:text-[1.125rem] font-['Inter'] font-medium max-w-2xl mx-auto leading-normal"
          >
            Let Our AI-Powered Expert Team Handle Your Videos, Ads, And Branding{" "}
            <br className="hidden md:block" />
            So You Can Focus On Your Business.
          </motion.p>

          <div className="flex justify-center">
            <div className="group relative flex items-center gap-2 bg-white/[0.10] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 rounded-[7px] md:rounded-[10px] text-xl font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20">
              <button 
                className="relative px-4 py-2 flex items-center gap-2 bg-transparent text-white font-medium transition-all duration-300"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MiraaiFinalCTA;
