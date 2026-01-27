import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import PageHeader from '../components/PageHeader'

import logoImage from '../assets/Inai Verse White Tred mark (1).png'
import { FiCheck } from 'react-icons/fi'

const pricingPlans = [
    {
        id: 'easy-to-in',
        name: 'Easy to In',
        subtitle: 'Affordable package to start teaching easily',
        price: '20K',
        priceLabel: 'in/package',
        features: [
            '45 videos (1-year duration)',
            '720p max quality',
            '30 min maximum lecture length',
            '4 AI-generated videos per lecture',
            '2 topics added in every lecture',
            'Basic level Q&A with AI',
            'Normal teacher visuals (INAI, AIRA, VINAI)',
            'Unlimited student browsing',
            'Supports all languages',
            'iOS & Android student apps',
            '0% transaction fee',
            'Global payments & taxes included',
            '24/7 email technical support',
            '24/7 email student support',
            'Extra credit: ₹500 per lecture',
            'Extra AI-generated video: ₹30 per video',
        ],
    },
    {
        id: 'education-ride',
        name: 'Education Ride',
        subtitle: 'More features for better teaching and learning.',
        price: '50K',
        priceLabel: 'in/package',
        featured: true,
        features: [
            '120 videos (1-year duration)',
            '45 min maximum lecture length',
            '6 AI-generated videos per lecture',
            '5 topics added per lecture',
            'Add logo in every lecture',
            'AI technical lecture (basic level)',
            'Free coding lectures (C, C++, React.js, HTML)',
            '200+ book suggestions',
            '20 lectures downloadable offline',
            'Advanced level Q&A with AI',
            '10% discount on student charges',
            'Supports all languages',
            'Semi-realistic teacher visuals (INAI, AIRA, VINAI)',
            'Unlimited student browsing',
            'iOS & Android student apps',
            '0% transaction fee',
            'Global payments & taxes included',
            '24/7 email & chat technical support',
            '24/7 email & chat student support',
            'Extra credit: ₹400 per lecture',
            'Extra AI-generated video: ₹25 per video',
        ],
    },
    {
        id: 'deep-learning',
        name: 'Deep learning',
        subtitle: 'For deep learning and classic lecture design',
        price: '100K',
        priceLabel: 'in/package',
        features: [
            '250 videos (1-year duration)',
            '1440p max quality',
            '60 min maximum lecture length',
            '8 AI-generated videos per lecture',
            '10 topics added per lecture',
            'Deep storyline lectures with examples',
            'Captions in English & Hindi',
            'Add logo in every lecture',
            'AI technical lecture (researcher level)',
            'Free coding lectures (C, C++, HTML, CSS, Java, Python, React.js)',
            '500+ book suggestions',
            '50 lectures downloadable offline',
            'Research-level Q&A with AI',
            '15% discount on student charges',
            'Supports all languages',
            'Hyper-realistic teacher visuals (INAI, AIRA, VINAI)',
            'Custom teacher avatar creation',
            'Access to prototype-stage new updates',
            'Unlimited student browsing',
            'iOS & Android student apps',
            '0% transaction fee',
            'Global payments & taxes included',
            '24/7 email, chat & call technical support',
            '24/7 email, chat & call student support',
            'Extra credit: ₹300 per lecture',
            'Extra AI-generated video: ₹20 per video',
        ],
    },
]

const navItems = [
    'Pricing '
]

const PricingPage = () => {
    const navigate = useNavigate()
    const handleBuyNowClick = (plan) => {
        console.log('Buy now clicked for plan:', plan.name)
        // Open PayU checkout form with plan details
        const priceInRupees = plan.price.replace('K', '000')
        window.open(`/checkout.html?plan=${encodeURIComponent(plan.name)}&price=${priceInRupees}`, '_blank')
    }

    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <header className="flex items-center justify-between py-6 px-8 lg:px-12">
                <Link to="/">
                    <img src={logoImage} alt="INAI Verse logo" className="w-full max-w-[100px] h-auto" />
                </Link>
                <PageHeader
                    showBackButton={false}
                    showPriceButton={true}
                    showHomeButton={true}
                    showMenuButton={true}
                    onPriceClick={() => { }}
                />
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="py-16 pb-24">
                    <div className="max-w-[1200px] mx-auto">
                        {/* Page Title */}
                        <div className="text-center mb-16">
                            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Pricing</h1>
                            <p className="text-white/70 text-lg">See pricing for private education center</p>
                        </div>

                        {/* Pricing Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                            {pricingPlans.map((plan) => (
                                <div
                                    key={plan.id}
                                    className="relative border border-white/20 rounded-2xl p-6 lg:p-10 flex flex-col bg-transparent transition-all duration-300 hover:border-white/40"
                                >
                                    {/* Plan Header - Centered */}
                                    <div className="mb-10 text-center">
                                        <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                                        <p className="text-[10px] text-white/70 font-medium leading-relaxed tracking-wide">{plan.subtitle}</p>
                                    </div>

                                    {/* Features List - Left Aligned */}
                                    <ul className="space-y-2.5 mb-12 flex-grow">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-[11px] leading-snug group">
                                                <FiCheck className="w-3.5 h-3.5 text-white flex-shrink-0 mt-0.5 opacity-80" />
                                                <span className="text-white/90">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Price and Button - Centered at bottom */}
                                    <div className="mt-auto pt-8 flex flex-col items-center">
                                        <div className="mb-8 flex items-baseline gap-2">
                                            <span className="text-4xl font-bold">{plan.price}</span>
                                            <span className="text-[10px] text-white/60 font-medium uppercase tracking-wider">{plan.priceLabel}</span>
                                        </div>

                                        <button
                                            onClick={() => handleBuyNowClick(plan)}
                                            className="w-full max-w-[170px] bg-white text-black py-2.5 rounded-full text-xs font-bold transition-all duration-300 hover:bg-gray-200 shadow-lg"
                                        >
                                            Buy now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>


        </div >
    )
}

export default PricingPage
