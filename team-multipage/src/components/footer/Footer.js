import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data'
import { FaFacebookSquare, FaTwitter, FaPinterest } from 'react-icons/fa'
const Footer = () => {
  return (
    <section className='bg-footerColor'>
      <div className='flex flex-col md:flex-row mx-4 items-center lg:items-baseline md:mx-8 lg:mx-32 justify-between py-8 space-y-4'>
        <div className='flex flex-col md:flex-row  md:space-x-24 items-baseline '>
          <div className='flex flex-col space-y-4 lg:space-y-4 md:space-y-10'>
            <h2 data-testid='logo' className='text-3xl font-bold text-white'>
              myteam
            </h2>
            <div>
              <ul className='flex mb-4 space-x-4  text-white '>
                {data.map((links) => {
                  const { url, id, name } = links
                  return (
                    <li key={id}>
                      <Link to={url}>{name}</Link>
                    </li>
                  )
                })}
              </ul>
              <div className='hidden md:flex  mt-8 space-x-4 ml-auto text-white'>
                <FaFacebookSquare />
                <FaPinterest />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className=' md:hidden lg:flex text-xs flex flex-col space-y-[4px] text-center md:text-left'>
            <p className='text-white text-opacity-75'>987 Hillcrest Lane</p>
            <p className='text-white text-opacity-75'>Irvine, CA</p>
            <p className='text-white text-opacity-75'>California 92714</p>
            <p className='text-white text-opacity-75'>Call Us : 949-833-7432</p>
          </div>
        </div>
        <div className=' flex flex-col  space-y-4 lg:space-y-16 text-white text-opacity-75'>
          <div className='flex md:hidden lg:flex space-x-4 mx-auto lg:mx-0 lg:ml-auto text-white'>
            <FaFacebookSquare />
            <FaPinterest />
            <FaTwitter />
          </div>
          <div className='text-xs hidden md:flex lg:hidden flex-col space-y-[4px]'>
            <p className='text-white text-opacity-75'>987 Hillcrest Lane</p>
            <p className='text-white text-opacity-75'>Irvine, CA</p>
            <p className='text-white text-opacity-75'>California 92714</p>
            <p className='text-white text-opacity-75'>Call Us : 949-833-7432</p>
          </div>
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
