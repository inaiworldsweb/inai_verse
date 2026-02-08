import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import FooterLegalLine from '../../components/FooterLegalLine';
import MiraaiHero from './components/MiraaiHero';
import { EdInaiSidebar } from '../../features/EdInai/components/shared';
import logoImage from '../../assets/Inai Verse White Tred mark (1).png';

const Miraai = () => {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', label: 'Miraai Hero' },
        { id: 'videos', label: 'Professional Videos' },
        { id: 'visuals', label: 'Visuals Brand' },
        { id: 'using-ai', label: 'Using AI Technology' },
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
            {/* Sidebar component handles both mobile and desktop views */}
            <EdInaiSidebar
                logoImage={logoImage}
                items={navItems}
                onItemClick={handleSideMenuSelect}
                activeId={activeSection}
            />

            {/* Main Content Area */}
            <main className="flex-1 w-full min-w-0 overflow-y-auto bg-black">
                <PageHeader
                    title="Miraai"
                    showBackButton={true}
                    showPriceButton={true}
                    showHomeButton={true}
                />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-20 py-16 md:py-24">
                    <section id="hero">
                        <MiraaiHero />
                    </section>
                </div>

                {/* <FooterLegalLine /> */}
            </main>
        </div>
    );
};

export default Miraai;
