import React from 'react'
import { contact } from '../../data'
import group23 from '../../assets/group-23.png'
const Connect = () => {
  return (
    <section className='relative bg-darkGreen py-12'>
      <img className='absolute top-12 left-0 w-20' src={group23} alt='name' />
      <div className='flex mx-32 pb-4'>
        <div className='flex flex-col space-y-8'>
          <h2
            data-testid='text-header'
            className='text-5xl text-white font-bold'
          >
            Contact
          </h2>
          <h4 className='text-lightOrange font-bold text-xl'>Ask us about</h4>
          <div className='flex flex-col space-y-4'>
            {contact.map((item) => {
              const { id, info, img } = item
              return (
                <div key={id} className='flex items-center space-x-4 '>
                  <img className='w-12' src={img} alt={info} />
                  <p className='text-white'>{info}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect
