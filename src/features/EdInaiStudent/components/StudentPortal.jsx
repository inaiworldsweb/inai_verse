import React from "react";
// Agar aapke paas apni local image hai to ise uncomment karein:
// import BannerImg from "../assets/student-group.jpg";

const StudentPortal = ({ id }) => {
  return (
    <section id={id} className="w-full bg-black py-9 md:py-12 px-4">
      {/* Main Container with Rounded Corners */}
      <div className="max-w-6xl mx-auto overflow-hidden rounded-[30px] md:rounded-[50px] relative min-h-[450px] md:min-h-[550px] flex items-center justify-center border border-white/10">
        
        {/* Background Image Area */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" // Replace with BannerImg
            alt="Students Learning"
            className="w-full h-full object-cover"
          />
          {/* Professional Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.15] md:leading-tight mb-6 tracking-tight">
            Start Your AI-Powered <br className="hidden md:block" />
            Learning Journey Today
          </h1>

          <p className="text-gray-200 text-sm md:text-lg mb-10 max-w-2xl font-light">
            Join Thousands Of Students Learning Smarter With Ed-INAI's <br className="hidden md:block" />
            Intelligent Platform.
          </p>

          {/* Styled Button - Image ki tarah exact match */}
          <button className="bg-white text-black hover:bg-gray-200 transition-all duration-300 px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-sm md:text-base shadow-[0_10px_40px_rgba(255,255,255,0.1)] active:scale-95">
            Access Student Portal
          </button>
        </div>

        {/* Optional Inner Glow/Border Effect like reference image */}
       
      </div>
    </section>
  );
};

export default StudentPortal;