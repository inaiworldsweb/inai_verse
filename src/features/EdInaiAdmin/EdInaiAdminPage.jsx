import { useState, useEffect } from 'react';
import EdInaiNavbar from "../EdInai/components/EdInaiNavbar";
import EdinaiAdminSidebar from "./components/EdinaiAdminSidebar";
import AdminHero from "./components/AdminHero";
import EdInaiCommandPanel from "./components/EdInaiCommandPanel";
import EdinaiKeyFeature from "./components/EdinaiKeyFeature";
import EdInaiAdminFAQ from "./components/EdInaiAdminFAQ";
import EdinaiSiteFooter from "../EdInai/components/EdinaiSiteFooter";

const EdInaiAdminPage = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            <EdinaiAdminSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <div className="lg:ml-[280px] flex-1">
                <EdInaiNavbar
                    title="edInai"
                    showBackButton={true}
                    showPriceButton={true}
                    showHomeButton={true}
                    showMenuButton={true}
                    showBorder={false}
                    onMenuClick={() => setIsSidebarOpen(true)}
                    headerClassName="bg-gradient-to-r from-[#141414]/90 via-white/5 to-[#141414]/90 backdrop-blur-xl"
                />

                <main className="overflow-y-auto bg-black scrollbar-hide">
                    <AdminHero />
                    <EdInaiCommandPanel />
                    <EdinaiKeyFeature />
                    <EdInaiAdminFAQ />

                    <EdinaiSiteFooter />

                </main>
            </div>
        </div>
    );
};

export default EdInaiAdminPage;
