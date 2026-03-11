import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

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
  { x: -300, y: -220 },
  { x: 0, y: -260 },
  { x: 300, y: -220 },

  { x: -420, y: -20 },
  { x: 420, y: -20 },

  { x: -300, y: 200 },
  { x: 0, y: 240 },
  { x: 300, y: 200 },
];

const FloatingCard = ({ data, position, index, randomValues, isInView, isMobile }) => {
  const controls = useAnimationControls();
  const { duration, xAmp, yAmp, rotAmp } = randomValues;

  useEffect(() => {
    if (!isInView || isMobile) return;

    const sequence = async () => {
      await controls.start({
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.4, delay: index * 0.05 },
      });

      await new Promise((resolve) => setTimeout(resolve, 400));

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
          x: { duration, repeat: Infinity, ease: "easeInOut" },
          y: { duration: duration * 1.1, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: duration * 1.3, repeat: Infinity, ease: "easeInOut" },
        },
      });
    };

    sequence();
  }, [controls, position, index, duration, xAmp, yAmp, rotAmp, isInView, isMobile]);

  return (
    <motion.div
      className={`inline-flex flex-col items-center cursor-pointer ${
        isMobile
          ? "relative"
          : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      }`}
      initial={isMobile ? { opacity: 0, scale: 0.8 } : { opacity: 0, scale: 0.5 }}
      animate={isMobile ? { opacity: 1, scale: 1 } : controls}
      transition={isMobile ? { delay: index * 0.1, duration: 0.5 } : {}}
    >
      <div className="relative inline-flex flex-col items-center">
        <div className="w-[110px] h-[110px] xs:w-[130px] xs:h-[130px] sm:w-[140px] sm:h-[140px]">
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
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const randomValues = useMemo(
    () =>
      cardsData.map(() => ({
        duration: 5 + Math.random() * 2,
        xAmp: 5 + Math.random() * 5,
        yAmp: 6 + Math.random() * 6,
        rotAmp: 0.5 + Math.random(),
      })),
    []
  );

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center py-3  md:py-10 px-4 sm:px-6  overflow-hidden">
      <div className="w-full max-w-7xl mx-auto text-center">
        <h2 className=" md:mb-10 text-[25px] md:text-[40px] font-bold tracking-[1px]">
          Who Needs Our Services
        </h2>

        {!isMobile ? (
          <motion.div
            className="relative h-[650px] flex items-center justify-center overflow-visible"
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
              <p className="text-[21px] leading-relaxed text-[#ccc]">
                Miraai Is Built For Brands That Rely On
                <br />
                High-Quality Visual Content, Frequent
                <br />
                Campaigns, And Fast Execution.
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-8 items-center px-4">
            {/* Mobile / Tablet layout */}
            <div className="grid grid-cols-2 gap-10 w-full max-w-[320px]">
              {cardsData.slice(0, 2).map((card, i) => (
                <FloatingCard key={i} data={card} index={i} isMobile randomValues={randomValues[i]} isInView />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-10 w-full max-w-[320px]">
              {cardsData.slice(2, 4).map((card, i) => (
                <FloatingCard key={i + 2} data={card} index={i + 2} isMobile randomValues={randomValues[i + 2]} isInView />
              ))}
            </div>

            <p className="mt-4 text-[1rem] leading-relaxed opacity-90 text-[#ccc] max-w-[280px] text-center">
              Miraai Is Built For Brands That Rely On High-Quality Visual Content,
              <br />
              Frequent Campaigns, And Fast Execution.
            </p>

            <div className="grid grid-cols-2 gap-10 w-full max-w-[320px]">
              {cardsData.slice(4, 6).map((card, i) => (
                <FloatingCard key={i + 4} data={card} index={i + 4} isMobile randomValues={randomValues[i + 4]} isInView />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-10 w-full max-w-[320px]">
              {cardsData.slice(6, 8).map((card, i) => (
                <FloatingCard key={i + 6} data={card} index={i + 6} isMobile randomValues={randomValues[i + 6]} isInView />
              ))}
            </div>
          </div>
        )}

        <div className="mt-10  lg:mt-8 pb-10">
          <p className="text-[#ccc] text-[1rem] lg:text-[1.3rem] max-w-4xl mx-auto leading-relaxed px-4">
            If your industry relies on content at scale—but struggles with time, cost, or creative consistency—Miraai is made for you.
          </p>
        </div>
      </div>
    </section>
  );
}