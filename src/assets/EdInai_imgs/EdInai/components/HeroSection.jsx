import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center py-24">
      <div className="text-center px-6 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h3 className=" h3 font-bold mb-6"  >
          India’s First Virtual AI Teachers for
           <br /> Smart Education

        </h3>

        {/* Subtext - Balanced max-width for better readability */}
        <p className="max-w-4xl p mx-auto text-sm md:text-lg text-white/70 mb-6 leading-relaxed">
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
            mt-4
          "
        >
          Book a Demo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;