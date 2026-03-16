import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bell,
  Clock,
  PlayCircle,
  TrendingUp,
  Zap,
  Smile,
  Trophy,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  { title: "Never Miss A Class", icon: <Bell size={24} /> },
  { title: "Learn At Your Own Pace", icon: <Clock size={24} /> },
  { title: "Revise Anytime With Recordings", icon: <PlayCircle size={24} /> },
  { title: "Improve Exam Scores", icon: <TrendingUp size={24} /> },
  { title: "Stay Motivated", icon: <Zap size={24} /> },
  { title: "Reduce Study Stress", icon: <Smile size={24} /> },
  {
    title: "Prepare Confidently For Competitive Exams",
    icon: <Trophy size={24} />,
  },
];

const WhyStudentsLove = ({ id }) => {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      // --- DESKTOP: Horizontal Scroll ---
      mm.add("(min-width: 1024px)", () => {
        const scrollContent = cardsContainerRef.current;

        gsap.to(scrollContent, {
          x: () => -(scrollContent.scrollWidth - window.innerWidth + 120),
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

      // --- MOBILE: Stacking Effect ---
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray(".love-card");

        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: "top 15%", 
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            pinSpacing: false, 
            scrub: true,
            invalidateOnRefresh: true,
          });

          // Only subtle scale for depth, NO opacity change
          if (i < cards.length - 1) {
            gsap.to(card, {
              scale: 0.95,
              scrollTrigger: {
                trigger: cards[i + 1],
                start: "top 60%",
                end: "top 15%",
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
      className="w-full bg-black text-white relative md:py-12 py-9  overflow-hidden"
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16 relative z-100">
        <h2 className="h1 mb-4">
          Why Students Love Ed-INAI
        </h2>
        <p className="h2">
          More Confidence, Better Results, And Stress-Free Learning.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative px-6 w-full max-w-6xl mx-auto">
        <div
          ref={cardsContainerRef}
          className="flex flex-col lg:flex-row gap-8 lg:gap-10"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`love-card text-[#ccc] w-full lg:w-[330px] flex-shrink-0 h-[250px] md:h-[280px] bg-[#1a1b1e] border border-white/10 rounded-[10px] p-8 flex flex-col justify-between relative shadow-[0_-15px_30px_rgba(0,0,0,0.9)] overflow-hidden ${
                index !== 0 ? "mt-5 lg:mt-0" : "mt-0"
              }`}
            >
              <div className="relative z-10">
                <span className="text-white/30 text-sm mb-2 block font-mono">
                  0{index + 1}
                </span>

                <h3 className="text-xl md:text-2xl font-semibold leading-tight">
                  {card.title}
                </h3>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-[10px] flex items-center justify-center text-gray-400">
                  {card.icon}
                </div>

                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black">
                  <ChevronRight size={20} />
                </div>
              </div>

              {/* Internal Gradient - Radius fixed to 10px */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none rounded-[10px]" />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="h-[20vh] lg:hidden" /> */}
    </section>
  );
};

export default WhyStudentsLove;