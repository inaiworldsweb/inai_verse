import {
  UserIcon,
  AcademicCapIcon,
  FaceFrownIcon,
  BuildingLibraryIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

export default function Edinaichallenges() {
  return (
    <section className="w-full py-20  text-white">
      <div className="max-w-6xl mx-auto px-6">  

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Challenges in Traditional Education Systems
          </h2>

          <p className="text-gray-400 mt-3 max-w-3xl mx-auto">
            Many institutions face difficulties in delivering consistent,
            personalized, and scalable education.
          </p>
        </div>

        {/* Flex Container */}
        <div className="flex flex-wrap gap-6">

          {/* Card */}
          <div className="flex flex-col items-start gap-4 border border-gray-700 rounded-xl p-6 bg-white/5 backdrop-blur w-full md:w-[48%]">
            <AcademicCapIcon className="w-8 h-8 text-gray-300" />
            <p className="text-lg">Shortage Of Qualified Teachers</p>
          </div>

          <div className="flex flex-col items-start gap-4 border border-gray-700 rounded-xl p-6 bg-white/5 backdrop-blur w-full md:w-[48%]">
            <UserIcon className="w-8 h-8 text-gray-300" />
            <p className="text-lg">Lack Of Personalized Attention</p>
          </div>

          <div className="flex flex-col items-start gap-4 border border-gray-700 rounded-xl p-6 bg-white/5 backdrop-blur w-full md:w-[48%]">
            <FaceFrownIcon className="w-8 h-8 text-gray-300" />
            <p className="text-lg">Low Student Engagement</p>
          </div>

          <div className="flex flex-col items-start gap-4 border border-gray-700 rounded-xl p-6 bg-white/5 backdrop-blur w-full md:w-[48%]">
            <BuildingLibraryIcon className="w-8 h-8 text-gray-300" />
            <p className="text-lg">Inconsistent Learning Quality</p>
          </div>

          {/* Bottom full card */}
          <div className="flex flex-col items-center justify-center gap-4 border border-gray-700 rounded-xl p-6 bg-white/5 backdrop-blur w-full">
            <ClipboardDocumentCheckIcon className="w-8 h-8 text-gray-300" />
            <p className="text-lg">Manual Exam & Academic Management</p>
          </div>
          {/* Conclusion Text - Centered with full width */}
          <div className="flex items-center justify-center w-full mt-8">
            <p className="text-center text-gray-300">Ed-INAI addresses these challenges through intelligent automation and AI-driven learning.</p>
          </div>

        </div>
      </div>
    </section>
  );
}