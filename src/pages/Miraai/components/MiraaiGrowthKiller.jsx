import React from 'react';
import { motion } from 'framer-motion';

const ProgressItem = ({ label, percentage, subtext, index }) => (
    <div className="mb-10 w-full text-left">
        <div className="flex justify-between items-end mb-4">
            <h4 className="text-white text-base md:text-lg font-bold tracking-tight">{label}</h4>
            <span className="text-white/60 font-bold text-lg">{percentage}%</span>
        </div>
        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-3">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                className="h-full bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            />
        </div>
        <p className="text-white/30 text-xs md:text-sm font-medium tracking-tight uppercase">
            {subtext}
        </p>
    </div>
);

const BetterWayCard = ({ text, index }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-300 flex items-center group w-full mb-4"
    >
        <div className="w-2 h-2 rounded-full bg-white mr-6 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        <p className="text-white/80 group-hover:text-white transition-colors text-base md:text-lg font-bold tracking-tight">
            {text}
        </p>
    </motion.div>
);

const MiraaiGrowthKiller = () => {
    const problems = [
        { label: "Up To 60% Of The Marketing Budget", percentage: 60, subtext: "Gets Consumed By Content Production Alone" },
        { label: "40% Of Campaign Timelines", percentage: 40, subtext: "Are Lost Waiting For Creatives To Be Delivered" },
        { label: "70% Of Great Content Ideas", percentage: 70, subtext: "Never See The Light Of Day Due To Cost And Time Constraints" },
        { label: "90% Of Marketers", percentage: 90, subtext: "Feel Limited—Not By Strategy, But By Production Capacity" }
    ];

    const solutions = [
        "Reduce Production Costs By Up To 70%",
        "Create High-Quality Content In Days, Not Months",
        "Make Unlimited Revisions Without Added Cost",
        "Scale Content Output Up To 10× Effortlessly"
    ];

    return (
        <section className="py-16 bg-black overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center">

                {/* Main Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24 max-w-4xl"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-none">
                        When Content Production Becomes <br /> The Growth Killer
                    </h2>
                </motion.div>

                {/* Two-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 w-full">

                    {/* Left side: The Breaking Point */}
                    <div className="bg-[#050505] border border-white/5 p-10 md:p-16 rounded-[3rem] relative overflow-hidden flex flex-col items-center">
                        <div className="relative z-10 w-full">
                            <div className="mb-12 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">The Breaking Point</h3>
                                <p className="text-white/40 text-sm md:text-base font-medium">Most growing businesses hit the same wall</p>
                            </div>

                            <div className="w-full">
                                {problems.map((item, index) => (
                                    <ProgressItem key={index} index={index} {...item} />
                                ))}
                            </div>
                        </div>
                        {/* Subtle background glow */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />
                    </div>

                    {/* Right side: There's A Better Way */}
                    <div className="bg-[#050505] border border-white/5 p-10 md:p-16 rounded-[3rem] relative overflow-hidden flex flex-col items-center">
                        <div className="relative z-10 w-full flex flex-col items-center">
                            <div className="mb-12 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">There's A Better Way</h3>
                                <p className="text-white/40 text-sm md:text-base font-medium">With Miraai, you can:</p>
                            </div>

                            <div className="w-full space-y-4">
                                {solutions.map((text, index) => (
                                    <BetterWayCard key={index} index={index} text={text} />
                                ))}
                            </div>
                        </div>
                        {/* Subtle background glow */}
                        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />
                    </div>
                </div>

                {/* Bottom Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 text-center"
                >
                    <p className="text-white text-lg md:text-2xl font-medium opacity-80 mb-2">That's exactly what Miraai does.</p>
                    <div className="h-px w-24 bg-white/20 mx-auto" />
                </motion.div>
            </div>
        </section>
    );
};

export default MiraaiGrowthKiller;
