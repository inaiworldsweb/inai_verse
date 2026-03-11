import React from 'react';
import CTAImage from '../../../assets/EdInai_imgs/CTA.png';

const EdInaiTrasform = () => {
  return (
    <section className="w-full py-9 md:py-12 px-4">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] min-h-[250px] md:min-h-[350px] flex items-center justify-center text-center p-6 md:p-16">
        {/* Background Image with Futuristic Classroom & VR Elements */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${CTAImage})`,
            filter: "brightness(0.4)"
          }}
        />
        
        {/* Dark Semi-Transparent Overlay */}
        <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[1px]" />

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-4xl mx-auto">
          <h1 className="h1 mb-6 text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
            Transform Your Institution With AI-Powered Teaching & Exam Automation
          </h1>
          
          <p className="p mb-8 md:mb-10 max-w-3xl mx-auto text-sm sm:text-base md:text-xl text-white/90">
            Experience The Future Of Education With AI Lectures, Automated Exams, And Intelligent Analytics. All In One Platform.
          </p>

          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
              <button className="group p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200 cursor-pointer">
                <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-2 py-2">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-white">Book a Demo</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements for "Futuristic" feel */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500/10 rounded-full blur-[60px] md:blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-40 h-40 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>
    </section>
  );
};

export default EdInaiTrasform;
