import { useNavigate } from 'react-router-dom'
import featureImage from '../../../Assetsa/e.png'

const modeCards = [
    {
        id: 'live-lectures',
        image: featureImage,
        title: 'Live Lectures via AI',
        description:
            'Experience real-time, interactive teaching with virtual AI teachers like INAI, VIMAI, and ARIA. Visual explanations keep every concept engaging and personalised.',
    },
    {
        id: 'recorded-revisions',
        image: featureImage,
        title: 'Recorded Revisions',
        description:
            'Access AI-led lessons anytime for quick revisions and deeper understanding. Learners revisit topics at their own pace for flexible, self-directed study.',
    },
    {
        id: 'interactive-quizzes',
        image: featureImage,
        title: 'Interactive Quizzes and Challenges',
        description:
            'AI-generated quizzes and challenges test understanding in the moment, reinforcing memory with tailored feedback and immersive practice.',
    },
]

const LearningModesSection = () => {
    const navigate = useNavigate()
    return (
        <section className="py-16 bg-black" id="learning-modes">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-[2.5rem] font-bold text-center mb-12 text-white">Learning Modes</h2>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Large Feature Image with Text Below */}
                    <div className="space-y-6">
                        <div className="rounded-[20px] overflow-hidden">
                            <img
                                src={featureImage}
                                alt="Student learning with AI technology"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-[2rem] font-bold text-white leading-tight">
                                Introducing learning<br />mode for students
                            </h3>
                            <span className="text-sm text-white/70">Product Video</span>
                            <div className="pt-2">
                                <button
                                    type="button"
                                    className="bg-white text-black border-none py-3.5 px-8 rounded-[50px] text-sm font-semibold lowercase cursor-pointer transition-colors duration-200 hover:bg-gray-100"
                                    onClick={() => navigate('/edinai-detail')}
                                >
                                    learn more
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Three Stacked Cards */}
                    <div className="flex flex-col gap-6">
                        {modeCards.map(({ id, image, title, description }) => (
                            <article
                                key={id}
                                className="bg-[#1a1a1a] rounded-[20px] overflow-hidden hover:bg-[#222] transition-colors border border-white/10"
                            >
                                <div className="grid grid-cols-[140px_1fr] gap-4">
                                    {/* Card Image */}
                                    <div className="h-[140px] overflow-hidden">
                                        <img
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Card Content */}
                                    <div className="py-4 pr-4 flex flex-col justify-center">
                                        <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
                                        <p className="text-sm text-white/70 leading-relaxed">{description}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LearningModesSection
