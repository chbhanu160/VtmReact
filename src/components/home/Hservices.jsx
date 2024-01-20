import React from "react"
import Heading from "../common/heading/Heading"
import ServiceCard from "../services/ServiceCard"
import LearningPage from "../services/LearningPage"
import ConsultingPage from "../services/ConsultingPage"

const Hservices = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='OUR Services'  />
        <div className='Service_container grid'>
          <LearningPage /> 
          <ConsultingPage />
        </div>
      </section>
    </>
  )
}

export default Hservices
