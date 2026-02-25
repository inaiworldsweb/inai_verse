import React from 'react';
import { motion } from 'framer-motion';

const QuestionCard = ({ icon, question, index }) => {
    const enhancedIcon = React.isValidElement(icon)
        ? React.cloneElement(icon, {
            className: `${icon.props.className ?? ''} transform transition-all duration-300 group-hover:text-white/70 group-hover:scale-110 group-hover:-rotate-6`.trim(),
        })
        : icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="group bg-[#111111] w-full min-h-[220px] mx-auto p-6 md:p-8 rounded-[2rem] flex flex-col items-center justify-center text-center relative overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#161616] hover:shadow-[0_22px_70px_rgba(0,0,0,0.55)]"
        >
            <div className="absolute inset-0 pointer-events-none opacity-70 blur-2xl">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18)_0%,transparent_55%)]" />
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_70%_75%,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
            </div>

            {/* Glossy Brand Sweep Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div style={{ transform: "translateZ(50px)" }} className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-5 border border-white/5 transition-transform duration-300 relative group-hover:scale-105">
                    {enhancedIcon}
                </div>
                <p className="text-white/90 text-[14px] md:text-[15px] tracking-tight leading-relaxed">
                    {question}
                </p>
            </div>
        </motion.div>
    );
};

const MiraaiCTA = () => {
    return (
        <section style={{ fontFamily: 'Inter, sans-serif' }} className="py-20 px-4 sm:px-6 lg:px-20 bg-black flex justify-center">
            <div className="w-full max-w-6xl bg-[#050505] rounded-[3rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[420px] bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.18)_0%,transparent_72%)] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[25px] md:text-[40px] text-white mb-12 tracking-tight leading-tight"
                    >
                        Is Miraai Right for You? See If This <br className="hidden md:block" /> Sounds Familiar...
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full">
                        <QuestionCard
                            index={0}
                            icon={
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            }
                            question="Do you need videos, images, or visual content for your business?"
                        />
                        <QuestionCard
                            index={1}
                            icon={
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            question="Are traditional production costs too high or timelines too slow?"
                        />
                        <QuestionCard
                            index={2}
                            icon={
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            }
                            question="Do you want professional quality without technical complexity?"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mb-6"
                    >
                        <p className="text-[15px] md:text-[20px] text-white mb-2 opacity-80 tracking-widest">If you answered YES to any of these</p>
                        <h3 className="text-[25px] md:text-[40px] text-white tracking-tighter">Miraai is for you.</h3>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="group relative overflow-hidden px-8 py-4 bg-white text-black text-[15px] rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all"
                    >
                        <span className="relative inline-block overflow-hidden align-top">
                            <span className="invisible">Get Started Now</span>
                            <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full font-inter">
                                Get Started Now
                            </span>
                            <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 font-inter">
                                Get Started Now
                            </span>
                        </span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default MiraaiCTA;
