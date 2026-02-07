import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import uploadCurriculumImg from '../../../assets/final/Upload & Organize Curriculum.png'
import scheduleLecturesImg from '../../../assets/final/Schedule AI-Assisted Lectures.png'
import manageStaffImg from '../../../assets/final/Manage Students, Faculty, and Staff.png'
import assignRolesImg from '../../../assets/final/Assign Roles & Permissions.png'
import accessAnalyticsImg from '../../../assets/final/Access Analytics & Performance Reports.png'
import learnAnytimeImg from '../../../assets/final/Learn Anytime, Anywhere (1).jpg'

const slides = [
    {
        id: 'upload-curriculum',
        title: 'Admin View – For Education Centres',
        image: uploadCurriculumImg,
        caption: 'Upload & Organize Curriculum',
        description:
            'Upload syllabi and academic content into a structured, AI-organized framework aligned with learning objectives.',
    },
    {
        id: 'schedule-lectures',
        title: 'Admin View – For Education Centres',
        image: scheduleLecturesImg,
        caption: 'Schedule AI-Assisted Lectures',
        description:
            'Plan and manage lectures efficiently using AI-assisted scheduling for consistent academic delivery.',
    },
    {
        id: 'manage-staff',
        title: 'Admin View – For Education Centres',
        image: manageStaffImg,
        caption: 'Manage Students, Faculty, and Staff',
        description:
            'Centralize student records, faculty profiles, and staff management within a single administrative dashboard.',
    },
    {
        id: 'assign-roles',
        title: 'Admin View – For Education Centres',
        image: assignRolesImg,
        caption: 'Assign Roles & Permissions',
        description:
            'Define role-based access controls to ensure secure and organized institutional operations.',
    },
    {
        id: 'access-analytics',
        title: 'Admin View – For Education Centres',
        image: accessAnalyticsImg,
        caption: 'Access Analytics & Performance Reports',
        description:
            'Monitor academic performance, attendance, and engagement through real-time analytical reports.',
    },
    {
        id: 'learn-anytime',
        title: 'Student View – For Learners',
        image: learnAnytimeImg,
        caption: 'Learn Anytime, Anywhere',
        description:
            'Access learning resources across devices with flexible, uninterrupted study options.',
    },
]

const EducationPortalSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const navigate = useNavigate()

    // Autoscroll logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }, 2000)

        return () => clearInterval(timer)
    }, [])

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
        <section className="py-10 md:py-16" id="admin-view">
            <div className="max-w-[1200px] mx-auto px-4">
                <header className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold mb-4 text-white leading-tight">Inside the Ed-INAI AI Education Platform</h2>
                    <p className="text-base sm:text-lg text-white/70 max-w-[700px] mx-auto">
                        Administration to Learning, ED-INAI Automates, Optimizes, and Personalizes the Entire Education Journey
                    </p>
                </header>

                <div className="bg-white/[0.03] rounded-[20px] p-4 md:p-10 border border-white/5" aria-live="polite">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center text-white px-4 leading-snug">{currentSlide.title}</h3>
                    <button
                        type="button"
                        className="rounded-[15px] overflow-hidden cursor-pointer border-none bg-transparent w-full p-0"
                        onClick={handleSlideClick}
                        aria-label={`View ${currentSlide.title}`}
                    >
                        <img src={currentSlide.image} alt={currentSlide.title} className="w-full aspect-video object-cover block transition-transform duration-300 hover:scale-[1.02]" loading="lazy" />
                    </button>
                    <div className="flex justify-center my-6">
                        <div className="flex gap-2" role="tablist" aria-label="Portal views">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    type="button"
                                    className={`h-2 border-none cursor-pointer p-0 transition-all duration-200 ${index === currentIndex ? 'bg-white w-[24px] sm:w-[30px] rounded-[5px]' : 'w-2 rounded-full bg-white/30'}`}
                                    aria-label={`Show ${slide.title}`}
                                    aria-selected={index === currentIndex}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <p className="text-lg sm:text-xl font-semibold text-center my-4 text-white">{currentSlide.caption}</p>
                    <p className="text-sm sm:text-base text-center text-white/70 leading-relaxed">{currentSlide.description}</p>
                </div>
            </div>
        </section>
    )
}

export default EducationPortalSection

