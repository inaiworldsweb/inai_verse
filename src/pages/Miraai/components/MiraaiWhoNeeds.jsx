import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useMemo, useState, useRef } from 'react';

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

const FloatingCard = ({ data, position, index, randomValues }) => {
  const controls = useAnimationControls();
  const { duration, xAmp, yAmp, rotAmp } = randomValues;
  
  useEffect(() => {
    const startFloat = async () => {
      await controls.start({
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.6, delay: index * 0.08, ease: 'easeOut' },
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
    startFloat();
  }, [controls, position, index, duration, xAmp, yAmp, rotAmp]);

  return (
    <motion.div
      className="service-card desktop-only"
      style={{ left: '50%', top: '50%' }}
      initial={{ x: position.x, y: position.y, opacity: 0, scale: 0.9, translateX: '-50%', translateY: '-50%' }}
      animate={controls}
      whileHover={{ scale: 1.05, y: position.y - 4, transition: { duration: 0.2 } }}
    >
      <div className="card-image-box">
        <img src={data.image} alt={data.title} className="card-image" />
      </div>
      <div className="card-label">{data.title}</div>
    </motion.div>
  );
};

const MiraaiWhoNeeds = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile Auto-cycle logic
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Sync scroll on mobile
  useEffect(() => {
    if (isMobile && scrollRef.current && itemRefs.current[activeIndex]) {
      const container = scrollRef.current;
      const element = itemRefs.current[activeIndex];
      const scrollPos = element.offsetLeft - container.offsetWidth / 2 + element.offsetWidth / 2;
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }
  }, [activeIndex, isMobile]);

  const randomValues = useMemo(() =>
    cardsData.map(() => ({
      duration: 4 + Math.random() * 3,
      xAmp: 2 + Math.random() * 6,
      yAmp: 3 + Math.random() * 7,
      rotAmp: 0.5 + Math.random() * 1,
    })), []
  );

  return (
    <section id="whoneeds" className="who-needs-section">
      <div className="who-needs-container">
        <motion.h2 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          WHO NEEDS OUR SERVICES
        </motion.h2>
        
        <div className="main-stage">
          {/* Desktop Cards */}
          {!isMobile && cardsData.map((card, index) => (
            <FloatingCard
              key={index}
              data={card}
              position={cardPositions[index]}
              index={index}
              randomValues={randomValues[index]}
            />
          ))}
          
          {/* Center Content */}
          <motion.div 
            className="center-content-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="center-statement">
              Miraai Is Built For Brands That Rely<br />
              High-Quality Visual Content, Frequent<br />
              Campaigns, And Fast Execution.
            </p>
          </motion.div>
        </div>
        
        {/* Mobile Scroller */}
        {isMobile && (
          <div className="mobile-scroller-container">
            <div className="mobile-row" ref={scrollRef}>
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  ref={el => itemRefs.current[index] = el}
                  className={`mobile-card-item ${activeIndex === index ? 'active' : ''}`}
                >
                  <div className="card-image-box">
                    <img src={card.image} alt={card.title} className="card-image" />
                  </div>
                  <div className="card-label">{card.title}</div>
                </div>
              ))}
            </div>
            <div className="progress-dots">
              {cardsData.map((_, i) => (
                <div 
                  key={i} 
                  className={`dot ${activeIndex === i ? 'active' : ''}`} 
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        )}
        
        <motion.p 
          className="bottom-support"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          If your industry relies on content at scale—but struggles with time, cost, or creative consistency—Miraai is made for you.
        </motion.p>
      </div>
      
      <style jsx global>{`
        .who-needs-section {
          min-height: 100vh;
          background: #000;
          color: white;
          display: flex;
          align-items: center;
          padding: 60px 20px;
          overflow: hidden;
        }
        
        .who-needs-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .main-stage {
          position: relative;
          height: 550px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 40px 0;
        }
        
        .section-heading {
          font-size: 22px;
          letter-spacing: 2px;
          margin-bottom: 40px;
          opacity: 0.9;
          text-transform: uppercase;
          font-weight: 500;
        }
        
        /* Center Content Box */
        .center-content-box {
          z-index: 5;
          max-width: 500px;
          padding: 20px;
          background: rgba(30, 30, 30, 0.5);
          border-radius: 16px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .center-statement {
          font-size: 24px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
          color: white;
        }
        
        /* Desktop Cards Style */
        .service-card {
          position: absolute;
          z-index: 10;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .card-image-box {
          width: 110px;
          height: 110px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
        }
        
        .service-card:hover .card-image-box {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.7);
          border-color: rgba(255,255,255,0.4);
        }
        
        .card-image { 
          width: 100%; 
          height: 100%; 
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .service-card:hover .card-image {
          transform: scale(1.05);
        }
        
        .card-label {
          background: rgba(30,30,30,0.9);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          margin-top: 10px;
          position: relative;
          white-space: nowrap;
          border: 1px solid rgba(255,255,255,0.1);
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .service-card:hover .card-label {
          background: rgba(40, 40, 40, 0.95);
          transform: translateY(2px);
        }
        
        /* Mobile specific */
        @media (max-width: 768px) {
          .who-needs-section {
            min-height: auto;
            padding: 60px 20px;
          }
          
          .main-stage {
            height: auto;
            margin: 20px 0 40px;
          }
          
          .center-statement { 
            font-size: 18px; 
            line-height: 1.5;
          }
          
          .section-heading { 
            font-size: 16px;
            margin-bottom: 20px;
          }
          
          .mobile-scroller-container {
            width: 100%;
            margin: 20px 0 30px;
          }
          
          .mobile-row {
            display: flex;
            gap: 15px;
            overflow-x: auto;
            padding: 20px 0;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            -webkit-overflow-scrolling: touch;
          }
          
          .mobile-row::-webkit-scrollbar { 
            display: none; 
          }
          
          .mobile-card-item {
            flex: 0 0 140px;
            scroll-snap-align: center;
            opacity: 0.4;
            transform: scale(0.85);
            transition: all 0.5s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
          }
          
          .mobile-card-item.active {
            opacity: 1;
            transform: scale(1.1);
          }
          
          .mobile-card-item .card-image-box {
            width: 120px;
            height: 120px;
          }
          
          .progress-dots {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-top: 20px;
          }
          
          .dot {
            width: 8px;
            height: 8px;
            background: rgba(255,255,255,0.2);
            border-radius: 50%;
            transition: all 0.3s ease;
            cursor: pointer;
          }
          
          .dot.active {
            background: #fff;
            width: 20px;
            border-radius: 10px;
          }
          
          .bottom-support {
            font-size: 14px;
            color: white;
            max-width: 700px;
            margin: 30px auto 0;
            line-height: 1.6;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-only {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default MiraaiWhoNeeds;
