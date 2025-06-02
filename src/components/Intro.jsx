import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

// import about from "../assets/img/about.jpg";

import { introText } from "../constants";

const Intro = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 768;
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateOffset = (axis, strength = 20) => {
    if (isMobile) return 0; // 모바일 환경에서는 오프셋을 적용하지 않음
    
    const center = axis === 'x' ? window.innerWidth / 2 : window.innerHeight / 2;
    const position = axis === 'x' ? mousePosition.x : mousePosition.y;
    return (position - center) / strength;
  };

  return (
    <section id="intro">
      <div className="intro__inner">
        <motion.h2 
          className="intro__title title-font"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('intro.title')}
        </motion.h2>
        
        <div className="intro__lines" aria-hidden="true">
          {[...Array(6)].map((_, index) => (
            <motion.span 
              key={index} 
              className="line"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: index * 0.1 }}
            />
          ))}
        </div>
        
        <motion.div 
          className="intro__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className="text"
            style={{ 
              x: calculateOffset('x'),
              y: calculateOffset('y'),
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="text-inner">
              {t('intro.desc', { returnObjects: true }).map((item, index) => (
                <motion.div 
                  key={index}
                  className="alt-font"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                >
                  {item}
                </motion.div>
              ))}
              <motion.button 
                className="contact-button heading-font"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('contact.title')}
              </motion.button>
            </div>
          </motion.div>
          
          {/* <motion.div 
            className="img"
            animate={{ 
              x: calculateOffset('x', -30),
              y: calculateOffset('y', -30),
              rotate: calculateOffset('x', 100)
            }}
          >
          </motion.div> */}
        </motion.div>
        
        <div className="intro__lines bottom" aria-hidden="true">
          {[...Array(7)].map((_, index) => (
            <motion.span 
              key={index} 
              className="line"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.7 + (index * 0.1) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
