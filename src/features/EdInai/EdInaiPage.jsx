import { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

// Components & Assets
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
import FaqSection from './components/FaqSection'
import AutomationSection from './components/AutomationSection'
import ModernLearningSection from './components/ModernLearningSection'
import SiteFooter from '../../components/SiteFooter'

import teachImage from '../../assets/images/teach-the.png'
import logoImage from '../../assets/Inai Verse White Tred mark (1).png'
// import heroImage from '../../assets/crop_TransformTeaching Learning with EdInai.png'
import heroImage from '../../assets/TransformTeachingLearningwithEdInai.png'
import edinaiHeaderLogo from '../../assets/EdInai Logo.png'

// Future Highlight Images
import aiTeachersImg from '../../assets/final/2. AI Teachers that Never Tire.png'
import ready247Img from '../../assets/final/247 Ready to teach.png'
import smartAutoImg from '../../assets/final/Smart Automation for Institutions.png'
import futureReadyImg from '../../assets/final/Future-Ready Education.jfif'
import personalizedImg from '../../assets/final/Personalized Learning.png'
import dataDrivenImg from '../../assets/final/Data-Driven Insights.png'

gsap.registerPlugin(ScrollTrigger, useGSAP);

const navItems = [
    'What is edinai?', 'Meet our faculties', 'Admin View For Education Centres',
    'Student View For Learners', 'Teach in Every Way Your Students Want to Learn',
    'Learning Modes', 'Why Ed-INAI Is the Future', 'Smart Automation',
    'Modern Learning', 'Our Vision', 'Integration Options',
    'Streams We Cover', 'Adapt and Evolve', 'FAQ',
]

const EdInaiPage = () => {
    const navigate = useNavigate()
    const container = useRef()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // GSAP Animation Logic (From Component 2)
    useGSAP(() => {
        const imgs = gsap.utils.toArray(".arch-img-wrapper img");

        ScrollTrigger.matchMedia({
            "(min-width: 769px)": function () {
                const mainTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#what-is-edinai-trigger",
                        start: "top top",
                        end: "bottom bottom",
                        pin: ".arch-right-sticky",
                        scrub: true,
                    }
                });

                imgs.forEach((currentImage, index) => {
                    const nextImage = imgs[index + 1];
                    if (nextImage) {
                        const sectionTimeline = gsap.timeline();
                        sectionTimeline
                            .to(currentImage, {
                                clipPath: "inset(0px 0px 100% 0px)",
                                duration: 1.5,
                                ease: "none"
                            }, 0)
                            .to(nextImage, {
                                objectPosition: "0px 40%",
                                duration: 1.5,
                                ease: "none"
                            }, 0);
                        mainTimeline.add(sectionTimeline);
                    }
                });
            }
        });
    }, { scope: container });

    // Click Handlers
    const handleSideMenuClick = (item) => {
        const sectionMap = { 'What is edinai?': 'what-is-edinai-trigger', /* ... rest of your map */ };
        const sectionId = sectionMap[item];
        if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    }

    return (
        <div ref={container} className="flex min-h-screen bg-black text-white">
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden fixed top-4 left-4 z-50 p-2.5 bg-[#111] border border-white/10 rounded-xl shadow-lg">
                <HiMenu className="w-5 h-5" />
            </button>

            {/* Sidebar Logic (Desktop & Mobile) - Same as your 1st component */}
            <aside className="hidden lg:flex lg:flex-col w-[280px] bg-[#111] p-6 sticky top-0 h-screen border-r border-white/10">
                <Link to="/" className="flex justify-center mb-4">
                    <img src={logoImage} alt="Logo" className="w-full max-w-[100px]" />
                </Link>
                <SideMenu items={navItems} variant="login" onSelectItem={handleSideMenuClick} />
            </aside>

            <main className="flex-1 w-full min-w-0 bg-black">
                <PageHeader
                    showBackButton showLogo logoSrc={edinaiHeaderLogo}
                    onBackClick={() => navigate(-1)} onPriceClick={() => navigate('/pricing')}
                />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Hero Section */}
                    <section className="min-h-[90vh] flex flex-col justify-center py-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-4">India's First Virtual AI Teacher Platform</h2>
                            <button className="bg-white text-black py-3 px-8 rounded-full font-semibold hover:scale-105 transition">Get Started ›</button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <h3 className="text-2xl md:text-5xl font-bold text-center lg:text-left">Transform Teaching & Learning with EdInai</h3>
                            <img src={heroImage} alt="Hero" className="w-full rounded-2xl" />
                        </div>
                    </section>

                    {/* ANIMATED SECTION: What is EdInai? */}
                    <section id="what-is-edinai-trigger" className="relative px-4 md:px-0">
                        <h2 className="text-3xl md:text-[2.5rem] font-bold text-center py-10 md:py-16">What is EdInai?</h2>

                        {/* Desktop View: Split Layout with Sticky Images */}
                        <div className="hidden md:flex md:flex-row gap-[60px] justify-between">
                            {/* Left: Text Content */}
                            <div className="flex-1">
                                {overviewItems.map((item, idx) => (
                                    <div key={idx} className="h-screen flex items-center">
                                        <div className="max-w-[450px]">
                                            <p className="text-white/80 text-[25px] leading-relaxed">
                                                {item.textLines.join(" ")}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right: Sticky Animated Images */}
                            <div className="arch-right-sticky relative h-screen w-full max-w-[500px]">
                                {overviewItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="arch-img-wrapper absolute top-[45%] left-0 -translate-y-[60%] h-[450px] w-full rounded-2xl overflow-hidden"
                                        style={{ zIndex: overviewItems.length - index }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="w-full h-full object-cover"
                                            style={{ clipPath: "inset(0%)" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile View: Sequential Stack (Matches Screenshot) */}
                        <div className="md:hidden flex flex-col gap-16 pb-20">
                            {overviewItems.map((item, idx) => (
                                <div key={idx} className="space-y-8">
                                    <div className="space-y-4">
                                        <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed">
                                            {item.textLines.join(" ")}
                                        </p>
                                    </div>
                                    <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* All other sections from Component 1 */}
                    <MeetOurFaculties />
                    <EducationPortalSection />
                    <StudentExperienceSection onLearnMore={() => document.getElementById('vision').scrollIntoView()} />
                    <LearningModesSection />
                    {/* ... Rest of your sections (Why EdInai, Automation, etc.) */}
                    <SiteFooter />
                </div>
            </main>
        </div>
    )
}

// Data Array for the animated section
const overviewItems = [
    {
        image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
        alt: 'Virtual instructor',
        textLines: ['Ed-INAI is an AI-powered education platform', 'where virtual AI teaching models conduct live', 'interactive lectures through smart interfaces.']
    },
    {
        image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=900&q=80',
        alt: 'AI Models',
        textLines: ['Our virtual AI models INAI, VNAI, and AIRA bring', 'intelligence, clarity, and engagement to every classroom.']
    },
    {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
        alt: 'AI Mentors',
        textLines: ['Our virtual AI mentors deliver immersive', 'AI-driven lessons tailored for Indian classrooms.']
    }
];

export default EdInaiPage;