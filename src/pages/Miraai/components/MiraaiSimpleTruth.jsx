import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiVideo, FiCpu, FiLayers, FiClock } from 'react-icons/fi';

const TruthCard = ({ title, subtitle, index, icon: Icon }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{
                scale: 1.05,
                borderColor: "rgba(139, 92, 246, 0.8)",
                backgroundColor: "rgba(139, 92, 246, 0.05)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 40px rgba(139, 92, 246, 0.15)"
            }}
            className="bg-[#0A0A0A] border border-white/5 p-8 md:p-10 rounded-[2.5rem] transition-all duration-300 group cursor-default relative overflow-hidden flex flex-col items-start text-left"
        >
            {/* Glossy Brand Sweep Effect */}
            <motion.div
                style={{
                    left: useTransform(mouseXSpring, [-0.5, 0.5], ["-100%", "100%"]),
                    top: useTransform(mouseYSpring, [-0.5, 0.5], ["-100%", "100%"]),
                }}
                className="absolute inset-0 pointer-events-none bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div style={{ transform: "translateZ(50px)" }} className="flex flex-col items-start">
                {/* Neon Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 relative border border-white/5 group-hover:border-violet-400/50">
                    <div className="absolute inset-0 blur-2xl bg-violet-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon className="text-white text-3xl group-hover:text-violet-400 transition-all duration-500 filter group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,1)]" />
                </div>

                <h3 className="text-white text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">
                    {title}
                </h3>
                <p className="text-white/40 text-sm md:text-base font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                    {subtitle}
                </p>
            </div>
        </motion.div>
    );
};

const MiraaiSimpleTruth = () => {
    const truths = [
        {
            title: "What We Do",
            subtitle: "Create Videos And Images For Your Brand",
            icon: FiVideo
        },
        {
            title: "How we do it",
            subtitle: "Using advanced AI technology",
            icon: FiCpu
        },
        {
            title: "What you get",
            subtitle: "Professional content at 10% of traditional cost",
            icon: FiLayers
        },
        {
            title: "When you get it",
            subtitle: "2-4 days instead of 2-4 months",
            icon: FiClock
        }
    ];

    return (
        <section className="py-16 bg-black">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl md:text-4xl font-bold text-center text-white mb-20 tracking-tighter"
                >
                    The Simple Truth
                </motion.h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
                    {truths.map((truth, index) => (
                        <TruthCard
                            key={index}
                            index={index}
                            title={truth.title}
                            subtitle={truth.subtitle}
                            icon={truth.icon}
                        />
                    ))}
                </div>

                {/* Footer Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-white/80 text-base md:text-xl font-bold tracking-tight max-w-2xl mx-auto leading-relaxed">
                        We handle everything from concept to final delivery.<br />
                        You just tell us what you need.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default MiraaiSimpleTruth;
