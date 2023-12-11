import React from 'react'
import HeroImg from '../assets/heroImg.png'

const Main = () => {
  return (
    <div className='w-fulll h-screen md:h-[610px] flex justify-center my-10 md:items-center '>
        <div className='w-screen md:w-[1260px] h-[500px] grid md:grid-cols-2 gap-16 md:gap-0'>
            <div className='flex flex-col justify-start gap-4 md:py-9 pl-4 md:pl-16'>
                <p className='text-[#20B486] font-semibold text-base md:text-lg'>START TO SUCCESS</p>
                <p className='text-3xl md:text-5xl font-semibold my-2 leading-[55px]'>Access To <span className='text-[#20B486]'> 5000+ </span> Courses from <span className='text-[#20B486]'>300</span> Instructors & Institutions</p>
                <p className='text-gray-400 mb-2'> Various versions have evolved over the years, sometimes by accident</p>
                <form className='bg-white border max-w-[530px] p-4 input-box-shadow rounded-md flex justify-between shadow-md mx-4'>
                    <input 
                        className='bg-white outline-none w-full'
                        type="text"
                        placeholder='What do want to learn?'
                        />
                    <button>
                        {/* <AiOutlineSearch 
                            size={20}
                            className="icon"
                            style={{color:'#000'}}
                            
                        /> */}
                          S
                    </button>
                </form>
                
            </div>  

            <div className='w-auto md:w-[650px] mx-2'>
                <img className=''  src={HeroImg} alt='main-img' />
            </div>  
        </div>
    </div>
  )
}

export default Main


