import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="p-8 md:p-10 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col items-start text-left group"
    >
        <h3 className="text-white text-lg md:text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
            {title}
        </h3>
        <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed group-hover:text-white/60 transition-colors">
            {description}
        </p>
    </motion.div>
);

const MiraaiWhyChoose = () => {
    const features = [
        {
            title: "AI + Expert Team Approach",
            description: "We combine advanced artificial intelligence with experienced creative professionals to deliver perfectly polished content."
        },
        {
            title: "Done-For-You Creative Services",
            description: "You don't need tools, software, or technical skills. Our team handles everything from concept to final delivery."
        },
        {
            title: "Dedicated Client Support",
            description: "Enjoy personalized support with a dedicated project manager and expert guidance at every step."
        },
        {
            title: "Faster Turnaround Time",
            description: "Get high-quality videos, images, and ads in days — not weeks or months."
        },
        {
            title: "Cost-Effective Production",
            description: "Save up to 70% compared to traditional studios and agencies without compromising quality."
        },
        {
            title: "Consistent Brand Quality",
            description: "Every project follows strict brand guidelines to maintain uniform design, tone, and messaging."
        }
    ];

    return (
        <section className="py-8 bg-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-[40px] font-bold text-white tracking-tight">
                        Why Choose Miraai?
                    </h2>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiraaiWhyChoose;
