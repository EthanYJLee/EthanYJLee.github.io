import React from "react";
import Header from "../components/Header";

import Main from "../components/Main";
import Intro from "../components/Intro";
import Work from "../components/Work";
import Tech from "../components/Tech";
import Contact from "../components/Contact";

const HomeView = () => {
  return (
    <>
        <Header />
        <Main>
          <Intro />
          <Tech />
          <Work />
          <Contact />
        </Main>
    </>
  );
};
export default HomeView;
