import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = ({ quote, name, role }) => (
    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
        <div className="bg-[#050505] rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between">
            <div>
                <p className="text-white/60 text-[15px] md:text-[16px] leading-relaxed mb-8 font-light tracking-wide">
                    "{quote}"
                </p>
            </div>

            <div>
                <h4 className="text-white text-[16px] font-medium tracking-tight">
                    {name} <span className="text-white/60 font-light"> – {role}</span>
                </h4>
            </div>
        </div>
    </div>
);

const MiraaiTestimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const testimonials = [
        {
            quote: "Miraai transformed our product marketing. Their team delivered high-quality videos and creatives within days. Our sales and engagement improved significantly.",
            name: "Rajesh Patel",
            role: "E-Commerce Business Owner (Surat)"
        },
        {
            quote: "The speed and quality Miraai provides is unmatched. We used to wait weeks for ads, now we get them in days. It's been a game changer for our digital growth.",
            name: "Anjali Sharma",
            role: "Marketing Director (Mumbai)"
        },
        {
            quote: "I was skeptical about AI at first, but the expert human touch Miraai adds makes all the difference. The branding is consistent and the videos are top-notch.",
            name: "Vikram Mehta",
            role: "SaaS Founder (Bangalore)"
        },
        {
            quote: "The content creation process has never been easier. Miraai's platform is intuitive and their team is always ready to help with any creative needs.",
            name: "Priya Nair",
            role: "Brand Manager (Delhi)"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const next = isMobile ? prev + 1 : prev + 2;
            return next >= testimonials.length ? 0 : next;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const previous = isMobile ? prev - 1 : prev - 2;
            return previous < 0 ? (isMobile ? testimonials.length - 1 : testimonials.length - 2) : previous;
        });
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, currentIndex, isMobile]);

    // Get current cards to display (1 for mobile, 2 for desktop)
    const visibleCards = isMobile
        ? [testimonials[currentIndex]]
        : [
            testimonials[currentIndex],
            testimonials[(currentIndex + 1) % testimonials.length]
        ].filter(Boolean);

    return (
        <section className="py-4 md:py-8 bg-black overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-10 ">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[25px] md:text-[40px] font-bold text-white mb-6 tracking-tight"
                    >
                        What Our Clients Say About Miraai
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-[15px] md:text-[25px] w-full mx-auto font-light lg:whitespace-nowrap"
                    >
                        Join 500+ businesses across India who trust Miraai for professional creative services.
                    </motion.p>
                </div>

                {/* Carousel Container */}
                <div
                    className="relative px-0 md:px-12"
                    onMouseEnter={() => !isMobile && setIsPaused(true)}
                    onMouseLeave={() => !isMobile && setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#111] text-white/50 hover:text-white hover:bg-[#222] transition-all items-center justify-center border border-white/5"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Testimonials Grid */}
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-wrap -mx-4"
                            >
                                {visibleCards.map((testimonial, index) => (
                                    <TestimonialCard
                                        key={`${currentIndex}-${index}`}
                                        {...testimonial}
                                    />
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#111] text-white/50 hover:text-white hover:bg-[#222] transition-all items-center justify-center"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Mobile Navigation Dots */}
                    <div className="md:hidden flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? 'bg-white w-6' : 'bg-white/70'}`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
            </div>
        </section>
    );
};

export default MiraaiTestimonials;
