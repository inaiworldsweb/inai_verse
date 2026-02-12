import React from 'react';
import { motion } from 'framer-motion';

const MiraaiTrust = () => {
    const brands = [
        {
            name: "DALL·E 2",
            icon: (
                <div className="w-8 h-8 rounded-sm bg-white/10 flex items-center justify-center font-bold text-[10px] text-white/40 border border-white/10 italic">
                    D2
                </div>
            )
        },
        {
            name: "Hugging Face",
            icon: <span className="text-3xl">🤗</span>
        },
        {
            name: "Bard",
            icon: (
                <div className="relative w-8 h-8">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-400 blur-sm rounded-full opacity-50"
                    />
                    <span className="relative z-10 text-xl flex items-center justify-center h-full">✨</span>
                </div>
            )
        },
        {
            name: "OpenAI",
            icon: (
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5153-4.9108 6.0462 6.0462 0 0 0-3.9998-2.8212 6.0883 6.0883 0 0 0-5.2814.9133 6.0462 6.0462 0 0 0-4.4032 0 6.0883 6.0883 0 0 0-5.2814-.9133 6.0462 6.0462 0 0 0-3.9998 2.8212 5.9847 5.9847 0 0 0-.5153 4.9108 6.0544 6.0544 0 0 0 0 4.3578 5.9847 5.9847 0 0 0 .5153 4.9108 6.0462 6.0462 0 0 0 3.9998 2.8212 6.0883 6.0883 0 0 0 5.2814-.9133 6.0462 6.0462 0 0 0 4.4032 0 6.0883 6.0883 0 0 0 5.2814.9133 6.0462 6.0462 0 0 0 3.9998-2.8212 5.9847 5.9847 0 0 0 .5153-4.9108 6.0544 6.0544 0 0 0 0-4.3578zm-1.127 3.3211a4.891 4.891 0 0 1-1.2505 3.3333 4.8569 4.8569 0 0 1-3.3294 1.25H9.4215a4.8569 4.8569 0 0 1-3.3294-1.25 4.891 4.891 0 0 1-1.2505-3.3333 4.891 4.891 0 0 1 1.2505-3.3333 4.8569 4.8569 0 0 1 3.3294-1.25h8.1536a4.8569 4.8569 0 0 1 3.3294 1.25 4.891 4.891 0 0 1 1.2505 3.3333z" />
                </svg>
            )
        },
    ];

    return (
        <section className="py-8 bg-black relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 text-center"
                >
                    <h2 className="text-[40px] font-black mb-4 tracking-tight text-white">
                        Trusted By Global Giants
                    </h2>
                    <p className="text-white/40 text-sm md:text-base font-medium uppercase tracking-wider">
                        Creating Content For 500+ Brands
                    </p>
                </motion.div>

                {/* Brand Marquee Wrapper */}
                <div className="relative w-full overflow-hidden mt-8 px-4">
                    {/* Fading Edges Mask */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-40 z-20 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-24 md:w-40 z-20 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                    {/* Infinite Marquee Container */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity
                            }}
                            className="flex gap-4 md:gap-8 min-w-full py-8"
                        >
                            {/* Original + Duplicate Brands for seamless loop */}
                            {[...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        y: -5,
                                        borderColor: 'rgba(255, 255, 255, 0.2)',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        scale: 1.02
                                    }}
                                    className={`
                                        flex items-center gap-6 px-8 py-5 rounded-[1.5rem] bg-[#0A0A0A] border border-white/5 
                                        transition-all duration-300 min-w-[200px] md:min-w-[240px] group cursor-default flex-shrink-0
                                    `}
                                >
                                    <div className="flex-shrink-0">
                                        {brand.icon}
                                    </div>
                                    <span className="text-base md:text-lg font-black text-white/60 group-hover:text-white transition-colors tracking-tight">
                                        {brand.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default MiraaiTrust;
