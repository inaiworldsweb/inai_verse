import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PowerfulSection1 from "../../../assets/EdInai_imgs/PowerfulSection1.png";
import PowerfulSection2 from "../../../assets/EdInai_imgs/PowerfulSection2.png";
import PowerfulSection3 from "../../../assets/EdInai_imgs/PowerfulSection3.png";
import PowerfulSection4 from "../../../assets/EdInai_imgs/PowerfulSection4.png";

gsap.registerPlugin(ScrollTrigger);

const learningModes = [
  {
    id: 1,
    mode: "Mode 01",
    title: "Live AI Lectures",
    description: "Attend real-time AI-powered classes where students can interact, ask questions, and learn through visual explanations.",
    image: PowerfulSection1,
  },
  {
    id: 2,
    mode: "Mode 02",
    title: "Recorded Revisions",
    description: "Access recorded lectures anytime to revise topics at your own pace. Review concepts and strengthen weak areas.",
    image: PowerfulSection2,
  },
  {
    id: 3,
    mode: "Mode 03",
    title: "Interactive Quizzes",
    description: "Practice with AI-generated quizzes designed to test understanding with instant feedback and insights.",
    image: PowerfulSection3,
  },
  {
    id: 4,
    mode: "Mode 04",
    title: "AI Exam & Mock Test",
    description: "Full-length AI-generated exams, competitive simulation, and smart performance tracking for better results.",
    image: PowerfulSection4,
  },
];

const EdInaiPowerfulLearning = ({ id }) => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Pinned Header
        ScrollTrigger.create({
          trigger: headerRef.current,
          start: "top 120px", // Pushed header down slightly
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        cardsRef.current.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top 280px`, // Increased from 200px to move card down
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              if (index < cardsRef.current.length - 1) {
                gsap.set(card, {
                  scale: 1 - self.progress * 0.05,
                  opacity: 1 - self.progress * 0.5,
                });
              }
            },
          });
        });
      });

      mm.add("(max-width: 767px)", () => {
        cardsRef.current.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top 140px`, // Increased from 100px for mobile
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              if (index < cardsRef.current.length - 1) {
                gsap.set(card, {
                  scale: 1 - self.progress * 0.03,
                  opacity: 1 - self.progress * 0.3,
                });
              }
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id={id}
      className="w-full bg-black pb-18 pt-12 md:pb-66 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center z-10 relative mb-16 md:mb-24">
          <h1 className="h1 mb-3 text-white">Powerful Learning Modes for Every Student</h1>
          <p className="h2 text-gray-400">Different ways to learn, one powerful platform</p>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col items-center gap-[10vh] md:gap-32">
          {learningModes.map((mode, index) => (
            <div
              key={mode.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full rounded-[7px] md:rounded-[10px] border border-white/10 overflow-hidden bg-[#0c0c0c] will-change-transform"
              style={{ zIndex: index + 20 }}
            >
              <div className="bg-gradient-to-br from-[#151515] to-black flex flex-col md:flex-row items-stretch min-h-[350px] md:h-[400px]">
                {/* Content */}
                <div className="w-full md:w-[42%] p-5 md:p-2 md:ps-12 lg:p-12 flex flex-col justify-center order-2 md:order-1">
                  <div className="inline-block w-fit px-4 py-1 mb-4 bg-white/5 border border-white/10 rounded-[7px] md:rounded-[10px]">
                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{mode.mode}</span>
                  </div>
                  <h2 className="text-white text-2xl w-[390px] md:text-3xl lg:text-4xl font-bold mb-4">{mode.title}</h2>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">{mode.description}</p>
                </div>

                {/* Image */}
                <div className="w-full md:w-[50%] md:ml-40 relative overflow-hidden order-1 md:order-2 h-56 md:h-auto">
                  <img src={mode.image} alt={mode.title} className="absolute inset-0 rounded-none w-full h-full object-cover transform scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none hidden md:block" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="h-[30vh] md:h-[50vh]" />
      </div>
    </section>
  );
};

export default EdInaiPowerfulLearning;
