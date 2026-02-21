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
    const [activeIndex, setActiveIndex] = useState(2);
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

    // Spacing logic for 65% visibility - No stretching
    const getXPos = (offset) => {
        const absOffset = Math.abs(offset);
        if (absOffset === 0) return 0;
        const direction = offset > 0 ? 1 : -1;

        // Gap adjusted specifically for 245px cards
        const desktopSteps = [0, 175, 340, 500];
        const mobileSteps = [0, 85, 160, 230];

        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const steps = isMobile ? mobileSteps : desktopSteps;

        return steps[absOffset] * direction;
    };

    return (
        <section className="py-20 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 text-center mb-12">
                <h2 className="text-[25px] md:text-[45px] font-normal text-white tracking-tighter uppercase">
                    What You Get
                </h2>
            </div>

            <div className="relative h-[500px] md:h-[620px] flex items-center justify-center">
                <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center">
                    <AnimatePresence initial={false}>
                        {galleryItems.map((item, index) => {
                            const offset = getNormalizedOffset(index);
                            const absOffset = Math.abs(offset);

                            if (absOffset > 3) return null;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        x: getXPos(offset),
                                        scale: absOffset === 0 ? 1.1 : 0.9,
                                        zIndex: 50 - absOffset,
                                        opacity: 1,
                                        // Rotate hata diya taaki stretch na ho
                                        rotateY: 0,
                                        filter: absOffset === 0 ? 'brightness(1)' : 'brightness(0.6)'
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 20,
                                        mass: 0.8
                                    }}
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    onClick={() => setActiveIndex(index)}
                                    // Fixed Container Size
                                    style={{
                                        width: '245px',
                                        height: '315px'
                                    }}
                                    className={`absolute rounded-2xl overflow-hidden cursor-pointer
                                        ${absOffset === 0
                                            ? 'border-[3px] border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]'
                                            : 'border border-white/10'}`}
                                >
                                    {/* Wrapper div to force aspect ratio and prevent image stretch */}
                                    <div className="w-full h-full relative bg-zinc-900 overflow-hidden">
                                        <img
                                            src={item.url}
                                            alt="Miraai Gallery"
                                            // 'object-cover' ensures the image fills the 245x315 area without stretching
                                            className="w-full h-full object-cover select-none block"
                                            draggable="false"
                                        />
                                        <div className={`absolute inset-0 transition-opacity duration-300 
                                            ${absOffset === 0 ? 'bg-transparent' : 'bg-black/30'}`}
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