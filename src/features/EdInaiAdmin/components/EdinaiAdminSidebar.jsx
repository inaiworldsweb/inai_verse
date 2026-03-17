import React from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../../components/SideMenu";
import logoImage from "../../../assets/Inai Verse White Tred mark (1).png";
import { HiX } from "react-icons/hi";

const navItems = [
  "What is edInai?",
  "Meet our faculties",
  "Admin View \u2013 For Education Centres",
  "Student View \u2013 For Learners",
  "Teach in Every Way Your Students Want to Learn",
];

const EdinaiAdminSidebar = ({ isOpen, setIsOpen }) => {
  const handleSideMenuClick = (item) => {
    const sectionMap = {
      "What is edInai?": "what-is-edinai",
      "Meet our faculties": "meet-faculties",
      "Admin View \u2013 For Education Centres": "admin-view",
      "Student View \u2013 For Learners": "student-view",
      "Teach in Every Way Your Students Want to Learn": "teach",
    };

    const sectionId = sectionMap[item];
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
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
            className="w-70 max-w-[85vw] h-full bg-black border-r border-white/20 shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Inside Sidebar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-14 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <HiX className="w-6 h-6" />
            </button>

            <div className="pt-16 px-4">
              <div className="flex items-center justify-center mb-6 md:flex">
                <Link to="/">
                  <img
                    src={logoImage}
                    alt="Logo"
                    className="w-full max-w-20 h-auto"
                  />
                </Link>
              </div>
              <SideMenu
                items={navItems}
                variant="login"
                onSelectItem={handleSideMenuClick}
              />
            </div>
          </aside>
        </div>
      )}

      {/* Desktop Sidebar - Always visible on LG */}
      <aside className="hidden lg:flex border-r border-white/30 lg:flex-col w-70 bg-black p-6 xl:p-8 h-screen fixed left-0 top-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center mb-4">
          <Link to="/">
            <img
              src={logoImage}
              alt="Logo"
              className="w-full max-w-25 h-auto"
            />
          </Link>
        </div>
        <SideMenu
          items={navItems}
          variant="login"
          onSelectItem={handleSideMenuClick}
        />
      </aside>
    </>
  );
};

export default EdinaiAdminSidebar;
