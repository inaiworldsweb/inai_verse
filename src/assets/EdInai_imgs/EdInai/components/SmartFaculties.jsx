import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vinai from "../../../assets/EdInai_imgs/Vinai.webp";
import Inai from "../../../assets/EdInai_imgs/inai.webp";
import Aira from "../../../assets/EdInai_imgs/Aera.webp";

const faculties = [
  {
    id: 2,
    name: "Inai",
    image: Inai,
    desc: "A female AI mentor who simplifies complex concepts and explains them in an easy, student-friendly way.",
  },
  {
    id: 1,
    name: "Vnai",
    image: Vinai,
    desc: "A confident male AI mentor focused on logical thinking, structured explanations, and concept clarity.",
  },
  {
    id: 3,
    name: "Aira",
    image: Aira,
    desc: "A female AI teacher who makes learning engaging through examples, practice-based teaching, and personalized guidance.",
  },
];

const SmartFaculties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play for Mobile/Tablet
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % faculties.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black w-full !px-12 text-white md:py-12 py-9 overflow-hidden flex flex-col items-center justify-center">
      {/* Internal CSS for Flip Effect */}
      <style>{`
        .perspective { perspective: 1000px; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>

      <div className="max-w-5xl mx-auto text-center mb-2 px-4">
        <h1 className="h1 mb-4 text-center">Meet Our Smart AI Faculties</h1>
        <h2 className="h2 text-center mx-auto lg:mb-12 text-gray-400">
          Your always-available digital academic partners, delivering
          consistent, high-quality instruction across subjects and grade levels.
        </h2>
      </div>

      {/* --- Desktop View: Hover Flip Grid --- */}
      <div className="hidden w-full max-w-5xl lg:grid items-center justify-center grid-cols-3 gap-8 mx-auto">
        {faculties.map((fac) => (
          <div
            key={fac.id}
            className="group rounded-[20px] h-[370px] w-[280px] perspective border cursor-pointer"
          >
            <div className="relative w-full h-full  transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              {/* Front: Image */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-[20px] overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back: Details */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white text-black p-8 flex flex-col justify-between items-start text-left rounded-[20px]">
                {/* Title: Top Left */}
                <h4 className="h4 text-black text-[40px] font-bold leading-tight m-0">
                  {fac.name}
                </h4>

                {/* Description: Bottom Left */}
                <span className="text-gray-400 text-[18px] leading-snug font-medium mb-2">
                  {fac.desc}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Mobile & Tablet View: Carousel --- */}
      <div className="lg:hidden flex flex-col items-center">
        <div className="relative w-full max-w-sm h-[450px] md:h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex flex-col"
            >
              {/* Image Top */}
              <div className="h-[70%] w-full rounded-t-[20px] overflow-hidden">
                <img
                  src={faculties[currentIndex].image}
                  className="w-full h-full object-contain"
                  alt="AI"
                />
              </div>
              {/* Details Bottom (White Card) */}
              <div className="h-[32%] w-full bg-white text-black rounded-b-[20px] p-6 text-center flex flex-col justify-center">
                <h4 className="h4 text-black text-2xl font-bold pt-2">
                  {faculties[currentIndex].name}
                </h4>
                <span className="text-sm text-gray-600 p-2 leading-snug">
                  {faculties[currentIndex].desc}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Buttons & Dots */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex gap-2">
            {faculties.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full border border-white ${
                  currentIndex === idx
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-transparent"
                }`}
              />
            ))}
          </div>

          {/* Prev/Next Buttons for better UX */}
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center md:mt-10 mt-6">
        <p className="p text-gray-500">
          Together, INAI, VNAI, and AIRA deliver clear explanations, engaging
          lessons, and adaptive learning experiences tailored for Indian
          students
        </p>
      </div>
    </section>
  );
};

export default SmartFaculties;
