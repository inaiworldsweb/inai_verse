import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import adminImage from '../../../Assetsa/d.png'
import studentImage from '../../../Assetsa/e.png'
import developerImage from '../../../Assetsa/d.png'
import mentorImage from '../../../Assetsa/e.png'

const slides = [
    {
        id: 'admin-view',
        title: 'Admin View – For Education Centres',
        image: adminImage,
        caption: 'Upload & Organize Curriculum',
        description:
            'From scheduling to tracking, everything runs seamlessly powered by automation that reduces manual work and increases teaching efficiency.',
    },
    {
        id: 'student-view',
        title: 'Student View – For Learners',
        image: studentImage,
        caption: 'Attend Live & Recorded Lectures',
        description:
            'This is AI for teaching that adapts to every learning style from visual to verbal—making lessons clear, fun, and unforgettable.',
    },
    {
        id: 'developer-view',
        title: 'Developer Studio – For Instructors',
        image: developerImage,
        caption: 'Create Immersive Lessons',
        description:
            'Teachers assemble multimedia lectures, assessments, and lab demos with drag-and-drop ease, powered by Ed-INAI\'s content studio.',
    },
    {
        id: 'mentor-view',
        title: 'Mentor Hub – For Virtual AI Guides',
        image: mentorImage,
        caption: 'Deliver AI-Led Coaching',
        description:
            'AI mentors collaborate with institutions to host live sessions, answer questions, and keep batches on track across every learning mode.',
    },
]

const EducationPortalSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()

    const goToSlide = (index) => {
        if (index < 0) {
            setCurrentIndex(slides.length - 1)
            return
        }

        if (index >= slides.length) {
            setCurrentIndex(0)
            return
        }

        setCurrentIndex(index)
    }

    const handleSlideClick = () => {
        const currentSlide = slides[currentIndex]
        if (currentSlide.id === 'admin-view') {
            navigate('/edinai-admin')
        } else if (currentSlide.id === 'student-view') {
            navigate('/edinai-student')
        } else {
            goToSlide(currentIndex + 1)
        }
    }

    const currentSlide = slides[currentIndex]

    return (
        <section className="py-16 bg-black" id="admin-view">
            <div className="max-w-medium mx-auto px-4">
                <header className="text-center">
                    <h2 className="text-[2.5rem] font-bold mb-4 text-white">Inside the Ed-INAI AI Education Portal</h2>
                    <p className="text-lg text-white/70 max-w-[700px] mx-auto">
                        From administration to learning, Ed-INAI brings automation, precision, and personalization to every level of education.
                    </p>
                </header>

                <div className="bg-white/[0.03] rounded-[20px] p-8" aria-live="polite">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-white">{currentSlide.title}</h3>
                    <button
                        type="button"
                        className="rounded-[15px] overflow-hidden cursor-pointer border-none bg-transparent w-full p-0"
                        onClick={handleSlideClick}
                        aria-label={`View ${currentSlide.title}`}
                    >
                        <img src={currentSlide.image} alt={currentSlide.title} className="w-full h-auto block transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </button>
                    <div className="flex justify-center my-6">
                        <div className="flex gap-2" role="tablist" aria-label="Portal views">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    type="button"
                                    className={`h-2.5 border-none cursor-pointer p-0 transition-all duration-200 ${index === currentIndex ? 'bg-white w-[30px] rounded-[5px]' : 'w-2.5 rounded-full bg-white/30'}`}
                                    aria-label={`Show ${slide.title}`}
                                    aria-selected={index === currentIndex}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-xl font-semibold text-center my-4 text-white">{currentSlide.caption}</p>
                    <p className="text-center text-white/70 leading-relaxed">{currentSlide.description}</p>
                </div>
            </div>
        </section>
    )
}

export default EducationPortalSection

