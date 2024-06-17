// import React from 'react'
import logoImg from "../../assets/logo.png"

import Card from "../card/Card"
// import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'

const Header = () => {
  return (
    <div >
     <header className='flex justify-between  items-center py-1 px-10  gap-4'>
    <div className='flex justify-center items-center mx-4'>
       <img src={logoImg} className='h-20 w-32'></img>
    </div>

    <nav>
        <ul className='flex justify-center items-center gap-7 text-blue-900 font-bold  text-2xl '>
            <li>Home</li>
            <li>Internship</li>
            <li>Mock Tests</li>
            <li>Learning</li>
            <li>About</li>
        </ul>
    </nav>

    <div>
      <button className='bg-blue-900  px-4 rounded-2xl text-white py-1 text-xl'>Get started</button>
    </div>
    </header>
    <hr></hr>

    </div>
    
    


   
  )
}

export default Header