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
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // 1. Pin the Header - Moved slightly lower for better spacing (80px instead of 40px)
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top 80px", 
      endTrigger: containerRef.current,
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
    });

    // 2. Pin and Stack the Cards
    const cards = cardsRef.current;
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        // Adjusted start position to sit perfectly below the new header position
        // Header (approx 200px) + Offset (80px) = 280px
        start: `top ${280 + (index * 10)}px`, 
        endTrigger: containerRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
            if (index < cards.length - 1) {
                gsap.set(card, { 
                    scale: 1 - (self.progress * 0.04),
                    opacity: 1 - (self.progress * 0.3)
                });
            }
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-black py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Changed mb-32 to mb-12 for less gap */}
        <div ref={headerRef} className="text-center  z-[100]  py-6">
          <h1 className="h1 font-bold mb-3 text-white">
            Powerful Learning Modes for Every Student
          </h1>
          <h2 className="text-gray-400 h2">
            Different ways to learn, one powerful platform
          </h2>
        </div>

        {/* Cards Container - Changed gap-[40vh] to gap-[20vh] for tighter scrolling */}
        <div className="relative flex flex-col items-center gap-[20vh]">
          {learningModes.map((mode, index) => (
            <div
              key={mode.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full rounded-[32px] border border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0c0c0c] will-change-transform"
              style={{
                zIndex: index + 1,
              }}
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-8 md:p-14 flex flex-col md:flex-row items-center gap-10 min-h-[400px]">
                
                {/* Left Content */}
                <div className="flex-1">
                  <div className="inline-block px-4 py-1 mb-4 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                      {mode.mode}
                    </span>
                  </div>
                  <h2 className="text-white text-3xl md:text-4xl font-bold mb-5">
                    {mode.title}
                  </h2>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md">
                    {mode.description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full">
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl">
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
        </div>
        
        {/* Spacer at bottom */}
        <div className="h-[40vh]" /> 
      </div>
    </section>
  );
};

export default EdInaiPowerfulLearning;