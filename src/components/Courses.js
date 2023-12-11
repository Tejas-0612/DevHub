import React from 'react'
import CourseCard from "./CourseCard"
import CourseData from '../utils/CourseData'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Courses = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='w-full min-h-screen bg-[#E9F8F3]  flex items-center overflow-x-hidden'>
      <div className='w-screen md:w-[1300px] mx-2 md:mx-auto '>
        <h1 className='text-3xl md:text-5xl font-semibold mb-4'>Most Popular  <span className='text-[#20B486]'>Courses</span></h1>
        <p className=' text-gray-500 text-lg mx-2 md:mx-0 md:text-xl my-8'>Various versions have evolved over the years, sometimes by accident</p>
        <Slider {...settings} className='' >
            {CourseData.map((data,index)=><CourseCard key={index} title={data?.title} rating={data?.rating} reviewers={data?.reviewers} img={data?.img}/>)}
            </Slider>
      </div>
    </div>
  )
}

export default Courses
