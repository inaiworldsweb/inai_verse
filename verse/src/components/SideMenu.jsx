
import { FiChevronRight } from 'react-icons/fi'

const SideMenu = ({ className = '', items = [], variant = 'landing', onSelectItem, logoSrc }) => {
    if (!items.length) return null

    if (variant === 'login') {
        return (
            <nav className={className}>
                {items.map((item) => (
                    <button
                        key={item}
                        className="flex items-center justify-between py-3 px-0 bg-transparent border-none text-white/80 cursor-pointer transition-colors duration-200 text-left w-full text-sm hover:text-white"
                        type="button"
                        onClick={() => onSelectItem && onSelectItem(item)}
                    >
                        {item}
                        <span aria-hidden="true">
                            ›
                        </span>
                    </button>
                ))}
            </nav>
        )
    }

    return (
        <aside className={`flex flex-col ${className}`}>
            {logoSrc && (
                <div className="p-4 text-center">
                    <img src={logoSrc} alt="Logo" className="max-w-[150px] h-auto" />
                </div>
            )}
            <nav className="flex flex-col gap-2">
                {items.map((item) => (
                    <button
                        key={item}
                        className="flex items-center justify-between px-4 py-3 bg-transparent border-none text-white/80 cursor-pointer transition-all duration-200 text-left w-full hover:bg-white/5 hover:text-white"
                        type="button"
                        onClick={() => onSelectItem && onSelectItem(item)}
                    >
                        <span className="text-sm font-medium">{item}</span>
                        <FiChevronRight className="w-4 h-4 opacity-60" />
                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default SideMenu

