import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from '../../../assets/EdInai_imgs/CommandPannelImg!.png';
import img2 from '../../../assets/EdInai_imgs/CommandPannelImg2.png';
import img3 from '../../../assets/EdInai_imgs/CommandPannelImg3.png';
import img4 from '../../../assets/EdInai_imgs/CommandPannelImg4.png';
import img5 from '../../../assets/EdInai_imgs/CommandPannelImg5.png';
import img6 from '../../../assets/EdInai_imgs/CommandPannelImg6.png';

const EdInaiCommandPanel = ({ id }) => {
  const sharedDesc = "The Admin View enables institutions to manage curriculum, schedules, users, and analytics from a single dashboard. Structured controls ensure smooth governance and operational efficiency.";

  const carouselData = [
    {
      title: "Curriculum & content",
      desc: sharedDesc,
      image: img1
    },
    {
      title: "AI-led lectures",
      desc: sharedDesc,
      image: img2
    },
    {
      title: "AI-generated question papers",
      desc: sharedDesc,
      image: img3
    },
    {
      title: "Scheduled exams",
      desc: sharedDesc,
      image: img4
    },
    {
      title: "Students & faculty",
      desc: sharedDesc,
      image: img5
    },
    {
      title: "Reports & analytics",
      desc: sharedDesc,
      image: img6
    }
  ];

  const [index, setIndex] = useState(0);

  // Automatic transition logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds interval
    return () => clearInterval(timer);
  }, [carouselData.length]);

  return (
    <section id={id} className="w-full py-9 md:py-12 px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Top Static Content */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="h1 ">
            Your Central Command Panel
          </h2>
          <p className=" h2 ">
            Complete control over your institution's academic ecosystem.
            The Admin View allows institutions to manage
          </p>
        </div>

        {/* Carousel Image Area */}
        <div className="relative w-full aspect-video md:h-[450px] overflow-hidden rounded-[10px] border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
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
                className={`transition-all duration-300 rounded-full ${i === index ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Changing Content */}
        <div className="text-center mt-10 md:mt-12 min-h-[140px] max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.h3
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              {carouselData[index].title}
            </motion.h3>
          </AnimatePresence>
          <p className="p max-w-6xl mx-auto leading-relaxed text-gray-400">
            {sharedDesc}
          </p>
        </div>

      </div>
    </section>
  );
};

export default EdInaiCommandPanel;
