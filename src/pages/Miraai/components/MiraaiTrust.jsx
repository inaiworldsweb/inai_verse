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
        <section className="pt-32 pb-0 bg-black relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white">
                        Trusted By Global Giants
                    </h2>
                    <p className="text-white/40 text-base md:text-lg font-medium tracking-tight uppercase tracking-widest">
                        Creating Content For 500+ Brands
                    </p>
                </motion.div>

                {/* Brand Cards Row */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                scale: 1.02
                            }}
                            className={`
                                flex items-center gap-6 px-10 py-6 rounded-[2rem] bg-[#0A0A0A] border border-white/5 
                                transition-all duration-500 min-w-[240px] group cursor-default
                            `}
                        >
                            <div className="flex-shrink-0">
                                {brand.icon}
                            </div>
                            <span className="text-lg md:text-xl font-black text-white/80 group-hover:text-white transition-colors tracking-tight">
                                {brand.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default MiraaiTrust;
