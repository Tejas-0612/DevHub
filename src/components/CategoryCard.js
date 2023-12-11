import React from 'react'
import {BsArrowUpRight} from 'react-icons/bs'

const categoryCard = ({name,img}) => {
  return (
    <div className='p-3 md:p-6 bg-white rounded-md flex items-center justify-between shadow-lg' >
       <div className='flex gap-2 md:gap-3'>
            <span className=''>{img}</span>
            <h1 className='md:text-xl text-base font-semibold '>{name}</h1>
        </div>
        <div className='group-hover/edit:bg-[#20B486] rounded-lg '>
          <BsArrowUpRight 
            size={20}
            style={{color:'#20B486'}}
            className='arrow-icon'
            />
        </div>
    </div>
  )
}

export default categoryCard
