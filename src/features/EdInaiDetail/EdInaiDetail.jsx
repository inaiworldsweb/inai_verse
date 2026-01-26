import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiMenu, HiChevronRight, HiCog, HiCreditCard } from "react-icons/hi";
import edInaiImage from '../../Assetsa/a.png';
import featureImage from '../../Assetsa/b.png';
import secondImage from '../../Assetsa/c.png';
import lectureImage from '../../Assetsa/d.png';
import assessmentImage from '../../Assetsa/f.png';

const EdInaiDetail = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPaymentLoading, setIsPaymentLoading] = useState(false);
    const [paymentMessage, setPaymentMessage] = useState(null);

    const menuRef = useRef(null);

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
        <div className="min-h-screen w-full bg-black text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
            {/* Navigation Bar - Responsive */}
            <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex justify-between items-center">
                    {/* Breadcrumbs - Responsive */}
                    <div className="flex items-center gap-1.5 sm:gap-3 text-xs sm:text-sm md:text-base text-gray-400 font-medium min-w-0">
                        <Link
                            to="/edinai"
                            className="hover:text-white transition-colors duration-300 whitespace-nowrap"
                        >
                            EdInai
                        </Link>
                        <HiChevronRight className="text-gray-600 flex-shrink-0" />
                        <span className="text-white truncate">
                            <span className="hidden sm:inline">Inside the Ed-INAI Portal</span>
                            <span className="sm:hidden">Portal</span>
                        </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                        <Link
                            to="/"
                            className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                            aria-label="Home"
                        >
                            <HiHome className="text-lg sm:text-xl" />
                        </Link>

                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${isMenuOpen ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
                                aria-label="Menu"
                            >
                                <HiMenu className="text-lg sm:text-xl" />
                            </button>

                            {isMenuOpen && (
                                <div className="absolute top-full right-0 mt-3 w-48 bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 transform origin-top-right transition-all animate-in fade-in zoom-in-95 duration-200">
                                    <Link
                                        to="/setup-guide"
                                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <HiCog className="text-lg" />
                                        <span>Setup Guide</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto flex flex-col items-center">

                {/* Hero Image Section */}
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto mb-10 md:mb-16 relative group">
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
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-32 px-2">
                    <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-4 md:mb-6 leading-tight">
                        What Makes Ed-INAI Unique
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed font-light mb-6 md:mb-8">
                        Ed-INAI elevates digital learning with systems built for structured teaching, automated delivery, and personalized learner engagement.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={handlePurchase}
                            disabled={isPaymentLoading}
                            className={`
                                group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 
                                bg-gradient-to-r from-blue-600 to-purple-600 rounded-full 
                                text-white font-bold text-sm sm:text-base md:text-lg 
                                shadow-lg shadow-purple-500/30 
                                transition-all duration-300 hover:scale-105 hover:shadow-purple-500/50
                                disabled:opacity-70 disabled:cursor-not-allowed
                            `}
                        >
                            <span className="flex items-center justify-center gap-2">
                                {isPaymentLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <HiCreditCard className="text-lg sm:text-xl" />
                                        <span className="hidden sm:inline">Get Started Now - ₹20,000</span>
                                        <span className="sm:hidden">Get Started - ₹20,000</span>
                                    </>
                                )}
                            </span>
                            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>

                        {paymentMessage && (
                            <div className={`mt-4 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-top-2 ${paymentMessage.type === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                }`}>
                                {paymentMessage.text}
                            </div>
                        )}
                    </div>
                </div>

                {/* Feature 1: Curriculum Mapping Engine (Text Left, Image Right) */}
                <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center mb-12 md:mb-16">
                    <div className="order-2 md:order-1 text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                            Curriculum Mapping Engine
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                            Ed-INAI parses uploaded syllabus into topics, learning objectives, and dependencies. This mapping ensures lectures and assessments follow logical pedagogical order.
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
                <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
                    <div className='grid gap-6 md:gap-4'>
                        <div className="order-2 md:order-1">
                            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={assessmentImage}
                                    alt="Lecture Generation"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex flex-col items-center text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-lg">
                                Lecture Generation & Presentation Layer
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-md">
                                AI prepares lesson scripts, visual slides, and interactive prompts — delivering lectures with human-like clarity and pedagogical consistency.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Adaptive Assessment (Text Left, Image Right) */}
                    <div className='grid gap-6 md:gap-4'>
                        <div className="order-1 md:order-1 flex flex-col items-center text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-lg">
                                Adaptive Assessment & Personalization
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-md">
                                Built-in mini-quizzes and adaptive pathways adjust content difficulty based on student responses, boosting retention and remediation.
                            </p>
                        </div>
                        <div className="order-2 md:order-2">
                            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
                                <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={assessmentImage}
                                    alt="Adaptive Assessment"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 4: AI-Powered Curriculum Intelligence - Full Width Slide */}
                <section className="w-full mt-16 md:mt-24 py-10 md:py-16">
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
        </div>
    );
};

export default EdInaiDetail;
