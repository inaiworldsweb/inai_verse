import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, index, isOpen, onToggle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="w-full mb-5"
        >
            <div
                onClick={onToggle}
                /* Applied the exact gradient and border styles you requested */
                className={`w-full bg-gradient-to-r from-[#0b0b0b] to-[#111827] 
                border border-gray-700/50 rounded-xl transition-all duration-300 
                ease-out cursor-pointer overflow-hidden 
                ${isOpen ? 'border-gray-500' : 'hover:border-gray-600'}`}
            >
                <div className="p-5 flex items-center justify-between relative z-10">
                    <h3 className="text-[14px] md:text-[18px] font-medium tracking-wide text-white ">
                        {question}
                    </h3>

                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-white text-2xl font-light flex-shrink-0"
                    >
                        {/* Using a simple + that rotates to x, which is a common modern FAQ pattern */}
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
                            <div className="border-t border-gray-700/30 p-5">
                                <p className="text-[#ccc] text-[14px] md:text-[18px] leading-relaxed">
                                    {answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const MiraaiFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What services does Miraai provide?",
            answer: "Miraai offers end-to-end creative production including high-end marketing videos, brand photography, social media content, and digital ads—all powered by advanced AI and polished by expert creators."
        },
        {
            question: "Do I need any technical knowledge to work with Miraai?",
            answer: "Not at all. We handle everything from concept to final delivery. You just share your brand needs, and we provide professional-grade visual assets ready for use."
        },
        {
            question: "How long does it take to deliver a project?",
            answer: "Most projects are delivered within 2-4 days, significantly faster than traditional agency timelines which usually take 2-4 months."
        },
        {
            question: "Can I request changes after delivery?",
            answer: "Yes, we offer iterative refinements to ensure the content perfectly matches your vision and brand requirements."
        },
        {
            question: "Is my data and project information secure?",
            answer: "Absolutely. We treat all client data and project details with enterprise-level security and strict confidentiality protocols throughout the production process."
        }
    ];

    return (
        <section style={{ fontFamily: 'Inter, sans-serif' }} className="py-10 md:py-6 px-6  bg-black">
            <div className="  max-w-[1200px] mx-auto ">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="  text-[1.5625rem] md:text-[2rem] lg:text-[2.5rem] text-white font-bold tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className=" md:mb-10 text-gray-400 text-[0.875rem] md:text-[1rem] lg:text-[1.3125rem]">
                        Everything you need to know about our process and services.
                    </p>               </motion.div>

                <div className=" flex flex-col">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiraaiFAQ;