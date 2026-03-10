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
        "We aim to remove friction between design and development by turning visual ideas into usable, production-ready code—quickly and reliably.",
      points: [
        "AI-assisted teaching support",
        "AI-based internal exams",
        "Consistent learning across classes",
        "24/7 revision and learning access",
        "Reduced teacher dependency",
        "Improved academic outcomes"
      ],
      image: img1, // Yahan apni 1st image dalna
  
    },
    vision: {
      title: "Pioneering the Future of AI-Driven Education",
      description:
        "Our vision is to create a world where high-quality, personalized education is accessible to every student through advanced AI faculties like Vnai and Aira.",
      points: [
        "Global accessibility",
        "Personalized learning paths",
        "Continuous AI innovation",
      ],
      image: img2, // Yahan apni 2nd image dalna

    },
    benefit: {
      title: "Unlock Maximum Efficiency For Your Institution",
      description:
        "By integrating Ed-INAI, institutions can automate complex administrative tasks and focus purely on student academic excellence.",
      points: [
        "90% Administrative automation",
        "Real-time performance tracking",
        "Scalable infrastructure",
      ],
      image: img3, // Yahan apni 3rd image dalna
  
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
        <div className="text-center mb-10">
          <h1 className="mt-4">Designed for Every Educational Institution</h1>
        </div>

        {/* Custom Tab Switcher */}
        <div className="flex border-b border-white/10 mb-8">
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
            <div className="space-y-6">
              <h1 className=" leading-tight">{contentData[activeTab].title}</h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                {contentData[activeTab].description}
              </p>
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
