import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ id }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");
  };

  return (
    <section
      id={id}
      className="min-h-[85vh] flex items-center justify-center py-24"
    >
      <div className="text-center px-6 max-w-5xl mx-auto">
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
        <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px] mt-4 inline-block">
          <button
            type="button"
            onClick={handleGetStarted}
            className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200 cursor-pointer"
          >
            <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-4 py-2">
              <div className="flex gap-2 items-center">
                <span className="font-semibold text-white text-base">
                  Book a Demo
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
