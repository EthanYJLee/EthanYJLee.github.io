import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

import { headerNav } from "../constants";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // 현재 스크롤 위치에 따라 active 섹션 설정
      const sections = headerNav.map(nav => nav.url.substring(1));
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShow((prevShow) => !prevShow);
  };

  const toggleLanguageMenu = () => {
    setShowLanguageMenu((prev) => !prev);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageMenu(false);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    }),
    exit: { opacity: 0, y: -20 }
  };

  const languageMenuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  // 현재 언어 코드 가져오기
  const currentLanguage = i18n.language || 'en';

  return (
    <motion.header 
      id="header" 
      role="banner"
      className={scrolled ? "scrolled" : ""}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <hr className="hr-1"></hr>
      <div className="header__inner">
        <motion.div 
          className="header__logo"
          whileHover={{ scale: 1.05 }}
        >
          <h1 className="heading-font">
            <a href="/">
              <span className="title-font">portfolio</span>
              <motion.em
                className="alt-font"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                youngjin lee
              </motion.em>
            </a>
          </h1>
        </motion.div>
        <nav
          className={`header__nav ${show ? "show" : ""}`}
          role="navigation"
          aria-label="메인메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <motion.li 
                key={key}
                custom={key}
                initial="hidden"
                animate="visible"
                variants={navVariants}
              >
                <a 
                  href={nav.url} 
                  className={`${activeSection === nav.url.substring(1) ? "active" : ""} heading-font`}
                >
                  {t(`header.${nav.url.substring(1)}`)}
                  {activeSection === nav.url.substring(1) && (
                    <motion.span 
                      className="active-indicator"
                      layoutId="activeIndicator"
                    />
                  )}
                </a>
              </motion.li>
            ))}
            
            {/* 언어 선택 메뉴 */}
            <motion.li 
              className="language-selector"
              custom={headerNav.length}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              style={{ display: 'inline' }}
            >
              <div className="language-button" onClick={toggleLanguageMenu}>
                <span>{currentLanguage === 'ko' ? '한국어' : 'English'}</span>
                <span className="language-icon">▼</span>
              </div>
              
              <AnimatePresence>
                {showLanguageMenu && (
                  <motion.div 
                    className="language-dropdown"
                    variants={languageMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <ul>
                      
                      <li 
                        className={currentLanguage === 'en' ? 'active' : ''}
                        onClick={() => changeLanguage('en')}
                        style={{ padding: '10px 20px' }}
                      >
                        {t('language.en')}
                      </li>
                      <li 
                        className={currentLanguage === 'ko' ? 'active' : ''}
                        onClick={() => changeLanguage('ko')}
                        style={{ padding: '10px 20px' }}
                      >
                        {t('language.ko')}
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          </ul>
        </nav>
        <motion.div
          className="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabIndex="0"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <motion.span
            animate={show ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </motion.div>
      </div>
      <hr className="hr-1"></hr>
    </motion.header>
  );
};

export default Header;
