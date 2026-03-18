import React from "react";
// Image aap yahan import kar sakte hain
import BannerImg from "../../../assets/EdInai_Student_imgs/Learn Smarter, Revise Faster & Track Your Progress with Ed-INAI’s Intelligent Student Portal.webp";

const StudentHero = () => {
  return (
    <section className="w-full bg-black py-9 md:py-12 px-4">
      <div className="max-w-6xl mx-auto overflow-hidden rounded-[10px]  relative min-h-[400px] md:min-h-[550px] flex items-center justify-center">
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
        <div className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center justify-center h-full">
          <h1 className="text-white h1 text-2xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-snug mb-8 tracking-tight">
            Learn Smarter, Revise Faster & <br className="hidden md:block" />
            Track Your Progress with Ed-INAI’s{" "}
            <br className="hidden md:block" />
            Intelligent Student Portal
          </h1>

          <button className="group relative flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20  md:px-4 px-3 py-1 md:py-2  rounded-[10px] text-[18px] md:text-[20px] font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20">
            Start Learning Now
          </button>
        </div>

        {/* Optional: Border Glow Effect (Jaise image mein yellow line hai) */}
      </div>
    </section>
  );
};

export default StudentHero;
