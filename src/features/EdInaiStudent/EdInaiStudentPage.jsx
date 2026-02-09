import { useState, useEffect } from 'react';
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import liveLecturesImg from '../../assets/final/Attend Live & Recorded Lectures.png';
import learnAnytimeImg from '../../assets/final/Learn Anytime, Anywhere (1).jpg';
import trackProgressImg from '../../assets/final/Smart dashboard and real time feedback.png';
import aboutImg from '../../assets/final/Future-Ready Education.jfif';

import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import { EdInaiHeader, EdInaiSidebar } from '../EdInai/components/shared';

// Carousel slides data
const carouselSlides = [
    {
        title: 'Attend Live & Recorded Lectures',
        description: 'Students can join scheduled sessions or revisit recordings with clear explanations, visuals, and concept breakdowns — ideal for reinforcement or missed classes.',
        image: liveLecturesImg
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
        <div className="flex h-screen overflow-hidden bg-black text-white font-sans">
            {/* Responsive Sidebar Component */}
            <EdInaiSidebar
                logoImage={logoImage}
                items={sidebarItems}
                onItemClick={handleSidebarClick}
                activeId={activeSection}
            />

            {/* Main Content Area - Full width on mobile */}
            <main className="flex-1 w-full min-w-0 overflow-y-auto bg-black">
                {/* Shared Header Component */}
                <EdInaiHeader activeView="student" />

                {/* Content Sections - Responsive padding */}
                <div className="px-4 md:px-6 lg:px-8 bg-black">
                    {/* About Section */}
                    <section className="py-16 md:py-24">
                        <div className="max-w-5xl mx-auto text-center">
                            {/* Image Section */}
                            <div className="mb-10 md:mb-12">
                                <div className="relative group inline-block">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500"></div>
                                    <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/20 bg-black">
                                        <img
                                            src={aboutImg}
                                            alt="Ed-INAI Platform"
                                            className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto">
                                Ed-INAI is a smart learning automation platform developed by INAI Worlds Pvt. Ltd. that reshapes classroom experiences by turning everyday teaching into a fully automated, intelligent learning system. This page gives a complete look at the Admin and Student interfaces, key features, and the step-by-step setup process your institution will follow.
                            </p>
                        </div>
                    </section>

                    {/* Student View Section */}
                    <section id="student-view" className="py-12 md:py-20">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center space-y-4 mb-10 md:mb-14">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Student view</h2>
                                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                    The Student View is designed for easy navigation, interactive study, and self-paced growth. Each learner receives guidance based on their progress pattern and preferred learning style.
                                </p>
                            </div>

                            <div className="bg-[#2b2b2b] rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl px-6 sm:px-8 md:px-12 pt-10 pb-12 md:pb-14">
                                <div className="max-w-4xl mx-auto text-center">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                                        {carouselSlides[currentSlide].title}
                                    </h3>
                                    <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed underline decoration-gray-400 decoration-2 decoration-offset-4">
                                        {carouselSlides[currentSlide].description}
                                    </p>

                                    <div className="mt-8 md:mt-10 rounded-[28px] overflow-hidden border border-white/10 bg-black">
                                        <img
                                            src={carouselSlides[currentSlide].image}
                                            alt={carouselSlides[currentSlide].title}
                                            className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
                                        />
                                    </div>

                                    {/* <div className="flex justify-center gap-3 mt-8">
                                        {carouselSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                                    ? 'bg-white scale-125'
                                                    : 'bg-gray-500 hover:bg-gray-400'
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                                aria-current={currentSlide === index ? 'true' : 'false'}
                                            />
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* Track Progress Section */}
                    <section className="py-12 md:py-20">
                        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                    Track Progress with Visual Dashboards
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-3 leading-relaxed">
                                    Personal progress boards show completed lessons, time spent, quiz outcomes, weak areas, and recommended improvements to support strategic studying.
                                </p>
                            </div>

                            <div className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl inline-block">
                                <img
                                    src={trackProgressImg}
                                    alt="Track Progress"
                                    className="w-full h-[340px] sm:h-[400px] md:h-[460px] object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Learn Anytime Section */}
                    <section className="py-12 md:py-20">
                        <div className="max-w-6xl mx-auto text-center">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                Learn Anytime, Anywhere
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-3 mb-10 leading-relaxed">
                                Students can access sessions from smartphones, laptops, tablets, smart TVs, or classroom projectors. The platform adjusts to bandwidth levels and offers offline revision options.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="rounded-[28px] border-2 border-blue-400/70 p-1 bg-gradient-to-br from-blue-500/30 to-cyan-500/30">
                                    <div className="rounded-[24px] overflow-hidden bg-black">
                                        <img
                                            src={learnAnytimeImg}
                                            alt="Mobile Learning"
                                            className="w-full h-[260px] sm:h-[320px] object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="rounded-[28px] border border-white/10 p-1 bg-[#0f0f0f]">
                                    <div className="rounded-[24px] overflow-hidden">
                                        <img
                                            src={learnAnytimeImg}
                                            alt="Desktop Learning"
                                            className="w-full h-[260px] sm:h-[320px] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default EdInaiStudentPage;
