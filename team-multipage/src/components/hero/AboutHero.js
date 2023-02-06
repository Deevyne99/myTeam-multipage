import React from 'react'
import image from '../../assets/group-1.png'
import image2 from '../../assets/group-3.png'
import image3 from '../../assets/group-22.png'

const AboutHero = () => {
  return (
    <section className='relative bg-darkGreen py-8 '>
      <div className='flex flex-col text-center lg:text-left lg:flex-row mx-4 md:mx-20 space-y-4 lg:mx-32 lg:justify-between items-center pb-12  '>
        <div>
          <h2
            data-testid='intro'
            className=' text-5xl md:text-7xl font-bold text-white max-w-sm'
          >
            About
          </h2>
        </div>
        <article className='flex flex-col lg:space-y-8'>
          <div className='hidden lg:flex w-[30px] h-[2px] bg-lightOrange '></div>
          <p
            data-testid='data'
            className='max-w-md lg:max-w-lg text-white  leading-8 lg:leading-6  text-sm'
          >
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </article>
        <img
          className='hidden md:flex absolute right-0 bottom-0 w-12 md:w-20 '
          src={image2}
          alt='flyer'
        />
        <img
          className='flex md:hidden absolute right-0 bottom-0 w-16 md:w-20 '
          src={image3}
          alt='flyer'
        />
      </div>
    </section>
  )
}

export default AboutHero
