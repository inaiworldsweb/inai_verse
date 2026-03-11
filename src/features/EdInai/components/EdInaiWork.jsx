import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { number: 1, title: "Register Institution", position: "below" },
  { number: 2, title: "Upload Academic Content", position: "above" },
  { number: 3, title: "Generate AI Lectures & Question Papers", position: "below" },
  { number: 4, title: "Schedule Classes & Exams", position: "above" },
  { number: 5, title: "Activate AI Teaching & Assessments", position: "below" }
];

const EdInaiWork = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(lineRef.current, 
      { scaleX: 0, transformOrigin: "left center" },
      { 
        scaleX: 1, 
        duration: 2, 
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.from(".step-wrapper", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-black py-9 md:py-12 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-7 md:mb-17">
          <h1 className="mb-4 h1">
            How the Ed-INAI Platform Works
          </h1>
          <h2 className='h2'>
            Simple, Smart & Scalable Workflow
          </h2>
        </div>

        {/* Timeline Desktop */}
        <div className="relative h-[400px] hidden lg:block">
          
          {/* Main Horizontal Line - Positioned to perfectly intersect vertical lines */}
          <div 
            ref={lineRef}
            className="absolute w-full h-[1px] bg-white/20 top-1/2 left-0 -translate-y-1/2 z-0"
          />

          <div className="flex justify-between w-full h-full relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="step-wrapper relative flex flex-col items-center w-1/5">
                
                {step.position === "above" ? (
                  /* ABOVE: Content -> Circle -> Vertical Line (touches horizontal line) */
                  <div className="absolute bottom-1/2 flex flex-col items-center">
                    <h2 className=" h2 mb-8 text-center max-w-[200px] ">
                      {step.title}
                    </h2>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black font-black text-2xl z-20 shadow-xl">
                      {step.number}
                    </div>
                    {/* Connector Line pointing DOWN to the horizontal line */}
                    <div className="w-[1px] h-14 bg-white/20"></div>
                  </div>
                ) : (
                  /* BELOW: Vertical Line (starts from horizontal line) -> Circle -> Content */
                  <div className="absolute top-1/2 flex flex-col items-center">
                    {/* Connector Line pointing UP to the horizontal line */}
                    <div className="w-[1px] h-14 bg-white/20"></div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black font-black text-2xl z-20 shadow-xl">
                      {step.number}
                    </div>
                    <h2 className=" h2 mt-8 text-center max-w-[250px] leading-tight">
                      {step.title}
                    </h2>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden flex flex-col md:space-y-20 space-y-10 border-l border-white/10 ml-6 pl-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="absolute md:-left-[61px] -left-[55px] top-0 md:w-11 md:h-11 w-7 h-7 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">
                {step.number}
              </div>
              <h2 className="text-white !text-[16px] h2 font-bold">{step.title}</h2>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EdInaiWork;