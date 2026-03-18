import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DemoModal from "./Demo";

const HeroSection = ({ id, onDemoClick }) => {
  const navigate = useNavigate();

  return (
    <section
      id={id}
      className="min-h-[85vh] flex items-center justify-center py-9 md:py-24"
    >
      <div className="text-center px-6 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h3 className=" h3 font-bold mb-6">
          India’s First Virtual AI Teachers for
          <br /> Smart Education
        </h3>

        {/* Subtext - Balanced max-width for better readability */}
        <p className="max-w-4xl p mx-auto text-sm md:text-lg text-white/70 mb-6 leading-relaxed">
          Empowering schools, colleges, and coaching institutes with AI-powered
          teaching, learning, and academic management solutions.
        </p>

        {/* CTA Button with subtle scale effect */}
        <div className="group relative flex items-center gap-2 bg-white/[0.10] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 rounded-[10px] text-xl font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20 mt-4 inline-block">
          <button
            type="button"
            onClick={onDemoClick}
            className="relative px-6 py-3 flex items-center gap-2 bg-transparent text-white font-medium transition-all duration-300"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
