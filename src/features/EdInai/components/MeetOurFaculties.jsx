import React, { useEffect, useRef, useState } from "react";

import StyleA from "../../../assets/vinai.webp"
import StyleB from "../../../assets/Aera.webp"
import StyleC from "../../../assets/inai.webp"

const images = [StyleA, StyleB, StyleC];

const MeetOurFaculties = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                const scrollableHeight = rect.height - windowHeight;
                const scrollProgress = Math.abs(rect.top) / scrollableHeight;

                const index = Math.min(
                    images.length - 1,
                    Math.floor(scrollProgress * images.length)
                );

                setActiveIndex(index);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="py-10 md:py-16 bg-black" id="meet-our-faculties">
            <div className="max-w-[1200px] mx-auto text-center px-4">
                <h2 className="text-[25px] md:text-[40px] font-bold mb-4 md:mb-8 text-white px-4 capitalize tracking-tight">Meet Our Smart AI Faculties</h2>
                <h4 className="text-[15px] md:text-[25px] font-bold text-white/70 max-w-[500px] mx-auto mb-8 capitalize tracking-tight">Powered By ED-INAI <br />Your Always-Available Digital Academic Partner.</h4>
                
                <div className="relative w-[280px] h-[380px] md:w-[420px] md:h-[520px] mx-auto">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt="AI Faculty Avatar"
                            className={`
                                absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out
                                ${index === activeIndex
                                    ? "opacity-100 scale-100 translate-y-0"
                                    : "opacity-0 scale-95 translate-y-4"}
                            `}
                        />
                    ))}
                </div>
            </div>
            <div className="h-[30vh] w-full" />
        </section>
    );
};

export default MeetOurFaculties;