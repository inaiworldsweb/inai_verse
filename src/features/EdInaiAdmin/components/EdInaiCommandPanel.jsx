import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../../assets/images/edInai/Admin/YourCentralCommandPanel/Cc.webp";
import img2 from "../../../assets/images/edInai/Admin/YourCentralCommandPanel/AI_led_lectures.webp";
import img3 from "../../../assets/images/edInai/Admin/YourCentralCommandPanel/AI_generated_question_papers.webp";
import img4 from "../../../assets/images/edInai/Admin/YourCentralCommandPanel/image_384.webp";
import img5 from "../../../assets/images/edInai/Admin/YourCentralCommandPanel/Sf.webp";
import img6 from "../../../assets/images/edInai/Admin/YourCentralCommandPanel/Reports_analytics.webp";

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
        <div className="text-center mb-12">
          <h2 className="h1 mb-3 ">
            Your Central Command Panel
          </h2>
          <p className=" h2 ">
            Complete control over your institution's academic ecosystem.
            The Admin View allows institutions to manage
          </p>
        </div>

        {/* Main Card Section - Side-by-Side Layout */}
        <div className="w-full bg-[#0c0c0c] border border-white/10 rounded-[7px] md:rounded-[10px] h-auto md:h-[450px] overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)]">
          <div className="flex h-full flex-col lg:flex-row items-stretch">
            {/* Image Box - Left Side */}
            <div className="w-full lg:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={carouselData[index].image}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-contain"
                  alt={carouselData[index].title}
                />
              </AnimatePresence>

              {/* Indicators (Dots) overlay on image bottom */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 rounded-[7px] md:rounded-[10px]">
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

            {/* Text Box - Right Side */}
            <div className="w-full lg:w-1/2 p-6 md:p-12 flex flex-col justify-center text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
                    {carouselData[index].title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    {sharedDesc}
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

export default EdInaiCommandPanel;
