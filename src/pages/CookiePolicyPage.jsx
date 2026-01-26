import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const sections = [
    { id: 'what-are-cookies', title: 'What Are Cookies?', number: '1' },
    { id: 'types-of-cookies', title: 'Types of Cookies We Use', number: '2' },
    { id: 'third-party', title: 'Third-Party Cookies', number: '3' },
    { id: 'how-we-use', title: 'How We Use Cookie Data', number: '4' },
    { id: 'managing', title: 'Managing & Disabling Cookies', number: '5' },
    { id: 'consent', title: 'Consent & GDPR Compliance', number: '6' },
    { id: 'data-protection', title: 'Data Protection & Privacy', number: '7' },
    { id: 'changes', title: 'Changes to This Policy', number: '8' },
    { id: 'contact', title: 'Contact Information', number: '9' },
]

const CookiePolicyPage = () => {
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('what-are-cookies')
    const [tocOpen, setTocOpen] = useState(false)

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Handle scroll tracking and update active section
    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => ({
                id: s.id,
                element: document.getElementById(s.id)
            }))

            const currentSection = sectionElements.find(({ element }) => {
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 150 && rect.bottom >= 150
                }
                return false
            })

            if (currentSection) {
                setActiveSection(currentSection.id)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Auto-scroll sidebar to keep active section visible
    useEffect(() => {
        const activeButton = document.querySelector(`button[data-section-id="${activeSection}"]`)
        if (activeButton) {
            activeButton.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest'
            })
        }
    }, [activeSection])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 100
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
        }
        setTocOpen(false)
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <PageHeader
                title="Cookie Policy"
                showBackButton={true}
                showPriceButton={false}
                showHomeButton={true}
                showMenuButton={true}
            />

            {/* Hero Section */}
            <div className="pt-24 pb-12 px-4 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        Cookie Policy
                    </h1>
                    <p className="text-white/60 text-lg">Last Updated: 25 December 2025</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1400px] mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Table of Contents - Desktop */}
                    <aside className="hidden lg:block lg:w-80 flex-shrink-0">
                        <div className="sticky top-24">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                                <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                                <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            data-section-id={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${activeSection === section.id
                                                    ? 'bg-white/10 text-white font-medium'
                                                    : 'text-white/60 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="font-mono text-xs mr-2">{section.number}.</span>
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    {/* Mobile TOC Toggle */}
                    <div className="lg:hidden fixed bottom-6 right-6 z-50">
                        <button
                            onClick={() => setTocOpen(!tocOpen)}
                            className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition-all"
                        >
                            {tocOpen ? 'Close' : 'Contents'}
                        </button>
                    </div>

                    {/* Mobile TOC Overlay */}
                    {tocOpen && (
                        <div className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40 p-6 overflow-y-auto">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md mx-auto mt-20">
                                <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
                                <nav className="space-y-1">
                                    {sections.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => scrollToSection(section.id)}
                                            className="w-full text-left px-3 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/5 transition-all"
                                        >
                                            <span className="font-mono text-xs mr-2">{section.number}.</span>
                                            {section.title}
                                        </button>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    )}

                    {/* Content */}
                    <main className="flex-1 min-w-0">
                        <div className="prose prose-invert max-w-none">
                            {/* Introduction */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                                <p className="text-white/80 leading-relaxed mb-4">
                                    This Cookie Policy explains how <strong>INAI Worlds Private Limited</strong> ("INAI Worlds", "Company", "we", "us", or "our") uses cookies and similar technologies on our website <a href="https://inaiworlds.com/" className="text-blue-400 hover:text-blue-300">https://inaiworlds.com/</a> and related platforms, applications, and services (collectively, the "Website").
                                </p>
                                <p className="text-white/80 leading-relaxed mb-4">
                                    This policy is written in a fully safe, GDPR-ready, and advertising-compliant manner to protect both users and the Company.
                                </p>
                                <p className="text-white/80 leading-relaxed font-medium">
                                    By continuing to use our Website, you consent to the use of cookies as described in this Cookie Policy, unless you disable them through your browser or cookie settings.
                                </p>
                            </div>

                            {/* Section 1: What Are Cookies */}
                            <section id="what-are-cookies" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    1. What Are Cookies?
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">
                                        Cookies are small text files stored on your device (computer, mobile, tablet) when you visit a website. Cookies help websites function efficiently, improve user experience, remember preferences, and provide analytical information.
                                    </p>
                                    <p className="text-white/80">
                                        Cookies may be <strong>session cookies</strong> (deleted when you close your browser) or <strong>persistent cookies</strong> (stored for a defined period).
                                    </p>
                                </div>
                            </section>

                            {/* Section 2: Types of Cookies */}
                            <section id="types-of-cookies" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    2. Types of Cookies We Use
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">2.1 Strictly Necessary Cookies</h3>
                                        <p className="text-white/80 mb-4">These cookies are essential for:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                            <li>Website functionality</li>
                                            <li>Security and authentication</li>
                                            <li>Session management</li>
                                        </ul>
                                        <p className="text-white/80">Without these cookies, the Website may not function properly.</p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">2.2 Performance & Analytics Cookies</h3>
                                        <p className="text-white/80 mb-4">These cookies help us understand how users interact with the Website by collecting information such as:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                            <li>Pages visited</li>
                                            <li>Time spent on pages</li>
                                            <li>Error reports</li>
                                        </ul>
                                        <p className="text-white/80">This data is aggregated and anonymous and helps improve performance and usability.</p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">2.3 Functionality Cookies</h3>
                                        <p className="text-white/80 mb-4">These cookies allow the Website to:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside">
                                            <li>Remember user preferences</li>
                                            <li>Store language or region settings</li>
                                            <li>Provide enhanced and personalized features</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">2.4 Advertising & Marketing Cookies</h3>
                                        <p className="text-white/80 mb-4">These cookies may be used to:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                            <li>Deliver relevant advertisements</li>
                                            <li>Measure ad campaign effectiveness</li>
                                            <li>Enable remarketing through platforms like Google and Meta</li>
                                        </ul>
                                        <p className="text-white/80">Advertising cookies may track browsing activity across websites.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3: Third-Party Cookies */}
                            <section id="third-party" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    3. Third-Party Cookies
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">We may allow third-party service providers to place cookies on your device for:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Analytics (e.g., traffic analysis)</li>
                                        <li>Advertising and marketing</li>
                                        <li>Embedded services or integrations</li>
                                    </ul>
                                    <p className="text-white/80">
                                        INAI Worlds does not control third-party cookies. Users are encouraged to review the privacy policies of these providers.
                                    </p>
                                </div>
                            </section>

                            {/* Section 4: How We Use Cookie Data */}
                            <section id="how-we-use" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    4. How We Use Cookie Data
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">Cookie data is used to:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Ensure Website security</li>
                                        <li>Analyze usage patterns</li>
                                        <li>Improve content and user experience</li>
                                        <li>Support marketing and advertising activities</li>
                                    </ul>
                                    <p className="text-white/80">We do not use cookies to collect sensitive personal information.</p>
                                </div>
                            </section>

                            {/* Section 5: Managing Cookies */}
                            <section id="managing" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    5. Managing & Disabling Cookies
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">You can manage or disable cookies through:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Browser settings</li>
                                        <li>Device preferences</li>
                                        <li>Cookie consent tools (where available)</li>
                                    </ul>
                                    <p className="text-white/80">Disabling cookies may affect certain features or functionality of the Website.</p>
                                </div>
                            </section>

                            {/* Section 6: Consent & GDPR */}
                            <section id="consent" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    6. Consent & GDPR Compliance
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">Where required by law (including GDPR):</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Users will be asked for consent before non-essential cookies are placed</li>
                                        <li>Users may withdraw consent at any time</li>
                                    </ul>
                                    <p className="text-white/80">Cookie consent records may be stored for compliance purposes.</p>
                                </div>
                            </section>

                            {/* Section 7: Data Protection */}
                            <section id="data-protection" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    7. Data Protection & Privacy
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        Any personal data collected via cookies is processed in accordance with our <button onClick={() => navigate('/privacy')} className="text-blue-400 hover:text-blue-300 underline">Privacy Policy</button>.
                                    </p>
                                </div>
                            </section>

                            {/* Section 8: Changes */}
                            <section id="changes" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    8. Changes to This Cookie Policy
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        We reserve the right to update this Cookie Policy at any time. Changes will be effective immediately upon posting on the Website.
                                    </p>
                                </div>
                            </section>

                            {/* Section 9: Contact */}
                            <section id="contact" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    9. Contact Information
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">If you have questions about our use of cookies, please contact:</p>
                                    <div className="space-y-3">
                                        <p className="text-white/80">
                                            📧 <strong>Email:</strong> <a href="mailto:info@inaiworlds.com" className="text-blue-400 hover:text-blue-300">info@inaiworlds.com</a>
                                        </p>
                                        <p className="text-white/80">
                                            🌐 <strong>Website:</strong> <a href="https://inaiworlds.com/" className="text-blue-400 hover:text-blue-300">https://inaiworlds.com/</a>
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>

            {/* Custom Scrollbar Styles */}
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    )
}

export default CookiePolicyPage
