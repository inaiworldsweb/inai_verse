import { useState, useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import { HiChevronRight, HiMenu, HiX, HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

import liveLecturesImg from '../../assets/final/Attend Live & Recorded Lectures.png';
import trackProgressImg from '../../assets/final/Smart dashboard and real time feedback.png';
import aboutImg from '../../assets/final/Future-Ready Education.jfif';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';

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

    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSideMenuClick = (item) => {
        const sectionMap = {
            'Student view': 'student-view',
            'Track Progress with Visual Dashboards': 'track-progress',
        };

        const sectionId = sectionMap[item];
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex h-screen bg-black text-white">

            {/* Sidebar */}
            <div className="hidden lg:block w-64 bg-black border-r border-gray-800">
                <SideMenu
                    items={menuItems}
                    logoSrc={logoImage}
                    onSelectItem={handleSideMenuClick}
                />
            </div>

            {/* Mobile Sidebar */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <aside
                        className="w-64 h-full bg-black border-r border-gray-800 p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-end mb-4">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-gray-400 hover:text-white"
                            >
                                <HiX size={24} />
                            </button>
                        </div>
                        <SideMenu
                            items={menuItems}
                            logoSrc={logoImage}
                            onSelectItem={handleSideMenuClick}
                        />
                    </aside>
                </div>
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">

                {/* 🔥 UPDATED TOP BAR (2 LINES) */}
                <div className="border-b border-gray-800 px-6 py-4 flex items-start justify-between">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col gap-2 text-sm">

                        {/* First Line */}
                        <div className="flex items-center gap-3 text-gray-300">
                            <span
                                onClick={() => navigate('/edinai')}
                                className="cursor-pointer hover:text-white transition"
                            >
                                Edinai
                            </span>

                            <HiChevronRight className="text-gray-500" />

                            <span className="text-white font-medium">
                                Inside the Ed-INAI Portal
                            </span>
                        </div>

                        {/* Second Line */}
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                            <span
                                onClick={() => navigate('/edinai-admin')}
                                className="cursor-pointer hover:text-white transition"
                            >
                                Admin view
                            </span>

                            <HiChevronRight className="text-gray-600" />

                            <span className="text-white">
                                Student view
                            </span>
                        </div>

                    </div>

                    {/* RIGHT SIDE ICONS */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition"
                        >
                            <HiHome />
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition lg:hidden"
                        >
                            <HiMenu />
                        </button>
                    </div>
                </div>
                {/* 🔥 END TOP BAR */}


                <div className="px-4 md:px-8 pb-4 md:pb-8 pt-0">

                    {/* About Section */}
                    <section className="pt-4 pb-16 md:pb-24">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="mb-12">
                                <div className="relative group block">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl opacity-60"></div>
                                    <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-black">
                                        <img
                                            src={aboutImg}
                                            alt="Ed-INAI Platform"
                                            className="w-full h-[420px] md:h-[500px] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg md:text-xl text-white leading-relaxed max-w-5xl mx-auto">
                                Ed-INAI is a smart learning automation platform developed by INAI Worlds Pvt. Ltd.
                                that reshapes classroom experiences by turning everyday teaching into a fully
                                automated, intelligent learning system.
                            </p>
                        </div>
                    </section>

                    {/* Student View Section */}
                    <section id="student-view" className="py-16">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Student view
                            </h2>

                            <div className="bg-[#2b2b2b] rounded-[40px] border border-white/10 px-12 py-14">
                                <h3 className="text-3xl font-semibold mb-4">
                                    {carouselSlides[currentSlide].title}
                                </h3>

                                <p className="text-lg text-gray-100  decoration-gray-400 decoration-2 decoration-offset-4">
                                    {carouselSlides[currentSlide].description}
                                </p>

                                <div className="mt-10 rounded-[28px] overflow-hidden border border-white/10">
                                    <img
                                        src={carouselSlides[currentSlide].image}
                                        alt=""
                                        className="w-full h-[420px] object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Track Progress Section */}
                    <section id="track-progress" className="py-16">
                        <div className="max-w-6xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Track Progress with Visual Dashboards
                            </h2>

                            <div className="bg-[#2b2b2b] rounded-[40px] border border-white/10 px-12 py-14">
                                <h3 className="text-3xl font-semibold mb-4">
                                    Smart dashboard and real time feedback
                                </h3>

                                <p className="text-lg text-gray-100  decoration-gray-400 decoration-2 decoration-offset-4">
                                    Provides educators with dashboards that highlight learning gaps, attendance, and engagement in seconds.
                                </p>

                                <div className="mt-10 rounded-[28px] overflow-hidden border border-white/10">
                                    <img
                                        src={trackProgressImg}
                                        alt="Track Progress"
                                        className="w-full h-[420px] object-cover"
                                    />
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
