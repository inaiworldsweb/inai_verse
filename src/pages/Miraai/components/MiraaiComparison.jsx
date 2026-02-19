import React from 'react';
import { motion } from 'framer-motion';

const MiraaiComparison = () => {
    const comparisonData = [
        {
            area: "Content Creation",
            diy: "Limited tools and skills",
            miraai: "Advanced AI + Professional Experts"
        },
        {
            area: "Design Quality",
            diy: "Basic and inconsistent",
            miraai: "Premium, brand-focused designs"
        },
        {
            area: "Production Speed",
            diy: "Slow and manual",
            miraai: "Fast and AI-powered delivery"
        },
        {
            area: "Cost Efficiency",
            diy: "Trial and error approach",
            miraai: "Optimized and affordable pricing"
        },
        {
            area: "Creative Strategy",
            diy: "Lacking clear strategy",
            miraai: "Data-driven planning"
        },
        {
            area: "Editing & Effects",
            diy: "Basic editing software",
            miraai: "Professional-grade editing tools"
        },
        {
            area: "Scalability",
            diy: "Hard to scale campaigns",
            miraai: "Easily scalable production"
        },
        {
            area: "Final Output",
            diy: "Average results",
            miraai: "High-impact, conversion-focused output"
        }
    ];

    return (
        <section className="py-16 bg-black">
            <div className="max-w-[1400px] h-screen mx-auto px-4 sm:px-6 lg:px-20">

                {/* Headers */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[25px] md:text-[40px] text-white mb-3 md:mb-4 tracking-tight"
                    >
                        The Real Problem We Solve
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-[15px] md:text-[25px] mt-0"
                    >
                        Do It Yourself vs Miraai Expert Team
                    </motion.p>
                </div>

                {/* Desktop View (Modular Grid) */}
                <div className="hidden lg:block">
                    <div className="w-full">
                        <div className="w-full min-w-0 flex flex-col items-center">
                            <div className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-4 w-full max-w-[1100px] mb-5 min-w-0">
                                <div className="bg-white text-black py-4 rounded-xl flex items-center justify-start px-6 text-sm font-medium min-h-[56px] shadow-[0_12px_28px_rgba(0,0,0,0.6)] border border-black/10 min-w-0 whitespace-normal">
                                    Area
                                </div>
                                <div className="bg-white text-black py-4 rounded-xl flex items-center justify-center text-sm font-medium min-h-[56px] shadow-[0_12px_28px_rgba(0,0,0,0.6)] border border-black/10 min-w-0 whitespace-normal text-center px-4">
                                    Do It Yourself
                                </div>
                                <div className="bg-white text-black py-4 rounded-xl flex items-center justify-center text-sm font-medium min-h-[56px] shadow-[0_12px_28px_rgba(0,0,0,0.6)] border border-black/10 min-w-0 whitespace-normal text-center px-4">
                                    Miraai Expert Team
                                </div>
                            </div>

                            <div className="w-full max-w-[1100px] space-y-3 pb-1">
                                {comparisonData.map((row, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="grid grid-cols-[1fr_1.5fr_1.5fr] gap-4 min-w-0"
                                    >
                                        <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-lg flex items-center justify-start text-white text-sm min-h-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-colors duration-200 hover:bg-white/10 min-w-0 whitespace-normal">
                                            {row.area}
                                        </div>

                                        <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-lg flex items-center gap-3 text-white text-sm min-h-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group transition-colors duration-200 hover:bg-white/10 hover:border-red-500/20 min-w-0 whitespace-normal leading-snug">
                                            <span className="flex-shrink-0 text-red-500/60 group-hover:text-red-500 transition-colors">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </span>
                                            {row.diy}
                                        </div>

                                        <div className="bg-[#0A0A0A] border border-white/5 p-4 rounded-lg flex items-center gap-3 text-white text-sm min-h-[60px] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group transition-colors duration-200 hover:bg-white/10 hover:border-blue-500/30 min-w-0 whitespace-normal leading-snug">
                                            <span className="flex-shrink-0 text-blue-500/90 group-hover:text-blue-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                                </svg>
                                            </span>
                                            {row.miraai}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile View (Sticky Card Stack) */}
                <div className="flex lg:hidden flex-col max-w-md mx-auto relative">
                    {comparisonData.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                top: `${80 + (index * 24)}px`,
                                zIndex: index + 10
                            }}
                            className="sticky bg-[#0E0E0E] border border-white/10 p-10 md:p-12 rounded-[1.75rem] flex flex-col items-center text-center space-y-8 shadow-2xl mb-12"
                        >
                            <div className="space-y-2">
                                <h3 className="text-white text-2xl md:text-3xl tracking-tight">{row.area}</h3>
                                <div className="h-1 w-12 bg-violet-500/50 mx-auto rounded-full" />
                            </div>

                            <div className="w-full space-y-6">
                                <div className="flex items-center gap-4 text-white text-sm md:text-base text-left bg-red-500/5 p-4 rounded-xl border border-red-500/10 transition-colors duration-200 hover:bg-white/10 active:bg-white/15">
                                    <span className="flex-shrink-0 text-red-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                    {row.diy}
                                </div>
                                <div className="flex items-center gap-4 text-white text-sm md:text-base text-left bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 transition-colors duration-200 hover:bg-white/10 active:bg-white/15">
                                    <span className="flex-shrink-0 text-blue-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                        </svg>
                                    </span>
                                    {row.miraai}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiraaiComparison;
