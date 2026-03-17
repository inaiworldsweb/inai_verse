import React, { useEffect, useRef } from "react";

const FutureSection = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const requestRef = useRef();
  const pathsRef = useRef([]);
  const startTimeRef = useRef(null);

  // Card data
  const leftCards = [
    {
      title: "AI Teachers That Never Tire",
      desc: "Our AI Teacher delivers consistent, engaging lectures with clear explanations and human-like interaction.",
    },
    {
      title: "Smart Automation for Institutions",
      desc: "edInai simplifies class scheduling, student tracking, and performance monitoring, helping schools and colleges reduce manual work and save time.",
    },
  ];
  const rightCards = [
    {
      title: "24×7 Learning Access",
      desc: "Students can learn anytime through live or recorded classes, AI-generated notes, and instant question-and-answer support.",
    },
    {
      title: "Future-Ready Education",
      desc: "edInai supports India's journey toward global education standards by combining innovation, accessibility, and AI-driven teaching.",
    },
  ];

  // Refs for positioning
  const leftCardRefs = [useRef(null), useRef(null)];
  const rightCardRefs = [useRef(null), useRef(null)];
  const logoRef = useRef(null);

  useEffect(() => {
    // Only run animation logic if screen is desktop (>= 768px)
    if (window.innerWidth < 768) return;

    const svg = svgRef.current;
    const container = containerRef.current;
    if (!svg || !container) return;

    const updatePathsAndPositions = () => {
      if (!container || !logoRef.current || window.innerWidth < 768) return;

      const logoRect = logoRef.current.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const logoCenter = {
        x: logoRect.left + logoRect.width / 2 - containerRect.left,
        y: logoRect.top + logoRect.height / 2 - containerRect.top,
      };

      const getCardCenter = (ref) => {
        if (!ref.current) return null;
        const rect = ref.current.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      };

      const cardPositions = [
        getCardCenter(leftCardRefs[0]),
        getCardCenter(leftCardRefs[1]),
        getCardCenter(rightCardRefs[0]),
        getCardCenter(rightCardRefs[1]),
      ].filter((pos) => pos !== null);

      while (svg.firstChild) svg.removeChild(svg.firstChild);
      pathsRef.current = [];

      cardPositions.forEach((pos) => {
        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        const controlX = (logoCenter.x + pos.x) / 2;
        const controlY = (logoCenter.y + pos.y) / 2 - 30;
        path.setAttribute(
          "d",
          `M ${logoCenter.x},${logoCenter.y} Q ${controlX},${controlY} ${pos.x},${pos.y}`,
        );
        path.setAttribute("stroke", "#333");
        path.setAttribute("stroke-width", "1");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke-dasharray", "4 4");
        svg.appendChild(path);

        const dot = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
        dot.setAttribute("r", "3");
        dot.setAttribute("fill", "white");
        dot.style.filter = "drop-shadow(0 0 4px white)";
        svg.appendChild(dot);

        pathsRef.current.push({ path, dot });
      });
    };

    updatePathsAndPositions();

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = (timestamp - startTimeRef.current) / 3000;
      const progress = elapsed % 1;

      pathsRef.current.forEach(({ path, dot }) => {
        const pathLength = path.getTotalLength();
        const point = path.getPointAtLength(progress * pathLength);
        dot.setAttribute("cx", point.x);
        dot.setAttribute("cy", point.y);
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver(() => {
      if (window.innerWidth < 768) {
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        pathsRef.current = [];
      } else {
        updatePathsAndPositions();
      }
    });

    resizeObserver.observe(container);
    if (logoRef.current) resizeObserver.observe(logoRef.current);
    [...leftCardRefs, ...rightCardRefs].forEach((ref) => {
      if (ref.current) resizeObserver.observe(ref.current);
    });

    return () => {
      cancelAnimationFrame(requestRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-black text-white md:py-12 py-9 px-4 md:px-8 overflow-hidden"
    >
      {/* SVG Layer - Hidden on mobile */}
      <svg
        ref={svgRef}
        className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ zIndex: 5 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-4 md:mb-16">
          <h2 className="h1 text-white">
            How edInai Is Transforming Indian Education
          </h2>
          <p className="text-gray-400 h2 mt-4 max-w-2xl mx-auto ">
            The Future of AI-Powered, Personalized Learning Across India
          </p>
        </div>

        {/* Grid Layout: Stacked on mobile, 3-column on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Left Column (Top 2 cards on mobile) */}
          <div className="w-full space-y-6 order-2 md:order-1">
            {leftCards.map((card, idx) => (
              <div
                key={idx}
                ref={leftCardRefs[idx]}
                className="bg-black border border-gray-600 rounded-[10px] p-6 hover:border-white transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] md:h-70 lg:h-52 flex flex-col justify-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Center Logo - Order 1 on mobile to stay at top, Order 2 on desktop */}
          <div className="w-full flex justify-center items-center py-2 md:py-0 order-1 md:order-2">
            <div
              ref={logoRef}
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-[10px] bg-black shadow-lg flex items-center justify-center border border-gray-800"
            >
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-[10px] bg-black flex items-center justify-center text-2xl md:text-3xl font-black text-white border border-gray-600 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                edInai
              </div>
              <div className="absolute -inset-2 rounded-[10px] bg-white/5 blur-2xl -z-10 animate-pulse" />
            </div>
          </div>

          {/* Right Column (Bottom 2 cards on mobile) */}
          <div className="w-full space-y-6 order-3 md:order-3">
            {rightCards.map((card, idx) => (
              <div
                key={idx}
                ref={rightCardRefs[idx]}
                className="bg-black border border-gray-600 rounded-[10px] p-6 hover:border-white transition-all duration-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] md:h-70 lg:h-52 flex flex-col justify-center"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
