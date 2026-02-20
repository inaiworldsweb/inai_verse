import React, { useRef, useEffect, useState } from "react";
import HeroImage from "../../../assets/centerImage.webp"

const SynProHeroSection = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setViewportWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;
      const currentScroll = -rect.top;
      if (totalScrollable <= 0) {
        setProgress(0);
        return;
      }
      const p = Math.max(0, Math.min(1, currentScroll / totalScrollable));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const animProgress = easeOut(progress);

  // Dimensions
  const mobileStartWidth = Math.max(320, Math.min(viewportWidth - 40, 520));
  const startWidth = isMobile ? mobileStartWidth : 1100;
  const endWidth = isMobile ? 260 : 280;
  const startHeight = isMobile ? 380 : 600;
  const endHeight = isMobile ? 160 : 100;

  const currentWidth = `${startWidth - animProgress * (startWidth - endWidth)}px`;
  const currentHeight = `${startHeight - animProgress * (startHeight - endHeight)}px`;

  // Slide distance (Desktop only)
  const slideInDist = (1 - animProgress) * (isMobile ? 220 : 400);

  return (
    <div
      ref={containerRef}
      className={`relative bg-black text-white ${isMobile ? "h-[220vh]" : "h-[300vh]"}`}
    >
      <div
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="relative w-full h-full flex items-center justify-center px-4"
        >
          {/* 1. TOP LINE: Miraai Helps... */}
          <div
            className="absolute z-20 w-full text-center"
            style={{
              transform: `translateY(calc(-${slideInDist}px - ${(endHeight / 2) + (isMobile ? 70 : 85)}px))`,
              opacity: animProgress > 0.1 ? 1 : 0,
            }}
          >
            <h2 className="text-[25px] md:text-[40px] font-black uppercase tracking-tighter font-inter leading-tight px-2">
              Miraai Helps Brands Scale Professional
            </h2>
          </div>

          {/* 2. MOBILE SENTENCE / DESKTOP CREATIVE */}
          <div
            className="absolute z-20 text-center w-full"
            style={{
              transform: isMobile
                ? `translateY(calc(-${slideInDist}px - ${(endHeight / 2) + 15}px))`
                : `translateX(calc(-${slideInDist}px - ${(endWidth / 2) + 120}px))`,
              opacity: animProgress > 0.1 ? 1 : 0,
            }}
          >
            <h2 className="text-[20px] md:text-[40px] font-black uppercase tracking-tighter font-inter">
              {isMobile ? "Creative Content 10× Faster" : "Creative"}
            </h2>
          </div>

          {/* 3. CENTER IMAGE */}
          <div
            className="absolute z-10 overflow-hidden shadow-[0_0_80px_rgba(255,255,255,0.05)] border border-white/5"
            style={{
              width: currentWidth,
              height: currentHeight,
              borderRadius: isMobile
                ? "20px"
                : animProgress > 0.5
                  ? "15px"
                  : "40px",
            }}
          >
            <img
              src={HeroImage}
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 4. DESKTOP ONLY: Content 10x Faster */}
          {!isMobile && (
            <div
              className="absolute z-20 text-center"
              style={{
                transform: `translateX(calc(${slideInDist}px + ${(endWidth / 2) + 210}px))`,
                opacity: animProgress > 0.1 ? 1 : 0,
              }}
            >
              <h2 className="text-[25px] md:text-[40px] font-black uppercase tracking-tighter font-inter">
                Content 10× Faster
              </h2>
            </div>
          )}

          {/* 5. BOTTOM LINE: Cost Savings */}
          <div
            className="absolute z-20 w-full text-center"
            style={{
              transform: `translateY(calc(${slideInDist}px + ${(endHeight / 2) + (isMobile ? 70 : 85)}px))`,
              opacity: animProgress > 0.1 ? 1 : 0,
            }}
          >
            <h2 className="text-[18px] md:text-[45px] font-black uppercase tracking-tighter font-inter leading-tight px-2">
              With Up To 70% Cost Savings.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SynProHeroSection;