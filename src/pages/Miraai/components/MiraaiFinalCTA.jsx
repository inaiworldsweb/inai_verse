import React from 'react';
import { motion } from 'framer-motion';
import ctaBg from '../../../Assetsa/e.png';

const MiraaiFinalCTA = () => {
    return (
        <section className="py-20 bg-black w-full px-6 md:px-8 lg:px-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full min-h-[400px] md:h-[400px] h-auto py-16 md:py-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center text-center px-6"
            >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src={ctaBg}
                        alt="Workspace"
                        className="w-full h-full object-cover object-center opacity-60 scale-105"
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
                        className="text-[25px] md:text-[40px] font-bold text-white mb-6 md:mb-8 tracking-tight leading-[1.2]"
                    >
                        Ready To Grow Your Brand With Professional Content?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-white/80 text-[15px] md:text-[25px] font-['Inter'] font-medium mb-10 md:mb-12 max-w-2xl mx-auto leading-normal"
                    >
                        Let Our AI-Powered Expert Team Handle Your Videos, Ads, And Branding <br className="hidden md:block" />
                        So You Can Focus On Your Business.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{}}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-3 md:px-10 md:py-4 bg-white text-black text-sm md:text-lg font-bold rounded-full shadow-[0_20px_40px_rgba(255,255,255,0.15)] hover:shadow-[0_25px_50px_rgba(255,255,255,0.25)] transition-all"
                    >
                        <span className="relative block h-[1.2em] overflow-hidden">
                            <span className="block leading-none transition-transform duration-300 group-hover:-translate-y-[120%]">
                                Contact Our Team
                            </span>
                            <span className="absolute left-0 top-[120%] block leading-none transition-transform duration-300 group-hover:-translate-y-[120%]">
                                Contact Our Team
                            </span>
                        </span>
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default MiraaiFinalCTA;
