import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Examination1 from '../../../assets/EdInai_imgs/Examination1.png'; 

gsap.registerPlugin(ScrollTrigger);

const learningModes = [
  { id: 1, mode: "Mode 1", title: "Live AI Lectures", description: "Attend real-time AI-powered classes where students can interact, ask questions, and learn through visual explanations.", image: Examination1 },
  { id: 2, mode: "Mode 2", title: "Dynamic Assessment Engine", description: "Automatically generate balanced question papers and interactive quizzes that adapt to individual student performance levels.", image: Examination1 },
  { id: 3, mode: "Mode 3", title: "Smart Scheduling System", description: "Set date & time for exams with duration calculation and unique Exam IDs. Secure activation ensures a seamless cycle.", image: Examination1 },
  { id: 4, mode: "Mode 4", title: "Personalized Learning Paths", description: "Every student receives a unique learning journey based on their pace, interests, and knowledge gaps.", image: Examination1 },
  { id: 5, mode: "Mode 5", title: "Real-time Progress Analytics", description: "Comprehensive dashboards for educators to monitor engagement, performance, and identify students needing support.", image: Examination1 }
];

const EdInaiPowerfulLearning = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.powerful-card');
    
    cards.forEach((card, i) => {
    
      if (i < cards.length - 1) {
        gsap.to(card, {
          scale: 0.9,
          opacity: 0.5, // Subtle fade is often cleaner than pure black
          filter: "brightness(0.3)",
          scrollTrigger: {
            trigger: cards[i + 1], // Trigger when the next card starts moving
            start: "top 80%",      
            end: "top 20%",       
            scrub: true,
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-black py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Sticky on top so it stays while cards scroll */}
        <div className=" text-center mb-20 md:mb-32 z-0">
          <h1 className="text-white sticky  text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Powerful Learning Modes for Every Student
          </h1>
          <p className="text-gray-500 text-lg md:text-2xl font-medium">
            Different ways to learn, one powerful platform
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col items-center">
          {learningModes.map((mode, index) => (
            <div 
              key={mode.id} 
              className="powerful-card sticky bg-[#111] border border-white/10 rounded-[30px] md:rounded-[40px] p-6 md:p-16 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 items-center min-h-[350px] md:h-[550px]"
              style={{ 
                zIndex: index + 1,
                // These two lines create the visual "stack"
                top: `${80 + (index * 20)}px`, 
                marginBottom: '1vh' // This creates the scroll distance needed to see the stack
              }}
            >
              {/* Text Content */}
              <div className="w-full md:flex-[1.2] space-y-4 md:space-y-10 text-left">
                <div className="inline-block px-4 py-1 md:px-5 md:py-2 bg-white/5 border border-white/10 rounded-full">
                  <span className="text-gray-400 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">
                    {mode.mode}
                  </span>
                </div>
                
                <h2 className="text-white font-bold text-3xl md:text-6xl tracking-tight leading-tight">
                  {mode.title}
                </h2>
                
                <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-xl">
                  {mode.description}
                </p>
              </div>

              {/* Image Showcase */}
              <div className="w-full md:flex-1 aspect-video md:h-full rounded-[20px] md:rounded-[30px] overflow-hidden border border-white/10 bg-[#0a0a0a] relative">
                <img 
                  src={mode.image} 
                  className="w-full h-full object-cover" 
                  alt={mode.title} 
                />
              </div>
            </div>
          ))}
          
          {/* Spacer to allow the last card to rest */}
          <div className="h-[20vh] w-full" />
        </div>
      </div>
    </section>
  );
};

export default EdInaiPowerfulLearning;