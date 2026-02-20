import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Importing a variety of local assets for all service items
// Importing assets from Assetsa for all service items
import thumb1 from '../../../Assetsa/N-1.webp';
import thumb2 from '../../../Assetsa/N-2.webp';
import thumb3 from '../../../Assetsa/N-3.webp';
import thumb4 from '../../../Assetsa/N-4.webp';
import thumb5 from '../../../Assetsa/N-5.webp';

const services = [
    {
        id: '01',
        title: "We Create AI Videos",
        description: "Generate professional videos from scratch using AI—no filming required. From script to screen in minutes.",
        thumbnail: thumb1,
        color: "from-blue-500/20 to-purple-500/20"
    },
    {
        id: '02',
        title: "We Create AI Images & Visuals",
        description: "Generate high-quality photos, graphics, and designs using AI—no photographers needed. 24/7 creative output.",
        thumbnail: thumb2,
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: '03',
        title: "We Create AI Product & Catalogs",
        description: "Send us your product list—we create complete digital catalogs with professional visuals automatically.",
        thumbnail: thumb3,
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: '04',
        title: "We Create AI UGC-Style Video Ads",
        description: "High-converting UGC style ads that look authentic and drive massive engagement across social platforms.",
        thumbnail: thumb4,
        color: "from-pink-500/20 to-rose-500/20"
    },
    {
        id: '05',
        title: "We Create AI Multi-Language Videos",
        description: "Create your video once in English—we deliver it in Hindi, Gujarati, Tamil, and 7+ other languages instantly.",
        thumbnail: thumb5,
        color: "from-cyan-500/20 to-blue-500/20"
    }
];

const ServiceItem = ({ service, index, setInView }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) setInView(index);
    }, [isInView, index, setInView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: isInView ? 1 : 0.2 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col justify-center pl-8 md:pl-16 border-l border-white/10"
        >
            <span className="text-sm font-mono text-gray-500 mb-4 block tracking-widest">
                /{service.id}
            </span>
            <h3 className="text-[25px] text-white mb-6 leading-tight">
                {service.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
                {service.description}
            </p>
        </motion.div>
    );
};

const MiraaiServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-black min-h-screen relative font-sans pt-24 pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[25px] md:text-[40px] text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                    >
                        Our Capabilities.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-400 text-[15px] md:text-[25px] font-['Inter'] max-w-3xl mx-auto"
                    >
                        Scroll to explore how we transform your production workflow with AI.
                    </motion.p>
                </div>

                {/* Main Content Grid */}
                <div className="hidden lg:flex flex-row relative">

                    {/* Left Side: Sticky Image Preview */}
                    <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center p-8">
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
                            {/* Animated Image Transition */}
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 z-10"
                                >
                                    <img
                                        src={services[activeIndex].thumbnail}
                                        alt={services[activeIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Dynamic Background Glow */}
                            <motion.div
                                key={`glow-${activeIndex}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ duration: 1 }}
                                className={`absolute inset-0 bg-gradient-to-br ${services[activeIndex].color} z-0 pointer-events-none mix-blend-screen`}
                            />
                        </div>
                    </div>

                    {/* Right Side: Scrollable Text Content */}
                    <div className="w-1/2 relative z-10 pl-12 pb-8">
                        {services.map((service, index) => (
                            <ServiceItem
                                key={index}
                                service={service}
                                index={index}
                                setInView={setActiveIndex}
                            />
                        ))}
                    </div>

                </div>

                {/* Mobile View (Standard Stack) */}
                <div className="lg:hidden flex flex-col gap-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                            className="bg-gray-900/50 rounded-3xl p-6 border border-white/5"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                                <img src={service.thumbnail} alt={service.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <span className="text-xs font-mono text-blue-400 mb-3 block tracking-widest uppercase">
                                    {service.id} — Capability
                                </span>
                                <h3 className="text-[25px] text-white mb-4 leading-tight">{service.title}</h3>
                                <p className="text-gray-400 text-[15px] leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MiraaiServices;