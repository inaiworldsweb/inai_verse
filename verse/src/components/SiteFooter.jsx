import { useNavigate } from 'react-router-dom'

const productSections = [
    {
        title: 'EdInai',
        items: ['Overview', 'Features', 'Pricing', 'Faculty tools', 'Student portal'],
    },
    {
        title: 'No Code Development',
        items: [],
    },
    {
        title: 'INAI For Marketing',
        items: [],
    },
    {
        title: 'INAI For Corporate Agent',
        items: [],
    },
]

const supportSections = []

const socialLinks = [
    {
        name: 'X',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h3.5l5.1 6.9L19 4h3.5l-7.1 9.4L22 20h-3.5l-5.6-7.3L7 20H3.5l7.1-9.5z" />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 25.6 25.6 0 0 0 2 12a25.6 25.6 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A25.6 25.6 0 0 0 22 12a25.6 25.6 0 0 0-.4-4.8ZM10 15.5v-7l5.5 3.5Z" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.5 3A2.5 2.5 0 1 1 2 5.5 2.5 2.5 0 0 1 4.5 3ZM3 9h3v12H3zm6 0h2.8v1.7h.04A3.08 3.08 0 0 1 15.6 9c3.2 0 3.8 2 3.8 4.6V21h-3v-6.1c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9Z" />
            </svg>
        ),
    },
    {
        name: 'GitHub',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-3 .6-3.6-1.4-3.6-1.4a2.8 2.8 0 0 0-1.2-1.6c-1-.7.1-.7.1-.7a2.2 2.2 0 0 1 1.6 1.1 2.2 2.2 0 0 0 3 1 2.2 2.2 0 0 1 .6-1.4c-2.4-.3-4.8-1.2-4.8-5.5a4.3 4.3 0 0 1 1.1-3 4 4 0 0 1 .1-2.9s.9-.3 3 1.1a10.5 10.5 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1a4 4 0 0 1 .1 2.9 4.3 4.3 0 0 1 1.1 3c0 4.3-2.5 5.2-4.9 5.5a2.5 2.5 0 0 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.8a2 2 0 1 0 2 2 2 2 0 0 0-2-2Zm5.2-.9a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
            </svg>
        ),
    },
    {
        name: 'TikTok',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.7 3.5A4.9 4.9 0 0 0 15.3 2h-2.6v12a2.1 2.1 0 1 1-2.1-2 2.1 2.1 0 0 1 1 .27V9.6a5.1 5.1 0 1 0 4.1 5V9.5a6 6 0 0 0 3.3 1v-2.6a3.4 3.4 0 0 1-2.3-.9 3.3 3.3 0 0 1-1-.5Z" />
            </svg>
        ),
    },
    {
        name: 'Discord',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 5.1a17 17 0 0 0-4.2-1.3l-.2.4A15 15 0 0 1 12 4a15 15 0 0 1-3.6.2l-.2-.4a17 17 0 0 0-4.2 1.3A12.1 12.1 0 0 0 2 15.4a17.4 17.4 0 0 0 5.2 2.6L8 17.3a10.7 10.7 0 0 1-1.8-.9l.4-.3a12.5 12.5 0 0 0 9.2 0l.4.3a10.7 10.7 0 0 1-1.8.9l.8 0.7A17.4 17.4 0 0 0 22 15.4 12.1 12.1 0 0 0 20 5.1ZM9.5 14.1a1.2 1.2 0 1 1 1.1-1.2 1.2 1.2 0 0 1-1.1 1.2Zm5 0a1.2 1.2 0 1 1 1.1-1.2 1.2 1.2 0 0 1-1.1 1.2Z" />
            </svg>
        ),
    },
]

const SiteFooter = () => {
    const navigate = useNavigate()
    return (
        <footer className="bg-dark-card py-12 px-8 pb-8 border-t border-white/10" aria-label="Global footer">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 mb-8" role="list">
                {productSections.map(({ title, items }) => (
                    <section
                        key={title}
                        className=""
                        aria-labelledby={`footer-${title.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        <h3 id={`footer-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-base font-semibold mb-4 text-white">
                            {title}
                        </h3>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2">
                            {items.map((item) => (
                                <li key={item} className="m-0">
                                    <button type="button" className="bg-transparent border-none text-white/60 cursor-pointer text-sm p-0 text-left transition-colors duration-200 hover:text-white">
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
                {supportSections.map(({ title, items }) => (
                    <section
                        key={title}
                        className=""
                        aria-labelledby={`footer-${title.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        <h3 id={`footer-${title.replace(/\s+/g, '-').toLowerCase()}`} className="text-base font-semibold mb-4 text-white">
                            {title}
                        </h3>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2">
                            {items.map((item) => (
                                <li key={item} className="m-0">
                                    <button type="button" className="bg-transparent border-none text-white/60 cursor-pointer text-sm p-0 text-left transition-colors duration-200 hover:text-white">
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>

            <div className="flex gap-4 justify-center pt-8 border-t border-white/10" role="navigation" aria-label="Social media">
                {socialLinks.map(({ name, icon }) => (
                    <button key={name} type="button" className="bg-white/5 border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 [&_svg]:w-5 [&_svg]:h-5 [&_svg]:fill-white/80" aria-label={name}>
                        {icon}
                    </button>
                ))}
            </div>

            {/* Copyright Bar */}
            <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p className="m-0">
                        All Rights Reserved © 2026 by INAI Worlds Pvt. Ltd.
                    </p>
                    <div className="flex gap-6">
                        <button
                            type="button"
                            onClick={() => navigate('/privacy')}
                            className="bg-transparent border-none text-white/60 cursor-pointer text-sm p-0 transition-colors duration-200 hover:text-white"
                        >
                            Privacy Policy
                        </button>
                        <span className="text-white/30">|</span>
                        <button
                            type="button"
                            onClick={() => navigate('/terms')}
                            className="bg-transparent border-none text-white/60 cursor-pointer text-sm p-0 transition-colors duration-200 hover:text-white"
                        >
                            Terms & Conditions
                        </button>
                        <span className="text-white/30">|</span>
                        <button
                            type="button"
                            onClick={() => navigate('/cookies')}
                            className="bg-transparent border-none text-white/60 cursor-pointer text-sm p-0 transition-colors duration-200 hover:text-white"
                        >
                            Cookies
                        </button>
                        <span className="text-white/30">|</span>
                        <button
                            type="button"
                            onClick={() => navigate('/refund')}
                            className="bg-transparent border-none text-white/60 cursor-pointer text-sm p-0 transition-colors duration-200 hover:text-white"
                        >
                            Refund & Cancellation
                        </button>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default SiteFooter

