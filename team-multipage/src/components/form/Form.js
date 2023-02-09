import React from 'react'

const FormData = () => {
  return (
    <section className='bg-darkGreen'>
      <div className='flex flex-col mx-auto max-w-md md:w-80 lg:w-96 bg-darkGreen space-y-4 px-4'>
        <input
          type='text'
          placeholder='name'
          className='bg-darkGreen w-92 border-b border-b-1 border-white border-opacity-75 py-2 capitalize font-sans placeholder-white placeholder-opacity-75 text-white outline-none'
        />
        <input
          type='text'
          placeholder='email address'
          className='bg-darkGreen w-92 border-b border-b-1 border-white font-sans border-opacity-75 py-2 capitalize placeholder-white placeholder-opacity-75 text-white outline-none'
        />
        <input
          type='text'
          placeholder='company name'
          className='bg-darkGreen font-sans w-92 border-b border-b-1 border-white border-opacity-75 py-2 capitalize placeholder-white placeholder-opacity-75 text-white outline-none'
        />
        <input
          type='text'
          placeholder='title'
          className='bg-darkGreen w-92 font-sans border-b border-b-1 border-white border-opacity-75 py-2 capitalize placeholder-white placeholder-opacity-75 text-white outline-none'
        />
        <textarea
          className='bg-darkGreen border-b border-white border-opacity-75 capitalize placeholder-white placeholder-opacity-75 text-white font-sans outline-none'
          name=''
          id=''
          cols='5'
          rows='3'
          placeholder='message'
        ></textarea>
        <button className='px-4 py-2 bg-white w-24 rounded-full font-bold text-darkGreen'>
          submit
        </button>
      </div>
    </section>
  )
}

export default FormData
