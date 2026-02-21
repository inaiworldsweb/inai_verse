import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import asset1 from '../../../assets/images/Miraai/model/Laxmi Fashion Shoot (1).webp';
import asset2 from '../../../assets/images/Miraai/model/Perfume (1).webp';
import asset3 from '../../../assets/images/Miraai/model/Perfume (2).webp';
import asset4 from '../../../assets/images/Miraai/model/Perfume (4).webp';
import asset5 from '../../../assets/images/Miraai/model/Rasmika Shoot (1).webp';
import asset6 from '../../../assets/images/Miraai/model/Rasmika Shoot (8).webp';
import asset7 from '../../../assets/images/Miraai/model/mans fashion ai shoot (3).webp';

const MiraaiGallery = () => {
    const galleryItems = useMemo(() => [
        { url: asset1 }, { url: asset2 }, { url: asset3 },
        { url: asset4 }, { url: asset5 }, { url: asset6 }, { url: asset7 },
    ], []);

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
        
        const desktopSteps = [0, 220, 430, 620]; 
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const steps = isMobile ? [0, 85, 165, 240] : desktopSteps;
        
        return steps[absOffset] * direction;
    };

    return (
        <section className="-mb-10 mr-10 bg-black overflow-hidden relative flex flex-col items-center justify-center">
            {/* Heading: Centered with minimal gap using -mb and reduced margin */}
            <div className="w-full max-w-[1400px] mx-auto px-4 text-center -mb-8 md:-mb-14 z-20">
                <h2 className="text-[25px] md:text-[45px] font-inter text-white tracking-tighter">
                    Visualizing The Future Of Creativity
                </h2>
            </div>

            <div className="relative h-[480px] md:h-[650px] flex items-center justify-center">
                <div className="relative w-full max-w-[1500px] h-full flex items-center justify-center overflow-visible">
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
                                        scale: absOffset === 0 ? 1.1 : 1 - (absOffset * 0.07),
                                        zIndex: 40 - absOffset, // Kept at 40 to stay under Navbar
                                        opacity: 1,
                                        filter: absOffset === 0 ? 'brightness(1)' : 'brightness(0.75)'
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 160,
                                        damping: 24,
                                        mass: 0.8
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    style={{ 
                                        width: '245px',
                                        height: '350px',
                                        willChange: 'transform'
                                    }}
                                    className={`absolute rounded-2xl overflow-hidden cursor-pointer
                                        ${absOffset === 0 
                                            ? 'border-[3px] border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]' 
                                            : 'border border-white/10 shadow-2xl'}`}
                                >
                                    <div className="w-full h-full relative bg-zinc-900">
                                        <img
                                            src={item.url}
                                            alt="Gallery"
                                            className="w-full h-full object-cover select-none pointer-events-none"
                                            draggable="false"
                                        />
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

export default MiraaiGallery;