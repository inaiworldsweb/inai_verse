import React from 'react';
import heroBg from '../../../assets/images/edInai/Admin/Hero.webp';

const AdminHero = ({ id }) => {
  return (
    <section id={id} className="w-full py-9 md:py-12 px-4 md:px-6 flex justify-center">
      <div
        className="w-full max-w-6xl  rounded-[7px] md:rounded-[10px] overflow-hidden relative"
        style={{
          minHeight: '550px'
        }}
      >
        {/* Background Image Setup */}

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Dark Overlay matching the figma design */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        {/* Content Container */}
        <div className="relative h-full min-h-[450px] flex flex-col items-center justify-center top-0 left-0 w-full  text-center z-10">
          <h1 className="h1  mb-4 max-w-4xl mx-auto tracking-wide">
            Smart Academic Management with<br className="hidden md:block" /> edInai
          </h1>

          <p className="h2  max-w-[700px] mx-auto font-medium">
            Manage curriculum, schedules, exams, staff, and performance<br className="hidden md:block" /> — all from one powerful AI-driven dashboard.
          </p>

          <div className="group relative mt-10 flex items-center mb-4 gap-4 bg-white/[0.10] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 rounded-[7px] md:rounded-[10px] text-xl font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20">
            <button className="relative md:px-4 px-3 py-1 md:py-2 text-[18px] md:text-[20px] flex items-center gap-2 bg-transparent text-white font-medium transition-all duration-300">
              Request Admin Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHero;
