import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importing a variety of local assets for all service items
import thumb1 from '../../../assets/final/1.png';
import thumb2 from '../../../assets/final/2. AI Teachers that Never Tire.png';
import thumb3 from '../../../assets/final/Personalized Learning.png';
import thumb4 from '../../../assets/final/Smart Automation for Institutions.png';
import thumb5 from '../../../assets/final/Data-Driven Insights.png';

const MiraaiServices = () => {
    const [hoveredIndex, setHoveredIndex] = useState(3); // Default highlight index matching screenshot

    const services = [
        {
            title: "We Create AI Videos",
            description: "generate professional videos from scratch using AI—no filming required.",
            thumbnail: thumb1
        },
        {
            title: "We Create AI Images & Visuals",
            description: "generate high-quality photos, graphics, and designs using AI—no photographers needed.",
            thumbnail: thumb2
        },
        {
            title: "We Create AI Product & Catalogs",
            description: "Send us your product list—we create complete digital catalogs with professional visuals automatically.",
            thumbnail: thumb3
        },
        {
            title: "We Create AI UGC- Style Video Ads",
            description: "High-converting UGC style ads that look authentic and drive massive engagement.",
            thumbnail: thumb4
        },
        {
            title: "We Create AI Multi - languages Videos",
            description: "Create your video once in English—we deliver it in Hindi, Gujarati, Tamil, and 7+ other languages.",
            thumbnail: thumb5
        }
    ];

    return (
        <section className="py-32 bg-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white leading-tight"
                    >
                        Here's Exactly What Miraai Does For Your Brand
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-white/40 text-base md:text-lg font-medium tracking-tight"
                    >
                        We're your AI-powered creative production team. You brief us. We create. Simple.
                    </motion.p>
                </div>

                {/* Services List */}
                <div className="flex flex-col gap-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`
                                relative min-h-[100px] md:min-h-[120px] rounded-2xl transition-all duration-300 cursor-pointer
                                flex items-center justify-between px-10 md:px-16 overflow-hidden
                                ${hoveredIndex === index
                                    ? 'bg-white text-black'
                                    : 'bg-transparent text-white border border-white/5'}
                            `}
                        >
                            {/* Title - Left Aligned */}
                            <h3 className={`
                                text-lg md:text-xl font-bold tracking-tight transition-colors duration-300
                                ${hoveredIndex === index ? 'text-black' : 'text-white'}
                            `}>
                                {service.title}
                            </h3>

                            {/* Right Side: Description or Image */}
                            <div className="flex-shrink-0 flex items-center justify-end max-w-[40%] text-right">
                                <AnimatePresence mode="wait">
                                    {hoveredIndex === index ? (
                                        <motion.div
                                            key="image"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-48 md:w-[280px] h-16 md:h-20 rounded-xl overflow-hidden border border-black/10 shadow-lg"
                                        >
                                            <img src={service.thumbnail} className="w-full h-full object-cover" alt="Preview" />
                                        </motion.div>
                                    ) : (
                                        <motion.p
                                            key="text"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="text-xs md:text-sm font-medium leading-relaxed text-white/30"
                                        >
                                            {service.description}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Decorative line for non-hovered items */}
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiraaiServices;
