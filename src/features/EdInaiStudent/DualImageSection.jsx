import React from "react";
import leftImg from "../../assets/final/Smart dashboard and real time feedback.png";
import rightImg from "../../assets/final/Recorded Revisions.png";

const DualImageSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-[25px] md:text-[40px] font-semibold mb-6">
          Learn Anytime, Anywhere
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-[15px] md:text-[25px] max-w-3xl mx-auto mb-14 leading-relaxed">
          Students can access sessions from smartphones, laptops, tablets, smart TVs, or classroom projectors. The platform adjusts to bandwidth levels and offers offline revision options. 
        </p>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Image */}
          <div className="bg-[#111]">
            <img
              src={leftImg}
              alt="Feature Left"
              className="w-full h-[340px] md:h-[400px] object-cover rounded-2xl border border-white/10"
            />
          </div>

          {/* Right Image */}
          <div className="bg-[#111]">
            <img
              src={rightImg}
              alt="Feature Right"
              className="w-full h-[340px] md:h-[400px] object-cover rounded-2xl border border-white/10"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default DualImageSection;