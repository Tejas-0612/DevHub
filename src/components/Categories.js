import React from 'react'
import CategoryCard from "./CategoryCard"
import { BsVectorPen } from 'react-icons/bs';
import CategoryData from '../utils/CategoryData';


const Categories = () => {
  return (
    <div className='w-full min-h-screen bg-[#E9F8F3] flex items-center'>
      <div className='w-screen md:w-[1200px] h-[540px] mx-3 md:m-auto flex items-center'>
        <div>

        <h1 className='md:leading-[72px] text-3xl md:text-4xl font-semibold py-2 md:py-0 md:font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span> </h1>
        <p className='text-base md:text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
        <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
          {CategoryData.map((data,index)=><CategoryCard key={index} name={data.title} img={data.img} />)}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
