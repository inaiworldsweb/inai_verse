import React from 'react';
import { motion } from 'framer-motion';

const ProgressItem = ({ label, percentage, subtext, index }) => {
  // Ensure percentage is a number and has a valid value
  const progressPercentage = Math.min(100, Math.max(0, Number(percentage) || 0));

  return (
    <div className="w-full text-left flex flex-col justify-center py-2 h-auto md:h-[70px]">
      <div className="flex justify-between items-center w-full">
        <h4 className="text-white text-sm md:text-base xl:text-lg tracking-tight pr-2">
          {label}
        </h4>
        <span className="text-white/60 text-base md:text-lg whitespace-nowrap ml-2">
          {progressPercentage}%
        </span>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full">
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
  <div className="flex items-center w-full py-1">
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="p-3 md:p-3 rounded-xl bg-[#000000] transition-all duration-300 flex items-center justify-start text-left group w-full min-h-[50px]"
    >
      <p className="text-white/80 transition-colors text-sm md:text-base font-medium tracking-tight">
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
    <section className=" md:py-5 py-10  sm:px-6  bg-black overflow-hidden">
      <div className="  max-w-[1400px] mx-auto  flex flex-col items-center">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="  text-[1.5625rem] md:text-[2.5rem] text-white font-bold tracking-[1px]">
            When Content Production Becomes The Growth Killer
          </h2>
        </motion.div>
        

             <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="  mb-12    text-center"
        >
          <p className="text-white text-base md:text-xl opacity-80">That's exactly what Miraai does.</p>
        </motion.div>


        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-full">
          {/* Left side: The Breaking Point */}
          <div className="bg-[#0A0A0A] border border-white/5 p-5 md:p-5 rounded-[2rem] relative overflow-hidden flex flex-col h-full">
            <div className="relative z-10 w-full">
              <div className="text-center lg:text-left">
                <h3 className=" mb-6 text-[1.25rem] md:text-2xl text-white tracking-[1px] [font-stretch:900%]">The Breaking Point</h3>
                <p className=" mb-6 text-[#ccc] text-[0.875rem] md:text-sm  [font-stretch:900%]">Most growing businesses hit the same wall</p>
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
          <div className="bg-[#0A0A0A] border border-white/5 p-5 md:p-5 rounded-[2rem] relative overflow-hidden flex flex-col h-full">
            <div className="relative z-10 w-full">
              <div className="text-center lg:text-left">
                <h3 className=" mb-6 text-[20px] md:text-2xl text-white tracking-[1px] [font-stretch:700%]">There's A Better Way</h3>
                <p className=" mb-12 text-[#ccc] text-[0.875rem] md:text-sm">With Miraai, you can:</p>
               

              </div>

              <div className="w-full flex flex-col gap-1">
                {solutions.map((text, index) => (
                  <BetterWayCard key={index} index={index} text={text} />
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none" />
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default MiraaiGrowthKiller;