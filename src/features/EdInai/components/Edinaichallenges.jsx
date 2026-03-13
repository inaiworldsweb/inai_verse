import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Assuming these imports remain the same
import Icon0 from "../EdInaiIcon/Icon.svg";
import Icon1 from "../EdInaiIcon/Icon (1).svg";
import Icon2 from "../EdInaiIcon/Icon (2).svg";
import Icon3 from "../EdInaiIcon/Icon (3).svg";
import Icon4 from "../EdInaiIcon/Container.svg";

export default function Edinaichallenges({ id }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Track direction for animation

  const allChallenges = [
    { icon: Icon2, title: "Shortage Of Qualified Teachers" },
    { icon: Icon3, title: "Lack Of Personalized Attention" },
    { icon: Icon0, title: "Low Student Engagement" },
    { icon: Icon1, title: "Inconsistent Learning Quality" },
    { icon: Icon4, title: "Manual Exam & Academic Management" },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, 4000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % allChallenges.length);
  };

  const movePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? allChallenges.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants for a professional slide effect
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      id={id}
      className="w-full min-h-screen bg-black text-white flex items-center justify-center py-12 px-4"
    >
      <div className="max-w-6xl w-full flex flex-col gap-12">
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="h1 mb-4">
            Challenges in Traditional Education Systems
          </h1>
          <p className="max-w-4xl p mx-auto text-gray-400">
            Many institutions face difficulties in delivering consistent,
            personalized, and scalable education.
          </p>
          <p className="max-w-3xl p mx-auto text-gray-400">
           Ed-INAI addresses these challenges through intelligent automation and AI-driven learning.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center">
          <div className="relative w-full flex items-center justify-center min-h-[300px]">
            
            {/* Navigation Buttons - Hidden on small mobile, visible on tablet+ */}
            <button
              onClick={movePrev}
              className="absolute left-0 z-10 p-3 rounded-[10px] bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all active:scale-90"
              aria-label="Previous"
            >
              <ChevronLeft className="md:w-6 md:h-6 w-4 h-4" />
            </button>

            {/* Single Card Display */}
            <div className="w-full md:max-w-[650px] lg:max-w-[750px] overflow-hidden px-4">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center justify-center gap-6  rounded-[10px] p-10 md:p-16 bg-[#0c0d0e] shadow-2xl"
                >
                  <div className="p-4 bg-white/5 rounded-[10px]">
                    <img
                      src={allChallenges[currentIndex].icon}
                      alt="Challenge Icon"
                      className="w-7 h-7 rounded-[10px]"
                    />
                  </div>
                  <p className="text-center p font-medium text-white tracking-tight">
                    {allChallenges[currentIndex].title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={moveNext}
              className="absolute right-0 z-10 p-3 rounded-[10px] bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all active:scale-90"
              aria-label="Next"
            >
              <ChevronRight className="md:w-6 md:h-6 w-4 h-4" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {allChallenges.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-[10px] ${
                  index === currentIndex
                    ? "bg-white w-10 h-2"
                    : "bg-white/20 w-2 h-2 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
