import React from 'react';
import CommandConsole from './CommandConsole';
import ResultPreview from './ResultPreview';
import useMiraaiAnimation from '../../../hooks/useMiraaiAnimation';
import step1Img from "../../../Assetsa/N-1.webp";
import step2Img from "../../../Assetsa/N-2.webp";
import step3Img from "../../../Assetsa/N-3.webp";
import step4Img from "../../../Assetsa/N-4.webp";
import step5Img from "../../../Assetsa/N-5.webp";

const MiraaiServices = () => {
    const services = [
        {
            title: 'We Create AI Videos',
            description: 'generate professional videos from scratch using AI—no filming required.',
            thumbnail: step1Img,
        },
        {
            title: 'We Create AI Images & Visuals',
            description: 'generate high-quality photos, graphics, and designs using AI—no photographers needed.',
            thumbnail: step2Img,
        },
        {
            title: 'We Create AI Product & Catalogs',
            description: 'Send us your product list—we create complete digital catalogs with professional visuals automatically.',
            thumbnail: step3Img,
        },
        {
            title: 'We Create AI UGC- Style Video Ads',
            description: 'High-converting UGC style ads that look authentic and drive massive engagement.',
            thumbnail: step4Img,
        },
        {
            title: 'We Create AI Multi - languages Videos',
            description: 'Create your video once in English—we deliver it in Hindi, Gujarati, Tamil, and 7+ other languages.',
            thumbnail: step5Img,
        },
    ];

    const { consoleRef, previewRef, containerRef } = useMiraaiAnimation(services);

    return (
        <section className="relative bg-black text-white overflow-visible">
            {/* Main scroll container */}
            <div ref={containerRef} className="relative" style={{ height: '6000px' }}>
                
                {/* 1. Normal Flow Header (Scrolls out of view) */}
                <div className="w-full flex flex-col items-center justify-center px-4 pt-12 md:pt-18 pb-2">
                    <h2 className="text-white text-center font-extrabold tracking-tight leading-none text-[25px] md:text-[40px] mb-4 md:mb-6 uppercase z-10">
                        Here's Exactly How We Work With You
                    </h2>
                    <p className="text-white/40 text-center tracking-tight leading-none text-[13px] md:text-[20px] uppercase z-10">
                        We're your AI-powered creative production team. You brief us. We create. Simple.
                    </p>
                </div>

                {/* 2. Pinning Area - 'items-start' and 'pt-0' for maximum top alignment */}
                <div className="miraai-pin sticky top-0 min-h-screen flex items-start justify-center px-4 sm:px-6 overflow-hidden">
                    
                    {/* Minimal Padding Top (pt-2) ensures it sticks almost at the very top */}
                    <div className="walk-container flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start w-full max-w-6xl relative z-10 pt-2 md:pt-4">

                        {/* Command Console */}
                        <div ref={consoleRef} className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
                            <CommandConsole services={services} />
                        </div>

                        {/* Result Preview */}
                        <div ref={previewRef} className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
                            <ResultPreview services={services} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiraaiServices;