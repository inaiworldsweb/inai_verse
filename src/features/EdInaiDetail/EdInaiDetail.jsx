import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiMenu, HiX, HiChevronRight, HiCog, HiCreditCard } from "react-icons/hi";
import edInaiImage from '../../Assetsa/a.png';
import featureImage from '../../Assetsa/b.png';
import secondImage from '../../Assetsa/c.png';
import lectureImage from '../../Assetsa/d.png';
import assessmentImage from '../../Assetsa/f.png';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import SideMenu from '../../components/SideMenu';
import SiteFooter from '../../components/SiteFooter';

const navItems = [
    'Unique Features',
    'Curriculum Mapping',
    'Lecture Generation',
    'Adaptive Assessment',
    'Curriculum Engine',
];

const EdInaiDetail = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPaymentLoading, setIsPaymentLoading] = useState(false);
    const [paymentMessage, setPaymentMessage] = useState(null);
    const [activeSection, setActiveSection] = useState('unique-features');

    const menuRef = useRef(null);

    const handleSideMenuClick = (item) => {
        const sectionMap = {
            'Unique Features': 'unique-features',
            'Curriculum Mapping': 'curriculum-mapping',
            'Lecture Generation': 'lecture-generation',
            'Adaptive Assessment': 'adaptive-assessment',
            'Curriculum Engine': 'curriculum-engine',
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
    };

    const handlePurchase = () => {
        setIsPaymentLoading(false);
        setPaymentMessage({ type: 'info', text: 'Payment functionality is currently disabled.' });
        setTimeout(() => {
            setPaymentMessage(null);
        }, 5000);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row bg-black text-white selection:bg-blue-500/30">
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
                            w-[280px] max-w-[85vw] h-full bg-black 
                            shadow-2xl
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
            <aside className="hidden lg:flex lg:flex-col w-[280px] bg-black p-6 xl:p-8 sticky top-0 h-screen overflow-y-auto border-r border-white/5">
                <div className="flex items-center justify-center mb-4">
                    <Link to="/">
                        <img src={logoImage} alt="INAI Verse logo" className="w-full max-w-[100px] h-auto" />
                    </Link>
                </div>
                <SideMenu items={navItems} variant="login" onSelectItem={handleSideMenuClick} />
            </aside>

            <div className="flex-1 w-full min-w-0 bg-black">
                {/* Navigation Bar - Responsive */}
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

                <main className="pt-16 sm:pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center">

                    {/* Hero Image Section */}
                    <div id="unique-features" className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto mb-10 md:mb-16 relative group scroll-mt-32">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl md:rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
                            <img
                                src={edInaiImage}
                                alt="Ed-INAI Interface"
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Hero Text */}
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-32 px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 md:mb-8 leading-tight tracking-tight">
                            What Makes Ed-INAI Unique
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
                            Ed-INAI elevates digital learning with systems built for structured teaching, automated delivery, and personalized learner engagement.
                        </p>
                    </div>

                    {/* Feature 1: Curriculum Mapping Engine (Text Left, Image Right) */}
                    <section id="curriculum-mapping" className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center mb-20 md:mb-32 scroll-mt-32">
                        <div className="order-2 md:order-1 text-center md:text-left px-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                                Intelligent Curriculum Mapping System
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-light">
                                ED-INAI intelligently analyzes uploaded curriculum and organizes them into structured topics, learning objectives, and dependencies - ensuring that lectures and assessments follow a logical, pedagogically sound sequence.
                            </p>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={secondImage}
                                    alt="Curriculum Mapping"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Feature 2: Lecture Generation (Image Left, Text Right) */}
                    <section id="lecture-generation" className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center mb-20 md:mb-32 scroll-mt-32">
                        <div className="order-2 md:order-1">
                            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={assessmentImage}
                                    alt="Lecture Generation"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex flex-col items-center md:items-start text-center md:text-left px-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                                Lecture Generation & Presentation Layer
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-light">
                                ED-INAI generates structured lesson Lecture , visual presentations, and interactive Lecture ensuring clear, consistent, and pedagogically aligned lectures.
                            </p>
                        </div>
                    </section>

                    {/* Feature 3: Adaptive Assessment (Text Left, Image Right) */}
                    <section id="adaptive-assessment" className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-center mb-20 md:mb-32 scroll-mt-32">
                        <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left px-2">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                                Adaptive Assessment & Personalization
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-light">
                                Built-in mini-quizzes and adaptive pathways adjust content difficulty based on student responses, boosting retention and remediation.
                            </p>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={assessmentImage}
                                    alt="Adaptive Assessment"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Feature 4: AI-Powered Curriculum Intelligence - Full Width Slide */}
                    <section id="curriculum-engine" className="w-full mt-16 md:mt-24 py-10 md:py-16 scroll-mt-32">
                        <div className="max-w-4xl mx-auto text-center px-2 sm:px-4 md:px-6">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 md:mb-12 leading-tight">
                                Curriculum Mapping Engine
                            </h2>

                            <div className="relative group mb-8 md:mb-10">
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                                <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={assessmentImage}
                                        alt="AI-Powered Curriculum Mapping"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                                Ed-INAI parses uploaded syllabus into topics, learning objectives, and dependencies. This mapping ensures lectures and assessments follow logical pedagogical order.
                            </p>
                        </div>
                    </section>
                </main>
                <SiteFooter />
            </div>
        </div>
    );
};

export default EdInaiDetail;
