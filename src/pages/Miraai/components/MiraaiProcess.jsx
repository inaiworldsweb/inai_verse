import React, { useRef, useState, useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images
import step1Img from "../../../assets/images/Miraai/Input Your Vision.png";
import step2Img from "../../../assets/images/Miraai/Customize & Brand.png";
import step3Img from "../../../assets/images/Miraai/AI Generation.png";
import step4Img from "../../../assets/images/Miraai/Review & Deploy.png";

/**
 * BorderAnimation - Performance Optimized Border
 * 
 * Uses GSAP for rotation to synchronize with the global ticker.
 * Pauses when not in view.
 */
const BorderAnimation = ({ isInView }) => {
  const borderRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
    tweenRef.current = gsap.to(borderRef.current, {
      rotate: 360,
      duration: 4,
      ease: "none",
      repeat: -1,
      force3D: true
    });
  }, { scope: borderRef });

  useEffect(() => {
    if (tweenRef.current) {
      if (isInView) tweenRef.current.play();
      else tweenRef.current.pause();
    }
  }, [isInView]);

  return (
    <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-0 opacity-100 transition-opacity duration-700">
      <div
        ref={borderRef}
        className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,white_360deg)]"
      />
    </div>
  );
};


// ================= MAIN COMPONENT =================

const MiraaiProcess = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const steps = [
    {
      number: 1,
      title: "Input Your Vision",
      subtitle: "Start With A Script Or Concept",
      description: "Paste Your Script, Upload A Brief, Or Use Our AI Assistant To Create One From Scratch. Miraai Breaks It Into Scenes Automatically And Suggests Visual Treatments.",
      image: step1Img,
      side: "left"
    },
    {
      number: 2,
      title: "Customize & Brand",
      subtitle: "Make It Uniquely Yours",
      description: "Select Templates, Customize Colors, Fonts, And Visual Styles To Match Your Brand Guidelines. Upload Logos, Set Tone Preferences, Choose Virtual Characters.",
      image: step2Img,
      side: "right"
    },
    {
      number: 3,
      title: "AI Generation",
      subtitle: "Let AI Work Its Magic",
      description: "Miraai Generates Your Video With Professional Editing, Effects, Color Grading, And Audio. Localize Into Multiple Languages With One Click. Wait Minutes, Not Weeks.",
      image: step3Img,
      side: "left"
    },
    {
      number: 4,
      title: "Review & Deploy",
      subtitle: "Refine And Publish",
      description: "Review Your Content, Make Any Final Adjustments, Get Team Approvals, And Export In Your Preferred Formats. Deploy Across All Channels Instantly.",
      image: step4Img,
      side: "right"
    }
  ];

  useGSAP(() => {
    // 1. Vertical Line Progress
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "play pause resume reverse"
        }
      }
    );

    // 2. Individual Steps Animation
    steps.forEach((_, index) => {
      const stepEl = `.step-container-${index}`;
      const textEl = `${stepEl} .step-text`;
      const imageEl = `${stepEl} .step-image`;
      const iconEl = `${stepEl} .step-icon`;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stepEl,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(iconEl, { scale: 0 }, { scale: 1, duration: 0.5, ease: "back.out(1.7)" })
        .fromTo(textEl, { opacity: 0, x: index % 2 === 0 ? -30 : 30 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.3")
        .fromTo(imageEl, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.6");
    });

    // Visibility Observer
    const obs = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.05 });
    obs.observe(sectionRef.current);

    return () => obs.disconnect();

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-10 md:py-16  px-6 sm:px-6  bg-black overflow-hidden relative"
    >
      <div className="max-w-[1400px] mx-auto ">

        {/* ================= HEADING ================= */}
        <div className="text-center">
          <h2 className=" text-[1.5625rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-white tracking-[1px] [font-stretch:700%]">
            Here's Exactly How We Work With You
          </h2>

          <p className=" mb-10 text-[#ccc] text-[0.875rem] md:text-[1rem] lg:text-[1.3125rem] w-full mx-auto">
            No Confusion. No Complexity. Just A Simple 4-Step Process From Idea To Delivery.
          </p>
        </div>


        {/* ================= PROCESS AREA ================= */}
        <div className="relative">

          {/* CENTER VERTICAL LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 hidden md:block z-10 origin-top">
            <div ref={lineRef} className="w-full h-full bg-white rounded-full origin-top scale-y-0" style={{ boxShadow: '0 0 15px rgba(255,255,255,0.3)' }} />
          </div>


          {/* ================= STEPS ================= */}
          <div className="space-y-16 md:space-y-20 lg:space-y-32 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-container-${index} relative flex flex-col md:flex-row items-center justify-between ${step.side === "right" ? "md:flex-row-reverse" : ""
                  }`}
              >

                {/* NUMBER CIRCLE */}
                <div className="step-icon relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 opacity-100 scale-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center font-black text-lg md:text-xl border-4 border-black">
                    {step.number}
                  </div>
                </div>

                {/* TEXT */}
                <div className="step-text w-full md:w-[42%] text-center md:text-left opacity-0">
                  <h3 className="text-[1.25rem] md:text-[1.75rem] lg:text-[2.5rem] font-bold text-white leading-tight tracking-[1px] [font-stretch:700%]">
                    {step.title}
                  </h3>

                  <h4 className="font-semibold mb-2 uppercase text-[0.875rem] md:text-[1rem] lg:text-[1.3125rem]">
                    {step.subtitle}
                  </h4>

                  <p className="text-[#ccc] leading-relaxed text-[0.75rem] md:text-[0.875rem] lg:text-[1.125rem]">
                    {step.description}
                  </p>
                </div>

                {/* IMAGE CARD */}
                <div className="step-image relative w-full md:w-[42%] aspect-video md:aspect-square rounded-[2rem] overflow-hidden p-[2px] opacity-0 scale-90">

                  {/* Animated Border */}
                  <BorderAnimation isInView={isInView} />

                  {/* Card Content */}
                  <div className="relative z-10 bg-[#0A0A0A] rounded-[calc(2rem-2px)] h-full w-full overflow-hidden border border-white/5">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-2xl opacity-60"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiraaiProcess;