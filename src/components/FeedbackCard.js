import React from 'react'
import Avatar from "../assets/avatar.png"
import QuotationMark from "../assets/quotationMark.png"

const FeedbackCard = ({name,role,info,avatar}) => {
  return (
    <div className='w-[370px] md:w-auto border-black border-2 rounded-3xl md:px-4 md:pb-6 md:pt-4 md:mx-2 my-6 px-2 pb-0 pt-0  mx-2'>
      <div className='flex md:justify-between md:m-2'>
        <div className='flex items-center'>
            {avatar}
            <div className='ml-2'>
                <h1 className='text-xl md:text-2xl font-semibold'>{name}</h1>
                <p className='text-md md:text-lg'>{role}</p>
            </div>
        </div>
        <div className='m-6'>
            <img src={QuotationMark} alt="symbol" />
        </div>
      </div>

      <div>
        <p>{info}</p>
        {/* <p>Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla massa, hendrerit vestibulum gravida in, <br/><br/> feugiat auctor  felis.Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.</p> */}
      </div>
    </div>
  )
}

export default FeedbackCard
