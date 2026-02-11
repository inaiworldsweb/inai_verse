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
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">

                {/* Headers */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[40px] font-bold text-white mb-6 tracking-tight"
                    >
                        The Real Problem We Solve
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-[25px] font-medium"
                    >
                        Do It Yourself vs Miraai Expert Team
                    </motion.p>
                </div>

                {/* Desktop View (Modular Grid) */}
                <div className="hidden lg:flex flex-col items-center">
                    {/* Modular Header Row */}
                    <div className="grid grid-cols-3 gap-6 w-full max-w-6xl mb-6">
                        <div className="bg-white text-black py-5 rounded-xl flex items-center justify-center font-bold text-lg shadow-xl shadow-white/5">
                            Area
                        </div>
                        <div className="bg-white text-black py-5 rounded-xl flex items-center justify-center font-bold text-lg shadow-xl shadow-white/5">
                            Do It Yourself
                        </div>
                        <div className="bg-white text-black py-5 rounded-xl flex items-center justify-center font-bold text-lg shadow-xl shadow-white/5">
                            Miraai Expert Team
                        </div>
                    </div>

                    {/* Modular Rows */}
                    <div className="w-full max-w-6xl space-y-4">
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="grid grid-cols-3 gap-6"
                            >
                                {/* Area Column */}
                                <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-xl flex items-center justify-start text-white font-bold text-base">
                                    {row.area}
                                </div>

                                {/* DIY Column */}
                                <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-xl flex items-center gap-4 text-white font-medium text-sm group hover:border-red-500/20 transition-all">
                                    <span className="flex-shrink-0 text-red-500/60 group-hover:text-red-500 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                    {row.diy}
                                </div>

                                {/* Miraai Column */}
                                <div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-xl flex items-center gap-4 text-white font-bold text-sm group hover:border-green-500/40 transition-all">
                                    <span className="flex-shrink-0 text-green-500/80 group-hover:text-green-500 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    {row.miraai}
                                </div>
                            </motion.div>
                        ))}
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
                            className="sticky bg-[#0E0E0E] border border-white/10 p-10 md:p-12 rounded-[2.5rem] flex flex-col items-center text-center space-y-8 shadow-2xl mb-12"
                        >
                            <div className="space-y-2">
                                <h3 className="text-white text-2xl md:text-3xl font-black tracking-tight">{row.area}</h3>
                                <div className="h-1 w-12 bg-violet-500/50 mx-auto rounded-full" />
                            </div>

                            <div className="w-full space-y-6">
                                <div className="flex items-center gap-4 text-white font-semibold text-sm md:text-base text-left bg-red-500/5 p-4 rounded-2xl border border-red-500/10">
                                    <span className="flex-shrink-0 text-red-500">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </span>
                                    {row.diy}
                                </div>
                                <div className="flex items-center gap-4 text-white font-bold text-sm md:text-base text-left bg-green-500/10 p-4 rounded-2xl border border-green-500/20">
                                    <span className="flex-shrink-0 text-green-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
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
