import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExamSystem = ({ id }) => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: "01",
      label: "Scheduled Exams Section",
      title: "Scheduled Exams Section",
      points: [
        "View upcoming exams",
        "See countdown timer before exam starts",
        "Check date, time & duration",
        "Access exam instantly when live",
        "View completed exam history",
      ],
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
    },
    {
      id: "02",
      label: "Study Materials Section",
      title: "Smart Study Materials",
      points: [
        "Download AI-generated summaries",
        "Access chapter-wise notes",
        "Watch recorded lecture backup",
        "Interactive PDF viewer",
        "Mark important topics for revision",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071",
    },
    {
      id: "03",
      label: "AI Mock Test Mode",
      title: "Real-time AI Mock Tests",
      points: [
        "Practice with competitive questions",
        "Instant score evaluation",
        "Get detailed mistake analysis",
        "Adaptive difficulty level",
        "All India ranking simulation",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
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
          <h2 className="h1 mb-4">Practice, Attempt & Track Exams Anytime</h2>
          <p className="h2 max-w-3xl mx-auto">
            Students Now Get Access To A Complete AI-Based Exam System Inside
            The Portal.
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
                  alt="Exam System"
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
                    layoutId="activeUnderline"
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

export default ExamSystem;
