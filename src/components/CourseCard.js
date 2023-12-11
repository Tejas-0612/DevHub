import React from 'react'
import StarRating from '../utils/StarRating'
import course1 from "../assets/course1.png"
const CourseCard = ({title,rating,reviewers,img}) => {
   
  return (
    <div className='w-72 bg-white rounded-xl shadow-xl mx-auto'>
      <div className='w-full rounded-xl pt-1'>
        {img}
        {/* <img src={course1} className='w-[90%] mx-auto py-3 rounded-xl' /> */}
      </div>
      <div className='my-6 px-2'>
        <p className='my-2 mb-4 text-lg'>{title}</p>
         <StarRating rating={rating} className="my-4"/>
        <div className='border-gray-200 border-b-2' ></div>
        <p className='p-2 my-3 font-semibold text-2xl'>$ 500</p>
      </div>
    </div>
  )
}

export default CourseCard
 