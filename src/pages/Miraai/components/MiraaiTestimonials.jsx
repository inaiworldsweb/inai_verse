import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = ({ quote, name, role }) => (
    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:border-white/20">
            <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 font-light">
                "{quote}"
            </p>
            <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl font-bold mr-4">
                    {name.charAt(0)}
                </div>
                <div>
                    <h4 className="text-white text-lg font-medium">
                        {name}
                    </h4>
                    <p className="text-white/60 text-sm">
                        {role}
                    </p>
                </div>
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
        <section className="py-16 md:py-24 bg-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto"
                    >
                        Join 500+ businesses across India who trust Miraai for professional creative services.
                    </motion.p>
                </div>

                {/* Carousel Container */}
                <div 
                    className="relative px-8 md:px-12"
                    onMouseEnter={() => !isMobile && setIsPaused(true)}
                    onMouseLeave={() => !isMobile && setIsPaused(false)}
                >
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-white/20 text-black hover:bg-gray-100 transition-all items-center justify-center"
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
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-white/20 text-black hover:bg-gray-100 transition-all items-center justify-center"
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
