



















import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Icon0 from "../EdInaiIcon/Icon.svg";
import Icon1 from "../EdInaiIcon/Icon (1).svg";
import Icon2 from "../EdInaiIcon/Icon (2).svg";
import Icon3 from "../EdInaiIcon/Icon (3).svg";
import Icon4 from "../EdInaiIcon/Container.svg";

export default function Edinaichallenges({ id }) {
  const challenges = [
    { icon: Icon2, title: "Shortage Of Qualified Teachers" },
    { icon: Icon3, title: "Lack Of Personalized Attention" },
    { icon: Icon0, title: "Low Student Engagement" },
    { icon: Icon1, title: "Inconsistent Learning Quality" },
    { icon: Icon4, title: "Manual Exam & Academic Management" },
  ];

  const duplicatedChallenges = [...challenges, ...challenges, ...challenges];

  const [currentIndex, setCurrentIndex] = useState(challenges.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(1);

  const autoPlayRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) setCardsToShow(4);
      else if (window.innerWidth >= 768) setCardsToShow(3);
      else setCardsToShow(1);
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();

    autoPlayRef.current = setInterval(() => {
      moveNext();
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex >= challenges.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(challenges.length);
      }, 500);
    }

    if (currentIndex <= challenges.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(challenges.length * 2 - 1);
      }, 500);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  const moveNext = () => {
    if (isTransitioning) setCurrentIndex((prev) => prev + 1);
  };

  const movePrev = () => {
    if (isTransitioning) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section
      id={id}
      className="w-full bg-black text-white py-9 md:py-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}

        <div className="text-center mb-12 md:mb-16">

          <h2 className="h1 mb-6 ">
            Challenges in Traditional Education
          </h2>

          <p className=" max-w-4xl h2 mx-auto ">
            Many institutions face difficulties in delivering consistent,
            personalized, and scalable education. edInai addresses these
            challenges through intelligent automation.
          </p>
        </div>

        {/* Carousel */}

        <div
          className="relative group"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ gap: cardsToShow === 1 ? "0px" : "20px" }}
              animate={{
                x:
                  cardsToShow === 1
                    ? `-${currentIndex * 100}%`
                    : `calc(-${currentIndex * (100 / cardsToShow)}% - ${(currentIndex * 20) / cardsToShow}px)`,
              }}
              transition={
                isTransitioning
                  ? { type: "spring", stiffness: 300, damping: 35 }
                  : { duration: 0 }
              }
            >
              {duplicatedChallenges.map((item, index) => (
                <div
                  key={index}
                  style={{
                    flex:
                      cardsToShow === 1
                        ? "0 0 100%"
                        : `0 0 calc(${100 / cardsToShow}% - ${(20 * (cardsToShow - 1)) / cardsToShow}px)`,
                  }}
                  className="min-h-[260px] md:min-h-[220px] md:px-0"
                >
                  <div className="bg-[#0c0d0e]  p-8 rounded-2xl h-full flex flex-col items-center text-center justify-center transition-all hover:bg-[#161617] hover:border-white/20">
                    <div className="mb-6 p-4 bg-white/5 rounded-2xl">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-12 h-12 object-contain"
                      />
                    </div>

                    <h3 className="text-xl md:text-xl font-medium leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Buttons */}

          <button
            onClick={movePrev}
            className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/80 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={moveNext}
            className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/80 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}

        <div className="flex justify-center gap-2 mt-10">
          {challenges.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(challenges.length + i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex % challenges.length === i
                  ? "w-8 bg-white"
                  : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
