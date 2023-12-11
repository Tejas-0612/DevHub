import React from 'react'
import Achievement from '../assets/achievement.png'
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'

const Achievements = () => {
  return (
    <div className='w-screen h-screen flex my-16 md:my-0 md:items-center'>
        <div className='flex flex-col md:flex-row md:justify-between md:m-auto w-[1000px] h-[540px]'>
            <div className='flex flex-col justify-center mx-2'>
                <h1 className='md:leading-[72px] text-3xl md:text-4xl font-semibold mx-2 md:mx-0'>Our <span className='text-[#20B486]'>Achievement</span></h1>
                <p className='text-gray-500 text-md md:text-lg mx-2 md:mx-0'>Various versions have evolved over the years, sometimes by accident</p>
                <div className='grid grid-cols-2 py-12 mx-2 md:mx-0'>
                    <div className='flex py-6'>
                        <div className='p-2 md:p-4 bg-[#E9F8F3] rounded-xl'>
                            <SlGraduation size={30} style={{color:'#1A906B'}} />
                        </div>
                        <div className='px-2 md:px-3'>
                            <h1 className='text-2xl font-semibold'>300</h1>
                            <p  className='text-[#6D737A]'>Instructor</p>
                        </div>
                    </div>
                    <div className='flex py-6'>
                        <div className='p-2 md:p-4 bg-[#FFFAF5] rounded-xl'>
                            <FiVideo size={30} style={{color:'#FFC27A'}} />
                        </div>
                        <div className='px-2 md:px-3'>
                            <h1 className='text-2xl font-semibold'>10,000+</h1>
                            <p  className='text-[#6D737A]'>Vedio</p>
                        </div>
                    </div>
                    <div className='flex  py-6'>
                        <div className='p-2 md:p-4 bg-[#FFEEF0] rounded-xl'>
                            <SlGraduation size={30} style={{color:'#ED4459'}} />
                        </div>
                        <div className='px-2 md:px-3'>
                            <h1 className='text-2xl font-semibold'>300</h1>
                            <p  className='text-[#6D737A]'>Instructor</p>
                        </div>
                    </div>
                    <div className='flex py-6'>
                        <div className='p-2 md:p-4 bg-[#F0F7FF] rounded-xl'>
                            <SlPeople size={30} style={{color:'#0075FD'}} />
                        </div>
                        <div className='px-2 md:px-3'>
                            <h1 className='text-2xl font-semibold'>300</h1>
                            <p  className='text-[#6D737A]'>Instructor</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/3 mx-auto mt-[-30px] md:mt-0 md:w-auto md:mx-0'>
                <img src={Achievement} />
            </div>
        </div>
    </div>
  )
}

export default Achievements
