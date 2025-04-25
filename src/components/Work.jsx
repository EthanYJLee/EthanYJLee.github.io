import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { siteText } from "../constants";

let imgArray = ["images/twomore.png", "", "", ""];
const Work = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          <strong>Work Experience</strong>
        </h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key + 1}`} key={key}>
              <div className="overlay">
                <div className="overlay-title">{site.title}</div>
                <div className="overlay-content">
                  <strong>
                    {site.info[0]}
                    {/* &lt;br /&gt; */}
                    <br />
                    {site.info[1]}
                  </strong>
                </div>
                <div className="btn-row">
                  {site.btn.map((btnText, i) => (
                    <button className="overlay-button">{btnText.text}</button>
                  ))}
                </div>
              </div>

              <span className="num"> {key + 1} |</span>

              {key % 2 === 0 ? (
                <>
                  <div className="text-section">
                    <h3 className="title">{site.title}</h3>
                    <div className="text" style={{ textAlign: "left" }}>
                      {/* <div>{site.text[0]}</div>
                      <div>{site.text[1]}</div>
                      <div>{site.text[2]}</div> */}
                    </div>
                  </div>
                  <div className="image-section">
                    <img src={imgArray[key]} alt={site.title} />
                  </div>
                </>
              ) : (
                <>
                  <div className="image-section">
                    <p>여기에 이미지 내용을 넣습니다.</p>
                  </div>
                  <div className="text-section">
                    <h3 className="title">{site.title}</h3>
                    <div className="text" style={{ textAlign: "right" }}>
                      {/* <div>{site.text[0]}</div>
                      <div>{site.text[1]}</div>
                      <div>{site.text[2]}</div> */}
                    </div>
                  </div>
                </>
              )}

              {/* <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.code}>code</a>
                <a href={site.view}>view</a>
              </div>
              */}
              {/* <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
