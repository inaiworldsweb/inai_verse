import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const cardsData = [
  { title: "Education & EdTech", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=400&fit=crop" },
  { title: "Textile & Garments", image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=400&h=400&fit=crop" },
  { title: "Jewellery & Diamonds", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop" },
  { title: "FMCG Brands", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop" },
  { title: "Lifestyle & Fashion", image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop" },
  { title: "E-Commerce & Retail", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop" },
  { title: "Hospitality & Travel", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=400&fit=crop" },
  { title: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=400&fit=crop" },
];

const cardPositions = [
  { x: -320, y: -160 }, { x: 0, y: -180 }, { x: 320, y: -160 },
  { x: -380, y: 0 }, { x: 380, y: 0 },
  { x: -320, y: 160 }, { x: 0, y: 180 }, { x: 320, y: 160 },
];

const FloatingCard = ({ data, position, index, randomValues, isInView, isMobile }) => {
  const controls = useAnimationControls();
  const { duration, xAmp, yAmp, rotAmp } = randomValues;

  useEffect(() => {
    if (!isInView || isMobile) return;

    const sequence = async () => {
      await controls.start({
        opacity: 1, scale: 1, x: 0, y: 0,
        transition: { duration: 0.4, delay: index * 0.03 }
      });
      await new Promise(resolve => setTimeout(resolve, 500));
      await controls.start({
        x: position.x,
        y: position.y,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
      });
      controls.start({
        x: [position.x - xAmp, position.x + xAmp, position.x - xAmp],
        y: [position.y - yAmp, position.y + yAmp, position.y - yAmp],
        rotate: [-rotAmp, rotAmp, -rotAmp],
        transition: {
          x: { duration, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: duration * 1.1, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: duration * 1.3, repeat: Infinity, ease: 'easeInOut' },
        },
      });
    };
    sequence();
  }, [controls, position, index, duration, xAmp, yAmp, rotAmp, isInView, isMobile]);

  return (
    <motion.div
      className={isMobile ? "w-full flex justify-center" : "absolute left-1/2 top-1/2"}
      initial={isMobile ? { opacity: 0, y: 20 } : { x: 0, y: 0, opacity: 0, scale: 0.5, translateX: '-50%', translateY: '-50%' }}
      animate={isMobile ? { opacity: 1, y: 0 } : controls}
      transition={isMobile ? { delay: index * 0.1, duration: 0.5 } : {}}
    >
      <div className="relative inline-flex flex-col items-center cursor-pointer">
        <div className="w-[110px] h-[110px] xs:w-[130px] xs:h-[130px] sm:w-[140px] sm:h-[140px] bg-transparent">
          {/* Borders and Rounding applied directly to the image */}
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover rounded-2xl border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20 bg-[#101010eb] border border-white/20 px-3 py-2 rounded-xl text-[10px] sm:text-[12px] whitespace-nowrap shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
          {data.title}
        </div>
      </div>
    </motion.div>
  );
};

export default function WhoNeedsOurServices() {
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const randomValues = useMemo(() =>
    cardsData.map(() => ({
      duration: 5 + Math.random() * 2,
      xAmp: 5 + Math.random() * 5,
      yAmp: 6 + Math.random() * 6,
      rotAmp: 0.5 + Math.random() * 1,
    })), []
  );

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center pt-20 pb-0 lg:py-0 px-5 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto text-center">
        {/* Title: Desktop 40px, Mobile 25px */}
        <h2 className="text-[25px] md:text-[40px] font-bold tracking-[1px] [font-stretch:700%] mb-3">
          Who Needs Our Services
        </h2>

        {!isMobile ? (
          <motion.div
            className="relative h-[650px] flex items-center justify-center"
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, amount: 0.3 }}
          >
            {cardsData.map((card, index) => (
              <FloatingCard
                key={index}
                data={card}
                position={cardPositions[index]}
                index={index}
                randomValues={randomValues[index]}
                isInView={isInView}
                isMobile={false}
              />
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="z-10 max-w-2xl"
            >
              <p className="text-[1rem] leading-relaxed drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] text-[#ccc]">
                Miraai Is Built For Brands That Rely On<br />
                High-Quality Visual Content, Frequent<br />
                Campaigns, And Fast Execution.
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <div className="flex -mb-20 flex-col gap-12 items-center">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full max-w-[450px]">
              {cardsData.slice(0, 4).map((card, index) => (
                <FloatingCard
                  key={index}
                  data={card}
                  index={index}
                  isMobile={true}
                  randomValues={randomValues[index]}
                  isInView={true}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="py-6"
            >
              <p className="text-[16px] lg:text-[21px] leading-relaxed max-w-[320px] mx-auto opacity-90 text-[#ccc]">
                Miraai Is Built For Brands That Rely On High-Quality Visual Content, Frequent Campaigns, And Fast Execution.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full max-w-[450px]">
              {cardsData.slice(4, 8).map((card, index) => (
                <FloatingCard
                  key={index + 4}
                  data={card}
                  index={index + 4}
                  isMobile={true}
                  randomValues={randomValues[index + 4]}
                  isInView={true}
                />
              ))}
            </div>
          </div>
        )}

        {/* Bottom Descriptive Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-5 pb-10"
        >
          <p className="text-[#ccc] text-[16px] lg:text-[21px] mt-35 md:mt-8 max-w-4xl mx-auto leading-relaxed px-4">
            If your industry relies on content at scale-but struggles with time, cost, or creative consistency-Miraai is made for you.
          </p>
        </motion.div>
      </div>

    </section>
  );
}