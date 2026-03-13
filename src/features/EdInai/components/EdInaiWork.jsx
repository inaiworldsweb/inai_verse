import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: "01", title: "Register Institution", desc: "Onboard your school to the ecosystem." },
  { number: "02", title: "Upload Academic Content", desc: "Add your curriculum for AI processing." },
  { number: "03", title: "Generate AI Lectures & Question Papers", desc: "Virtual models conduct live sessions and create assessments." },
  { number: "04", title: "Schedule Classes & Exams", desc: "Automate scheduling of papers and lessons." },
  { number: "05", title: "Activate AI Teaching & Assessments", desc: "Launch AI-led teaching and testing instantly." }
];

const EdInaiWork = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useGSAP(() => {
    let sections = gsap.utils.toArray('.step-card');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top 0%", // Now it will stick exactly at the very top
        // The scroll distance determines how long the horizontal scroll lasts
        end: "+=3000"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full  h-screen overflow-hidden flex flex-col justify-center relative">
      <div className="max-w-6xl mx-auto w-full px-6 flex-shrink-0 pt-20 z-10">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="h1 mb-3">
            How the <span className="text-gray-500">Ed-INAI Platform Works</span>
          </h1>
          <h2 className='h2 mb-4'>
            Simple, Smart & Scalable Workflow
          </h2>
          <div className="w-24 h-1 bg-[#ccc] mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Horizontal Layout */}
      <div className="flex items-center h-full w-full">
        <div ref={scrollContainerRef} className="flex gap-10 md:gap-32 px-10 md:px-[20vw] relative h-full items-center">
          {/* Central Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 w-[200vw] h-[1px] bg-white/5 hidden md:block -translate-y-1/2"></div>

          {steps.map((step, index) => {
            const isEven = (index + 1) % 2 === 0;

            return (
              <div
                key={index}
                className="step-card flex-shrink-0 w-[80vw] md:w-[400px] flex flex-col justify-center"
              >
                <div className={`relative flex flex-col w-full ${isEven ? "md:mt-72 mt-20" : "md:-mt-72 -mt-20"}`}>

                  {/* Large Ghost Number */}
                  <span className="absolute -top-16 md:-top-16 left-4 text-[70px] md:text-[100px] font-black text-white/[0.10] select-none z-0">
                    {step.number}
                  </span>

                  {/* Icon Box */}
                  <div className="w-15 h-15 md:w-15 md:h-15 mb-8 border border-[#ccc]/30 bg-[#ccc]/5 rounded-2xl flex items-center justify-center z-10 backdrop-blur-sm">
                    <div className="w-10 h-10 border-2 border-[#ccc] rounded-lg rotate-45 flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#ccc] rounded-full shadow-[0_0_10px_#ccc]"></div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 pl-6 border-l-2 border-[#ccc]">
                    <h3 className="  h2  mb-3 ">
                      {step.title}
                    </h3>
                    <p className=" p ">
                      {step.desc}
                    </p>
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