import React, { useRef, useEffect, useState, useMemo } from "react";
import HeroImage from "../../../assets/centerImage.webp";

const SynProHeroSection = () => {
    const containerRef  = useRef(null);
    const leftTextRef   = useRef(null);
    const rightTextRef  = useRef(null);

    const [progress, setProgress]   = useState(0);
    const [isMobile, setIsMobile]   = useState(false);
    const [leftW, setLeftW]         = useState(0);   // actual pixel width of "Creative"
    const [rightW, setRightW]       = useState(0);   // actual pixel width of "Content 10× Faster"

    const progressRef = useRef(0);
    const targetRef   = useRef(0);
    const rafRef      = useRef(null);
    const inViewRef   = useRef(false);

    // ── Resize ────────────────────────────────────────────────────────────────
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // ── Measure actual text widths after render ───────────────────────────────
    useEffect(() => {
        if (isMobile) return;
        const measure = () => {
            if (leftTextRef.current)  setLeftW(leftTextRef.current.offsetWidth);
            if (rightTextRef.current) setRightW(rightTextRef.current.offsetWidth);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [isMobile]);

    // ── IntersectionObserver ──────────────────────────────────────────────────
    useEffect(() => {
        if (isMobile) return;
        const el = containerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { inViewRef.current = entry.isIntersecting; },
            { threshold: 0.2 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [isMobile]);

    // ── RAF smooth loop ───────────────────────────────────────────────────────
    useEffect(() => {
        if (isMobile) return;
        const loop = () => {
            const cur  = progressRef.current;
            const tgt  = targetRef.current;
            const diff = tgt - cur;
            if (Math.abs(diff) > 0.0003) {
                const next = cur + diff * 0.07;
                progressRef.current = next;
                setProgress(next);
            } else if (progressRef.current !== tgt) {
                progressRef.current = tgt;
                setProgress(tgt);
            }
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(rafRef.current);
    }, [isMobile]);

    // ── Wheel intercept ───────────────────────────────────────────────────────
    useEffect(() => {
        if (isMobile) return;
        const onWheel = (e) => {
            if (!inViewRef.current) return;
            const cur = targetRef.current;
            if ((e.deltaY > 0 && cur < 1) || (e.deltaY < 0 && cur > 0)) {
                e.preventDefault();
                targetRef.current = Math.max(0, Math.min(1, cur + e.deltaY * 0.0012));
            }
        };
        window.addEventListener("wheel", onWheel, { passive: false });
        return () => window.removeEventListener("wheel", onWheel);
    }, [isMobile]);

    // ── Easing ────────────────────────────────────────────────────────────────
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const anim = isMobile ? 1 : easeOut(progress);

    const letterSpacingStyle = useMemo(() => ({ letterSpacing: "0.5px" }), []);

    // ── Image sizes ───────────────────────────────────────────────────────────
    const W0 = 1100, W1 = 280;
    const H0 = 600,  H1 = 100;

    const imgW = W0 - anim * (W0 - W1);
    const imgH = H0 - anim * (H0 - H1);
    const imgR = anim > 0.5 ? "16px" : "40px";

    // ── Gap between image edge and text (pixels) ──────────────────────────────
    const GAP = 48; // space between image and text, increase if still overlapping

    // Final positions (anim = 1):
    //   Left  text right-edge  = -(imgW/2) - GAP  → text ends GAP px left of image
    //   Right text left-edge   = +(imgW/2) + GAP  → text starts GAP px right of image
    //
    // We translateX the CENTER of each text block:
    //   Left  center = -(imgW/2) - GAP - leftW/2
    //   Right center = +(imgW/2) + GAP + rightW/2

    const leftFinalX  = -(W1 / 2) - GAP - (leftW  / 2);  // negative = left of center
    const rightFinalX =  (W1 / 2) + GAP + (rightW / 2);   // positive = right of center

    // At anim=0 texts are off screen (slide 420px further out)
    const SLIDE = 420;
    const slide = (1 - anim) * SLIDE;

    const leftX  = leftFinalX  - slide;   // starts more to the left, moves right
    const rightX = rightFinalX + slide;   // starts more to the right, moves left

    const textOpacity = anim > 0.08 ? 1 : 0;

    return (
        <div
            ref={containerRef}
            className="relative w-full bg-black text-white"
            style={{ height: "100vh", overflow: "hidden" }}
        >
            <div className="w-full h-full flex items-center justify-center relative">

                {/* ══ TOP ════════════════════════════════════════════════════ */}
                {!isMobile && (
                    <div
                        className="absolute z-20 w-full text-center pointer-events-none"
                        style={{
                            transform: `translateY(calc(-${(1 - anim) * SLIDE}px - ${H1 / 2 + 90}px))`,
                            opacity: textOpacity,
                            willChange: "transform, opacity",
                        }}
                    >
                        <h2
                            className="font-black uppercase tracking-tighter font-inter leading-tight"
                            style={{ fontSize: "clamp(18px, 3.2vw, 48px)", ...letterSpacingStyle }}
                        >
                            Miraai Helps Brands Scale Professional
                        </h2>
                    </div>
                )}

                {/* ══ LEFT — "Creative" ═══════════════════════════════════════ */}
                {!isMobile && (
                    <div
                        ref={leftTextRef}
                        className="absolute z-20 pointer-events-none"
                        style={{
                            transform: `translateX(${leftX}px)`,
                            opacity: textOpacity,
                            willChange: "transform, opacity",
                        }}
                    >
                        <h2
                            className="font-black uppercase tracking-tighter font-inter whitespace-nowrap"
                            style={{ fontSize: "clamp(18px, 3vw, 44px)", ...letterSpacingStyle }}
                        >
                            Creative
                        </h2>
                    </div>
                )}

                {/* ══ RIGHT — "Content 10× Faster" ════════════════════════════ */}
                {!isMobile && (
                    <div
                        ref={rightTextRef}
                        className="absolute z-20 pointer-events-none"
                        style={{
                            transform: `translateX(${rightX}px)`,
                            opacity: textOpacity,
                            willChange: "transform, opacity",
                        }}
                    >
                        <h2
                            className="font-black uppercase tracking-tighter font-inter whitespace-nowrap"
                            style={{ fontSize: "clamp(18px, 3vw, 44px)", ...letterSpacingStyle }}
                        >
                            Content 10× Faster
                        </h2>
                    </div>
                )}

                {/* ══ BOTTOM ══════════════════════════════════════════════════ */}
                {!isMobile && (
                    <div
                        className="absolute z-20 w-full text-center pointer-events-none"
                        style={{
                            transform: `translateY(calc(${(1 - anim) * SLIDE}px + ${H1 / 2 + 90}px))`,
                            opacity: textOpacity,
                            willChange: "transform, opacity",
                        }}
                    >
                        <h2
                            className="font-black uppercase tracking-tighter font-inter leading-tight"
                            style={{ fontSize: "clamp(18px, 3.2vw, 48px)", ...letterSpacingStyle }}
                        >
                            With Up To 70% Cost Savings.
                        </h2>
                    </div>
                )}

                {/* ══ CENTER IMAGE ════════════════════════════════════════════ */}
                <div
                    className="relative z-10 overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.04)] flex-shrink-0"
                    style={
                        isMobile
                            ? { width: "85vw", height: "220px", borderRadius: "20px" }
                            : {
                                width: `${imgW}px`,
                                height: `${imgH}px`,
                                borderRadius: imgR,
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

                {/* ══ MOBILE ══════════════════════════════════════════════════ */}
                {isMobile && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-5 text-center">
                        <h2 className="text-[18px] font-black uppercase tracking-tighter font-inter leading-tight" style={letterSpacingStyle}>
                            Miraai Helps Brands Scale Professional
                        </h2>

                        <div
                            style={{ width: "85vw", height: "220px", borderRadius: "20px" }}
                            className="overflow-hidden border border-white/10"
                        >
                            <img src={HeroImage} alt="Hero" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-[16px] font-black uppercase tracking-tighter font-inter leading-tight" style={letterSpacingStyle}>
                            Creative Content 10× Faster
                        </h2>
                        <h2 className="text-[16px] font-black uppercase tracking-tighter font-inter leading-tight" style={letterSpacingStyle}>
                            With Up To 70% Cost Savings.
                        </h2>
                    </div>
                )}

                {/* ══ SCROLL HINT ═════════════════════════════════════════════ */}
                {!isMobile && (
                    <div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 pointer-events-none"
                        style={{ opacity: Math.max(0, 1 - progress * 12) }}
                    >
                        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">
                            Scroll
                        </span>
                        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
                    </div>
                )}

            </div>
        </div>
    );
};

export default SynProHeroSection;