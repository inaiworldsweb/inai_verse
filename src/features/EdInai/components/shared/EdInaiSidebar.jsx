import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiX, HiMenu } from 'react-icons/hi';

/**
 * EdInaiSidebar - Responsive sidebar component for EdInai pages
 * 
 * @param {Object} props
 * @param {string} props.logoImage - Logo image source
 * @param {Array} props.items - Sidebar navigation items
 * @param {Function} props.onItemClick - Callback when item is clicked
 * @param {string} props.activeId - Currently active section ID
 */
const EdInaiSidebar = ({ logoImage, items = [], onItemClick, activeId }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
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

    // Sidebar content (shared between mobile and desktop)
    const SidebarContent = ({ isMobile = false }) => (
        <div className={`flex flex-col h-full ${isMobile ? 'pt-16' : ''}`}>
            {/* Logo */}
            <div className="flex items-center justify-center mb-6 px-6">
                <Link to="/edinai">
                    <img
                        src={logoImage}
                        alt="INAI Verse logo"
                        className="w-full max-w-[80px] md:max-w-[100px] h-auto"
                    />
                </Link>
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-col px-4 flex-1 overflow-y-auto">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => handleItemClick(item.id)}
                        className={`
                            flex items-center justify-between py-3 px-2 
                            bg-transparent border-none cursor-pointer 
                            transition-colors duration-200 text-left w-full 
                            text-sm hover:text-white rounded-lg
                            hover:bg-white/5
                            ${item.active || activeId === item.id
                                ? 'text-white bg-white/5'
                                : 'text-white/70'
                            }
                        `}
                        type="button"
                    >
                        <span className="leading-tight pr-2">{item.label}</span>
                        <span aria-hidden="true" className="text-white/50 flex-shrink-0">›</span>
                    </button>
                ))}
            </nav>

        </div>
    );

    return (
        <>
            {/* Mobile Menu Button - Fixed position */}
            <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="
                    lg:hidden fixed top-4 left-4 z-50
                    p-2.5 bg-[#111] border border-white/10 
                    rounded-xl text-white
                    hover:bg-white/10 transition-colors
                    shadow-lg
                "
                aria-label="Open navigation menu"
            >
                <HiMenu className="w-5 h-5" />
            </button>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {/* Mobile Sidebar Panel */}
                    <aside
                        className="
                            w-[280px] max-w-[85vw] h-full bg-[#111] 
                            border-r border-white/10 shadow-2xl
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
                                transition-colors
                            "
                            aria-label="Close navigation menu"
                        >
                            <HiX className="w-5 h-5" />
                        </button>

                        <SidebarContent isMobile />
                    </aside>
                </div>
            )}

            {/* Desktop Sidebar - Sticky */}
            <aside className="
                hidden lg:flex lg:flex-col
                w-[280px] bg-[#111] 
                p-6 xl:p-8
                sticky top-0 h-screen 
                overflow-y-auto
                border-r border-white/10
            ">
                <SidebarContent />
            </aside>
        </>
    );
};

export default EdInaiSidebar;
