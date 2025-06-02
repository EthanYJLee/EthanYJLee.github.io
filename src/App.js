import React, { useEffect } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Tech from "./components/Tech";
import Career from "./components/Career";
import Work from "./components/Work";
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
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
