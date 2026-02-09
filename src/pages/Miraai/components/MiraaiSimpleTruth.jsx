import React from 'react';
import { motion } from 'framer-motion';

const TruthCard = ({ title, subtitle, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-[#0A0A0A] border border-white/5 p-8 rounded-[2rem] hover:border-white/20 transition-all duration-300 group"
    >
        <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight">
            {title}
        </h3>
        <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed group-hover:text-white/60 transition-colors">
            {subtitle}
        </p>
    </motion.div>
);

const MiraaiSimpleTruth = () => {
    const truths = [
        {
            title: "What We Do",
            subtitle: "Create Videos And Images For Your Brand"
        },
        {
            title: "What We Do",
            subtitle: "Create Videos And Images For Your Brand"
        },
        {
            title: "What You Get",
            subtitle: "Professional Content At 10% Of Traditional Cost"
        },
        {
            title: "When You Get It",
            subtitle: "2-4 Days Instead Of 2-4 Months"
        }
    ];

    return (
        <section className="py-32 bg-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-black text-center text-white mb-20 tracking-tighter"
                >
                    The Simple Truth
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
                    {truths.map((truth, index) => (
                        <TruthCard
                            key={index}
                            index={index}
                            title={truth.title}
                            subtitle={truth.subtitle}
                        />
                    ))}
                </div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-white/80 text-base md:text-xl font-black tracking-tight max-w-2xl mx-auto leading-relaxed">
                        We handle everything from concept to final delivery.<br />
                        You just tell us what you need.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MiraaiSimpleTruth;
