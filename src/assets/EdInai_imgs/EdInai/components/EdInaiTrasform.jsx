import React from 'react';

const EdInaiTrasform = () => {
  return (
    <section className="w-full py-8 md:py-16 px-4">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] min-h-[400px] md:min-h-[500px] flex items-center justify-center text-center p-6 md:p-16">
        {/* Background Image with Futuristic Classroom & VR Elements */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')",
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
            <button className="bg-white text-black font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-xl text-sm md:text-base active:scale-95">
              Book a Demo
            </button>
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
