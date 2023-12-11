import React from 'react'
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-white py-14 overflow-x-hidden'>
    <div className='w-screen md:w-[1300px] flex flex-col md:flex-row justify-between md:py-4 mx-2 md:mx-auto'>
      
      <div className=' text-center md:text-start'>
        <span className='text-[#20B486] font-bold text-3xl md:text-4xl my-12 '>DevHub</span>
        <h1 className='my-6 text-lg md:text-2xl font-semibold'>Contact Us</h1>
        <p>Call:+123 456 789</p>
        <h3 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br></br> vestibulum gravida in, feugiat auctor felis.</h3>
        <h3 className='mt-4 md:mt-6'>Email: Practice.admin@gmail.com</h3>
        <div className='flex gap-4 py-4 justify-center md:justify-start'>
          <div  className='p-2 md:p-4 bg-[#E9F8F3] rounded-xl block'><FaFacebookF size={25} style={{color:'#4DC39E'}}/></div>
          <div  className='p-2 md:p-4 bg-[#E9F8F3] rounded-xl'><FaDribbble size={25} style={{color:'#4DC39E'}}/></div>
          <div  className='p-2 md:p-4 bg-[#E9F8F3] rounded-xl'><FaLinkedinIn size={25} style={{color:'#4DC39E'}}/></div>
          <div  className='p-2 md:p-4 bg-[#E9F8F3] rounded-xl'><FaInstagram size={25} style={{color:'#4DC39E'}}/></div>
          <div  className='p-2 md:p-4 bg-[#E9F8F3] rounded-xl'><FaBehance size={25} style={{color:'#4DC39E'}}/></div>
        </div>
      </div>
    <div className='w-auto md:w-1/2 flex my-4 md:my-0 justify-around md:justify-evenly'>

      <div className=''>
        <h3 className='text-lg md:text-2xl font-semibold'>Explore</h3>
        <ul className='py-6 text-[#6D737A]'>
          <li className='md:py-2'>Home</li>
          <li className='md:py-2'>About</li>
          <li className='md:py-2'>Course</li>
          <li className='md:py-2'>Blog</li>
          <li className='md:py-2'>Contact</li>

        </ul>
      </div>

      <div className=''>
        <h3 className='text-lg md:text-2xl font-semibold'>Category</h3>
        <ul className='py-1 md:py-6 text-[#6D737A]'>
          <li className='py-2'>Design</li>
          <li className='py-2'>Development</li>
          <li className='py-2'>Marketing</li>
          <li className='py-2'>Business</li>
          <li className='py-2'>Lifestyle</li>
          <li className='py-2'>Photography</li>
          <li className='py-2'>Music</li>

        </ul>
      </div>
    </div>

      <div className='text-center md:text-start my-4 md:my-0'>
        <h1 className='text-xl md:text-2xl font-semibold mb-4 md:mb-6'>Subscribe</h1>
        <p className='my-4'>Praesent nulla massa, hendrerit
            vestibulum <br/> gravida in, feugiat auctor felis.</p>
        <input type='email' placeholder='Email Here' className='w-2/3 md:w-full outline-none p-1 md:p-3 rounded-md my-2 md:my-4 bg-gray-200 shadow-lg'/><br/> 
        <button className='px-1 md:px-4 py-1 md:py-3 rounded-md bg-[#20B486] text-white font-semibold md:font-bold my-2 md:my-4'>Subscribe Now</button>
      </div>
    </div>
    </div>
  )
}

export default Footer
