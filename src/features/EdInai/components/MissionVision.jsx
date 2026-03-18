import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../../assets/EdInai_imgs/first.png";
import img2 from "../../../assets/EdInai_imgs/second.png";
import img3 from "../../../assets/EdInai_imgs/third.png";

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [direction, setDirection] = useState(0);

  const tabOrder = ["mission", "vision", "benefit"];

  const contentData = {
    mission: {
      title: "Classes 1 to 12th | CBSE, ICSE & State Boards",
      description:
        "Schools can integrate Ed-INAI to provide consistent, high-quality AI-driven teaching support for all students.",
      points: [
        "AI-assisted teaching support",
        "AI-based internal exams",
        "Consistent learning across classes",
        "24/7 revision and learning access",
        "Reduced teacher dependency",
        "Improved academic outcomes",
      ],
      image: img1,
    },
    vision: {
      title:
        "UG & PG Courses | Science, Commerce, Arts, Engineering, Medical & Management",
      description:
        "Colleges can leverage Ed-INAI to optimize lectures, assessments, and performance tracking for higher education.",
      points: [
        "Subject-wise AI lecture support",
        "Smart internal assessments",
        "AI-based semester exam generation",
        "Performance analytics dashboard",
      ],
      image: img2,
    },
    benefit: {
      title: "Entrance Exams, Competitive Tests & Career-Oriented Coaching",
      description:
        "Coaching institutes can transform their training with AI-powered mock tests, practice sessions, and smart scheduling.",
      points: [
        "Competitive exam mock tests (NEET, JEE, UPSC, SSC, Banking)",
        "Topic-wise AI practice tests",
        "Hybrid format exam generation",
        "Smart exam scheduling",
        "Live countdown-based test activation",
      ],
      image: img3,
    },
  };

  const tabs = [
    { id: "mission", label: "Schools" },
    { id: "vision", label: "Colleges" },
    { id: "benefit", label: "Coaching Institutes" },
  ];

  const handleTabChange = (newTabId) => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const nextIndex = tabOrder.indexOf(newTabId);
    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveTab(newTabId);
  };

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 60 : -60,
    }),
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -60 : 60,
    }),
  };

  return (
    <section className="bg-black text-white pt-9 md:py-12 md:pt-18 pb-4 px-4 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {" "}
        {/* Max width slightly increased for better side-by-side feel */}
        <div className="text-center mb-10">
          <h1 className="h1 md:mb-12 mb-4 text-center">
            Designed for Every Educational Institution
          </h1>
        </div>
        {/* Boxed Tab Switcher */}
        <div className="flex border border-white/20 rounded-sm mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 py-5 text-sm md:text-base font-medium transition-all relative border-r last:border-r-0 border-white/20 ${
                activeTab === tab.id
                  ? "bg-white/5 text-white"
                  : "text-gray-500 hover:bg-white/5"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-white shadow-[0_0_15px_#fff]"
                />
              )}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_auto_0.9fr] gap-8 md:gap-12 items-center">
              {/* Left Column: Title + Description + Points */}
              <div className="space-y-6">
                <h2 className="md:text-[32px] text-[25px] font-bold leading-tight text-white">
                  {contentData[activeTab].title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {contentData[activeTab].description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                  {contentData[activeTab].points.map((point, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="text-blue-500 mr-3 mt-1">✔</span>
                      <span className="text-[15px] md:text-[16px]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Middle Divider Line (Visible only on desktop) */}
              <div className="hidden md:block w-[1px] h-[400px] bg-gradient-to-b from-transparent via-white/70 to-transparent" />

              {/* Right Column: Image (Bigger and aligned to top) */}
              <div className="relative flex justify-center items-center">
                <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="relative z-10 w-full">
                  <div className="relative p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[12px] backdrop-blur-sm">
                    <img
                      src={contentData[activeTab].image}
                      alt={activeTab}
                      className="w-full h-auto rounded-[10px] shadow-2xl object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Bottom Divider Line */}
        <div className="hidden md:block w-full h-[1px] bg-gradient-to-r  via-white/70 mt-16" />
      </div>
    </section>
  );
};

export default MissionVision;
