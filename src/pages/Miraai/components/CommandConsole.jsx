import React, { useRef } from 'react';
import { ArrowRight, Image as ImageIcon, Sparkles, Type, Video, Folder, Users, Globe } from 'lucide-react';

const CommandConsole = ({ services }) => {
    const progressBarRef = useRef(null);
    const statusRef = useRef(null);

    return (
        <div className="w-full flex items-start gap-5">
            {/* Left vertical tool rail - Hidden on mobile, Flex on Desktop */}
            <div className="shrink-0 rounded-2xl bg-gray-100 border border-gray-200 p-2 hidden lg:flex flex-col gap-3">
                {/* 1. Video */}
                <button className="icon-0 w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                    <Video className="w-5 h-5" />
                </button>
                {/* 2. Image */}
                <button className="icon-1 w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                    <ImageIcon className="w-5 h-5" />
                </button>
                {/* 3. Catalog */}
                <button className="icon-2 w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                    <Folder className="w-5 h-5" />
                </button>
                {/* 4. UGC Style Video */}
                <button className="icon-3 w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                    <Users className="w-5 h-5" />
                </button>
                {/* 5. Multi-language Video */}
                <button className="icon-4 w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-700">
                    <Globe className="w-5 h-5" />
                </button>
            </div>

            {/* Prompt pill */}
            <div className="w-full">
                <div className="w-full max-w-xl">
                    <div className="two-pill-wrap space-y-3">
                        {/* First pill: Title (with typing) - always visible */}
                        <div className="title-pill relative flex items-center bg-[#2B2B2B] rounded-full px-5 h-14 shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
                            <div className="flex-1 min-w-0 text-white text-sm sm:text-base truncate">
                                <span className="title-text text-content inline-block align-middle" />
                                <span className="title-cursor cursor-blink inline-block align-middle w-[2px] h-5 bg-[#3B82F6] ml-1 animate-pulse" />
                            </div>
                            <button className="ml-3 h-10 w-10 rounded-full bg-[#2F7CFF] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(47,124,255,0.45)]">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Second pill: Description + Loading - hidden initially, shows after title types */}
                        <div className="desc-pill bg-[#2B2B2B] rounded-2xl px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.14)] opacity-0">
                            <p className="desc-text text-white text-sm leading-snug mb-3" />

                            {/* Loading line inside description pill */}
                            <div className="progress-container opacity-0" ref={progressBarRef}>
                                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                                    <div className="progress-fill h-full bg-[#2F7CFF] w-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Done badge outside pills */}
                    <div className="status-container mt-4 opacity-0" ref={statusRef}>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            Done 1/1
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommandConsole;