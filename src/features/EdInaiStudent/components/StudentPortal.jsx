import React from "react";
// Agar aapke paas apni local image hai to ise uncomment karein:
import BannerImg from "../../../assets/EdInai_Student_imgs/Start Your AI-Powered Learning Journey Today.webp";

const StudentPortal = ({ id }) => {
  return (
    <section id={id} className="w-full bg-black py-9 md:py-12 px-4">
      {/* Main Container with Rounded Corners */}
      <div className="max-w-6xl mx-auto overflow-hidden rounded-[30px] md:rounded-[50px] relative min-h-112.5 md:min-h-137.5 flex items-center justify-center border border-white/10">
        {/* Background Image Area */}
        <div className="absolute inset-0 z-0">
          <img
            src={BannerImg}
            alt="Students Learning"
            className="w-full h-full object-cover"
          />
          {/* Professional Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
          <h1 className="text-white h1  leading-[1.15] md:leading-tight mb-6">
            Start Your AI-Powered <br /> Learning Journey Today
          </h1>

          <p className="text-gray-200 h2 text-sm md:text-lg mb-10 max-w-5xl font-light">
            Join thousands of students learning smarter with edInai's
            intelligent platform.
          </p>

          {/* Styled Button - Image ki tarah exact match */}
          <button className="group relative flex items-center gap-2 bg-white/5 hover:bg-white/12 text-white border border-white/10 hover:border-white/20  md:px-4 px-3 py-1 md:py-2  rounded-[10px] text-[18px] md:text-[20px] font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20">
            Access Student Portal
          </button>
        </div>

        {/* Optional Inner Glow/Border Effect like reference image */}
      </div>
    </section>
  );
};

export default StudentPortal;
