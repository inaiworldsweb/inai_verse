import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import previewImg from "../../../assets/final/edinai_admin_preview.png";

const EdInaiInside = ({ id }) => {
  return (
    <section id={id} className="w-full bg-black text-white py-9 md:py-12 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="h1 mb-3"
          >
            Inside the Ed-INAI Admin Portal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h2 max-w-4xl mx-auto"
          >
            A centralized control system for planning, delivery, and academic monitoring.
          </motion.p>
        </div>

        {/* Video Preview Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-video md:aspect-[25/9] rounded-[10px] md:rounded-[10px] overflow-hidden group cursor-pointer border border-white/5"
        >
          {/* Background Image */}
          <img
            src={previewImg}
            alt="Admin Portal Preview"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-white/40 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:border-transparent transition-all duration-300">
              <Play className="text-white group-hover:text-black fill-current ml-1" size={32} />
            </div>
          </div>

          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Bottom Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="p max-w-6xl mx-auto px-4">
            Ed-INAI is a smart learning automation platform that unifies planning, teaching delivery, and performance tracking into one coordinated system. It helps institutions streamline operations and deliver consistent education across devices and locations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EdInaiInside;
