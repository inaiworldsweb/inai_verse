import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
                className="w-full bg-[#0A0A0A] rounded-[1.25rem] transition-all duration-300 group cursor-pointer overflow-hidden"
            >
                <div className="p-4 md:p-6 flex items-center justify-between relative z-10">
                    <h3 className="text-[15px] md:text-[20px] tracking-tight text-white">
                        {question}
                    </h3>

                    <motion.div
                        initial={false}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-white text-2xl font-light"
                    >
                        {isOpen ? "−" : "+"}
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
                            <div className="px-4 pb-6 md:px-6 md:pb-8 pt-4">
                                <p className="text-white/70 text-[12px] leading-relaxed">
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
        <section style={{ fontFamily: 'Inter, sans-serif' }} className="py-10 md:py-14  bg-black">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-[25px] md:text-[40px] text-white font-bold tracking-tight">
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