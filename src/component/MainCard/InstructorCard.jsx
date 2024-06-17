import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import React from 'react'
import "./Instructor.css"

const InstructorCard = () => {
  return (
    <div className=''>
    <div className='flex flex-col gap-3'>
      <h2 className="text-5xl font-bold text-blue-900">Our Instructors</h2>
      <p className="text-xl text-gray-600">Learn from Our Experienced and Dedicated Instructors.</p>

      </div>

      <hr className="my-4" />
      <div className="flex justify-evenly items-center ">
        <div className="w-2/6">
          <img src="https://via.placeholder.com/180" alt="Instructor" className="w-full rounded-full border-4 border-yellow-500 w-2/3" />
        </div>
        <div className="w-3/6 bg-transparent">
          <h3 className="text-4xl font-bold text-blue-900">Instructor Name</h3>
          <p className="text-gray-600 text-2xl">Post Instructor @tnpofficer</p>
          <p className="text-gray-600 mt-4 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies velit vel mi feugiat, ac feugiat eros suscipit.
            Vivamus nec dictum risus. Sed sit amet eros a felis luctus facilisis. Integer at urna in nunc vehicula placerat sed quis nulla.
          </p>
        </div>
      </div>
      <div className="absolute right-20 top-10 flex space-x-2">
      <CircleArrowLeft size={40} color="#1e3a8a" />
      <CircleArrowRight size={40} color="#1e3a8a" />
      </div>
    </div>
  )
}

export default InstructorCard