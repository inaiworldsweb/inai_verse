import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import model images - using different images than MiraaiGallery.jsx
import img1 from '../../../assets/images/Miraai/video/download 1.gif';
import img2 from '../../../assets/images/Miraai/video/download 2.gif';
import img3 from '../../../assets/images/Miraai/video/download 3.gif';
import img4 from '../../../assets/images/Miraai/video/download 4.gif';
import img5 from '../../../assets/images/Miraai/video/download 5.gif';
import img6 from '../../../assets/images/Miraai/video/download 6.gif';

const showcaseItems = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
];

const MiraaiShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [showcaseItems.length]);

    return (
        <section className="py-8 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                    <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">AI Content Showcase</span>
                </motion.div>
                <h2 className="text-[40px] font-black text-white tracking-tighter">Explore Our Creative Portfolio</h2>
            </div>

            <div className="relative h-[450px] md:h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                    {showcaseItems.map((item, index) => {
                        // Calculate circular offset
                        let offset = index - activeIndex;
                        const len = showcaseItems.length;

                        // Adjust for circular wrapping
                        if (offset > len / 2) offset -= len;
                        else if (offset < -len / 2) offset += len;

                        const absOffset = Math.abs(offset);

                        // Only show local neighbors (limit to 2 on each side)
                        if (absOffset > 2) return null;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    x: offset * 200, // Horizontal spread
                                    scale: 1 - absOffset * 0.15, // Scale down neighbors
                                    zIndex: 50 - absOffset, // Put center on top
                                    opacity: 1 - absOffset * 0.3, // Fade neighbors
                                    rotateY: offset * -20, // 3D tilt
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    absolute w-[280px] md:w-[360px] aspect-[4/5] rounded-[2rem] 
                                    overflow-hidden cursor-pointer group
                                    ${absOffset === 0 ? 'border-[3px] border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'border border-white/10'}
                                `}
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src={item.url}
                                        alt={`Showcase ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            color: 'transparent',
                                            textIndent: '-9999px',
                                            fontSize: '0',
                                            lineHeight: '0',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            userSelect: 'none',
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors">
                    View All Works
                </button>
            </div>
        </section>
    );
};

export default MiraaiShowcase;
