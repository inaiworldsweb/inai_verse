import React, { useRef } from 'react';
import { Video, Image as ImageIcon, Folder, Users, Globe } from 'lucide-react';

const ResultPreview = ({ services }) => {
    const imageRefs = useRef([]);

    return (
        <div className="w-full max-w-2xl">
            {/* Icon status row - Visual feedback for active service type - Hidden on Desktop */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 lg:hidden">
                {/* 1. Video */}
                <div className="icon-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 shadow-lg">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                {/* 2. Image */}
                <div className="icon-1 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 shadow-lg">
                    <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                {/* 3. Catalog */}
                <div className="icon-2 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 shadow-lg">
                    <Folder className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                {/* 4. UGC Style Video */}
                <div className="icon-3 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 shadow-lg">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                {/* 5. Multi-language Video */}
                <div className="icon-4 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 shadow-lg">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
            </div>

            {/* Image Preview Window */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/5 mx-auto">
                {/* Service images - toggled by GSAP via the 'service-image' class */}
                {services.map((service, index) => (
                    <img
                        key={service.title}
                        ref={(el) => (imageRefs.current[index] = el)}
                        className="service-image absolute inset-0 w-full h-full object-cover opacity-0"
                        src={service.thumbnail}
                        alt={service.title}
                    />
                ))}

                {/* Floating UI element (top-right) */}
                <button
                    type="button"
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center text-white z-10"
                    aria-label="Options"
                >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h.01M12 12h.01M18 12h.01" />
                    </svg>
                </button>

                {/* Accessibility Label */}
                <div className="sr-only">
                    <span id="service-label">AI Preview Generation</span>
                </div>
            </div>

            {/* Action Button - Centered below preview - Visible ONLY on Desktop (Normal) */}
            <div className="hidden lg:flex justify-center mt-6 sm:mt-10">
                <button
                    type="button"
                    className="group px-6 py-2.5 sm:px-10 sm:py-4 rounded-full bg-white text-black font-bold text-sm sm:text-base uppercase tracking-wider shadow-[0_15px_35px_rgba(255,255,255,0.12)] hover:bg-gray-100 transition-transform duration-200"
                >
                    <span className="relative inline-block overflow-hidden align-top">
                        <span className="invisible">Start Now</span>
                        <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                            Start Now
                        </span>
                        <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                            Start Now
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ResultPreview;
