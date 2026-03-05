import React from "react";
import { motion } from "framer-motion";
import ctaBg from "../../../Assetsa/e.png";

const MiraaiFinalCTA = () => {
  return (
    <section className="py-4 md:py-12 bg-black w-full px-6 md:px-8 lg:px-20">
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
            className="text-[1.5625rem] md:text-[2.5rem] font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.2]"
          >
            Ready To Grow Your Brand With Professional Content?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-[0.75rem] md:text-[1.125rem] font-['Inter'] font-medium mb-10 md:mb-12 max-w-2xl mx-auto leading-normal"
          >
            Let Our AI-Powered Expert Team Handle Your Videos, Ads, And Branding{" "}
            <br className="hidden md:block" />
            So You Can Focus On Your Business.
          </motion.p>

          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
              <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200 cursor-pointer">
                <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-2 py-2">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-white">Contact Our Team</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MiraaiFinalCTA;
