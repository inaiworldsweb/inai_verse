import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
            { label: 'Overview', link: '/overview' },
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
    // Shared class for all links to ensure they look exactly the same
    const linkClassName = "group flex items-center gap-2 text-[#ccc] text-[15px] transition-all duration-200 hover:text-white hover:translate-x-1";

    return (
        <footer className="bg-dark-card py-10 border-t border-white/10">
            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {productSections.map(({ title, items }) => (
                        <section key={title} className="flex flex-col items-start text-left w-full">
                            <h3 className="text-[22px] font-semibold mb-5 text-white ml-6">{title}</h3>
                            <ul className="flex flex-col items-start gap-3">
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
                                                    className={linkClassName}
                                                >
                                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                                                    <span>{label}</span>
                                                </a>
                                            ) : (
                                                <Link
                                                    to={href}
                                                    className={linkClassName}
                                                >
                                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                                                    <span>{label}</span>
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

            {/* ✅ INFINITE MARQUEE */}
            <div className="relative w-full overflow-hidden ">
                <div className="flex w-max animate-marquee">
                    {[...Array(16)].map((_, i) => (
                        <span
                            key={i}
                            className=" mx-12 text-[30px] md:text-[80px] font-medium text-white whitespace-nowrap"
                        >
                            INAI WORLDS 


                             <span
                            key={i}
                            className=" mx-12 text-[30px] md:text-[80px] font-medium text-white whitespace-nowrap"
                        >
                            INAI VERSE 
                        </span>

                             <span
                            key={i}
                            className=" mx-12 text-[30px] md:text-[80px] font-medium text-white whitespace-nowrap"
                        >
                            MIRAAI
                        </span>

                         <span
                            key={i}
                            className=" mx-12 text-[30px] md:text-[80px] font-medium text-white whitespace-nowrap"
                        >
                            edInai
                        </span>

                        </span>

                        
             ))}
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;