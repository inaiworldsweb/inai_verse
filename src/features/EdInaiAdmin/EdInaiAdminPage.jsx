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

    const toggleAccordion = (index) => {
        setExpandedAccordion(expandedAccordion === index ? -1 : index);
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
                <EdInaiHeader activeView="admin" />

                {/* Content Sections - Responsive padding */}
                <div className="px-4 md:px-6 lg:px-8">

                    {/* Why Choose Ed-INAI Section */}
                    <section className="py-10 md:py-16">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                                {/* Left - Text Content */}
                                <div className="order-2 md:order-1">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
                                        Why Choose Ed-INAI?
                                    </h1>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                                        Ed-INAI unifies planning, delivery, and monitoring into one coordinated platform. Academic teams benefit from automated operations, learners receive personalized pathways, and institutions gain a consistent teaching framework that works on any device. This makes Ed-INAI ideal for schools, colleges, coaching ecosystems, and training providers looking to streamline academic workflows and improve performance outcomes.
                                    </p>
                                </div>

                                {/* Right - Hero Image */}
                                <div className="relative group order-1 md:order-2">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                        <img
                                            src={adminHeroImage}
                                            alt="The Future of Education"
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Admin View Section */}
                    <section id="admin-view" className="py-10 md:py-16 bg-gradient-to-b from-transparent to-white/[0.02]">
                        <div className="max-w-5xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                Admin View
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center max-w-3xl mx-auto mb-10 md:mb-16 leading-relaxed px-2">
                                The Admin View helps institutions manage their entire academic workflow from one dashboard. It offers structured controls for content, schedules, user roles, and performance insights.
                            </p>
                        </div>
                    </section>

                    {/* Slide 1: Video Hero Section with AI Face */}
                    <section className="py-12 md:py-20">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative group cursor-pointer">
                                {/* Glow effect */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                                {/* Video container with play button */}
                                <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                                    <img
                                        src={videoHeroImage}
                                        alt="AI-Powered Education Platform"
                                        className="w-full h-auto object-cover"
                                    />

                                    {/* Play button overlay - Responsive sizing */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors duration-300">
                                        <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-white/10 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                                            <HiPlay className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Slide 2: Upload | Schedule | Manage Tabs Section */}
                    <section className="py-12 md:py-20">
                        <div className="max-w-4xl mx-auto">
                            {/* Tab Navigation - Responsive */}
                            <div className="flex justify-center mb-8 md:mb-12">
                                <div className="inline-flex rounded-full border border-white/20 p-0.5 md:p-1 bg-black/50 backdrop-blur-sm">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(index)}
                                            className={`
                                                px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 
                                                rounded-full text-xs sm:text-sm font-medium 
                                                transition-all duration-300 
                                                ${activeTab === index
                                                    ? 'bg-white/10 text-white'
                                                    : 'text-white/60 hover:text-white'
                                                }
                                            `}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Image - Responsive max-width */}
                            <div className="relative group max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-8 md:mb-12">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl md:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-100">
                                    <img
                                        src={uploadCurriculumImg}
                                        alt="AI Admin Interface"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm sm:text-base md:text-lg text-gray-400 text-center leading-relaxed max-w-3xl mx-auto px-2">
                                Admins can add yearly plans, subject outlines, chapter structures, worksheets, assignments, and resource files. Ed-INAI interprets this data and converts it into structured modules, enabling aligned lectures, assessments, and auto-generated material without repetitive setup.
                            </p>
                        </div>
                    </section>

                    {/* Slide 3: Expert Intelligence Section with Accordion */}
                    <section className="py-12 md:py-20 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent rounded-2xl md:rounded-3xl">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                                {/* Left - Text and Accordion */}
                                <div className="order-2 lg:order-1">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                                        Expert intelligence for everyone.
                                    </h2>
                                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 md:mb-10">
                                        GPT-5 is smarter across the board, providing more useful responses across math, science, finance, law, and more. It's like having a team of experts on call for whatever you want to know.
                                    </p>

                                    {/* Accordion */}
                                    <div className="space-y-2 md:space-y-4">
                                        {accordionItems.map((item, index) => (
                                            <div key={index} className="border-t border-white/10">
                                                <button
                                                    onClick={() => toggleAccordion(index)}
                                                    className="w-full py-3 md:py-4 flex items-center justify-between text-left bg-transparent border-none cursor-pointer group"
                                                >
                                                    <span className={`
                                                        text-sm sm:text-base font-semibold transition-colors pr-4
                                                        ${expandedAccordion === index
                                                            ? 'text-white'
                                                            : 'text-white/80 group-hover:text-white'
                                                        }
                                                    `}>
                                                        {item.title}
                                                    </span>
                                                    <HiChevronRight
                                                        className={`
                                                            w-4 h-4 md:w-5 md:h-5 text-white/50 
                                                            transition-transform duration-300 flex-shrink-0
                                                            ${expandedAccordion === index ? 'rotate-90' : ''}
                                                        `}
                                                    />
                                                </button>

                                                {/* Accordion Content */}
                                                <div className={`
                                                    overflow-hidden transition-all duration-300 
                                                    ${expandedAccordion === index
                                                        ? 'max-h-48 opacity-100 pb-3 md:pb-4'
                                                        : 'max-h-0 opacity-0'
                                                    }
                                                `}>
                                                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pr-4 md:pr-8">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right - Image */}
                                <div className="relative group order-1 lg:order-2">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl md:rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
                                    <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gray-100">
                                        <img
                                            src={expertIntelligenceImg}
                                            alt="AI Intelligence Interface"
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
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

export default EdInaiAdminPage;
