import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

// import about from "../assets/img/about.jpg";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section id="intro">
      <div className="intro__inner">
        <motion.h1
          className="intro__title title-font"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* {t('intro.title')} */}
          <span className="heading-font">
            {/* <span className="title-font">portfolio</span> */}
            <motion.em
              className="alt-font"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              hi, I'm youngjin lee
            </motion.em>
          </span>
        </motion.h1>
        
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
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div 
            className="text"
            style={{ 
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div className="text-inner">
              <motion.div>
                {t(`intro.title`)}
              </motion.div>
              {t('intro.desc', { returnObjects: true }).map((item, index) => (
                <motion.div 
                  key={index}
                  // className="alt-font"
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, delay: 0.8 + (index * 0.2) }}
                >
                  {item}
                </motion.div>
              ))}

              {/* <motion.button 
                className="contact-button heading-font"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('contact.title')}
              </motion.button> */}
            </div>
          </div>
          
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
