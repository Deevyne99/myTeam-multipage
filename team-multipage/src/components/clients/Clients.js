import React from 'react'

import { client } from '../../data'
// import logo6 from '../../assets/group-24.png'

const Client = () => {
  return (
    <section className='flex flex-col bg-veryDarkGreen py-12'>
      <h2 className='mx-auto text-3xl font-bold text-white'>
        Some of our clients
      </h2>
      <div className='flex space-x-16  mx-auto items-center py-8 '>
        {client.map((item) => {
          const { id, name, img } = item
          return <img className='w-24 ' key={id} src={img} alt={name} />
        })}
      </div>
    </section>
  )
}
export default Client
