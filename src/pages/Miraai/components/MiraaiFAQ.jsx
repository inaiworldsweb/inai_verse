import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="mb-4 w-full"
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-[#0A0A0A] border rounded-[2rem] transition-all duration-300 group cursor-pointer overflow-hidden ${isOpen ? 'border-violet-500/50' : 'border-white/5'
                    } hover:border-violet-500/30`}
            >
                {/* Glossy Brand Sweep */}
                <motion.div
                    style={{
                        left: useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]),
                        top: useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]),
                    }}
                    className="absolute inset-0 pointer-events-none bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="p-8 md:p-10 flex items-center justify-between relative z-10">
                    <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-violet-400' : 'text-white/90 group-hover:text-white'
                        }`}>
                        {question}
                    </h3>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-300 ${isOpen ? 'bg-violet-500/10 border-violet-500/50 text-violet-400' : 'bg-white/5 border-white/10 text-white/40'
                            }`}
                    >
                        <FiChevronDown size={20} />
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
                            <div className="px-8 pb-10 md:px-10 md:pb-12 border-t border-white/5 pt-6">
                                <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
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
        <section className="py-24 bg-black">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiraaiFAQ;
