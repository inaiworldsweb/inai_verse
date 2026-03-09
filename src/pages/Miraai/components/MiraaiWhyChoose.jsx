import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: 'AI + Expert Team Approach',
        description: 'We combine advanced artificial intelligence with experienced creative professionals to deliver perfectly polished content.',
    },
    {
        title: 'Done-For-You Creative Services',
        description: "You don't need tools, software, or technical skills. Our team handles everything from concept to final delivery.",
    },
    {
        title: 'Dedicated Client Support',
        description: 'Enjoy personalized support with a dedicated project manager and expert guidance at every step.',
    },
    {
        title: 'Faster Turnaround Time',
        description: 'Get high-quality videos, images, and ads in days — not weeks or months.',
    },
    {
        title: 'Cost-Effective Production',
        description: 'Save up to 70% compared to traditional studios and agencies without compromising quality.',
    },
    {
        title: 'Consistent Brand Quality',
        description: 'Every project follows strict brand guidelines to maintain uniform design, tone, and messaging.',
    },
];

const MiraaiWhyChoose = () => {
    return (
        <section className=" md:py-16  px-6 sm:px-6  bg-black">
            <div className=" mb-6 max-w-[1200px] mx-auto ">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className=" md:mb-10  text-[1.5625rem] md:text-[2rem] lg:text-[2.5rem] text-white tracking-[1px] font-bold">
                        Why Choose Miraai?
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative group rounded-2xl p-[2px] overflow-hidden isolate bg-[#0A0A0A]"
                        >
                            {/* Spinning snake border */}
                            <div className="
                                absolute inset-0 z-0
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-500
                            ">
                                <div className="
                                    absolute inset-[-100%]
                                    bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,white_360deg)]
                                    group-hover:animate-[spin_3s_linear_infinite]
                                "></div>
                            </div>

                            {/* Inner content */}
                            <div className="
                                relative z-10
                                bg-[#0A0A0A] rounded-[14px]
                                h-full w-full
                                p-6 sm:p-7
                                border border-white/20
                            ">
                                <h3 className="text-white font-bold text-[16px] sm:text-[17px] tracking-[1px] [font-stretch:700%]">
                                    {feature.title}
                                </h3>
                                <p className="text-[#ccc] text-[0.875rem] sm:text-[14px] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiraaiWhyChoose;
