import { useState } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
    className?: string
}

const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

/**
 * Accessible navigation with mobile menu and keyboard support
 * WCAG 2.1 AA compliant with proper ARIA labels
 */
export function Navigation({ className }: NavigationProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            action()
        }
    }

    const closeMobileMenu = () => setMobileMenuOpen(false)

    return (
        <nav
            className={cn(
                'sticky top-0 z-50 w-full glass border-b border-white/10',
                className
            )}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        to="/saas-landing"
                        className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
                        aria-label="Home"
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg" />
                        <span className="text-xl font-bold gradient-text">SaaS Pro</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-300 hover:text-white transition-colors duration-200 
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded px-2 py-1"
                            >
                                {item.label}
                            </a>
                        ))}
                        <button className="btn-primary">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        onKeyDown={(e) => handleKeyDown(e, () => setMobileMenuOpen(!mobileMenuOpen))}
                        className="md:hidden p-2 text-gray-300 hover:text-white focus-visible:outline-none 
                     focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                        aria-label="Toggle mobile menu"
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            {mobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMobileMenu}
                                    className="block text-gray-300 hover:text-white transition-colors duration-200 py-2
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <button className="btn-primary w-full" onClick={closeMobileMenu}>
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
