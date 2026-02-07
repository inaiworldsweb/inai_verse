// src/features/EdInai/components/IntegrationOptionsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Import images from assets/images folder
import cloudPlatformImg from '../../../assets/images/cloud-platform.png';
import multiDeviceImg from '../../../assets/images/multi-device-access.png';
import systemIntegrationImg from '../../../assets/images/system-integration.png';

const integrationOptions = [
    {
        id: 'cloud-platform',
        title: '100% Cloud-Based Platform',
        image: cloudPlatformImg,
    },
    {
        id: 'multi-device',
        title: 'Accessible via smart TV, web app, or projector',
        image: multiDeviceImg,
    },
    {
        id: 'system-integration',
        title: 'Seamlessly integrates with existing systems',
        image: systemIntegrationImg,
    },
];

const IntegrationOptionsSection = () => {
    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-10 md:py-12 bg-[#000000] text-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading Animation */}
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-2xl font-bold mb-10 tracking-tight"
                >
                    Integration Options
                </motion.h2>

                {/* Grid with staggered animations */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
                >
                    {integrationOptions.map((option) => (
                        <motion.div
                            key={option.id}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group flex flex-col space-y-4 cursor-pointer"
                        >
                            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800/10 shadow-lg relative">
                                <motion.img
                                    src={option.image}
                                    alt={option.title}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="w-full h-full object-cover"
                                />
                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                            <h3 className="text-sm md:text-base font-semibold leading-relaxed text-zinc-300 group-hover:text-white transition-colors duration-300 max-w-[90%]">
                                {option.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default IntegrationOptionsSection;