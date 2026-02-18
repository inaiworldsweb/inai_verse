import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import model images
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
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [showcaseItems.length, isHovered]);

    // Circular wrapping logic to prevent "jumping"
    const getNormalizedOffset = (index) => {
        let offset = index - activeIndex;
        const len = showcaseItems.length;
        if (offset > len / 2) offset -= len;
        if (offset < -len / 2) offset += len;
        return offset;
    };

    return (
        <section className="py-8 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                    <span className="text-white/60 text-xs md:text-sm tracking-[0.3em] uppercase">AI Content Showcase</span>
                </motion.div>
                <h2 className="text-[25px] md:text-[40px] text-white tracking-tighter">Explore Our Creative Portfolio</h2>
            </div>

            <div className="relative h-[400px] md:h-[550px] flex items-center justify-center">
                <div className="relative w-full max-w-5xl h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
                    <AnimatePresence initial={false}>
                        {showcaseItems.map((item, index) => {
                            const offset = getNormalizedOffset(index);
                            const absOffset = Math.abs(offset);

                            // Performance optimization
                            if (absOffset > 2) return null;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        // Responsive horizontal spread
                                        x: typeof window !== 'undefined' && window.innerWidth < 768
                                            ? offset * 160 : offset * 240,
                                        scale: 1 - absOffset * 0.15,
                                        zIndex: 50 - absOffset,
                                        opacity: 1 - absOffset * 0.3,
                                        rotateY: offset * -15, // Fixed 3D tilt
                                        filter: absOffset === 0 ? 'brightness(1)' : 'brightness(0.4)',
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 25,
                                        mass: 1
                                    }}
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    onClick={() => setActiveIndex(index)}
                                    className={`absolute w-[240px] md:w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer
                                        ${absOffset === 0 ? 'border-[3px] border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]' : 'border border-white/10'}`}
                                >
                                    <div className="relative w-full h-full overflow-hidden">
                                        <img
                                            src={item.url}
                                            alt={`Showcase ${index + 1}`}
                                            className="w-full h-full object-cover pointer-events-none"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
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