import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
    {
        title: 'AI + Expert Team Approach',
        description: 'We combine advanced artificial intelligence with experienced creative professionals to deliver perfectly polished content.',
        traditional: 'Hire separate teams for AI and creative',
        miraai: 'AI + Human experts in one team',
    },
    {
        title: 'Done-For-You Creative Services',
        description: "You don't need tools, software, or technical skills. Our team handles everything from concept to final delivery.",
        traditional: 'Learn tools, manage software yourself',
        miraai: 'Fully managed — concept to delivery',
    },
    {
        title: 'Dedicated Client Support',
        description: 'Enjoy personalized support with a dedicated project manager and expert guidance at every step.',
        traditional: 'Generic support, long wait times',
        miraai: 'Dedicated project manager for you',
    },
    {
        title: 'Faster Turnaround Time',
        description: 'Get high-quality videos, images, and ads in days — not weeks or months.',
        traditional: 'Weeks or months of production',
        miraai: 'Delivered in days, not weeks',
    },
    {
        title: 'Cost-Effective Production',
        description: 'Save up to 70% compared to traditional studios and agencies without compromising quality.',
        traditional: 'High agency & studio costs',
        miraai: 'Save up to 70% on production',
    },
    {
        title: 'Consistent Brand Quality',
        description: 'Every project follows strict brand guidelines to maintain uniform design, tone, and messaging.',
        traditional: 'Inconsistent across vendors',
        miraai: 'Uniform design, tone & messaging',
    },
];

const MiraaiWhyChoose = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-rotate every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const activeFeature = features[activeIndex];
    const prevIndex = activeIndex === 0 ? features.length - 1 : activeIndex - 1;
    const prevFeature = features[prevIndex];

    // Calculate positions for orbital nodes
    const getNodePosition = (index, total) => {
        const angle = (index / total) * 360 - 90; // Start from top
        const rad = (angle * Math.PI) / 180;
        const radius = 42; // percentage from center
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return { x, y, angle };
    };

    // Calculate label position (further out)
    const getLabelPosition = (index, total) => {
        const angle = (index / total) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const radius = 56;
        const x = 50 + radius * Math.cos(rad);
        const y = 50 + radius * Math.sin(rad);
        return { x, y };
    };

    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-[25px] md:text-[40px] text-white tracking-tight font-bold">
                        Why Choose Miraai?
                    </h2>
                </motion.div>

                {/* Main Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left - Orbital Diagram */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[520px] md:h-[520px]">

                            {/* Outer ring */}
                            <div className="absolute inset-0 rounded-full border border-white/10" />
                            {/* Inner ring */}
                            <div className="absolute inset-[15%] rounded-full border border-white/5" />

                            {/* Progress arc - animated glow */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                                <circle
                                    cx="50" cy="50" r="42"
                                    fill="none"
                                    stroke="url(#arcGradient)"
                                    strokeWidth="0.5"
                                    strokeDasharray={`${((activeIndex + 1) / features.length) * 264} 264`}
                                    className="transition-all duration-700 ease-in-out"
                                />
                                <defs>
                                    <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Center circle */}
                            <div className="absolute inset-[28%] rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.3)]">
                                <span className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-tight">MIRAAI</span>
                                <span className="text-white/70 text-[10px] sm:text-xs mt-0.5">Creative Studio</span>
                            </div>

                            {/* Orbital nodes */}
                            {features.map((feature, index) => {
                                const { x, y } = getNodePosition(index, features.length);
                                const label = getLabelPosition(index, features.length);
                                const isActive = index === activeIndex;

                                return (
                                    <React.Fragment key={index}>
                                        {/* Node */}
                                        <button
                                            onClick={() => setActiveIndex(index)}
                                            className={`absolute rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 cursor-pointer z-10
                                                ${isActive
                                                    ? 'w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.5)] scale-110'
                                                    : 'w-8 h-8 sm:w-10 sm:h-10 bg-[#1a1a2e] border border-white/20 text-white/60 hover:border-cyan-400/50 hover:text-white'
                                                }`}
                                            style={{
                                                left: `${x}%`,
                                                top: `${y}%`,
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            {index + 1}
                                        </button>

                                        {/* Label */}
                                        <span
                                            className={`absolute text-[10px] sm:text-xs text-center whitespace-nowrap transition-all duration-500 pointer-events-none
                                                ${isActive ? 'text-cyan-400 font-medium' : 'text-white/30'}`}
                                            style={{
                                                left: `${label.x}%`,
                                                top: `${label.y}%`,
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        >
                                            {feature.title.length > 20
                                                ? feature.title.split(' ').slice(0, 3).join(' ')
                                                : feature.title}
                                        </span>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Feature Comparison Cards */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4 max-w-md mx-auto lg:mx-0">

                        {/* Previous card (dimmed) */}
                        <div className="rounded-2xl border border-white/5 bg-[#0a0a0f] px-6 py-4 opacity-40">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/40 text-xs font-bold">
                                    {prevIndex + 1}
                                </span>
                                <span className="text-white/30 text-xs uppercase tracking-widest">Previous</span>
                            </div>
                            <h3 className="text-white/50 font-bold text-lg tracking-tight">
                                {prevFeature.title}
                            </h3>
                        </div>

                        {/* Active card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="rounded-2xl border border-cyan-500/30 bg-gradient-to-b from-[#0d1117] to-[#0a0a12] px-6 py-6 shadow-[0_0_40px_rgba(6,182,212,0.08)]"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                            {activeIndex + 1}
                                        </span>
                                        <span className="text-white/50 text-xs uppercase tracking-widest">Now Viewing</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-[10px] uppercase tracking-widest font-bold border border-cyan-500/20">
                                        Active
                                    </span>
                                </div>

                                <h3 className="text-white font-bold text-xl md:text-2xl tracking-tight mb-2">
                                    {activeFeature.title}
                                </h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    {activeFeature.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress indicator */}
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-white/40 text-xs tracking-wide">
                                {activeIndex + 1}/{features.length} • {Math.round(((activeIndex + 1) / features.length) * 100)}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiraaiWhyChoose;
