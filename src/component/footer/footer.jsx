import React from 'react'
import instagram from "../../assets/instagram logo..png"
import telegram from "../../assets/telegram.png"
import linked from "../../assets/linkedin.png"
import "./footer.css"
const footer = () => {

  // const imgSize = "w-5 h-4";
  return (
<div className="bg-blue-900 w-full h-auto py-10 flex justify-center items-center flex-col gap-6">
  <h6 className="text-white text-2xl md:text-5xl font-bold text-center">Vast Community Of Students</h6>
  <div className="flex flex-col md:flex-row justify-center items-center gap-5 text-white">
    <div className="border border-white w-48 md:w-32 rounded-3xl flex justify-between items-center ">
      <h2 className="px-4 text-lg md:text-xl">2.5 k+</h2>
      <div><img src={instagram} alt="Instagram" className="w-9 h-9"/></div>
    </div>
    <div className="border border-white w-48 md:w-32 rounded-3xl flex justify-between items-center">
      <h2 className="px-4 text-lg md:text-xl">50 k+</h2>
      <div><img src={telegram} alt="Telegram" className="w-9 h-9"/></div>
    </div>
    <div className="border border-white w-48 md:w-32 rounded-3xl flex justify-between items-center ">
      <h2 className="px-4 text-lg md:text-xl">29 k+</h2>
      <div><img src={linked} alt="LinkedIn" className="w-9 h-9 rounded-full"/></div>
    </div>
  </div>
</div>

  )
}

export default footer