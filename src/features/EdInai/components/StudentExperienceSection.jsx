import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import liveLecturesImg from '../../../assets/final/Attend Live & Recorded Lectures.png'
import studyNotesImg from '../../../assets/final/Access AI-Generated Study Notes.png'
import qaSupportImg from '../../../assets/final/Get Instant Q&A Support.png'
import trackProgressImg from '../../../assets/final/Smart dashboard and real time feedback.png'
import learnAnytimeImg from '../../../assets/final/Learn Anytime, Anywhere (1).jpg'

const studentSlides = [
    {
        id: 'student-view-1',
        title: 'Student View – For Learners',
        image: liveLecturesImg,
        caption: 'Attend Live & Recorded Lectures',
        description: 'Participate in live classes or revisit recorded lectures with clear explanations and structured content.',
    },
    {
        id: 'student-view-2',
        title: 'Student View – For Learners',
        image: studyNotesImg,
        caption: 'Access AI-Generated Study Notes',
        description: 'Review automatically generated study notes designed to reinforce key concepts and support revision.',
    },
    {
        id: 'student-view-3',
        title: 'Student View – For Learners',
        image: qaSupportImg,
        caption: 'Get Instant Q&A Support',
        description: 'Receive immediate, AI-powered academic assistance for questions and concept clarification.',
    },
    {
        id: 'student-view-4',
        title: 'Student View – For Learners',
        image: trackProgressImg,
        caption: 'Track Progress with Visual Dashboards',
        description: 'View learning progress, assessment results, and improvement areas through intuitive dashboards.',
    },
    {
        id: 'student-view-5',
        title: 'Student View – For Learners',
        image: learnAnytimeImg,
        caption: 'Learn Anytime, Anywhere',
        description: 'Access learning resources across devices with flexible, uninterrupted study options.',
    },
]

const StudentExperienceSection = () => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0)
    const dots = Array.from({ length: studentSlides.length })

    // Autoscroll logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % studentSlides.length)
        }, 2000)

        return () => clearInterval(timer)
    }, [])

    const handleLearnMore = () => {
        navigate('/edinai-student')
    }

    const goToSlide = (index) => {
        if (index < 0) {
            setCurrentIndex(studentSlides.length - 1)
            return
        }

        if (index >= studentSlides.length) {
            setCurrentIndex(0)
            return
        }

        setCurrentIndex(index)
    }

    const handleSlideClick = () => {
        goToSlide(currentIndex + 1)
    }

    const currentSlide = studentSlides[currentIndex]

    return (
        <section className="py-6 md:py-10" id="student-view">
            <div className="max-w-[1000px] mx-auto px-4">
                <header className="text-center mb-4 md:mb-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-white leading-tight">Student Learning Experience</h2>
                    <p className="text-sm sm:text-base text-white/70 max-w-[600px] mx-auto">
                        Empowering students with AI-powered learning tools and resources
                    </p>
                </header>

                <div className="bg-white/[0.03] rounded-lg p-3 md:p-6 border border-white/5" aria-live="polite">
                    <h3 className="text-base sm:text-lg font-semibold mb-4 text-center text-white px-2">{currentSlide.title}</h3>
                    <button
                        type="button"
                        className="rounded-[15px] overflow-hidden cursor-pointer border-none bg-transparent w-full p-0"
                        onClick={handleSlideClick}
                        aria-label={`View ${currentSlide.title}`}
                    >
                        <img
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            className="w-full aspect-video object-cover block transition-transform duration-300 hover:scale-[1.02]"
                            loading="lazy"
                        />
                    </button>
                    <div className="flex justify-center my-4">
                        <div className="flex gap-1.5" role="tablist" aria-label="Student view slides">
                            {studentSlides.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`h-1.5 border-none cursor-pointer p-0 transition-all duration-200 ${index === currentIndex ? 'bg-white w-[20px] sm:w-[24px] rounded-[3px]' : 'w-1.5 rounded-full bg-white/30'}`}
                                    aria-label={`Show slide ${index + 1}`}
                                    aria-selected={index === currentIndex}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-base sm:text-lg font-semibold text-center my-3 text-white">{currentSlide.caption}</p>
                    <p className="text-xs sm:text-sm text-center text-white/70 leading-relaxed">{currentSlide.description}</p>
                </div>

                <div className="text-center mt-6">
                    <button
                        type="button"
                        className="group bg-white text-black border-none py-2.5 px-6 rounded-[40px] text-xs font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-100"
                        // onClick={handleLearnMore}
                    >
                        <span className="relative inline-block overflow-hidden align-top">
                            <span className="invisible">Learn more</span>
                            <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full font-['Inter']">
                                Learn more
                            </span>
                            <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 font-['Inter']">
                                Learn more
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StudentExperienceSection

