import React from "react";
import {
  Video,
  FileText,
  MessageSquare,
  BarChart3,
  Smartphone,
  BrainCircuit,
  ClipboardCheck,
} from "lucide-react";

const tools = [
  {
    icon: <Video className="w-6 h-6 text-white" />,
    desc: "Attend scheduled classes or watch recordings anytime",
    title: "Live & Recorded Lectures",
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    desc: "Get smart summaries and revision material.",
    title: "AI-Generated Notes",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    desc: "Ask questions using voice or text.",
    title: "Instant Doubt Support",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    desc: "Track performance visually.",
    title: "Progress Dashboard",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-white" />,
    desc: "Study on mobile, laptop, or tablet.",
    title: "Multi-Device Access",
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-white" />,
    desc: "Content adjusts to your learning pace.",
    title: "Adaptive Learning System",
  },
];

const SmartTools = ({ id }) => {
  return (
    <section id={id} className="w-full bg-black text-white py-9 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-5 md:mb-8">
          <h2 className="h1 mb-4 tracking-tight">
            Powerful Tools for Smarter Learning
          </h2>
          <h2 className="text-gray-400 h2 text-base md:text-lg">
            Everything students need to succeed is powered by Ed-INAI.
          </h2>
        </div>

        {/* Tools Grid (6 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-[#0e0f10] border border-white/5 p-8 rounded-[10px] flex flex-col hover:border-white/20 transition-all group"
            >
              {/* Icon at top */}
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all mb-6">
                {tool.icon}
              </div>

              {/* Text content */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Card - Smart Exam & Practice Mode */}
        <div className="w-full">
          <div className="bg-[#0e0f10] border border-white/5 p-8 rounded-[10px] flex flex-col items-center hover:border-white/20 transition-all group">
            {/* Icon at top */}
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all mb-6">
              <ClipboardCheck className="w-6 h-6 text-white" />
            </div>

            {/* Text content */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">
                Smart Exam & Practice Mode
              </h3>
              <p className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors">
                AI-powered tests, competitive mock exams, and real-time
                evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTools;
