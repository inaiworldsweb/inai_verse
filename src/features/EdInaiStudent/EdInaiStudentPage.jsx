import { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import { HiChevronRight, HiChevronLeft, HiMenu, HiX } from "react-icons/hi";
import liveLecturesImg from '../../assets/final/Attend Live & Recorded Lectures.png';
import learnAnytimeImg from '../../assets/final/Learn Anytime, Anywhere (1).jpg';
import trackProgressImg from '../../assets/final/Smart dashboard and real time feedback.png';
import aboutImg from '../../assets/final/Future-Ready Education.jfif';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';

// Carousel slides data
const carouselSlides = [
    {
        title: 'Attend Live & Recorded Lectures',
        description: 'Students can join scheduled sessions or revisit recordings with clear explanations, visuals, and concept breakdowns — ideal for reinforcement or missed classes.',
        image: liveLecturesImg
    }
];

const menuItems = [
    'Student view',
    'Track Progress with Visual Dashboards',
   
];

const EdInaiStudentPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    const handleSelectItem = (item) => {
        // Handle menu item selection
        console.log('Selected:', item);
        // You can add logic to scroll to sections or navigate
    };

    return (
        <div className="flex h-screen bg-black text-white">
            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/80 rounded-lg"
            >
                <HiMenu className="w-6 h-6" />
            </button>

            {/* Sidebar */}
            <div className="hidden lg:block w-64 bg-black border-r border-gray-800">
                <SideMenu 
                    items={menuItems} 
                    onSelectItem={handleSelectItem}
                    logoSrc={logoImage}
                />
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div 
                        className="fixed inset-0 bg-black/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                    ></div>
                    <div className="fixed inset-y-0 left-0 w-64 bg-black z-50">
                        <div className="p-4 flex justify-end">
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                <HiX className="w-6 h-6" />
                            </button>
                        </div>
                        <SideMenu 
                            items={menuItems} 
                            onSelectItem={(item) => {
                                handleSelectItem(item);
                                setIsMobileMenuOpen(false);
                            }}
                            logoSrc={logoImage}
                        />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="p-4 md:p-8">
                    {/* About Section */}
                    <section className="py-16 md:py-24">
                        <div className="max-w-5xl mx-auto text-center">
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
                </div>
            </main>
        </div>
    );
};

export default EdInaiStudentPage;