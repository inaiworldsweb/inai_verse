import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "How do I access the edInai student portal?",
    answer: "You can log in using the credentials provided by your institution on the official edInai platform. The portal is accessible on mobile, tablet, and desktop devices.",
  },
  {
    question: "Can I watch recorded lectures anytime?",
    answer: "Yes. All live AI lectures are automatically recorded and available for revision anytime, allowing you to learn at your own pace.",
  },
  {
    question: "Can I attempt exams and mock tests inside the student portal?",
    answer: "Yes. Students can attempt AI-generated mock tests, scheduled exams, and topic-wise practice assessments with instant results and performance analysis.",
  },
  {
    question: "How does edInai help me prepare better for exams?",
    answer: "edInai combines live lectures, recorded sessions, AI-generated notes, adaptive mock tests, and performance tracking to help you revise faster, focus on weak areas, and improve exam scores.",
  },
  {
    question: "How can I track my academic progress?",
    answer: "Your dashboard provides visual progress reports including attendance, quiz scores, completed lessons, exam performance, strengths, and improvement areas.",
  },
  {
    question: "Does edInai help reduce exam stress?",
    answer: "Yes. With structured revision tools, recorded lectures, smart practice tests, and continuous progress tracking, students can prepare confidently without last-minute pressure.",
  }
];

const FaqSection = ({ id }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id={id} className="w-full py-12 md:py-16 lg:py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="h1 mb-4">Frequently Asked Questions</h2>
          <p className="h2 text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Everything students need to know about using the edInai learning platform.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full"
              >
                <div
                  onClick={() => handleToggle(index)}
                  className={`w-full bg-gradient-to-r from-[#0b0b0b] to-[#111827] 
                  border rounded-[10px] transition-all duration-300 
                  ease-out cursor-pointer overflow-hidden 
                  ${isOpen ? "border-gray-500 shadow-[0_4px_20px_rgba(255,255,255,0.03)]" : "border-gray-800 hover:border-gray-600"}`}
                >
                  <div className="p-2 md:p-4 flex items-center justify-between relative z-10 gap-4">
                    <h3 className="text-[15px] md:text-[18px] font-medium tracking-wide text-white leading-snug">
                      {question}
                    </h3>

                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-white text-xl md:text-2xl font-light flex-shrink-0 bg-white/5 rounded-full p-2"
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
                        className="w-4 h-4 md:w-5 md:h-5"
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
                        <div className="border-t border-gray-800 px-5 pb-5 md:px-6 md:pb-6 pt-2">
                          <p className="text-[#a0a0a0] text-[14px] md:text-[16px] leading-relaxed">
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
