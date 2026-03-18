import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import model images
import img1 from '../../../assets/images/Miraai/video/download1.gif';
import img2 from '../../../assets/images/Miraai/video/download2.gif';
import img3 from '../../../assets/images/Miraai/video/download3.gif';
import img4 from '../../../assets/images/Miraai/video/download4.gif';
import img5 from '../../../assets/images/Miraai/video/download5.gif';
import img6 from '../../../assets/images/Miraai/video/download6.gif';
import img7 from '../../../assets/images/Miraai/video/download7.gif';

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

        // Desktop values preserved
        const desktopSteps = [0, 230, 450, 650];
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

        // Adjusted mobile steps for 200px width cards
        const steps = isMobile ? [0, 110, 210, 300] : desktopSteps;

        return steps[absOffset] * direction;
    };

    return (
        <section className="py-4 md:py-8  bg-black overflow-hidden relative flex flex-col items-center justify-center">
            {/* Heading */}
            <div className="w-full max-w-[1400px] mx-auto text-center z-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="inline-block px-6 py-2"
                >
                </motion.div>
                <h2 className="text-[1.5625rem] md:text-[2rem] lg:text-[2.5rem] font-bold text-white tracking-[1px]">
                    Explore Our Creative Portfolio
                </h2>
            </div>

            {/* Cards Container */}
            <div className="relative h-[320px] md:h-[500px] flex items-center justify-center">
                <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center overflow-visible">
                    <AnimatePresence initial={false} mode='popLayout'>
                        {showcaseItems.map((item, index) => {
                            const offset = getNormalizedOffset(index);
                            const absOffset = Math.abs(offset);

                            if (absOffset > 3) return null;

                            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

                            return (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={false}
                                    animate={{
                                        x: getXPos(offset),
                                        // Slightly smaller scale on mobile for middle card
                                        scale: absOffset === 0
                                            ? (isMobile ? 1.05 : 1.1)
                                            : 1 - (absOffset * 0.06),
                                        zIndex: 40 - absOffset,
                                        opacity: 1,
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
                                        // Mobile width fixed to 200px as requested
                                        width: isMobile ? '200px' : '245px',
                                        height: isMobile ? '280px' : '350px',
                                        willChange: 'transform'
                                    }}
                                    className={`absolute cursor-pointer flex items-center justify-center
                                        ${absOffset === 0
                                            ? 'shadow-[0_0_50px_rgba(59,130,246,0.4)]'
                                            : 'shadow-2xl'}`}
                                >
                                    <div className="w-full h-full relative">
                                        <img
                                            src={item.url}
                                            alt={`Showcase ${index + 1}`}
                                            className={`w-full h-full object-cover select-none rounded-2xl
                                                ${absOffset === 0
                                                    ? 'border-[3px] border-blue-500'
                                                    : 'border border-white/10'}`}
                                            draggable="false"
                                        />
                                        <div className={`absolute inset-0 transition-opacity duration-500 rounded-2xl
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