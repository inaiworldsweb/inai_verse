import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function LandingPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans flex flex-col">

            {/* Header */}
            <Header onMenuClick={() => setSidebarOpen(true)} />

            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Layout Wrapper */}
            <div className="flex flex-1 pt-16 md:pt-20"> {/* Added padding for fixed header */}

                {/* Sidebar Space (Desktop Only) */}
                {/* Changed: Hidden on mobile, flex-shrink-0 to prevent compression */}
                <div className="hidden md:block w-64 border-r border-gray-800 flex-shrink-0"></div>

                {/* Main Content */}
                {/* Changed: Adjusted padding to account for the fixed bottom banner on mobile */}
                <main className="flex-1 flex flex-col relative pb-32 md:pb-20">

                    {/* Hero Section */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-12 md:py-20">

                        {/* Main Title */}
                        {/* Changed: Responsive text sizes for better mobile fitting */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-[0.1px] text-center">
                            Welcome to INAI Verse
                        </h1>

                        {/* Subtitle */}
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center tracking-[0.5px]">
                            We are for people, We are for Digital{' '}
                            <span className="inline-flex">
                                <span className="text-[#FF671F]">IN</span>
                                <span className="text-white">D</span>
                                <span className="text-[#046A38]">IA</span>
                            </span>
                        </h2>

                        {/* Divider Line */}
                        <div className="w-full max-w-4xl md:max-w-5xl h-[2px] bg-white my-6"></div>

                        {/* Description */}
                        <div className="max-w-3xl md:max-w-4xl text-center">
                            <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90">
                                INAI Worlds is proudly recognized among the best AI companies building India's next
                                generation of AI tech. We build innovative AI solutions powered by machine learning,
                                deep learning, generative AI and NLP creating AI products that deliver real-world impact.
                            </p>
                        </div>
                    </div>

                </main>
            </div>

            {/* Bottom Banner */}
            {/* <div className="fixed bottom-0 right-0 md:left-64 left-0 bg-white text-black py-2 px-4 md:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between z-40">

                <p className="text-[10px] sm:text-xs md:text-sm font-medium text-center md:text-left leading-tight max-w-md lg:max-w-2xl">
                    INAI Worlds is proudly recognized among the best AI companies building India's next generation of AI tech.
                </p>

                <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 whitespace-nowrap group font-['Inter'] text-sm md:text-base">
                    <span className="relative inline-block overflow-hidden align-top">
                        <span className="invisible">Get Started</span>
                        <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            Get Started
                        </span>
                        <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                            Get Started
                        </span>
                    </span>
                    <svg
                        className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>

            </div> */}

        </div>
    );
}

export default LandingPage;