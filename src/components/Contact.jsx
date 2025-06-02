// Contact.jsx
import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
// import "./Contact.css"; // 아래 CSS를 Contact.css로 저장

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact">
      <div className="contact-container">
        {/* 왼쪽 */}
        <div className="contact-left">
          {/* <h2 className="contact-title">Let&apos;s Connect!</h2> */}
          <h2 className="contact__title">
            <strong>{t('contact.title')}</strong>
          </h2>
          <p className="contact-desc">
            If you ever want to grab a coffee/bubble tea{" "}
            <span className="contact-virtual">(virtually)</span> or just want a
            quick chat - you can find me on social media or you can send me a
            message here!
          </p>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/%EC%98%81%EC%A7%84-%EC%9D%B4-260047275/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/EthanYJLee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="contact-right">
        <form className="contact-form" style={{flowDirection:"column"}}>
          <input type="text" placeholder={t('contact.name')} />
          <input type="email" placeholder={t('contact.email')} />
          <textarea placeholder={t('contact.message')} rows={6} />
          <button type="submit">{t('contact.send')}</button>
        </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
