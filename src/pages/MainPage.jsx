import React from "react";
import About from "../components/about/About";
import Burger from "../components/burger/Burger";
import Description from "../components/description/Description";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import Header from "../components/header/Header";
import History from "../components/history/History";
import Infrustructure from "../components/infrustructure/Infrastructure";
import Map from "../components/map/Map";
import Plan from "../components/plan/Plan";
import Scheme from "../components/scheme/Scheme";
import Speech from "../components/speech/Speech";
// import ScrollableAnchor from "react-scrollable-anchor";

const MainPage = () => {
  return (
    <>
      <Burger />
      <Header />
      <Description/>
      <About />
      <History />
      <Infrustructure />
      <Speech />
      <Plan />
      <Scheme />
      <Gallery />
      <Map />
      <Footer />
    </>
  );
};

export default MainPage;
