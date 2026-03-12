import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Examination1 from "../../../assets/EdInai_imgs/Examination1.png";
import Examination2 from "../../../assets/EdInai_imgs/Examination2.png";
import Examination3 from "../../../assets/EdInai_imgs/Examination3.png";

gsap.registerPlugin(ScrollTrigger);

const examData = [
  {
    id: 1,
    tabTitle: "AI Question Paper Generator",
    bulletPoints: [
      "Upload Syllabus Or PDF",
      "Choose Difficulty",
      "Choose Format",
      "AI Generates Paper",
      "Auto Answer Key",
      "PDF Download",
    ],
    image: Examination1,
  },
  {
    id: 2,
    tabTitle: "Smart Scheduling System",
    bulletPoints: [
      "Set date & time",
      "Duration calculation",
      "Unique Exam ID",
      "Secure activation",
      "Live countdown",
    ],
    image: Examination2,
  },
  {
    id: 3,
    tabTitle: "Student Exam Portal",
    bulletPoints: [
      "View scheduled exams",
      "Practice tests",
      "Study materials",
      "Track performance",
      "Review answers",
    ],
    image: Examination3,
  },
];

const ExaminationEngine = ({ id }) => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const desktopTextRef = useRef(null);
  const desktopImageRef = useRef(null);

  // Desktop Animation
  useGSAP(
    () => {
      gsap.fromTo(
        [desktopTextRef.current, desktopImageRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      );
    },
    { dependencies: [activeTab], scope: containerRef },
  );

  // Mobile Stacking Logic - Ultra Smooth
  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".mobile-card");

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.92,
            opacity: 0.3, // Fixed clean opacity fade
            filter: "blur(4px)",
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top 85%",
              end: "top 25%",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id={id}
      className="w-full bg-black md:py-12 py-9 overflow-visible"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 lg:mb-10">
          <h1 className="h1 font-bold text-white mb-3">
            Smart & Scalable Examination Engine
          </h1>
          <h2 className="h2 max-w-4xl mx-auto">
            Ed-INAI now includes a complete AI-powered exam management solution.
          </h2>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden lg:flex min-h-[400px] rounded-[40px] border border-white/10 bg-black overflow-hidden">
          {/* Sidebar */}
          <div className="w-[35%] bg-white p-8 flex flex-col justify-center gap-4 z-20">
            {examData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`group flex items-center py-4 ps-5 px-4 transition-all duration-500 rounded-full text-left ${
                  activeTab === index
                    ? "bg-black text-white translate-x-12 w-[calc(100%+3rem)] shadow-2xl z-30 border border-white"
                    : "text-black hover:bg-gray-100"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full mr-5 ${activeTab === index ? "bg-white" : "bg-black"}`}
                />
                <h4 className="font-bold text-[16px]">{item.tabTitle}</h4>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white/5 rounded-r-[38px] p-12 flex items-center gap-10 pl-20 border-l border-white/5">
            <div ref={desktopTextRef} className="flex-1 space-y-8">
              <ul className="lg:space-y-8 space-y-4 text-white text-lg font-medium">
                {examData[activeTab].bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start lg:gap-3 gap-2">
                    <span className="text-white/30">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div ref={desktopImageRef} className="flex-1 max-w-[450px]">
              <div className="relative aspect-[4/5]">
                <img
                  src={examData[activeTab].image}
                  className="w-full h-full rounded-[24px] overflow-hidden object-cover"
                  alt={examData[activeTab].tabTitle}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- MOBILE STACK VIEW --- */}
        <div className="lg:hidden flex flex-col items-center">
          {examData.map((item, index) => (
            <div
              key={item.id}
              className="mobile-card sticky top-[100px] w-full bg-[#111] border border-white/10 rounded-[32px] p-6 mb-[6vh] shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-white font-bold text-xl tracking-tight">
                  {item.tabTitle}
                </h2>
                <span className="text-white/20 font-mono text-sm">
                  0{index + 1}
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {item.bulletPoints.map((point, i) => (
                  <li
                    key={i}
                    className="text-gray-300 text-sm flex items-start gap-3"
                  >
                    <span className="text-blue-500 font-bold">—</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="w-full h-72 rounded-2xl overflow-hidden border border-white/10 bg-black/50">
                <img
                  src={item.image}
                  className="w-full h-full object-cover"
                  alt={item.tabTitle}
                />
              </div>
            </div>
          ))}
          {/* Bottom padding for scroll completion */}
          <div className="h-[10vh]" />
        </div>
      </div>
    </section>
  );
};

export default ExaminationEngine;
