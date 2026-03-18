import React, { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

const OffCanvasMenu = ({ isOpen, onClose }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleEmailClick = () => {
    window.location.href = "mailto:support.inaiverse.com";
  };

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  ];

  const products = [
    { name: "EdInai", href: "/edinai" },
    { name: "Miraai", href: "/miraai" },
    { name: "Vantage AI", href: "/community" },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-60"
        onClick={onClose}
      />

      {/* Off Canvas Menu */}
      <aside
        className="fixed top-0 right-0 h-full w-80 bg-black border-l border-white/10 shadow-2xl z-70 transform transition-transform duration-300 ease-in-out"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-white text-lg font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Our Products Section */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-semibold mb-4">
              Our Products
            </h3>
            <nav className="space-y-2">
              {products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  className="block text-white/80 hover:text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-all"
                  onClick={onClose}
                >
                  {product.name}
                </a>
              ))}
            </nav>
          </div>

        

          {/* Contact Us Section */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <button
              onClick={handleEmailClick}
              className="text-white/80 hover:text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-all text-left w-full"
            >
              support.inaiverse.com
            </button>
          </div>

            {/* Social Media Icons */}
          <div className="mb-8">
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default OffCanvasMenu;
