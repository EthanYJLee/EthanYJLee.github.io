import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__info">
          <div className="left">
            <div className="title">
              <a href="/">포트폴리오</a>
            </div>
            <p className="desc">{t('footer.desc')}</p>
          </div>
          <div className="right">
            <div className="sns">
              <ul>
                <li>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <ul>
                <li>Email: developer@example.com</li>
                <li>Location: Seoul, South Korea</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__right">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 