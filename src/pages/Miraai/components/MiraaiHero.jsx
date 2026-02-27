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
        <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] relative py-12 overflow-hidden">

            {/* Hero Content */}
            <div ref={contentRef} className="max-w-[70rem] mx-auto text-center z-10 opacity-0">
                <h1 className="text-[25px] md:text-[40px] font-bold tracking-[1px] [font-stretch:700%] mb-6 leading-[1.05] text-white">
                    We Create Professional Videos & Visuals <br className="hidden md:block" />
                    For Your Brand Using AI
                </h1>

                <p className="text-[#ccc] text-[15px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-10 font-medium font-['Inter']">
                    No cameras. No studios. No crews. Just give us your ideas—we'll deliver broadcast-quality
                    content in days using advanced AI technology.
                </p>

                <div className="flex justify-center mb-12">
                    <button
                        className="min-w-[140px] md:min-w-[210px] h-[40px] md:h-[44px] px-4 md:px-4 flex items-center justify-center bg-white/90 text-black font-semibold rounded-full text-xs md:text-sm transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] backdrop-blur-sm"
                    >
                        <span className="font-['Inter']">
                            Start Your First Project
                        </span>
                    </button>
                </div>
            </div>

            {/* Stats Section */}
            <div
                ref={statsRef}
                className="w-full max-w-[1070px] h-auto md:h-[164px] bg-[#0A0A0A] overflow-hidden mx-auto opacity-0 rounded-lg"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 h-full">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`px-6 py-10 md:py-16 flex flex-col items-center justify-center relative
                                ${index === 0 ? 'border-b border-r border-white/10 md:border-b-0' : ''}
                                ${index === 1 ? 'border-b border-white/10 md:border-b-0 md:border-r' : ''}
                                ${index === 2 ? 'border-r border-white/10' : ''}
                            `}
                        >
                            <span className="text-2xl md:text-4xl mb-1 tracking-tight text-white">
                                {stat.value}
                            </span>
                            <span className="text-white/40 text-[10px] md:text-[13px] uppercase whitespace-nowrap">
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