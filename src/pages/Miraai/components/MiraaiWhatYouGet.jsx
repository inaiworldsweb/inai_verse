import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Using local assets
import img1 from '../../../assets/images/Miraai/model/Laxmi Fashion Shoot (1).webp';
import img2 from '../../../assets/images/Miraai/video/download 1.gif';
import img3 from '../../../assets/images/Miraai/model/Perfume (1).webp';
import img4 from '../../../assets/images/Miraai/video/download 2.gif';
import img5 from '../../../assets/images/Miraai/model/Rasmika Shoot (1).webp';
import img6 from '../../../assets/images/Miraai/video/download 3.gif'; // Using the first image again as a placeholder

const MiraaiWhatYouGet = () => {
    const galleryItems = [
        { url: img1,  },
        { url: img2,  },
        { url: img3,  },
        { url: img4,  },
        { url: img5,  },
        { url: img6,  }
    ];

    const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % galleryItems.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [galleryItems.length]);

    return (
        <section className="py-20 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center mb-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                    <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">What You Get With Miraai</span>
                </motion.div>
                <h2 className="text-[40px] font-black text-white tracking-tighter">What You Get </h2>
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

                        // Only show local neighbors (limit to 2 on each side)
                        if (absOffset > 2) return null;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    x: offset * 200, // Horizontal spread
                                    scale: 1 - absOffset * 0.15, // Scale down neighbors
                                    zIndex: 50 - absOffset, // Put center on top
                                    opacity: 1 - absOffset * 0.3, // Fade neighbors
                                    rotateY: offset * -20, // 3D tilt
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30
                                }}
                                onClick={() => setActiveIndex(index)}
                                className={`
                                    absolute w-[280px] md:w-[360px] aspect-[4/5] rounded-[2rem] 
                                    overflow-hidden cursor-pointer group
                                    ${absOffset === 0 ? 'border-[3px] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]' : 'border border-white/10'}
                                `}
                            >
                                <div className="relative w-full h-full overflow-hidden">
                                    <img
                                        src={item.url}
                                        alt={item.category}
                                        className="w-full h-full object-cover"
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
                                            msUserSelect: 'none'
                                        }}
                                    />
                                </div>

                                {/* Info Overlay - only visible or bright on active */}
                                <div className={`
                                    absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent
                                    transition-opacity duration-500
                                    ${absOffset === 0 ? 'opacity-100' : 'opacity-0'}
                                `}>
                                    <p className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
                                        {item.category}
                                    </p>
                                    <h4 className="text-white text-lg font-bold italic tracking-tight">
                                        {item.label}
                                    </h4>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 mt-16 text-center">
                <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, backgroundColor: '#f8f9fa' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black font-medium py-3 px-8 rounded-full border border-gray-200 hover:bg-gray-100 transition-all"
                >
                    Get Started with Miraai
                </motion.button>
            </div>
        </section>
    );
};

export default MiraaiWhatYouGet;
