import React from "react";
import { motion } from "framer-motion";

const WhyTrustEdInai = ({ id }) => {
  const trustPoints = [
    {
      title: "AI-Powered Virtual Teachers",
      side: "left",
      top: "10%",
      id: "l1",
      path: "M500 300 C420 140 340 100 180 100",
      delay: 0,
      isFirstInRow: true, // Marker for top margin on tablet
    },
    {
      title: "Reduced Operational Costs",
      side: "left",
      top: "45%",
      id: "l2",
      path: "M500 300 L180 300",
      delay: 0,
    },
    {
      title: "Secure Infrastructure",
      side: "left",
      top: "80%",
      id: "l3",
      path: "M500 300 C420 460 340 500 180 500",
      delay: 0,
    },
    {
      title: "Improved Academic Outcomes",
      side: "right",
      top: "10%",
      id: "r1",
      path: "M500 300 C580 140 660 100 820 100",
      delay: 0,
      isFirstInRow: true, // Marker for top margin on tablet
    },
    {
      title: "High Scalability",
      side: "right",
      top: "45%",
      id: "r2",
      path: "M500 300 L820 300",
      delay: 0,
    },
    {
      title: "Dedicated Support",
      side: "right",
      top: "80%",
      id: "r3",
      path: "M500 300 C580 460 660 500 820 500",
      delay: 0,
    },
  ];

  return (
    <section
      id={id}
      className="w-full bg-black text-white py-9 md:py-12 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Heading */}
        <h1 className="h1 text-center mb-6 md:mb-2 lg:mb-8">
          Why Institutions Trust edInai
        </h1>

        {/* Desktop Layout */}
        <div className="hidden md:block relative min-h-[580px]">
          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-28 h-28 bg-white rounded-[10px] flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.3)]"
            >
              <div className="w-14 h-14 bg-black rotate-45 flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-[10px]"></div>
              </div>
            </motion.div>
          </div>

          {/* SVG Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 600"
          >
            <defs>
              <linearGradient id="lineGradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff00" />
                <stop offset="40%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#ffffff00" />
              </linearGradient>
            </defs>

            {trustPoints.map((pt) => (
              <g key={pt.id}>
                {/* faint base line */}
                <path
                  d={pt.path}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                />

                {/* animated energy flow */}
                <motion.path
                  d={pt.path}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    delay: pt.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(255,255,255,0.8))",
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Boxes */}
          <div className="absolute inset-0 z-30">
            {trustPoints.map((point) => (
              <div
                key={point.id}
                className={`absolute transition-all duration-300 ${
                  point.isFirstInRow ? "md:max-lg:mt-15" : ""
                }`}
                /* Note: md:max-lg:mt-10 applies margin-top: 40px ONLY on Tablet screens */
                style={{
                  top: point.top,
                  left: point.side === "left" ? "-10px" : "auto",
                  right: point.side === "right" ? "-10px" : "auto",
                  transform: "translateY(-50%)",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-[#0a0a0a]/80 border border-white/10 w-[280px] py-6 px-5 rounded-[10px] backdrop-blur-lg shadow-2xl text-center hover:border-white/40"
                >
                  <span className="text-[16px] font-semibold text-gray-200">
                    {point.title}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center gap-5">
          <div className="w-20 h-20 bg-white rounded-[10px] flex items-center justify-center mb-8 shadow-lg">
            <div className="w-10 h-10 bg-black rotate-45 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-[10px]"></div>
            </div>
          </div>

          {trustPoints.map((point) => (
            <div
              key={point.id}
              className="w-full bg-white/5 border border-white/10 p-2 rounded-[10px] text-center active:bg-white/10 transition"
            >
              <span className="text-base font-semibold">{point.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustEdInai;
