import { useNavigate, Link } from 'react-router-dom'

import PageHeader from '../components/PageHeader'

import logoImage from '../assets/Inai Verse White Tred mark (1).png'
import { FiCheck } from 'react-icons/fi'

const pricingPlans = [
    {
        id: 'easy-to-in',
        name: 'Easy to In',
        subtitle: 'Affordable package to start teaching easily',
        price: '₹19,999',
        originalPrice: '₹24,999',
        discountBadge: '20% off',
        checkoutPrice: '19999',
        offerNote: 'Limited-time launch offer: You save 20% on this plan.',
        priceLabel: '/month ',
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
        price: '₹49,999',
        originalPrice: '₹64,999',
        discountBadge: '23% off',
        offerNote: 'Limited-time launch offer: You save 23% on this plan.',
        priceLabel: '/month ',
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
        price: '₹99,999',
        originalPrice: '₹1,49,999',
        discountBadge: '33% off',
        offerNote: 'Limited-time launch offer: You save 33% on this plan.',
        priceLabel: '/month ',
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
        console.log('Buy now clicked for plan:', plan.name);
        // Get the price, handling both checkoutPrice and price formats
        let price = plan.checkoutPrice || plan.price;
        // Remove any non-numeric characters except decimal point
        price = price.replace(/[^\d.]/g, '');
        // If price was in 'K' format (e.g., '19K'), convert to full amount
        if (plan.price.includes('K')) {
            price = (parseFloat(price) * 1000).toString();
        }
        // Ensure it's a valid number
        price = parseFloat(price).toFixed(2);

        // Encode the plan name and open checkout page
        const encodedPlan = encodeURIComponent(plan.name);
        navigate(`/checkout?plan=${encodedPlan}&amount=${price}`);
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
                                    className="relative border border-white/20 rounded-2xl p-6 lg:p-10 flex flex-col bg-transparent transition-all duration-300 hover:border-white/40 overflow-hidden"
                                >
                                    {/* Diagonal Status Ribbon */}
                                    <div className="absolute top-0 right-0 overflow-hidden w-24 h-24 sm:w-32 sm:h-32 pointer-events-none">
                                        <div className="absolute top-4 sm:top-6 -right-12 sm:-right-10 w-36 sm:w-40 bg-[#86ff78] text-black text-[9px] sm:text-[10px] font-black py-1.5 rotate-45 text-center shadow-[0_0_15px_rgba(134,255,120,0.5)] uppercase tracking-[0.15em] sm:tracking-[0.2em] border-y border-black/10">
                                            {plan.featured ? '23% off' : (plan.id === 'easy-to-in' ? '20% off' : '33% off')}
                                        </div>
                                    </div>

                                    {/* Plan Header with price & CTA */}
                                    <div className="mb-8 md:mb-12 text-center">
                                        <div className="flex flex-col items-center gap-2 mb-3">
                                            <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold px-8">{plan.name}</h2>
                                        </div>
                                        <p className="text-[11px] sm:text-xs md:text-sm text-white/70 font-medium leading-relaxed tracking-wide px-4">{plan.subtitle}</p>

                                        <div className="mt-8 md:mt-10 flex flex-col items-center gap-5">
                                            <div className="flex flex-col items-center gap-3">
                                                {plan.originalPrice && (
                                                    <span className="text-white/30 font-semibold line-through tracking-wide text-[2rem] sm:text-[2.2rem] md:text-[2.4rem]">
                                                        {plan.originalPrice}
                                                    </span>
                                                )}
                                                <div className="flex items-baseline gap-2 sm:gap-3">
                                                    <span className="tracking-tight text-white text-[2.2rem] sm:text-[2.6rem] md:text-[3.2rem] font-bold">
                                                        {plan.price}
                                                    </span>
                                                    <span className="text-[10px] sm:text-xs md:text-sm text-white/50 font-semibold uppercase tracking-widest">
                                                        {plan.priceLabel}
                                                    </span>
                                                </div>
                                                {plan.offerNote && (
                                                    <p className="text-[10px] sm:text-[11px] md:text-xs text-white/80 font-semibold tracking-wide text-center bg-white/5 py-1.5 px-3 rounded-lg border border-white/5 mx-2">
                                                        {plan.offerNote}
                                                    </p>
                                                )}
                                            </div>

                                            <button
                                                onClick={() => handleBuyNowClick(plan)}
                                                className="w-full py-3 sm:py-4 px-6 rounded-[50px] font-bold transition-all duration-300 bg-white text-black hover:bg-gray-200 shadow-sm text-sm sm:text-base"
                                            >
                                                Buy now
                                            </button>
                                        </div>
                                    </div>

                                    {/* Features List */}
                                    <ul className="space-y-3 mt-auto">
                                        {plan.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-4 text-sm md:text-base leading-relaxed group">
                                                <FiCheck className="w-4 h-4 text-white flex-shrink-0 mt-1 opacity-90" />
                                                <span className="text-white/95">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
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
