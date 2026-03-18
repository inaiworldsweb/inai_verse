import { useState, useEffect } from "react";
import EdInaiNavbar from "../EdInai/components/EdInaiNavbar";
import EdinaiAdminSidebar from "./components/EdinaiAdminSidebar";
import AdminHero from "./components/AdminHero";
import EdInaiInside from "./components/EdInaiInside";
import EdInaiCommandPanel from "./components/EdInaiCommandPanel";
import EdInaiInstitutionBenefits from "./components/EdInaiInstitutionBenefits";
import EdinaiKeyFeature from "./components/EdinaiKeyFeature";
import EdInaiEducationProvider from "./components/EdInaiEducationProvider";
import EdInaiAdminTrasform from "./components/EdInaiAdminTrasform";
import EDInaiHowTosetUp from "./components/EDInaiHowTosetUp";

import EdInaiAdminFAQ from "./components/EdInaiAdminFAQ";
import EdinaiSiteFooter from "../EdInai/components/EdinaiSiteFooter";

const EdInaiAdminPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
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
          <AdminHero id="hero-section" />
          <EdInaiInside id="admin-portal" />
          <EdInaiCommandPanel id="admin-dashboard" />
          <EdinaiKeyFeature id="key-features" />
          <EdInaiInstitutionBenefits id="institution-benefits" />
          <EdInaiEducationProvider id="education-providers" />
          <EDInaiHowTosetUp id="setup-guide" />
          <EdInaiAdminTrasform id="cta-section" />
          <EdInaiAdminFAQ id="faq-section" />
          <EdinaiSiteFooter />
        </main>
      </div>
    </div>
  );
};

export default EdInaiAdminPage;
