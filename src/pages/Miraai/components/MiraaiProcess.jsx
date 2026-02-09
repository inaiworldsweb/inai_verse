import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Import local assets
import step1Img from '../../../assets/final/inside edinai portal - create your admin profile.png';
import step2Img from '../../../assets/final/inside the ed inai- add your academic structure.png';
import step3Img from '../../../assets/final/inside the ed inai - schedule sessions.png';
import step4Img from '../../../assets/final/live lecture via ai.png';

const MiraaiProcess = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
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
        <section ref={sectionRef} className="py-32 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                <div className="text-center mb-40">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black mb-8 tracking-tighter"
                    >
                        Here's Exactly How We Work With You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/40 text-base md:text-xl max-w-3xl mx-auto font-medium"
                    >
                        No Confusion. No Complexity. Just A Simple 4-Step Process From Idea To Delivery.
                    </motion.p>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[80px] -translate-x-1/2 hidden md:block z-10 overflow-visible">
                        <svg className="w-full h-full" viewBox="0 0 80 1000" preserveAspectRatio="none" fill="none">
                            <path d="M38 0V950 C38 980 10 1000 0 1000" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                            <path d="M42 0V950 C42 980 70 1000 80 1000" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
                            <motion.path d="M38 0V950 C38 980 10 1000 0 1000" stroke="url(#line-gradient)" strokeWidth="2" strokeLinecap="round" style={{ pathLength: scaleY }} />
                            <motion.path d="M42 0V950 C42 980 70 1000 80 1000" stroke="url(#line-gradient)" strokeWidth="2" strokeLinecap="round" style={{ pathLength: scaleY }} />
                            <defs>
                                <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#4F46E5" />
                                    <stop offset="50%" stopColor="#8B5CF6" />
                                    <stop offset="100%" stopColor="#fff" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="space-y-40 md:space-y-20 relative px-4 md:px-0">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between md:py-32 ${step.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, x: step.side === 'left' ? -100 : 100 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full md:w-[42%] aspect-square rounded-[2rem] overflow-hidden bg-[#0A0A0A] border-[1px] border-white/5 relative group"
                                >
                                    <img src={step.image} alt={step.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
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
