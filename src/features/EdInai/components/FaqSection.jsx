import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "What makes edInai different from other AI education platforms?",
    answer:
      "edInai, developed by INAI Worlds, goes beyond static e-learning tools. It introduces real-time AI teachers in India that interact, explain, and respond instantly — turning classrooms into smart, conversational learning spaces powered by AI technology in education.",
  },
  {
    question: "How does edInai help schools and colleges?",
    answer:
      "edInai automates the entire academic process: lecture scheduling, performance tracking, analytics, and even Q&A sessions. Institutions save time, reduce manual work, and deliver a consistent AI education experience to every student.",
  },
  {
    question: "Can edInai teach in multiple languages?",
    answer:
      "Yes. Our AI teachers like INAI, VNAI, and AIRA are multilingual. They can explain lessons in different languages, making artificial intelligence in education accessible to schools and colleges across India.",
  },
  {
    question: "Is edInai easy to integrate with existing school systems?",
    answer:
      "Absolutely. edInai is a cloud-based platform that connects seamlessly with smart TVs, web apps, and projectors. It fits right into your existing digital setup with zero technical complications.",
  },
  {
    question: "How does edInai improve student engagement?",
    answer:
      "Through live interaction, visual learning materials, gamified quizzes, and instant voice-based Q&A, edInai makes education more fun and interactive. It transforms AI for teaching into a personalized and enjoyable experience.",
  },
  {
    question: "Is edInai suitable for all academic and professional streams?",
    answer:
      "Yes. edInai covers everything—from school-level education to professional fields like Engineering, Management, Robotics, and AI. Its adaptive AI ensures accurate and relevant content for every subject.",
  },
  {
    question: "How secure is student and institutional data on edInai?",
    answer:
      "We take privacy seriously. edInai follows data protection and AI compliance standards, ensuring encrypted access, secure cloud hosting, and complete safety for all institutional and student data.",
  },
  {
    question: "Can students learn outside of school hours?",
    answer:
      "Yes. With 24×7 availability, edInai allows students to attend live or recorded AI lectures, download notes, and clear doubts anytime—ideal for flexible, self-paced learning.",
  },
  {
    question: "How can an institution get started with edInai?",
    answer:
      "Getting started is simple. Register your institution, upload your syllabus, schedule your lectures, and let edInai's AI teachers handle the rest. Within days, your classrooms will transform into interactive AI-powered learning spaces.",
  },
];

const FaqSection = ({ id }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id={id} className="w-full py-9 md:py-12 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-7 lg:mb-12"
        >
          <h2 className="h1 mb-2 ">Frequently Asked Questions</h2>
          <h2 className=" h2 ">
            Everything you need to know about edInai and our services.
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-4 w-full"
              >
                <div
                  onClick={() => handleToggle(index)}
                  className={`w-full bg-gradient-to-r from-[#0b0b0b] to-[#111827] 
                  border border-gray-700/50 rounded-[10px] transition-all duration-300 
                  ease-out cursor-pointer overflow-hidden 
                  ${isOpen ? "border-gray-500" : "hover:border-gray-600"}`}
                >
                  <div className="md:p-5 p-3 flex items-center justify-between relative z-10">
                    <h3 className="text-[14px] md:text-[16px] font-medium tracking-wide text-white">
                      {question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-white text-2xl font-light flex-shrink-0"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="border-t border-gray-700/30 p-6">
                          <p className="text-[#ccc] text-[14px] md:text-[16px] leading-relaxed">
                            {answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
