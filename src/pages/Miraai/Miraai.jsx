import React, { useState, useRef } from 'react';
import PageHeader from '../../components/PageHeader';
import Sidebar from '../../components/Sidebar';
// import FooterLegalLine from '../../components/FooterLegalLine';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import MiraaiHero from './components/MiraaiHero';
import MiraaiGallery from './components/MiraaiGallery';
import MiraaiProcess from './components/MiraaiProcess';
import MiraaiTrust from './components/MiraaiTrust';
// import MiraaiBenefits from './components/MiraaiBenefits';
import MiraaiShowcase from './components/MiraaiShowcase';
import MiraaiVision from './components/MiraaiVision';
import MiraaiServices from './components/MiraaiServices';
import MiraaiWhatYouGet from './components/MiraaiWhatYouGet';
import MiraaiSimpleTruth from './components/MiraaiSimpleTruth';
import MiraaiCTA from './components/MiraaiCTA';
import MiraaiWhyChoose from './components/MiraaiWhyChoose';
import MiraaiComparison from './components/MiraaiComparison';
import MiraaiGrowthKiller from './components/MiraaiGrowthKiller';
import MiraaiTestimonials from './components/MiraaiTestimonials';
import MiraaiFAQ from './components/MiraaiFAQ';
import MiraaiFinalCTA from './components/MiraaiFinalCTA';

const Miraai = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const scrollContainerRef = useRef(null);

    const navItems = [
        { id: 'hero', label: 'Hero Section' },
        { id: 'services', label: 'What Exactly We Do' },
        { id: 'growthkiller', label: 'Who Needs Our Services' },
        { id: 'simpletruth', label: 'The Real Problem We Solve' },
        { id: 'whychoose', label: 'Why Choose Miraai' },
        { id: 'finalcta', label: 'Final CTA With Form Fill-Up' },
        { id: 'testimonials', label: 'Testimonials' },
        { id: 'faq', label: 'FAQ' },
    ];

    const handleSideMenuSelect = (item) => {
        const section = document.getElementById(item);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(item);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-black text-white font-sans">
            {/* Original Sidebar */}
            <Sidebar isOpen={true} />

            {/* Main Content Area */}
            <main ref={scrollContainerRef} className="flex-1 w-full min-w-0 flex flex-col overflow-y-auto bg-black scroll-smooth md:pl-[280px]">
                <PageHeader
                    title="Miraai"
                    showBackButton={true}
                    showPriceButton={true}
                    showHomeButton={true}
                />

                <div className="w-full">
                    <section id="hero" className="flex-1 flex flex-col items-center justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                        <MiraaiHero />
                    </section>


                    <section id="gallery"><MiraaiGallery /></section>
                    <section id="process"><MiraaiProcess containerRef={scrollContainerRef} /></section>
                    <section id="trust"><MiraaiTrust /></section>
                    <section id="showcase"><MiraaiShowcase /></section>
                    <section id="vision"><MiraaiVision /></section>
                    <section id="services"><MiraaiServices /></section>
                    <section id="whatyouget"><MiraaiWhatYouGet /></section>
                    <section id="simpletruth"><MiraaiSimpleTruth /></section>
                    <section id="cta"><MiraaiCTA /></section>
                    <section id="comparison"><MiraaiComparison /></section>
                    <section id="growthkiller"><MiraaiGrowthKiller /></section>
                    <section id="whychoose"><MiraaiWhyChoose /></section>
                    <section id="finalcta"><MiraaiFinalCTA /></section>
                    <section id="testimonials"><MiraaiTestimonials /></section>
                    <section id="faq"><MiraaiFAQ /></section>

                    {/* <MiraaiBenefits /> */}
                </div>


            </main>
        </div>
    );
};



export default Miraai;
