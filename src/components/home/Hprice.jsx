import React from "react"
import Heading from "../common/heading/Heading"
import ServiceCard from "../services/ServiceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='OUR PRICING' title='Pricing & Packages' />
        <div className='price container grid'>
          <ServiceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
