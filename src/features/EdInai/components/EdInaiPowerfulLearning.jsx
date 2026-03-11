import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Examination1 from "../../../assets/EdInai_imgs/Examination1.png";

gsap.registerPlugin(ScrollTrigger);

const learningModes = [
  { id: 1, mode: "Mode 1", title: "Live AI Lectures", description: "Attend real-time AI-powered classes where students can interact, ask questions, and learn through visual explanations.", image: Examination1 },
  { id: 2, mode: "Mode 2", title: "Dynamic Assessment Engine", description: "Automatically generate balanced question papers and interactive quizzes.", image: Examination1 },
  { id: 3, mode: "Mode 3", title: "Smart Scheduling System", description: "Set date & time for exams with duration calculation and unique Exam IDs.", image: Examination1 },
  { id: 4, mode: "Mode 4", title: "Personalized Learning Paths", description: "Every student receives a unique learning journey based on their pace.", image: Examination1 },
  { id: 5, mode: "Mode 5", title: "Real-time Progress Analytics", description: "Comprehensive dashboards for educators to monitor engagement.", image: Examination1 },
];

const EdInaiPowerfulLearning = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-black py-12 px-4 relative">
      <div className="max-w-5xl mx-auto">

        {/* Header - Sticky */}
        <div className="sticky top-20 text-center mb-24 z-0">
          <h1 className="text-white h1 mb-6">
            Powerful Learning Modes for Every Student
          </h1>
          <h2 className="text-gray-400 h2 ">
            Different ways to learn, one powerful platform
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col items-center">
          {learningModes.map((mode, index) => (
            <div
              key={mode.id}
              className="powerful-card sticky w-full rounded-[32px] border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.9)] overflow-hidden bg-[#0c0c0c]"
              style={{
                top: `${240 + (index * 12)}px`, // Card position when sticky
                zIndex: index + 1,
                // Har card ke beech mein scroll distance:
                // Isko 40vh ya 50vh karne se speed control hogi
                marginBottom: index === learningModes.length - 1 ? "0px" : "50vh", 
              }}
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 min-h-[400px] md:h-[500px]">
                
                {/* Left Content */}
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 mb-6 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                      {mode.mode}
                    </span>
                  </div>
                  <h2 className="text-white h2 mb-6">
                    {mode.title}
                  </h2>
                  <p className="text-gray-400 p leading-relaxed max-w-md">
                    {mode.description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
                    <img
                      src={mode.image}
                      alt={mode.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Ye spacer ab chota hai taaki last card ke baad jaldi scroll ho jaye */}
          <div className="h-[30vh] w-full" /> 
        </div>
      </div>
    </section>
  );
};

export default EdInaiPowerfulLearning;