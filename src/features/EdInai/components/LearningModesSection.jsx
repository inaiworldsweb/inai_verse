import { useNavigate } from 'react-router-dom'
import { HiVideoCamera, HiClock, HiAcademicCap } from 'react-icons/hi';
import learnAnytimeImg from '../../../assets/final/Learn Anytime, Anywhere (1).jpg';

const modeCards = [
    {
        id: 'live-lectures',
        type: 'video',
        gradient: 'from-blue-600 to-cyan-500',
        title: 'Live Lectures via AI',
        description:
            'Experience real-time, interactive teaching with virtual AI teachers like INAI, VNAI, and AIRA. Visual explanations keep every concept engaging and personalised.',
    },
    {
        id: 'recorded-revisions',
        type: 'rec',
        gradient: 'from-zinc-800 to-zinc-900',
        title: 'Recorded Revisions',
        description:
            'Access AI-led lessons anytime for quick revisions and deeper understanding. Learners revisit topics at their own pace for flexible, self-directed study.',
    },
    {
        id: 'interactive-quizzes',
        type: 'academic',
        gradient: 'from-fuchsia-600 to-pink-500',
        title: 'Interactive Quizzes and Challenges',
        description:
            'AI-generated quizzes and challenges test understanding in the moment, reinforcing memory with tailored feedback and immersive practice.',
    },
]

const LearningModesSection = () => {
    const navigate = useNavigate()

    const getIcon = (type) => {
        switch (type) {
            case 'video': return <HiVideoCamera className="w-8 h-8 text-white" />
            case 'rec': return (
                <div className="relative w-16 h-10 flex items-center justify-center">
                    {/* Ivory Premium Corner Brackets */}
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-[#FFFFF0] shadow-[0_0_6px_rgba(255,255,240,0.6)]" />
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-[#FFFFF0] shadow-[0_0_6px_rgba(255,255,240,0.6)]" />
                    <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-[#FFFFF0] shadow-[0_0_6px_rgba(255,255,240,0.6)]" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-[#FFFFF0] shadow-[0_0_6px_rgba(255,255,240,0.6)]" />

                    <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)] animate-pulse" />
                        <span className="text-[#FFFFF0] font-black text-lg tracking-tighter leading-none">REC</span>
                    </div>
                </div>
            )
            case 'academic': return <HiAcademicCap className="w-8 h-8 text-white" />
            default: return null
        }
    }
    return (
        <section className="py-10 md:py-16" id="learning-modes">
            <div className="max-w-[1200px] mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-center mb-8 md:mb-12 text-white">Learning Modes</h2>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    {/* Left Column - Large Feature Image with Text Below */}
                    <div className="space-y-6">
                        <div className="rounded-[20px] overflow-hidden">
                            <img
                                src={learnAnytimeImg}
                                alt="Student learning with AI technology"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl md:text-[2rem] font-bold text-white leading-tight">
                                Introducing learning<br className="hidden sm:block" /> mode for students
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
                        {modeCards.map(({ id, type, gradient, title, description }) => (
                            <article
                                key={id}
                                className="bg-[#1a1a1a] rounded-[20px] overflow-hidden hover:bg-[#222] transition-colors border border-white/10"
                            >
                                <div className="grid grid-cols-[100px_1fr] gap-4">
                                    {/* Card Icon */}
                                    <div className="h-full flex items-center justify-center pl-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-black/20`}>
                                            {getIcon(type)}
                                        </div>
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
