import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Presentation = () => {
  const { t } = useTranslation();
  const list = t("presentation.lists", { returnObjects: true });

  return (
    <section id="presentation">
      <div className="presentation__inner">
        <motion.h2
          className="presentation__title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>{t("presentation.title")}</strong>
        </motion.h2>

        <div className="presentation__list">
          {Array.isArray(list) &&
            list.map((item, idx) => (
              <div className="presentation__item" key={idx}>
                <div className="presentation__header">
                  <h3 className="presentation__itemTitle">{item.title}</h3>
                  {item.at && <span className="presentation__at">{item.at}</span>}
                </div>
                {item.subTitle && <div className="presentation__subTitle">{item.subTitle}</div>}
                <ul className="presentation__descriptions">
                  {Array.isArray(item.descriptions) &&
                    item.descriptions.map((desc, j) => (
                      <li key={j}>
                        {desc?.href ? (
                          <a href={desc.href} target="_blank" rel="noopener noreferrer">
                            {desc.content}
                          </a>
                        ) : (
                          desc?.content
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Presentation;


