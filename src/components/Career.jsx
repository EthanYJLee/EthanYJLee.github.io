import React from "react";
import { careerData } from "../constants";
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();
  
  return (
    <section id="career">
      <div className="career__inner">
        <h2 className="career__title">
          <strong>{t('career.title')}</strong>
        </h2>
        
        <div className="career__container">
          <div className="education__column">
            <h3 className="column__title">{t('career.education')}</h3>
            <div className="timeline">
              {careerData.education.map((item, index) => (
                <div className="timeline__item" key={index}>
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <h4 className="timeline__title">{item.institution}</h4>
                    <p className="timeline__degree">{item.degree}</p>
                    <p className="timeline__period">{item.period}</p>
                    {item.description && (
                      <p className="timeline__description">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="certification__column">
            <h3 className="column__title">{t('career.certifications')}</h3>
            <div className="timeline">
              {careerData.certifications.map((item, index) => (
                <div className="timeline__item" key={index}>
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <h4 className="timeline__title">{item.name}</h4>
                    <p className="timeline__issuer">{item.issuer}</p>
                    <p className="timeline__date">{item.date}</p>
                    {item.description && (
                      <p className="timeline__description">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career; 