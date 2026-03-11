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
    description: "Attend real-time AI-powered classes where students can interact, ask questions, and learn through visual explanations. Lessons are personalized to match the student’s level, helping improve understanding and engagement.", 
    image: PowerfulSection1 
  },
  { 
    id: 2, 
    mode: "Mode 02", 
    title: "Recorded Revisions", 
    description: "Access recorded lectures anytime to revise topics at your own pace. This mode helps students review concepts, strengthen weak areas, and prepare better for exams.", 
    image: PowerfulSection2 
  },
  { 
    id: 3, 
    mode: "Mode 03", 
    title: "Interactive Quizzes", 
    description: "Practice with AI-generated quizzes designed to test understanding. Students receive instant feedback, performance insights, and guidance on areas that need improvement.", 
    image: PowerfulSection3 
  },
  { 
    id: 4, 
    mode: "Mode 04", 
    title: "AI Exam & Mock Test Mode", 
    description: "Full-length AI-generated exams, Competitive exam simulation, Hybrid question formats, Instant result & analytics, Smart performance tracking.", 
    image: PowerfulSection4 
  },
];

const EdInaiPowerfulLearning = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    // Media Query for Responsive behavior
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
          start: `top 250px`, // Desktop par thoda niche se start
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
          }
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      // --- MOBILE LOGIC ---
      // Mobile par Header ko pin nahi karte taaki scrolling space mile
      
      cardsRef.current.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: `top 120px`, // Mobile Navbar ke just niche
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
          }
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-black py-9 md:py-12 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Z-index is kept lower than cards for stacking */}
        <div ref={headerRef} className="text-center z-10 relative mb-12 md:mb-20">
          <h1 className="h1 mb-4 text-white ">
            Powerful Learning Modes for Every Student
          </h1>
          <h2 className="h2">
            Different ways to learn, one powerful platform
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative flex flex-col items-center gap-[15vh] md:gap-[30vh]">
          {learningModes.map((mode, index) => (
            <div
              key={mode.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="w-full rounded-[24px] md:rounded-[32px] border border-white/10 shadow-[0_-20px_40px_rgba(0,0,0,0.7)] overflow-hidden bg-[#0c0c0c] will-change-transform"
              style={{
                zIndex: index + 20, // Taaki cards header (z-10) ke upar aayein
              }}
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-black p-6 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[400px] md:min-h-[450px]">
                
                {/* Content */}
                <div className="flex-1 text-left order-2 md:order-1">
                  <div className="inline-block px-3 py-1 mb-4 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-blue-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                      {mode.mode}
                    </span>
                  </div>
                  <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
                    {mode.title}
                  </h2>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    {mode.description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 w-full order-1 md:order-2">
                  <div className="  bg-black aspect-[4/3] md:aspect-auto md:h-[350px] shadow-2xl">
                    <img
                      src={mode.image}
                      alt={mode.title}
                      className="w-full h-full rounded-xl overflow-hidden object-cover"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Spacer: It keeps the last card pinned for a while before scrolling away */}
        <div className="h-[20vh] md:h-[40vh]" /> 
      </div>
    </section>
  );
};

export default EdInaiPowerfulLearning;