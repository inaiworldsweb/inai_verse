import React, { useRef, useEffect, useState } from "react";
// import HeroImage from "../../../assets/centerimage.avif";

const SynProHeroSection = () => {
    const containerRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const { top, height } =
                containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const totalScroll = height - windowHeight;
            const currentScroll = -top;

            const p = Math.max(
                0,
                Math.min(1, currentScroll / totalScroll)
            );

            setProgress(p);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    // ---------- IMAGE CONTROL ----------

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const scaleProgress = easeOut(progress);

    const startScale = 3;
    const endScale = 0.4;

    const currentScale =
        startScale - scaleProgress * (startScale - endScale);

    // ---------- TEXT CONTROL ----------

    const textStart = 0.4;
    const raw = Math.max(0, progress - textStart);
    const textProgress = Math.min(1, raw * 1.5);
    const eased = easeOut(textProgress);

    const spreadX = window.innerWidth;
    const spreadY = window.innerHeight;

    const topOffset = -spreadY * (1 - eased);
    const leftOffset = -spreadX * (1 - eased);
    const rightOffset = spreadX * (1 - eased);
    const bottomOffset = spreadY * (1 - eased);

    const opacity = eased;

    return (
        <div
            ref={containerRef}
            className="relative h-[250vh] bg-black text-white"
        >
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

                <div className="relative w-full max-w-7xl flex flex-col items-center justify-center">

                    {/* TOP TEXT */}
                    <div
                        style={{
                            opacity,
                            transform: `translateY(${topOffset + 100}px)`
                        }}
                    >
                        <p className="text-[40px] font-bold text-center whitespace-nowrap">
                            Miraai helps brands scale Professional
                        </p>
                    </div>

                    {/* MIDDLE ROW */}
                    <div className="flex items-center justify-center">

                        {/* LEFT TEXT */}
                        <div
                            style={{
                                opacity,
                                transform: `translateX(${leftOffset + 140}px)`
                            }}
                        >
                            <p className="text-[40px] font-bold">
                                Creative
                            </p>
                        </div>

                        {/* IMAGE */}
                        <div
                            className="relative w-[70vw] md:w-[28vw]  rounded-lg overflow-hidden shadow-2xl"
                            style={{
                                height: "336px",
                                transform: `scale(${currentScale} )`,
                                transformOrigin: "center center"
                            }}
                        >
                            <img
                                src={HeroImage}
                                alt="Hero"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* RIGHT TEXT */}
                        <div
                            style={{
                                opacity,
                                transform: `translateX(${rightOffset - 140}px)`
                            }}
                        >
                            <p className="text-[40px] font-bold">
                                Content
                            </p>
                        </div>

                    </div>

                    {/* BOTTOM TEXT */}
                    <div
                        style={{
                            opacity,
                            transform: `translateY(${bottomOffset - 100}px)`
                        }}
                        className="text-center"
                    >
                        <p className="text-[40px] font-bold">
                            10× faster with up to 70% cost savings.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SynProHeroSection;