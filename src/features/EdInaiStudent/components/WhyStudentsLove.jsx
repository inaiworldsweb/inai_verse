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
  const scrollRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const scrollContent = scrollRef.current;
        // Pura scroll distance calculate kar rahe hain: Total content width - Visible screen width
        const getScrollAmount = () =>
          -(scrollContent.scrollWidth - window.innerWidth + 120);

        gsap.to(scrollContent, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true, // Jab tak cards khatam nahi honge, page niche nahi jayega
            scrub: 1,
            start: "top top",
            // 'end' itna rakha hai taaki 7th card ke baad hi scroll unlock ho
            end: () =>
              `+=${scrollContent.scrollWidth + window.innerWidth * 0.2}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });

      // Mobile Stacking Logic
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray(".love-card");
        cards.forEach((card, i) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top ${80 + i * 20}px`,
            pin: true,
            pinSpacing: false,
            scrub: true,
          });
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
      className="w-full bg-black text-white md:min-h-screen flex flex-col justify-center py-9 md:pt-12 md:pb-0 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="h1 mb-4 tracking-tight">Why Students Love Ed-INAI</h2>
        <p className="text-gray-400 h2">
          More Confidence, Better Results, And Stress-Free Learning.
        </p>
      </div>

      {/* Outer wrapper to contain the flex content */}
      <div className="relative px-6 md:px-6 h-[400px] flex items-center">
        <div
          ref={scrollRef}
          className="flex flex-col lg:flex-row gap-6 lg:gap-10 will-change-transform"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="love-card flex-shrink-0 w-full md:w-80.5 h-[300px] md:h-[300px] bg-[#0e0f10] border border-white/10 rounded-[40px] p-10 flex flex-col justify-between relative group hover:border-white/20 transition-all duration-500 shadow-2xl"
            >
              <div className="relative z-10">
                <h3 className=" h2 font-semibold ">{card.title}</h3>
              </div>

              <div className="flex justify-between items-end relative z-10">
                <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                  {card.icon}
                </div>

                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ChevronRight size={24} />
                </div>
              </div>

              {/* Gradient layer */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-[40px]" />
            </div>
          ))}

          {/* Ek extra empty div desktop par padding maintain karne ke liye */}
          <div className="hidden lg:block w-[10px] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default WhyStudentsLove;
