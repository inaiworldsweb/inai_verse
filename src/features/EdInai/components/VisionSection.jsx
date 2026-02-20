import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import createProfileImg from '../../../assets/final/inside edinai portal - create your admin profile.png'
import uploadSyllabusImg from '../../../assets/final/Upload & Organize Curriculum.png'
import scheduleLecturesImg from '../../../assets/final/Schedule AI-Assisted Lectures.png'
import runClassesImg from '../../../assets/final/inside the ed inai - let ed inai execute.png'

export const implementationSteps = [
    {
        id: 'register-institution',
        title: 'Register your institution and create an admin profile.',
        image: createProfileImg,
    },
    {
        id: 'upload-syllabus',
        title: 'Upload your syllabus or academic modules.',
        image: uploadSyllabusImg,
    },
    {
        id: 'schedule-lectures',
        title: 'Schedule AI-led lectures and assign topics.',
        image: scheduleLecturesImg,
    },
    {
        id: 'run-classes',
        title: 'Let Ed-INAI conduct classes, handle Q&A, and generate analytics.',
        image: runClassesImg,
    },
]

const VisionSection = () => {
    const navigate = useNavigate()

    const handleLearnMore = () => {
        navigate('/stepspage')
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="py-10 md:py-16" id="vision">
            <div className="max-w-content mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="my-6"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-center mb-2 text-white px-4">How to Implement ED-INAI in Your Institution?</h2>
                    <p className="text-center text-white/70 mb-8 px-4 text-sm sm:text-base">Implementation Steps</p>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-[1240px] mx-auto"
                    >
                        {implementationSteps.map(({ id, title, image }) => (
                            <motion.div
                                key={id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="bg-white/[0.03] rounded-[15px] p-6 text-center border border-white/5 transition-colors hover:border-white/10"
                            >
                                <figure className="rounded-[10px] overflow-hidden mb-4 bg-zinc-900 border border-white/5">
                                    <motion.img
                                        src={image}
                                        alt={title}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-[250px] object-cover object-top"
                                        loading="lazy"
                                    />
                                </figure>
                                <p className="text-sm text-white/80 leading-normal font-medium px-4">{title}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-center mt-12"
                >
                    <button
                        type="button"
                        className="bg-white text-black border-none py-3.5 px-8 rounded-[50px] text-sm font-semibold lowercase cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 active:scale-95"
                        onClick={handleLearnMore}
                    >
                        learn more
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default VisionSection
