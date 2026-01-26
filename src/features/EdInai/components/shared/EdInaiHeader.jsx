import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiHome, HiMenu } from 'react-icons/hi';

/**
 * EdInaiHeader - Shared responsive header component for EdInai Admin and Student pages
 * 
 * @param {Object} props
 * @param {'admin' | 'student'} props.activeView - Currently active view (admin or student)
 * @param {Array} props.menuItems - Optional custom menu items for the dropdown
 */
const EdInaiHeader = ({ activeView = 'admin', menuItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Default menu items
    const defaultMenuItems = [
        { label: 'Ed-INAI Home', to: '/edinai' },
        { label: activeView === 'admin' ? 'Student View' : 'Admin View', to: activeView === 'admin' ? '/edinai-student' : '/edinai-admin' },
        { label: 'Pricing', to: '/pricing' },
    ];

    const items = menuItems || defaultMenuItems;

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10">
            {/* First Row - Main Breadcrumbs */}
            <div className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-8 md:py-4">
                {/* Breadcrumb Navigation - Responsive */}
                <nav className="flex items-center gap-1.5 md:gap-2 min-w-0 flex-1" aria-label="Breadcrumb">
                    <span className="text-white/50 hidden sm:inline" aria-hidden="true">›</span>
                    <Link
                        to="/edinai"
                        className="text-white font-medium text-sm md:text-base hover:text-white/80 transition-colors whitespace-nowrap"
                    >
                        Edinai
                    </Link>
                    <span className="text-white/50" aria-hidden="true">›</span>
                    <Link
                        to="/edinai-detail"
                        className="text-white/70 text-xs md:text-sm hover:text-white transition-colors underline underline-offset-4 truncate max-w-[120px] sm:max-w-none"
                        title="Inside the Ed-INAI Portal"
                    >
                        <span className="hidden sm:inline">Inside the Ed-INAI Portal</span>
                        <span className="sm:hidden">Portal</span>
                    </Link>
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2 md:gap-4 flex-shrink-0 ml-2">
                    <Link
                        to="/"
                        className="bg-transparent border-none text-white cursor-pointer p-1.5 md:p-2 hover:text-white/80 hover:bg-white/5 rounded-lg transition-colors"
                        aria-label="Go to home"
                    >
                        <HiHome className="w-5 h-5 md:w-6 md:h-6" />
                    </Link>

                    <div className="relative" ref={menuRef}>
                        <button
                            type="button"
                            className="bg-transparent border-none text-white cursor-pointer p-1.5 md:p-2 hover:text-white/80 hover:bg-white/5 rounded-lg transition-colors"
                            aria-label="Open menu"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <HiMenu className="w-5 h-5 md:w-6 md:h-6" />
                        </button>

                        {isMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-[#111] border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 z-50">
                                {items.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-white/5 hover:text-white transition-colors text-sm"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Second Row - Sub Navigation - Responsive */}
            <div className="px-4 pb-2 md:px-6 lg:px-8 md:pb-3">
                <nav className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
                    <span className="text-white/50 hidden sm:inline" aria-hidden="true">›</span>
                    {activeView === 'admin' ? (
                        <span className="text-white underline underline-offset-4">Admin view</span>
                    ) : (
                        <Link
                            to="/edinai-admin"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            Admin view
                        </Link>
                    )}
                    <span className="text-white/50" aria-hidden="true">›</span>
                    {activeView === 'student' ? (
                        <span className="text-white underline underline-offset-4">Student view</span>
                    ) : (
                        <Link
                            to="/edinai-student"
                            className="text-white/70 hover:text-white transition-colors"
                        >
                            Student view
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default EdInaiHeader;
