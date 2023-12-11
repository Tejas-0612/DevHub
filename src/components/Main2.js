import React from 'react'
import companyLogo1 from '../assets/companyLogos/companyLogo1.png'
import companyLogo2 from '../assets/companyLogos/company-logo-2.png'
import companyLogo3 from '../assets/companyLogos/company-logo-3.png'
import companyLogo4 from '../assets/companyLogos/company-logo-4.png'


const main2 = () => {
  return (
    <div className=' w-full h-[260px] md:h-auto text-center my-4 md:my-20 '>
        <div className='w-screen md:w-[1300px] mx-auto text-[#536E96]'>
            <h1 className='text-2xl md:text-3xl font-bold my-4'>Trusted by over 25,000 teams around the world.</h1>
            <p className='text-lg md:text-xl mx-2 md:mx-0'>Leading companies use the same courses to help employees keep their skills fresh.</p>
            <div className='md:w-6/12 flex flex-wrap md:flex-nowrap justify-between mx-auto my-4'>
                <img  src={companyLogo1} alt="companyLogo1" className='my-2 mx-2 md:my-0 md:mx-0'/>
                <img className='mx-4 my-2' src={companyLogo2} alt="companyLogo2" />
                <img className='mx-4 my-2' src={companyLogo3} alt="companyLogo3" />
                <img  src={companyLogo4} alt="companyLogo4" className='my-2 md:my-0 mx-2 md:mx-0'/>

            </div>
        </div>
    </div>
  )
}

export default main2