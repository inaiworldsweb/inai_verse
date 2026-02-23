import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import liveLecturesImg from '../../assets/final/AI Teachers that Never Tire (2).png';
import trackProgressImg from '../../assets/final/Smart dashboard and real time feedback.png';

const features = [
  {
    title: "Download AI-Generated Notes ",
    desc: "After every session, concise summaries, highlighted concepts, and sample problems are available for quick revision and exam preparation. ",
    img: liveLecturesImg 
  },
  {
    title: (
  <>
    <span className="block">Instant Q&A Support</span>
    <span className="block text-white/70">(Voice & Text)</span>
  </>
),
    desc: "Learners can ask questions naturally via voice or text. Ed-INAI provides clear, step-by-step responses and follow-up explanations for deeper understanding. ",
    img: trackProgressImg
  }
];

const FeatureScroll = ({ scrollContainer }) => {
  const targetRef = useRef(null);
  
  // 🔥 useScroll ko bataya ki main container track karo
  const { scrollYProgress } = useScroll({
    target: targetRef,
    container: scrollContainer, 
    offset: ["start start", "end end"],
  });

  return (
    <div ref={targetRef} className="relative w-full">
      <div className="relative h-[200vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center overflow-hidden">
          {/* TEXT SIDE */}
          <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center px-8 md:px-20 order-2 md:order-1 relative">
            <div className="relative w-full h-[300px]">
              {features.map((item, i) => {
                const isFirst = i === 0;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], isFirst ? [1, 1, 0, 0] : [0, 0, 1, 1]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], isFirst ? [0, 0, -30, -30] : [30, 30, 0, 0]);
                return (
                  <motion.div key={i} style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-center">
                    <h2 className="text-[25px] md:text-[40px] font-bold text-white mb-6 leading-tight">{item.title}</h2>
                    <p className="text-[15px] md:text-[25px] text-white leading-relaxed max-w-md">{item.desc}</p>
                    <div className="mt-8 h-1.5 w-24 bg-blue-600 rounded-full" />
                  </motion.div>
                );
              })}
            </div>
          </div>
         {/* IMAGE SIDE */}
<div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-6 md:p-12 order-1 md:order-2">
  
  <div className="relative w-full aspect-video bg-[#0A0A0A]">
    
    {features.map((item, i) => {
      const isFirst = i === 0;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const opacity = useTransform(
        scrollYProgress,
        [0, 0.45, 0.55, 1],
        isFirst ? [1, 1, 0, 0] : [0, 0, 1, 1]
      );

      return (
        <motion.img
          key={i}
          src={item.img}
          style={{ opacity }}
          className="absolute inset-0 w-full h-full object-cover rounded-[30px] border border-white/10"
        />
      );
    })}

  </div>

</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureScroll;