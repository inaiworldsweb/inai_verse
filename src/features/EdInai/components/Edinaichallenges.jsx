import {
  UserMinus,
  GraduationCap,
  Frown,
} from "lucide-react";

export default function Edinaichallenges() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full flex flex-col gap-8">
        
        {/* Heading Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Challenges in Traditional Education Systems
          </h1>
          <div className="border-t border-dotted border-gray-700 pt-4">
            <p className="text-gray-400 text-sm md:text-lg max-w-4xl mx-auto">
              Many institutions face difficulties in delivering consistent, personalized, and scalable education.
            </p>
          </div>
        </div>

        {/* Grid for the 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1: Teacher Shortage (Icon 1 - Slashed Cap) */}
          <div className="flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-8 bg-[#0a0a0a]">
            <div className="relative">
              <GraduationCap className="w-10 h-10 text-white" strokeWidth={1.5} />
              <div className="absolute top-0 right-0 w-full h-[2px] bg-white rotate-45 translate-y-5"></div>
            </div>
            <p className="text-xl font-medium">Shortage Of Qualified Teachers</p>
          </div>

          {/* Card 2: Personalization (Icon 2 - User Minus) */}
          <div className="flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-8 bg-[#0a0a0a]">
            <UserMinus className="w-10 h-10 text-white" strokeWidth={1.5} />
            <p className="text-xl font-medium">Lack Of Personalized Attention</p>
          </div>

          {/* Card 3: Engagement (Icon 3 - X Eyes Face) */}
          <div className="flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-8 bg-[#0a0a0a]">
            <div className="relative w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
               <span className="text-xs font-bold absolute left-2">x</span>
               <span className="text-xs font-bold absolute right-2">x</span>
               <div className="w-4 h-[2px] bg-white absolute bottom-2"></div>
            </div>
            <p className="text-xl font-medium">Low Student Engagement</p>
          </div>

          {/* Card 4: Quality (Icon 4 - HQ Box) */}
          <div className="flex flex-col items-start gap-4 border border-gray-800 rounded-2xl p-8 bg-[#0a0a0a]">
            <div className="border-2 border-white px-1 py-0.5 rounded text-[12px] font-black leading-none text-white">
              HQ
            </div>
            <p className="text-xl font-medium">Inconsistent Learning Quality</p>
          </div>
        </div>

        {/* Card 5: Manual Management (Icon 5 - Standing Human with Dots) */}
        <div className="flex flex-col items-center justify-center gap-4 border border-gray-800 rounded-2xl p-10 bg-[#0a0a0a] w-full">
            {/* Custom SVG to match the image icon exactly */}
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="5" r="1" fill="currentColor"/>
              <path d="M7 10h10" />
              <path d="M12 10v7" />
              <path d="M9 22h6" className="opacity-0" /> {/* Spacer */}
              <circle cx="11" cy="19" r="0.5" fill="currentColor"/>
              <circle cx="12" cy="19" r="0.5" fill="currentColor"/>
              <circle cx="13" cy="19" r="0.5" fill="currentColor"/>
            </svg>
          <p className="text-xl font-medium text-center">Manual Exam & Academic Management</p>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-dotted border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            Ed-INAI addresses these challenges through intelligent automation and AI-driven learning.
          </p>
        </div>

      </div>
    </section>
  );
}