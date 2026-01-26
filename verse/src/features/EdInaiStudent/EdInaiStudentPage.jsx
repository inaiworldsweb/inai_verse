import { useState, useEffect } from 'react';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import heroImage from '../../Assetsa/a.png';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import aiTutorImage from '../../Assetsa/ai_tutor.jpg';
import { EdInaiHeader, EdInaiSidebar } from '../EdInai/components/shared';

// Carousel slides data
const carouselSlides = [
    {
        title: 'Attend Live & Recorded Lectures',
        description: 'Students can join scheduled sessions or revisit recordings with clear explanations, visuals, and concept breakdowns — ideal for reinforcement or missed classes.',
        image: aiTutorImage
    },
    {
        title: 'Interactive AI Tutoring',
        description: 'Get instant answers to your questions from AI tutors that understand context, provide examples, and adapt explanations to your learning level.',
        image: aiTutorImage
    },
    {
        title: 'Smart Assessment & Feedback',
        description: 'Take AI-powered quizzes that adapt to your skill level, with instant feedback and personalized recommendations for improvement.',
        image: aiTutorImage
    }
];

const sidebarItems = [
    { label: 'What is edInai?', id: 'what-is-edinai' },
    { label: 'Meet our faculties', id: 'meet-faculties' },
    { label: 'Admin View – For Education Centres', id: 'admin-view' },
    { label: 'Student View – For Learners', id: 'student-view', active: true },
    { label: 'Teach in Every Way Your Students Want to Learn', id: 'teach' },
    { label: 'Learning Modes', id: 'learning-modes' },
];

const EdInaiStudentPage = () => {
    const [activeSection, setActiveSection] = useState('student-view');
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    };

    // Scroll to top on mount
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
            {/* Responsive Sidebar Component */}
            <EdInaiSidebar
                logoImage={logoImage}
                items={sidebarItems}
                onItemClick={handleSidebarClick}
                activeId={activeSection}
            />

            {/* Main Content Area - Full width on mobile */}
            <main className="flex-1 w-full min-w-0 overflow-y-auto">
                {/* Shared Header Component */}
                <EdInaiHeader activeView="student" />

                {/* Content Sections - Responsive padding */}
                <div className="px-4 md:px-6 lg:px-8">

                    {/* Hero Section */}
                    <section className="py-10 md:py-16">
                        <div className="max-w-4xl mx-auto">
                            {/* Hero Image */}
                            <div className="relative group mb-8 md:mb-12">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl md:rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
                                    <img
                                        src={heroImage}
                                        alt="Ed-INAI Student Interface - Futuristic AI Learning"
                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="text-center mb-10 md:mb-16">
                                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-2">
                                    Ed-INAI is a smart learning automation platform developed by INAI Worlds Pvt. Ltd. that reshapes classroom experiences by turning everyday teaching into a fully automated, intelligent learning system. This page gives a complete look at the Admin and Student interfaces, key features, and the step-by-step setup process your institution will follow.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Student View Section */}
                    <section id="student-view" className="py-10 md:py-16 bg-gradient-to-b from-transparent to-white/[0.02]">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                Student view
                            </h1>

                            <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
                                The Student View is designed for easy navigation, interactive study, and self-paced growth. Each learner receives guidance based on their progress pattern and preferred learning style.
                            </p>

                            {/* Carousel Slider */}
                            <div className="mb-10 md:mb-16">
                                <div className="relative max-w-3xl mx-auto">
                                    {/* Carousel Container */}
                                    <div className="relative bg-[#1a1a1a] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                        {/* Slide Content */}
                                        <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                                            {/* Title */}
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white text-center mb-3 md:mb-4">
                                                {carouselSlides[currentSlide].title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center mb-6 md:mb-8 leading-relaxed max-w-xl mx-auto">
                                                {carouselSlides[currentSlide].description}
                                            </p>

                                            {/* Image */}
                                            <div className="relative group">
                                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl md:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                                <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10">
                                                    <img
                                                        src={carouselSlides[currentSlide].image}
                                                        alt={carouselSlides[currentSlide].title}
                                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Navigation Arrows - Responsive sizing */}
                                        <button
                                            onClick={prevSlide}
                                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/70 hover:text-white transition-all duration-300 border border-white/10"
                                            aria-label="Previous slide"
                                        >
                                            <HiChevronLeft className="text-xl sm:text-2xl" />
                                        </button>
                                        <button
                                            onClick={nextSlide}
                                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/70 hover:text-white transition-all duration-300 border border-white/10"
                                            aria-label="Next slide"
                                        >
                                            <HiChevronRight className="text-xl sm:text-2xl" />
                                        </button>
                                    </div>

                                    {/* Dots Navigation */}
                                    <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
                                        {carouselSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`
                                                    w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full 
                                                    transition-all duration-300 
                                                    ${currentSlide === index
                                                        ? 'bg-white scale-110'
                                                        : 'bg-gray-600 hover:bg-gray-500'
                                                    }
                                                `}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Side by Side Layout */}
                            <div className="mb-10 md:mb-16">
                                <div className="relative">
                                    {/* Carousel Container - Side by Side Layout */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                                        {/* Left Side - Text Content */}
                                        <div className="text-left order-2 md:order-1">
                                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
                                                {carouselSlides[currentSlide].title}
                                            </h3>
                                            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                                                {carouselSlides[currentSlide].description}
                                            </p>
                                        </div>

                                        {/* Right Side - Image */}
                                        <div className="relative group order-1 md:order-2">
                                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl md:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-gray-100">
                                                <img
                                                    src={carouselSlides[currentSlide].image}
                                                    alt={carouselSlides[currentSlide].title}
                                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Track Progress Section */}
                            <div className="mt-12 md:mt-20 text-center">
                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                    Track Progress with Visual Dashboards
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto px-2">
                                    Personal progress boards show completed lessons, time spent, quiz outcomes, weak areas, and recommended improvements to support strategic studying.
                                </p>
                            </div>

                            {/* Learn Anytime Section with Slider */}
                            <div className="mt-12 md:mt-20">
                                {/* Large Image */}
                                <div className="relative group mb-6 md:mb-8 max-w-lg md:max-w-2xl mx-auto">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl md:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-gray-200">
                                        <img
                                            src={aiTutorImage}
                                            alt="AI Learning Interface"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Title and Description */}
                                <div className="text-center mb-8 md:mb-12">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                        Learn Anytime, Anywhere
                                    </h2>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-4xl mx-auto px-2">
                                        Students can access sessions from smartphones, laptops, tablets, smart TVs, or classroom projectors. The platform adjusts to bandwidth levels and offers offline revision options.
                                    </p>
                                </div>

                                {/* Two Image Cards */}
                                <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-xs sm:max-w-lg md:max-w-3xl mx-auto">
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl md:rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                        <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-gray-200">
                                            <img
                                                src={aiTutorImage}
                                                alt="Mobile Learning"
                                                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl md:rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                        <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-gray-200">
                                            <img
                                                src={aiTutorImage}
                                                alt="Multi-device Access"
                                                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Bottom spacing for mobile */}
                    <div className="h-8 md:h-0"></div>
                </div>
            </main>
        </div>
    );
};

export default EdInaiStudentPage;
