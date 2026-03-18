import React from "react";
import CTAImage from "../../../assets/EdInai_imgs/CTA.png";

const EdInaiAdminTrasform = ({ id }) => {
  return (
    <section id={id} className="w-full py-9 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[7px] md:rounded-[10px] min-h-[250px] md:min-h-[450px] flex items-center justify-center text-center p-6 md:p-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${CTAImage})`,
            filter: "brightness(0.4)",
          }}
        />

        {/* Dark Semi-Transparent Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[1px]" />

        {/* Content Container */}
        <div className="relative z-20 w-full mb-12 max-w-4xl mx-auto">
          <h1 className="h1 mb-6 text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Ready to Transform Your Institution?
          </h1>

          <p className="h2 mb-8 md:mb-10 max-w-3xl mx-auto text-sm sm:text-base md:text-xl text-white/90">
            Launch AI-powered teaching, exam automation, and smart academic management with Ed-INAI today.
          </p>

          <div className="flex justify-center">
            <div className="group relative flex items-center gap-2 bg-white/[0.10] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 rounded-[7px] md:rounded-[10px]  font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20">
              <button className="relative text-[18px] md:text-[20px]  md:px-4 px-3 py-1 md:py-2  flex items-center gap-2 bg-transparent text-white font-medium transition-all duration-300">
                Book Admin Demo
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-[7px] md:rounded-[10px] blur-[60px] md:blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-80 md:h-80 bg-purple-500/10 rounded-[7px] md:rounded-[10px] blur-[80px] md:blur-[120px]" />
      </div>
    </section>
  );
};

export default EdInaiAdminTrasform;
