import React, { useState, useEffect } from "react";
import { siteText } from "../constants";
import { useTranslation } from 'react-i18next';

const Work = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
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
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % siteText.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + siteText.length) % siteText.length);
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
  
  return (
    <section id="work">
      <div className="work__inner">
        <h2 className="work__title">
          <strong>{t('work.title')}</strong>
        </h2>
        
        {isMobile && (
          <div className="project-navigation">
            <button className="nav-button prev" onClick={handlePrev}>
              &lt;
            </button>
            <div className="indicator">
              {siteText.map((_, index) => (
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

        <div className="work__wrap">
          {siteText.map((site, key) => (
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
                    <h3 className="title">{site.title}</h3>
                    <div className="text" style={{ textAlign: isMobile ? "center" : "left" }}>
                      <div>{site.info[0]}</div>
                      <div>{site.info[1]}</div>
                    </div>
                    <div className="tech-tags">
                      {site.info[2].split(',').map((tech, i) => (
                        <span key={i} className="tech-tag">{tech.trim()}</span>
                      ))}
                    </div>
                    <div className="btn">
                      {site.btn.map((btnText, i) => (
                        <a 
                          key={i} 
                          href={btnText.link || "#"}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {i === 0 ? t('work.viewProject') : t('work.viewCode')}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="image-section">
                    {site.img ? (
                      <img 
                        src={site.img} 
                        alt={site.title} 
                        loading="lazy" 
                        style={imageStyle}
                      />
                    ) : (
                      <div className="placeholder">
                        <span>이미지 준비 중</span>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="image-section">
                    {site.img ? (
                      <img 
                        src={site.img} 
                        alt={site.title} 
                        loading="lazy" 
                        style={imageStyle}
                      />
                    ) : (
                      <div className="placeholder">
                        <span>이미지 준비 중</span>
                      </div>
                    )}
                  </div>
                  <div className="text-section">
                    <h3 className="title">{site.title}</h3>
                    <div className="text" style={{ textAlign: isMobile ? "center" : "right" }}>
                      <div>{site.info[0]}</div>
                      <div>{site.info[1]}</div>
                    </div>
                    <div className="tech-tags">
                      {site.info[2].split(',').map((tech, i) => (
                        <span key={i} className="tech-tag">{tech.trim()}</span>
                      ))}
                    </div>
                    <div className="btn">
                      {site.btn.map((btnText, i) => (
                        <a 
                          key={i} 
                          href={btnText.link || "#"}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {i === 0 ? t('work.viewProject') : t('work.viewCode')}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
        
        {/* {isMobile && (
          <div className="mobile-navigation" style={{ marginTop: '10px' }}>
            <button className="mobile-nav-button prev" onClick={handlePrev}>
              &lt; 이전
            </button>
            <div className="current-project">
              {activeIndex + 1} / {siteText.length}
            </div>
            <button className="mobile-nav-button next" onClick={handleNext}>
              다음 &gt;
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default Work;
