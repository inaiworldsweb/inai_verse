import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local assets from Miraai model folder
import asset1 from '../../../assets/images/Miraai/model/Laxmi Fashion Shoot (1).webp';
import asset2 from '../../../assets/images/Miraai/model/Perfume (1).webp';
import asset3 from '../../../assets/images/Miraai/model/Perfume (2).webp';
import asset4 from '../../../assets/images/Miraai/model/Perfume (4).webp';
import asset5 from '../../../assets/images/Miraai/model/Rasmika Shoot (1).webp';
import asset6 from '../../../assets/images/Miraai/model/Rasmika Shoot (8).webp';
import asset7 from '../../../assets/images/Miraai/model/mans fashion ai shoot (3).webp';

const MiraaiGallery = () => {
    const galleryItems = [
        { url: asset1,  },
        { url: asset2,  },
        { url: asset3,  },
        { url: asset4,  },
        { url: asset5,  },
        { url: asset6,  },
        { url: asset7,  },
    ];

    const [activeIndex, setActiveIndex] = useState(3);
    const [isHovered, setIsHovered] = useState(false);

    // Smooth auto-rotation with pause on hover
    useEffect(() => {
        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                setActiveIndex(prev => (prev + 1) % galleryItems.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [galleryItems.length, isHovered]);

    // Spring animation configuration
    const springConfig = {
        type: "spring",
        damping: 25,
        stiffness: 150,
        mass: 0.8,
        restDelta: 0.001
    };

    return (
        <section className="py-8 bg-black overflow-hidden relative" style={{ perspective: '2000px' }}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                    <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">AI Content & Ad Creation Gallery</span>
                </motion.div>
                <h2 className="text-[40px] font-black text-white tracking-tighter">Visualizing The Future Of Creativity</h2>
            </div>

            <div className="relative h-[450px] md:h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                    {galleryItems.map((item, index) => {
                        // Calculate circular offset
                        let offset = index - activeIndex;
                        const len = galleryItems.length;

                        // Adjust for circular wrapping
                        if (offset > len / 2) offset -= len;
                        else if (offset < -len / 2) offset += len;

                        const absOffset = Math.abs(offset);

                        // Show more neighbors to accommodate 7 images
                        if (absOffset > 3) return null;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    x: offset * 180,
                                    scale: 1 - absOffset * 0.1,
                                    zIndex: 50 - absOffset,
                                    opacity: absOffset > 2 ? 0.5 - (absOffset - 2) * 0.25 : 1,
                                    rotateY: offset * -12,
                                    filter: absOffset === 0 ? 'brightness(1.05)' : `brightness(${1 - absOffset * 0.1})`
                                }}
                                transition={springConfig}
                                onHoverStart={() => setIsHovered(true)}
                                onHoverEnd={() => setIsHovered(false)}
                                onClick={() => setActiveIndex(index)}
                                className={`absolute w-[240px] md:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300
                                    ${absOffset === 0 ? 'border-[3px] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]' : 'border border-white/10'}`}
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <motion.img
                                        src={item.url}
                                        alt={item.category}
                                        className="w-full h-full object-cover"
                                        initial={false}
                                        animate={{
                                            scale: 1
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
                                        }}
                                        style={{
                                            fontFamily: 'Arial, sans-serif',
                                            color: 'transparent',
                                            textIndent: '-9999px',
                                            fontSize: '0',
                                            lineHeight: '0',
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                            userSelect: 'none',
                                            WebkitUserSelect: 'none',
                                            MozUserSelect: 'none',
                                            msUserSelect: 'none',
                                            willChange: 'transform, opacity'
                                        }}
                                        onError={(e) => {
                                            e.target.style.opacity = '0.5';
                                            e.target.style.backgroundColor = '#1f2937';
                                        }}
                                    />
                                </div>

                                {/* Info Overlay - only visible or bright on active */}
                                <motion.div
                                    className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                                    initial={false}
                                    animate={{
                                        opacity: absOffset === 0 ? 1 : 0,
                                        y: absOffset === 0 ? 0 : 20
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                >
                                    <p className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
                                        {item.category}
                                    </p>
                                    <h4 className="text-white text-lg font-bold italic tracking-tight">
                                        {item.label}
                                    </h4>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MiraaiGallery;