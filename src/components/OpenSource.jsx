import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const OpenSource = () => {
  const { t } = useTranslation();
  const list = t("openSource.lists", { returnObjects: true });

  return (
    <section id="opensource">
      <div className="openSource__inner">
        <motion.h2
          className="openSource__title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>{t("openSource.title")}</strong>
        </motion.h2>

        <div className="openSource__list">
          {Array.isArray(list) &&
            list.map((item, idx) => (
              <div className="openSource__item" key={idx}>
                <h3 className="openSource__itemTitle">{item.title}</h3>
                <ul className="openSource__descriptions">
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

export default OpenSource;


