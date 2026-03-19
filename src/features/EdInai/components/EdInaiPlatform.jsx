import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import platform1 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Automatic exam duration calculation.webp";
import platform2 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Create & manage exam categories.webp";
import platform3 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Generate And Manage Your Lecture.webp";
import platform4 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Generate professional exam PDFs.webp";
import platform5 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Hybrid exam format.webp";
import platform6 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Manage Students & Staff.webp";
import platform7 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Multi-language exam creation.webp";
import platform8 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Schedule exams with date & time.webp";
import platform9 from "../../../assets/EdInai_imgs/ED-INAI HOME PAGE IMAGE/Inside the Ed-INAI AI Education Platform/Upload & Organize Curriculum.webp";


const EdInaiPlatform = () => {
  const navigate = useNavigate();
  // Using an array of images - you can add different images here later
  const images = [platform1, platform2, platform3, platform4, platform5, platform6, platform7, platform8, platform9];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="edinai-platform bg-black min-h-screen text-center flex flex-col items-center justify-center px-4 pt-9 pb-0 md:py-12">
      <div className="max-w-6xl w-full flex flex-col items-center space-y-3">
        {/* Header Section */}
        <div className="flex items-center justify-center flex-col mb-3">
          <h1 className="h1 mb-3">Inside the edInai AI Education Platform</h1>
          <h2 className="h2 text-center max-w-7xl mx-auto">
            From Administration to Learning edInai Automates, Optimizes, and
            Personalizes the Entire Education Journey.
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden my-8 shadow-2xl rounded-[7px] md:rounded-[10px]">
          <div className="relative h-[450px] md:h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full object-contain opacity-60 md:opacity-80"
              />
            </AnimatePresence>

            {/* Content Overlay - Adjusted for Responsive Positioning */}
            <div className="absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-black via-black/20 to-transparent p-6 pb-8 md:pb-12">
              <div className="flex flex-col items-center text-center max-w-2xl">

                {/* Description - Lowered on mobile via mt-6 */}
                <p className="text-white/90 h2 !text-[14px] md:!text-[18px] mb-2 mt-6 md:mt-0 leading-relaxed">
                  Students can choose exam categories, access study materials,
                  and attempt AI-generated mock tests anytime.
                </p>

                {/* Subheading - Lowered on mobile via mb-6 */}
                <h2 className="p text-white mb-6 md:mb-4">
                  Upload & Organize Curriculum
                </h2>

                {/* Learn More Button */}
                <div className="group relative flex items-center mb-4 gap-4 bg-white/[0.10] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 rounded-[10px] text-xl font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20">
                  <button
                    onClick={() => navigate('/edinai-admin')}
                    className="relative px-5 py-2 md:px-6 md:py-2 text-[15px] md:text-[20px] flex items-center gap-2 bg-transparent text-white font-medium transition-all duration-300"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Slider Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full border border-white ${currentIndex === index
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-transparent hover:bg-white/30"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdInaiPlatform;