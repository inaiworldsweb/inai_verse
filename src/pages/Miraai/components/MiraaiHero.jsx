import React from 'react';
import { motion } from 'framer-motion';

const MiraaiHero = () => {
    const stats = [
        { label: 'Videos Created', value: '50,000+' },
        { label: 'Images Generated', value: '100,000+' },
        { label: 'Average Cost Savings', value: '70%' },
        { label: 'Day Delivery', value: '2-4' },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] relative py-12">
            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[70rem] mx-auto text-center z-10"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.05] text-white">
                    We Create Professional Videos & Visuals <br className="hidden md:block" />
                    for Your Brand Using AI
                </h1>

                <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
                    No cameras. No studios. No crews. Just give us your ideas—we'll deliver broadcast-quality
                    content in days using advanced AI technology.
                </p>

                <div className="flex justify-center mb-24">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-white text-black font-semibold rounded-full text-lg transition-all hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                        Start Your First Project
                    </motion.button>
                </div>
            </motion.div>

            {/* Stats Section - Bottom Bar Style */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="w-full max-w-[1400px] bg-[#0A0A0A] border-y border-white/5 md:border-x md:rounded-lg overflow-hidden"
            >
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`px-6 py-10 md:py-16 flex flex-col items-center justify-center relative ${index !== stats.length - 1 ? 'after:content-[""] after:absolute after:right-0 after:top-1/4 after:bottom-1/4 after:w-[1px] after:bg-white/10' : ''
                                }`}
                        >
                            <span className="text-2xl md:text-4xl font-bold mb-2 tracking-tight text-white">{stat.value}</span>
                            <span className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default MiraaiHero;
