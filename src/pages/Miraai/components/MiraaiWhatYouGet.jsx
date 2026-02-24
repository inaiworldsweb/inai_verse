import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Using local assets
import img1 from '../../../assets/images/Miraai/model/Laxmi Fashion Shoot (1).webp';
import img2 from '../../../assets/images/Miraai/video/download 1.gif';
import img3 from '../../../assets/images/Miraai/model/Perfume (1).webp';
import img4 from '../../../assets/images/Miraai/video/download 2.gif';
import img5 from '../../../assets/images/Miraai/model/Rasmika Shoot (1).webp';
import img6 from '../../../assets/images/Miraai/video/download 3.gif';
import img7 from '../../../assets/images/Miraai/video/download 7.gif';

const galleryItems = [
    { url: img1 }, { url: img2 }, { url: img3 },
    { url: img4 }, { url: img5 }, { url: img6 }, { url: img7 }
];

const MiraaiWhatYouGet = () => {
    const [activeIndex, setActiveIndex] = useState(3);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % galleryItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered]);

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

        const desktopSteps = [0, 230, 450, 650];
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const steps = isMobile ? [0, 85, 165, 240] : desktopSteps;

        return steps[absOffset] * direction;
    };

    return (
        <section className="py-12 md:-mb-25 bg-black overflow-hidden relative flex flex-col items-center justify-center">
            {/* Heading: Centered and Gap Minimized using Negative Margin */}
            <div className="w-full max-w-[1400px] mx-auto px-4 text-center -mb-8 md:-mb-14 z-20">
                <h2 className="text-[25px] md:text-[45px] font-normal text-white tracking-tighter uppercase">
                    What You Get
                </h2>
            </div>

            {/* Cards Container */}
            <div className="relative h-[500px] md:h-[650px] flex items-center justify-center">
                <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center overflow-visible">
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
                                        scale: absOffset === 0 ? 1.1 : 1 - (absOffset * 0.06),
                                        zIndex: 40 - absOffset, // Consistent with Navbar fix
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
                                        width: '245px',
                                        height: '350px',
                                        willChange: 'transform'
                                    }}
                                    className={`absolute rounded-2xl overflow-hidden cursor-pointer
                                        ${absOffset === 0
                                            ? 'border-[3px] border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]'
                                            : 'border border-white/10 shadow-2xl'}`}
                                >
                                    <div className="w-full h-full relative bg-zinc-900 overflow-hidden">
                                        <img
                                            src={item.url}
                                            alt="Miraai Gallery"
                                            className="w-full h-full object-cover select-none block"
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

export default MiraaiWhatYouGet;