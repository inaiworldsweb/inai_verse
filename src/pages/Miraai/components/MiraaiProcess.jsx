import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Import local assets
import step1Img from '../../../assets/images/Miraai/Input Your Vision.png';
import step2Img from '../../../assets/images/Miraai/Customize & Brand.png';
import step3Img from '../../../assets/images/Miraai/AI Generation.png';
import step4Img from '../../../assets/images/Miraai/Review & Deploy.png';

const BorderAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 rounded-[2rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="absolute inset-0">
        <div className="
          absolute inset-[-100%]
          bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,white_360deg)]
          group-hover:animate-[spin_3s_linear_infinite]
          rounded-[2rem]
        "></div>
      </div>
    </div>
  );
};

const MiraaiProcess = ({ containerRef }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    container: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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

  return (
    <section ref={sectionRef} className="py-20 bg-black overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[25px] md:text-[40px] mb-6 tracking-tighter text-white"
          >
            Here's Exactly How We Work With You
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/40 text-[16px] md:text-[25px] max-w-3xl mx-auto font-medium"
          >
            No Confusion. No Complexity. Just A Simple 4-Step Process From Idea To Delivery.
          </motion.p>
        </div>

        <div className="relative">
          {/* Progress Line (Desktop Only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 hidden md:block z-10 overflow-visible">
            <svg className="w-full h-full" viewBox="0 0 4 1000" preserveAspectRatio="none" fill="none">
              <line x1="2" y1="0" x2="2" y2="1000" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
              <motion.line
                x1="2" y1="0" x2="2" y2="1000"
                stroke="#fff"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength: scaleY }}
              />
            </svg>
          </div>

          <div className="space-y-20 md:space-y-32 relative">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>

                {/* 1. Number Circle (Mobile: Top, Desktop: Center) */}
                <div className="relative md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-30 mb-8 md:mb-0">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl shadow-[0_0_30px_rgba(255,255,255,0.2)] border-4 border-black"
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* 2. Text Content (Mobile: Middle, Desktop: Side) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-[42%] text-center md:text-left order-2 md:order-none"
                >

                  <h3 className="text-[23px] md:text-[38px] mb-4 tracking-tight text-white leading-tight">
                    {step.title}
                  </h3>
                  <h4 className="text-white/40 mb-6 tracking-[0.15em] uppercase text-[13px] md:text-[18px]">
                    {step.subtitle}
                  </h4>
                  <p className="text-white/30 leading-relaxed text-base md:text-lg font-medium max-w-xl mx-auto md:mx-0 mb-8 md:mb-0">
                    {step.description}
                  </p>
                </motion.div>

                {/* 3. Image Card (Mobile: Bottom, Desktop: Opposite Side) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full md:w-[42%] aspect-video md:aspect-square rounded-[2rem] overflow-hidden bg-[#0A0A0A] border-[1px] border-white/5 relative group p-[2px] z-10 order-3 md:order-none"
                >
                  <div className="relative z-10 bg-[#0A0A0A] rounded-[calc(2rem-2px)] h-full w-full overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  </div>
                  <BorderAnimation />
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiraaiProcess;