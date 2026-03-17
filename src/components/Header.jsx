import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/Inai Verse White Tred mark (1).png";
import OffCanvasMenu from "./OffCanvasMenu";

function Header({ onMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    // Only open the off-canvas menu for tablet and desktop sizes
    if (window.innerWidth >= 768) {
      setIsMenuOpen(true);
    }
    
    // Always call the original onMenuClick for sidebar behavior
    if (typeof onMenuClick === "function") {
      onMenuClick();
    }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-7 left-0 right-0 h-20 bg-black z-50">
        <div className="flex h-full items-start justify-between md:justify-end px-10 pt-4">
          {/* Mobile Logo (Left Side) */}
          <Link to="/" className="md:hidden flex items-center">
            <img src={logoImage} alt="INAI Verse" className="h-10 w-auto" />
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Link
              to="/community"
              className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition font-['Inter']"
            >
              <span>Community</span>
            </Link>

            <button
              onClick={handleMenuClick}
              className="w-9 h-9 flex items-center justify-center rounded-md border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Off Canvas Menu */}
      <OffCanvasMenu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </>
  );
}

export default Header;
