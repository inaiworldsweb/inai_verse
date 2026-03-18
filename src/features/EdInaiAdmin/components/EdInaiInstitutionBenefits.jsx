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

      // --- DESKTOP: Horizontal Scroll (Fixed for Last Card) ---
      mm.add("(min-width: 1024px)", () => {
        const scrollContent = cardsContainerRef.current;

        // Exact scroll calculation: total content minus visible part of the screen
        const getScrollAmount = () => {
          const contentWidth = scrollContent.scrollWidth;
          return -(contentWidth - window.innerWidth + 250); // 80px extra safety padding ke liye
        };

        gsap.to(scrollContent, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            // Scroll distance content ki width ke proportional rakha hai
            end: () => `+=${scrollContent.scrollWidth}`,
            invalidateOnRefresh: true,
          },
        });
      });

      // --- MOBILE: High-End Stacking ---
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray(".benefit-card");

        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 12%",
            endTrigger: containerRef.current,
            end: "bottom 80%",
            pin: true,
            pinSpacing: false,
            scrub: true,
            invalidateOnRefresh: true,
          });

          if (i < cards.length - 1) {
            gsap.to(card, {
              scale: 0.95,
              scrollTrigger: {
                trigger: cards[i + 1],
                start: "top 60%",
                end: "top 12%",
                scrub: true,
              },
            });
          }
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id={id}
      className="w-full bg-black text-white relative md:py-12 py-9 overflow-hidden"
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16 relative z-[100]">
        <h2 className="h1 mb-4  pt-5 ">Why Institutions Choose edInai</h2>
        <p className="h2 text-gray-400 text-lg md:text-xl leading-relaxed">
          Smarter operations. Better outcomes. Lower costs.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative px-6 w-full max-w-6xl mx-auto">
        <div
          ref={cardsContainerRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`benefit-card text-[#ccc] w-full lg:w-[310px] flex-shrink-0 h-[250px] md:h-[250px] bg-[#0c0d0e] border border-white/10 rounded-[7px] md:rounded-[10px] p-8 flex flex-col justify-between relative shadow-[0_-20px_40px_rgba(0,0,0,1)] overflow-hidden transition-colors duration-300 hover:border-white/20 ${index !== 0 ? "mt-6 lg:mt-0" : "mt-0"
                }`}
            >
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[7px] md:rounded-[10px] flex items-center justify-center text-gray-400">
                    {card.icon}
                  </div>
                </div>

                <div className="flex justify-between items-end relative">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight text-white group-hover:text-white">
                    {card.title}
                  </h3>

                  {/* Large Ghost Number behind ChevronRight button */}
                  <span className="absolute right-1 bottom-14 text-[70px] md:text-[100px] font-black text-white/5 hover:text-white/15  select-none z-0">
                    0{index + 1}
                  </span>

                  <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center bg-black relative z-10">
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none rounded-[7px] md:rounded-[10px]" />
            </div>
          ))}

          {/* DESKTOP SPACER: Ye zaruri hai last card ko screen ke andar lane ke liye */}
          <div className="hidden lg:block w-[100px] flex-shrink-0 h-1" />
        </div>
      </div>
    </section>
  );
};

export default EdInaiInstitutionBenefits;
