import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import SideMenu from '../../components/SideMenu'
import SiteFooter from '../../components/SiteFooter'
import MeetOurFaculties from './components/MeetOurFaculties'
import EducationPortalSection from './components/EducationPortalSection'
import StudentExperienceSection from './components/StudentExperienceSection'
import teachImage from '../../assets/Vinai.webp'
import featureCardImage from '../../assets/inai.webp'
import LearningModesSection from './components/LearningModesSection'
import StreamsSection from './components/StreamsSection'
import VisionSection from './components/VisionSection'
import AdaptSection from './components/AdaptSection'
import IntegrationOptionsSection from './components/IntegrationOptionsSection'
import FaqSection from './components/FaqSection'
import AutomationSection from './components/AutomationSection'
import ModernLearningSection from './components/ModernLearningSection'
import logoImage from '../../assets/Inai Verse White Tred mark (1).png'
import heroImage from '../../Assetsa/a.png'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const navItems = [
    'What is edinai?',
    'Meet our faculties',
    'Admin View  For Education Centres',
    'Student View  For Learners',
    'Teach in Every Way Your Students Want to Learn',
    'Learning Modes',
    'Why Ed-INAI Is the Future',
    'Streams We Cover',
    'Our Vision',
    'Adapt and Evolve',
    'Integration Options',
    'FAQ',
]

const futureHighlights = [
    {
        title: 'AI Teachers that Never Tire',
        description:
            'INAI, VANI, and ARIA deliver consistent, intelligent lectures with human-like interaction and clarity.',
    },
    {
        title: '24/7 Ready to teach ',
        description:
            'Students can learn anytime through on-demand sessions, AI-generated study materials, and instant question support—beyond classroom hours.',
    },
    {
        title: 'Smart Automation for Institutions',
        description:
            'ED-INAI automates scheduling, academic tracking, and performance monitoring significantly reducing manual workload for schools and colleges.',
    },
    {
        title: 'Future-Ready Education',
        description:
            'Keeps curricula aligned with industry trends through continuous AI updates and localized content.',
    },
    {
        title: 'Personalized Learning',
        description:
            'Adapts to every student\'s pace with real-time feedback, smart analytics, and multilingual delivery.',
    },
    {
        title: 'Data-Driven Insights',
        description:
            'Provides educators with dashboards that highlight learning gaps, attendance, and engagement in seconds.',
    },
]

const overviewItems = [
    {
        image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
        alt: 'Virtual instructor delivering a lesson on a large screen',
        textLines: [
            'Ed-INAI is an AI-powered education platform',
            'where virtual AI teaching models conduct live and ',
            'live and interactive lectures through smart interfaces.'
        ],
        centerText: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=80',
        alt: 'Students experiencing immersive simulations in a futuristic setting',
        textLines: [
            'Our virtual AI mentors "Inai, Aira, and VNAI" combine storytelling,',
            'design thinking, and engineering intelligence to deliver',
            'immersive, AI-driven lessons tailored for Indian classrooms,',
            'ensuring inclusive, engaging, and effective learning.'
        ],
        variant: 'text-first',
        centerText: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
        alt: 'AI assistant collaborating with a professional on a transparent interface',
        textLines: [
            'Our virtual AI mentors Inai, Aira, and VNAI bring',
            'storytelling, design, and engineering to life—delivering',
            'immersive, AI-driven lessons tailored for Indian classrooms,inclusive and',
            ' effective.',
        ],
        centerText: true,
    },
]

const EdInaiPage = () => {
    const navigate = useNavigate()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleBreadcrumbClick = (target) => {
        if (target === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        if (target === 'price') {
            const priceSection = document.getElementById('pricing')
            if (priceSection) {
                priceSection.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    const handleSideMenuClick = (item) => {
        const sectionMap = {
            'What is edinai?': 'what-is-edinai',
            'Meet our faculties': 'meet-our-faculties',
            'Admin View  For Education Centres': 'admin-view',
            'Student View  For Learners': 'student-view',
            'Teach in Every Way Your Students Want to Learn': 'teach-in-every-way-your-students-want-to-learn',
            'Learning Modes': 'learning-modes',
            'Why Ed-INAI Is the Future': 'why-ed-inai',
            'Streams We Cover': 'streams',
            'Our Vision': 'vision',
            'Adapt and Evolve': 'adapt',
            'Integration Options': 'integration-options',
            'FAQ': 'faq',
        }

        const sectionId = sectionMap[item]
        if (sectionId) {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
        // Close mobile menu after selection
        setIsMobileMenuOpen(false)
    }

    const handleBack = () => {
        navigate(-1)
    }

    const handleGoToPrice = () => {
        navigate('/pricing')
    }

    const handleGoToLearnMore = () => {
        const learnMoreSection = document.getElementById('vision')
        if (learnMoreSection) {
            learnMoreSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="flex min-h-screen bg-black text-white">
            {/* Mobile Menu Button - Fixed position */}
            <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="
                    lg:hidden fixed top-4 left-4 z-50
                    p-2.5 bg-[#111] border border-white/10 
                    rounded-xl text-white
                    hover:bg-white/10 transition-colors
                    shadow-lg
                "
                aria-label="Open navigation menu"
            >
                <HiMenu className="w-5 h-5" />
            </button>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <aside
                        className="
                            w-[280px] max-w-[85vw] h-full bg-[#111] 
                            border-r border-white/10 shadow-2xl
                            overflow-y-auto
                            animate-in slide-in-from-left duration-300
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="
                                absolute top-4 right-4 p-2 
                                text-white/70 hover:text-white 
                                hover:bg-white/10 rounded-lg
                                transition-colors
                            "
                            aria-label="Close navigation menu"
                        >
                            <HiX className="w-5 h-5" />
                        </button>

                        {/* Mobile Sidebar Content */}
                        <div className="pt-16 px-4">
                            <div className="flex items-center justify-center mb-6">
                                <Link to="/edinai">
                                    <img src={logoImage} alt="INAI Verse logo" className="w-full max-w-[80px] h-auto" />
                                </Link>
                            </div>
                            <SideMenu items={navItems} variant="login" onSelectItem={handleSideMenuClick} />
                        </div>
                    </aside>
                </div>
            )}

            {/* Desktop Sidebar - Hidden on mobile */}
            <aside className="hidden lg:flex lg:flex-col w-[280px] bg-[#111] p-6 xl:p-8 sticky top-0 h-screen overflow-y-auto border-r border-white/10">
                <div className="flex items-center justify-center mb-4">
                    <img src={logoImage} alt="INAI Verse logo" className="w-full max-w-[100px] h-auto" />
                </div>
                <SideMenu items={navItems} variant="login" onSelectItem={handleSideMenuClick} />
            </aside>

            {/* Main Content - Full width on mobile */}
            <main className="flex-1 w-full min-w-0 overflow-y-auto px-4 sm:px-6 lg:px-8">
                <PageHeader
                    title="Edinai"
                    breadcrumbs={[]}
                    showBackButton={false}
                    showPriceButton={true}
                    showHomeButton={true}
                    showMenuButton={true}
                    onPriceClick={handleGoToPrice}
                />

                {/* Hero Section - Responsive */}
                <section className="py-10 md:py-16">
                    {/* Hero Title and CTA - Centered */}
                    <div className="text-center mb-12 md:mb-20">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold leading-tight mb-6 md:mb-8">
                            India's First<br /> Virtual AI Teacher Platform
                        </h2>
                        <h3 className="text-center text-xs sm:text-sm md:text-base text-white/80 mb-6 md:mb-8">
                            Teach smarter with AI-powered virtual teachers trained on your syllabus
                        </h3>
                        <button
                            type="button"
                            className="
                                w-full sm:w-auto
                                bg-white text-black border-none 
                                py-3 px-6 sm:px-8 rounded-full 
                                text-sm font-semibold cursor-pointer 
                                inline-flex items-center justify-center gap-2 
                                transition-transform duration-200 hover:scale-105
                            "
                        // onClick={() => navigate('/edinai-detail')}
                        >
                            <span>get started</span>
                            <span aria-hidden="true">›</span>
                        </button>
                    </div>

                    {/* Two Column Layout - Heading Left, Image Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-16 max-w-[1200px] mx-auto">
                        {/* Left Column - Heading */}
                        <div className="text-center lg:text-center rder-2 lg:order-1">
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] font-bold leading-tight">
                                Transform <br/>Teaching & Learning with ED-INAI 
                             
                            </h3>
                        </div>

                        {/* Right Column - Hero Image */}
                        <div className="rounded-xl md:rounded-[20px] overflow-hidden order-1 lg:order-2">
                            <img
                                src={heroImage}
                                alt="AI-powered education experience"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Description - Centered */}
                    <p className="max-w-[900px] mx-auto text-sm sm:text-base leading-relaxed text-white/80 text-center px-2">
                        Ed-INAI is an advanced AI-powered education platform where virtual AI teachers conduct live,
                        interactive lectures for schools and colleges across India. Experience the next generation of AI
                        education built for the classrooms of the future.
                    </p>
                </section>

                {/* What is Ed-INAI Section - Responsive */}
                <section className="py-10 md:py-16" id="what-is-edinai">
                    <h2 className="text-xl sm:text-2xl md:text-[2.5rem] font-bold text-center mb-8 md:mb-12">
                        What is Ed-INAI?
                    </h2>
                    <div className="flex flex-col gap-8 md:gap-12">
                        {overviewItems.map(({ image, alt, text, textLines, variant, centerText }, index) => {
                            const descriptionContent = textLines
                                ? textLines.map((line, lineIndex) => (
                                    <span key={`${index}-${lineIndex}`} className="block">
                                        {line}
                                    </span>
                                ))
                                : text

                            const description = (
                                <p className={`text-sm sm:text-base md:text-lg leading-relaxed text-white/80 ${centerText ? 'text-center md:text-left' : ''}`}>
                                    {descriptionContent}
                                </p>
                            )

                            const imageElement = (
                                <div className="rounded-xl md:rounded-[20px] overflow-hidden">
                                    <img src={image} alt={alt} loading="lazy" className="w-full h-auto block" />
                                </div>
                            )

                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
                                >
                                    {variant === 'text-first' ? (
                                        <>
                                            <div className="order-2 md:order-1">{description}</div>
                                            <div className="order-1 md:order-2">{imageElement}</div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="order-1">{imageElement}</div>
                                            <div className="order-2">{description}</div>
                                        </>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </section>

                <MeetOurFaculties />

                <EducationPortalSection />
                <StudentExperienceSection onLearnMore={handleGoToLearnMore} />

                {/* Teach Section - Responsive */}
                <section className="py-10 md:py-16" id="teach-in-every-way-your-students-want-to-learn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div className="rounded-xl md:rounded-[20px] overflow-hidden order-1">
                            <img
                                src={teachImage}
                                alt="Educator using AI tools to customise lessons"
                                className="w-full h-auto block"
                                loading="lazy"
                            />
                        </div>
                        <div className="order-2 text-center md:text-left">
                            <h2 className="text-xl sm:text-2xl md:text-[2.5rem] font-bold leading-tight">
                                Teach the Way Every <br />Student Learns Best
                            </h2>
                        </div>
                    </div>
                </section>

                <LearningModesSection />

                {/* Why Ed-INAI Is the Future Section - Responsive Grid */}
                <section className="py-10 md:py-16" id="why-ed-inai">
                    <div className="max-w-content mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-[2.5rem] font-bold text-center mb-8 md:mb-12 px-2">
                            Why EdINAI is the future of Indian education system 
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                            {futureHighlights.map(({ title, description }) => (
                                <article
                                    key={title}
                                    className="bg-white/5 rounded-xl md:rounded-[20px] p-4 md:p-6 transition-transform duration-200 hover:-translate-y-1.5"
                                >
                                    <div className="rounded-lg md:rounded-[15px] overflow-hidden mb-3 md:mb-4">
                                        <img
                                            src={featureCardImage}
                                            alt="AI-powered learning experience"
                                            className="w-12 h-12 md:w-min md:h-min object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1.5 md:mb-2">
                                            {title}
                                        </h3>
                                        <p className="text-sm md:text-base text-white/70 leading-relaxed">
                                            {description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <AutomationSection />
                <ModernLearningSection />
                <VisionSection />
                <IntegrationOptionsSection />
                <StreamsSection />
                <AdaptSection />
                <FaqSection />
                <SiteFooter />
            </main>
        </div>
    )
}

export default EdInaiPage
