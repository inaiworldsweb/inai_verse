import { useNavigate } from 'react-router-dom';
import { HiVideoCamera, HiAcademicCap } from 'react-icons/hi';
import { motion } from 'framer-motion';
import learnAnytimeImg from '../../../assets/final/Learn Anytime, Anywhere (1).jpg';

const modeCards = [
    {
        id: 'live-lectures',
        type: 'video',
        gradient: 'from-blue-600 to-cyan-500',
        title: 'Live Lectures via AI',
        description: 'Experience real-time, interactive teaching with virtual AI teachers like INAI, VNAI, and AIRA. Visual explanations keep every concept engaging and personalised.',
    },
    {
        id: 'recorded-revisions',
        type: 'rec',
        gradient: 'from-zinc-800 to-zinc-900',
        title: 'Recorded Revisions',
        description: 'Access AI-led lessons anytime for quick revisions and deeper understanding. Learners revisit topics at their own pace for flexible, self-directed study.',
    },
    {
        id: 'interactive-quizzes',
        type: 'academic',
        gradient: 'from-fuchsia-600 to-pink-500',
        title: 'Interactive Quizzes and Challenges',
        description: 'AI-generated quizzes and challenges test understanding in the moment, reinforcing memory with tailored feedback and immersive practice.',
    },
]

const LearningModesSection = () => {
    const navigate = useNavigate();

    const getIcon = (type) => {
        switch (type) {
            case 'video': return <HiVideoCamera className="w-6 h-6 text-white" />;
            case 'rec':
                return (
                    <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[#FFFFF0] font-black text-[10px] tracking-tighter">REC</span>
                    </div>
                );
            case 'academic': return <HiAcademicCap className="w-6 h-6 text-white" />;
            default: return null;
        }
    };

    return (
        <section id="learning-modes" className="bg-black py-12 md:py-24 overflow-visible">
            <div className="max-w-[1300px] mx-auto px-4 md:px-6">

                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[25px] md:text-[40px] font-bold text-center text-white mb-12 md:mb-16 tracking-tight capitalize"
                >
                    Learning Modes
                </motion.h2>

                {/* Grid Layout - lg:items-start zaroori hai sticky ke liye */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start relative">

                    {/* LEFT COLUMN - Sticky Image Section */}
                    <div className="lg:col-span-7 lg:sticky lg:top-32 space-y-6 md:space-y-8 mb-10 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-[25px] md:rounded-[35px] overflow-hidden border border-white/10 shadow-2xl bg-[#111]"
                        >
                            <img
                                src={learnAnytimeImg}
                                alt="Student learning"
                                className="w-full h-auto object-cover max-h-[300px] md:max-h-none"
                            />
                        </motion.div>
                        <div className="space-y-3 md:space-y-4 px-2">
                            <h3 className="text-[15px] md:text-[25px] font-bold text-white leading-tight">
                                Introducing Learning Mode<br className="hidden md:block" /> For Students
                            </h3>
                            <p className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px]">Product Video</p>
                            <div className="pt-2 md:pt-4 ">
                                <button
                                    type="button"
                                    onClick={() => navigate('/edinai-detail')}
                                    className="group bg-white text-black border-none py-2.5 px-6 rounded-[40px] text-xs font-semibold cursor-pointer transition-colors duration-200 hover:bg-gray-100 "
                                >
                                    <span className="relative inline-block overflow-hidden align-top">
                                        <span className="invisible">Learn more</span>
                                        <span className="absolute inset-0 transition-transform duration-300 ease-out group-hover:-translate-y-full font-['Inter']">Learn more</span>
                                        <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 font-['Inter']">Learn more</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Stacking Cards */}
                    {/* Mobile par gap kam rakha hai taaki stacking jaldi dikhe */}
                    <div className="lg:col-span-5 flex flex-col gap-[40px] md:gap-[150px] pb-[10vh] md:pb-[30vh]">
                        {modeCards.map(({ id, type, gradient, title, description }, index) => (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                // Mobile par top-20 aur Desktop par top-32 par stack hoga
                                className="sticky top-20 md:top-32 w-full"
                            >
                                <article className="bg-[#161616] rounded-[25px] md:rounded-[30px] border border-white/5 p-6 md:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.6)] min-h-[350px] md:min-h-[400px] flex flex-col justify-between group relative overflow-hidden transition-all duration-500">

                                    {/* Hover Glow */}
                                    <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

                                    <div className="space-y-4 md:space-y-6 relative z-10">
                                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                            {getIcon(type)}
                                        </div>

                                        <div className="space-y-3 md:space-y-4">
                                            <h4 className="text-[15px] md:text-[25px] font-bold text-white leading-tight capitalize tracking-normal">
                                                {title}
                                            </h4>
                                            <p className="text-[13px] md:text-lg text-white/50 leading-relaxed font-light capitalize tracking-normal">
                                                {description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer line */}
                                    <div className="pt-4 md:pt-6 mt-2 md:mt-4 border-t border-white/5 flex justify-between items-center relative z-10">
                                        <span className="text-[10px] font-bold text-white/30 tracking-widest uppercase">MODE 0{index + 1}</span>
                                        <div className="w-10 md:w-12 h-[1px] bg-white/10" />
                                    </div>
                                </article>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LearningModesSection;