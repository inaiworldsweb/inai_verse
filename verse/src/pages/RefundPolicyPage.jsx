import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const sections = [
    { id: 'scope', title: 'Scope of Products & Services', number: '1' },
    { id: 'general-refund', title: 'General Refund Policy', number: '2' },
    { id: 'subscriptions', title: 'Subscription-Based Services', number: '3' },
    { id: 'one-time', title: 'One-Time Purchases & Digital Products', number: '4' },
    { id: 'usage-based', title: 'Usage-Based & API Services', number: '5' },
    { id: 'custom-enterprise', title: 'Custom & Enterprise Services', number: '6' },
    { id: 'free-trials', title: 'Free Trials & Promotional Offers', number: '7' },
    { id: 'failed-payments', title: 'Failed or Incorrect Payments', number: '8' },
    { id: 'refund-processing', title: 'Refund Processing', number: '9' },
    { id: 'taxes', title: 'Taxes & Government Charges', number: '10' },
    { id: 'suspension', title: 'Suspension or Termination', number: '11' },
    { id: 'chargebacks', title: 'Chargebacks & Payment Disputes', number: '12' },
    { id: 'modifications', title: 'Policy Modifications', number: '13' },
    { id: 'governing-law', title: 'Governing Law & Jurisdiction', number: '14' },
    { id: 'contact', title: 'Contact Information', number: '15' },
]

const RefundPolicyPage = () => {
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('scope')
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
                title="Refund & Cancellation Policy"
                showBackButton={true}
                showPriceButton={false}
                showHomeButton={true}
                showMenuButton={true}
            />

            {/* Hero Section */}
            <div className="pt-24 pb-12 px-4 border-b border-white/10">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                        Refund & Cancellation Policy
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
                                    This Refund & Cancellation Policy ("Policy") applies to all payments, purchases, subscriptions, licenses, and transactions made with <strong>INAI Worlds Private Limited</strong> ("INAI Worlds", "Company", "we", "us", or "our") through our website <a href="https://inaiworlds.com/" className="text-blue-400 hover:text-blue-300">https://inaiworlds.com/</a>, applications, platforms, APIs, artificial intelligence products, software solutions, or any related services (collectively, the "Services").
                                </p>
                                <p className="text-white/80 leading-relaxed mb-4">
                                    This Policy is drafted to keep the Company on the maximum safe side, while maintaining transparency for customers using different products and pricing models.
                                </p>
                                <p className="text-white/80 leading-relaxed font-medium">
                                    By making any payment or using any paid Service, you acknowledge that you have read, understood, and agreed to this Policy.
                                </p>
                            </div>

                            {/* Section 1: Scope */}
                            <section id="scope" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    1. Scope of Products & Services
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">INAI Worlds offers multiple types of products and services, including but not limited to:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>AI-powered software, tools, and platforms</li>
                                        <li>SaaS products and subscriptions</li>
                                        <li>APIs and usage-based services</li>
                                        <li>Virtual AI models and digital solutions</li>
                                        <li>Enterprise, consulting, and custom-developed services</li>
                                    </ul>
                                    <p className="text-white/80">Each product or service may have different pricing, billing methods, delivery timelines, and refund eligibility.</p>
                                </div>
                            </section>

                            {/* Section 2: General Refund Policy */}
                            <section id="general-refund" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    2. General Refund Policy
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">Unless explicitly mentioned in writing for a specific product or service:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>All payments made to INAI Worlds are <strong>non-refundable</strong></li>
                                        <li>Once a payment is successfully processed, it cannot be reversed</li>
                                        <li>No refunds will be issued for partial usage, non-usage, or change of mind</li>
                                    </ul>
                                    <p className="text-white/80">Any exception to this rule must be clearly stated on the product page, proposal, invoice, or a signed agreement.</p>
                                </div>
                            </section>

                            {/* Section 3: Subscriptions */}
                            <section id="subscriptions" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    3. Subscription-Based Services
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">For subscription or recurring billing services:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Users may cancel future renewals at any time</li>
                                        <li>Cancellation prevents future billing only</li>
                                        <li>No refunds are provided for the current or previous billing cycles</li>
                                        <li>Access to the Service remains active until the end of the paid period unless suspended for policy violations</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 4: One-Time Purchases */}
                            <section id="one-time" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    4. One-Time Purchases & Digital Products
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">For one-time payments, licenses, or digital products:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>All sales are final and non-refundable once access or delivery is provided</li>
                                        <li>Refunds will not be granted for dissatisfaction, feature expectations, or lack of usage</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 5: Usage-Based */}
                            <section id="usage-based" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    5. Usage-Based, API & Credit-Based Services
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">For usage-based pricing models, APIs, or credit systems:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Charges are calculated based on actual usage</li>
                                        <li>Unused credits, quotas, or balances are non-refundable</li>
                                        <li>Users are responsible for monitoring usage and limits</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 6: Custom Enterprise */}
                            <section id="custom-enterprise" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    6. Custom, Enterprise & Development Services
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">For custom-built, enterprise-level, or tailor-made services:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>All advance, milestone, or full payments are strictly non-refundable</li>
                                        <li>Once development, configuration, onboarding, or resource allocation has started, cancellation is not permitted</li>
                                        <li>Any agreed exception must be documented in writing and approved by the Company</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 7: Free Trials */}
                            <section id="free-trials" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    7. Free Trials, Demos & Promotional Offers
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">If a free trial or demo is offered:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>No payment is required during the trial period</li>
                                        <li>No refunds are applicable once a paid plan is activated</li>
                                        <li>Promotional or discounted offers are non-refundable unless explicitly stated</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 8: Failed Payments */}
                            <section id="failed-payments" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    8. Failed, Duplicate or Incorrect Payments
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">In case of:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Duplicate transactions</li>
                                        <li>Payment deducted but Service not activated</li>
                                        <li>Technical errors caused by payment gateways</li>
                                    </ul>
                                    <p className="text-white/80">
                                        Users must notify us within <strong>7 days</strong> of the transaction at <a href="mailto:info@inaiworlds.com" className="text-blue-400 hover:text-blue-300">info@inaiworlds.com</a>. After verification, eligible corrections or refunds may be processed at the Company's discretion.
                                    </p>
                                </div>
                            </section>

                            {/* Section 9: Refund Processing */}
                            <section id="refund-processing" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    9. Refund Processing (If Approved)
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">If a refund is approved as an exception:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Refunds will be issued via the original payment method</li>
                                        <li>Processing may take 7–14 business days depending on banks or gateways</li>
                                        <li>Payment gateway or transaction charges may be deducted</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 10: Taxes */}
                            <section id="taxes" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    10. Taxes & Government Charges
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Taxes, including GST or other statutory charges, once paid are non-refundable</li>
                                        <li>Tax treatment will follow applicable government regulations</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 11: Suspension */}
                            <section id="suspension" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    11. Suspension or Termination by Company
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">INAI Worlds reserves the right to suspend or terminate access to Services without refund if:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside">
                                        <li>Terms & Conditions are violated</li>
                                        <li>Fraud, abuse, or unlawful activity is detected</li>
                                        <li>Misuse of AI systems or Services occurs</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 12: Chargebacks */}
                            <section id="chargebacks" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    12. Chargebacks & Payment Disputes
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">Initiating a chargeback without contacting INAI Worlds may result in:</p>
                                    <ul className="space-y-2 text-white/80 list-disc list-inside mb-4">
                                        <li>Immediate suspension of Services</li>
                                        <li>Permanent termination of accounts</li>
                                        <li>Recovery actions or legal proceedings where necessary</li>
                                    </ul>
                                    <p className="text-white/80">Users are encouraged to contact us first for dispute resolution.</p>
                                </div>
                            </section>

                            {/* Section 13: Modifications */}
                            <section id="modifications" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    13. Policy Modifications
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        INAI Worlds reserves the right to update or modify this Policy at any time. Updated versions will be posted on the Website and will be effective immediately.
                                    </p>
                                </div>
                            </section>

                            {/* Section 14: Governing Law */}
                            <section id="governing-law" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    14. Governing Law & Jurisdiction
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80">
                                        This Policy shall be governed by the laws of India. Courts located in India shall have exclusive jurisdiction.
                                    </p>
                                </div>
                            </section>

                            {/* Section 15: Contact */}
                            <section id="contact" className="mb-12 scroll-mt-24">
                                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                                    15. Contact Information
                                </h2>
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-white/80 mb-4">For refund or cancellation-related questions, please contact:</p>
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

export default RefundPolicyPage
