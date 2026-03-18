import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, index, isOpen, onToggle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mb-4 w-full"
        >
            <div
                onClick={onToggle}
                className={`w-full bg-gradient-to-r from-[#0b0b0b] to-[#111827] 
                border border-gray-700/50 rounded-[10px] transition-all duration-300 
                ease-out cursor-pointer overflow-hidden 
                ${isOpen ? 'border-gray-500' : 'hover:border-gray-600'}`}
            >
                <div className="p-4 flex items-center justify-between relative z-10">
                    <h3 className="text-[14px] md:text-[18px] font-medium tracking-wide text-white ">
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
                            <div className="border-t border-gray-700/30 p-4">
                                <p className="text-[#ccc] text-[14px] md:text-[18px]  leading-relaxed">
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

const EdInaiAdminFAQ = ({ id }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is the Ed-IN AI Admin Portal?",
            answer: "The Ed-INAI Admin Portal is a centralized dashboard that allows institutions to manage curriculum, AI lectures, students, staff, exams, and performance analytics from one intelligent platform."
        },
        {
            question: "Does Ed-INAI require technical expertise to manage?",
            answer: "No. Ed-INAI is designed for non-technical administrators. The interface is intuitive, role-based, and easy to operate, allowing institutions to manage academics without needing IT expertise."
        },
        {
            question: "Can administrators generate question papers automatically?",
            answer: "Yes. Ed-INAI includes an AI-powered Question Paper Generator that creates structured exams based on selected topics, difficulty levels, and question formats. It also provides an automatic answer key and PDF export option."
        },
        {
            question: "Does Ed-INAI support exam scheduling and management?",
            answer: "Yes. Administrators can schedule exams by setting date, time, duration, and target class. The system automatically calculates duration and activates exams securely for students."
        },
        {
            question: "Can we conduct competitive exam mock tests (NEET, JEE, UPSC, etc.)?",
            answer: "Yes. Ed-INAI supports category-based exam creation for competitive exams such as NEET, JEE, UPSC, SSC, Banking, CBSE, and State Boards."
        },
        {
            question: "How does Ed-INAI reduce administrative workload?",
            answer: "Ed-INAI automates lecture scheduling, notifications, exam generation, answer evaluation, performance tracking, and reporting — significantly reducing manual effort for faculty and administrators."
        },
        {
            question: "Can multiple roles and permissions be assigned in the Admin Portal?",
            answer: "Yes. Institutions can define roles such as Owner, Principal, Academic Head, Faculty, and Coordinator, with customized access rights for secure governance."
        },
        {
            question: "Does the platform provide analytics and performance reports?",
            answer: "Yes. The Admin Dashboard provides real-time insights into attendance, engagement levels, exam performance, topic completion rates, and student improvement trends."
        },
        {
            question: "How secure is institutional and student data on Ed-INAI?",
            answer: "Ed-INAI follows secure data handling practices, role-based access control, and controlled permissions to ensure that institutional and student data remains protected and confidential."
        },
        {
            question: "Does Ed-INAI support multi-language exam creation?",
            answer: "Yes. Administrators can generate exams in multiple languages such as English, Hindi, and Gujarati, making it suitable for diverse educational boards."
        },
        {
            question: "Is the platform secure for institutional data and examinations?",
            answer: "Yes. Ed-INAI follows secure access controls, role-based permissions, encrypted data handling, and controlled exam activation to ensure academic integrity and data protection."
        }
    ];

    return (
        <section id={id} className="py-9 md:py-12 px-4 md:px-6 bg-black">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="h1 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="h2 max-w-4xl mx-auto">
                        Everything you need to know about the Ed-INAI Admin Portal and its capabilities.
                    </p>
                </motion.div>

                <div className="flex flex-col max-w-6xl mx-auto">
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

export default EdInaiAdminFAQ;
