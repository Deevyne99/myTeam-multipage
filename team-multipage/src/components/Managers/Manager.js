import React from 'react'
import { manageInfo } from '../../data'
import designImg from '../../assets/group-15.png'
const Manager = () => {
  return (
    <section className='bg-veryDarkGreen relative '>
      <div className='flex flex-col justify-center  lg:flex-row mx-4 md:mx-20 space-y-8 lg:justify-between py-24 lg:mx-32'>
        <div className='flex flex-col'>
          <div className='flex w-[30px] h-[2px] bg-lightOrange'></div>
          <h2 className='text-3xl max-w-xs md:max-w-sm lg:max-w-[300px] font-bold text-white mt-8'>
            Build & manage distributed teams like no one else.
          </h2>
        </div>
        <article className='max-w-lg  flex flex-col justify-center mx-auto md:mx-0'>
          {manageInfo.map((item) => {
            const { id, title, info, img } = item

            return (
              <div
                data-testid='data'
                className='flex  flex-col md:flex-row items-center space-x-4 md:space-y-8 space-y-4 lg:space-y-4 mt-8 lg:mt-4'
                key={id}
              >
                <img className='w-16' src={img} alt={title} />
                <article className='flex flex-col'>
                  <strong className='text-lightOrange text-center md:text-left'>
                    {title}
                  </strong>
                  <p className='mt-2 text-white text-sm text-center md:text-left'>
                    {info}
                  </p>
                </article>
              </div>
            )
          })}
          <img
            className='lg:hidden w-16  absolute right-0 top-0'
            src={designImg}
            alt=''
          />
          <img
            className='hidden lg:flex w-16  absolute right-0 lg:top lg:bottom-0'
            src={designImg}
            alt='design'
          />
        </article>
      </div>
    </section>
  )
}

export default Manager
