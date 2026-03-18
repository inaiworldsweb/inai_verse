import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * MiraaiHero - Performance Optimized Version
 * 
 * Refactored to use GSAP for ticker synchronization with Lenis.
 * Uses GPU-accelerated transforms and proper memory cleanup.
 */
const MiraaiHero = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef(null);

    const stats = [
        { label: 'Videos Created', value: '50,000+' },
        { label: 'Images Generated', value: '100,000+' },
        { label: 'Average Cost Savings', value: '70%' },
        { label: 'Day Delivery', value: '2-4' },
    ];

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Kill any potential background CPU usage by making it responsive to view
        gsap.fromTo(contentRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                force3D: true,
                willChange: "transform, opacity"
            }
        );

        gsap.fromTo(statsRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
                force3D: true,
                willChange: "transform, opacity"
            }
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-180px)] lg:min-h-[calc(100vh-160px)] relative py-6 md:py-10  px-6 sm:px-6  overflow-hidden">

            {/* Hero Content */}
            <div ref={contentRef} className="max-w-[70rem] mx-auto mt-4 md:mt-10 lg:mt-15 text-center z-10 opacity-0 mb-6">
                <h1 className=" mb-6 text-[1.5625rem] md:text-[2rem] lg:text-[2.5rem] font-bold tracking-[1px] [font-stretch:700%] leading-[1.20] text-white">
                    We Create Professional Videos & Visuals <br className="hidden md:block" />
                    For Your Brand Using AI
                </h1>

                <p className=" mb-6 text-[#ccc] text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] leading-relaxed max-w-2xl mx-auto font-medium font-['Inter']">
                    No cameras. No studios. No crews. Just give us your ideas—we'll deliver broadcast-quality
                    content in days using advanced AI technology.
                </p>

                <div className="flex justify-center">
                    <div className="group relative flex items-center gap-2 bg-white/[0.10] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 rounded-[7px] md:rounded-[10px] text-xl font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20">
                        <button 
                            className="relative px-4 py-2 flex items-center gap-2 bg-transparent text-white font-medium transition-all duration-300"
                        >
                            Start Your First Project
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div
                ref={statsRef}
                className="w-full max-w-[1070px] h-auto md:h-[140px] lg:h-[164px] bg-[#0A0A0A] overflow-hidden mx-auto opacity-0 rounded-lg"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 h-full">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`px-4 md:px-6 py-6 md:py-8 lg:py-10 flex flex-col items-center justify-center relative
                                ${index === 0 ? 'border-b border-r border-white/10 md:border-b-0' : ''}
                                ${index === 1 ? 'border-b border-white/10 md:border-b-0 md:border-r' : ''}
                                ${index === 2 ? 'border-r border-white/10' : ''}
                            `}
                        >
                            <span className="text-xl md:text-2xl lg:text-4xl text-[#ccc] tracking-tight text-white">
                                {stat.value}
                            </span>
                            <span className="text-white/40 text-[9px] md:text-[11px] lg:text-[13px] text-[#ccc] uppercase whitespace-nowrap">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MiraaiHero;