import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import PageHeader from '../../components/PageHeader';
import SideMenu from '../../components/SideMenu';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';

// Components Imports
import MiraaiHero from './components/MiraaiHero';
import MiraaiGallery from './components/MiraaiGallery';
import MiraaiProcess from './components/MiraaiProcess';
import MiraaiTrust from './components/MiraaiTrust';
import MiraaiShowcase from './components/MiraaiShowcase';
import MiraaiVision from './components/MiraaiVision';
import MiraaiServices from './components/MiraaiServices';
import MiraaiBenefits from './components/MiraaiBenefits';
import MiraaiWhatYouGet from './components/MiraaiWhatYouGet';
import MiraaiSimpleTruth from './components/MiraaiSimpleTruth';
import MiraaiCTA from './components/MiraaiCTA';
import MiraaiComparison from './components/MiraaiComparison';
import MiraaiGrowthKiller from './components/MiraaiGrowthKiller';
import MiraaiWhyChoose from './components/MiraaiWhyChoose';
import MiraaiFinalCTA from './components/MiraaiFinalCTA';
import MiraaiTestimonials from './components/MiraaiTestimonials';
import MiraaiFAQ from './components/MiraaiFAQ';
import MiraaiWhoNeeds from './components/MiraaiWhoNeeds';

// Navigation configuration - All components included
const navConfig = [
    { id: 'hero', label: 'Hero section' },
    { id: 'services', label: 'What exactly we do' },
    { id: 'whoneeds', label: 'Who needs our services' },
    { id: 'growthkiller', label: 'Growth killer' },
    { id: 'simpletruth', label: 'The real problem we solve' },
    { id: 'whychoose', label: 'Why choose miraai' },
    { id: 'finalcta', label: 'Final CTA with form fill-up' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'Frequently asked questions' },
];

const Miraai = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const scrollContainerRef = useRef(null);
    const navigate = useNavigate();

    // Extract labels for the SideMenu component
    const navLabels = navConfig.map(item => item.label);

    const handleSideMenuClick = (label) => {
        const item = navConfig.find(i => i.label === label);
        if (item) {
            const section = document.getElementById(item.id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    const handleBack = () => navigate(-1);
    const handleGoToPrice = () => navigate('/pricing');

    return (
        <div className="flex h-screen overflow-hidden bg-black text-white font-sans">
            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <aside
                        className="
                            w-[280px] max-w-[85vw] h-full bg-[#111] 
                            border-r border-white/10 shadow-2xl
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
                            <SideMenu items={navLabels} variant="login" onSelectItem={handleSideMenuClick} />
                        </div>
                    </aside>
                </div>
            )}

            {/* Desktop Sidebar - Hidden on mobile */}
            <aside className="hidden lg:flex lg:flex-col w-[280px] bg-[#111] p-6 xl:p-8 sticky top-0 h-screen overflow-y-auto border-r border-white/10">
                <div className="flex items-center justify-center mb-4">
                    <Link to="/">
                        <img src={logoImage} alt="INAI Verse logo" className="w-full max-w-[100px] h-auto" />
                    </Link>
                </div>
                <SideMenu items={navLabels} variant="login" onSelectItem={handleSideMenuClick} />
            </aside>

            {/* Main Content Area */}
            <main ref={scrollContainerRef} className="flex-1 w-full min-w-0 flex flex-col overflow-y-auto bg-black scroll-smooth [&>div>section]:!my-0 [&>div>section]:!py-0">
                <PageHeader
                    title="Miraai"
                    showBackButton={true}
                    showPriceButton={true}
                    showHomeButton={true}
                    showMenuButton={true}
                    onMenuClick={() => setIsMobileMenuOpen(true)}
                    onBackClick={handleBack}
                    onPriceClick={handleGoToPrice}
                />

                <div className="w-full font-['Inter'] space-y-0">
                    <section id="hero" className="flex-1 flex flex-col items-center justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                        <MiraaiHero />
                    </section>

                    <section id="gallery" className="!mt-0"><MiraaiGallery /></section>
                    <section id="process" className="!mt-0"><MiraaiProcess containerRef={scrollContainerRef} /></section>
                    <section id="trust" className="!mt-0"><MiraaiTrust /></section>
                    <section id="showcase" className="!mt-0"><MiraaiShowcase /></section>
                    {/* <section id="vision" className="!mt-0"><MiraaiVision /></section> */}
                    <section id="services" className="!mt-0"><MiraaiServices /></section>
                    {/* <section id="benefits" className="!mt-0"><MiraaiBenefits /></section> */}
                    <section id="whatyouget" className="!mt-0"><MiraaiWhatYouGet /></section>
                    <section id="whoneeds" className="!mt-0"><MiraaiWhoNeeds /></section>
                    <section id="simpletruth" className="!mt-0"><MiraaiSimpleTruth /></section>
                    <section id="cta" className="!mt-0"><MiraaiCTA /></section>
                    <section id="comparison" className="!mt-0"><MiraaiComparison /></section>
                    <section id="growthkiller" className="!mt-0"><MiraaiGrowthKiller /></section>
                    <section id="whychoose" className="!mt-0"><MiraaiWhyChoose /></section>
                    <section id="finalcta" className="!mt-0"><MiraaiFinalCTA /></section>
                    <section id="testimonials" className="!mt-0"><MiraaiTestimonials /></section>
                    <section id="faq" className="!mt-0"><MiraaiFAQ /></section>
                </div>
            </main>
        </div>
    );
};

export default Miraai;
