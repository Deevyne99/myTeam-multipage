import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
const Card = ({ id, name, img, position }) => {
  return (
    <div
      key={id}
      className='relative flex bg-veryDarkGreen w-56 space-y-2 items-center flex-col mt-10 py-5'
    >
      <img className='mx-auto w-16' src={img} alt='name' />
      <strong className='text-center text-capitalize text-lightGreen '>
        {name}
      </strong>
      <p className='text-white text-xs'>{position}</p>
      <button className='absolute bg-lightOrange flex items-center justify-center h-8 w-8 rounded-full bottom-[-20px] '>
        <AiOutlinePlus className=' font-bold text-veryDarkGreen' />
      </button>
    </div>
  )
}

export default Card
