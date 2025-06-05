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
                  <a href="https://github.com/EthanYJLee" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/%EC%98%81%EC%A7%84-%EC%9D%B4-260047275/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <ul>
                <li>Email: lyj72011648@gmail.com</li>
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