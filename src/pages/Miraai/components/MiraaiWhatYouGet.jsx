import React from 'react';
import { motion } from 'framer-motion';

// Using local assets
import asset1 from '../../../assets/final/1.png';
import asset2 from '../../../assets/final/2. AI Teachers that Never Tire.png';
import asset3 from '../../../assets/final/Data-Driven Insights.png';
import asset4 from '../../../assets/final/Personalized Learning.png';
import asset5 from '../../../assets/final/Smart Automation for Institutions.png';

const MiraaiWhatYouGet = () => {
    const images = [
        { src: asset1, alt: "Miraai Aspect 1" },
        { src: asset2, alt: "Miraai Aspect 2" },
        { src: asset3, alt: "Miraai Aspect 3" },
        { src: asset4, alt: "Miraai Aspect 4" },
        { src: asset5, alt: "Miraai Aspect 5" },
        { src: asset1, alt: "Miraai Aspect 6" },
        { src: asset2, alt: "Miraai Aspect 7" },
    ];

    return (
        <section className="py-16 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4"
                >
                    What You Get
                </motion.h2>
            </div>

            {/* Showcase Row */}
            <div className="relative flex items-center justify-center gap-4 md:gap-6 min-h-[400px] md:min-h-[600px] w-full px-4 overflow-visible">
                {images.map((img, index) => {
                    const isCenter = index === Math.floor(images.length / 2);

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`
                                relative flex-shrink-0 transition-all duration-700 ease-out z-10
                                ${isCenter
                                    ? 'w-[280px] h-[400px] md:w-[450px] md:h-[600px] z-20'
                                    : 'w-[140px] h-[220px] md:w-[220px] md:h-[350px] opacity-20 grayscale brightness-50 mt-10 md:mt-20'}
                            `}
                        >
                            <div className={`
                                w-full h-full rounded-[2rem] overflow-hidden transition-all duration-700
                                ${isCenter
                                    ? 'border-[3px] border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.4)]'
                                    : 'border border-white/5'}
                            `}>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />

                                {/* Inner Shadow for center piece */}
                                {isCenter && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 blur-[180px] rounded-full -z-10 pointer-events-none" />
        </section>
    );
};

export default MiraaiWhatYouGet;
