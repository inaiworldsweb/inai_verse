import React from 'react';
import { motion } from 'framer-motion';

const ProgressItem = ({ label, percentage, subtext, index }) => {
  // Ensure percentage is a number and has a valid value
  const progressPercentage = Math.min(100, Math.max(0, Number(percentage) || 0));

  return (
    <div className="w-full text-left flex flex-col justify-center py-2 h-[80px]">
      <div className="flex justify-between items-center mb-2 w-full">
        <h4 className="text-white text-sm md:text-base xl:text-lg tracking-tight pr-2">
          {label}
        </h4>
        <span className="text-white/60 text-base md:text-lg whitespace-nowrap ml-2">
          {progressPercentage}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full max-w-[500px] mx-auto">
        <div className="h-[6px] w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progressPercentage}%` }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.2,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            className="h-full bg-white rounded-full"
            style={{ minWidth: '0.5rem' }} // Ensure small percentages are visible
          />
        </div>
      </div>

      <p className="text-white/30 text-xs mt-2 tracking-tight uppercase">
        {subtext}
      </p>
    </div>
  );
};

const BetterWayCard = ({ text, index }) => (
  <div className="h-[80px] flex items-center w-full">
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-3 md:p-4 rounded-xl bg-[#000000] transition-all duration-300 flex items-center justify-start text-left group w-full h-auto min-h-[60px]"
    >
      <p className="text-white/80  transition-colors text-sm md:text-base font-medium tracking-tight">
        {text}
      </p>
    </motion.div>
  </div>
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
    <section className="py-6 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 flex flex-col items-center">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 max-w-4xl"
        >
          <h2 className="text-[20px] md:text-[32px] text-white mb-4 tracking-tighter leading-tight">
            When Content Production Becomes <br className="hidden md:block" /> The Growth Killer
          </h2>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full">
          {/* Left side: The Breaking Point */}
          <div className="bg-[#0A0A0A] border border-white/5 p-5 md:p-8 rounded-[2rem] relative overflow-hidden flex flex-col h-full">
            <div className="relative z-10 w-full">
              <div className="mb-6 text-center lg:text-left">
                <h3 className="text-[20px] md:text-2xl text-white mb-1 tracking-tight">The Breaking Point</h3>
                <p className="text-white/40 text-[13px] md:text-sm">Most growing businesses hit the same wall</p>
              </div>

              <div className="w-full flex flex-col gap-3">
                {problems.map((item, index) => (
                  <ProgressItem key={index} index={index} {...item} />
                ))}
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />
          </div>

          {/* Right side: There's A Better Way */}
          <div className="bg-[#0A0A0A] border border-white/5 p-5 md:p-8 rounded-[2rem] relative overflow-hidden flex flex-col h-full">
            <div className="relative z-10 w-full">
              <div className="mb-6 text-center lg:text-left">
                <h3 className="text-[20px] md:text-2xl text-white mb-1 tracking-tight">There's A Better Way</h3>
                <p className="text-white/40 text-[13px] md:text-sm">With Miraai, you can:</p>
              </div>

              <div className="w-full flex flex-col gap-3">
                {solutions.map((text, index) => (
                  <BetterWayCard key={index} index={index} text={text} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-white text-base md:text-xl opacity-80 mb-2">That's exactly what Miraai does.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default MiraaiGrowthKiller;