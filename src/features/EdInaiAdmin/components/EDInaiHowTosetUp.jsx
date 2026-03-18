import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Step images
import img1 from "../../../assets/images/edInai/Admin/HowtoSetUpEd-INAI/Create-Admin-Profile.webp";
import img2 from "../../../assets/images/edInai/Admin/HowtoSetUpEd-INAI/Upload-Curriculum-&-Topics.webp";
import img3 from "../../../assets/images/edInai/Admin/HowtoSetUpEd-INAI/Schedule-Sessions-&-Tests.webp";
import img4 from "../../../assets/images/edInai/Admin/HowtoSetUpEd-INAI/Add-Academic-Structure.webp";
import img5 from "../../../assets/images/edInai/Admin/HowtoSetUpEd-INAI/Generate-AI-Lectures-&-Exams.webp";
import img6 from "../../../assets/images/edInai/Admin/HowtoSetUpEd-INAI/Monitor-&-Optimize-with-Analytics.webp";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, title: "Create Admin Profile", image: img1 },
  { id: 2, title: "Upload Curriculum & Topics", image: img2 },
  { id: 3, title: "Schedule Sessions & Tests", image: img3 },
  { id: 4, title: "Add Academic Structure", image: img4 },
  { id: 5, title: "Generate AI Lectures & Exams", image: img5 },
  { id: 6, title: "Monitor & Optimize with Analytics", image: img6 },
];

const TOTAL = steps.length;

const EDInaiHowTosetUp = ({ id }) => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const dotRefs = useRef([]);
  const titleRefs = useRef([]);
  const imgRefs = useRef([]);
  const badgeRef = useRef(null);
  const activeRef = useRef(-1);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // ── DESKTOP LOGIC (Pinning) ──────────────────────────────
      mm.add("(min-width: 768px)", () => {
        const setStep = (newIdx) => {
          if (newIdx === activeRef.current) return;
          activeRef.current = newIdx;

          if (badgeRef.current) badgeRef.current.textContent = `Step ${newIdx + 1} of ${TOTAL}`;

          dotRefs.current.forEach((dot, i) => {
            const active = i === newIdx;
            const past = i < newIdx;
            gsap.to(dot, {
              backgroundColor: active ? "#ffffff" : past ? "#555555" : "#1a1a1a",
              color: active ? "#000000" : "#ffffff",
              scale: active ? 1.2 : 1,
              duration: 0.35,
              overwrite: true,
            });
          });

          titleRefs.current.forEach((el, i) => {
            gsap.to(el, {
              color: i === newIdx ? "#ffffff" : "rgba(255,255,255,0.30)",
              opacity: i === newIdx ? 1 : 0.55,
              duration: 0.35,
              overwrite: true,
            });
          });

          imgRefs.current.forEach((img, i) => {
            if (i === newIdx) {
              gsap.to(img, { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: "power2.out", overwrite: true });
            } else {
              gsap.to(img, { opacity: 0, y: i < newIdx ? -18 : 18, scale: 0.96, duration: 0.4, overwrite: true });
            }
          });
        };

        activeRef.current = -1;
        setStep(0);

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${TOTAL * 100}%`,
          pin: true,
          scrub: 1.2,
          onUpdate: (self) => {
            gsap.set(lineRef.current, { height: `${self.progress * 100}%` });
            setStep(Math.min(Math.floor(self.progress * TOTAL), TOTAL - 1));
          },
        });
      });

      // ── MOBILE LOGIC (Card Stacking) ─────────────────────────
      mm.add("(max-width: 767px)", () => {
        const mobileCards = gsap.utils.toArray(".mobile-step-card");

        mobileCards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top ${80 + i * 20}px`, // Cards stack with a small offset
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              // Fade out the previous cards slightly as new ones come over
              if (i < mobileCards.length - 1) {
                gsap.set(card, {
                  scale: 1 - self.progress * 0.05,
                  opacity: 1 - self.progress * 0.4,
                  filter: `brightness(${1 - self.progress * 0.3})`
                });
              }
            }
          });
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section id={id} ref={containerRef} className="bg-black py-9 md:py-12 px-4 md:px-6 overflow-hidden">
      {/* desktop View: Header stays at top */}
      <div className="max-w-6xl mx-auto text-center mb-12 hidden md:block">
        <h2 className="h1 mb-3 mt-5">How to Set Up Ed-INAI</h2>
        <p className="h2">Fast onboarding. Smooth deployment. Instant impact.</p>
      </div>

      {/* ── MOBILE VIEW CONTENT (Stacking Cards) ── */}
      <div className="flex flex-col gap-6 md:hidden">
        <div className=" text-center">
          <h2 className="text-4xl font-bold text-white mb-2">How to Set Up</h2>
          <p className="text-white/40 text-sm">Scroll to see the steps</p>
        </div>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="mobile-step-card w-full bg-[#0c0c0c] border border-white/10 rounded-[7px] md:rounded-[10px] p-6 shadow-2xl overflow-hidden h-[450px] flex flex-col justify-between"
            style={{ zIndex: index + 1 }}
          >
            <div>
              <span className="text-white/20 font-black text-5xl">0{step.id}</span>
              <h3 className="text-xl font-bold text-white mt-4">{step.title}</h3>
            </div>
            <div className="mt-6 rounded-[7px] md:rounded-[10px] overflow-hidden border border-white/5 h-full">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
        <div className="h-[20vh]" /> {/* Spacer for final card */}
      </div>

      {/* ── DESKTOP VIEW CONTENT (Original Logic) ── */}
      <div className="hidden md:flex w-full h-[70vh] flex-col justify-center items-center overflow-hidden">
        <div className="max-w-6xl mx-auto  flex flex-row gap-10 items-center w-full">
          {/* Timeline side */}
          <div className="w-[40%] relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-[1px] bg-white/10" />
            <div ref={lineRef} className="absolute left-[19px] top-0 w-[1px] bg-white origin-top" />
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div key={step.id} className="relative flex items-center gap-5 py-[18px]">
                  <div ref={(el) => (dotRefs.current[index] = el)} className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                    {step.id}
                  </div>
                  <h3 ref={(el) => (titleRefs.current[index] = el)} className="text-lg font-medium tracking-tight">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div className="w-[60%]">
            <div className="relative aspect-video rounded-[7px] md:rounded-[10px] overflow-hidden border border-white/10 bg-[#0c0c0c]">
              {steps.map((step, index) => (
                <img key={step.id} ref={(el) => (imgRefs.current[index] = el)} src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-0" />
              ))}
              <div ref={badgeRef} className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-[7px] md:rounded-[10px] px-4 py-2 text-white text-xs">
                Step 1 of 6
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EDInaiHowTosetUp;