import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../assets/group-7.png'

const Ready = () => {
  return (
    <section className='relative bg-lightOrange'>
      <img
        className='absolute bottom-0 left-0 w-32 lg:w-44'
        src={images}
        alt='design'
      />
      <div className='flex flex-col space-y-8 md:flex-row md:mx-20 mx-8 lg:mx-64 items-center py-12 justify-between'>
        <h2 className='text-veryDarkGreen text-center font-bold text-3xl'>
          Ready to get started?
        </h2>
        <Link
          className='px-6 rounded-full py-2 border-[2px] border-veryDarkGreen font-bold  text-veryDarkGreen'
          to={'/contact'}
        >
          contact us
        </Link>
      </div>
    </section>
  )
}

export default Ready
