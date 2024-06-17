import React from 'react'
import instagram from "../../assets/instagram logo..png"
import telegram from "../../assets/telegram.png"
import linked from "../../assets/linkedin.png"
import "./footer.css"
const footer = () => {

  // const imgSize = "w-5 h-4";
  return (
    <div className='bg-blue-900 w-full h-40 flex justify-center items-center flex-col gap-10 '>
            <h6 className='text-white text-5xl font-bold'>Vast Community Of Students</h6>
        <div className='flex justify-center items-center gap-5 text-white'>
            <div className='border border-white border-2 w-32 rounded-3xl flex justify-between items-center '><h2 className='px-4'>2.5 k+</h2><div><img src={instagram} className='w-9 h-9'/></div></div>
            <div className='border border-white border-2  w-32  rounded-3xl flex justify-between items-center '><h2 className='px-4'>50 k+</h2><div><img src={telegram} className='w-9 h-9'/></div></div>
            <div className='border border-white border-2  w-32  rounded-3xl flex justify-between items-center '><h2 className='px-4'>29 k+</h2><div><img src={linked} className='w-9 h-9 rounded-full'/></div></div>
        </div>
    </div>
  )
}

export default footer