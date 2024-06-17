// import React from 'react'
import Header from '../component/Header/Header'
import InstructorCard from '../component/MainCard/InstructorCard'
import background from "../assets/Background.png"
import "../component/MainCard/Instructor.css"
import Testimonial from './Testimonial'

const InstructorPage = () => {
  return (
    <div className='flex flex-col h-full bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${background})`}}>
        <Header/>
        <section className="relative mx-auto shadow-lg rounded-lg p-8 mt-8 w-4/5 flex justify-center items-center background" >
         <InstructorCard />
         
      </section>
      <Testimonial />
        
    </div>
  )
}

export default InstructorPage