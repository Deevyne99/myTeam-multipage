import React from 'react'
import Card from '../card/Card'
import { directors } from '../../data'
import group23 from '../../assets/group-23.png'
import group5 from '../../assets/group-5.png'
import mobile from '../../assets/group-mobile.png'
const Director = () => {
  return (
    <section className='relative flex flex-col bg-green py-12'>
      <div className='flex flex-col  md:mx-24 py-8 px-4'>
        <img
          className='hidden md:flex absolute top-0 left-0 w-16'
          src={group23}
          alt=''
        />
        <img
          className='flex md:hidden absolute top-0 left-0 w-20'
          src={mobile}
          alt=''
        />
        <img className='absolute bottom-0 right-0 w-20' src={group5} alt='' />
        <h2
          data-testid='meet'
          className='mx-auto text-3xl font-bold text-white font-sans'
        >
          Meet the directors
        </h2>
        <div className='flex justify-center space-x-4 items-baseline flex-wrap w-full space-y-16'>
          {directors.map((item) => {
            return <Card key={item.id} {...item} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Director
