import React from "react";
import { motion } from "framer-motion";

const MiraaiComparison = () => {
  const comparisonData = [
    {
      area: "Content Creation",
      diy: "Limited tools and skills",
      miraai: "Advanced AI + Professional Experts",
    },
    {
      area: "Design Quality",
      diy: "Basic and inconsistent",
      miraai: "Premium, brand-focused designs",
    },
    {
      area: "Production Speed",
      diy: "Slow and manual",
      miraai: "Fast and AI-powered delivery",
    },
    {
      area: "Cost Efficiency",
      diy: "Trial and error approach",
      miraai: "Optimized and affordable pricing",
    },
    {
      area: "Creative Strategy",
      diy: "Lacking clear strategy",
      miraai: "Data-driven planning",
    },
    {
      area: "Editing & Effects",
      diy: "Basic editing software",
      miraai: "Professional-grade editing tools",
    },
    {
      area: "Scalability",
      diy: "Hard to scale campaigns",
      miraai: "Easily scalable production",
    },
    {
      area: "Final Output",
      diy: "Average results",
      miraai: "High-impact, conversion-focused output",
    },
  ];

  return (
    <section className=" md:py-22 px-6 sm:px-6  elative">
      <div className="max-w-[1200px] mx-auto">
        {/* --- Headers --- */}
        <div className="text-center lg:static lg:bg-transparent lg:py-0 sticky top-[70px] z-40 bg-black py-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" text-[1.5625rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-white tracking-[1px] [font-stretch:700%]"
          >
            The Real Problem We Solve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className=" md:mb-8  text-[#ccc] text-[0.875rem] md:text-[1rem] lg:text-[1.3125rem]"
          >
            Do It Yourself Vs Miraai Expert Team
          </motion.p>
        </div>

        {/* --- DESKTOP VIEW: Table Layout (Visible on lg and up) --- */}
        <div className=" hidden lg:block">
          <div className="grid grid-cols-[1.2fr_1.5fr_1.5fr] gap-4">
            <div className=" bg-white text-black py-4 rounded-xl flex items-center justify-center text-[1.125rem] font-bold shadow-lg uppercase">
              Area
            </div>
            <div className=" bg-white text-black py-4 rounded-xl flex items-center justify-center text-[1.125rem] font-bold shadow-lg uppercase">
              Do It Yourself
            </div>
            <div className=" bg-white text-black py-4 rounded-xl flex items-center justify-center text-[1.125rem] font-bold shadow-lg uppercase">
              Miraai Expert Team
            </div>
          </div>

          <div className="space-y-3">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-[1.2fr_1.5fr_1.5fr] gap-4"
              >
                <div className="bg-[#0A0A0A] border border-white/5 p-5 rounded-xl text-white font-medium flex items-center">
                  {row.area}
                </div>
                <div className="bg-[#0A0A0A] border border-white/5 p-5 rounded-xl text-gray-400 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-red-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  {row.diy}
                </div>
                <div className="bg-[#0A0A0A] border border-white/5 p-5 rounded-xl text-white flex items-center gap-3 bg-blue-500/5 border-blue-500/20">
                  <svg
                    className="w-6 h-6 text-blue-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M9 12l2 2 4-4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    />
                  </svg>
                  <span className="font-semibold">{row.miraai}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- MOBILE VIEW: Stacking Cards (Visible below lg) --- */}
        {/* Removed extra space between cards, they now stack on top of each other at top: 210px */}
        <div className="lg:hidden relative flex flex-col gap-4">
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                position: "sticky",
                // Fixed sticky point to allow stacking without dead scroll space
                top: "210px",
                zIndex: index,
              }}
              className="w-full"
            >
              <div className="bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-8 shadow-[0_-20px_60px_-15px_rgba(0,0,0,1)]">
                <h3 className="text-white text-2xl font-bold text-center border-b border-white/5 pb-4 tracking-[1px] [font-stretch:700%]">
                  {item.area}
                </h3>

                <div className="space-y-6">
                  {/* DIY Mobile */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <p className="text-gray-400 text-base">{item.diy}</p>
                  </div>

                  {/* Miraai Mobile */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <svg
                      className="w-6 h-6 text-blue-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 12l2 2 4-4"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                      />
                    </svg>
                    <p className="text-white text-base font-medium">
                      {item.miraai}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div />
        </div>
      </div>
    </section>
  );
};

export default MiraaiComparison;
