import React from 'react';
import { motion } from 'framer-motion';

// Import local assets from Assetsa
import image1 from '../../../Assetsa/a.png';
import image2 from '../../../Assetsa/b.png';
import image3 from '../../../Assetsa/c.png';
import image4 from '../../../Assetsa/d.png';
import image5 from '../../../Assetsa/e.png';
import image6 from '../../../Assetsa/f.png';

const MiraaiShowcase = () => {
    const showcaseItems = [
        { url: image1, category: 'AI Production', label: 'Scene Depth' },
        { url: image2, category: 'Visual FX', label: 'Magic Particles' },
        { url: image3, category: 'Robotic Vision', label: 'Tech Demo' },
        { url: image4, category: 'Education AI', label: 'Next-Gen Learning' },
        { url: image5, category: 'Cloud Infrastructure', label: 'Global Scale' },
        { url: image6, category: 'System Core', label: 'Seamless Integration' },
    ];

    const doubledItems = [...showcaseItems, ...showcaseItems];

    return (
        <section className="pb-12 bg-black overflow-hidden relative">
            {/* Header / Subtitle Section removed as requested by user's comments */}

            <div className="relative w-full flex overflow-hidden py-10">
                <motion.div
                    className="flex gap-6 px-3"
                    animate={{ x: [0, -360 * showcaseItems.length] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {doubledItems.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.1,
                                zIndex: 10,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            className="relative min-w-[280px] md:min-w-[340px] aspect-video rounded-[2rem] overflow-hidden group cursor-pointer border-[1px] border-white/10 hover:border-blue-500/50 transition-colors duration-500 shadow-2xl bg-[#0A0A0A]"
                        >
                            <img
                                src={item.url}
                                alt={item.category}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />

                            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
                                    {item.category}
                                </p>
                                <h4 className="text-white text-base font-bold tracking-tight leading-none italic">
                                    {item.label}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Perspective Fades */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
            </div>
        </section>
    );
};

export default MiraaiShowcase;
