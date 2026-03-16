import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Step images
import img1 from "../../../assets/EdInai_imgs/EdinaiKeyFeatureImg1.png";
import img2 from "../../../assets/EdInai_imgs/EdinaiKeyFeatureImg2.png";
import img3 from "../../../assets/EdInai_imgs/EdinaiKeyFeatureImg3.png";
import img4 from "../../../assets/EdInai_imgs/EdinaiKeyFeatureImg4.png";
import img5 from "../../../assets/EdInai_imgs/EdinaiKeyFeatureImg5.png";
import img6 from "../../../assets/EdInai_imgs/EdinaiKeyFeatureImg6.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, title: "Create Admin Profile",              image: img1 },
  { id: 2, title: "Upload Curriculum & Topics",        image: img2 },
  { id: 3, title: "Schedule Sessions & Tests",         image: img3 },
  { id: 4, title: "Add Academic Structure",            image: img4 },
  { id: 5, title: "Generate AI Lectures & Exams",      image: img5 },
  { id: 6, title: "Monitor & Optimize with Analytics", image: img6 },
];

const TOTAL = steps.length;

const EDInaiHowTosetUp = ({ id }) => {
  const containerRef = useRef(null);
  const lineRef      = useRef(null);
  const dotRefs      = useRef([]);
  const titleRefs    = useRef([]);
  const imgRefs      = useRef([]);
  const badgeRef     = useRef(null);
  const activeRef    = useRef(-1); // track index without state

  useGSAP(
    () => {
      // ── helpers ──────────────────────────────────────────────
      const setStep = (newIdx) => {
        if (newIdx === activeRef.current) return;
        const prev = activeRef.current;
        activeRef.current = newIdx;

        // badge text
        if (badgeRef.current) {
          badgeRef.current.textContent = `Step ${newIdx + 1} of ${TOTAL}`;
        }

        // dots & titles
        dotRefs.current.forEach((dot, i) => {
          if (!dot) return;
          const active = i === newIdx;
          const past   = i < newIdx;
          gsap.to(dot, {
            backgroundColor: active ? "#ffffff" : past ? "#555555" : "#1a1a1a",
            color:           active ? "#000000" : "#ffffff",
            scale:           active ? 1.2 : 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        });

        titleRefs.current.forEach((el, i) => {
          if (!el) return;
          gsap.to(el, {
            color:   i === newIdx ? "#ffffff" : i < newIdx ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.30)",
            opacity: i === newIdx ? 1 : 0.55,
            duration: 0.35,
            ease: "power2.out",
            overwrite: true,
          });
        });

        // images — fade out old, bring in new
        imgRefs.current.forEach((img, i) => {
          if (!img) return;
          if (i === newIdx) {
            gsap.to(img, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power2.out", overwrite: true });
          } else {
            gsap.to(img, {
              opacity: 0,
              y: i < newIdx ? -18 : 18,
              scale: 0.96,
              duration: 0.4,
              ease: "power2.in",
              overwrite: true,
            });
          }
        });
      };

      // ── initialise to step 0 ──────────────────────────────────
      activeRef.current = -1; // reset so setStep(0) fires
      setStep(0);

      // ── master ScrollTrigger — pins the whole container ──────
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${TOTAL * 120}%`,   // scroll distance per step ≈ 120vh
        pin: true,
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;

          // grow line
          gsap.set(lineRef.current, { height: `${progress * 100}%` });

          // decide active step
          const idx = Math.min(Math.floor(progress * TOTAL), TOTAL - 1);
          setStep(idx);
        },
      });

      return () => st.kill();
    },
    { scope: containerRef }   // NO dependencies — runs once, GSAP drives everything
  );

  return (
    <div ref={containerRef} className="bg-black">
      <section
        id={id}
        className="w-full h-screen flex flex-col justify-center items-center py-10 overflow-hidden"
      >
        {/* ── Header ── */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            How to Set Up Ed-INAI
          </h2>
          <p className="text-sm md:text-base text-white/40">
            Fast onboarding. Smooth deployment. Instant impact.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center w-full">

          {/* ══ LEFT: Timeline ══ */}
          <div className="w-full md:w-[40%] relative">
            {/* Track */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-white/10" />

            {/* Growing line */}
            <div
              ref={lineRef}
              className="absolute left-[19px] top-0 w-[1px] bg-white origin-top"
              style={{ height: "0%" }}
            />

            {/* Step rows */}
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex items-center gap-5 py-[18px]"
                >
                  {/* Dot */}
                  <div
                    ref={(el) => (dotRefs.current[index] = el)}
                    className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: index === 0 ? "#ffffff" : "#1a1a1a",
                      color: index === 0 ? "#000000" : "#ffffff",
                    }}
                  >
                    {step.id}
                  </div>

                  {/* Title */}
                  <h3
                    ref={(el) => (titleRefs.current[index] = el)}
                    className="text-base md:text-lg font-medium tracking-tight"
                    style={{
                      color: index === 0 ? "#ffffff" : "rgba(255,255,255,0.30)",
                      opacity: index === 0 ? 1 : 0.55,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* ══ RIGHT: Image panel ══ */}
          <div className="hidden md:block w-full md:w-[60%]">
            <div className="relative aspect-video rounded-[14px] overflow-hidden border border-white/10 bg-[#0c0c0c] shadow-2xl shadow-black/70">

              {/* Glow accents */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 blur-[70px] pointer-events-none z-0" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 blur-[70px] pointer-events-none z-0" />

              {/* Stacked images */}
              {steps.map((step, index) => (
                <img
                  key={step.id}
                  ref={(el) => (imgRefs.current[index] = el)}
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{
                    opacity: index === 0 ? 1 : 0,
                    transform: index === 0 ? "none" : "translateY(18px) scale(0.96)",
                  }}
                />
              ))}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40 z-10 pointer-events-none" />

              {/* Step badge */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-[10px] px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span
                  ref={badgeRef}
                  className="text-white text-xs font-medium tracking-wide"
                >
                  Step 1 of 6
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default EDInaiHowTosetUp;