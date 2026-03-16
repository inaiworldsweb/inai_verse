import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Briefcase,
  CheckCircle2,
  Zap,
  GraduationCap,
  Heart,
  Boxes,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  { title: "Overcome faculty shortages", icon: <Users size={24} /> },
  { title: "Reduce administrative workload", icon: <Briefcase size={24} /> },
  { title: "Ensure consistent teaching quality", icon: <CheckCircle2 size={24} /> },
  { title: "Faster exam preparation", icon: <Zap size={24} /> },
  { title: "Improve student engagement", icon: <GraduationCap size={24} /> },
  { title: "Support 24×7 learning ecosystem", icon: <Heart size={24} /> },
  { title: "Scale across multiple campuses", icon: <Boxes size={24} /> },
];

const EdInaiInstitutionBenefits = ({ id }) => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // --- DESKTOP: Horizontal Scroll (No Changes) ---
      mm.add("(min-width: 1024px)", () => {
        const scrollContent = cardsContainerRef.current;
        const getScrollAmount = () => -(scrollContent.scrollWidth - window.innerWidth + 250);

        gsap.to(scrollContent, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${scrollContent.scrollWidth}`,
            invalidateOnRefresh: true,
          },
        });
      });

      // --- MOBILE: High-End Stacking (Fixed Header Cutting) ---
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray(".benefit-card");

        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            // Header ko space dene ke liye 180px niche se sticky hoga
            start: `top ${5 + (i * 10)}px`,
            endTrigger: containerRef.current,
            end: "bottom 80%",
            pin: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true,
          });

          // Previous card transition logic
          if (i < cards.length - 1) {
            gsap.to(card, {
              scale: 0.94,
              opacity: 0.6,
              filter: "brightness(0.5)",
              scrollTrigger: {
                trigger: cards[i + 1],
                start: "top 60%",
                end: `top ${180 + (i * 10)}px`,
                scrub: true,
              },
            });
          }
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id={id}
      className="w-full bg-black text-white relative py-12 md:py-20 px-4 md:px-6 overflow-hidden"
    >
      {/* Header Section - Increased Z-index and Margin */}
      <div className="max-w-6xl mx-auto text-center mb-20 relative z-[200]">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Why Institutions Choose Ed-INAI
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Smarter operations. Better outcomes. Lower costs.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative w-full max-w-6xl mx-auto">
        <div
          ref={cardsContainerRef}
          className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="benefit-card text-[#ccc] w-full lg:w-[310px] flex-shrink-0 h-[260px] bg-[#111214] border border-white/10 rounded-[20px] p-8 flex flex-col justify-between relative shadow-[0_-10px_30px_rgba(0,0,0,0.8)] overflow-hidden transition-colors duration-300 hover:border-white/20 will-change-transform"
              style={{ zIndex: index + 20 }}
            >
              <div className="relative z-10">
                <span className="text-white/20 text-xs mb-3 block font-mono">
                  0{index + 1}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold leading-tight text-white/90">
                  {card.title}
                </h3>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[12px] flex items-center justify-center text-gray-400">
                  {card.icon}
                </div>

                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors">
                  <ChevronRight size={18} />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
            </div>
          ))}

          {/* Spacer for Mobile Scroll */}
          <div className="h-[20vh] lg:hidden" />
          <div className="hidden lg:block w-[100px] flex-shrink-0 h-1" />
        </div>
      </div>
    </section>
  );
};

export default EdInaiInstitutionBenefits;