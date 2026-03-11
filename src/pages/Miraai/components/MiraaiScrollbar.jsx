import React from 'react';

const MiraaiScrollbar = ({ children, className = '', global = true, height = "h-full" }) => {
    // Increased visibility: Wider track and more opaque thumb
    const scrollbarStyles = `
        /* 1. Global Scrollbar Width - Increased to 16px for visibility */
        ::-webkit-scrollbar {
            width: 16px !important;
            height: 16px !important;
        }

        /* 2. Scrollbar Track - Added a very subtle background so you can see the 'path' */
        ::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05) !important;
            margin-block: 4px;
        }

        /* 3. The Thumb - Made it much brighter (0.6 opacity) */
        ::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.6) !important; 
            border-radius: 20px !important;
            
            /* Border thickness reduced to 4px so the white part stays thick and visible */
            border: 4px solid transparent;
            background-clip: padding-box;
        }

        /* 4. Hover State - Full white for maximum visibility */
        ::-webkit-scrollbar-thumb:hover {
            background-color: rgba(255, 255, 255, 0.9) !important;
        }

        /* Firefox Support */
        * {
            scrollbar-width: auto;
            scrollbar-color: rgba(255, 255, 255, 0.6) rgba(255, 255, 255, 0.05);
        }
    `;

    if (global) {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
                {children}
            </>
        );
    }

    return (
        <div className={`overflow-y-auto overflow-x-hidden ${className} miraai-custom-scrollbar ${height}`}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .miraai-custom-scrollbar::-webkit-scrollbar {
                    width: 16px;
                }
                .miraai-custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.6) !important;
                    border-radius: 20px;
                    border: 4px solid transparent;
                    background-clip: padding-box;
                }
                .miraai-custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(255, 255, 255, 0.9) !important;
                }
            `}} />
            {children}
        </div>
    );
};

export default MiraaiScrollbar;