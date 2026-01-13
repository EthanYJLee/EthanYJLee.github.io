import React from "react";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { t } = useTranslation();
  const workExperienceData = t("career.work_experience.lists", { returnObjects: true });
  const educationData = t("career.education.lists", { returnObjects: true });
  const certificationData = t("career.certifications.lists", {
    returnObjects: true,
  });
  const languageData = t("career.languages.lists", { returnObjects: true });

  return (
    <section id="career">
      <div className="career__inner">
        <h2 className="career__title">
          <strong>{t("career.title")}</strong>
        </h2>

        <div className="career__container">
          {/* 경력사항 */}
          <div className="work_experience__column">
            <h3 className="column__title">{t("career.work_experience.title")}</h3>
            <div className="timeline">
              {workExperienceData.map((item, index) => (
                <div className="timeline__item" key={index}>
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <h4 className="timeline__title">{item.company}</h4>
                    <p className="timeline__degree">{item.position}</p>
                    <p className="timeline__period">{item.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 학력/교육 */}
          <div className="education__column">
            <h3 className="column__title">{t("career.education.title")}</h3>
            <div className="timeline">
              {educationData.map((item, index) => (
                <div className="timeline__item" key={index}>
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <h4 className="timeline__title">{item.institution}</h4>
                    <p className="timeline__degree">{item.degree}</p>
                    <p className="timeline__period">{item.period}</p>
                    {item.description && <p className="timeline__description">{item.description}</p>}
                    {/* {item.detail && (
                      <p>{item.detail}</p>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 자격증 */}
          <div className="certification__column">
            <h3 className="column__title">{t("career.certifications.title")}</h3>
            <div className="timeline">
              {certificationData.map((item, index) => (
                <div className="timeline__item" key={index}>
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <h4 className="timeline__title">{item.name}</h4>
                    <p className="timeline__issuer">{item.issuer}</p>
                    <p className="timeline__date">{item.date}</p>
                    {item.description && <p className="timeline__description">{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="language__column">
            <h3 className="column__title">{t("career.languages.title")}</h3>
            <div className="timeline">
              {languageData.map((item, index) => (
                <div className="timeline__item" key={index}>
                  <div className="timeline__dot"></div>
                  <div className="timeline__content">
                    <h4 className="timeline__title">{item.name}</h4>
                    {item.level && (
                      <p className="timeline__level">{item.level}</p>
                    )}
                    {item.certification && (
                      <p className="timeline__certification">{item.certification}</p>
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
