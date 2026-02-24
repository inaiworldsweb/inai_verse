import React, { useState, useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Assets
import asset1 from '../../../assets/images/Miraai/model/Laxmi Fashion Shoot (1).webp';
import asset2 from '../../../assets/images/Miraai/model/Perfume (1).webp';
import asset3 from '../../../assets/images/Miraai/model/Perfume (2).webp';
import asset4 from '../../../assets/images/Miraai/model/Perfume (4).webp';
import asset5 from '../../../assets/images/Miraai/model/Rasmika Shoot (1).webp';
import asset6 from '../../../assets/images/Miraai/model/Rasmika Shoot (8).webp';
import asset7 from '../../../assets/images/Miraai/model/mans fashion ai shoot (3).webp';

/**
 * MiraaiGallery - GSAP Performance Version
 * 
 * Replaced Framer Motion with GSAP for ultra-smooth transitions.
 * Uses only GPU-accelerated properties (transform, filter, opacity).
 * Pauses ticker-based updates when not in viewport.
 */
const MiraaiGallery = () => {
    const containerRef = useRef(null);
    const galleryItems = useMemo(() => [
        { url: asset1 }, { url: asset2 }, { url: asset3 },
        { url: asset4 }, { url: asset5 }, { url: asset6 }, { url: asset7 },
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
            setActiveIndex(prev => (prev + 1) % galleryItems.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [galleryItems.length, isHovered, isInView]);

    const getNormalizedOffset = (index) => {
        let offset = index - activeIndex;
        const len = galleryItems.length;
        if (offset > len / 2) offset -= len;
        if (offset < -len / 2) offset += len;
        return offset;
    };

    const getXPos = (offset) => {
        const absOffset = Math.abs(offset);
        if (absOffset === 0) return 0;
        const direction = offset > 0 ? 1 : -1;

        const desktopSteps = [0, 220, 430, 620];
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const steps = isMobile ? [0, 85, 165, 240] : desktopSteps;

        return steps[absOffset] * direction;
    };

    useGSAP(() => {
        if (!isInView) return;

        galleryItems.forEach((_, index) => {
            const el = document.querySelector(`.gallery-item-${index}`);
            if (!el) return;

            const offset = getNormalizedOffset(index);
            const absOffset = Math.abs(offset);
            const x = getXPos(offset);
            const scale = absOffset === 0 ? 1.1 : 1 - (absOffset * 0.07);
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
        <section ref={containerRef} className="mr-10 bg-black overflow-hidden relative flex flex-col items-center justify-center py-12">
            <div className="w-full max-w-[1400px] mx-auto px-4 text-center z-20 mb-8 md:mb-16">
                <h2 className="text-[25px] md:text-[45px] font-inter text-white tracking-tighter">
                    Visualizing The Future Of Creativity
                </h2>
            </div>

            <div className="relative h-[480px] md:h-[650px] flex items-center justify-center">
                <div className="relative w-full max-w-[1500px] h-full flex items-center justify-center overflow-visible">
                    {galleryItems.map((item, index) => {
                        const offset = getNormalizedOffset(index);
                        const absOffset = Math.abs(offset);

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className={`gallery-item-${index} absolute rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300
                                    ${absOffset === 0
                                        ? 'border-[3px] border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.4)]'
                                        : 'border border-white/10 shadow-2xl'}`}
                                style={{
                                    width: '245px',
                                    height: '350px',
                                    willChange: 'transform'
                                }}
                            >
                                <div className="w-full h-full relative bg-zinc-900">
                                    <img
                                        src={item.url}
                                        alt="Gallery"
                                        className="w-full h-full object-cover select-none pointer-events-none"
                                        draggable="false"
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

export default MiraaiGallery;