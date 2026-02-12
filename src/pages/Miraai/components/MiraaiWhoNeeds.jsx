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
  { x: -320, y: -170 }, { x: 0, y: -190 }, { x: 320, y: -170 },
  { x: -380, y: 10 }, { x: 380, y: 10 },
  { x: -320, y: 210 }, { x: 0, y: 240 }, { x: 320, y: 210 },
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
      className="service-card"
      style={isMobile ? {} : { left: '50%', top: '50%', position: 'absolute' }}
      initial={isMobile ? { opacity: 0, y: 20 } : { x: 0, y: 0, opacity: 0, scale: 0.5, translateX: '-50%', translateY: '-50%' }}
      animate={isMobile ? { opacity: 1, y: 0 } : controls}
      transition={isMobile ? { delay: index * 0.1 } : {}}
    >
      <div className="card-inner-wrapper">
        <div className="card-image-box">
          <img src={data.image} alt={data.title} className="card-image" />
        </div>
        <div className="card-label">{data.title}</div>
      </div>
    </motion.div>
  );
};

export default function WhoNeedsOurServices() {
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
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
    <section className={`who-needs-section ${isMobile ? 'mobile' : ''}`}>
      <div className="who-needs-container">
        <h2 className="section-heading">WHO NEEDS OUR SERVICES</h2>

        {!isMobile ? (
          // DESKTOP VIEW
          <motion.div
            className="main-stage"
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
              className="center-content-box"
            >
              <p className="center-statement">
                Miraai Is Built For Brands That Rely<br />
                High-Quality Visual Content, Frequent<br />
                Campaigns, And Fast Execution.
              </p>
            </motion.div>
          </motion.div>
        ) : (
          // MOBILE VIEW (4 Above - Text - 4 Below)
          <div className="mobile-layout">
            <div className="mobile-grid">
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
              className="mobile-center-text"
            >
              <p className="center-statement">
                Miraai Is Built For Brands That Rely High-Quality Visual Content, Frequent Campaigns, And Fast Execution.
              </p>
            </motion.div>

            <div className="mobile-grid">
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
      </div>

      <style>{`
        .who-needs-section {
          min-height: 100vh;
          background: #000;
          color: #fff;
          display: flex;
          align-items: center;
          padding: 80px 20px;
          overflow: hidden;
        }
        .who-needs-container { width: 100%; max-width: 1200px; margin: 0 auto; text-align: center; }
        .section-heading { font-size: 16px; letter-spacing: 4px; margin-bottom: 60px; color: rgba(255,255,255,0.4); }

        /* Desktop Stage */
        .main-stage { position: relative; height: 600px; display: flex; align-items: center; justify-content: center; }
        .center-content-box { z-index: 5; max-width: 700px; }

        /* Mobile Layout */
        .mobile-layout { display: flex; flex-direction: column; gap: 40px; align-items: center; }
        .mobile-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          width: 100%;
          max-width: 400px;
        }
        .mobile-center-text { padding: 20px 0; }

        .center-statement {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.4;
          text-shadow: 0 0 20px rgba(0,0,0,0.8);
        }

        /* Card Styling */
        .card-inner-wrapper { display: flex; flex-direction: column; align-items: center; cursor: pointer; }
        .card-image-box {
          width: 130px; height: 130px; border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.15); background: #111;
          box-shadow: 0 10px 40px rgba(0,0,0,0.8);
        }
        .card-image { width: 100%; height: 100%; object-fit: cover; }
        .card-label {
          background: #1A1A1A; padding: 6px 12px; border-radius: 8px;
          font-size: 11px; font-weight: 600; margin-top: -12px;
          position: relative; z-index: 20; border: 1px solid rgba(255,255,255,0.12);
          white-space: nowrap; box-shadow: 0 5px 15px rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .center-statement { font-size: 20px; padding: 0 10px; }
          .card-image-box { width: 140px; height: 140px; }
          .who-needs-section { padding: 40px 10px; height: auto; }
        }

        @media (max-width: 380px) {
          .card-image-box { width: 120px; height: 120px; }
          .mobile-grid { gap: 15px; }
        }
      `}</style>
    </section>
  );
}