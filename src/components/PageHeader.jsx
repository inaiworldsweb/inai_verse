import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Mirrai.svg";
// Import your OffCanvasMenu component
import OffCanvasMenu from "./OffCanvasMenu"; 

function PageHeader({
  title = "",
  breadcrumbs = [],
  showBackButton = false,
  showLogo = true,
  logoSrc = logo,
  logoAlt = "Miraai logo",
  logoClassName = "h-[34px] md:pe-0 pe-5 -ms-4 md:-ms-0 md:h-[44px] w-auto max-w-[130px] object-contain",
  titleWrapperClassName = "flex items-center gap-5",
  titleClassName = "text-white font-medium text-base",
  showTitleText = true,
  showPriceButton = true,
  showHomeButton = true,
  showMenuButton = true,
  onBackClick,
  onPriceClick,
  onMenuClick,
  onLogoClick,
  showBorder = true,
  headerClassName = "bg-black/80 backdrop-blur-md",
}) {
  const navigate = useNavigate();
  
  // 1. Menu open state define ki
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBack = () => {
    navigate("/");
  };

  const handlePrice = () => {
    if (onPriceClick) {
      onPriceClick();
    } else {
      navigate("/pricing");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  // 2. Menu handle logic update kiya (Same as your reference)
  const handleMenu = () => {
    // Agar screen tablet/desktop hai tabhi OffCanvas khulega
    if (window.innerWidth >= 768) {
      setIsMenuOpen(true);
    }

    // Original onMenuClick call hota rahega (mobile sidebar ke liye)
    if (onMenuClick) {
      onMenuClick();
    }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      navigate("/edinai");
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 flex !items-center justify-between py-3 ${headerClassName} ${showBorder ? "border-b border-white/10" : ""}`}
      >
        {/* Left Section - Back Button, Title, Breadcrumbs */}
        <div className="flex items-center gap-4">
          {(title || (showLogo && logoSrc)) && (
            <div className={titleWrapperClassName}>
              {(breadcrumbs.length > 0 || title) && (
                <span
                  onClick={() => navigate("/")}
                  className="text-white text-[40px] md:text-[50px] cursor-pointer ps-3 pb-1 transition-all hover:opacity-70"
                  aria-hidden="true"
                >
                  ‹
                </span>
              )}
              {showLogo && logoSrc && (
                <img
                  src={logoSrc}
                  alt={logoAlt}
                  className={`${logoClassName} cursor-pointer`}
                  onClick={handleLogoClick}
                />
              )}
            </div>
          )}

          {breadcrumbs.length > 0 && (
            <nav className="flex items-center gap-1" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className="text-white pb-4 text-[30px] md:text-[50px]"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                  <button
                    type="button"
                    className="bg-transparent border-none text-white/70 cursor-pointer text-sm hover:text-white transition-colors"
                    onClick={crumb.onClick}
                  >
                    {crumb.label}
                  </button>
                </div>
              ))}
            </nav>
          )}
        </div>

        {/* Right Section - Action Buttons */}
        <div className="flex items-center gap-4">
          {showPriceButton && (
            <div className="group relative flex items-center gap-2 bg-white/[0.10] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 rounded-[7px] md:rounded-[10px] text-sm font-medium transition-all duration-300 active:scale-95 shadow-lg shadow-black/20">
              <button
                type="button"
                className="relative px-5 text-[18px] py-1.5 flex items-center gap-2 bg-transparent text-white  transition-all duration-300"
                onClick={handlePrice}
              >
                <span>Price</span>
              </button>
            </div>
          )}

          {showHomeButton && (
            <button
              type="button"
              className="bg-transparent border-none text-white cursor-pointer hover:text-white/80 transition-colors"
              aria-label="Go to home"
              onClick={handleHome}
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M3 11l9-8 9 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 10v10h14V10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {showMenuButton && (
            <button
              type="button"
              className="bg-transparent border-none text-white pe-1 cursor-pointer hover:text-white/80 transition-colors"
              aria-label="Open menu"
              onClick={handleMenu}
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <line x1="5" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth="1.8" />
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" />
                <line x1="5" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          )}
        </div>
      </header>

      {/* 3. Off Canvas Menu Component Yahan add kiya */}
      <OffCanvasMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default PageHeader;