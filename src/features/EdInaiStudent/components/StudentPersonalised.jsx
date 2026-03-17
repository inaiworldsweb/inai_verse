import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StudentPersonalised = ({ id }) => {
  // Aap yahan apni images import karke dalo
  const carouselData = [
    {
      title: "Attend live AI lectures",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070",
    },
    {
      title: "Access recorded classes",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070",
    },
    {
      title: "View study materials",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073",
    },
    {
      title: "Attempt AI-generated exams",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
    },
    {
      title: "Track academic progress",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    },
    {
      title: "Practice topic-wise tests",
      image:
        "https://images.unsplash.com/photo-1454165833267-028cc21e7867?q=80&w=2070",
    },
  ];

  const [index, setIndex] = useState(0);

  // Automatic transition logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds interval
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id={id}
      className="w-full bg-black text-white py-9 md:py-12 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Static Content */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="h1 md:text-5xl font-bold mb-4">
            A Personalized Learning Experience
          </h1>
          <p className="text-gray-400 h2 mx-auto px-2">
            Your complete academic journey — lectures, notes, exams, doubts, and
            performance in one dashboard.
          </p>
        </div>

        {/* Main Card Section - Left Image, Right Content */}
        <div className="bg-[#0e0f10] border border-white/10 rounded-[10px] h-auto md:h-[400px] overflow-hidden">
          <div className="flex h-full flex-col lg:flex-row items-center">
            {/* Image Box - Left Side */}
            <div className="w-full lg:w-1/2 h-64 md:h-full relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={carouselData[index].image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  alt={carouselData[index].title}
                />
              </AnimatePresence>

              {/* Indicators (Dots) overlay on image bottom */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {carouselData.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === index ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Text Box - Right Side */}
            <div className="w-full lg:w-1/2 p-6 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-white">
                    {carouselData[index].title}
                  </h3>

                  {/* Static Description - Same for all carousel items */}
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                    The Ed-INAI student dashboard gives every learner a clean,
                    interactive interface to manage studies, track growth, and
                    stay connected with AI-powered education.
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentPersonalised;
