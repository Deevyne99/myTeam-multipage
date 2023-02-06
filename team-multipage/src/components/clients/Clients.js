import React from 'react'
import desktop from '../../assets/client.png'
import mobile from '../../assets/client-mobile.png'
import { client } from '../../data'
// import logo6 from '../../assets/group-24.png'

const Client = () => {
  return (
    <section className='relative flex flex-col bg-veryDarkGreen py-12'>
      <img
        className='hidden md:flex absolute top-0 left-0 '
        src={desktop}
        alt=''
      />
      <img
        className='flex md:hidden absolute w-14 top-0 left-0 '
        src={mobile}
        alt=''
      />
      <h2
        data-testid='clients'
        className='mx-auto text-3xl md:text-3xl font-bold text-white'
      >
        Some of our clients
      </h2>
      <div className='flex flex-col space-y-8 justify-center md:flex-row md:space-x-16  mx-auto items-baseline py-8 '>
        {client.map((item) => {
          const { id, name, img } = item
          return <img className='w-24 ' key={id} src={img} alt={name} />
        })}
      </div>
    </section>
  )
}
export default Client
