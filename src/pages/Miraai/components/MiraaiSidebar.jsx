import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiX, HiMenu } from 'react-icons/hi';

const MiraaiSidebar = ({ logoImage, items = [], onItemClick, activeId }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const handleItemClick = (id) => {
        if (onItemClick) {
            onItemClick(id);
        }
        setIsMobileMenuOpen(false);
    };

    const SidebarContent = ({ isMobile = false }) => (
        <div className={`flex flex-col h-full ${isMobile ? 'pt-12' : 'pt-20'}`}>
            {/* Logo Section - Centered and prominent */}
            <div className="flex items-center justify-center mb-24 px-8">
                <Link to="/">
                    <img
                        src={logoImage}
                        alt="INAI Verse logo"
                        className="w-full max-w-[160px] md:max-w-[200px] h-auto pointer-events-none select-none"
                    />
                </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col px-6 flex-1 space-y-3 overflow-hidden">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`
                            flex items-center justify-between py-4 px-6 
                            bg-transparent border-none cursor-pointer 
                            transition-all duration-300 text-left w-full 
                            rounded-xl group
                            ${activeId === item.id
                                ? 'bg-white/5 text-white'
                                : 'text-[#A1A1A1] hover:text-white hover:bg-white/5'
                            }
                        `}
                        type="button"
                    >
                        <span className={`text-[18px] md:text-[20px] font-bold tracking-tight ${activeId === item.id ? 'opacity-100' : 'opacity-100'}`}>
                            {item.label}
                        </span>
                        <span aria-hidden="true" className={`
                            text-xl flex-shrink-0 transition-transform duration-300 font-light
                            ${activeId === item.id ? 'text-white' : 'text-white/20 group-hover:text-white'}
                        `}>›</span>
                    </button>
                ))}
            </nav>
        </div>
    );

    return (
        <>
            {/* Mobile Menu Button - Fixed position */}
            {/* ... (mobile menu button code remains same) ... */}
            <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="
                    lg:hidden fixed top-6 left-6 z-50
                    p-3 bg-black/50 backdrop-blur-xl border border-white/10 
                    rounded-2xl text-white
                    hover:bg-white/10 transition-all active:scale-95
                    shadow-2xl
                "
                aria-label="Open navigation menu"
            >
                <HiMenu className="w-6 h-6" />
            </button>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-[100] bg-black/90 backdrop-blur-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {/* Mobile Sidebar Panel */}
                    <aside
                        className="
                            w-[320px] max-w-[90vw] h-full bg-black
                            border-r border-white/5 shadow-[0_0_50px_rgba(0,0,0,1)]
                            animate-in slide-in-from-left duration-500 ease-out
                            overflow-hidden
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="
                                absolute top-6 right-6 p-2.5 
                                text-white/50 hover:text-white 
                                hover:bg-white/10 rounded-xl
                                transition-all active:scale-90
                            "
                            aria-label="Close navigation menu"
                        >
                            <HiX className="w-6 h-6" />
                        </button>

                        <SidebarContent isMobile />
                    </aside>
                </div>
            )}

            {/* Desktop Sidebar - Sticky */}
            <aside className="
                hidden lg:flex lg:flex-col
                w-[320px] bg-black
                p-10
                sticky top-0 h-screen 
                overflow-hidden
                border-r border-white/5
            ">
                <SidebarContent />
            </aside>
        </>
    );
};

export default MiraaiSidebar;
