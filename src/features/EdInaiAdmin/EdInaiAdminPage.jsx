import { useState, useEffect } from 'react';
import { HiChevronRight, HiPlay } from "react-icons/hi";
import adminHeroImage from '../../assets/final/Future-Ready Education.jfif';
import videoHeroImage from '../../assets/final/AI Teachers that Never Tire (2).png';
import uploadCurriculumImg from '../../assets/final/Upload & Organize Curriculum.png';
import expertIntelligenceImg from '../../assets/final/Data-Driven Insights.png';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import { EdInaiHeader, EdInaiSidebar } from '../EdInai/components/shared';

const sidebarItems = [
    { label: 'What is edInai?', id: 'what-is-edinai' },
    { label: 'Meet our faculties', id: 'meet-faculties' },
    { label: 'Admin View – For Education Centres', id: 'admin-view', active: true },
    { label: 'Student View – For Learners', id: 'student-view' },
    { label: 'Teach in Every Way Your Students Want to Learn', id: 'teach' },
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

    const [activeSection, setActiveSection] = useState('admin-view');
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
        <div className="flex min-h-screen bg-black text-white font-sans">

            <EdInaiSidebar
                logoImage={logoImage}
                items={sidebarItems}
                onItemClick={handleSidebarClick}
                activeId={activeSection}
            />

            <main className="flex-1 overflow-y-auto bg-black">

                <EdInaiHeader activeView="admin" />

                {/* 🔥 Centered Container */}
                <div className="max-w-[1200px] mx-auto w-full px-6 md:px-10 lg:px-16">

                    {/* Why Choose Section */}
                    <section className="py-16 md:py-24">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                                <div>
                                    <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                        Why Choose Ed-INAI?
                                    </h1>
                                    <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                                        Ed-INAI unifies planning, delivery, and monitoring into one coordinated platform. Academic teams benefit from automated operations, learners receive personalized pathways, and institutions gain a consistent teaching framework that works on any device.
                                    </p>
                                </div>

                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-lg opacity-50"></div>
                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                        <img
                                            src={adminHeroImage}
                                            alt=""
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/* Admin View Section */}
                    <section id="admin-view" className="py-16 md:py-24">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                Admin View
                            </h2>

                            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                The Admin View helps institutions manage their entire academic workflow from one dashboard.
                            </p>
                        </div>
                    </section>

                    {/* Video Section */}
                    <section className="py-16">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative group cursor-pointer">
                                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={videoHeroImage}
                                        alt=""
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

                    {/* Tabs Section */}
                    <section className="py-16">
                        <div className="max-w-4xl mx-auto text-center">

                            <div className="flex justify-center mb-10">
                                <div className="inline-flex rounded-full border border-white/20 p-1 bg-black/50">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(index)}
                                            className={`px-8 py-3 rounded-full text-sm transition-all duration-300 ${
                                                activeTab === index
                                                    ? 'bg-white/10 text-white'
                                                    : 'text-white/60 hover:text-white'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="max-w-md mx-auto mb-10">
                                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={uploadCurriculumImg}
                                        alt=""
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Admins can add yearly plans, subject outlines, chapter structures, worksheets, assignments, and resource files.
                            </p>

                        </div>
                    </section>

                    {/* Expert Section */}
                    <section className="py-20">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Expert intelligence for everyone.
                                </h2>

                                <div className="space-y-4">
                                    {accordionItems.map((item, index) => (
                                        <div key={index} className="border-t border-white/10">
                                            <button
                                                onClick={() => toggleAccordion(index)}
                                                className="w-full py-4 flex justify-between text-left"
                                            >
                                                <span className="font-semibold">
                                                    {item.title}
                                                </span>
                                                <HiChevronRight
                                                    className={`transition-transform ${
                                                        expandedAccordion === index ? 'rotate-90' : ''
                                                    }`}
                                                />
                                            </button>

                                            {expandedAccordion === index && (
                                                <p className="text-gray-400 pb-4 text-sm leading-relaxed">
                                                    {item.content}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={expertIntelligenceImg}
                                    alt=""
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default EdInaiAdminPage;
