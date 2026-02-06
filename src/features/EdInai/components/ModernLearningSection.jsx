import React from 'react';
import { motion } from 'framer-motion';
import mainModernImg from '../../../assets/final/AI Teachers that Never Tire (2).png';
import smartDashboardImg from '../../../assets/final/Smart dashboard and real time feedback.png';
import engagingVisualsImg from '../../../assets/final/engaging visuals and gamified learning.png';

const features = [
    {
        id: 'dashboards',
        image: smartDashboardImg,
        title: 'Smart dashboards and\nreal-time feedback',
    },
    {
        id: 'visuals',
        image: engagingVisualsImg,
        title: 'Engaging visuals and\ngamified learning',
    },
]

const ModernLearningSection = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="py-16 bg-black overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-[2rem] font-bold text-white mb-4">Made for the Modern Learning Generation</h2>
                    <p className="text-sm text-white/70 max-w-[700px]">
                        Ed-INAI bridges innovation and education, creating a dynamic ecosystem for schools and colleges.
                    </p>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Left Column - Large Feature Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex rounded-[20px] overflow-hidden bg-white/5 max-h-[400px] border border-white/5"
                    >
                        <motion.img
                            src={mainModernImg}
                            alt="AI-powered interactive learning"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-contain p-4"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Right Column - Two Feature Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-6"
                    >
                        {features.map(({ id, image, title }) => (
                            <motion.div
                                key={id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="bg-white/5 rounded-[15px] overflow-hidden border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-colors flex-1"
                            >
                                <div className="grid grid-cols-[240px_1fr] h-full items-stretch">
                                    {/* Card Image */}
                                    <div className="h-full overflow-hidden flex items-center justify-center bg-black/10">
                                        <motion.img
                                            src={image}
                                            alt={title}
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex items-center px-6 py-4">
                                        <h3 className="text-lg md:text-xl font-semibold text-white whitespace-pre-line leading-relaxed">
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Section - AI-led Interactive Lectures */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-[900px]"
                >
                    <h3 className="text-[1.5rem] font-bold text-white mb-4">AI-led interactive lectures</h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                        ED-INAI brings together innovation and education to create a smart, connected learning ecosystem for schools and colleges.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default ModernLearningSection
