import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images - using available assets as placeholders
import step1Img from '../../assets/inai.webp';
import step2Img from '../../assets/Vinai.webp';
import step3Img from '../../assets/inai.webp';
import step4Img from '../../assets/Vinai.webp';
import k12Img from '../../assets/bg.png';
import collegeImg from '../../assets/bg.png';
import coachingImg from '../../assets/bg.png';
import corporateImg from '../../assets/bg.png';

const CombinedHallPage = () => {
    // Hero Section Component
    const HeroSection = () => (
        <section className="min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden bg-black py-20 px-6">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-9xl font-black mb-8 tracking-tighter text-white leading-[0.9]"
                >
                    FUTURE OF <br />
                    <span className="text-zinc-600">AI EDUCATION</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed"
                >
                    Experience the next generation of learning with cloud-native, scalable, and intelligent automated systems.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="px-10 py-5 bg-white text-black font-bold rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10">
                        Get Started
                    </button>
                    <button className="px-10 py-5 bg-zinc-900 text-white font-bold rounded-full text-lg border border-white/10 hover:bg-zinc-800 transition-all">
                        View Demo
                    </button>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
        </section>
    );

    // Setup Steps Component
    const SetupSteps = () => {
        const [activeStep, setActiveStep] = useState(0);
        const stepRefs = useRef([]);

        const steps = [
            {
                number: "1",
                title: "Create Your Admin Profile",
                description: "Register your institution, add contact details, upload branding, and set admin roles. This builds your secure portal foundation.",
                image: step1Img
            },
            {
                number: "2",
                title: "Add Your Academic Structure",
                description: "Upload subjects, chapters, resources, and assessment content. Ed-INAI converts this material into structured modules and aligned lecture flows.",
                image: step2Img
            },
            {
                number: "3",
                title: "Schedule Sessions",
                description: "Use the built-in scheduler to set timings, select batches, choose delivery mode, and attach materials. Configure reminders and interaction settings as needed.",
                image: step3Img
            },
            {
                number: "4",
                title: "Let Ed-INAI Execute",
                description: "The platform conducts sessions, manages queries, generates notes, records sessions, and updates analytics in real time. Admins can monitor progress or adjust parameters anytime.",
                image: step4Img
            }
        ];

        const setStepRef = (el, index) => {
            stepRefs.current[index] = el;
        };

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = stepRefs.current.findIndex((ref) => ref === entry.target);
                            if (index !== -1) {
                                setActiveStep(index);
                            }
                        }
                    });
                },
                { threshold: 0.5 }
            );

            stepRefs.current.forEach((ref) => {
                if (ref) observer.observe(ref);
            });

            return () => {
                stepRefs.current.forEach((ref) => {
                    if (ref) observer.unobserve(ref);
                });
            };
        }, []);

        return (
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Simple 4-Step Setup</h2>
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10"></div>
                        <div className="space-y-4">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    ref={(el) => setStepRef(el, index)}
                                    className={`relative pl-12 pb-16 border-l-2 transition-all duration-500 ${activeStep >= index ? 'border-blue-500' : 'border-gray-700'
                                        }`}
                                >
                                    <div className="absolute -left-3 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                        {step.number}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                    {/* Added Image display for robustness if needed, though design mainly text based in left col. 
                      The original code implied images but didn't explicitly render them in this map loop except potentially off-screen or in a side panel.
                      Assuming the prompt's provided code is what user wants, I will stick to it. 
                   */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Integration Section Component
    const IntegrationSection = () => {
        const [activeTab, setActiveTab] = useState(0);
        const scrollContainerRef = useRef(null);

        const integrations = [
            {
                name: 'LMS Integration',
                description: 'Seamlessly connect with popular Learning Management Systems like Moodle, Canvas, and Blackboard.',
                icon: '📚',
                features: ['Single Sign-On (SSO)', 'Gradebook Sync', 'Content Sharing']
            },
            {
                name: 'Video Conferencing',
                description: 'Integrate with Zoom, Google Meet, or Microsoft Teams for live interactive sessions.',
                icon: '🎥',
                features: ['Live Streaming', 'Breakout Rooms', 'Recording']
            },
            {
                name: 'Analytics Dashboard',
                description: 'Get detailed insights and analytics on student performance and engagement.',
                icon: '📊',
                features: ['Real-time Analytics', 'Custom Reports', 'Progress Tracking']
            },
            {
                name: 'Content Management',
                description: 'Easily upload and manage your educational content in one place.',
                icon: '📂',
                features: ['Cloud Storage', 'Version Control', 'Content Organization']
            }
        ];

        const scroll = (direction) => {
            if (scrollContainerRef.current) {
                const { scrollLeft, clientWidth } = scrollContainerRef.current;
                const scrollTo = direction === 'left'
                    ? Math.max(0, scrollLeft - clientWidth / 2)
                    : scrollLeft + clientWidth / 2;

                scrollContainerRef.current.scrollTo({
                    left: scrollTo,
                    behavior: 'smooth'
                });
            }
        };

        return (
            <section className="py-20 px-6 lg:px-12 bg-black text-white border-t border-white/5">
                <div className="max-w-[85rem] mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold">Integration & Technical Details</h2>
                        <div className="flex gap-3">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto pb-6 -mx-4 scrollbar-hide"
                        style={{ scrollSnapType: 'x mandatory' }}
                    >
                        <div className="flex space-x-6 px-4">
                            {integrations.map((integration, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-80 p-6 rounded-2xl border transition-all duration-300 ${activeTab === index ? 'border-blue-500 bg-gray-900' : 'border-gray-800 hover:border-gray-700 bg-gray-900/50'
                                        }`}
                                    style={{ scrollSnapAlign: 'start' }}
                                    onClick={() => setActiveTab(index)}
                                >
                                    <div className="text-4xl mb-4">{integration.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                                    <p className="text-gray-400 mb-4">{integration.description}</p>
                                    <div className="space-y-2">
                                        {integration.features.map((feature, i) => (
                                            <div key={i} className="flex items-center">
                                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Use Cases Section Component
    const UseCasesSection = () => {
        const useCases = [
            {
                title: "K-12 Education",
                description: "Transform traditional classrooms with AI-powered personalized learning experiences for students of all grade levels.",
                image: k12Img
            },
            {
                title: "Higher Education",
                description: "Enhance university and college education with scalable, intelligent learning solutions for higher education institutions.",
                image: collegeImg
            },
            {
                title: "Coaching Centers",
                description: "Deliver consistent, high-quality instruction across multiple locations with our AI teaching assistant.",
                image: coachingImg
            },
            {
                title: "Corporate Training",
                description: "Streamline employee training and development with customizable learning paths and automated assessments.",
                image: corporateImg
            }
        ];

        const UseCaseCard = ({ title, description, image }) => {
            const [isOpen, setIsOpen] = useState(false);

            return (
                <div
                    className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer transition-all duration-500 shadow-xl"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <img
                        src={image}
                        alt={title}
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isOpen ? 'scale-110' : 'scale-100 group-hover:scale-105'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-80'}`}></div>
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                        <h3 className="text-xl font-bold text-white tracking-wide mb-1">{title}</h3>
                        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                            <p className="text-sm text-gray-300 font-light leading-relaxed">
                                {description}
                            </p>
                        </div>
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-white text-black' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                            {isOpen ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M20 12H4"></path>
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4v16m8-8H4"></path>
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <section className="py-20 px-6 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Discover how our AI teaching assistant can transform education across different sectors
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {useCases.map((useCase, index) => (
                            <UseCaseCard
                                key={index}
                                title={useCase.title}
                                description={useCase.description}
                                image={useCase.image}
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    return (
        <>
            <HeroSection />
            <SetupSteps />
            <IntegrationSection />
            <UseCasesSection />
        </>
    );
};

export default CombinedHallPage;
