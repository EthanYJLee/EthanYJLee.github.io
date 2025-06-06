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
    // 모바일 메뉴가 닫힐 때 언어 메뉴도 닫기
    if (show) {
      setShowLanguageMenu(false);
    }
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
    hidden: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      height: 0
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      height: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn"
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
                className="nav-item"
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
            
            {/* 언어 선택 메뉴 - 우측에 분리 배치 */}
            <motion.li 
              className="language-selector"
              custom={headerNav.length}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              style={{ 
                display: 'inline-block',
                position: 'relative',
                zIndex: 20000
              }}
            >
              <div 
                className="language-button" 
                onClick={toggleLanguageMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                  padding: '5px 10px',
                  borderRadius: '5px',
                  transition: 'all 0.3s ease'
                }}
              >
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
                    exit="exit"
                    style={{
                      position: 'absolute',
                      top: '32px',
                      right: 0,
                      zIndex: 20001, // 더 높은 z-index
                      minWidth: '150px',
                      backgroundColor: 'rgba(255, 255, 255, 0.98)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '8px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      marginTop: '8px',
                      overflow: 'visible' // hidden에서 visible로 변경
                    }}
                  >
                    <motion.ul 
                      style={{ 
                        top: '20px',
                        margin: 0, 
                        padding: 0,
                        listStyle: 'none'
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.li 
                        className={currentLanguage === 'en' ? 'active' : ''}
                        onClick={() => changeLanguage('en')}
                        style={{ 
                          padding: '12px 20px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s ease',
                          margin: 0,
                          fontSize: '0.9rem',
                          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                          whiteSpace: 'nowrap',
                          textAlign: 'right'
                        }}
                        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {t('language.en')}
                      </motion.li>
                      <motion.li 
                        className={currentLanguage === 'ko' ? 'active' : ''}
                        onClick={() => changeLanguage('ko')}
                        style={{ 
                          padding: '12px 20px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s ease',
                          margin: 0,
                          fontSize: '0.9rem',
                          whiteSpace: 'nowrap',
                          textAlign: 'right'
                        }}
                        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                      >
                        {t('language.ko')}
                      </motion.li>
                    </motion.ul>
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
