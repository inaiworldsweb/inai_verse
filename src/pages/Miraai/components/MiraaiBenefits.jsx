import React from 'react';
import { motion } from 'framer-motion';

const MiraaiBenefits = () => {
    const benefits = [
        {
            stat: "10x",
            title: "Faster Workflow",
            desc: "From concept to final export in days, not months. Our AI pipeline eliminates traditional production bottlenecks.",
            icon: "⚡"
        },
        {
            stat: "70%",
            title: "Cost Efficiency",
            desc: "High-end production quality at a fraction of the cost. No expensive gear, crews, or studios needed.",
            icon: "💰"
        },
        {
            stat: "∞",
            title: "Unlimited Scale",
            desc: "Generate hundreds of variations for A/B testing or localized content in a single click.",
            icon: "🚀"
        },
        {
            stat: "8K",
            title: "Crystal Clarity",
            desc: "Cutting-edge diffusion models ensure your content is always sharp, vibrant, and professional.",
            icon: "💎"
        }
    ];

    return (
        <section className="py-32 bg-black relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-white"
                    >
                        Why Choose Miraai?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/40 text-base md:text-lg max-w-2xl mx-auto font-medium"
                    >
                        We combine human creativity with the world's most powerful AI to redefine content production.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 text-4xl opacity-10 group-hover:opacity-30 transition-opacity">
                                {benefit.icon}
                            </div>

                            <div className="text-3xl md:text-4xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20 group-hover:from-purple-400 group-hover:to-white transition-all duration-500">
                                {benefit.stat}
                            </div>

                            <h3 className="text-xl font-black mb-4 text-white group-hover:text-purple-400 transition-colors">
                                {benefit.title}
                            </h3>

                            <p className="text-white/30 leading-relaxed font-medium group-hover:text-white/50 transition-colors">
                                {benefit.desc}
                            </p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />
        </section>
    );
};

export default MiraaiBenefits;
