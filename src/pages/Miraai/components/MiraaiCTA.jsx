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
            className="group bg-[#111111] p-10 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center relative overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-[#141414] hover:shadow-[0_22px_70px_rgba(0,0,0,0.55),0_0_0_1px_rgba(139,92,246,0.08),0_18px_60px_rgba(139,92,246,0.10)]"
        >
            {/* Glossy Brand Sweep Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-purple-500/15 via-purple-500/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 rounded-2xl flex items-center justify-center mb-8 border border-white/5 transition-transform duration-300 relative group-hover:scale-105">
                    {enhancedIcon}
                </div>
                <p className="text-white text-[15px] md:text-[25px] font-medium tracking-tight leading-relaxed">
                    {question}
                </p>
            </div>
        </motion.div>
    );
};

const MiraaiCTA = () => {
    return (
        <section style={{ fontFamily: 'Inter, sans-serif' }} className="py-8 px-4 sm:px-6 lg:px-20 bg-black">
            <div className="max-w-[1200px] mx-auto bg-[#050505] rounded-[4rem] p-8 md:p-12 border border-white/5 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[25px] md:text-[40px] font-black text-white mb-12 tracking-tight leading-tight"
                    >
                        Is Miraai Right for You? See If This <br className="hidden md:block" /> Sounds Familiar...
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 w-full">
                        <QuestionCard
                            index={0}
                            icon={
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            }
                            question="Do you need videos, images, or visual content for your business?"
                        />
                        <QuestionCard
                            index={1}
                            icon={
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            }
                            question="Are traditional production costs too high or timelines too slow?"
                        />
                        <QuestionCard
                            index={2}
                            icon={
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        className="mb-12"
                    >
                        <p className="text-[15px] md:text-[20px] text-white font-medium mb-2 opacity-80 uppercase tracking-widest">If you answered YES to any of these</p>
                        <h3 className="text-[25px] md:text-[40px] font-black text-white tracking-tighter">Miraai is for you.</h3>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="group relative overflow-hidden px-8 py-4 bg-white text-black text-[15px] font-black rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.1)] transition-all"
                    >
                        <span className="relative block h-[1.2em] overflow-hidden">
                            <span className="block transition-transform duration-300 group-hover:-translate-y-full">Get Started Now</span>
                            <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full">Get Started Now</span>
                        </span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default MiraaiCTA;
