import React from "react";
import img from "../../../assets/EdInai_imgs/What_EdInai.png";

const WhatIsEdInai = () => {
  const features = [
    "Automate Teaching",
    "Personalize Learning",
    "Generate AI-Based Question Papers",
    "Schedule And Manage Exams",
    "Track Student Performance",
    "Improve Academic Outcomes",
  ];

  return (
    <section className=" text-white min-h-[70vh] flex items-center justify-center px-4 py-9 md:py-12">
      <div className="max-w-5xl w-full bg-[#0a0a0a] rounded-[40px] rounded-r-none overflow-hidden border border-gray-800 flex flex-col lg:flex-row items-stretch shadow-2xl">
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-1/3 p-4">
          <div className="relative h-full min-h-[200px] md:min-h-[300px]   rounded-[30px] overflow-hidden">
            <img
              src={img} // Replace with your actual image path
              alt="AI Classroom"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient for a premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-5 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="h1 mb-6">What is edInai?</h1>

            <p className="p text-gray-400 leading-relaxed mb-8">
              edInai is an AI-powered education platform developed by INAI
              Worlds Pvt. Ltd. It enables institutions to automate teaching,
              personalize learning, and improve academic outcomes using advanced
              virtual AI teachers and smart analytics.
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-white rounded-full group-hover:bg-blue-500 transition-colors"></div>
                  <h2 className="h2 text-lg md:text-xl font-semibold text-gray-200">
                    {feature}
                  </h2>
                </li>
              ))}
            </ul>

            <p className="p text-gray-500 md:mb-5 mb-2">
              Our virtual AI teachers conduct live, interactive lectures through
              intelligent digital interfaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEdInai;
