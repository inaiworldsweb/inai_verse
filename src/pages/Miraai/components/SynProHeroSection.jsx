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

            tl.to(imageBoxRef.current, {
                width: "280px",
                height: "150px",
                borderRadius: "20px",
                ease: "none"
            }, 0)

                .fromTo(leftTextRef.current,
                    { x: -150, opacity: 0, scale: 0.8 },
                    { x: 0, opacity: 1, scale: 1, ease: "power2.out" }, 0.1)

                .fromTo(rightTextRef.current,
                    { x: 150, opacity: 0, scale: 0.8 },
                    { x: 0, opacity: 1, scale: 1, ease: "power2.out" }, 0.1)

                .fromTo(topTextRef.current,
                    { y: -100, opacity: 0 },
                    { y: 0, opacity: 1, ease: "power2.out" }, 0.2)

                .fromTo(bottomTextRef.current,
                    { y: 100, opacity: 0 },
                    { y: 0, opacity: 1, ease: "power2.out" }, 0.2);
        }
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-black -mb-16  overflow-x-hidden">
            <section
                ref={sectionRef}
                className="h-screen w-full flex items-center justify-center overflow-hidden relative"
            >
                {/* Desktop Layout (Unchanged) */}
                <div className="hidden md:flex flex-col items-center gap-0 md:gap-2 relative">

                    <div ref={topTextRef} className="hidden md:block opacity-0 will-change-transform">
                        <h2 className="text-[25px] md:text-[40px] font-bold uppercase tracking-tighter text-white font-inter">
                            Miraai Helps Brands Scale Professional
                        </h2>
                    </div>

                    <div ref={contentWrapperRef} className="flex items-center justify-center gap-4 lg:gap-2">

                        <div ref={leftTextRef} className="hidden md:block opacity-0 will-change-transform">
                            <h2 className="text-[25px] md:text-[40px] font-black uppercase tracking-tighter text-white font-inter">
                                Creative
                            </h2>
                        </div>

                        <div
                            ref={imageBoxRef}
                            className="w-[90vw] md:w-[800px] lg:w-[1000px] h-[250px] md:h-[500px] lg:h-[550px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] flex-shrink-0"
                            style={{ willChange: "width, height, border-radius" }}
                        >
                            <img
                                src={HeroImage}
                                alt="Hero"
                                className="w-full h-full rounded-[30px] md:rounded-[40px] object-cover"
                                draggable={false}
                            />
                        </div>

                        <div ref={rightTextRef} className="hidden md:block opacity-0 will-change-transform">
                            <h2 className="text-[25px] md:text-[40px] font-black uppercase tracking-tighter text-white font-inter">
                                Content
                            </h2>
                        </div>
                    </div>

                    <div ref={bottomTextRef} className="hidden md:block opacity-0 will-change-transform">
                        <h2 className="text-[25px] md:text-[40px] font-bold uppercase tracking-tighter text-white font-inter">
                            10× Faster With Up To 70% Cost Savings.
                        </h2>
                    </div>
                </div>

                {/* ✅ Mobile Layout (Updated Alignment Like Screenshot) */}
                <div className="md:hidden min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black">

                    <h2 className="text-[28px] font-semibold text-white leading-[1.2] tracking-tight max-w-[320px]">
                        Miraai helps brands scale professional creative
                    </h2>

                    <div className="w-[85vw] max-w-[320px] h-[200px] mt-6 rounded-2xl overflow-hidden">
                        <img
                            src={HeroImage}
                            alt="Hero"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <p className="mt-6 text-[28px] font-medium text-white leading-[1.2] max-w-[280px] mx-auto">
                        content 10× faster <br />
                        with up to 70% cost savings.
                    </p>

                </div>

              
            </section>
        </div>
    );
};

export default SynProHeroSection;