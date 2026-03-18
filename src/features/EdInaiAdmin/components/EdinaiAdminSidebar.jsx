import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../../components/SideMenu";
import logoImage from "../../../assets/Inai Verse White Tred mark (1).png";
import { HiX } from "react-icons/hi";
import { LayoutDashboard, UserCircle } from "lucide-react"; // Icons for portals

const navItems = [
  "Hero Section",
  "edinai Admin portal",
  "Admin Dashboard",
  "Key Features",
  "Institution Benefits",
  "Education Providers",
  "How to Set Up Ed-INAI",
  "CTA Section ",
  "FAQ",
];

const EdinaiAdminSidebar = ({ isOpen, setIsOpen }) => {
  const handleSideMenuClick = (item) => {
    const sectionMap = {
      "Hero Section": "hero-section",
      "edinai Admin portal": "admin-portal",
      "Admin Dashboard": "admin-dashboard",
      "Key Features": "key-features",
      "Institution Benefits": "institution-benefits",
      "Education Providers": "education-providers",
      "How to Set Up Ed-INAI": "setup-guide",
      "CTA Section ": "cta-section",
      "FAQ": "faq-section",
    };

    const sectionId = sectionMap[item];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        // Offset for the fixed/sticky navbar (approx 80px)
        const navbarHeight = 80;
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-60 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <aside
            className="w-[280px] max-w-[85vw] h-full bg-black border-r border-white/20 shadow-2xl overflow-y-auto flex flex-col animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Inside Sidebar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-14 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <HiX className="w-6 h-6" />
            </button>

            <div className="pt-12 px-6 flex justify-center md:flex">
              <Link to="/">
                <img
                  src={logoImage}
                  alt="Logo"
                  className="w-full max-w-[90px] h-auto"
                />
              </Link>
            </div>

            {/* Navigation Links with Lines */}
            <div className="mt-5 px-4 flex-1">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <div key={item} className="w-full">
                    <button
                      onClick={() => handleSideMenuClick(item)}
                      className="w-full text-left py-3 px-2 text-[#ccc] hover:text-white text-sm font-medium transition-colors"
                    >
                      {item}
                    </button>
                    {/* 50% Opacity White Line */}
                    <div className="h-px w-full bg-[#757474]" />
                  </div>
                ))}
              </nav>
            </div>

            {/* Bottom Portals Section */}
            <div className="p-6 bg-white/5 border-t md:hidden border-white/10 space-y-3">
              <Link
                to="/edinai-student"
                className="flex items-center gap-3 w-full  bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all font-medium text-sm shadow-lg shadow-blue-900/20"
                onClick={() => setIsOpen(false)}
              >
                <UserCircle size={18} />
                Student Portal
              </Link>
              <Link
                to="/edinai-admin"
                className="flex items-center gap-3 w-full bg-white/10 hover:bg-white/20 text-white p-3 rounded-xl transition-all border border-white/10 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                <LayoutDashboard size={18} />
                Admin Portal
              </Link>
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex border-r border-white/30 lg:flex-col w-[280px] bg-black p-6 xl:p-8 h-screen fixed left-0 top-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center mb-8">
          <Link to="/">
            <img
              src={logoImage}
              alt="Logo"
              className="w-full max-w-[100px] h-auto"
            />
          </Link>
        </div>

        <div className="flex-1">
          <SideMenu
            items={navItems}
            variant="login"
            onSelectItem={handleSideMenuClick}
          />
        </div>

        {/* Desktop Bottom Portals */}
        <div className="mt-auto pt-6 md:hidden border-t border-white/10 space-y-2">
          <Link
            to="/edinai-student"
            className="block text-white/60 hover:text-blue-400 text-sm py-2 transition-colors"
          >
            Student Portal
          </Link>
          <Link
            to="/edinai-admin"
            className="block text-white/60 hover:text-blue-400 text-sm py-2 transition-colors"
          >
            Admin Portal
          </Link>
        </div>
      </aside>
    </>
  );
};

export default EdinaiAdminSidebar;
