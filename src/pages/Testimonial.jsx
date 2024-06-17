import React from 'react'
import Card from '../component/card/Card'
import Header from '../component/Header/Header'
import Footer from "../component/footer/footer"
import background from "../assets/Background.png"

const Testimonial = () => {
  return (
<div className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${background})`, fontFamily: "Open Sans" }}>
  <div className="flex-grow flex justify-center items-center p-4">
    <div className="flex flex-col justify-center items-center gap-10 md:gap-20 text-center">
      <h6 className="text-2xl md:text-4xl font-bold text-blue-900">Testimonials</h6>
      <div className="flex flex-col md:flex-row gap-10 md:gap-40 items-center flex-wrap justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
  <Footer />
</div>
  )
}

export default Testimonial