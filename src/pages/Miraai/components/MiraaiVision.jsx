import React from 'react';
import { motion } from 'framer-motion';

// Using a high-quality local asset for the vision section
import visionImg from '../../../assets/final/1.png';

const MiraaiVision = () => {
    return (
        <section className="py-12 bg-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center">
                {/* Large Impact Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden mb-16 border border-white/5 shadow-2xl relative group"
                >
                    <img
                        src={visionImg}
                        alt="Miraai Vision"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Narrative Impact Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center px-4"
                >
                    <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white leading-[1.3] max-w-4xl mx-auto">
                        Miraai helps brands scale professional creative
                        <motion.span
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "auto", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="inline-flex align-middle mx-3 overflow-hidden rounded-xl border border-white/20 shadow-xl"
                        >
                            <img
                                src={visionImg}
                                className="w-12 h-8 md:w-20 md:h-12 object-cover"
                                alt="Miraai Inline Visual"
                            />
                        </motion.span>
                        content 10x faster with up to 70% cost savings.
                    </h2>
                </motion.div>
            </div>
        </section>
    );
};

export default MiraaiVision;
