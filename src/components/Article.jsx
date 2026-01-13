import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Article = () => {
  const { t } = useTranslation();
  const list = t("article.lists", { returnObjects: true });

  return (
    <section id="article">
      <div className="article__inner">
        <motion.h2
          className="article__title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>{t("article.title")}</strong>
        </motion.h2>

        <div className="article__list">
          {Array.isArray(list) &&
            list.map((item, idx) => (
              <div className="article__item" key={idx}>
                {item?.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.content}
                  </a>
                ) : (
                  <span>{item?.content}</span>
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Article;


