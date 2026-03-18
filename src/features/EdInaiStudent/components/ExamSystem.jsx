import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../../assets/EdInai_Student_imgs/Practice Attempt Track Exams Anytime/Scheduled Exams Section.webp";
import img2 from "../../../assets/EdInai_Student_imgs/Practice Attempt Track Exams Anytime/AI Mock Test Mode.webp";
import img3 from "../../../assets/EdInai_Student_imgs/Practice Attempt Track Exams Anytime/Study Materials Section.webp";

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
        img1,
    },
    {
      id: "02",
      label: "Study Materials Section",
      title: "Study Materials Section",
      points: [
        "Access subject-wise PDF materials",
        "Download revision notes",
        "Institution-uploaded content",
        "Organized by exam category",
      ],
      image:
        img3,
    },
    {
      id: "03",
      label: "AI Mock Test Mode",
      title: "AI Mock Test Mode",
      points: [
        "Attempt AI-generated question papers",
        "Hybrid format (MCQ + Short + Very Short)",
        "Instant result evaluation",
        "Answer review with correct solutions",
        "Performance analytics",
      ],
      image:
       img2,
    },
  ];

  // Mobile Carousel Auto-play Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <section
      id={id}
      className="w-full bg-black text-white py-6 md:py-0 md:min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="h1 mb-4">Practice, Attempt & Track Exams Anytime</h2>
          <p className="h2 max-w-4xl mb-8 mx-auto">
            Students now get access to a complete AI-based exam system inside
            the portal.
          </p>
        </div>

        {/* Main Card Section */}
        <div className="bg-[#0e0f10] border border-white/10 rounded-[10px] mb-6 md:mb-1 h-auto md:h-[350px] overflow-hidden">
          <div className="flex h-full flex-col lg:flex-row items-center">
            {/* Image Box */}
            <div className="w-full lg:w-1/2 h-64 md:h-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={features[activeTab].image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  alt="Exam System"
                />
              </AnimatePresence>
            </div>

            {/* Text Box */}
            <div className="w-full lg:w-1/2 p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
                    {features[activeTab].title}
                  </h3>
                  <ul className="space-y-2 md:space-y-4">
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

        {/* Navigation Tabs/Dots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 border-t border-white/5 pt-8">
          {features.map((feature, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="group text-left focus:outline-none relative pb-4 md:block hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-mono text-xs md:text-sm ${
                    activeTab === idx ? "text-white" : "text-gray-600"
                  }`}
                >
                  {feature.id}
                </span>
              </div>

              {/* Progress Line Desktop */}
              <div className="h-[2px] w-full bg-white/10 mb-4 relative overflow-hidden">
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
            </button>
          ))}
          
          {/* Carousel Dots - Mobile Only */}
          <div className="flex md:hidden justify-center gap-3 w-full pb-4">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeTab === idx ? "w-8 bg-white" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamSystem;