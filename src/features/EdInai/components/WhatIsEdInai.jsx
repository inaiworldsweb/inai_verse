import React from "react";
import img from "../../../assets/EdInai_imgs/What_EdInai.png";

const WhatIsEdInai = ({ id }) => {
  const features = [
    "Automate Teaching",
    "Personalize Learning",
    "Generate AI-Based Question Papers",
    "Schedule And Manage Exams",
    "Track Student Performance",
    "Improve Academic Outcomes",
  ];

  return (
    <section
      id={id}
      className="w-full py-9 md:py-12 px-4 bg-black text-white min-h-[70vh] flex items-center justify-center"
    >
      {/* Main Container: Right corners are 0 */}
      <div className="max-w-6xl w-full bg-[#0a0a0a] rounded-[10px] rounded-r-none overflow-hidden border border-gray-800 flex flex-col lg:flex-row items-stretch shadow-2xl">
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-full min-h-[300px] md:min-h-[400px]">
            <img
              src={img}
              alt="AI Classroom"
              /* Image: Right corners set to 0 to match the container */
              className="w-full scale-106 object-cover rounded-[10px] rounded-r-none"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-10 flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="h1 mt-2 md:mt-0 md:mb-6 mb-4">What is edInai?</h1>

            <p className="p text-gray-400 leading-relaxed md:mb-8 mb-4">
              edInai is an AI-powered education platform developed by INAI
              Worlds Pvt. Ltd. It enables institutions to automate teaching,
              personalize learning, and improve academic outcomes using advanced
              virtual AI teachers and smart analytics.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 bg-white rounded-full group-hover:bg-blue-500 transition-colors"></div>
                  <p className="p !text-[16px] font-semibold text-gray-200">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            <p className="p text-gray-500">
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
