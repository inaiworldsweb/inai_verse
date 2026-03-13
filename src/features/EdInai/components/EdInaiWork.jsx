import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Register Institution",
    desc: "Onboard your school to the ecosystem.",
  },
  {
    number: "02",
    title: "Upload Academic Content",
    desc: "Add your curriculum for AI processing.",
  },
  {
    number: "03",
    title: "Generate AI Lectures & Question Papers",
    desc: "Virtual models conduct live sessions and create assessments.",
  },
  {
    number: "04",
    title: "Schedule Classes & Exams",
    desc: "Automate scheduling of papers and lessons.",
  },
  {
    number: "05",
    title: "Activate AI Teaching & Assessments",
    desc: "Launch AI-led teaching and testing instantly.",
  },
];

const EdInaiWork = ({ id }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // mm.add() se hum define karte hain ki animation sirf desktop par chale
      let mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        let sections = gsap.utils.toArray(".step-card");

        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top 0%",
            end: "+=3000",
          },
        });
      });

      return () => mm.revert(); // Cleanup on unmount
    },
    { scope: containerRef }
  );

  return (
    <section
      id={id}
      ref={containerRef}
      // Mobile par 'h-auto' (vertical scroll), Desktop par 'h-screen' (pinning)
      className="w-full md:h-screen h-auto overflow-x-hidden flex flex-col justify-start md:justify-center relative bg-black text-white py-20 md:py-0"
    >
      <div className="max-w-6xl mx-auto w-full px-6 flex-shrink-0 pt-10 md:pt-20 z-10">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="h1 mb-3">
            How the <span className="text-gray-500">edInai Platform Works</span>
          </h1>
          <h2 className="h2 mb-4 text-xl md:text-2xl">Simple, Smart & Scalable Workflow</h2>
          <div className="w-24 h-1 bg-[#ccc] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Horizontal Container (Desktop) / Vertical Column (Mobile) */}
      <div className="flex items-center h-full w-full">
        <div
          className="flex flex-col md:flex-row gap-16 md:gap-32 px-10 md:px-[20vw] relative h-full items-center w-full"
        >
          {/* Central Horizontal Line - Hidden on Mobile */}
          <div className="absolute left-0 right-0 top-1/2 w-[200vw] h-[1px] bg-white/5 hidden md:block -translate-y-1/2"></div>

          {steps.map((step, index) => {
            const isEven = (index + 1) % 2 === 0;

            return (
              <div
                key={index}
                className="step-card flex-shrink-0 w-full md:w-[400px] flex flex-col justify-center"
              >
                {/* Mobile par hum margin-top reset kar denge (md: logic use karke) */}
                <div
                  className={`relative flex flex-col w-full ${
                    isEven ? "md:mt-64 mt-0" : "md:-mt-60 mt-0"
                  }`}
                >
                  {/* Large Ghost Number */}
                  <span className="absolute -top-12 md:-top-16 left-0 md:left-15 text-[60px] md:text-[100px] font-black text-white/20 md:text-white/[0.09] select-none z-0">
                    {step.number}
                  </span>

                  {/* Icon Box */}
                  <div className="w-12 h-12 md:w-15 md:h-15 mb-6 md:mb-8 border border-[#ccc]/30 bg-[#ccc]/5 rounded-2xl flex items-center justify-center z-10 backdrop-blur-sm">
                    <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#ccc] rounded-lg rotate-45 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ccc] rounded-full shadow-[0_0_10px_#ccc]"></div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 pl-6 border-l-2 border-[#ccc]">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{step.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EdInaiWork;