import React from 'react';


const EdInaiPlatform = () => {
  return (
    <section className="edinai-platform bg-black min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full flex flex-col items-center space-y-6">
        
        {/* Header Section */}
        <div className="flex items-center justify-center flex-col">
          <h1>Inside the Ed-INAI AI Education Platform</h1>
          <p className=" mx-auto">
            From Administration to Learning Ed-INAI Automates, Optimizes, and Personalizes the Entire Education Journey.
          </p>
        </div>

        {/* Image / Slider Container */}
        <div className="relative w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-gray-800 my-8 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Platform Interface" 
            className="w-full h-[250px] md:h-[500px] object-cover opacity-80"
          />
          
          {/* Slider Pagination Dots (Visual Only) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full border border-white"></div>
            <div className="w-6 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full border border-white"></div>
            <div className="w-2 h-2 rounded-full border border-white"></div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className=" flex flex-col items-center w-full">
          <p >
            Students can choose exam categories, access study materials, and attempt AI-generated mock tests anytime.
          </p>

          <h2 className='mt-8'>Upload & Organize Curriculum</h2>

          {/* Learn More Button */}
          <button className="bg-white text-black font-semibold px-10 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 mt-10 text-base md:text-lg">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
};

export default EdInaiPlatform;