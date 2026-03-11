import React from 'react';
import Icon0 from '../EdInaiIcon/Icon.svg';
import Icon1 from '../EdInaiIcon/Icon (1).svg';
import Icon2 from '../EdInaiIcon/Icon (2).svg';
import Icon3 from '../EdInaiIcon/Icon (3).svg';
import Icon4 from '../EdInaiIcon/Container.svg';

export default function Edinaichallenges() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full flex flex-col gap-8">
        
        {/* Heading Section */}
        <div className="text-center mb-4">
          <h1 className='h1 mb-2'>
            Challenges in Traditional Education Systems
          </h1>
          <div >
            <h2 className=" max-w-5xl h2 mx-auto">
              Many institutions face difficulties in delivering consistent, personalized, and scalable education.
            </h2>
          </div>
        </div>

        {/* Grid for the 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Teacher Shortage */}
          <div className="flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-8 bg-[#0a0a0a]">
            
                  <img src={Icon2} alt="Challenge Icon" className="w-8 h-8 mb-3" />
            <p >Shortage Of Qualified Teachers</p>
          </div>

          {/* Card 2: Personalization */}
          <div className="flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-8 bg-[#0a0a0a]">
        
             <img src={Icon3} alt="Challenge Icon" className="w-8 h-8 mb-3" />
            <p >Lack Of Personalized Attention</p>
          </div>

          {/* Card 3: Engagement */}
          <div className="flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-8 bg-[#0a0a0a]">
         <img src={Icon0} alt="Challenge Icon" className="w-8 h-8 mb-3" />
            <p >Low Student Engagement</p>
          </div>

          {/* Card 4: Quality */}
          <div className="flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-8 bg-[#0a0a0a]">
               <img src={Icon1} alt="Challenge Icon" className="w-8 h-8 mb-3" />
            <p>Inconsistent Learning Quality</p>
          </div>

        </div>

        {/* Card 5: Manual Management (Full Width) */}
        <div className="flex flex-col items-center justify-center gap-4 border border-gray-800 rounded-2xl p-10 bg-[#0a0a0a] w-full">
          <img src={Icon4} alt="Challenge Icon" className="w-8 h-8 mb-3" />
          <p >Manual Exam & Academic Management</p>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-dotted border-gray-700 pt-6 text-center">
          <p >
            Ed-INAI addresses these challenges through intelligent automation and AI-driven learning.
          </p>
        </div>

      </div>
    </section>
  );
}