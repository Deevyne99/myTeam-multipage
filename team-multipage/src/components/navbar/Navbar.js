import React from 'react'
import { data } from '../../data'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false)
  const handleToggle = () => {
    setSidebar((prev) => !prev)
  }
  return (
    <header className='relative bg-darkGreen'>
      <div
        className={`${sidebar ? 'fixed h-screen drop-shadow-2xl w-full ' : ''}`}
      ></div>
      <nav className='flex space-x-16 items-center mx-4 md:mx-20 lg:mx-32 bg-blue-100 px-2 py-8 justify-between'>
        <h2
          data-testid='header'
          className='text-2xl md:text-3xl text-white font-sans font-bold'
        >
          myteam
        </h2>
        <div className='hidden md:flex  w-full  justify-between'>
          <ul className='flex space-x-4 cursor-pointer text-white'>
            {data.map((links) => {
              const { url, id, name } = links
              return (
                <li key={id}>
                  <Link className='font-sans font-semibold' to={url}>
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
          <li
            className='
list-none'
          >
            <Link
              className='px-6 rounded-full font-semibold py-2 border-[2px] border-white text-white hover:bg-white hover:text-darkGreen'
              to={'/contact'}
            >
              contact us
            </Link>
          </li>
        </div>
        <button
          onClick={() => handleToggle()}
          className='flex md:hidden border-none cursor-pointer'
        >
          <FaBars className='text-white' />
        </button>
      </nav>
      {sidebar && <Sidebar handleToggle={handleToggle} sidebar={sidebar} />}
    </header>
  )
}

export default Navbar
