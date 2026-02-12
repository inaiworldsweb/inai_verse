import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Import local assets
import step1Img from '../../../assets/images/Miraai/Input Your Vision.png';
import step2Img from '../../../assets/images/Miraai/Customize & Brand.png';
import step3Img from  '../../../assets/images/Miraai/AI Generation.png';
import step4Img from '../../../assets/images/Miraai/Review & Deploy.png';

// Border Animation Component
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
    const [hoveredIndex, setHoveredIndex] = useState(null);
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
        <section ref={sectionRef} className="py-8 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[40px] font-black mb-6 tracking-tighter"
                    >
                        Here's Exactly How We Work With You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/40 text-[25px] max-w-3xl mx-auto font-medium"
                    >
                        No Confusion. No Complexity. Just A Simple 4-Step Process From Idea To Delivery.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Supporting Line SVG */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 hidden md:block z-10 overflow-visible">
                        <svg className="w-full h-full" viewBox="0 0 4 1000" preserveAspectRatio="none" fill="none">
                            {/* Base Line (Low Opacity) */}
                            <line x1="2" y1="0" x2="2" y2="1000" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                            {/* Active Progress Line (White) */}
                            <motion.line
                                x1="2" y1="0" x2="2" y2="1000"
                                stroke="#fff"
                                strokeWidth="4"
                                strokeLinecap="round"
                                style={{ pathLength: scaleY }}
                            />
                            {/* Glow effect for the active tip */}
                            <motion.circle
                                cx="2"
                                cy="0"
                                r="4"
                                fill="#fff"
                                style={{
                                    translateY: useTransform(scaleY, [0, 1], [0, 1000]),
                                    filter: "blur(4px)"
                                }}
                            />
                        </svg>
                    </div>

                    <div className="space-y-12 md:space-y-4 relative px-4 md:px-0">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between md:py-12 ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, x: step.side === 'left' ? -100 : 100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full md:w-[42%] aspect-square rounded-[2rem] overflow-hidden bg-[#0A0A0A] border-[1px] border-white/5 relative group p-[2px]"
                                >
                                    <div className="
                                        relative z-10
                                        bg-[#0A0A0A]
                                        rounded-[calc(2rem-2px)]
                                        h-full w-full
                                        overflow-hidden
                                    ">
                                        <img 
                                            src={step.image} 
                                            alt={step.title} 
                                            className="w-full h-full object-cover opacity-60 relative z-10" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10" />

                                    </div>

                                    <BorderAnimation />
                                </motion.div>

                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                                    <motion.div
                                        initial={{ scale: 0, backgroundColor: "#000", color: "#444" }}
                                        whileInView={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                                        viewport={{ margin: "-20%" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="w-14 h-14 rounded-full border-4 border-black flex items-center justify-center font-black text-xl shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                                    >
                                        {step.number}
                                    </motion.div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className="w-full md:w-[42%] text-center md:text-left pt-16 md:pt-0"
                                >
                                    <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-[0.4em] font-black mb-8">
                                        Step 0{step.number}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight text-white">{step.title}</h3>
                                    <h4 className="text-white/40 font-bold mb-10 tracking-[0.15em] uppercase text-xs md:text-sm">{step.subtitle}</h4>
                                    <p className="text-white/30 leading-relaxed text-base md:text-lg font-medium max-w-xl">{step.description}</p>
                                </motion.div>

                                <div className="md:hidden absolute -top-10 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-black text-xl shadow-2xl border-4 border-black">
                                    {step.number}
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