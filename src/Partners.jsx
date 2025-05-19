import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = [
  { id: 1, name: 'Masdar', logo: 'https://masdar.co/wp-content/uploads/2024/10/Layer-1@3x.png', year: '2018' },
  { id: 2, name: 'Skyline Portacabin', logo: 'https://hhic.sa/wp-content/uploads/2022/03/cropped-Skyline-Logo-300x241.jpg', year: '2020' },
  { id: 3, name: 'Rockal', logo: '/rockal.png', year: '2021' },
  { id: 4, name: 'SPGC', logo: 'https://spgc.sa.com/wp-content/uploads/2024/08/SPGC-logo-1.png', year: '2022' },
  { id: 5, name: 'YouMats', logo: 'https://youmats-media.s3.me-central-1.amazonaws.com/130475/conversions/logo-%281%29-size_height_45.webp', year: '2023' },
  { id: 6, name: 'Henan Eastman', logo: '//s.alicdn.com/@sc04/kf/H1578ef6e875e4154808a5619ea65bb15e.jpg', year: '2024' },
  { id: 7, name: 'Tianjin Dexinyuan', logo: '//s.alicdn.com/@sc04/kf/Hc5e6ca01ea864da4857a3ee5e34dbb59A.png', year: '2025' },
  { id: 8, name: 'Huangshan Best', logo: '//s.alicdn.com/@sc04/kf/Hee9baaa9be3348a583ae00a3dbe731bdN.png', year: '2026' },
  { id: 9, name: 'Moaoflooring', logo: '//s.alicdn.com/@sc04/kf/H2a9a4ae213c948469911a4a2f981b542Y.png', year: '2025' },
  { id: 10, name: 'JOCY', logo: '//s.alicdn.com/@sc01/kf/Hc03e542a587f4fd98db213cfb56d9c6fP.jpg', year: '2026' },
  { id: 11, name: 'Mada Gypsum', logo: 'https://www.madagypsum.com/wp-content/uploads/2022/08/mada-logos.png', year: '2025' },
  { id: 12, name: 'Zhejiang Shenggu', logo: '//s.alicdn.com/@sc04/kf/H065a5cd237f741939e2aebfe8d348e1a4.png_80x80.png', year: '2026' },
  { id: 13, name: 'Foshan Baivilla', logo: '//s.alicdn.com/@sc04/kf/Hceffe4f234a0441b8b06201ffa79dca2H.jpg_80x80.jpg', year: '2025' },
  { id: 14, name: 'Yekalon Industry', logo: '//s.alicdn.com/@sc04/kf/H03ee3252a8c24db8a686bc6702046740V.jpg_80x80.jpg', year: '2026' },
];

const Partners = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const titleAnimation = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <section className="partners-section" ref={ref}>
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={controls}
          variants={titleAnimation}
        >
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">We're proud to collaborate with these innovative companies</p>
        </motion.div>
        
        <motion.div 
          className="partners-grid"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {partners.map((partner) => (
            <motion.div 
              className="partner-card"
              key={partner.id}
              variants={item}
            >
              <div className="logo-container-partner">
                <img 
                  className="partner-logo" 
                  src={partner.logo} 
                  alt={partner.name} 
                  loading="lazy"
                />
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <span className="partner-year">Since {partner.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .partners-section {
          padding: 6rem 2rem;
          background: #ffffff;
          text-align: center;
          overflow: hidden;
          position: relative;
        }
        
        .section-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }
        
        .section-header {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 2.8rem;
          color: #2c3e50;
          margin-bottom: 1rem;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 2rem;
          padding: 1rem;
        }
        
        .partner-card {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid #e9ecef;
        }
        
        .logo-container-partner {
          width: 100%;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          padding: 1rem;
        }
        
        .partner-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .partner-info {
          text-align: center;
          width: 100%;
        }
        
        .partner-name {
          font-size: 1.1rem;
          color: #2c3e50;
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }
        
        .partner-year {
          font-size: 0.85rem;
          color: #7f8c8d;
          display: block;
        }

        @media (max-width: 1024px) {
          .partners-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }
          
          .section-title {
            font-size: 2.4rem;
          }
          
          .section-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .partners-section {
            padding: 4rem 1.5rem;
          }
          
          .partners-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1.5rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .logo-container-partner {
            height: 80px;
          }
        }

        @media (max-width: 480px) {
          .partners-section {
            padding: 3rem 1rem;
          }
          
          .partners-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 1rem;
          }
          
          .section-header {
            margin-bottom: 2.5rem;
          }
          
          .section-title {
            font-size: 1.8rem;
          }
          
          .partner-card {
            padding: 1.5rem 1rem;
          }
          
          .logo-container-partner {
            height: 70px;
            margin-bottom: 1rem;
          }
          
          .partner-name {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;