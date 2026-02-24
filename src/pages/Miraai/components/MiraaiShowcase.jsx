import React, { useState, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Import model images
import img1 from '../../../assets/images/Miraai/video/download 1.gif';
import img2 from '../../../assets/images/Miraai/video/download 2.gif';
import img3 from '../../../assets/images/Miraai/video/download 3.gif';
import img4 from '../../../assets/images/Miraai/video/download 4.gif';
import img5 from '../../../assets/images/Miraai/video/download 5.gif';
import img6 from '../../../assets/images/Miraai/video/download 6.gif';
import img7 from '../../../assets/images/Miraai/video/download 7.gif';

/**
 * MiraaiShowcase - GSAP Performance Version
 * 
 * Replaces Framer Motion with GSAP for ultra-smooth 60fps transitions.
 * Directly manipulates GPU properties and synchronizes with the global ticker.
 */
const MiraaiShowcase = () => {
    const containerRef = useRef(null);
    const showcaseItems = useMemo(() => [
        { url: img1 }, { url: img2 }, { url: img3 },
        { url: img4 }, { url: img5 }, { url: img6 }, { url: img7 }
    ], []);

    const [activeIndex, setActiveIndex] = useState(3);
    const [isHovered, setIsHovered] = useState(false);
    const [isInView, setIsInView] = useState(false);

    // Visibility Observer
    useEffect(() => {
        const obs = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
        }, { threshold: 0.1 });
        if (containerRef.current) obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, []);

    // Auto-advance logic
    useEffect(() => {
        if (isHovered || !isInView) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % showcaseItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered, isInView, showcaseItems.length]);

    const getNormalizedOffset = (index) => {
        let offset = index - activeIndex;
        const len = showcaseItems.length;
        if (offset > len / 2) offset -= len;
        if (offset < -len / 2) offset += len;
        return offset;
    };

    const getXPos = (offset) => {
        const absOffset = Math.abs(offset);
        if (absOffset === 0) return 0;
        const direction = offset > 0 ? 1 : -1;

        const desktopSteps = [0, 230, 450, 650];
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const steps = isMobile ? [0, 85, 165, 240] : desktopSteps;

        return steps[absOffset] * direction;
    };

    useGSAP(() => {
        if (!isInView) return;

        showcaseItems.forEach((_, index) => {
            const el = document.querySelector(`.showcase-item-${index}`);
            if (!el) return;

            const offset = getNormalizedOffset(index);
            const absOffset = Math.abs(offset);
            const x = getXPos(offset);
            const scale = absOffset === 0 ? 1.1 : 1 - (absOffset * 0.06);
            const opacity = absOffset > 3 ? 0 : 1;
            const filter = absOffset === 0 ? 'brightness(1)' : 'brightness(0.5)';
            const zIndex = 40 - absOffset;

            gsap.to(el, {
                x,
                scale,
                opacity,
                filter,
                zIndex,
                duration: 0.8,
                ease: "power2.out",
                overwrite: "auto",
                force3D: true
            });
        });
    }, { dependencies: [activeIndex, isInView], scope: containerRef });

    return (
        <section ref={containerRef} className="py-12 bg-black overflow-hidden relative flex flex-col items-center justify-center">
            <div className="w-full max-w-[1400px] mx-auto px-4 text-center z-20 mb-8 md:mb-16">
                <div className="inline-block px-6 py-2 mb-2">
                    <span className="text-white/60 text-xs md:text-sm uppercase tracking-tighter">
                        AI Content Showcase
                    </span>
                </div>
                <h2 className="text-[25px] md:text-[45px] font-normal text-white tracking-tighter">
                    Explore Our Creative Portfolio
                </h2>
            </div>

            <div className="relative h-[480px] md:h-[650px] flex items-center justify-center">
                <div className="relative w-full max-w-[1600px] h-full flex items-center justify-center overflow-visible">
                    {showcaseItems.map((item, index) => {
                        const offset = getNormalizedOffset(index);
                        const absOffset = Math.abs(offset);

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className={`showcase-item-${index} absolute rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300
                                    ${absOffset === 0
                                        ? 'border-[3px] border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.4)]'
                                        : 'border border-white/10 shadow-2xl'}`}
                                style={{
                                    width: '245px',
                                    height: '350px',
                                    willChange: 'transform'
                                }}
                            >
                                <div className="w-full h-full relative overflow-hidden bg-gray-900">
                                    <img
                                        src={item.url}
                                        alt={`Showcase ${index + 1}`}
                                        className="w-full h-full object-cover select-none"
                                        draggable="false"
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 transition-opacity duration-500 
                                        ${absOffset === 0 ? 'bg-transparent' : 'bg-black/10'}`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MiraaiShowcase;