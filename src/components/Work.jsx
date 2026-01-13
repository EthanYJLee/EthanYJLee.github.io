import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import CrackDetectorModal from "./CrackDetectorModal";

const Work = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCrackDetectorModalOpen, setIsCrackDetectorModalOpen] = useState(false);
  
  // i18n을 통해 프로젝트 데이터 가져오기
  const projectsData = t('work.lists', { returnObjects: true });
  
  // 카테고리별 프로젝트 필터링
  const filteredProjects = activeCategory === 'all' 
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);
  
  // 카테고리 변경 시 인덱스 초기화
  useEffect(() => {
    setActiveIndex(0);
  }, [activeCategory]);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // 스타일 객체 정의 (CSS에서 관리하므로 최소한으로 유지)
  const articleStyle = {
    display: isMobile ? (activeIndex === activeIndex ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row'
  };
  
  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    margin: isMobile ? '0 auto' : '0'
  };

  const videoStyle = {
    maxWidth: '100%',
    height: 'auto',
    margin: isMobile ? '0 auto' : '0',
    borderRadius: '8px'
  };
  
  const categoryButtonVariants = {
    active: {
      backgroundColor: 'var(--primary-color)',
      color: '#fff',
      scale: 1.05,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    },
    inactive: {
      backgroundColor: 'var(--neutral-100)',
      color: 'var(--neutral-700)',
      scale: 1,
      boxShadow: 'none',
      transition: { duration: 0.3 }
    }
  };

  // 미디어 렌더링 함수
  const renderMedia = (project) => {
    if (project.id === 'crackdetector') {
      return (
        <video 
          src="videos/crack_detector.mp4"
          style={videoStyle}
          controls
          muted
          loop
          preload="metadata"
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      );
    } else if (project.img) {
      return (
        <img 
          src={project.img} 
          alt={project.title} 
          loading="lazy" 
          style={imageStyle}
        />
      );
    } else {
      return (
        <div className="placeholder">
          <span>이미지 준비 중</span>
        </div>
      );
    }
  };
  
  return (
    <section id="work">
      <div className="work__inner">
        <h2 className="work__title">
          <strong>{t('work.title')}</strong>
        </h2>
        
        {/* 카테고리 탭 */}
        <div className="work__categories">
          <motion.button
            className="category-button"
            variants={categoryButtonVariants}
            animate={activeCategory === 'all' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('work.category.all')}
          </motion.button>
          <motion.button
            className="category-button"
            variants={categoryButtonVariants}
            animate={activeCategory === 'personal' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('personal')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('work.category.personal')}
          </motion.button>
          <motion.button
            className="category-button"
            variants={categoryButtonVariants}
            animate={activeCategory === 'group' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('group')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('work.category.group')}
          </motion.button>
          <motion.button
            className="category-button"
            variants={categoryButtonVariants}
            animate={activeCategory === 'company' ? 'active' : 'inactive'}
            onClick={() => setActiveCategory('company')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('work.category.company')}
          </motion.button>
        </div>
        
        {isMobile && filteredProjects.length > 0 && (
          <div className="project-navigation">
            <button className="nav-button prev" onClick={handlePrev}>
              &lt;
            </button>
            <div className="indicator">
              {filteredProjects.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <button className="nav-button next" onClick={handleNext}>
              &gt;
            </button>
          </div>
        )}

        {filteredProjects.length > 0 ? (
          <div className="work__wrap">
            {filteredProjects.map((project, key) => (
              <article 
                className={`work__item s${key + 1}`} 
                key={key}
                style={{
                  display: isMobile ? (key === activeIndex ? 'flex' : 'none') : 'flex',
                  flexDirection: isMobile ? 'column' : 'row'
                }}
              >
                {/* <span className="num">{key + 1} |</span> */}

                {key % 2 === 0 ? (
                  <>
                    <div className="text-section">
                      <div className="title-row">
                        <h3 className="title">{project.title}</h3>
                        <span className={`project-tag ${project.category}`}>
                          {t(`work.tag.${project.category}`)}
                        </span>
                      </div>
                      <div className="text" style={{ textAlign: isMobile ? "center" : "left", textWrap: "wrap !important"}}>
                        <div>{project.info[0]}</div>
                        <div>{project.info[1]}</div>
                      </div>
                      <div className="tech-tags">
                        {/* {project.info[2].split(',').map((tech, i) => (
                          <span key={i} className="tech-tag">{tech.trim()}</span>
                        ))} */}
                        {project.stack.map((s,i) => (
                          <span key={i} className="tech-tag">{s}</span>
                        ))}
                      </div>
                      <div className="btn">
                        {project.btn.map((btnInfo, i) => (
                          <a 
                            key={i} 
                            href={btnInfo.link || "#"}
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {btnInfo.text}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="image-section">
                      {renderMedia(project)}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="image-section">
                      {renderMedia(project)}
                    </div>
                    <div className="text-section">
                      <div className="title-row">
                        <h3 className="title">{project.title}</h3>
                        <span className={`project-tag ${project.category}`}>
                          {t(`work.tag.${project.category}`)}
                        </span>
                      </div>
                      <div className="text" style={{ textAlign: isMobile ? "center" : "right" }}>
                        <div>{project.info[0]}</div>
                        <div>{project.info[1]}</div>
                      </div>
                      <div className="tech-tags">
                        {/* {project.info[2].split(',').map((tech, i) => (
                          <span key={i} className="tech-tag">{tech.trim()}</span>
                        ))} */}
                        {project.stack.map((s,i) => (
                          <span key={i} className="tech-tag">{s}</span>
                        ))}
                      </div>
                      <div className="btn">
                        {project.btn.map((btnInfo, i) => (
                          <a 
                            key={i} 
                            href={btnInfo.link || "#"}
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {btnInfo.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className="no-projects">
            <p>해당 카테고리에 프로젝트가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
