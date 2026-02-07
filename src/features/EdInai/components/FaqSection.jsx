import { useState } from 'react'

const faqItems = [
    {
        question: 'What makes Ed-INAI different from other AI education platforms?',
        answer:
            'Ed-INAI, developed by INAI Worlds, goes beyond static e-learning tools. It introduces real-time AI teachers in India that interact, explain, and respond instantly — turning classrooms into smart, conversational learning spaces powered by AI technology in education.',
    },
    {
        question: 'How does Ed-INAI help schools and colleges?',
        answer:
            'Ed-INAI automates the entire academic process: lecture scheduling, performance tracking, analytics, and even Q&A sessions. Institutions save time, reduce manual work, and deliver a consistent AI education experience to every student.',
    },
    {
        question: 'Can Ed-INAI teach in multiple languages?',
        answer:
            'Yes. Our AI teachers like INAI, VNAI, and AIRA are multilingual. They can explain lessons in different languages, making artificial intelligence in education accessible to schools and colleges across India.',
    },
    {
        question: 'Is Ed-INAI easy to integrate with existing school systems?',
        answer:
            'Absolutely. Ed-INAI is a cloud-based platform that connects seamlessly with smart TVs, web apps, and projectors. It fits right into your existing digital setup with zero technical complications.',
    },
    {
        question: 'How does Ed-INAI improve student engagement?',
        answer:
            'Through live interaction, visual learning materials, gamified quizzes, and instant voice-based Q&A, Ed-INAI makes education more fun and interactive. It transforms AI for teaching into a personalized and enjoyable experience.',
    },
    {
        question: 'Is Ed-INAI suitable for all academic and professional streams?',
        answer:
            'Yes. Ed-INAI covers everything—from school-level education to professional fields like Engineering, Management, Robotics, and AI. Its adaptive AI ensures accurate and relevant content for every subject.',
    },
    {
        question: 'How secure is student and institutional data on Ed-INAI?',
        answer:
            'We take privacy seriously. Ed-INAI follows data protection and AI compliance standards, ensuring encrypted access, secure cloud hosting, and complete safety for all institutional and student data.',
    },
    {
        question: 'Can students learn outside of school hours?',
        answer:
            'Yes. With 24×7 availability, Ed-INAI allows students to attend live or recorded AI lectures, download notes, and clear doubts anytime—ideal for flexible, self-paced learning.',
    },
    {
        question: 'How can an institution get started with Ed-INAI?',
        answer:
            "Getting started is simple. Register your institution, upload your syllabus, schedule your lectures, and let Ed-INAI's AI teachers handle the rest. Within days, your classrooms will transform into interactive AI-powered learning spaces.",
    },
]

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const handleToggle = (index) => {
        setOpenIndex((current) => (current === index ? null : index))
    }

    return (
        <section className="py-10 md:py-16 bg-black" id="faq">
            <div className="max-w-narrow mx-auto px-4">
                <h3 className="text-[2rem] font-bold text-center mb-12 text-white">Frequently Asked Questions</h3>
                <div className="flex flex-col gap-4">
                    {faqItems.map(({ question, answer }, index) => {
                        const isOpen = openIndex === index
                        const contentId = `faq-panel-${index}`

                        return (
                            <div key={question} className={`bg-white/[0.03] rounded-[10px] overflow-hidden transition-colors duration-200 ${isOpen ? 'bg-white/5' : ''}`}>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-between py-5 px-6 bg-transparent border-none text-white text-left cursor-pointer text-base font-medium transition-colors duration-200 hover:text-white/80"
                                    onClick={() => handleToggle(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={contentId}
                                >
                                    <span className="flex-1 pr-4">{question}</span>
                                    <span className={`text-2xl transition-transform duration-300 text-white/60 ${isOpen ? 'rotate-90' : ''}`} aria-hidden="true">›</span>
                                </button>
                                <div id={contentId} className="overflow-hidden" hidden={!isOpen}>
                                    <p className="px-6 pb-5 text-white/70 leading-relaxed text-[0.9375rem]">{answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FaqSection

