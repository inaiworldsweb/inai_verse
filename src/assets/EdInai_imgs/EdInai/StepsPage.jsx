import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiHome, HiMenu, HiX } from 'react-icons/hi';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import SideMenu from '../../components/SideMenu';

import step1Img from '../../assets/final/inside edinai portal - create your admin profile.png';
import step2Img from '../../assets/final/inside the ed inai- add your academic structure.png';
import step3Img from '../../assets/final/inside the ed inai - schedule sessions.png';
import step4Img from '../../assets/final/inside the ed inai - let ed inai execute.png';
import academicWorkflowImg from '../../assets/Academic Workflow Management.png';
import studentEngagementImg from '../../assets/Student Engagement & Learning Support.png';
import examPreparationImg from '../../assets/Exam Preparation & Performance Support.png';

// Use Case Images
import schoolsImg from '../../assets/images/Schools.jpg';
import collegesImg from '../../assets/images/Colleges.jpg';
import coachingImg from '../../assets/images/Coaching Institute.jpg';
import corporateImg from '../../assets/images/Corporate Training.jpg';

const sidebarItems = [
    'How to Set Up Ed-INAI',
    'Integration & Technical Details',
    'Common Use Cases',
];

const sectionMap = {
    'How to Set Up Ed-INAI': 'how-to-set-up-edinai',
    'Integration & Technical Details': 'integration-technical-details',
    'Common Use Cases': 'common-use-cases',
};

const steps = [
    {
        number: '1',
        title: 'Create Your Admin Profile',
        description: 'Register your institution, add contact details, upload branding, and set admin roles. This builds your secure portal foundation.',
        image: step1Img,
    },
    {
        number: '2',
        title: 'Add Your Academic Structure',
        description: 'Upload subjects, chapters, resources, and assessment content. Ed-INAI converts this material into structured modules and aligned lecture flows.',
        image: step2Img,
    },
    {
        number: '3',
        title: 'Schedule Sessions',
        description: 'Use the built-in scheduler to set timings, select batches, choose delivery mode, and attach materials. Configure reminders and interaction settings as needed.',
        image: step3Img,
    },
    {
        number: '4',
        title: 'Let Ed-INAI Execute',
        description: 'The platform conducts sessions, manages queries, generates notes, records sessions, and updates analytics in real time. Admins can monitor progress or adjust parameters anytime.',
        image: step4Img,
    },
];

const StepItem = ({ step, index, activeStep, setStepRef }) => (
    <div
        ref={(el) => setStepRef(el, index)}
        className={`mb-32 min-h-[40vh] relative pl-10 border-l-[3px] transition-all duration-700 ${activeStep === index ? 'border-white opacity-100' : 'border-white/5 opacity-50'
            }`}
    >
        <h3 className={`text-[15px] md:text-[25px] font-bold mb-4 tracking-tight capitalize ${activeStep === index ? 'text-white' : 'text-white/30'}`}>
            Step {step.number}: {step.title}
        </h3>
        <p className={`text-lg leading-relaxed max-w-lg capitalize tracking-normal ${activeStep === index ? 'text-gray-400' : 'text-white/20'}`}>
            {step.description}
        </p>
    </div>
);

const UseCasesSection = () => {
    const useCases = [
        { title: 'K-12 Schools', description: 'Classroom Supplements, Revision, Remedial Learning', image: schoolsImg },
        { title: 'Colleges', description: 'Large Lecture Automation, Foundational Modules', image: collegesImg },
        { title: 'Coaching Centers', description: 'Standardized Delivery For Multiple Batches', image: coachingImg },
        { title: 'Corporate Training', description: 'Scalable Employee Upskilling Programs', image: corporateImg }
    ];

    return (
        <section id="common-use-cases" className="py-20 px-6 lg:px-12 bg-black text-white border-t border-white/5">
            <div className="max-w-[90rem] mx-auto">
                <h2 className="text-center text-[25px] md:text-[40px] font-bold mb-12 capitalize tracking-tight">Common Use Cases</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.title}
                            className="group rounded-[1.75rem] bg-gradient-to-b from-[#1c1c1c] to-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
                        >
                            <div className="h-[280px] overflow-hidden relative">
                                <img
                                    src={useCase.image}
                                    alt={useCase.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Gradient overlay - always visible at bottom for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                {/* Stronger gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Text overlay at bottom */}
                                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-bold tracking-wide capitalize">{useCase.title}</h3>
                                        <span className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-black text-sm font-bold shrink-0 relative">
                                            <span className="group-hover:hidden">+</span>
                                            <span className="hidden group-hover:inline">−</span>
                                        </span>
                                    </div>
                                    <div className="max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-400 ease-in-out overflow-hidden">
                                        <p className="text-xs text-gray-300 leading-relaxed capitalize tracking-wide mt-2">
                                            {useCase.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SetupSteps = () => {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef([]);
    const listContainerRef = useRef(null);

    const setStepRef = (el, index) => {
        stepRefs.current[index] = el;
    };

    useEffect(() => {
        const container = listContainerRef.current;
        if (!container) return;

        let rafId = null;

        const updateActiveStep = () => {
            const { scrollTop, clientHeight } = container;
            const containerCenter = scrollTop + clientHeight / 2;

            let closestIndex = 0;
            let smallestDistance = Infinity;

            stepRefs.current.forEach((node, index) => {
                if (!node) return;
                const stepCenter = node.offsetTop + node.offsetHeight / 2;
                const distance = Math.abs(stepCenter - containerCenter);
                if (distance < smallestDistance) {
                    smallestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveStep(closestIndex);
        };

        const scheduleUpdate = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(updateActiveStep);
        };

        const isScrollableColumn = container.scrollHeight > container.clientHeight + 4;

        if (isScrollableColumn) {
            container.addEventListener('scroll', scheduleUpdate, { passive: true });
            window.addEventListener('resize', scheduleUpdate);
            scheduleUpdate();

            return () => {
                container.removeEventListener('scroll', scheduleUpdate);
                window.removeEventListener('resize', scheduleUpdate);
                if (rafId) cancelAnimationFrame(rafId);
            };
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = stepRefs.current.indexOf(entry.target);
                        if (index !== -1) {
                            setActiveStep(index);
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: '-30% 0% -30% 0%',
                threshold: 0,
            }
        );

        stepRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            observer.disconnect();
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section id="how-to-set-up-edinai" className="pt-0 pb-24 px-6 lg:px-20 bg-black">
            <div className="max-w-[90rem] mx-auto w-full">
                <div className="text-center mb-32">
                    <h2 className="text-[25px] md:text-[40px] font-bold text-white mb-6 tracking-tight capitalize">How to Set Up Ed-INAI</h2>
                    <p className="text-zinc-400 text-xl max-w-3xl mx-auto font-bold leading-relaxed capitalize tracking-normal">
                        Ed-INAI is cloud-based and built for rapid deployment. Typical onboarding completes within days, not weeks.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start relative">
                    <div
                        ref={listContainerRef}
                        className="w-full lg:w-1/2 flex flex-col py-2 lg:max-h-[75vh] lg:overflow-y-auto lg:pr-6 hide-scrollbar"
                    >
                        {steps.map((step, index) => (
                            <StepItem
                                key={index}
                                step={step}
                                index={index}
                                activeStep={activeStep}
                                setStepRef={setStepRef}
                            />
                        ))}
                    </div>

                    <div className="w-full lg:w-1/2 sticky top-32 lg:top-40 mb-20 lg:mb-0">
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] lg:aspect-square group bg-white/5">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeStep}
                                    src={steps[activeStep].image}
                                    alt={`Step ${activeStep + 1} Visual`}
                                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    className="absolute inset-0 w-full h-full object-contain opacity-90 transition-opacity hover:opacity-100"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/5 pointer-events-none" />
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
                            <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-white/20 rounded-bl-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const IntegrationSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            title: 'Academic Workflow Management',
            description:
                'ED-INAI streamlines daily academic operations including class scheduling, content distribution, assessment management, and reporting—ensuring smooth coordination across departments.',
            image: academicWorkflowImg,
        },
        {
            title: 'Student Engagement & Learning Support',
            description: 'Enhance student participation through AI-driven tutoring, personalized study plans, interactive assessments, and continuous learning support.',
            image: studentEngagementImg,
        },
        {
            title: 'Exam Preparation & Performance Support',
            description:
                'Support students with AI-driven revision plans, mock tests, performance analysis, and exam-focused guidance.',
            image: examPreparationImg,
        },

    ];

    const goToSlide = (direction) => {
        setActiveIndex((prev) => {
            if (direction === 'left') {
                return prev === 0 ? features.length - 1 : prev - 1;
            }
            return prev === features.length - 1 ? 0 : prev + 1;
        });
    };

    const activeFeature = features[activeIndex];

    return (
        <section id="integration-technical-details" className="py-20 px-6 lg:px-12 bg-black text-white border-t border-white/5">
            <div className="max-w-[90rem] mx-auto">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-[25px] md:text-[40px] font-bold capitalize tracking-tight">Platform Capabilities & Institutional Support</h2>

                    <div className="flex gap-3">
                        <button
                            onClick={() => goToSlide('left')}
                            className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition"
                            aria-label="Scroll left"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => goToSlide('right')}
                            className="w-11 h-11 rounded-full border border-white/25 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition"
                            aria-label="Scroll right"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="rounded-[2.5rem] overflow-hidden border border-white/10 bg-black shadow-[0_25px_70px_rgba(0,0,0,0.55)]"
                    >
                        <div className="h-[340px] relative overflow-hidden bg-white/5">
                            <img
                                src={activeFeature.image}
                                alt={activeFeature.title}
                                className="w-full h-full object-contain"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                        </div>

                        <div className="px-6 py-6 flex flex-col gap-3">
                            <h3 className="text-[15px] md:text-[25px] font-bold text-white capitalize tracking-normal">{activeFeature.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed capitalize tracking-normal">
                                {activeFeature.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
const StepsPage = () => {
    const [activeSection, setActiveSection] = useState('how-to-set-up-edinai');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (item) => {
        const id = sectionMap[item];
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
        setIsMobileMenuOpen(false);
    };

    // Basic error boundary to prevent crashes
    try {
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
                                <SideMenu items={sidebarItems} variant="login" onSelectItem={scrollToSection} />
                            </div>
                        </aside>
                    </div>
                )}

                {/* Desktop Sidebar - Sticky */}
                <aside className="hidden lg:flex lg:flex-col w-[280px] bg-[#111] p-6 xl:p-8 sticky top-0 h-screen overflow-hidden border-r border-white/10">
                    <div className="flex items-center justify-center mb-4">
                        <Link to="/">
                            <img src={logoImage} alt="INAI Verse logo" className="w-full max-w-[100px] h-auto" />
                        </Link>
                    </div>
                    <SideMenu items={sidebarItems} variant="login" onSelectItem={scrollToSection} />
                </aside>

                {/* Main Content */}
                <main className="flex-1 w-full min-w-0 bg-black">
                    {/* Navigation Bar - Matching EdInaiDetail topbar */}
                    <nav className="sticky top-0 z-40 bg-black border-b border-white/10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
                            {/* Breadcrumbs */}
                            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm md:text-base tracking-tight">
                                <Link to="/edinai" className="text-white hover:text-white/80 transition-colors">
                                    Edinai
                                </Link>
                                <span className="text-white/40" aria-hidden="true">›</span>
                                <span className="text-white/60 whitespace-nowrap">
                                    Inside the Edinai Portal
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2 md:gap-3">
                                <Link
                                    to="/edinai"
                                    className="p-1.5 sm:p-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
                                    aria-label="Home"
                                >
                                    <HiHome className="text-xs sm:text-sm md:text-base" />
                                </Link>
                                <button
                                    onClick={() => setIsMobileMenuOpen(true)}
                                    className="p-1.5 sm:p-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-colors"
                                    aria-label="Menu"
                                >
                                    <HiMenu className="text-xs sm:text-sm md:text-base" />
                                </button>
                            </div>
                        </div>
                    </nav>
                    <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-2 md:pt-4 pb-8 md:pb-12">
                        <div id="how-to-set-up-edinai">
                            <SetupSteps />
                        </div>
                        <div id="integration-technical-details" className="mt-20">
                            <IntegrationSection />
                        </div>
                        <div id="common-use-cases" className="mt-20">
                            <UseCasesSection />
                        </div>
                    </div>
                </main>
            </div>
        );
    } catch (error) {
        console.error('Error rendering StepsPage:', error);
        return (
            <div className="min-h-screen bg-black text-white p-8">
                <h1 className="text-2xl font-bold text-red-500">Error Loading Page</h1>
                <p className="mt-4">There was an error loading the page. Please check the console for details.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                >
                    Reload Page
                </button>
            </div>
        );
    }
};

export default StepsPage;
