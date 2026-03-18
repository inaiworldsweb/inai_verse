import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import PageHeader from "../../components/PageHeader";
import SideMenu from "../../components/SideMenu";
import logoImage from "../../assets/Inai Verse White Tred mark (1).png";
import MiraaiPrice from "./MiraaiPrice";

// Components Imports
import MiraaiHero from "./components/MiraaiHero";
import MiraaiGallery from "./components/MiraaiGallery";
import MiraaiProcess from "./components/MiraaiProcess";

import MiraaiShowcase from "./components/MiraaiShowcase";
import MiraaiVision from "./components/MiraaiVision";
import MiraaiServices from "./components/MiraaiServices";
import MiraaiBenefits from "./components/MiraaiBenefits";
import MiraaiWhatYouGet from "./components/MiraaiWhatYouGet";
import MiraaiSimpleTruth from "./components/MiraaiSimpleTruth";
import MiraaiCTA from "./components/MiraaiCTA";
import MiraaiComparison from "./components/MiraaiComparison";
import MiraaiGrowthKiller from "./components/MiraaiGrowthKiller";
import MiraaiWhyChoose from "./components/MiraaiWhyChoose";
import MiraaiFinalCTA from "./components/MiraaiFinalCTA";
import MiraaiTestimonials from "./components/MiraaiTestimonials";
import MiraaiFAQ from "./components/MiraaiFAQ";
import MiraaiWhoNeeds from "./components/MiraaiWhoNeeds";
import SiteFooter from "../../components/SiteFooter";
import SynProHeroSection from "./components/SynProHeroSection";
import MiraaiScrollbar from "./components/MiraaiScrollbar";

// Navigation configuration - All components included
const navConfig = [
  { id: "hero", label: "Hero section" },

  { id: " process", label: "Our Process" },

  { id: "showcase", label: "Explore Portfolio" },
  { id: "services", label: "What exactly we do" },
  { id: "whatyouget", label: "What you get" },

  { id: "whoneeds", label: "Who needs our services" },
  { id: "cta", label: "Get Started" },
  { id: "comparison", label: "Real Problem We Solve" },
 
  { id: "whychoose", label: "Why choose miraai" },
  { id: "finalcta", label: "CTA Section" },
  
  { id: "faq", label: "FAQ" },
];

const Miraai = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Extract labels for the SideMenu component
  const navLabels = navConfig.map((item) => item.label);

  const handleSideMenuClick = (label) => {
    setIsMobileMenuOpen(false);
    const item = navConfig.find((i) => i.label === label);
    if (item) {
      setTimeout(() => {
        const section = document.getElementById(item.id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const handleBack = () => navigate(-1);
  const handleGoToPrice = () => navigate("/MiraaiPrice");

  return (
    <MiraaiScrollbar global={true}>
      <div className="flex min-h-screen bg-black text-white font-sans tracking-wide">
        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <aside
              data-lenis-prevent
              className="
                            flex flex-col w-[280px] max-w-[85vw] h-full bg-black 
                            shadow-2xl
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
                                transition-colors z-20
                            "
                aria-label="Close navigation menu"
              >
                <HiX className="w-5 h-5" />
              </button>

              {/* Mobile Sidebar Content - Separated Header and Scrollable Content */}
              <div className="pt-28 px-4 pb-4">
                <div className="flex items-center justify-center">
                  <Link to="/">
                    <img
                      src={logoImage}
                      alt="INAI Verse logo"
                      className="w-full max-w-[80px] h-auto"
                    />
                  </Link>
                </div>
              </div>

              <div
                className="flex-1 overflow-y-auto hide-scrollbar overscroll-contain px-4 pb-10"
                data-lenis-prevent
              >
                <SideMenu
                  items={navLabels}
                  variant="login"
                  onSelectItem={handleSideMenuClick}
                />
              </div>
            </aside>
          </div>
        )}

        {/* Desktop Sidebar - Hidden on mobile */}
        <aside className="hidden lg:flex lg:flex-col w-[280px] bg-black sticky top-0 h-screen overflow-hidden border-r border-white/30">
          <div className="p-6 xl:p-8 flex flex-col items-center justify-center">
            <Link to="/">
              <img
                src={logoImage}
                alt="INAI Verse logo"
                className="w-full max-w-[100px] h-auto"
              />
            </Link>
          </div>

          <div
            className="flex-1 overflow-y-auto hide-scrollbar overscroll-contain px-6 xl:px-8 pb-10"
            data-lenis-prevent
          >
            <SideMenu
              items={navLabels}
              variant="login"
              onSelectItem={handleSideMenuClick}
            />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 w-full min-w-0 flex flex-col bg-black scroll-smooth [&>div>section]:!my-0 [&>div>section]:!py-0 [&>div>section]:scroll-mt-24">
          <PageHeader
            title="Miraai"
            showTitleText={false}
            showBackButton={true}
            showPriceButton={true}
            showHomeButton={true}
            showMenuButton={true}
            onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onBackClick={handleBack}
            onPriceClick={handleGoToPrice}
            onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            showBorder={false}
            headerClassName="bg-gradient-to-r from-[#141414]/90 via-white/5 to-[#141414]/90 backdrop-blur-xl"
          />

          <div className="w-full font-['Inter'] space-y-0">
            <section
              id="hero"
              className="flex-1 flex flex-col items-center justify-center max-w-[1400px] mx-auto "
            >
              <MiraaiHero />
            </section>

            <section id="gallery" className="!mt-0">
              <MiraaiGallery />
            </section>
            <section id="process" className="!mt-0">
              <MiraaiProcess />
            </section>

            <section id="showcase" className="!mt-0">
              <MiraaiShowcase />
            </section>
            <section id="synprohero" className="!mt-0">
              <SynProHeroSection />
            </section>
            {/* <section id="vision" className="!mt-0"><MiraaiVision /></section> */}
            <section id="services" className="!mt-0">
              <MiraaiServices />
            </section>
            {/* <section id="benefits" className="!mt-0"><MiraaiBenefits /></section> */}
            <section id="whatyouget" className="!mt-0">
              <MiraaiWhatYouGet />
            </section>
            <section id="simpletruth" className="!mt-0">
              <MiraaiSimpleTruth />
            </section>
            <section id="whoneeds" className="!mt-0">
              <MiraaiWhoNeeds />
            </section>
            <section id="cta" className="!mt-0">
              <MiraaiCTA />
            </section>
            <section id="comparison" className="!mt-0">
              <MiraaiComparison />
            </section>
            <section id="growthkiller" className="!mt-0">
              <MiraaiGrowthKiller />
            </section>
            <section id="whychoose" className="!mt-0">
              <MiraaiWhyChoose />
            </section>
            <section id="finalcta" className="!mt-0">
              <MiraaiFinalCTA />
            </section>
            <section id="testimonials" className="!mt-0">
              <MiraaiTestimonials />
            </section>
            <section id="faq" className="!mt-0">
              <MiraaiFAQ />
            </section>
            <section id="footer" className="!mt-0">
              <SiteFooter />
            </section>
          </div>
        </main>
      </div>
    </MiraaiScrollbar>
  );
};

export default Miraai;
