import React, { useState } from 'react'
import { data } from '../../data'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  return (
    <header className='bg-darkGreen'>
      <nav className='flex space-x-16 items-center mx-4 md:mx-20 lg:mx-32 bg-blue-100 px-2 py-8 justify-between'>
        <h2
          data-testid='header'
          className='text-2xl md:text-3xl text-white font-bold'
        >
          myteam
        </h2>
        <div className='hidden md:flex  w-full  justify-between'>
          <ul className='flex space-x-4  text-white'>
            {data.map((links) => {
              const { url, id, name } = links
              return (
                <li key={id}>
                  <Link to={url}>{name}</Link>
                </li>
              )
            })}
          </ul>
          <li
            className='
list-none'
          >
            <Link
              className='px-6 rounded-full py-2 border-[2px] border-white text-white'
              to={'/contact'}
            >
              contact us
            </Link>
          </li>
        </div>
        <button className='flex md:hidden border-none'>
          <FaBars className='text-white' />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
