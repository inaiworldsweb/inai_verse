import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiX, HiMenu } from 'react-icons/hi';

const EdInaiSidebar = ({ logoImage, items = [], onItemClick, activeId }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleItemClick = (id) => {
        if (onItemClick) onItemClick(id);
        setIsMobileMenuOpen(false);
    };

    const SidebarContent = ({ isMobile = false }) => (
        <div className={`flex flex-col h-full ${isMobile ? 'pt-10' : 'pt-12'}`}>
            {/* Logo Section - Left Aligned as per image */}
            <div className="flex items-center mb-16 px-6">
                <Link to="/">
                    <img
                        src={logoImage}
                        alt="INAI Verse"
                        className="w-full max-w-[120px] h-auto pointer-events-none select-none"
                    />
                </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col flex-1 overflow-y-auto no-scrollbar">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`
                            flex items-center justify-between py-4 px-6 
                            bg-transparent border-none cursor-pointer 
                            transition-all duration-200 text-left w-full 
                            group
                            ${activeId === item.id || item.active
                                ? 'text-white'
                                : 'text-gray-400 hover:text-white'
                            }
                        `}
                        type="button"
                    >
                        {/* Label - Reduced font weight to match image */}
                        <span className="text-[14px] font-medium tracking-wide">
                            {item.label}
                        </span>

                        {/* Chevron Icon - Styled as a small arrow on the right */}
                        <span className={`
                            text-[14px] transition-transform duration-300 ml-4
                            ${activeId === item.id || item.active ? 'text-white translate-x-1' : 'text-gray-600 group-hover:text-white group-hover:translate-x-1'}
                        `}>
                            ›
                        </span>
                    </button>
                ))}
            </nav>
        </div>
    );

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden fixed top-6 left-6 z-50 p-2 text-white"
                aria-label="Open menu"
            >
                <HiMenu className="w-6 h-6" />
            </button>

            {/* Mobile Sidebar */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[100] bg-black">
                    <aside className="w-full h-full bg-black">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 p-2 text-white/50"
                        >
                            <HiX className="w-6 h-6" />
                        </button>
                        <SidebarContent isMobile />
                    </aside>
                </div>
            )}

            {/* Desktop Sidebar - Matching the Screenshot precisely */}
            <aside className="
                hidden lg:flex lg:flex-col
                w-[280px] bg-black
                sticky top-0 h-screen 
                overflow-hidden
                border-r border-white/10
            ">
                <SidebarContent />
            </aside>
        </>
    );
};

export default EdInaiSidebar;