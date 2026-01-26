import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const sections = [
    { id: 'company', title: 'Company Identification', number: '1' },
    { id: 'applicability', title: 'Applicability & Scope', number: '2' },
    { id: 'categories', title: 'Categories of Information', number: '3' },
    { id: 'sources', title: 'Sources of Data', number: '4' },
    { id: 'purposes', title: 'Purposes of Data Processing', number: '5' },
    { id: 'legal-bases', title: 'Legal Bases for Processing', number: '6' },
    { id: 'sharing', title: 'Data Sharing & Disclosure', number: '7' },
    { id: 'transfers', title: 'International Data Transfers', number: '8' },
    { id: 'retention', title: 'Data Retention', number: '9' },
    { id: 'rights', title: 'User Rights & Choices', number: '10' },
    { id: 'payments', title: 'Payments & Transactions', number: '11' },
    { id: 'marketing', title: 'Marketing Communications', number: '12' },
    { id: 'security', title: 'Data Security Practices', number: '13' },
    { id: 'automated', title: 'Automated Processing', number: '14' },
    { id: 'ai-disclaimer', title: 'AI Disclaimer', number: '15' },
    { id: 'third-party', title: 'Third-Party Links', number: '16' },
    { id: 'children', title: 'Children\'s Privacy', number: '17' },
    { id: 'business-transfers', title: 'Business Transfers', number: '18' },
    { id: 'indemnification', title: 'Indemnification', number: '19' },
    { id: 'liability', title: 'Limitation of Liability', number: '20' },
    { id: 'compliance', title: 'Regulatory Compliance', number: '21' },
    { id: 'governing-law', title: 'Governing Law', number: '22' },
    { id: 'changes', title: 'Changes to Policy', number: '23' },
    { id: 'contact', title: 'Contact Information', number: '24' },
]

const PrivacyPolicyPage = () => {
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
        <div className="min-h-screen bg-black text-white">
            <PageHeader
                title="Privacy Policy"
                showBackButton={true}
                showPriceButton={false}
                showHomeButton={true}
                showMenuButton={true}
            />

            {/* Hero Section */}
            <div className="pt-24 pb-12 px-4 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        Privacy Policy
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
                                    This Privacy Policy explains in detail how <strong>INAI Worlds Private Limited</strong> ("INAI Worlds", "Company", "we", "us", or "our") collects, receives, uses, stores, processes, shares, transfers, protects, and otherwise handles information when you access or use <a href="https://inaiworlds.com/" className="text-blue-400 hover:text-blue-300">https://inaiworlds.com/</a> and any related websites, applications, software, platforms, APIs, artificial intelligence systems, products, tools, dashboards, communications, or services (collectively, the "Services").
                                </p>
                                <p className="text-white/80 leading-relaxed">
                                    This document is drafted to cover all standard and advanced privacy topics required for legal safety, regulatory compliance, advertising approvals, investor due diligence, and enterprise partnerships.
                                </p>
                                <p className="text-white/80 leading-relaxed mt-4 font-medium">
                                    By accessing or using the Services, you confirm that you have read, understood, and agreed to this Privacy Policy.
                                </p>
                            </div>

                            {/* Section 1: Company Identification */}
                            <section id="company" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    1. Company Identification
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-3">
                                    <p className="text-white/80"><strong>Legal Name:</strong> INAI Worlds Private Limited</p>
                                    <p className="text-white/80"><strong>Website:</strong> <a href="https://inaiworlds.com/" className="text-blue-400 hover:text-blue-300">https://inaiworlds.com/</a></p>
                                    <p className="text-white/80"><strong>Official Contact Email:</strong> <a href="mailto:info@inaiworlds.com" className="text-blue-400 hover:text-blue-300">info@inaiworlds.com</a></p>
                                </div>
                            </section>

                            {/* Section 2: Applicability & Scope */}
                            <section id="applicability" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    2. Applicability & Scope
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">This Privacy Policy applies to:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Website visitors</li>
                                        <li>Registered and unregistered users</li>
                                        <li>Clients, customers, partners, and vendors</li>
                                        <li>AI model users and API consumers</li>
                                        <li>Marketing, sales, and support communications</li>
                                        <li>Online, offline, and electronic interactions</li>
                                    </ul>
                                    <p className="text-white/80 mt-4">This Policy applies regardless of the device or platform used.</p>
                                </div>
                            </section>

                            {/* Section 3: Categories of Information */}
                            <section id="categories" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    3. Categories of Information We Collect
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">3.1 Personal Information</h3>
                                        <p className="text-white/80 mb-4">We may collect personal information including but not limited to:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80 list-disc list-inside">
                                            <li>Full name</li>
                                            <li>Email address</li>
                                            <li>Phone number</li>
                                            <li>Business or company name</li>
                                            <li>Job title or designation</li>
                                            <li>Postal or business address</li>
                                            <li>Login credentials</li>
                                            <li>Billing and transaction details</li>
                                            <li>Communication content</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">3.2 Sensitive Personal Data</h3>
                                        <p className="text-white/80 mb-4">We do not intentionally collect sensitive personal data such as biometric data, health data, government-issued identifiers, or financial passwords unless:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside">
                                            <li>Explicitly required for service delivery</li>
                                            <li>Lawfully permitted</li>
                                            <li>Explicit consent is obtained</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">3.3 AI Inputs, Outputs & Content</h3>
                                        <p className="text-white/80 mb-4">When using our AI-based Services, we may collect:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside">
                                            <li>User prompts, inputs, queries, files, datasets, and instructions</li>
                                            <li>AI-generated responses, outputs, or results</li>
                                            <li>Usage logs and metadata related to AI interactions</li>
                                        </ul>
                                        <p className="text-white/80 mt-4">You represent and warrant that you have the lawful right to submit such data and that it does not violate any third-party rights.</p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">3.4 Automatically Collected Information</h3>
                                        <p className="text-white/80 mb-4">We automatically collect technical and usage information such as:</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white/80 list-disc list-inside">
                                            <li>IP address</li>
                                            <li>Device identifiers</li>
                                            <li>Browser type and version</li>
                                            <li>Operating system</li>
                                            <li>Date, time, and duration of access</li>
                                            <li>Pages viewed and interaction behavior</li>
                                            <li>Referring URLs</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">3.5 Cookies, Pixels & Tracking Technologies</h3>
                                        <p className="text-white/80 mb-4">We use cookies, pixels, tags, SDKs, and similar technologies for:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside">
                                            <li>Website functionality and authentication</li>
                                            <li>Security and fraud prevention</li>
                                            <li>Analytics and performance monitoring</li>
                                            <li>Personalization and preference storage</li>
                                            <li>Advertising and remarketing</li>
                                        </ul>
                                        <p className="text-white/80 mt-4">Users can control cookies through browser or device settings; disabling cookies may affect functionality.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4: Sources of Data */}
                            <section id="sources" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    4. Sources of Data
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">We may collect information:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Directly from you</li>
                                        <li>Automatically through the Services</li>
                                        <li>From third-party service providers</li>
                                        <li>From publicly available sources</li>
                                        <li>From business partners or affiliates (where lawful)</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 5: Purposes of Data Processing */}
                            <section id="purposes" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    5. Purposes of Data Processing
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">We process information for purposes including:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Providing, operating, and maintaining the Services</li>
                                        <li>Developing, training, testing, and improving AI systems (where permitted)</li>
                                        <li>Account management and customer onboarding</li>
                                        <li>Customer support and issue resolution</li>
                                        <li>Contract performance and service delivery</li>
                                        <li>Billing, invoicing, and payment processing</li>
                                        <li>Marketing, promotions, and business communications</li>
                                        <li>Analytics, audits, and internal research</li>
                                        <li>Security monitoring and fraud prevention</li>
                                        <li>Compliance with legal, regulatory, and contractual obligations</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 6: Legal Bases */}
                            <section id="legal-bases" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    6. Legal Bases for Processing
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">Where required by law, data processing is based on:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>User consent</li>
                                        <li>Performance of a contract</li>
                                        <li>Compliance with legal obligations</li>
                                        <li>Legitimate business interests</li>
                                        <li>Protection of vital interests</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 7: Data Sharing */}
                            <section id="sharing" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    7. Data Sharing & Disclosure
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white font-semibold mb-4">We do not sell personal data.</p>
                                    <p className="text-white/80 mb-4">We may share information with:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Authorized employees, contractors, and affiliates</li>
                                        <li>Cloud hosting, IT, analytics, CRM, and communication providers</li>
                                        <li>Payment processors and financial institutions</li>
                                        <li>Marketing and advertising partners</li>
                                        <li>Legal advisors, auditors, and consultants</li>
                                        <li>Government or law enforcement authorities (when legally required)</li>
                                        <li>Successors or acquirers in the event of merger, acquisition, restructuring, or asset sale</li>
                                    </ul>
                                    <p className="text-white/80 mt-4">All third parties are required to maintain confidentiality and data protection standards.</p>
                                </div>
                            </section>

                            {/* Section 8: International Transfers */}
                            <section id="transfers" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    8. International Data Transfers
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        Your data may be transferred to, stored, and processed in India or other jurisdictions. We implement appropriate safeguards such as contractual protections and compliance mechanisms to protect such transfers.
                                    </p>
                                </div>
                            </section>

                            {/* Section 9: Data Retention */}
                            <section id="retention" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    9. Data Retention
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">We retain personal data only for as long as necessary to:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Fulfill the purposes described in this Policy</li>
                                        <li>Meet legal and regulatory requirements</li>
                                        <li>Resolve disputes</li>
                                        <li>Enforce agreements</li>
                                    </ul>
                                    <p className="text-white/80 mt-4">Data may be anonymized or securely deleted when no longer required.</p>
                                </div>
                            </section>

                            {/* Section 10: User Rights */}
                            <section id="rights" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    10. User Rights & Choices
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">Depending on applicable laws, you may have the right to:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Access your personal data</li>
                                        <li>Correct inaccurate or incomplete data</li>
                                        <li>Request deletion of data</li>
                                        <li>Restrict or object to processing</li>
                                        <li>Withdraw consent</li>
                                        <li>Request data portability</li>
                                    </ul>
                                    <p className="text-white/80 mt-4">
                                        Requests may be submitted to <a href="mailto:info@inaiworlds.com" className="text-blue-400 hover:text-blue-300">info@inaiworlds.com</a> and will be addressed in accordance with applicable law.
                                    </p>
                                </div>
                            </section>

                            {/* Section 11: Payments */}
                            <section id="payments" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    11. Payments, Pricing & Transactions
                                </h2>

                                <div className="space-y-6">
                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">11.1 Paid Products & Services</h3>
                                        <p className="text-white/80">
                                            INAI Worlds Private Limited may offer multiple products, services, subscriptions, licenses, AI tools, APIs, or custom solutions, each with different pricing, billing cycles, features, and terms. Pricing details for each product or service are displayed on the Website, proposals, dashboards, invoices, or shared directly with clients.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">11.2 Payment Information</h3>
                                        <p className="text-white/80 mb-4">When you make a purchase or payment, we or our authorized payment service providers may collect:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside">
                                            <li>Billing name and address</li>
                                            <li>Payment method details (UPI, cards, net banking, wallets, or other permitted modes)</li>
                                            <li>Transaction identifiers</li>
                                            <li>Payment status and timestamps</li>
                                        </ul>
                                        <p className="text-white/80 mt-4">
                                            INAI Worlds does not store full card details. Payments are processed through secure, PCI DSS compliant third party payment gateways.
                                        </p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">11.3 Multiple Products & Variable Pricing</h3>
                                        <p className="text-white/80 mb-4">Since our offerings may vary (including SaaS, AI models, APIs, enterprise solutions, or custom development):</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside">
                                            <li>Prices may differ per product or client</li>
                                            <li>Fees may be one time, recurring, usage based, or milestone based</li>
                                            <li>Taxes, duties, or government levies may apply as per law</li>
                                        </ul>
                                        <p className="text-white/80 mt-4">Users are responsible for reviewing applicable pricing before making a purchase.</p>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">11.4 Refunds, Cancellations & Adjustments</h3>
                                        <p className="text-white/80 mb-4">Refunds, cancellations, credits, or payment adjustments (if any) are governed by the specific product agreement, proposal, or refund policy applicable to that service. Unless explicitly stated:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside">
                                            <li>Fees are non refundable</li>
                                            <li>Partial usage does not guarantee refunds</li>
                                            <li>Custom or enterprise services may not be eligible for cancellation once initiated</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">11.5 Failed or Disputed Payments</h3>
                                        <p className="text-white/80 mb-4">INAI Worlds reserves the right to:</p>
                                        <ul className="space-y-2 text-white/80 list-disc list-inside">
                                            <li>Suspend or restrict Services for failed or disputed payments</li>
                                            <li>Recover outstanding dues</li>
                                            <li>Take appropriate legal or contractual action if required</li>
                                        </ul>
                                    </div>

                                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-xl font-semibold mb-4 text-white">11.6 Invoices & Records</h3>
                                        <p className="text-white/80">
                                            Invoices, receipts, or payment confirmations may be issued electronically and shared via email or dashboard.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* Section 12: Marketing */}
                            <section id="marketing" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    12. Marketing Communications
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        You may opt out of promotional communications at any time. Transactional, operational, or legally required communications may still be sent.
                                    </p>
                                </div>
                            </section>

                            {/* Section 13: Security */}
                            <section id="security" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    13. Data Security Practices
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">We implement reasonable administrative, technical, and physical safeguards including:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Encryption and secure storage</li>
                                        <li>Access controls and authentication</li>
                                        <li>Regular monitoring and security reviews</li>
                                    </ul>
                                    <p className="text-white/80 mt-4">However, no system can guarantee absolute security.</p>
                                </div>
                            </section>

                            {/* Section 14: Automated Processing */}
                            <section id="automated" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    14. Automated Processing & Profiling
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        We may use automated systems for analytics, personalization, and AI operations. Where legally required, users may request human intervention or review.
                                    </p>
                                </div>
                            </section>

                            {/* Section 15: AI Disclaimer */}
                            <section id="ai-disclaimer" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    15. Artificial Intelligence Disclaimer
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">AI-generated outputs:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Are provided on an "as-is" and "as-available" basis</li>
                                        <li>May contain errors or inaccuracies</li>
                                        <li>Should not be relied upon for legal, medical, financial, or professional decisions</li>
                                    </ul>
                                    <p className="text-white/80 mt-4">INAI Worlds disclaims liability for actions taken based on AI outputs.</p>
                                </div>
                            </section>

                            {/* Section 16: Third-Party Links */}
                            <section id="third-party" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    16. Third-Party Links & Services
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        Our Services may include links to third-party websites or services. We are not responsible for their privacy practices or content.
                                    </p>
                                </div>
                            </section>

                            {/* Section 17: Children's Privacy */}
                            <section id="children" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    17. Children's Privacy
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        The Services are not intended for individuals under 18 years of age. We do not knowingly collect personal data from minors.
                                    </p>
                                </div>
                            </section>

                            {/* Section 18: Business Transfers */}
                            <section id="business-transfers" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    18. Business Transfers
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        In the event of a merger, acquisition, reorganization, or sale of assets, personal data may be transferred as part of the transaction.
                                    </p>
                                </div>
                            </section>

                            {/* Section 19: Indemnification */}
                            <section id="indemnification" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    19. Indemnification
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        You agree to indemnify and hold harmless INAI Worlds from claims arising from your misuse of the Services or violation of this Policy.
                                    </p>
                                </div>
                            </section>

                            {/* Section 20: Limitation of Liability */}
                            <section id="liability" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    20. Limitation of Liability
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        To the maximum extent permitted by law, INAI Worlds shall not be liable for indirect, incidental, consequential, or special damages.
                                    </p>
                                </div>
                            </section>

                            {/* Section 21: Regulatory Compliance */}
                            <section id="compliance" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    21. Regulatory Compliance
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">This Privacy Policy is designed to align with:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Indian Information Technology Act & Digital Personal Data Protection Act (DPDP)</li>
                                        <li>General Data Protection Regulation (GDPR)</li>
                                        <li>California Consumer Privacy Act (CCPA)</li>
                                        <li>Other applicable global data protection laws</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 22: Governing Law */}
                            <section id="governing-law" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    22. Governing Law & Jurisdiction
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        This Policy shall be governed by the laws of India. Courts in India shall have exclusive jurisdiction.
                                    </p>
                                </div>
                            </section>

                            {/* Section 23: Changes */}
                            <section id="changes" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    23. Changes to This Policy
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        We reserve the right to update this Privacy Policy at any time. Changes will be effective upon posting on the Website.
                                    </p>
                                </div>
                            </section>

                            {/* Section 24: Contact */}
                            <section id="contact" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    24. Contact Information
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">For questions, concerns, or requests related to this Privacy Policy:</p>
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

export default PrivacyPolicyPage
