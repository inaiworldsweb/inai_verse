import React from 'react';
import { motion } from 'framer-motion';
import { FiVideo, FiZap, FiDollarSign, FiClock } from 'react-icons/fi';

const TruthCard = ({ title, description, icon: Icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-start hover:border-white/20 transition-colors group h-full"
        >
            <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                <Icon className="text-white text-xl md:text-2xl" />
            </div>

            <h3 className="text-white text-xl font-bold mb-3 tracking-tight">
                {title}
            </h3>

            <p className="text-white/50 text-sm leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>
    );
};

const MiraaiSimpleTruth = () => {
    const truths = [
        {
            title: "What We Do",
            description: "Create High-Quality Videos And Images That Elevate Your Brand Across Ads, Social Media, Catalogs, And Digital Platforms.",
            icon: FiVideo
        },
        {
            title: "How We Do It",
            description: "Use Advanced AI Technology Combined With Creative Intelligence To Produce Professional Visuals—Without Studios, Shoots, Or Long Production Cycles.",
            icon: FiZap
        },
        {
            title: "What You Get",
            description: "Premium, Agency-Level Content At Nearly 10% Of The Traditional Cost, Making High-End Creativity Accessible To Every Brand.",
            icon: FiDollarSign
        },
        {
            title: "When You Get It",
            description: "Fast Delivery In 2-4 Days, Instead Of Waiting 2-4 Months With Traditional Production.",
            icon: FiClock
        }
    ];

    return (
        <section className="py-8 bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Side: Header & Text */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start flex flex-col justify-center h-full pt-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[40px] font-bold text-white mb-6 md:mb-8 tracking-tighter"
                        >
                            The Simple Truth
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/80 text-[25px] md:leading-relaxed font-medium max-w-md"
                        >
                            We handle everything from concept to final delivery. You just tell us what you need.
                        </motion.p>
                    </div>

                    {/* Right Side: 2x2 Grid */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {truths.map((truth, index) => (
                                <TruthCard
                                    key={index}
                                    index={index}
                                    {...truth}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MiraaiSimpleTruth;
