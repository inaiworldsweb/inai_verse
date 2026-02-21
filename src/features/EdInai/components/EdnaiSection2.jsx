import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';



gsap.registerPlugin(ScrollTrigger, useGSAP);

const EdnaiSection2 = () => {
    const container = useRef();

    useGSAP(() => {
        // 1. Initialize Lenis (Smooth Scroll)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 2. Animation Logic
        const imgs = gsap.utils.toArray(".img-wrapper img");

        ScrollTrigger.matchMedia({
            // Desktop: Pinned stacked reveal effect
            "(min-width: 769px)": function () {
                const mainTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: ".arch-section",
                        start: "top top",
                        end: "bottom bottom",
                        pin: ".arch-right",
                        scrub: true,
                    }
                });

                imgs.forEach((currentImage, index) => {
                    const nextImage = imgs[index + 1];
                    if (nextImage) {
                        const sectionTimeline = gsap.timeline();
                        sectionTimeline
                            .to(currentImage, {
                                clipPath: "inset(0px 0px 100% 0px)",
                                objectPosition: "0px 60%",
                                duration: 1.5,
                                ease: "none"
                            }, 0)
                            .to(nextImage, {
                                objectPosition: "0px 40%",
                                duration: 1.5,
                                ease: "none"
                            }, 0);

                        mainTimeline.add(sectionTimeline);
                    }
                });
            },
            // Mobile: Simple parallax scroll
            "(max-width: 768px)": function () {
                imgs.forEach((image) => {
                    gsap.to(image, {
                        scrollTrigger: {
                            trigger: image,
                            start: "top 80%",
                            end: "bottom 20%",
                            scrub: true,
                        },
                        objectPosition: "0px 30%",
                        ease: "none"
                    });
                });
            }
        });

        return () => {
            lenis.destroy();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, { scope: container });

    return (
        <div ref={container} className="bg-black text-white min-h-screen font-inter">
            {/* Top Spacer */}
            <div className=" w-full" />
            <h1>What is Ednai</h1>

            <div className="arch-section flex flex-col md:flex-row gap-8 md:gap-[60px] justify-between max-w-[1200px] mx-auto px-6 relative">

                {/* Left Column: Text content */}
                <div className="flex flex-col flex-1">
                    {sections.map((item) => (
                        <div key={item.id} className="h-auto md:h-screen flex items-center py-16 md:py-0">
                            <div className="max-w-[400px]">

                                <p className="text-white/80 text-[15px] md:text-[25px] leading-relaxed tracking-tight">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Images */}
                <div className="arch-right relative h-[400px] md:h-screen w-full md:max-w-[500px]">
                    <div className="relative w-full h-full flex items-center">
                        {sections.map((item, index) => (
                            <div
                                key={item.id}
                                className="img-wrapper absolute top-1/2 left-0 -translate-y-1/2 h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden"
                                style={{ zIndex: sections.length - index }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    style={{ clipPath: "inset(0%)" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Spacer */}
            <div className="w-full" />
        </div>
    );
};

const sections = [
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80",
        desc: "Ed-INAI is an AI-powered education platform where virtual AI teaching models conduct live and interactive lectures through smart interfaces."
    },
    {
        id: 2,
        img: "	https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=80",
        desc: "Our virtual AI models INAI, VNAI, and AIRA bring intelligence, clarity, and engagement to every classroom, making AI education in India more accessible."
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        desc: "Our virtual AI mentors bring storytelling, design, and engineering to life, delivering immersive, AI-driven lessons tailored for Indian classrooms."
    },
];

export default EdnaiSection2;