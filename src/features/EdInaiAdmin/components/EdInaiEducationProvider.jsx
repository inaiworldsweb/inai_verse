import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import schoolImg from "../../../assets/final/education_schools.png";
import collegeImg from "../../../assets/final/education_colleges.png";
import coachingImg from "../../../assets/final/education_coaching.png";

const EdInaiEducationProvider = ({ id }) => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "01",
      label: "Schools",
      title: "Schools",
      points: [
        "Standardized lesson delivery",
        "AI-based internal exams",
        "Revision & remedial support",
        "Multi-branch consistency",
      ],
      image: schoolImg,
    },
    {
      id: "02",
      label: "Colleges & Universities",
      title: "Colleges & Universities",
      points: [
        "Large batch management",
        "Foundational & elective modules",
        "Semester exam automation",
        "Performance dashboards",
      ],
      image: collegeImg,
    },
    {
      id: "03",
      label: "Coaching Institutes",
      title: "Coaching Institutes",
      points: [
        "Competitive exam mock tests",
        "Topic-wise AI practice",
        "Hybrid question formats",
        "Real-time exam scheduling",
      ],
      image: coachingImg,
    },
  ];

  return (
    <section
      id={id}
      className="w-full bg-black text-white py-6 md:py-0 md:min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header - Hamesha Visible */}
        <div className="text-center mb-6">
          <h2 className="h1 mb-4">Built For Education Providers</h2>
          <p className="h2 max-w-3xl mx-auto">
            Designed For Institutions That Want Scalable And Intelligent Education Systems.
          </p>
        </div>

        {/* Main Card Section */}
        <div className="bg-[#0e0f10] border border-white/10 rounded-[10px] mb-1 h-[350px] overflow-hidden">
          {/* Mobile Layout: Direct Stack | Desktop Layout: 2 Columns */}
          <div className="flex h-full flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Image Box */}
            <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={features[activeTab].image}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                  alt="Education Provider"
                />
              </AnimatePresence>
            </div>

            {/* Text Box */}
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">
                    {features[activeTab].title}
                  </h3>
                  <ul className="space-y-4">
                    {features[activeTab].points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        <span className="text-sm md:text-lg leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Navigation Tabs - Mobile par normal stack, Tablet/Laptop par grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-t border-white/5 pt-8">
          {features.map((feature, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="group text-left focus:outline-none relative pb-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-mono text-xs md:text-sm ${activeTab === idx ? "text-white" : "text-gray-600"}`}
                >
                  {feature.id}
                </span>
                {/* Mobile Active Indicator */}
                {activeTab === idx && (
                  <span className="md:hidden w-2 h-2 rounded-full bg-white" />
                )}
              </div>

              {/* Progress Line */}
              <div className="hidden md:block h-[2px] w-full bg-white/10 mb-4 relative overflow-hidden">
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeUnderlineEducation"
                    className="absolute inset-0 bg-white"
                  />
                )}
              </div>

              <h4
                className={`text-base md:text-xl font-medium transition-colors ${
                  activeTab === idx
                    ? "text-white"
                    : "text-gray-600 group-hover:text-gray-400"
                }`}
              >
                {feature.label}
              </h4>

              {/* Mobile Underline (Only Active) */}
              {activeTab === idx && (
                <div className="md:hidden absolute bottom-0 left-0 w-full h-[2px] bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdInaiEducationProvider;

