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
            {/* The total scrollable length */}
            <div ref={containerRef} className="relative" style={{ height: '6000px' }}>

                {/* STICKY WRAPPER 
                   We use pt-10 to pt-24 to ensure the heading isn't touching the very top edge.
                */}
                <div className="miraai-pin sticky top-10 min-h-screen flex flex-col items-center justify-start px-4 sm:px-6 overflow-hidden pt-12  md:pt-20">

                    {/* 1. THE HEADING (Now stays visible inside the pin) */}
                    <div className="w-full flex flex-col items-center justify-center mb-8 md:mb-12">
                        <h2 className="text-white text-center font-bold tracking-[1px] [font-stretch:700%] leading-none text-[25px] md:text-[40px] mb-4  z-10">
                            Here's Exactly How We Work With You
                        </h2>
                        <p className="text-[#ccc] text-center tracking-tight leading-none text-[16px] md:text-[21px] mb-2 z-10">
                            We're your AI-powered creative production team. You brief us. We create. Simple.
                        </p>
                    </div>

                    {/* 2. THE ANIMATION CONTENT (Console & Preview) */}
                    <div className="walk-container flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-14 items-start w-full max-w-6xl relative z-10">

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