// Contact.jsx
import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
// import "./Contact.css"; // 아래 CSS를 Contact.css로 저장

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        {/* 왼쪽 */}
        <div className="contact-left">
          {/* <h2 className="contact-title">Let&apos;s Connect!</h2> */}
          <h2 className="contact__title">
            <strong>Contact</strong>
          </h2>
          <p className="contact-desc">
            If you ever want to grab a coffee/bubble tea{" "}
            <span className="contact-virtual">(virtually)</span> or just want a
            quick chat - you can find me on social media or you can send me a
            message here!
          </p>
          <div className="contact-socials">
            <a
              href="https://linkedin.com"
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
              href="https://github.com"
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
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <textarea placeholder="message" rows={6} />
          <button type="submit">SEND MESSAGE</button>
        </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
