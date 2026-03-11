import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../../assets/EdInai_imgs/first.png";
import img2 from "../../../assets/EdInai_imgs/second.png";
import img3 from "../../../assets/EdInai_imgs/third.png";

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState("mission");

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

  return (
    <section className="bg-black text-white py-20 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h1 className="mt-4 text-center">
            Designed for Every Educational Institution
          </h1>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex border-b border-white/10 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-4 text-sm md:text-base font-medium transition-all relative ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-white shadow-[0_0_10px_#fff]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[450px]"
          >
            {/* Left Column: Text Content */}
            <div className="space-y-4">
              <h1 className=" leading-tight text-center mb-3">
                {contentData[activeTab].title}
              </h1>

              <ul className="space-y-4">
                {contentData[activeTab].points.map((point, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="text-blue-500 mr-3">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Animated Image/Graphic */}
            <div className="relative flex justify-center items-center">
              {/* Background Glow Effect */}
              <div className="absolute w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px]" />

              <div className="relative z-10 w-full max-w-[400px]">
                {/* Circular Energy Frame */}
                <div className="relative p-2   rounded-full border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
                  <img
                    src={contentData[activeTab].image}
                    alt={activeTab}
                    className="w-full h-auto rounded-full shadow-2xl border-2 border-white/10"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MissionVision;
