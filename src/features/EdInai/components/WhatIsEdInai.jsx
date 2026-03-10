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
    <section className=" text-white min-h-[80vh] flex items-center justify-center p-6 md:p-12">
      <div className="max-w-7xl w-full bg-[#0a0a0a] rounded-[40px] overflow-hidden border border-gray-800 flex flex-col lg:flex-row items-stretch shadow-2xl">
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <div className="relative h-full min-h-[300px] md:min-h-[500px] rounded-[30px] overflow-hidden">
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
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="mb-6 ">
              What is Ed-INAI?
            </h1>

            <p className="text-gray-400  leading-relaxed mb-8">
              Ed-INAI is an AI-powered education platform developed by INAI
              Worlds Pvt. Ltd. It enables institutions to automate teaching,
              personalize learning, and improve academic outcomes using advanced
              virtual AI teachers and smart analytics.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-white rounded-full group-hover:bg-blue-500 transition-colors"></div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-200">
                    {feature}
                  </h2>
                </li>
              ))}
            </ul>

            <p className="text-gray-500  pl-4">
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
