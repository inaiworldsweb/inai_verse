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
            diy: "No clear strategy",
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
        <section className="py-32 bg-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center flex flex-col items-center">

                {/* Headers */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        The Real Problem We Solve
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-lg md:text-xl font-medium"
                    >
                        Do It Yourself vs Miraai Expert Team
                    </motion.p>
                </div>

                {/* Table Header Row */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-6xl mb-8">
                    <div className="bg-white text-black p-4 md:p-6 rounded-2xl flex items-center justify-center font-bold text-sm md:text-lg shadow-xl shadow-white/5">
                        Area
                    </div>
                    <div className="bg-white text-black p-4 md:p-6 rounded-2xl flex items-center justify-center font-bold text-sm md:text-lg shadow-xl shadow-white/5">
                        Do It Yourself
                    </div>
                    <div className="bg-white text-black p-4 md:p-6 rounded-2xl flex items-center justify-center font-bold text-sm md:text-lg shadow-xl shadow-white/5">
                        Miraai Expert Team
                    </div>
                </div>

                {/* Table Rows */}
                <div className="w-full max-w-6xl space-y-4">
                    {comparisonData.map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="grid grid-cols-3 gap-4 md:gap-8"
                        >
                            {/* Area */}
                            <div className="bg-[#0A0A0A] border border-white/5 p-4 md:p-6 rounded-xl flex items-center justify-start text-white/80 font-semibold text-xs md:text-base text-left">
                                {row.area}
                            </div>

                            {/* DIY Column */}
                            <div className="bg-[#0A0A0A] border border-white/5 p-4 md:p-6 rounded-xl flex items-center gap-3 text-white/40 font-medium text-xs md:text-sm text-left group hover:border-red-500/20 transition-all">
                                <span className="flex-shrink-0 text-red-500/60 group-hover:text-red-500 transition-colors">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                                {row.diy}
                            </div>

                            {/* Miraai Column */}
                            <div className="bg-[#0A0A0A] border border-white/5 p-4 md:p-6 rounded-xl flex items-center gap-3 text-white font-semibold text-xs md:text-sm text-left group hover:border-blue-500/40 transition-all">
                                <span className="flex-shrink-0 text-blue-500/80 group-hover:text-blue-500 transition-colors">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                {row.miraai}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiraaiComparison;
