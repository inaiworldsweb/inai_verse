import React, { useState } from "react"; // 1. useState import kiya 
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../../assets/EdInai Logo.png";
import OffCanvasMenu from "../../../components/OffCanvasMenu";

const EdInaiNavbar = ({
  breadcrumbs = [],
  showLogo = true,
  logoSrc = logo,
  logoAlt = "EdInai logo",
  logoClassName = "h-[28px] md:h-[38px] w-auto object-contain",
  showPriceButton = true,
  showHomeButton = true,
  showMenuButton = true,
  showBackButton = false,
  onPriceClick,
  onMenuClick,
  onLogoClick,
  showBorder = true,
  headerClassName = "bg-black/80 backdrop-blur-md",
}) => {
  const navigate = useNavigate();

  // 3. Menu state manage karne ke liye
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (defaultPath, customHandler) => {
    if (customHandler) customHandler();
    else navigate(defaultPath);
  };

  const handleBack = () => {
    navigate(-1);
  };

  // 4. Menu handle logic: Desktop/Tablet pe OffCanvas, Mobile pe original sidebar
  const handleMenuAction = () => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(true);
    }

    // Mobile sidebar ke liye original prop call karein
    if (onMenuClick) {
      onMenuClick();
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 transition-all ${headerClassName} ${
          showBorder ? "border-b border-white/10" : ""
        }`}
      >
        {/* LEFT: Back Button, Logo & Breadcrumbs */}
        <div className="flex items-center gap-2 md:gap-3">
          {showBackButton && (
            <button
              onClick={handleBack}
              className="flex items-center mt-3 justify-center text-white/80 hover:text-white transition-all active:scale-90"
              aria-label="Go back"
            >
              <BackIcon />
            </button>
          )}

          {showLogo && (
            <img
              src={logoSrc}
              alt={logoAlt}
              className={`${logoClassName} cursor-pointer hover:opacity-80 active:scale-95 transition-all`}
              onClick={() => {
                if (window.location.pathname === "/edinai") {
                  window.location.reload();
                } else {
                  window.location.href = "/edinai";
                }
              }}
            />
          )}

          {breadcrumbs.length > 0 && (
            <nav
              className="hidden sm:flex items-center"
              aria-label="Breadcrumb"
            >
              {breadcrumbs.map((crumb, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-white/20 text-lg font-light px-2 select-none">
                    /
                  </span>
                  <button
                    onClick={crumb.onClick}
                    className="text-white/60 text-sm hover:text-white transition-colors tracking-wide"
                  >
                    {crumb.label}
                  </button>
                </div>
              ))}
            </nav>
          )}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Student Portal Link */}
          <button
            onClick={() => navigate("/edinai-student")}
            className={`hidden md:block text-[13px] md:text-[14px] font-medium transition-colors ${
              location.pathname.includes("/edinai-student")
                ? "text-white border-b-2 border-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            Student Portal
          </button>

          {/* Admin Portal Link */}
          <button
            onClick={() => navigate("/edinai-admin")}
            className={`hidden md:block text-[13px] md:text-[14px] font-medium transition-colors ${
              location.pathname.includes("/edinai-admin")
                ? "text-white border-b-2 border-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            Admin Portal
          </button>

          {showPriceButton && (
            <button
              onClick={() => handleClick("/pricing", onPriceClick)}
              className="group relative flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 px-4 md:px-6 py-1.5 md:py-2 rounded-[10px] text-[13px] md:text-[15px] font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20"
            >
              Price
            </button>
          )}

          {showHomeButton && (
            <button
              onClick={() => navigate("/")}
              className="text-white/80 hover:text-white transition-transform active:scale-90"
              aria-label="Home"
            >
              <HomeIcon />
            </button>
          )}

          {showMenuButton && (
            <button
              onClick={handleMenuAction}
              className="text-white/80 hover:text-white transition-transform active:scale-90 p-1"
              aria-label="Menu"
            >
              <MenuIcon />
            </button>
          )}
        </div>
      </header>

      {/* 5. Off Canvas Menu Component */}
      <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

// --- Icons Sub-components (Same as before) ---
const BackIcon = () => (
  <svg
    className="w-5 h-5 md:w-6 md:h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const HomeIcon = () => (
  <svg
    className="w-5 h-5 md:w-5.5 md:h-5.5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
  </svg>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export default EdInaiNavbar;
