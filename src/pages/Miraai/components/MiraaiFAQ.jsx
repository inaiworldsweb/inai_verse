import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQItem = ({ question, answer, index, isOpen, onToggle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-2 w-full"
        >
            <div
                onClick={onToggle}
                className={`w-full bg-[#0A0A0A] border rounded-[1.25rem] transition-all duration-300 group cursor-pointer overflow-hidden ${isOpen ? 'border-white/30' : 'border-white/10'}`}
            >
                <div className="p-4 md:p-6 flex items-center justify-between relative z-10">
                    <h3 className="text-lg md:text-xl tracking-tight text-white">
                        {question}
                    </h3>
                    <motion.div
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center text-white"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
                            <div className="px-4 pb-6 md:px-6 md:pb-8 border-t border-white/10 pt-4">
                                <p className="text-white text-[15px] leading-relaxed">
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
        <section style={{ fontFamily: 'Inter, sans-serif' }} className="py-8 bg-black">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-[25px] md:text-[40px] text-white tracking-tight">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="flex flex-col items-center">
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
