import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local assets
import asset1 from '../../../assets/images/Miraai/model/Laxmi Fashion Shoot (1).webp';
import asset2 from '../../../assets/images/Miraai/model/Perfume (1).webp';
import asset3 from '../../../assets/images/Miraai/model/Perfume (2).webp';
import asset4 from '../../../assets/images/Miraai/model/Perfume (4).webp';
import asset5 from '../../../assets/images/Miraai/model/Rasmika Shoot (1).webp';
import asset6 from '../../../assets/images/Miraai/model/Rasmika Shoot (8).webp';
import asset7 from '../../../assets/images/Miraai/model/mans fashion ai shoot (3).webp';

const MiraaiGallery = () => {
    const galleryItems = [
        { url: asset1 }, { url: asset2 }, { url: asset3 },
        { url: asset4 }, { url: asset5 }, { url: asset6 }, { url: asset7 },
    ];

    const [activeIndex, setActiveIndex] = useState(3);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % galleryItems.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [galleryItems.length, isHovered]);

    const getNormalizedOffset = (index) => {
        let offset = index - activeIndex;
        const len = galleryItems.length;
        if (offset > len / 2) offset -= len;
        if (offset < -len / 2) offset += len;
        return offset;
    };

    const getXPos = (offset) => {
        const absOffset = Math.abs(offset);
        if (absOffset === 0) return 0;
        const direction = offset > 0 ? 1 : -1;

        // Balanced spacing for 65% visibility
        const desktopSteps = [0, 175, 340, 500];
        const mobileSteps = [0, 85, 160, 230];

        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const steps = isMobile ? mobileSteps : desktopSteps;

        return steps[absOffset] * direction;
    };

    return (
        <section className="py-16 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 text-center mb-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="inline-block mb-6"
                >
                    <span className="text-white/60 text-[20px] uppercase tracking-tighter">
                        AI Content & Ad Creation Gallery
                    </span>
                </motion.div>
                <h2 className="text-[25px] md:text-[45px] font-light text-white tracking-tighter">
                    Visualizing The Future Of Creativity
                </h2>
            </div>

            <div className="relative h-[480px] md:h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center">
                    <AnimatePresence initial={false} mode='popLayout'>
                        {galleryItems.map((item, index) => {
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
                                        scale: absOffset === 0 ? 1.1 : 0.9,
                                        zIndex: 50 - absOffset,
                                        opacity: 1,
                                        filter: absOffset === 0 ? 'brightness(1)' : 'brightness(0.7)'
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 150, // Fast enough but natural
                                        damping: 20,    // Reduces the "bounce" or "jump"
                                        mass: 0.8       // Makes it feel lighter
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    style={{
                                        width: '245px',
                                        height: '315px'
                                    }}
                                    className={`absolute rounded-2xl overflow-hidden cursor-pointer
                                        ${absOffset === 0
                                            ? 'border-[3px] border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]'
                                            : 'border border-white/10'}`}
                                >
                                    <div className="w-full h-full relative">
                                        <img
                                            src={item.url}
                                            alt="Gallery"
                                            className="w-full h-full object-cover select-none"
                                            draggable="false"
                                        />
                                        <div className={`absolute inset-0 transition-opacity duration-300 
                                            ${absOffset === 0 ? 'bg-transparent' : 'bg-black/20'}`}
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

export default MiraaiGallery;