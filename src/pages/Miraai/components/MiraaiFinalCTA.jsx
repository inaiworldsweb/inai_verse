import React from 'react';
import { motion } from 'framer-motion';
import ctaBg from '../../../Assetsa/e.png';

const MiraaiFinalCTA = () => {
    return (
        <section className="py-12 bg-black w-full px-4 sm:px-6 lg:px-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden flex items-center justify-center text-center px-6"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src={ctaBg}
                        alt="Workspace"
                        className="w-full h-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[40px] font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight"
                    >
                        Ready To Grow Your Brand With Professional Content?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-white/80 text-[25px] font-medium mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Let Our AI-Powered Expert Team Handle Your Videos, Ads, And Branding <br className="hidden md:block" />
                        So You Can Focus On Your Business.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-white text-black text-base md:text-lg font-bold rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.25)] transition-all"
                    >
                        Contact Our Team
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default MiraaiFinalCTA;
