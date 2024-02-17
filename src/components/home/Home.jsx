import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hservices from "./Hservices";
import Testimonal from "./testimonal/Testimonal";
import "./home.css"


const Home = () => {
  return (
    <div className="gradient-custom">
      <Hero />
      <div className="bg-home">
      <Hservices />
      <AboutCard />
      {/* <HAbout /> */}
      <Testimonal />
      <Hblog />
      </div>
      
    </div>
  );
};

export default Home;
