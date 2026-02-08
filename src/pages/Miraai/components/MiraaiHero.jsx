import React from 'react';
import { motion } from 'framer-motion';

const MiraaiHero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.div
            className="text-center mb-20 md:mb-24 max-w-4xl mx-auto flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight px-4"
                variants={itemVariants}
            >
                We Create <motion.span
                    className="text-white inline-block"
                    animate={{
                        textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 15px rgba(255,255,255,0.4)", "0 0 0px rgba(255,255,255,0)"]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    Professional Videos
                </motion.span><br /> & <br />Visuals for Your Brand <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/40 inline-block"
                    animate={{
                        textShadow: ["0 0 10px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 10px rgba(255,255,255,0)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    Using AI
                </motion.span>
            </motion.h1>

            <motion.p
                className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium px-6 mb-8 md:mb-10"
                variants={itemVariants}
            >
                No cameras. No studios. No crews. <br className="hidden sm:block" />
                Just give us your ideas—we'll deliver broadcast-quality content in days using advanced AI technology.
            </motion.p>

            <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                    bg-white text-black border-none 
                    py-3 px-8 rounded-full 
                    text-sm font-semibold cursor-pointer 
                    flex items-center gap-2 
                    transition-all duration-200
                    shadow-[0_0_20px_rgba(255,255,255,0.1)]
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
                "
            >
                Get Started <span aria-hidden="true">›</span>
            </motion.button>
        </motion.div>
    );
};

export default MiraaiHero;
