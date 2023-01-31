import React from 'react'
import image from '../../assets/group-1.png'
import image2 from '../../assets/group-2.svg'

const HomeHero = () => {
  return (
    <section className='bg-darkGreen  '>
      <div className='flex flex-col text-center lg:text-left lg:flex-row mx-4 md:mx-20 lg:mx-32 lg:justify-between  items-center lg:h-[387px] '>
        <div className='lg:mb-16 '>
          <img
            className='hidden lg:flex absolute  left-0 w-20'
            src={image}
            alt=''
          />
          <h2
            data-testid='intro'
            className=' text-5xl md:text-7xl font-bold text-white max-w-sm'
          >
            Find the best <span className='text-lightOrange'>talent</span>
          </h2>
        </div>
        <article>
          <div className='hidden lg:flex w-[30px] h-[2px] bg-lightGreen'></div>
          <p className='max-w-sm lg:max-w-xs text-white my-8 md:my-12 xl:my-16 text-sm'>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </article>
        <img
          className='relative mx-auto mt-[52px] lg:absolute md:right lg:right-24 lg:mt-80 lg:insect-y-88 w-60'
          src={image2}
          alt='flyer'
        />
      </div>
    </section>
  )
}

export default HomeHero
