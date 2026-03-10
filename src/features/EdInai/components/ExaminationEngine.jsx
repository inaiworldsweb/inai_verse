import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import Examination1 from '../../../assets/EdInai_imgs/Examination1.png';
import Examination2 from '../../../assets/EdInai_imgs/Examination2.png';
import Examination3 from '../../../assets/EdInai_imgs/Examination3.png';

const examData = [
  {
    id: 1,
    tabTitle: "AI Question Paper Generator",
    bulletPoints: [
      "Upload Syllabus Or PDF",
      "Choose Difficulty (Easy / Medium / Hard)",
      "Choose Format (MCQ / Short / Hybrid)",
      "AI Generates Structured Exam Paper",
      "Auto Answer Key Included",
      "One-Click PDF Download"
    ],
    image: Examination1
  },
  {
    id: 2,
    tabTitle: "Smart Scheduling System",
    bulletPoints: [
      "Set date, time & duration",
      "Automatic duration calculation",
      "Unique Exam ID generation",
      "Secure exam activation",
      "Live countdown timer for students"
    ],
    image: Examination2
  },
  {
    id: 3,
    tabTitle: "Student Exam Portal",
    bulletPoints: [
      "View scheduled exams",
      "Practice topic-wise tests",
      "Access study materials",
      "Track results & performance",
      "Review answers instantly"
    ],
    image: Examination3
  }
];

const ExaminationEngine = () => {
  const [activeTab, setActiveTab] = useState(0);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    gsap.set(textRef.current, { opacity: 0, x: 20 });
    gsap.set(imageRef.current, { opacity: 0, scale: 0.95 });

    tl.to(textRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .to(imageRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.3");

  }, { dependencies: [activeTab], scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-black py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="  mb-6">
            Smart, Automated & Scalable Examination Engine
          </h1>
          <p className=" mb-8">
            Ed-INAI now includes a complete AI-powered exam management solution.
          </p>
        
        </div>

        
        {/* overflow-visible is key so the button can pop out of the box boundaries */}
        <div className="flex flex-col lg:flex-row min-h-[250px] rounded-[40px] border border-gray-800 bg-black overflow-visible">
          
          {/* Left Sidebar - White Section */}
          <div className="w-full lg:w-[35%] bg-white rounded-l-[40px] p-8 md:p-12 flex flex-col justify-center gap-6 relative z-20 overflow-visible">
            {examData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(index)}
                className={`group relative flex items-center py-5 px-8 transition-all duration-500 rounded-full text-left ${
                  activeTab === index 
                  ? 'bg-black text-white lg:translate-x-12 lg:w-[calc(100%+3rem)] shadow-[20px_0_40px_rgba(0,0,0,0.3)] z-30 border border-white' 
                  : 'bg-transparent text-black hover:bg-gray-100 w-full z-10'
                }`}
              >
                {/* Dot */}
                <div className={`w-2.5 h-2.5 rounded-full mr-5 shrink-0 transition-colors duration-500 ${
                  activeTab === index ? 'bg-white' : 'bg-black'
                }`}></div>
                
                <h4 className={`whitespace-nowrap font-bold transition-colors duration-500 ${
                  activeTab === index ? 'text-white' : 'text-black'
                }`}>
                  {item.tabTitle}
                </h4>
              </button>
            ))}
          </div>

          {/* Right Content Area - Black Section */}

          <div className="flex-1 bg-white/5 rounded-r-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-10 lg:pl-20 relative z-0 border-l border-white/10">
            
            {/* List Content */}
            <div ref={textRef} className="flex-1 w-full space-y-4">
              <ul className="space-y-5">
                {examData[activeTab].bulletPoints.map((point, i) => (
                  <li key={i} className="text-white text-base md:text-lg font-light flex items-start gap-3">
                    <span className="text-white/40 mt-1 shrink-0">—</span>
                    <span >{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Section */}
            <div ref={imageRef} className="flex-1 w-full max-w-[380px]">
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={examData[activeTab].image} 
                  alt={examData[activeTab].tabTitle}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
            </div>

          </div>
        </div>
        

      </div>
    </section>
  );
};

export default ExaminationEngine;