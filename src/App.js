import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Tech from "./components/Tech";
import Career from "./components/Career";
import Work from "./components/Work";
// NOTE: 숨김 처리 (요청: 오픈소스/발표/글 섹션 & 탭 비노출)
// import OpenSource from "./components/OpenSource";
// import Presentation from "./components/Presentation";
// import Article from "./components/Article";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skip from "./components/Skip";
// import smooth from "./utils/smooth";
// import link from "./utils/link";

const App = () => {
  // useEffect(() => {
  //   // smooth();
  //   // link();
  // }, []);

  return (
    <>
      <Skip />
      <Header />
      <main id="main" role="main">
        <Intro />
        <Tech />
        <Career />
        <Work />
        {/* NOTE: 숨김 처리 (요청: 오픈소스/발표/글 섹션 & 탭 비노출) */}
        {/* <OpenSource /> */}
        {/* <Presentation /> */}
        {/* <Article /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
