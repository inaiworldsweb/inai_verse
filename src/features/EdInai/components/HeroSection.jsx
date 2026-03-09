import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // You can change this path to your desired destination
    navigate("/get-started");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-8 md:py-0 lg:pl-8 relative">
      {/* Hero Title and CTA - Centered */}
      <div className="text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold leading-tight mb-2 md:mb-4 capitalize tracking-tight">
          India's First
          <br /> Virtual AI Teacher Platform
        </h2>
        <h3 className="text-center text-xs sm:text-sm md:text-base text-white/80 mb-3 md:mb-6 capitalize tracking-normal">
          Teach smarter with AI-powered virtual teachers trained on your
          syllabus
        </h3>

        <button
          type="button"
          onClick={handleGetStarted}
          className="
                        group
                        w-full sm:w-auto
                        bg-white text-black border-none
                        py-3 px-6 sm:px-8 rounded-full
                        text-sm font-semibold cursor-pointer
                        inline-flex items-center justify-center gap-2
                        transition-transform duration-200
                    "
        >
          <span className="relative inline-block overflow-hidden align-top font-['Inter']">
            <span className="invisible">Get Started</span>
            <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Get Started
            </span>
            <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
              Get Started
            </span>
          </span>
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
