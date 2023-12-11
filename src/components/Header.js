import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";



const Header = () => {

  return (
    <div className='w-full flex justify-between h-[80px] shadow-md md:sticky top-0 z-100 ' >
      <div className='w-5/6 flex justify-between items-center sm:mx-auto md:mx-auto mx-6 '>
        <div>
          <span className='text-[#20B486] font-bold text-2xl'>DevHub</span>
        </div>

        <div className='w-[380px]'>
        <ul className='hidden md:flex justify-between'>
          <li className='text-[#20B486] cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Courses</li>
          <li className='cursor-pointer'>Blog</li>
          <li className='cursor-pointer'>Contact</li>
        </ul>
        </div>

     
        
        <div className='hidden md:flex'>
        <button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
          Login
        </button>

        <button className='px-4 py-3 rounded-md bg-[#20B486] text-white font-bold'>
          Sign Up For Free
        </button>
        </div>
        <div className='block md:hidden text-3xl my-auto mx-4'>
          <button >
            <GiHamburgerMenu/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
