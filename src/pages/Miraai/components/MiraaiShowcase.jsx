import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import model images
import img1 from '../../../assets/images/Miraai/video/download 1.gif';
import img2 from '../../../assets/images/Miraai/video/download 2.gif';
import img3 from '../../../assets/images/Miraai/video/download 3.gif';
import img4 from '../../../assets/images/Miraai/video/download 4.gif';
import img5 from '../../../assets/images/Miraai/video/download 5.gif';
import img6 from '../../../assets/images/Miraai/video/download 6.gif';
import img7 from '../../../assets/images/Miraai/video/download 7.gif';

const showcaseItems = [
    { url: img1 }, { url: img2 }, { url: img3 },
    { url: img4 }, { url: img5 }, { url: img6 }, { url: img7 }
];

const MiraaiShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(3);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered]);

    const getNormalizedOffset = (index) => {
        let offset = index - activeIndex;
        const len = showcaseItems.length;
        if (offset > len / 2) offset -= len;
        if (offset < -len / 2) offset += len;
        return offset;
    };

    const getXPos = (offset) => {
        const absOffset = Math.abs(offset);
        if (absOffset === 0) return 0;
        const direction = offset > 0 ? 1 : -1;
        
        // SPREAD OPTIMIZED: Wahi premium spacing jo humne set ki thi
        // Desktop spacing: Center(0), 1st side(230), 2nd side(450), 3rd side(650)
        const desktopSteps = [0, 230, 450, 650]; 
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const steps = isMobile ? [0, 85, 165, 240] : desktopSteps;
        
        return steps[absOffset] * direction;
    };

    return (
        <section className="py-16 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 text-center mb-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="inline-block px-6 py-2 mb-6"
                >
                    <span className="text-white/60 text-sm md:text-base uppercase tracking-tighter">
                        AI Content Showcase
                    </span>
                </motion.div>
                <h2 className="text-[25px] md:text-[45px] font-normal text-white tracking-tighter">
                    Explore Our Creative Portfolio
                </h2>
            </div>

            <div className="relative h-[480px] md:h-[650px] flex items-center justify-center">
                {/* Max-width adjusted to 1600px for better side spread */}
                <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center">
                    <AnimatePresence initial={false} mode='popLayout'>
                        {showcaseItems.map((item, index) => {
                            const offset = getNormalizedOffset(index);
                            const absOffset = Math.abs(offset);

                            if (absOffset > 3) return null;

                            return (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={false}
                                    animate={{
                                        x: getXPos(offset),
                                        // SCALE: Side cards (gifs) halke se hi chote honge (6% reduction)
                                        scale: absOffset === 0 ? 1.1 : 1 - (absOffset * 0.06),
                                        zIndex: 50 - absOffset,
                                        opacity: 1, // Full opacity as requested
                                        filter: absOffset === 0 ? 'brightness(1)' : 'brightness(0.75)'
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 24,
                                        mass: 0.8
                                    }}
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    onClick={() => setActiveIndex(index)}
                                    style={{ 
                                        width: '245px', 
                                        height: '350px',
                                        willChange: 'transform'
                                    }}
                                    className={`absolute rounded-2xl overflow-hidden cursor-pointer
                                        ${absOffset === 0 
                                            ? 'border-[3px] border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.4)]' 
                                            : 'border border-white/10 shadow-2xl'}`}
                                >
                                    <div className="w-full h-full relative overflow-hidden bg-gray-900">
                                        <img
                                            src={item.url}
                                            alt={`Showcase ${index + 1}`}
                                            className="w-full h-full object-cover select-none"
                                            draggable="false"
                                        />
                                        {/* Halka sa dark overlay piche wale cards ke liye taaki depth bani rahe */}
                                        <div className={`absolute inset-0 transition-opacity duration-500 
                                            ${absOffset === 0 ? 'bg-transparent' : 'bg-black/10'}`} 
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default MiraaiShowcase;