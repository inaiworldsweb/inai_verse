import { Link } from 'react-router-dom';

const productSections = [
    {
        title: 'Inaiworld',
        items: [
            { label: 'Home', link: 'https://inaiworlds.com/#/' },
            { label: 'About', link: 'https://inaiworlds.com/#/about' },
            { label: 'Blog', link: 'https://inaiworlds.com/#/blog' },
            { label: 'Team', link: 'https://inaiworlds.com/#/team' },
            { label: 'Career', link: 'https://career.inaiworlds.com/' },
        ],
    },
    {
        title: 'edInai',
        items: [
            { label: 'Overview', link: '/overview' }, // Assuming internal routes
            { label: 'Features', link: '/features' },
            { label: 'Pricing', link: '/pricing' },
            { label: 'Faculty tools', link: '/faculty-tools' },
            { label: 'Student portal', link: '/student-portal' },
        ],
    },
    {
        title: 'Miraai',
        items: [],
    },
    {
        title: 'Vantage AI',
        items: [],
    },
];

const SiteFooter = () => {
    return (
        <footer className="bg-dark-card py-12 border-t border-white/10">
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {productSections.map(({ title, items }) => (
                        /* Changed alignment to start (left) as requested previously */
                        <section key={title} className="flex flex-col items-start text-left w-full">
                            <h3 className="text-[24px] font-semibold mb-4 text-white ">{title}</h3>
                            <ul className="flex flex-col items-start gap-2">
                                {items.map((item, idx) => {
                                    const label = typeof item === 'string' ? item : item.label;
                                    const href = typeof item === 'object' ? item.link : '#';
                                    const isExternal = href.startsWith('http');

                                    return (
                                        <li key={idx}>
                                            {isExternal ? (
                                                <a
                                                    href={href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#ccc] text-sm transition-colors duration-200 hover:text-white"
                                                >
                                                    {label}
                                                </a>
                                            ) : (
                                                <Link
                                                    to={href}
                                                    className="text-[#ccc] text-[16px]  transition-colors duration-200 hover:text-white"
                                                >
                                                    {label}
                                                </Link>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>

            {/* ✅ PERFECT SMOOTH INFINITE MARQUEE */}
            <div className="relative w-full overflow-hidden py-6 mb-8">
                <div className="flex w-max animate-marquee">
                    {[...Array(16)].map((_, i) => (
                        <span
                            key={i}
                            className="mx-12 text-[30px] md:text-[80px] font-medium text-white whitespace-nowrap"
                        >
                            INAI WORLDS
                        </span>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;