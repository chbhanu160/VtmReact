import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hservices from "./Hservices"
import Testimonal from "./testimonal/Testimonal"


const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Hservices />
      <Testimonal />
      <Hblog />
      
    </>
  )
}

export default Home
