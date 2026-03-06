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
        <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] md:min-h-[calc(100vh-160px)] relative py-6 md:py-12 overflow-hidden">

            {/* Hero Content */}
            <div ref={contentRef} className="max-w-[70rem] mx-auto mt-4 md:mt-15 text-center z-10 opacity-0">
                <h1 className="text-[25px] md:text-[40px] font-bold tracking-[1px] [font-stretch:700%] mb-8 md:mb-7 leading-[1.20] text-white">
                    We Create Professional Videos & Visuals <br className="hidden md:block" />
                    For Your Brand Using AI
                </h1>

                <p className="text-[#ccc] text-[14px] md:text-[18px] leading-relaxed max-w-2xl mx-auto mb-10 font-medium font-['Inter']">
                    No cameras. No studios. No crews. Just give us your ideas—we'll deliver broadcast-quality
                    content in days using advanced AI technology.
                </p>

                <div className="flex justify-center mb-12">
                    <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
                        <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200 cursor-pointer">
                            <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-2 py-2">
                                <div className="flex gap-2 items-center">
                                    <span className="font-semibold text-white">Start Your First Project</span>
                                </div>
                            </div>
                        </button>
                    </div>
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
                            <span className="text-2xl md:text-4xl text-[#ccc] mb-1 tracking-tight text-white">
                                {stat.value}
                            </span>
                            <span className="text-white/40 text-[10px] text-[#ccc] md:text-[13px] uppercase whitespace-nowrap">
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