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
        <div ref={containerRef} className="bg-black   ">
            <section
                ref={sectionRef}
                /* Desktop stays h-screen for pinning, Mobile becomes auto-height */
                className="h-auto md:h-screen w-full flex items-center justify-center overflow-hidden relative "
            >
                {/* Desktop Layout (Unchanged) */}
                <div className="hidden md:flex flex-col items-center gap-0 md:gap-2 relative">
                    <div ref={topTextRef} className="hidden md:block opacity-0 will-change-transform text-center px-4">
                        <h2 className="text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem] font-bold uppercase tracking-[1px] text-white font-inter">
                            Miraai Helps Brands Scale Professional
                        </h2>
                    </div>

                    <div ref={contentWrapperRef} className="flex items-center justify-center gap-4 lg:gap-2">
                        <div ref={leftTextRef} className="hidden md:block opacity-0 will-change-transform">
                            <h2 className="text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold uppercase text-white font-inter">
                                Creative
                            </h2>
                        </div>

                        <div
                            ref={imageBoxRef}
                            className="w-[90vw] md:w-[550px] lg:w-[800px] xl:w-[1000px] h-[250px] md:h-[350px] lg:h-[500px] xl:h-[550px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] flex-shrink-0"
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
                            <h2 className="text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem] font-semibold uppercase text-white font-inter">
                                Content
                            </h2>
                        </div>
                    </div>

                    <div ref={bottomTextRef} className="hidden md:block opacity-0 will-change-transform text-center px-4">
                        <h2 className="text-[1.25rem] md:text-[1.75rem] lg:text-[2rem] xl:text-[2.5rem] font-bold uppercase tracking-[1px] text-white font-inter">
                            10× Faster With Up To 70% Cost Savings.
                        </h2>
                    </div>
                </div>

                {/* Mobile Layout (Spacing Fixed) */}
                <div className="md:hidden flex flex-col items-center justify-center px-6 py-12 mt-15     text-center bg-black w-full">

                    {/* Top Heading: Reduced margin-bottom */}
                    <h2 className="text-[1.5625rem] font-semibold text-white leading-[1.2] tracking-[1px] uppercase max-w-[320px]">
                        Miraai helps brands scale professional creative
                    </h2>

                    {/* Image Box: Controlled height and rounded corners */}
                    <div className="w-full max-w-[340px] h-[200px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        <img
                            src={HeroImage}
                            alt="Hero"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bottom Text: Reduced margin-top for a tighter look */}
                    <p className="mt-4 text-[1.5625rem] font-medium  leading-[1.2] tracking-[1px] uppercase max-w-[300px] mx-auto">
                        content 10× faster with up to 70% cost savings.

                    </p>

                </div>
            </section>
        </div>
    );
};

export default SynProHeroSection;