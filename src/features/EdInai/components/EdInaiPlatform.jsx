import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import office from "../../../assets/EdInai_imgs/office.jpeg";

const EdInaiPlatform = () => {
  // Dummy images array (abhi ke liye sabme wahi office image use ki hai)
  const images = [office, office, office, office];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds interval
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="edinai-platform bg-black min-h-screen text-center flex flex-col items-center justify-center px-4 py-9 md:py-12">
      <div className="max-w-5xl w-full flex flex-col items-center space-y-3">
        {/* Header Section */}
        <div className="flex items-center justify-center flex-col mb-3">
          <h1 className="h1 mb-3">Inside the Ed-INAI AI Education Platform</h1>
          <h2 className="h2 text-center max-w-7xl mx-auto">
            From Administration to Learning Ed-INAI Automates, Optimizes, and
            Personalizes the Entire Education Journey.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden my-8 shadow-2xl">
          <div className="relative h-[250px] md:h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full rounded-[30px] md:rounded-[50px] object-cover opacity-80"
              />
            </AnimatePresence>
          </div>

          {/* Slider Pagination Dots (Functional) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full border border-white ${
                  currentIndex === index
                    ? "w-6 h-2 bg-white"
                    : "w-2 h-2 bg-transparent hover:bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col items-center w-full">
          <p>
            Students can choose exam categories, access study materials, and
            attempt AI-generated mock tests anytime.
          </p>

          <h2 className="h2 mt-5">Upload & Organize Curriculum</h2>

          {/* Learn More Button */}
          <button className="bg-white text-black font-semibold md:px-10 md:py-3 py-1 px-3 rounded-full hover:bg-gray-200 transition-all duration-300 mt-4 md:mt-6 text-base md:text-lg">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default EdInaiPlatform;
