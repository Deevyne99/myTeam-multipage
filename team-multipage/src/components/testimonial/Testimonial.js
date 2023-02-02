import React from 'react'
import { testimonies } from '../../data'
import qoute from '../../assets/quote-1.png'
import design from '../../assets/group-5.png'
import design2 from '../../assets/group-16.svg'
const Testimonial = () => {
  return (
    <section className='bg-green relative'>
      <img className='absolute top-0 left-0 w-20' src={design} alt='design' />
      <img
        className='absolute bottom-0 right-0 w-36'
        src={design2}
        alt='design'
      />
      <div className='px-4 py-20' data-testid='text'>
        <h2 className='text-3xl text-white font-bold text-center mx-auto max-w-xl'>
          Delivering real results for top companies. Some of our
          <span className='text-veryLight'> success stories.</span>
        </h2>
        <article className='flex flex-col lg:flex-row mt-12 items-center space-y-12 space-8 mx-auto px-4 lg:space-x-12 justify-center lg:mx-20 lg:justify-between lg:items-baseline'>
          {testimonies.map((item) => {
            const { id, name, profession, img, testimony } = item
            return (
              <div
                key={id}
                data-testid='testimony'
                className='flex flex-col relative max-w-sm  '
              >
                <img className='mb-[-24px] mx-auto ' src={qoute} alt='' />
                {console.log(testimony)}
                <p className='z-10 text-center text-white'>{testimony}</p>
                <strong className='text-center mt-4 text-veryLight '>
                  {name}
                </strong>
                <p className='text-center mt-2 text-white'>{profession}</p>
                <img className='w-16 mx-auto mt-6' src={img} alt={name} />
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Testimonial
