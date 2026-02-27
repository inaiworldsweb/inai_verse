import React from 'react';

const MiraaiScrollbar = ({ children, className = '', global = true, height = "h-full" }) => {
    if (global) {
        return (
            <>
                <style dangerouslySetInnerHTML={{
                    __html: `
                    /* 1. Global Scrollbar Width */
                    ::-webkit-scrollbar {
                        width: 14px !important;
                    }

                    /* 2. Scrollbar Track */
                    ::-webkit-scrollbar-track {
                        background: rgba(255, 255, 255, 0.02);
                        margin-block: 4px;
                    }

                    /* 3. THE HANDLER (THUMB) FIX */
                    ::-webkit-scrollbar-thumb {
                        background-color: rgba(255, 255, 255, 0.5) !important;
                        border-radius: 20px !important;
                        
                      
                        border: 3px solid transparent;
                        background-clip: padding-box;

                        /* Force Minimum Height */
                        min-height: 500px !important; 
                    }

                    /* 4. HACK TO FORCE HEIGHT: 
                       Invisible buttons track ka space gher lete hain, 
                       jiski wajah se thumb ko bada hona padta hai */
                    ::-webkit-scrollbar-button:vertical:start:increment,
                    ::-webkit-scrollbar-button:vertical:end:decrement {
                        display: block;
                        height: 500px;
                        background: transparent;
                    }

                    ::-webkit-scrollbar-thumb:hover {
                        background-color: rgba(255, 255, 255, 0.8) !important;
                    }

                    /* Firefox Support */
                    * {
                        scrollbar-width: auto;
                        scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
                    }
                `}} />
                {children}
            </>
        );
    }

    return (
        <div className={`overflow-y-auto overflow-x-hidden ${className} miraai-custom-scrollbar ${height}`}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .miraai-custom-scrollbar::-webkit-scrollbar {
                    width: 12px;
                }
                .miraai-custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.5) !important;
                    border-radius: 10px;
                    min-height: 150px !important;
                    border: 2px solid transparent;
                    background-clip: padding-box;
                }
            `}} />
            {children}
        </div>
    );
};

export default MiraaiScrollbar;