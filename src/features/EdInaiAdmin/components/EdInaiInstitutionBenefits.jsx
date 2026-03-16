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
  ChevronRight
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
  const scrollRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // --- DESKTOP VIEW (NO CHANGES) ---
    mm.add("(min-width: 1024px)", () => {
      const scrollContent = scrollRef.current;
      const getScrollAmount = () => -(scrollContent.scrollWidth - window.innerWidth + 120);

      gsap.to(scrollContent, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollContent.scrollWidth + window.innerWidth * 0.2}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    });

    // --- MOBILE VIEW (STACKING EFFECT LIKE KEY FEATURES) ---
    mm.add("(max-width: 1023px)", () => {
      // Pinned Header
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 80px",
        endTrigger: containerRef.current,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        ScrollTrigger.create({
          trigger: card,
          start: `top 240px`, // Same start line for all cards to create a stack
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            if (index < cardsRef.current.length - 1) {
              gsap.set(card, {
                scale: 1 - self.progress * 0.04,
                opacity: 1 - self.progress * 0.4,
                filter: `brightness(${1 - self.progress * 0.4})`,
              });
            }
          },
        });
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id={id}
      className="w-full bg-black text-white py-9 md:py-12 px-4 md:px-6 overflow-hidden"
    >
      <div ref={headerRef} className="max-w-6xl mx-auto px-6 text-center mb-10 z-20 relative">
        <h2 className="h1 mb-4">
          Why Institutions Choose Ed-INAI
        </h2>
        <p className="text-gray-400 h2">
          Smarter operations. Better outcomes. Lower costs.
        </p>
      </div>

      <div className="relative px-6 md:px-6 h-full flex items-center">
        <div
          ref={scrollRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 will-change-transform w-full pt-4 lg:pt-0"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="benefit-card flex-shrink-0 w-full md:w-[330px] h-[300px] md:h-[280px] bg-[#0e0f10] border border-white/10 rounded-[40px] p-10 flex flex-col justify-between relative group hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black will-change-transform"
              style={{ zIndex: index + 20 }}
            >
              <div className="relative z-10">
                <h3 className="h2 font-semibold">
                  {card.title}
                </h3>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                  {card.icon}
                </div>

                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ChevronRight size={24} />
                </div>
              </div>

              {/* Glassy overlay for better look */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[40px]" />
            </div>
          ))}

          {/* Spacer for mobile to scroll past the last card */}
          <div className="lg:hidden h-[50vh]" />
          <div className="hidden lg:block w-[10px] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default EdInaiInstitutionBenefits;