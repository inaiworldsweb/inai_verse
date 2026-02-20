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
                <h1 className="text-[25px] md:text-[40px] tracking-tight mb-8 leading-[1.05] text-white">
                    We Create Professional Videos & Visuals <br className="hidden md:block" />
                    For Your Brand Using AI
                </h1>

                <p className="text-white/50 text-[15px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-10 font-medium font-['Inter']">
                    No cameras. No studios. No crews. Just give us your ideas—we'll deliver broadcast-quality
                    content in days using advanced AI technology.
                </p>

                <div className="flex justify-center mb-24">
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(244, 243, 243, 0.9)' }}
                        whileTap={{ scale: 0.98 }}
                        className="min-w-[160px] md:min-w-[260px] h-[48px] md:h-[54px] px-4 md:px-6 flex items-center justify-center bg-white/90 text-black font-semibold rounded-full text-sm md:text-lg transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] backdrop-blur-sm"
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
                className="w-full max-w-[1070px] h-auto md:h-[164px] bg-[#0A0A0A] overflow-hidden mx-auto"
            >
                <div className="grid grid-cols-1 md:grid-cols-4 h-full">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center h-full gap-2 md:gap-[10px] py-6 md:py-8 lg:py-8 xl:pt-[39px] xl:pb-[39px] px-4 md:px-6 lg:px-8 xl:px-[80px] border-[#333333] border-solid ${index !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r' : ''
                                }`}
                        >
                            <span className="text-xl md:text-2xl lg:text-3xl tracking-tight text-white mb-1 font-bold">{stat.value}</span>
                            <span className="text-[#999999] font-['Inter'] text-sm sm:text-base md:text-base lg:text-lg xl:text-lg leading-[1.2] md:leading-[100%] tracking-[0%] text-center capitalize whitespace-normal xl:whitespace-nowrap">
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
