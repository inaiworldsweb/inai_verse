import React, { useEffect, useRef, useState } from "react";

// Assuming these are your faculty images
import StyleA from "../../../assets/vinai.webp";
import StyleB from "../../../assets/Aera.webp";
import StyleC from "../../../assets/inai.webp";

const images = [StyleA, StyleB, StyleC];

const MeetOurFaculties = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress based on how much of the section has scrolled past the top
            if (rect.top <= 0) {
                const scrollableHeight = rect.height - windowHeight;
                const scrolled = Math.abs(rect.top);
                const progress = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);

                // Map progress to image index
                const index = Math.min(
                    images.length - 1,
                    Math.floor(progress * images.length)
                );
                setActiveIndex(index);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        /* 1. Added ref here. h-[300vh] creates the scroll runway */
        <section
            ref={containerRef}
            className="relative h-[300vh] bg-black"
            id="meet-our-faculties"
        >
            {/* 2. Sticky container keeps the content visible while scrolling the 300vh */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">

                <div className="max-w-[1200px] mx-auto text-center z-10">
                    <h2 className="text-[25px] md:text-[40px] font-bold mb-4 text-white capitalize tracking-tight">
                        Meet Our Smart AI Faculties
                    </h2>
                    <h4 className="text-[15px] md:text-[25px] font-bold text-white/70 max-w-[600px] mx-auto mb-12 capitalize tracking-tight">
                        Powered By ED-INAI <br /> Your Always-Available Digital Academic Partner.
                    </h4>
                </div>

                {/* 3. The Animated Image Stack */}
                <div className="relative w-[280px] h-[380px] md:w-[450px] md:h-[550px]">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out transform
                                ${index === activeIndex
                                    ? "opacity-100 scale-100 translate-y-0"
                                    : "opacity-0 scale-95 translate-y-10 pointer-events-none"
                                }
                            `}
                        >
                            <div className="rounded-[30px] overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/10 h-full">
                                <img
                                    src={src}
                                    alt={`AI Faculty ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Optional: Progress Indicators */}
                <div className="flex gap-2 mt-8">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-blue-500" : "w-2 bg-white/20"}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetOurFaculties;