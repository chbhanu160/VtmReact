import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HCourses from "./HCourses"
import Hero from "./hero/Hero";
import Hservices from "./Hservices";
import Testimonal from "./testimonal/Testimonal";
import "./home.css"


const Home = () => {
  return (
    <div>
      <Hero />
      <div className="bg-home">
      <HCourses />
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
