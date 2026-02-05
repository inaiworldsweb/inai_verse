import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import { EdInaiSidebar, EdInaiHeader } from './components/shared';

import step1Img from '../../assets/final/inside edinai portal - create your admin profile.png';
import step2Img from '../../assets/final/inside the ed inai- add your academic structure.png';
import step3Img from '../../assets/final/inside the ed inai - schedule sessions.png';
import step4Img from '../../assets/final/inside the ed inai - let ed inai execute.png';

const sidebarItems = [
    { label: 'How to Set Up Ed-INAI', id: 'how-to-set-up-edinai' },
    { label: 'Integration & Technical Details', id: 'integration-technical-details' },
    { label: 'Common Use Cases', id: 'common-use-cases' },
];

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
        <h3 className={`text-3xl font-bold mb-4 tracking-tight ${activeStep === index ? 'text-white' : 'text-white/30'}`}>
            Step {step.number}: {step.title}
        </h3>
        <p className={`text-lg leading-relaxed max-w-lg ${activeStep === index ? 'text-gray-400' : 'text-white/20'}`}>
            {step.description}
        </p>
    </div>
);

const UseCasesSection = () => {
    const useCases = ['K-12 Schools', 'Colleges', 'Coaching Centers', 'Corporate Training'];

    return (
        <section id="common-use-cases" className="py-20 px-6 lg:px-12 bg-black text-white border-t border-white/5">
            <div className="max-w-[90rem] mx-auto">
                <h2 className="text-center text-3xl lg:text-4xl font-bold mb-12">Common Use Cases</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((title) => (
                        <div
                            key={title}
                            className="rounded-[1.75rem] bg-gradient-to-b from-[#1c1c1c] to-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden"
                        >
                            <div className="h-[220px] overflow-hidden">
                                <img
                                    src={step2Img}
                                    alt={title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="px-5 py-4 flex items-center justify-between text-sm font-medium tracking-wide">
                                <span>{title}</span>
                                <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-xs">○</span>
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
        <section id="how-to-set-up-edinai" className="py-24 px-6 lg:px-20 bg-black">
            <div className="max-w-[90rem] mx-auto w-full">
                <div className="text-center mb-32">
                    <h2 className="text-6xl font-extrabold text-white mb-6 tracking-tight">How to Set Up Ed-INAI</h2>
                    <p className="text-zinc-400 text-xl max-w-3xl mx-auto font-bold leading-relaxed">
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
            title: 'Cloud-Native & Scalable',
            description:
                '100% cloud-hosted no servers required. Scales from single classrooms to multi-branch institutions.',
            image: step2Img,
        },
        {
            title: 'Device Compatibility',
            description: 'Compatible with web browsers, mobile apps, smart TVs, and projector setups.',
            image: step3Img,
        },
        {
            title: 'Integrations & APIs',
            description:
                'Integrates with existing LMS, ERP, attendance systems, and content repositories via APIs and standard connectors.',
            image: step2Img,
        },
        {
            title: 'Security & Privacy',
            description:
                'Role-based access control, encrypted data storage, secure authentication, and compliance with privacy best practices.',
            image: step3Img,
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
                    <h2 className="text-3xl lg:text-4xl font-bold">Integration & Technical Details</h2>

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
                            className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
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
                            <h3 className="text-2xl font-bold text-white">{activeFeature.title}</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSidebarClick = (id) => {
        setActiveSection(id);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex min-h-screen bg-black text-white font-sans">
            <EdInaiSidebar
                logoImage={logoImage}
                items={sidebarItems}
                onItemClick={handleSidebarClick}
                activeId={activeSection}
            />

            <main className="flex-1 w-full min-w-0 overflow-y-auto bg-black">
                <EdInaiHeader activeView="student" showSubNav={false} />

                <SetupSteps />
                <IntegrationSection />
                <UseCasesSection />
            </main>
        </div>
    );
};

export default StepsPage;
