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

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={containerRef} className="relative h-[300vh] bg-black">


            <div className="sticky top-0 h-screen flex flex-col items-center justify-start pt-24 md:pt-32\ overflow-hidden px-4">

                {/* --- Text Content --- */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-white text-[20px] md:text-[40px] font-bold tracking-tight uppercase">
                        Meet Our Smart Ai Faculty
                    </h2>
                    <div className="mt-4 space-y-2">
                        <p className="text-white/60 text-[15px] md:text-[25px] font-medium tracking-widest uppercase">
                            Powered By Ed-INAI
                        </p>
                        <p className="text-white/80 text-[15px] md:text-[25px] font-inter">
                            Your Always-Available Digital Academic Partner
                        </p>
                    </div>
                </div>

                <div className="relative w-[280px] h-[380px] md:w-[420px] md:h-[520px]">
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
        </div>
    );
};

export default MeetOurFaculties;