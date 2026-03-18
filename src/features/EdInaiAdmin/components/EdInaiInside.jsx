import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import previewImg from "../../../assets/final/edinai_admin_preview.png";

const EdInaiInside = ({ id }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for high-end feel (Lagging follower)
  const springConfig = { damping: 25, stiffness: 150, mass: 0.8 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id={id} className="w-full bg-black text-white py-12 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center  mb-14">
          <h1
            className="h1 font-bold mb-6 tracking-tight text-white leading-tight">
            Inside the edInai Admin Portal
          </h1>
          <h2 className="h2 font-medium  mb-1 leading-relaxed">
            A centralized control system for planning, delivery, and academic monitoring.
          </h2>

          <p className="p max-w-6xl mx-auto">
            Ed-INAI is a smart learning automation platform that unifies planning, teaching delivery, and performance tracking into one coordinated system. It helps institutions streamline operations and deliver consistent education across devices and locations.
          </p>
        </div>

        {/* Video Preview Container */}
        <motion.div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="relative w-full aspect-video md:aspect-[25/9] rounded-[7px] md:rounded-[10px] overflow-hidden group cursor-pointer border border-white/10 bg-[#0a0a0a]"
        >
          {/* Background Image */}
          <img
            src={previewImg}
            alt="Admin Portal Preview"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-75 group-hover:brightness-50"
          />

          {/* DYNAMIC CIRCULAR PLAY BUTTON (The "Round") */}
          <motion.div
            style={{
              left: isHovered ? x : "50%",
              top: isHovered ? y : "50%",
              translateX: "-50%",
              translateY: "-50%",
              position: "absolute",
            }}
            className="z-30 pointer-events-none flex items-center justify-center"
          >
            {/* Outer Thin Ring */}
            <motion.div
              animate={{
                scale: isHovered ? 1.15 : 1,
                opacity: isHovered ? 1 : 0.6,
                borderColor: isHovered ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)"
              }}
              transition={{ type: "spring", stiffness: 150, damping: 25 }}
              className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/20"
            />

            {/* Main Inner Circle (The "Play round") */}
            <motion.div
              animate={{
                scale: isHovered ? 1 : 0.85,
                backgroundColor: isHovered ? "#cccccc" : "rgba(255, 255, 255, 0.05)",
                backdropFilter: isHovered ? "blur(0px)" : "blur(12px)",
                color: isHovered ? "#000" : "#fff",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-2xl overflow-hidden border border-white/20"
            >
              <span className="font-bold text-xs md:text-sm tracking-[0.2em] uppercase">
                Play
              </span>
            </motion.div>
          </motion.div>


          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default EdInaiInside;