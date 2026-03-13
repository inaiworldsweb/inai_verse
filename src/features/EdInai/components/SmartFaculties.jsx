import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Vinai from "../../../assets/EdInai_imgs/Vinai.webp";
import Inai from "../../../assets/EdInai_imgs/inai.webp";
import Aira from "../../../assets/EdInai_imgs/Aera.webp";

const faculties = [
  {
    id: 2,
    name: "Inai",
    image: Inai,
    desc: "A female AI mentor who simplifies complex concepts and explains them in an easy, student-friendly way.",
  },
  {
    id: 1,
    name: "Vnai",
    image: Vinai,
    desc: "A confident male AI mentor focused on logical thinking, structured explanations, and concept clarity.",
  },
  {
    id: 3,
    name: "Aira",
    image: Aira,
    desc: "A female AI teacher who makes learning engaging through examples, practice-based teaching, and personalized guidance.",
  },
];

const SmartFaculties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % faculties.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black w-full text-white md:py-12 py-9 overflow-hidden flex flex-col items-center px-4 justify-center">
      <style>{`
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { 
          backface-visibility: hidden !important; 
          -webkit-backface-visibility: hidden !important; 
        }
        
        .rotate-y-180 { transform: rotateY(180deg); }

        /* The moving white line animation */
        .back-content-wrapper::before {
          position: absolute;
          content: ' ';
          display: block;
          width: 160px;
          height: 160%;
          background: linear-gradient(90deg, transparent, #ffffff, #ffffff, #ffffff, #ffffff, transparent);
          animation: rotation_481 5000ms infinite linear;
        }

        @keyframes rotation_481 {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }

        .circle-bg {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          position: absolute;
          filter: blur(35px);
          animation: floating_circle 2600ms infinite linear;
          opacity: 0.4;
        }

        @keyframes floating_circle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(15px); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto text-center mb-6 px-4">
        <h1 className="h1 mb-4 text-center">Meet Our Smart AI Faculties</h1>
        <h2 className="h2 text-center mx-auto lg:mb-12 text-gray-400">
          Your always-available digital academic partners, delivering
          consistent, high-quality instruction across subjects and grade levels.
        </h2>
      </div>

      <div className="hidden w-full max-w-6xl lg:grid items-center justify-center grid-cols-3 gap-8 mx-auto px-4">
        {faculties.map((fac) => (
          <div key={fac.id} className="group h-[380px] w-[280px] perspective cursor-pointer">
            <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
              
              {/* FRONT SIDE */}
              <div className="absolute inset-0 w-full h-full backface-hidden rounded-[10px] bg-[#151515] overflow-hidden border border-white/10 z-20">
                <div className="circle-bg top-[-10px] left-[-10px] bg-blue-500"></div>
                <div className="circle-bg bottom-[-20px] right-[-10px] bg-indigo-600" style={{ animationDelay: "-800ms" }}></div>
                
                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-end">
                   {/* Explicitly hidden during flip to prevent ghosting */}
                   <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img 
                        src={fac.image} 
                        alt={fac.name} 
                        className="w-[85%] h-auto object-contain transition-opacity duration-300 group-hover:opacity-0" 
                      />
                   </div>
                   <div className="bg-black/40 backdrop-blur-md p-3 rounded-[10px] border border-white/10 relative z-20 transition-opacity duration-300 group-hover:opacity-0">
                      <p className="font-bold text-center text-lg tracking-wide uppercase">{fac.name}</p>
                   </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-[10px] bg-[#151515] overflow-hidden flex items-center justify-center border border-white/5 z-10">
                <div className="back-content-wrapper relative w-full h-full flex items-center justify-center overflow-hidden">
                  {/* Added a solid dark inner div to block any image transparency */}
                  <div className="relative z-10 bg-[#151515] w-[98.5%] h-[98.5%] rounded-[10px] p-8 flex flex-col justify-between items-start text-left shadow-2xl">
                    <h4 className="text-white text-[32px] font-bold leading-tight mb-4 tracking-tighter">
                      {fac.name}
                    </h4>
                    <p className="text-gray-400 text-[15px] leading-relaxed font-normal">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Mobile View remains unchanged to protect content */}
      <div className="lg:hidden flex flex-col items-center">
        <div className="relative w-full max-w-xs h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full h-full flex flex-col bg-[#151515] border border-white/10 rounded-[10px] overflow-hidden"
            >
              <div className="h-[65%] w-full relative bg-[#1c1c1c]">
                <img src={faculties[currentIndex].image} className="w-full h-full object-contain" alt="AI" />
              </div>
              <div className="h-[35%] w-full bg-white text-black p-6 flex flex-col justify-center">
                <h4 className="text-2xl font-bold">{faculties[currentIndex].name}</h4>
                <p className="text-sm text-gray-600 mt-1">{faculties[currentIndex].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex gap-2 mt-8">
            {faculties.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-[10px] h-1.5 ${currentIndex === idx ? "w-8 bg-white" : "w-2 bg-gray-800"}`} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SmartFaculties;
