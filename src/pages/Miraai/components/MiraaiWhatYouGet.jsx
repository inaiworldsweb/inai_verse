import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Using local assets
import img1 from '../../../assets/images/Miraai/model/Laxmi Fashion Shoot (1).webp';
import img2 from '../../../assets/images/Miraai/video/download 1.gif';
import img3 from '../../../assets/images/Miraai/model/Perfume (1).webp';
import img4 from '../../../assets/images/Miraai/video/download 2.gif';
import img5 from '../../../assets/images/Miraai/model/Rasmika Shoot (1).webp';
import img6 from '../../../assets/images/Miraai/video/download 3.gif';

const MiraaiWhatYouGet = () => {
    const galleryItems = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        { url: img4 },
        { url: img5 },
        { url: img6 }
    ];

    const [activeIndex, setActiveIndex] = useState(2);
    const [isHovered, setIsHovered] = useState(false);

    // Smooth Auto-rotation logic
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % galleryItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [galleryItems.length, isHovered]);

    // This logic ensures the carousel loops in one direction without jumping
    const getNormalizedOffset = (index) => {
        let offset = index - activeIndex;
        const len = galleryItems.length;
        if (offset > len / 2) offset -= len;
        if (offset < -len / 2) offset += len;
        return offset;
    };

    return (
        <section className="py-20 bg-black overflow-hidden relative">
            {/* Header Section */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                    <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
                        What You Get With Miraai
                    </span>
                </motion.div>
                <h2 className="text-[25px] md:text-[40px] font-bold text-white tracking-tighter uppercase">
                    What You Get
                </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative h-[450px] md:h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-5xl h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
                    <AnimatePresence initial={false}>
                        {galleryItems.map((item, index) => {
                            const offset = getNormalizedOffset(index);
                            const absOffset = Math.abs(offset);

                            // Only render the center and its immediate neighbors for performance
                            if (absOffset > 2) return null;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        // Mobile: 160px spacing, Desktop: 250px spacing
                                        x: typeof window !== 'undefined' && window.innerWidth < 768
                                            ? offset * 160 : offset * 250,
                                        scale: 1 - absOffset * 0.15,
                                        zIndex: 50 - absOffset,
                                        opacity: 1 - absOffset * 0.3,
                                        rotateY: offset * -15, // Low rotation angle to stop stretching
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
                                    className={`absolute w-[240px] md:w-[320px] aspect-[3/4] rounded-[2rem] overflow-hidden cursor-pointer
                                        ${absOffset === 0 ? 'border-[3px] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]' : 'border border-white/10'}`}
                                >
                                    <div className="relative w-full h-full overflow-hidden">
                                        <img
                                            src={item.url}
                                            alt="Miraai Gallery"
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

            {/* CTA Button */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 mt-16 text-center">
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, backgroundColor: '#f8f9fa' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black font-medium py-3 px-8 rounded-full border border-gray-200 hover:bg-gray-100 transition-all uppercase"
                >
                    Get Started with Miraai
                </motion.button>
            </div>
        </section>
    );
};

export default MiraaiWhatYouGet;