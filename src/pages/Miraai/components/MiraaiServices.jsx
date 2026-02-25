
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
            <div ref={containerRef} className="relative" style={{ height: '6000px' }}>
                {/* Sticky wrapper - handled by GSAP pin, removed CSS sticky to avoid glitch */}
                <div className="miraai-pin min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-16 overflow-hidden">

                    <h2 className="text-white text-center font-extrabold tracking-tight leading-none text-[25px] md:text-[40px] mb-6 sm:mb-10 uppercase z-10">
                        Here's Exactly How We Work With You
                    </h2>

                    <div className="walk-container flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center w-full max-w-6xl relative z-10">

                        <div ref={consoleRef} className="w-full flex justify-center lg:justify-start order-2 lg:order-1 transform translate-y-8">
                            <CommandConsole services={services} />
                        </div>


                        <div ref={previewRef} className="w-full flex justify-center lg:justify-end order-1 lg:order-2 transform translate-y-8">
                            <ResultPreview services={services} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiraaiServices;
