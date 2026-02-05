import { useNavigate } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import { getAsset } from '../assets/assets'
import logoImage from '../assets/Inai Verse White Tred mark (1).png'

function Sidebar({ isOpen, onClose }) {
    const navigate = useNavigate()

    const menuItems = [
        { name: 'Edinai', path: '/edinai' },
        { name: 'No Code Development' },
        { name: 'INAI For Marketing' },
        { name: 'INAI For Corporate Agent' },
    ]

    const open = typeof isOpen === 'boolean' ? isOpen : true

    const handleNavigation = (path) => {
        navigate(path)
        // Close sidebar on mobile after navigation
        if (typeof onClose === 'function') {
            onClose()
        }
    }

    return (
        <>
            {/* Overlay for mobile */}
            {open && typeof onClose === 'function' && (
                <div
                    className="fixed left-0 right-0 top-0 bottom-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 bottom-0 w-[280px] bg-black z-50 transform transition-transform duration-300 ease-in-out flex flex-col h-screen overflow-hidden ${open ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 border-r border-white/5`}
            >
                {/* Logo Section */}
                <div className="pt-16 pb-12 flex justify-center">
                    <img src={logoImage} alt="INAI Verse logo" className="w-[120px] h-auto" />
                </div>
                <nav className="flex-1 flex flex-col gap-4 px-8 mt-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => handleNavigation(item.path)}
                            className="flex items-center justify-between py-2 bg-transparent border-none text-white cursor-pointer transition-all duration-200 text-left w-full hover:opacity-70 group"
                            type="button"
                        >
                            <span className="text-sm font-bold tracking-wide">{item.name}</span>
                            <FiChevronRight className="w-4 h-4 opacity-100 group-hover:translate-x-1 transition-transform" />
                        </button>
                    ))}
                </nav>

                {/* Bottom Border */}
                <div className="mx-6 mb-8 border-t border-white/10" />
            </aside>
        </>
    )
}

export default Sidebar

