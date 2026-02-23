import { useState, useEffect } from 'react';
import HeroImage from '../../assets/EdnaiHeroImage.jpg';
import { HiChevronRight, HiPlay } from "react-icons/hi";
import UploadAndOrganizeCurriculum from '../../assets/final/Upload & Organize Curriculum.png';
import videoPng from '../../assets/video.png'
import uploadCurriculumImg from '../../assets/final/Upload & Organize Curriculum.png';
import expertIntelligenceImg from '../../assets/final/Data-Driven Insights.png';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import { EdInaiHeader, EdInaiSidebar } from '../EdInai/components/shared';

import AdminAnimationSection from './AdminAnimationSection';

// 1. Define your images in an array matching the tabs order
const tabImages = [
    uploadCurriculumImg,   // Upload
    expertIntelligenceImg, // Schedule (Placeholder)
    UploadAndOrganizeCurriculum      // Manage (Placeholder)
];

const sidebarItems = [
    { label: 'Why Choose Ed-INAI?', id: 'why-choose' },
    { label: 'Admin View – For Education Centres', id: 'admin-view' },
    { label: 'Expert intelligence for everyone.', id: 'expert-intelligence' },
];

const tabs = ['Upload', 'Schedule', 'Manage'];

const accordionItems = [
    {
        title: 'Assign Roles & Permissions',
        content: 'Admins can define structured roles such as Owner, Principal, Academic Lead, Faculty, Coordinator, or custom positions. Each role can be configured with specific controls, ensuring data protection and smooth governance across departments.'
    },
    {
        title: 'Access AI-Driven Analytics & Reports',
        content: 'Get real-time insights on student performance, attendance patterns, and learning outcomes. AI-powered dashboards highlight trends and suggest interventions for at-risk learners.'
    },
    {
        title: 'Automated Academic Operations',
        content: 'Automate routine tasks like attendance tracking, grade calculations, certificate generation, and parent communication. Save hours of administrative work each week.'
    },
];

const EdInaiAdminPage = () => {

    const [activeSection, setActiveSection] = useState('why-choose');
    const [activeTab, setActiveTab] = useState(0);
    const [expandedAccordion, setExpandedAccordion] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSidebarClick = (id) => {
        setActiveSection(id);
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleAccordion = (index) => {
        setExpandedAccordion(expandedAccordion === index ? -1 : index);
    };

    return (
        <div className="flex min-h-screen bg-black text-white font-inter">

            <EdInaiSidebar
                logoImage={logoImage}
                items={sidebarItems}
                onItemClick={handleSidebarClick}
                activeId={activeSection}
            />

            <main className="flex-1 overflow-y-auto bg-black pb-20">

                <EdInaiHeader activeView="admin" />

                {/* 🔥 Centered Container */}
                <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10 lg:px-16">

                    {/* Why Choose Section */}
                    <section id="why-choose" className="py-16 md:py-24 item-center">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h1 className="text-[25px] md:text-[40px] font-bold mb-8">
                                        Why Choose Ed-INAI?
                                    </h1>
                                    <p className="text-[15px] md:text-[25px] text-gray-400">
                                        Ed-INAI unifies planning, delivery, and monitoring into one coordinated platform. Academic teams benefit from automated operations, learners receive personalized pathways, and institutions gain a consistent teaching framework that works on any device.
                                    </p>
                                </div>

                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-lg opacity-50"></div>
                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                        <img
                                            src={HeroImage}
                                            alt="Hero"
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Admin View / Tabs Section */}
                    <section id="admin-view" className="py-8 md:py-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-[25px] md:text-[40px] font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                Admin View
                            </h2>
                            <p className="text-[15px] md:text-[25px] text-gray-400 mb-10">
                                The Admin View helps institutions manage their entire academic workflow from one dashboard.
                            </p>
                            {/* Video Section */}
                            <section className="py-8 md:py-16">
                                <div className="max-w-5xl mx-auto">
                                    <div className="relative group cursor-pointer">
                                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                            <img
                                                src={videoPng}
                                                alt="Platform Video"
                                                className="w-full h-auto object-cover"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm bg-white/10">
                                                    <HiPlay className="w-8 h-8 text-white ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Tab Switcher */}
                            <div className="flex justify-center mb-10">
                                <div className="inline-flex rounded-full border border-white/20 p-1 bg-black/50">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(index)}
                                            className={`px-8 py-3 rounded-full text-sm transition-all duration-300 ${activeTab === index
                                                ? 'bg-white/10 text-white'
                                                : 'text-white/60 hover:text-white'
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Dynamic Image based on Tab */}
                            <div className="mb-10 transition-all duration-500">
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        key={activeTab} // Key forces a re-render/animation
                                        src={tabImages[activeTab]}
                                        alt={tabs[activeTab]}
                                        className="w-full object-cover animate-in fade-in duration-700"
                                    />
                                </div>
                            </div>



                        </div>
                        <div className='w-full  flex justify-center'>
                            <p className="text-[15px] md:text-[25px] text-gray-400">
                                Admins can add yearly plans, subject outlines, chapter structures, worksheets, assignments, and resource files. Ed-INAI interprets this data and converts it into structured modules, enabling aligned lectures, assessments, and auto-generated material without repetitive setup.                            </p>
                        </div>
                    </section>
                    <AdminAnimationSection />



                </div>
            </main>
        </div>
    );
};

export default EdInaiAdminPage;