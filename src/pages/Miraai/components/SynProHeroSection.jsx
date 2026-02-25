import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroImage from "../../../assets/centerImage.webp";

gsap.registerPlugin(ScrollTrigger);

const SynProHeroSection = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const imageBoxRef = useRef(null);
    const topTextRef = useRef(null);
    const bottomTextRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);
    const contentWrapperRef = useRef(null);

    useGSAP(() => {
        if (window.innerWidth >= 768) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                }
            });

            // Sabse pehle image ko shrink karenge
            tl.to(imageBoxRef.current, {
                width: "280px",
                height: "150px",
                borderRadius: "20px",
                ease: "none"
            }, 0)

                // Left Text: Bahar se aayega aur image ke left mein ruk jayega
                .fromTo(leftTextRef.current,
                    { x: -150, opacity: 0, scale: 0.8 },
                    { x: 0, opacity: 1, scale: 1, ease: "power2.out" }, 0.1)

                // Right Text: Bahar se aayega aur image ke right mein ruk jayega
                .fromTo(rightTextRef.current,
                    { x: 150, opacity: 0, scale: 0.8 },
                    { x: 0, opacity: 1, scale: 1, ease: "power2.out" }, 0.1)

                // Top Text: Niche slide hokar aayega
                .fromTo(topTextRef.current,
                    { y: -100, opacity: 0 },
                    { y: 0, opacity: 1, ease: "power2.out" }, 0.2)

                // Bottom Text: Upar slide hokar aayega
                .fromTo(bottomTextRef.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, ease: "power2.out" }, 0.2);
        }
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-black -mb-20  overflow-x-hidden">
            <section
                ref={sectionRef}
                className="h-screen w-full flex items-center justify-center overflow-hidden relative"
            >
                {/* Main Animation Wrapper */}
                <div className="hidden md:flex flex-col items-center gap-0 md:gap-2 relative">

                    {/* ══ TOP TEXT ══ */}
                    <div ref={topTextRef} className="hidden md:block opacity-0 will-change-transform">
                        <h2 className="text-[25px] md:text-[40px] font-bold uppercase tracking-tighter text-white font-inter">
                            Miraai Helps Brands Scale Professional
                        </h2>
                    </div>

                    {/* ══ CENTER ROW (Left Text + Image + Right Text) ══ */}
                    <div ref={contentWrapperRef} className="flex items-center justify-center gap-4 lg:gap-2">

                        {/* LEFT TEXT */}
                        <div ref={leftTextRef} className="hidden md:block opacity-0 will-change-transform">
                            <h2 className="text-[25px] md:text-[40px] font-black uppercase tracking-tighter text-white font-inter">
                                Creative
                            </h2>
                        </div>

                        {/* IMAGE BOX */}
                        <div
                            ref={imageBoxRef}
                            className="w-[90vw] md:w-[800px] lg:w-[1000px] h-[250px] md:h-[500px] lg:h-[550px]  overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] flex-shrink-0"
                            style={{ willChange: "width, height, border-radius" }}
                        >
                            <img
                                src={HeroImage}
                                alt="Hero"
                                className="w-full h-full rounded-[30px] md:rounded-[40px] object-cover"
                                draggable={false}
                            />
                        </div>

                        {/* RIGHT TEXT */}
                        <div ref={rightTextRef} className="hidden md:block opacity-0 will-change-transform">
                            <h2 className="text-[25px] md:text-[40px] font-black uppercase tracking-tighter text-white font-inter">
                                Content
                            </h2>
                        </div>
                    </div>

                    {/* ══ BOTTOM TEXT ══ */}
                    <div ref={bottomTextRef} className="hidden md:block opacity-0 will-change-transform">
                        <h2 className="text-[25px] md:text-[40px] font-bold uppercase tracking-tighter text-white font-inter">
                            10× Faster With Up To 70% Cost Savings.
                        </h2>
                    </div>
                </div>

                {/* MOBILE VIEW (Static) */}
                <div className="md:hidden flex flex-col items-center justify-center gap-8 py-20 px-6 text-center relative z-10">
                    <h2 className="text-[25px] font-black uppercase text-white tracking-tighter leading-tight">
                        Miraai Helps Brands Scale Professional
                    </h2>
                    <div className="w-[85vw] h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img src={HeroImage} alt="Hero" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-[25px] font-black uppercase text-white tracking-tighter leading-tight">
                            Creative Content 10× Faster
                        </h2>
                        <h2 className="text-[16px] text-white/50 font-medium uppercase tracking-widest">
                            With Up To 70% Cost Savings.
                        </h2>
                    </div>
                </div>

                {/* SCROLL INDICATOR */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3">
                    <span className="text-white/20 text-[10px] uppercase tracking-[0.4em]">Scroll Down</span>
                    <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
                </div>
            </section>

            {/* Next Section Space */}

        </div>
    );
};

export default SynProHeroSection;