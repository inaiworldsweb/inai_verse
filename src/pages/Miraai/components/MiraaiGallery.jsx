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
        { url: asset1 },
        { url: asset2 },
        { url: asset3 },
        { url: asset4 },
        { url: asset5 },
        { url: asset6 },
        { url: asset7 },
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

    // This solves the "jumping" issue during the loop
    const getNormalizedOffset = (index) => {
        let offset = index - activeIndex;
        const len = galleryItems.length;
        if (offset > len / 2) offset -= len;
        if (offset < -len / 2) offset += len;
        return offset;
    };

    const springConfig = {
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 1
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
                    <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">AI Content & Ad Creation Gallery</span>
                </motion.div>
                <h2 className="text-[25px] md:text-[40px] font-black text-white tracking-tighter">Visualizing The Future Of Creativity</h2>
            </div>

            <div className="relative h-[400px] md:h-[550px] flex items-center justify-center">
                <div className="relative w-full max-w-5xl h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
                    <AnimatePresence initial={false}>
                        {galleryItems.map((item, index) => {
                            const offset = getNormalizedOffset(index);
                            const absOffset = Math.abs(offset);

                            // Hide items that are too far away for better performance
                            if (absOffset > 3) return null;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        // Responsive positioning: smaller X for mobile
                                        x: typeof window !== 'undefined' && window.innerWidth < 768
                                           ? offset * 150 : offset * 250,
                                        scale: 1 - absOffset * 0.15,
                                        zIndex: 50 - absOffset,
                                        opacity: absOffset > 2 ? 0 : 1,
                                        // Fixed rotation to prevent stretching
                                        rotateY: offset * -15,
                                        filter: absOffset === 0 ? 'brightness(1)' : 'brightness(0.4)'
                                    }}
                                    transition={springConfig}
                                    onHoverStart={() => setIsHovered(true)}
                                    onHoverEnd={() => setIsHovered(false)}
                                    onClick={() => setActiveIndex(index)}
                                    className={`absolute w-[220px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer
                                        ${absOffset === 0 ? 'border-[3px] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]' : 'border border-white/10'}`}
                                >
                                    <div className="w-full h-full">
                                        <img
                                            src={item.url}
                                            alt="Gallery Item"
                                            className="w-full h-full object-cover"
                                            style={{
                                                // Ensures image fills the frame without stretching
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

export default MiraaiGallery;