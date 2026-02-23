import { useNavigate } from 'react-router-dom'

/**
 * Reusable Page Header Component
 * @param {Object} props
 * @param {string} props.title - Main title text (e.g., "Edinai")
 * @param {Array} props.breadcrumbs - Optional breadcrumb items [{label: string, onClick: function}]
 * @param {boolean} props.showBackButton - Show back arrow button
 * @param {boolean} props.showPriceButton - Show "Price" button
 * @param {boolean} props.showHomeButton - Show home icon button
 * @param {boolean} props.showMenuButton - Show menu icon button
 * @param {function} props.onBackClick - Custom back button handler
 * @param {function} props.onPriceClick - Custom price button handler
 * @param {function} props.onMenuClick - Custom menu button handler
 */
function PageHeader({
    title = '',
    breadcrumbs = [],
    showBackButton = false,
    showLogo = true,
    logoSrc = '/miralogo.png',
    logoAlt = 'Miraai logo',
    logoClassName = 'h-[34px] md:h-[44px] w-auto max-w-[180px] object-contain',
    titleWrapperClassName = 'flex items-center gap-2',
    titleClassName = 'text-white font-medium text-base',
    showTitleText = true,
    showPriceButton = true,
    showHomeButton = true,
    showMenuButton = true,
    onBackClick,
    onPriceClick,
    onMenuClick,
    showBorder = true,
}) {
    const navigate = useNavigate()

    const handleBack = () => {
        if (onBackClick) {
            onBackClick()
        } else {
            navigate(-1)
        }
    }

    const handlePrice = () => {
        if (onPriceClick) {
            onPriceClick()
        } else {
            navigate('/pricing')
        }
    }

    const handleHome = () => {
        navigate('/')
    }

    const handleMenu = () => {
        if (onMenuClick) {
            onMenuClick()
        }
    }

    return (
        <header className={`sticky top-0 z-50 flex items-center justify-between py-4 px-8 bg-black/80 backdrop-blur-md ${showBorder ? 'border-b border-white/10' : ''}`}>
            {/* Left Section - Back Button, Title, Breadcrumbs */}
            <div className="flex items-center gap-4">
                {showBackButton && (
                    <button
                        type="button"
                        className="bg-transparent border-none text-white text-2xl cursor-pointer p-2 hover:text-white/80 transition-colors"
                        onClick={handleBack}
                        aria-label="Go back"
                    >
                        <span aria-hidden="true">←</span>
                    </button>
                )}

                {(title || (showLogo && logoSrc)) && (
                    <div className={titleWrapperClassName}>
                        {(breadcrumbs.length > 0 || title) && (
                            <span className="text-white/50" aria-hidden="true">›</span>
                        )}
                        {showLogo && logoSrc && (
                            <img
                                src={logoSrc}
                                alt={logoAlt}
                                className={logoClassName}
                            />
                        )}
                        {showTitleText && title && (
                            <span className={titleClassName}>{title}</span>
                        )}
                    </div>
                )}

                {breadcrumbs.length > 0 && (
                    <nav className="flex items-center gap-2" aria-label="Breadcrumb">
                        {breadcrumbs.map((crumb, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="text-white/50" aria-hidden="true">›</span>
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
                    <button
                        type="button"
                        className="group bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors overflow-hidden"
                        onClick={handlePrice}
                    >
                        <span className="relative block h-[1.2em]">
                            <span className="block transition-transform duration-300 group-hover:-translate-y-[120%]">Price</span>
                            <span className="absolute left-0 top-[120%] block transition-transform duration-300 group-hover:-translate-y-[120%]">Price</span>
                        </span>
                    </button>
                )}

                {showHomeButton && (
                    <button
                        type="button"
                        className="bg-transparent border-none text-white cursor-pointer p-2 hover:text-white/80 transition-colors"
                        aria-label="Go to home"
                        onClick={handleHome}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
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
                        className="bg-transparent border-none text-white cursor-pointer p-2 hover:text-white/80 transition-colors"
                        aria-label="Open menu"
                        onClick={handleMenu}
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
                            <line x1="5" y1="8" x2="19" y2="8" stroke="currentColor" strokeWidth="1.8" />
                            <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.8" />
                            <line x1="5" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" />
                        </svg>
                    </button>
                )}
            </div>
        </header>
    )
}

export default PageHeader
