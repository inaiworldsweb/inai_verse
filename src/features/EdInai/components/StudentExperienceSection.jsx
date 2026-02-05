import { useState } from 'react'
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
        <section className="py-16 bg-black" id="student-view">
            <div className="max-w-[800px] mx-auto text-center px-4">
                <h2 className="text-[2.5rem] font-bold mb-8 text-white">Student View – For Learners</h2>

                <div className="bg-white/[0.03] rounded-[20px] p-8" aria-live="polite">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-white">{currentSlide.title}</h3>
                    <button
                        type="button"
                        className="rounded-[15px] overflow-hidden cursor-pointer border-none bg-transparent w-full p-0"
                        onClick={handleSlideClick}
                        aria-label={`View ${currentSlide.title}`}
                    >
                        <img
                            src={currentSlide.image}
                            alt={currentSlide.title}
                            className="w-full h-auto block transition-transform duration-300 hover:scale-[1.02]"
                            loading="lazy"
                        />
                    </button>
                    <div className="flex justify-center my-6">
                        {dots.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`w-2 h-2 rounded-full mx-1 transition-colors duration-200 ${index === currentIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === currentIndex ? 'true' : 'false'}
                            />
                        ))}
                    </div>
                    <figcaption className="text-lg font-semibold text-white/90 mb-4">{currentSlide.caption}</figcaption>
                    <div className="flex items-start gap-3 text-left max-w-[600px] mx-auto text-white/70 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" aria-hidden="true" />
                        <p>{currentSlide.description}</p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <button
                        type="button"
                        className="bg-white text-black border-none py-3.5 px-8 rounded-[50px] text-sm font-semibold lowercase cursor-pointer transition-colors duration-200 hover:bg-gray-100"
                        onClick={handleLearnMore}
                    >
                        learn more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StudentExperienceSection

