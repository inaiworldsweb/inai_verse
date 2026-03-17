import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const sections = [
    { id: 'company', title: 'Company Information', number: '1' },
    { id: 'eligibility', title: 'Eligibility & Acceptance', number: '2' },
    { id: 'scope', title: 'Scope of Services', number: '3' },
    { id: 'accounts', title: 'User Accounts & Responsibilities', number: '4' },
    { id: 'acceptable-use', title: 'Acceptable Use Policy', number: '5' },
    { id: 'ai-disclaimer', title: 'AI Use Disclaimer', number: '6' },
    { id: 'ip-rights', title: 'Intellectual Property Rights', number: '7' },
    { id: 'user-content', title: 'User Content & Data', number: '8' },
    { id: 'payments', title: 'Payments & Billing', number: '9' },
    { id: 'termination', title: 'Suspension & Termination', number: '10' },
    { id: 'third-party', title: 'Third-Party Services', number: '11' },
    { id: 'disclaimers', title: 'Disclaimers', number: '12' },
    { id: 'liability', title: 'Limitation of Liability', number: '13' },
    { id: 'indemnification', title: 'Indemnification', number: '14' },
    { id: 'force-majeure', title: 'Force Majeure', number: '15' },
    { id: 'governing-law', title: 'Governing Law & Jurisdiction', number: '16' },
    { id: 'changes', title: 'Changes to Terms', number: '17' },
    { id: 'severability', title: 'Severability', number: '18' },
    { id: 'entire-agreement', title: 'Entire Agreement', number: '19' },
    { id: 'contact', title: 'Contact Information', number: '20' },
]

const TermsPage = () => {
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('company')
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
        <div className="flex flex-col lg:flex-row min-h-screen bg-black text-white font-['Inter'] tracking-wide capitalize">
            {/* Table of Contents - Sidebar (Desktop) */}
            <aside className="hidden lg:flex lg:flex-col w-[320px] bg-[#050505] sticky top-0 h-screen overflow-hidden">
                <div className="flex flex-col h-full pt-8 pb-8 px-8">
                    {/* Sidebar Navigation Header */}
                    <div className="flex items-center gap-4 mb-12">
                        <button
                            onClick={() => navigate(-1)}
                            className="bg-transparent border-none text-white text-xl cursor-pointer p-2 -ml-2 hover:text-white/70 transition-colors"
                            aria-label="Go back"
                        >
                            <span>←</span>
                        </button>
                        <div className="flex items-center gap-3">
                            <span className="text-white/30 text-lg tracking-widest font-light">›</span>
                            <span className="text-xl font-medium text-white/90 whitespace-nowrap">Terms & Conditions</span>
                        </div>
                    </div>

                    <h2 className="text-sm font-bold mb-6 text-white uppercase tracking-[0.2em]">Table of Contents</h2>
                    <nav className="flex-1 min-h-0 space-y-1 overflow-y-auto pr-2 custom-scrollbar">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                data-section-id={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-300 group flex items-center gap-3 ${activeSection === section.id
                                    ? 'bg-white/10 text-white font-medium shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]'
                                    : 'text-white/50 hover:text-white/90 hover:bg-white/5'
                                    }`}
                            >
                                <span className={`font-mono text-[10px] w-5 h-5 rounded-md flex items-center justify-center border ${activeSection === section.id ? 'border-city-20 bg-white/10' : 'border-white/5 bg-white/[0.02]'}`}>{section.number}</span>
                                <span className="flex-1 truncate">{section.title}</span>
                                {activeSection === section.id && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                )}
                            </button>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0 flex flex-col">
                <PageHeader
                    title=""
                    showBackButton={false}
                    showLogo={false}
                    showPriceButton={false}
                    showHomeButton={true}
                    showMenuButton={true}
                    showBorder={false}
                />

                <div className="flex-1">
                    {/* Hero Section */}
                    <div className="pt-24 pb-12 px-4">
                        <div className="max-w-[1000px] mx-auto text-center">
                            <h1 className="text-[25px] md:text-[40px] mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent transition-all hover:scale-[1.01] duration-500">
                                Terms & Conditions
                            </h1>
                            <p className="text-white/60 text-lg font-light">Last Updated: 25 December 2025</p>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-[1000px] mx-auto px-4 py-12">
                        {/* Mobile TOC Toggle */}
                        <div className="lg:hidden fixed bottom-6 right-6 z-50">
                            <button
                                onClick={() => setTocOpen(!tocOpen)}
                                className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-2xl hover:bg-gray-200 active:scale-95 transition-all flex items-center gap-2"
                            >
                                {tocOpen ? 'Close' : 'Contents'}
                            </button>
                        </div>

                        {/* Mobile TOC Overlay */}
                        {tocOpen && (
                            <div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-md z-[60] p-6 overflow-y-auto animate-in fade-in duration-300">
                                <div className="bg-[#111] border border-white/10 rounded-2xl p-6 max-w-md mx-auto mt-20 shadow-2xl">
                                    <h2 className="text-xl font-medium mb-6">Table of Contents</h2>
                                    <nav className="space-y-2">
                                        {sections.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className="w-full text-left px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all flex items-center gap-3"
                                            >
                                                <span className="font-mono text-[10px] w-5 h-5 rounded-md flex items-center justify-center border border-white/10 bg-white/5">{section.number}</span>
                                                {section.title}
                                            </button>
                                        ))}
                                    </nav>
                                    <button
                                        onClick={() => setTocOpen(false)}
                                        className="mt-8 w-full py-3 bg-white/10 rounded-xl text-sm font-medium hover:bg-white/20 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="prose prose-invert max-w-none [&_h2]:font-normal [&_h3]:font-normal">
                            {/* Introduction */}
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                                <p className="text-white/80 leading-relaxed mb-4">
                                    These Terms & Conditions ("Terms") govern your access to and use of the website <a href="https://inaiworlds.com/" className="text-blue-400 hover:text-blue-300 lowercase">https://inaiworlds.com/</a> and all related applications, platforms, software, APIs, artificial intelligence products, tools, content, and services provided by <strong>INAI Worlds Private Limited</strong> ("INAI Worlds", "Company", "we", "us", or "our").
                                </p>
                                <p className="text-white/80 leading-relaxed mb-4">
                                    These Terms are drafted in a deep, comprehensive, and company-protective manner to ensure maximum legal safety, compliance, and operational clarity.
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    By accessing, browsing, registering, purchasing, or using any part of the Services, you agree to be legally bound by these Terms. If you do not agree, you must discontinue use immediately.
                                </p>
                            </div>

                            {/* Section 1: Company Information */}
                            <section id="company" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    1. Company Information
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-3">
                                    <p className="text-white/80"><strong>Legal Name:</strong> INAI Worlds Private Limited</p>
                                    <p className="text-white/80"><strong>Website:</strong> <a href="https://inaiworlds.com/" className="text-blue-400 hover:text-blue-300 lowercase">https://inaiworlds.com/</a></p>
                                    <p className="text-white/80"><strong>Official Email:</strong> <a href="mailto:info@inaiworlds.com" className="text-blue-400 hover:text-blue-300">info@inaiworlds.com</a></p>
                                </div>
                            </section>

                            {/* Section 2: Eligibility & Acceptance */}
                            <section id="eligibility" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    2. Eligibility & Acceptance
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>You must be at least 18 years of age to use the Services.</li>
                                        <li>By using the Services, you represent that you have the legal capacity to enter into a binding agreement.</li>
                                        <li>Use of the Services on behalf of an organization confirms you are authorized to bind that organization.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 3: Scope of Services */}
                            <section id="scope" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    3. Scope of Services
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">INAI Worlds provides multiple offerings, including but not limited to:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>AI-powered platforms, tools, and applications</li>
                                        <li>SaaS products and subscriptions</li>
                                        <li>APIs and usage-based services</li>
                                        <li>Virtual AI models and digital assets</li>
                                        <li>Consulting, enterprise, and custom development services</li>
                                    </ul>
                                    <p className="text-white/80">The Company reserves the right to modify, suspend, or discontinue any Service at any time without prior notice.</p>
                                </div>
                            </section>

                            {/* Section 4: User Accounts */}
                            <section id="accounts" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    4. User Accounts & Responsibilities
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                                        <li>You agree to provide accurate and complete information.</li>
                                        <li>You are solely responsible for all activities conducted through your account.</li>
                                    </ul>
                                    <p className="text-white/80">INAI Worlds is not liable for unauthorized access caused by user negligence.</p>
                                </div>
                            </section>

                            {/* Section 5: Acceptable Use */}
                            <section id="acceptable-use" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    5. Acceptable Use Policy
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">You agree not to:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Violate any applicable laws or regulations</li>
                                        <li>Infringe intellectual property rights</li>
                                        <li>Upload malicious code, malware, or harmful data</li>
                                        <li>Reverse engineer, copy, or resell Services</li>
                                        <li>Misuse AI outputs or systems</li>
                                        <li>Attempt unauthorized access to systems</li>
                                    </ul>
                                    <p className="text-white/80">Violation may result in immediate suspension or termination.</p>
                                </div>
                            </section>

                            {/* Section 6: AI Disclaimer */}
                            <section id="ai-disclaimer" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    6. Artificial Intelligence Use Disclaimer
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>AI outputs are generated algorithmically and may contain errors or inaccuracies.</li>
                                        <li>Outputs are provided "as-is" and "as-available".</li>
                                        <li>AI outputs must not be used for legal, medical, financial, or professional decision-making.</li>
                                        <li>Users are solely responsible for verifying AI-generated results.</li>
                                    </ul>
                                    <p className="text-white/80">INAI Worlds disclaims all liability arising from reliance on AI outputs.</p>
                                </div>
                            </section>

                            {/* Section 7: IP Rights */}
                            <section id="ip-rights" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    7. Intellectual Property Rights
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>All content, software, AI models, trademarks, logos, and materials are the exclusive property of INAI Worlds.</li>
                                        <li>No rights are granted except limited, non-transferable access for personal or business use.</li>
                                        <li>Unauthorized reproduction, distribution, or exploitation is strictly prohibited.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 8: User Content */}
                            <section id="user-content" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    8. User Content & Data
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>You retain ownership of content you submit.</li>
                                        <li>You grant INAI Worlds a worldwide, non-exclusive license to use such content for service operation and improvement.</li>
                                        <li>You confirm that submitted content does not violate third-party rights.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 9: Payments */}
                            <section id="payments" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    9. Payments & Billing
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Pricing varies across products and services.</li>
                                        <li>Payments must be made as specified at the time of purchase.</li>
                                        <li>Fees are generally non-refundable unless stated otherwise.</li>
                                        <li>Taxes are the responsibility of the user.</li>
                                    </ul>
                                    <p className="text-white/80">Detailed terms are governed by the Refund & Cancellation Policy.</p>
                                </div>
                            </section>

                            {/* Section 10: Termination */}
                            <section id="termination" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    10. Suspension & Termination
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">INAI Worlds reserves the right to suspend or terminate Services without notice if:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>These Terms are violated</li>
                                        <li>Fraudulent or unlawful activity is detected</li>
                                        <li>Non-payment or chargeback occurs</li>
                                    </ul>
                                    <p className="text-white/80">No refunds will be issued in such cases.</p>
                                </div>
                            </section>

                            {/* Section 11: Third-Party */}
                            <section id="third-party" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    11. Third-Party Services
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        Services may integrate third-party tools or links. INAI Worlds is not responsible for third-party content, availability, or policies.
                                    </p>
                                </div>
                            </section>

                            {/* Section 12: Disclaimers */}
                            <section id="disclaimers" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    12. Disclaimers
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Services are provided without warranties of any kind.</li>
                                        <li>INAI Worlds does not guarantee uninterrupted or error-free operation.</li>
                                        <li>Use of Services is at your own risk.</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 13: Liability */}
                            <section id="liability" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    13. Limitation of Liability
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">To the maximum extent permitted by law, INAI Worlds shall not be liable for:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Indirect, incidental, or consequential damages</li>
                                        <li>Loss of data, profits, or business</li>
                                        <li>Decisions made based on AI outputs</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 14: Indemnification */}
                            <section id="indemnification" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    14. Indemnification
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">You agree to indemnify and hold harmless INAI Worlds from claims arising due to:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Your misuse of Services</li>
                                        <li>Violation of laws or rights</li>
                                        <li>Breach of these Terms</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 15: Force Majeure */}
                            <section id="force-majeure" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    15. Force Majeure
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        INAI Worlds shall not be liable for failure or delay caused by events beyond reasonable control, including natural disasters, system failures, or government actions.
                                    </p>
                                </div>
                            </section>

                            {/* Section 16: Governing Law */}
                            <section id="governing-law" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    16. Governing Law & Jurisdiction
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        These Terms shall be governed by the laws of India. Courts located in India shall have exclusive jurisdiction.
                                    </p>
                                </div>
                            </section>

                            {/* Section 17: Changes */}
                            <section id="changes" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    17. Changes to Terms
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        INAI Worlds reserves the right to modify these Terms at any time. Continued use after changes constitutes acceptance.
                                    </p>
                                </div>
                            </section>

                            {/* Section 18: Severability */}
                            <section id="severability" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    18. Severability
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        If any provision is held invalid, remaining provisions shall remain enforceable.
                                    </p>
                                </div>
                            </section>

                            {/* Section 19: Entire Agreement */}
                            <section id="entire-agreement" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    19. Entire Agreement
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        These Terms, along with the Privacy Policy and Refund & Cancellation Policy, constitute the entire agreement between you and INAI Worlds.
                                    </p>
                                </div>
                            </section>

                            {/* Section 20: Contact */}
                            <section id="contact" className="mb-12 scroll-mt-24">
                                <h2 className="text-[25px] md:text-[40px] mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    20. Contact Information
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">For questions regarding these Terms:</p>
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
                    </div>
                </div>
            </main>

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
        </div >
    )
}

export default TermsPage
