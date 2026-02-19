import React, { useRef, useEffect, useState } from "react";
import HeroImage from "../../../assets/centerImage.webp"

const SynProHeroSection = () => {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        const handleScroll = () => {
            if (!containerRef.current || window.innerWidth < 768) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalScrollable = rect.height - windowHeight;
            const currentScroll = -rect.top;
            const p = Math.max(0, Math.min(1, currentScroll / totalScrollable));
            setProgress(p);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const animProgress = isMobile ? 1 : easeOut(progress);

    // Dimensions
    const startWidth = 1100; 
    const endWidth = 280; 
    const startHeight = 600;
    const endHeight = 100;

    const currentWidth = isMobile ? "320px" : `${startWidth - (animProgress * (startWidth - endWidth))}px`;
    const currentHeight = isMobile ? "200px" : `${startHeight - (animProgress * (startHeight - endHeight))}px`;

    // Slide distance (Desktop only)
    const slideInDist = (1 - animProgress) * 400; 

    return (
        <div ref={containerRef} className={`relative ${isMobile ? '' : 'h-[300vh]'} bg-black text-white`}>
            <div className={`${isMobile ? 'relative h-[520px]' : 'sticky top-0 h-screen'} flex items-center justify-center overflow-hidden`}>
                
                <div className="relative w-full h-full flex items-center justify-center px-4">

                    {/* 1. TOP LINE: Miraai Helps... */}
                    <div
                        className="absolute z-20 w-full text-center"
                        style={{
                            transform: isMobile 
                                ? `translateY(-160px)` 
                                : `translateY(calc(-${slideInDist}px - ${(endHeight / 2) + 85}px))`,
                            opacity: isMobile ? 1 : (animProgress > 0.1 ? 1 : 0),
                        }}
                    >
                        <h2 className="text-[20px] md:text-[40px] font-black uppercase tracking-tighter leading-tight px-2 font-inter">
                            Miraai Helps Brands Scale Professional
                        </h2>
                    </div>

                    {/* 2. MOBILE SENTENCE / DESKTOP CREATIVE */}
                    <div
                        className="absolute z-20 text-center w-full"
                        style={{
                            transform: isMobile
                                ? `translateY(-105px)`
                                : `translateX(calc(-${slideInDist}px - ${(endWidth / 2) + 120}px))`,
                            opacity: isMobile ? 1 : (animProgress > 0.1 ? 1 : 0),
                        }}
                    >
                        <h2 className="text-[20px] md:text-[40px] mb-5 font-black uppercase tracking-tighter font-inter">
                            {isMobile ? "Creative Content 10× Faster" : "Creative"}
                        </h2>
                    </div>

                    {/* 3. CENTER IMAGE */}
                    <div
                        className="absolute z-10 overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.05)] border border-white/5"
                        style={{
                            width: currentWidth,
                            height: currentHeight,
                            borderRadius: isMobile ? "20px" : (animProgress > 0.5 ? "15px" : "40px"),
                        }}
                    >
                        <img
                            src={HeroImage}
                            alt="Hero"
                            className="w-full xs:!ml-15 h-full object-cover"
                        />
                    </div>

                    {/* 4. DESKTOP ONLY: Content 10x Faster (Mobile par hidden kyunki sentence upar chala gaya) */}
                    {!isMobile && (
                        <div
                            className="absolute z-20 text-center"
                            style={{
                                transform: `translateX(calc(${slideInDist}px + ${(endWidth / 2) + 210}px))`,
                                opacity: animProgress > 0.1 ? 1 : 0,
                            }}
                        >
                            <h2 className="text-[20px] md:text-[40px] mb-5 font-black uppercase tracking-tighter font-inter">
                                Content 10× Faster
                            </h2>
                        </div>
                    )}

                    {/* 5. BOTTOM LINE: Cost Savings */}
                    <div
                        className="absolute z-20 w-full text-center"
                        style={{
                            transform: isMobile
                                ? `translateY(125px)` 
                                : `translateY(calc(${slideInDist}px + ${(endHeight / 2) + 85}px))`,
                            opacity: isMobile ? 1 : (animProgress > 0.1 ? 1 : 0),
                        }}
                    >
                        <h2 className="text-[20px] md:text-[40px] font-black uppercase tracking-tighter font-inter leading-tight px-2">
                            With Up To 70% Cost Savings.
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SynProHeroSection;