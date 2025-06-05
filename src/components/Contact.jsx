// Contact.jsx
import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
// import "./Contact.css"; // 아래 CSS를 Contact.css로 저장

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact">
      <div className="contact__inner">
        <motion.h2 
          className="contact__title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>{t('contact.title')}</strong>
        </motion.h2>
        
        <div className="contact__container">
          {/* 왼쪽: 소개 및 소셜 링크 */}
          <motion.div 
            className="contact__left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact__intro">
              <h3 className="contact__subtitle">Let's Connect</h3>
              <p className="contact__desc">
                {t('contact.desc')}
              </p>
            </div>
            
            <div className="contact__image">
              <img src="images/communication.png" alt="contact illustration" />
            </div>
            
            <div className="contact__socials">
              <h4>Follow Me</h4>
              <div className="social__links">
                <motion.a
                  href="https://www.linkedin.com/in/%EC%98%81%EC%A7%84-%EC%9D%B4-260047275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedinIn />
                </motion.a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a> */}
                <motion.a
                  href="https://github.com/EthanYJLee"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* 오른쪽: 연락처 폼 */}
          <motion.div 
            className="contact__right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="contact__form-container">
              <h3 className="form__title">Send a Message</h3>
              <form className="contact__form">
                <div className="form__group">
                  <input 
                    type="text" 
                    placeholder={t('contact.name')}
                    required
                  />
                </div>
                <div className="form__group">
                  <input 
                    type="email" 
                    placeholder={t('contact.email')}
                    required
                  />
                </div>
                <div className="form__group form__group--full">
                  <textarea 
                    placeholder={t('contact.message')}
                    rows={6}
                    required
                  />
                </div>
                <motion.button 
                  type="submit"
                  className="form__submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t('contact.send')}
                </motion.button>
              </form>
            </div>
            
            {/* 연락처 정보 */}
            <div className="contact__info">
              <div className="info__item">
                <FaEnvelope className="info__icon" />
                <div className="info__content">
                  <h4>Email</h4>
                  <p>lyj72011648@gmail.com</p>
                </div>
              </div>
              <div className="info__item">
                <FaMapMarkerAlt className="info__icon" />
                <div className="info__content">
                  <h4>Location</h4>
                  <p>Seoul, South Korea</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
