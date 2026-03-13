import React from "react";
// Image aap yahan import kar sakte hain
import BannerImg from "../../../assets/EdInai_Student_imgs/Hero_page.jpg";

const StudentHero = () => {
  return (
    <section className="w-full bg-black py-9 md:py-12 px-4">
      <div className="max-w-6xl mx-auto overflow-hidden rounded-[10px]  relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            src={BannerImg} // Replace with your imported BannerImg
            alt="Student Learning"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay - Text Visibility ke liye zaroori hai */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug mb-8 tracking-tight">
            Learn Smarter, Revise Faster & <br className="hidden md:block" />
            Track Your Progress with Ed-INAI’s <br className="hidden md:block" />
            Intelligent Student Portal
          </h1>

          <button className="bg-white text-black hover:bg-gray-200 transition-colors px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-lg active:scale-95 duration-200">
            Start Learning Now
          </button>
        </div>

        {/* Optional: Border Glow Effect (Jaise image mein yellow line hai) */}
        
      </div>
    </section>
  );
};

export default StudentHero;