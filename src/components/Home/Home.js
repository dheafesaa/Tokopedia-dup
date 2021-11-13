import Detail from "components/Detail/Detail";
import Official from "components/Official/Official";
import Trending from "components/Trending/Trending";
import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Kategori from "../Kategori/Kategori";
import Spesial from "../Spesial/Spesial";
import "./Home.scss";

const Home = () => {
  return (
    <div className="main-home">
      <div className="main-home__1">
        <div className="main-home__2"></div>
      </div>
      <Banner />
      <Kategori />
      <Spesial />
      <Trending />
      <Official />
      <Footer />
      {/* <Detail /> */}
    </div>
  );
};

export default Home;
