import React from 'react'
import Card from '../component/card/Card'
import Header from '../component/Header/Header'
import Footer from "../component/footer/footer"
import background from "../assets/Background.png"

const Testimonial = () => {
  return (
    <div className='flex flex-col h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${background})`,fontFamily:"Open Sans"}}>
      
      <div className='h-4/5 flex justify-center'>
      <div className="flex flex-col justify-center items-center gap-20 ">
      <h6 className="text-4xl font-bold text-blue-900">Testimonials</h6>
      <div className="flex gap-40 items-center">
      <Card/>
      <Card/>
      <Card/>

      </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Testimonial