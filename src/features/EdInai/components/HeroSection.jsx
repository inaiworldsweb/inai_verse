import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  return (
    <section className="min-h-[75vh] flex items-center justify-center py-16">
      <div className="text-center px-6 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-[1px]">
          India’s First Virtual AI Teachers for 
          <span className="block text-white/90">Smart Education</span>
        </h1>

        {/* Subtext - Balanced max-width for better readability */}
        <p className="max-w-2xl mx-auto text-sm md:text-lg text-white/70 mb-10 leading-relaxed">
          Empowering schools, colleges, and coaching institutes with AI-powered 
          teaching, learning, and academic management solutions.
        </p>

        {/* CTA Button with subtle scale effect */}
        <button
          type="button"
          onClick={handleGetStarted}
          className="
            inline-flex items-center justify-center 
            bg-white text-black 
            py-4 px-10 rounded-full 
            text-base font-bold 
            hover:bg-gray-100 hover:scale-105 
            active:scale-95
            transition-all duration-200
            shadow-lg
          "
        >
          Book a Demo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;