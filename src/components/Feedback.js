import React from 'react'
import FeedbackCard from './FeedbackCard'
import FeedbackData from "../utils/FeedbackData"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Feedback = () => {
   
    // var settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow:1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         infinite: false,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: false,
    //         dots: true
    //       }
    //     }
    //     // You can unslick at a given breakpoint now by adding:
    //     // settings: "unslick"
    //     // instead of a settings object
    //   ]
    //   };
    
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     pauseOnHover: true
    //   }; 
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: true,
    //           dots: true
    //         }
    //       }
    //     ]
    //   };

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    };
  return (
      <div className='w-screen min-h-screen  md:bg-white m-0 md:m-auto md:flex md:items-center my-16 overflow-x-hidden'>
       
        <div className='w-screen md:w-[1300px] mx-2 md:mx-auto my-auto '>
        <h1 className='text-3xl md:text-4xl font-semibold mb-4'>Student  <span className='text-[#20B486]'>Feedback</span></h1>
        <p className=' text-gray-500 text-xl my-8'>Various versions have evolved over the years, sometimes by accident</p>

        <Slider {...settings} className='w-screen md:w-auto mx-auto' >
        {FeedbackData.map((data,index)=><FeedbackCard key={index} name={data.name} info={data.info} avatar={data.avatar} role={data.role}/>)}
      </Slider>
        </div>
    </div>
  )
}

export default Feedback
