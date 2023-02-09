import React from 'react'
import { contact } from '../../data'
import group23 from '../../assets/group-23.png'
import group33 from '../../assets/group-33.png'
import group34 from '../../assets/group-34.png'
import FormData from '../form/Form'
const Connect = () => {
  return (
    <section className='relative bg-darkGreen py-12'>
      <img
        className='absolute top-12 left-0 w-16 md:w-20'
        src={group23}
        alt='name'
      />
      <img
        className='hidden md:flex absolute bottom-0 right-0 w-16 md:w-20'
        src={group33}
        alt='name'
      />
      <img
        className='flex md:hidden absolute bottom-0 right-0 w-16 md:w-20'
        src={group34}
        alt='name'
      />
      <div className='flex flex-col md:flex-row  justify-center md:justify-between mx-4 md:mx-24 md:space-x-8 lg:mx-32 md:pb-12 space-y-4 font-sans'>
        <div className='flex flex-col space-y-8'>
          <h2
            data-testid='text-header'
            className='text-5xl text-white font-bold text-center md:text-left'
          >
            Contact
          </h2>
          <h4 className='text-lightOrange font-bold text-xl text-center md:text-left'>
            Ask us about
          </h4>
          <div className='flex flex-col space-y-4 items-left justify-center mx-auto md:mx-0 px-4'>
            {contact.map((item) => {
              const { id, info, img } = item
              return (
                <div key={id} className='flex items-center space-x-4 '>
                  <img className='w-12' src={img} alt={info} />
                  <p className='text-white font-bold'>{info}</p>
                </div>
              )
            })}
          </div>
        </div>
        <FormData />
      </div>
    </section>
  )
}

export default Connect
