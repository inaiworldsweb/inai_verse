import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import local assets from Assetsa
import asset1 from '../../../Assetsa/a.png';
import asset2 from '../../../Assetsa/b.png';
import asset3 from '../../../Assetsa/c.png';
import asset4 from '../../../Assetsa/d.png';
import asset5 from '../../../Assetsa/e.png';
import asset6 from '../../../Assetsa/f.png';

const MiraaiGallery = () => {
    const galleryItems = [
        { url: asset1, category: 'AI Core', label: 'Cloud Processing' },
        { url: asset2, category: 'Edge Computing', label: 'Device Integration' },
        { url: asset3, category: 'Creative AI', label: 'Image Synthesis' },
        { url: asset4, category: 'Analytics', label: 'Data Visualization' },
        { url: asset5, category: 'Automation', label: 'Smart Systems' },
        { url: asset6, category: 'Education', label: 'AI Mentorship' },
    ];

    const [activeIndex, setActiveIndex] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % galleryItems.length);
        }, 3000);
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
                    <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">AI Content & Ad Creation Gallery</span>
                </motion.div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Visualizing The Future Of Creativity</h2>
            </div>

            <div className="relative h-[450px] md:h-[600px] flex items-center justify-center">
                <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                    {galleryItems.map((item, index) => {
                        // Calculate offset from center
                        const offset = index - activeIndex;
                        const absOffset = Math.abs(offset);

                        // Only show local neighbors to prevent clutter
                        if (absOffset > 2) return null;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={{
                                    x: offset * 180, // Horizontal spread
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
                                    absolute w-[240px] md:w-[320px] aspect-[4/5] rounded-[2rem] 
                                    overflow-hidden cursor-pointer group
                                    ${absOffset === 0 ? 'border-[3px] border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]' : 'border border-white/10'}
                                `}
                            >
                                <img
                                    src={item.url}
                                    alt={item.category}
                                    className="w-full h-full object-cover"
                                />

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
        </section>
    );
};

export default MiraaiGallery;
