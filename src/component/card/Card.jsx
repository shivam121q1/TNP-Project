import React from 'react'
import photo from "../../assets/profile.png"

const card = () => {
  return (
    <div className='h-auto w-80 flex flex-col gap-5 rounded-md' style={{backgroundColor:'#f1f7fc'}}>
        <div className='flex gap-12 justify-center items-center mt-5'>
            <img src={photo} className='w-15 h-16'></img>
            <h2 className='text-xl font-bold text-blue-900'>Learner Name</h2>
        </div>
        <div className='flex justify-center items-center m-5 '>
            <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies velit vel mi feugiat, ac feugiat eros suscipit.
            Vivamus nec dictum risus. Sed sit amet eros a felis luctus facilisis. Integer at urna in nunc vehicula placerat sed quis nulla.</p>
        </div>
    </div>
  )
}

export default card