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
    description:
      "Attend real-time AI-powered classes where students can interact, ask questions, and learn through visual explanations. Lessons are personalized to match the student’s level, helping improve understanding and engagement.",
    image: PowerfulSection1,
  },
  {
    id: 2,
    mode: "Mode 02",
    title: "Recorded Revisions",
    description:
      "Access recorded lectures anytime to revise topics at your own pace. This mode helps students review concepts, strengthen weak areas, and prepare better for exams.",
    image: PowerfulSection2,
  },
  {
    id: 3,
    mode: "Mode 03",
    title: "Interactive Quizzes",
    description:
      "Practice with AI-generated quizzes designed to test understanding. Students receive instant feedback, performance insights, and guidance on areas that need improvement.",
    image: PowerfulSection3,
  },
  {
    id: 4,
    mode: "Mode 04",
    title: "AI Exam & Mock Test Mode",
    description:
      "Full-length AI-generated exams, Competitive exam simulation, Hybrid question formats, Instant result & analytics, Smart performance tracking.",
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
        // --- DESKTOP LOGIC ---
        ScrollTrigger.create({
          trigger: headerRef.current,
          start: "top 100px",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        cardsRef.current.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top 200px`, // 6xl width ke hisaab se space adjust kiya
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
        // --- MOBILE LOGIC ---
        cardsRef.current.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top 100px`,
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
      /* width ko w-full rakha hai taaki responsive rahe */
      className="w-full bg-black py-12 md:pb-56 relative overflow-hidden"
    >
      {/* Container को max-w-6xl किया गया है */}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center z-10 relative mb-16 md:mb-24"
        >
          <h1 className="h1 md:text-4xl lg:text-5xl mb-4 text-white">
            Powerful Learning Modes for Every Student
          </h1>
          <h2 className="h2 text-gray-400">Different ways to learn, one powerful platform</h2>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col items-center gap-[10vh] md:gap-40">
          {learningModes.map((mode, index) => (
            <div
              key={mode.id}
              ref={(el) => (cardsRef.current[index] = el)}
              /* Card width ab 6xl ke hisaab se stretch hogi */
              className="w-full rounded-[24px] md:rounded-[40px] border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] overflow-hidden bg-[#0c0c0c] will-change-transform"
              style={{
                zIndex: index + 20,
              }}
            >
              <div className="bg-gradient-to-br from-[#151515] to-black p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 min-h-[450px]">
                {/* Content */}
                <div className="flex-[1.2] text-left order-2 md:order-1">
                  <div className="inline-block px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
                      {mode.mode}
                    </span>
                  </div>
                  <h2 className="text-white h1 text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    {mode.title}
                  </h2>
                  <p className="text-gray-400 p text-base md:text-xl leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 w-full order-1 md:order-2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                    <img
                      src={mode.image}
                      alt={mode.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
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