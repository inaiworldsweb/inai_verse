import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StudentPersonalised = ({ id }) => {
  // Aap yahan apni images import karke dalo
  const carouselData = [
    { title: "Attend live AI lectures", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070" },
    { title: "Access recorded classes", image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070" },
    { title: "View study materials", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073" },
    { title: "Attempt AI-generated exams", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070" },
    { title: "Track academic progress", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070" },
    { title: "Practice topic-wise tests", image: "https://images.unsplash.com/photo-1454165833267-028cc21e7867?q=80&w=2070" },
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
    <section id={id} className="w-full bg-black text-white py-9 md:py-12 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Top Static Content */}
        <div className="text-center mb-5 md:mb-10">
          <h1 className=" h1 md:text-5xl font-bold mb-4">
            A Personalized Learning Experience
          </h1>
          <p className="text-gray-400 h2 mx-auto px-2">
            Your complete academic journey — lectures, notes, exams, doubts, and performance in one dashboard.
          </p>
        </div>

        {/* Carousel Image Area */}
        <div className="relative w-full aspect-video md:h-[400px] overflow-hidden rounded-[10px] border border-white/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={carouselData[index].image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
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

        {/* Dynamic Changing Content */}
        <div className="text-center mt-10 md:mt-8 min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {carouselData[index].title}
              </h3>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Static Content */}
          <p className=" p max-w-3xl mx-auto leading-relaxed">
            The Ed-INAI student dashboard gives every learner a clean, interactive 
            interface to manage studies, track growth, and stay connected with 
            AI-powered education.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StudentPersonalised;