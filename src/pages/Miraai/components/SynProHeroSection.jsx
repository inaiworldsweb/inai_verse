import React, { useRef, useEffect, useState, useMemo } from "react";
import HeroImage from "../../../assets/centerImage.webp";

const SynProHeroSection = () => {
    const containerRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);
    const topTextRef = useRef(null);
    const bottomTextRef = useRef(null);
    const imageWrapperRef = useRef(null);
    const hintRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    // Refs for animation state (Bypasses React rendering for smoothness)
    const progressRef = useRef(0);
    const targetRef = useRef(0);
    const rafRef = useRef(null);
    const inViewRef = useRef(false);

    // Constants for measurement
    const W0 = 1100, W1 = 280;
    const H0 = 600, H1 = 100;
    const GAP = 48;
    const SLIDE = 420;

    // ── Resize ────────────────────────────────────────────────────────────────
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 1024);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // ── Animation Logic ───────────────────────────────────────────────────────
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const updateStyles = (val) => {
        if (isMobile) return;

        const anim = easeOut(val);

        // 1. Center Image Container (Animate width/height direct to DOM)
        if (imageWrapperRef.current) {
            const currentW = W0 - anim * (W0 - W1);
            const currentH = H0 - anim * (H0 - H1);
            const r = anim > 0.5 ? 16 : 40;

            imageWrapperRef.current.style.width = `${currentW}px`;
            imageWrapperRef.current.style.height = `${currentH}px`;
            imageWrapperRef.current.style.borderRadius = `${r}px`;
        }

        const textOpacity = val > 0.08 ? 1 : 0;
        const slide = (1 - anim) * SLIDE;

        // 2. Top Text
        if (topTextRef.current) {
            const ty = -((1 - anim) * SLIDE + (H1 / 2 + 90));
            topTextRef.current.style.transform = `translateY(${ty}px)`;
            topTextRef.current.style.opacity = textOpacity;
        }

        // 3. Bottom Text
        if (bottomTextRef.current) {
            const ty = (1 - anim) * SLIDE + (H1 / 2 + 90);
            bottomTextRef.current.style.transform = `translateY(${ty}px)`;
            bottomTextRef.current.style.opacity = textOpacity;
        }

        // 4. Left/Right Text (Creative & Content)
        // We assume approx text widths since measuring every frame is slow
        // Left center = -(imgW/2) - GAP - leftW/2
        const currentW = W0 - anim * (W0 - W1);
        const lx = -(currentW / 2) - GAP - 100 - slide; // Approx 100 for text center offset
        const rx = (currentW / 2) + GAP + 180 + slide; // Approx 180 for text center offset

        if (leftTextRef.current) {
            leftTextRef.current.style.transform = `translateX(${lx}px)`;
            leftTextRef.current.style.opacity = textOpacity;
        }
        if (rightTextRef.current) {
            rightTextRef.current.style.transform = `translateX(${rx}px)`;
            rightTextRef.current.style.opacity = textOpacity;
        }

        // 5. Scroll Hint
        if (hintRef.current) {
            hintRef.current.style.opacity = Math.max(0, 1 - val * 12);
        }
    };

    // ── IntersectionObserver ──────────────────────────────────────────────────
    useEffect(() => {
        if (isMobile) return;
        const el = containerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { inViewRef.current = entry.isIntersecting; },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [isMobile]);

    // ── RAF smooth loop ───────────────────────────────────────────────────────
    useEffect(() => {
        if (isMobile) return;

        const loop = () => {
            const cur = progressRef.current;
            const tgt = targetRef.current;
            const diff = tgt - cur;

            if (Math.abs(diff) > 0.0001) {
                const lerpFactor = 0.1; // Increased for snappier feel
                const next = cur + diff * lerpFactor;
                progressRef.current = next;
                updateStyles(next);
            }
            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafRef.current);
    }, [isMobile]);

    // ── Wheel handling ────────────────────────────────────────────────────────
    useEffect(() => {
        if (isMobile) return;
        const onWheel = (e) => {
            if (!inViewRef.current) return;

            // Allow native scroll if at boundaries
            const cur = targetRef.current;
            if (e.deltaY > 0 && cur >= 0.99) return;
            if (e.deltaY < 0 && cur <= 0.01) return;

            e.preventDefault();
            const sens = 0.001;
            targetRef.current = Math.max(0, Math.min(1, targetRef.current + e.deltaY * sens));
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel);
    }, [isMobile]);

    const letterSpacingStyle = useMemo(() => ({ letterSpacing: "0.5px" }), []);

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-black text-white"
            style={{ height: "100vh", overflow: "hidden" }}
        >
            <div className="w-full h-full flex items-center justify-center relative overflow-hidden">

                {/* ══ TOP ════════════════════════════════════════════════════ */}
                {!isMobile && (
                    <div
                        ref={topTextRef}
                        className="absolute z-20 w-full text-center pointer-events-none transition-opacity duration-300"
                        style={{ willChange: "transform, opacity", opacity: 0 }}
                    >
                        <h2
                            className="font-black uppercase tracking-tighter font-inter leading-tight"
                            style={{ fontSize: "clamp(18px, 3.2vw, 42px)", ...letterSpacingStyle }}
                        >
                            Miraai Helps Brands Scale Professional
                        </h2>
                    </div>
                )}

                {/* ══ LEFT — "Creative" ═══════════════════════════════════════ */}
                {!isMobile && (
                    <div
                        ref={leftTextRef}
                        className="absolute z-20 pointer-events-none transition-opacity duration-300"
                        style={{ willChange: "transform, opacity", opacity: 0 }}
                    >
                        <h2
                            className="font-black uppercase tracking-tighter font-inter whitespace-nowrap"
                            style={{ fontSize: "clamp(18px, 3vw, 40px)", ...letterSpacingStyle }}
                        >
                            Creative
                        </h2>
                    </div>
                )}

                {/* ══ RIGHT — "Content 10× Faster" ════════════════════════════ */}
                {!isMobile && (
                    <div
                        ref={rightTextRef}
                        className="absolute z-20 pointer-events-none transition-opacity duration-300"
                        style={{ willChange: "transform, opacity", opacity: 0 }}
                    >
                        <h2
                            className="font-black uppercase tracking-tighter font-inter whitespace-nowrap"
                            style={{ fontSize: "clamp(18px, 3vw, 40px)", ...letterSpacingStyle }}
                        >
                            Content 10× Faster
                        </h2>
                    </div>
                )}

                {/* ══ BOTTOM ══════════════════════════════════════════════════ */}
                {!isMobile && (
                    <div
                        ref={bottomTextRef}
                        className="absolute z-20 w-full text-center pointer-events-none transition-opacity duration-300"
                        style={{ willChange: "transform, opacity", opacity: 0 }}
                    >
                        <h2
                            className="font-black uppercase tracking-tighter font-inter leading-tight"
                            style={{ fontSize: "clamp(18px, 3.2vw, 42px)", ...letterSpacingStyle }}
                        >
                            With Up To 70% Cost Savings.
                        </h2>
                    </div>
                )}

                {/* ══ CENTER IMAGE ════════════════════════════════════════════ */}
                <div
                    ref={imageWrapperRef}
                    className="relative z-10 overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] flex-shrink-0"
                    style={
                        isMobile
                            ? { width: "85vw", height: "180px", borderRadius: "20px" }
                            : {
                                width: `${W0}px`,
                                height: `${H0}px`,
                                borderRadius: "40px",
                                willChange: "width, height, border-radius",
                            }
                    }
                >
                    <img
                        src={HeroImage}
                        alt="Hero"
                        className="w-full h-full object-cover object-center"
                        draggable={false}
                    />
                </div>

                {/* ══ MOBILE VIEW ════════════════════════════════════════════ */}
                {isMobile && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
                        <h2 className="text-[20px] font-black uppercase tracking-tighter font-inter leading-tight" style={letterSpacingStyle}>
                            Miraai Helps Brands Scale Professional
                        </h2>
                        <div
                            style={{ width: "85vw", height: "180px", borderRadius: "20px" }}
                            className="overflow-hidden border border-white/10 relative"
                        >
                            <img src={HeroImage} alt="Hero" className="w-full h-full object-cover" />
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-[18px] font-black uppercase tracking-tighter font-inter leading-tight" style={letterSpacingStyle}>
                                Creative Content 10× Faster
                            </h2>
                            <h2 className="text-[18px] font-black uppercase tracking-tighter font-inter leading-tight text-white/60" style={letterSpacingStyle}>
                                With Up To 70% Cost Savings.
                            </h2>
                        </div>
                    </div>
                )}

                {/* ══ SCROLL HINT ═════════════════════════════════════════════ */}
                {!isMobile && (
                    <div
                        ref={hintRef}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
                    >
                        <span className="text-white/30 text-[10px] uppercase tracking-[0.4em]">
                            Scroll
                        </span>
                        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
                    </div>
                )}

            </div>
        </div>
    );
};

export default SynProHeroSection;