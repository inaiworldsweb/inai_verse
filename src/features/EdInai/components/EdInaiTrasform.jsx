import React from 'react';

const EdInaiTrasform = () => {
  return (
    <section className="w-full py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[2rem] h-[300px] md:h-[400px] flex items-center justify-center text-center">
        {/* Background Image with Futuristic Classroom & VR Elements */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop')",
            filter: "brightness(0.5)"
          }}
        />
        
        {/* Dark Semi-Transparent Overlay */}
        <div className="absolute inset-0 z-10 bg-black/40 backdrop-blur-[2px]" />

        {/* Content Container */}
        <div className="relative z-20 px-6 md:px-12 max-w-5xl">
          <h1 className="mb-6">
            Transform Your Institution With AI-Powered Teaching & Exam Automation
          </h1>
          
          <p className="font-medium mb-10 max-w-3xl mx-auto ">
            Experience The Future Of Education With AI Lectures, Automated Exams, And Intelligent Analytics. All In One Platform.
          </p>

          <div className="flex justify-center">
            <button className="bg-white text-black font-bold py-4 px-10 rounded-full transition-transform duration-300 hover:scale-105 shadow-xl">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Decorative Elements for "Futuristic" feel */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default EdInaiTrasform;
