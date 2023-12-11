import React from 'react'
import CTAimg from '../assets/cta.png'
const CTA = () => {
  return (
    <div className='w-full min-h-screen flex  items-center bg-[#E9F8F3] '>

      <div className='w-screen md:w-[1200px] my-auto mx-2 md:mx-auto flex flex-col-reverse md:flex-row justify-between items-center '>
        <img src={CTAimg} className='my-4 md:my-0'/>
        <div className=' md:text-start mx-4 md:mx-8'>
            <h1 className='text-3xl font-semibold md:mx-2 my-4'>Join <span className='text-[#20B486]'>World's largest</span> learning platform today</h1>
            <p className='text-xl mb-8'>Start learning by registering for free</p>
            <button className='px-6 md:px-4 py-2 md:py-3 rounded-md bg-[#20B486] text-white font-semibold '>Sign Up For Free</button>
        </div>
      </div>
    </div>
  )
}

export default CTA
