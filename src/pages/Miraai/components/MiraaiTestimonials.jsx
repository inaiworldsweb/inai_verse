import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = ({ quote, name, role, city, isActive }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isActive ? 1 : 0.5, scale: isActive ? 1 : 0.9 }}
        transition={{ duration: 0.5 }}
        className={`p-8 md:p-12 rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 flex flex-col items-start text-left min-w-[320px] md:min-w-[500px] max-w-2xl mx-4 ${isActive ? 'shadow-2xl shadow-blue-500/5 border-white/10' : 'blur-[1px]'}`}
    >
        <div className="mb-6">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-white/20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
            </svg>
            <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed italic mb-8">
                "{quote}"
            </p>
        </div>
        <div>
            <h4 className="text-white text-lg md:text-xl font-bold tracking-tight">
                {name}
            </h4>
            <p className="text-white/40 text-sm md:text-base font-medium">
                {role} ({city})
            </p>
        </div>
    </motion.div>
);

const MiraaiTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const testimonials = [
        {
            quote: "Miraai transformed our product marketing. Their team delivered high-quality videos and creatives within days. Our sales and engagement improved significantly.",
            name: "Rajesh Patel",
            role: "E-Commerce Business Owner",
            city: "Surat"
        },
        {
            quote: "The speed and quality Miraai provides is unmatched. We used to wait weeks for ads, now we get them in days. It's been a game changer for our digital growth.",
            name: "Anjali Sharma",
            role: "Marketing Director",
            city: "Mumbai"
        },
        {
            quote: "I was skeptical about AI at first, but the expert human touch Miraai adds makes all the difference. The branding is consistent and the videos are top-notch.",
            name: "Vikram Mehta",
            role: "SaaS Founder",
            city: "Bangalore"
        }
    ];

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Fast auto-scroll every 3 seconds

        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <section className="py-16 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center mb-24 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        What Our Clients Say About Miraai
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/40 text-lg md:text-xl font-medium"
                    >
                        Join 500+ businesses across India who trust Miraai for professional creative services.
                    </motion.p>
                </div>

                {/* Slider Container */}
                <div
                    className="relative w-full flex items-center justify-center"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 md:left-10 z-20 p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex items-center justify-center w-full max-w-6xl overflow-visible px-10 md:px-0">
                        <AnimatePresence mode="wait">
                            <TestimonialCard
                                key={activeIndex}
                                {...testimonials[activeIndex]}
                                isActive={true}
                            />
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 md:right-10 z-20 p-4 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
                    >
                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex gap-3 mt-16">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-10 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Background Decorative Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
        </section>
    );
};

export default MiraaiTestimonials;
