import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import SideMenu from '../../components/SideMenu'
import MeetOurFaculties from './components/MeetOurFaculties'
import EducationPortalSection from './components/EducationPortalSection'
import StudentExperienceSection from './components/StudentExperienceSection'
import LearningModesSection from './components/LearningModesSection'
import StreamsSection from './components/StreamsSection'
import VisionSection from './components/VisionSection'
import AdaptSection from './components/AdaptSection'
import IntegrationOptionsSection from './components/IntegrationOptionsSection'
import teachImage from '../../assets/images/teach-the.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import FaqSection from './components/FaqSection'
import AutomationSection from './components/AutomationSection'
import ModernLearningSection from './components/ModernLearningSection'
import SiteFooter from '../../components/SiteFooter'
import logoImage from '../../assets/Inai Verse White Tred mark (1).png'
import heroImage from '../../assets/crop_TransformTeaching  Learning with EdInai.png'
import { HiMenu, HiX } from 'react-icons/hi'
import aiTeachersImg from '../../assets/final/2. AI Teachers that Never Tire.png';
import ready247Img from '../../assets/final/247 Ready to teach.png';
import smartAutoImg from '../../assets/final/Smart Automation for Institutions.png';
import futureReadyImg from '../../assets/final/Future-Ready Education.jfif';
import personalizedImg from '../../assets/final/Personalized Learning.png';
import dataDrivenImg from '../../assets/final/Data-Driven Insights.png';
import edinaiHeaderLogo from '../../assets/EdInai Logo.png'

import { Link } from 'react-router-dom'
import { useZoomReveal } from '../../hooks/useZoomReveal'
import EdnaiSection2 from './components/EdnaiSection2'

const navItems = [
    'What is edinai?',
    'Meet our faculties',
    'Admin View  For Education Centres',
    'Student View  For Learners',
    'Teach in Every Way Your Students Want to Learn',
    'Learning Modes',
    'Why Ed-INAI Is the Future',
    'Smart Automation',
    'Modern Learning',
    'Our Vision',
    'Integration Options',
    'Streams We Cover',
    'Adapt and Evolve',
    'FAQ',
]

const futureHighlights = [
    {
        title: 'AI Teachers that Never Tire',
        description:
            'INAI, VANI, and ARIA deliver consistent, intelligent lectures with human-like interaction and clarity.',
        image: aiTeachersImg,
    },
    {
        title: '24/7 Ready to teach ',
        description:
            'Students can learn anytime through on-demand sessions, AI-generated study materials, and instant question support—beyond classroom hours.',
        image: ready247Img,
    },
    {
        title: 'Smart Automation for Institutions',
        description:
            'ED-INAI automates scheduling, academic tracking, and performance monitoring significantly reducing manual workload for schools and colleges.',
        image: smartAutoImg,
    },
    {
        title: 'Future-Ready Education',
        description:
            'Keeps curricula aligned with industry trends through continuous AI updates and localized content.',
        image: futureReadyImg,
    },
    {
        title: 'Personalized Learning',
        description:
            'Adapts to every student\'s pace with real-time feedback, smart analytics, and multilingual delivery.',
        image: personalizedImg,
    },
    {
        title: 'Data-Driven Insights',
        description:
            'Provides educators with dashboards that highlight learning gaps, attendance, and engagement in seconds.',
        image: dataDrivenImg,
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
            'Our virtual AI models INAI, VNAI, and AIRA bring intelligence, clarity, and engagement to every classroom,',
            'making AI education in India more accessible, interactive, and effective.'
        ],
        variant: 'text-first',
        centerText: true,
    },
    {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
        alt: 'AI assistant collaborating with a professional on a transparent interface',
        textLines: [
            'Our virtual AI mentors INAI, VNAI, and AIRA bring',
            'storytelling, design, and engineering to life delivering',
            'immersive, AI-driven lessons tailored for Indian classrooms,inclusive and',
            ' effective.',
        ],
        centerText: true,
    },
]

const EdInaiPage = () => {
    const navigate = useNavigate()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    // Scroll-based horizontal animation setup
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Logic: 
    // Mobile (innerWidth < 768) par "-82%" move hoga taaki 6th card center aaye.
    // Desktop par "-65%" move hoga taaki 5th aur 6th card screen par rahein aur exit ho jaye.
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", typeof window !== 'undefined' && window.innerWidth < 768 ? "-82%" : "-64%"]
    );
    //-------------------------------------------------------------------------------------

    useZoomReveal({
        selector: '#what-is-edinai img[data-zoom-reveal]',
        threshold: 0.2,
        stagger: 120,
        duration: 700,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        once: false,
    })

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
            'Smart Automation': 'automation',
            'Modern Learning': 'modern-learning',
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
                                <Link to="/">
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
                    <Link to="/">
                        <img src={logoImage} alt="INAI Verse logo" className="w-full max-w-[100px] h-auto" />
                    </Link>
                </div>
                <SideMenu items={navItems} variant="login" onSelectItem={handleSideMenuClick} />
            </aside>

            {/* Main Content - Full width on mobile */}
            <main className="flex-1 w-full min-w-0 bg-black">
                <PageHeader
                    title=""
                    breadcrumbs={[]}
                    showBackButton={true}
                    showLogo={true}
                    logoSrc={edinaiHeaderLogo}
                    logoAlt="EdInai logo"
                    showTitleText={false}
                    logoClassName="h-[26px] md:h-[32px] w-auto max-w-[140px] object-contain"
                    titleWrapperClassName="flex items-center"
                    showPriceButton={true}
                    showHomeButton={true}
                    showMenuButton={true}
                    onBackClick={handleBack}
                    onPriceClick={handleGoToPrice}
                />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Hero Section - Responsive */}
                    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-8 md:py-0">
                        {/* Hero Title and CTA - Centered */}
                        <div className="text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold leading-tight mb-2 md:mb-4 capitalize tracking-tight">
                                India's First<br /> Virtual AI Teacher Platform
                            </h2>
                            <h3 className="text-center text-xs sm:text-sm md:text-base text-white/80 mb-3 md:mb-6 capitalize tracking-normal">
                                Teach smarter with AI-powered virtual teachers trained on your syllabus
                            </h3>
                            <button
                                type="button"
                                className="
                                group
                                w-full sm:w-auto
                                bg-white text-black border-none 
                                py-3 px-6 sm:px-8 rounded-full 
                                text-sm font-semibold cursor-pointer 
                                inline-flex items-center justify-center gap-2 
                                transition-transform duration-200
                            "
                            // onClick={() => navigate('/edinai-detail')}
                            >
                                <span className="relative inline-block overflow-hidden align-top font-['Inter']">
                                    <span className="invisible">Get Started</span>
                                    <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                                        Get Started
                                    </span>
                                    <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                                        Get Started
                                    </span>
                                </span>
                                <span aria-hidden="true">›</span>
                            </button>
                        </div>

                        {/* Two Column Layout - Heading Left, Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mt-8 md:mt-12 mb-10 md:mb-16 max-w-[1200px] mx-auto">
                            {/* Left Column - Heading */}
                            <div className="text-center lg:text-center order-2 lg:order-1">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[3rem] font-bold leading-tight capitalize tracking-tight">
                                    Transform <br />Teaching & Learning with EdInai

                                </h3>
                            </div>

                            {/* Right Column - Hero Image */}
                            <div className="rounded-xl md:rounded-[20px] overflow-hidden order-1 lg:order-2 w-[85%] sm:w-[80%] lg:w-[90%] mx-auto">
                                <img
                                    src={heroImage}
                                    alt="AI-powered education experience"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Description - Centered */}
                        <p className="max-w-[930px] mx-auto text-sm sm:text-base leading-relaxed text-white/80 text-center px-2 capitalize tracking-normal">
                            Ed-INAI is an advanced AI-powered education platform where virtual AI teachers conduct live,
                            interactive lectures for schools and colleges across India. Experience the next generation of AI
                            education built for the classrooms of the future.
                        </p>
                    </section>


                    <section>
                        <EdnaiSection2 />

                    </section>




                    <MeetOurFaculties />

                    <EducationPortalSection />
                    <StudentExperienceSection onLearnMore={handleGoToLearnMore} />

                    {/* Teach Section - Responsive */}
                    <section className="py-8 md:py-16" id="teach-in-every-way-your-students-want-to-learn">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="rounded-xl md:rounded-[20px] overflow-hidden order-1 border border-white/5"
                            >
                                <motion.img
                                    src={teachImage}
                                    alt="Educator using AI tools to customise lessons"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-auto block"
                                    loading="lazy"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="order-2 text-center md:text-left"
                            >
                                <h2 className="text-xl sm:text-2xl md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight text-white mb-6 capitalize tracking-tight">
                                    Teach the Way Every <br />Student Learns Best
                                </h2>
                                {/* <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-[500px] mx-auto md:mx-0">
                                    ED-INAI empowers institutions with a personalized, AI-driven teaching assistant that adapts to individual student needs and institutional goals.
                                </p> */}
                            </motion.div>
                        </div>
                    </section>

                    <LearningModesSection />

                    {/* --- HORIZONTAL SCROLL SECTION START --- */}
                    {/* --- FINAL PERFECT HORIZONTAL SCROLL SECTION --- */}
                    <section ref={targetRef} className="relative h-[300vh] bg-black">
                        {/* Sticky Wrapper */}
                        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                            {/* Fixed Top Heading */}
                            <div className="w-full py-8 md:py-12 bg-black z-20">
                                <motion.h2
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="text-2xl md:text-[3rem] font-bold text-center text-white tracking-tight px-4"
                                >
                                    Why <span className="text-blue-500">EdINAI</span> is the Future
                                </motion.h2>
                                <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full opacity-50" />
                            </div>

                            {/* Horizontal Cards Container */}
                            <div className="flex-1 flex items-center relative">
                                <motion.div
                                    style={{ x }}
                                    className="flex gap-6 md:gap-8 px-6 md:px-20 items-center"
                                >
                                    {futureHighlights.map(({ title, description, image }, index) => (
                                        <article
                                            key={index}
                                            className="group relative h-[400px] w-[85vw] md:h-[480px] md:w-[350px] flex-shrink-0 bg-[#0A0A0A] rounded-[30px] p-5 md:p-6 border border-white/10 shadow-2xl transition-all duration-500 hover:border-blue-500/30"
                                        >
                                            {/* Image Area */}
                                            <div className="relative h-[50%] md:h-[55%] w-full rounded-[20px] overflow-hidden mb-5 bg-[#111]">
                                                {index === 0 && (
                                                    <img
                                                        src={image}
                                                        alt=""
                                                        className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30"
                                                    />
                                                )}
                                                <img
                                                    src={image}
                                                    alt={title}
                                                    className={`relative z-10 w-full h-full transition-transform duration-700 group-hover:scale-110 ${index === 0 ? 'object-contain' : 'object-cover'
                                                        }`}
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70 z-20" />
                                                <div className="absolute top-3 left-3 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-3 py-1 rounded-full text-[10px] text-blue-400 font-bold uppercase tracking-widest z-30">
                                                    0{index + 1}
                                                </div>
                                            </div>

                                            {/* Content Area */}
                                            <div className="space-y-3 relative z-10">
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                                    {title}
                                                </h3>
                                                <p className="text-sm text-white/40 font-light leading-relaxed line-clamp-4">
                                                    {description}
                                                </p>
                                            </div>

                                            {/* Glow on Hover */}
                                            <div className="absolute -inset-1 bg-blue-600/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10" />
                                        </article>
                                    ))}

                                    {/* Minimal spacer for the final card finish */}
                                    <div className="w-[2vw] md:w-[5vw] flex-shrink-0" />
                                </motion.div>
                            </div>

                            {/* Indicator */}
                            <div className="w-full py-6 opacity-20 text-center">
                                <p className="text-white text-[10px] tracking-[0.3em] uppercase">Scroll to Explore</p>
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
                </div>
            </main>
        </div>
    )
}

export default EdInaiPage
