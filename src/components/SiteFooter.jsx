import { useNavigate } from 'react-router-dom'

const productSections = [
    {
        title: 'Inaiworld',
        items: [
            { label: 'Home', link: 'https://inaiworlds.com/#/' },
            { label: 'About', link: 'https://inaiworlds.com/#/about' },
            { label: 'blog', link: 'https://inaiworlds.com/#/blog' },
            { label: 'Team', link: 'https://inaiworlds.com/#/team' },
            { label: 'Career', link: 'https://career.inaiworlds.com/' },
        ],
    },
    {
        title: 'EdInai',
        items: ['Overview', 'Features', 'Pricing', 'Faculty tools', 'Student portal'],
    },
    {
        title: 'Miraai',
        items: [],
    },
    {
        title: 'Vantage AI',
        items: [],
    },
]

const SiteFooter = () => {

    return (
        <footer className="bg-dark-card py-12 border-t border-white/10 overflow-hidden">

            <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {productSections.map(({ title, items }) => (
                        <section key={title} className="flex flex-col items-center text-center w-full">
                            <h3 className="text-base font-semibold mb-4 text-white">{title}</h3>
                            <ul className="flex flex-col items-center gap-2">
                                {items.map((item, idx) => {
                                    const label = typeof item === 'string' ? item : item.label
                                    const link = typeof item === 'object' ? item.link : null

                                    return (
                                        <li key={idx}>
                                            <button
                                                onClick={() => link ? window.location.assign(link) : null}
                                                className="text-white/60 text-sm transition-colors duration-200 hover:text-white"
                                            >
                                                {label}
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>

            {/* ✅ PERFECT SMOOTH INFINITE MARQUEE */}
            <div className="relative w-full overflow-hidden py-6 mb-8">
                <div className="flex w-max animate-marquee">

                    {/* First Set */}
                    {[...Array(8)].map((_, i) => (
                        <span
                            key={`first-${i}`}
                            className="mx-12 text-[30px] md:text-[80px] font-medium text-white whitespace-nowrap"
                        >
                            INAI WORLDS
                        </span>
                    ))}

                    {/* Duplicate Set (IMPORTANT) */}
                    {[...Array(8)].map((_, i) => (
                        <span
                            key={`second-${i}`}
                            className="mx-12 text-[30px] md:text-[80px] font-medium text-white whitespace-nowrap"
                        >
                            INAI WORLDS
                        </span>
                    ))}

                </div>
            </div>

        </footer>
    )
}

export default SiteFooter