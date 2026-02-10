import React from 'react';
import { motion } from 'framer-motion';

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

    const doubledItems = [...galleryItems, ...galleryItems];

    return (
        <section className="py-12 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                >
                    <span className="text-white/60 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">AI Content & Ad Creation Gallery</span>
                </motion.div>
            </div>

            <div className="relative w-full flex overflow-hidden py-10">
                <motion.div
                    className="flex gap-6 px-3"
                    animate={{ x: [0, -360 * galleryItems.length] }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {doubledItems.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.15,
                                zIndex: 10,
                                transition: { duration: 0.4, ease: "easeOut" }
                            }}
                            className="relative min-w-[280px] md:min-w-[340px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group cursor-pointer border-[1px] border-white/10 hover:border-purple-500/50 transition-colors duration-500 shadow-2xl bg-[#0A0A0A]"
                        >
                            <img
                                src={item.url}
                                alt={item.category}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                            />

                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transition-transform">
                                <p className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                                    {item.category}
                                </p>
                                <h4 className="text-white text-lg font-bold tracking-tight leading-none italic">
                                    {item.label}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />
            </div>
        </section>
    );
};

export default MiraaiGallery;
