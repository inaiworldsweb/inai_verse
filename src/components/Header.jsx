function Header({ onMenuClick }) {
    return (
        <header className="fixed top-7 left-0 right-0 h-20 bg-black z-50">
            <div className="flex h-full items-start justify-end px-10 pt-4">
                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                        Community
                    </button>

                    <button
                        className="w-9 h-9 flex items-center justify-center rounded-md border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
                        aria-label="Home"
                    >
                        <svg
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 11l9-8 9 8" />
                            <path d="M5 10v10h14V10" />
                        </svg>
                    </button>

                    <button
                        onClick={typeof onMenuClick === 'function' ? onMenuClick : undefined}
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
    )
}

export default Header
