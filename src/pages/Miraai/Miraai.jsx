import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import FooterLegalLine from '../../components/FooterLegalLine';
import { EdInaiSidebar } from '../../features/EdInai/components/shared';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';
import MiraaiHero from './components/MiraaiHero';
import MiraaiGallery from './components/MiraaiGallery';
import MiraaiProcess from './components/MiraaiProcess';
import MiraaiTrust from './components/MiraaiTrust';
import MiraaiBenefits from './components/MiraaiBenefits';
import MiraaiShowcase from './components/MiraaiShowcase';
import MiraaiVision from './components/MiraaiVision';
import MiraaiServices from './components/MiraaiServices';
import MiraaiWhatYouGet from './components/MiraaiWhatYouGet';
import MiraaiSimpleTruth from './components/MiraaiSimpleTruth';
import MiraaiCTA from './components/MiraaiCTA';
import MiraaiComparison from './components/MiraaiComparison';

const Miraai = () => {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', label: 'Miraai' },
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
            {/* Sidebar component handles both mobile and desktop views */}
            <EdInaiSidebar
                logoImage={logoImage}
                items={navItems}
                onItemClick={handleSideMenuSelect}
                activeId={activeSection}
            />

            {/* Main Content Area */}
            <main className="flex-1 w-full min-w-0 flex flex-col overflow-y-auto bg-black scroll-smooth">
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


                    <MiraaiGallery />
                    <MiraaiProcess />
                    <MiraaiTrust />
                    <MiraaiShowcase />
                    <MiraaiVision />
                    <MiraaiServices />
                    <MiraaiWhatYouGet />
                    <MiraaiSimpleTruth />
                    <MiraaiCTA />
                    <MiraaiComparison />

                    {/* <MiraaiBenefits /> */}

                    {/* <MiraaiFAQ /> */}
                </div>


            </main>
        </div>
    );
};



export default Miraai;
