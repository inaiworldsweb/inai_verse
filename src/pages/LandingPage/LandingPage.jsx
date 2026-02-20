import { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function LandingPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">

            {/* Header */}
            <Header onMenuClick={() => setSidebarOpen(true)} />

            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Layout Wrapper */}
            <div className="flex">

                    {/* Subtitle */}
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center tracking-tight">
                        We are for people, We are for Digital{' '}
                        <span className="inline-flex">
                            <span className="text-[#FF671F]">IN</span>
                            <span className="text-white">D</span>
                            <span className="text-[#046A38]">IA</span>
                        </span>
                    </h2>

                {/* Main Content */}
                <main className="flex-1 min-h-screen flex flex-col relative">

                    {/* Hero Section */}
                    <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 pt-20 pb-32">

                        {/* Main Title */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-center">
                            Welcome to INAI Verse
                        </h1>

                        {/* Subtitle */}
                        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center tracking-tight">
                            We are for people, We are for new{' '}
                            <span className="inline-flex">
                                <span className="text-[#FF671F]">IN</span>
                                <span className="text-white">D</span>
                                <span className="text-[#046A38]">IA</span>
                            </span>
                        </h2>

                        {/* Divider Line */}
                        <div className="w-full max-w-5xl h-[2px] bg-white my-6"></div>



                        {/* Description */}
                        <div className="max-w-4xl text-center">
                            <p className="text-sm md:text-lg leading-relaxed">
                                INAI Worlds is proudly recognized among the best AI companies building India's next
                                generation of AI tech. We build innovative AI solutions powered by machine learning,
                                deep learning, generative AI and NLP creating AI products that deliver real-world impact.
                            </p>
                        </div>
                    </div>

                </main>
            </div>

            {/* Bottom Banner */}
            <div className="fixed bottom-0 right-0 md:left-64 left-0 bg-white text-black py-2 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-40">

                <p className="text-sm md:text-base font-medium mb-4 md:mb-0 text-center md:text-left">
                    INAI Worlds is proudly recognized among the best AI companies building India's next generation of AI tech.
                </p>

                <button className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 whitespace-nowrap group">
                    Get Started
                    <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>

            </div>

        </div>
    );
}

export default LandingPage;
