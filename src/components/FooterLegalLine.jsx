import { Link } from 'react-router-dom'

const legalLinks = [
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Terms & Conditions', to: '/terms' },
    { label: 'Cookies', to: '/cookies' },
    { label: 'Refund & Cancellation', to: '/refund' },
]

const FooterLegalLine = ({ className = '' }) => (
    <footer className={`bg-black border-t border-white/10 px-4 sm:px-8 ${className}`} aria-label="Legal footer">
        <div className="max-w-[1200px] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-white/70">
            <span className="whitespace-nowrap">All Rights Reserved © 2026 by INAI Worlds Pvt. Ltd.</span>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white/70">
                {legalLinks.map(({ label, to }, index) => (
                    <div key={label} className="flex items-center gap-3">
                        <Link to={to} className="hover:text-white transition-colors">
                            {label}
                        </Link>
                        {index !== legalLinks.length - 1 && (
                            <span className="text-white/30 hidden sm:inline" aria-hidden="true">|</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </footer>
)

export default FooterLegalLine
