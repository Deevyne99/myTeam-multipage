import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data'
import { BiX } from 'react-icons/bi'
const Sidebar = ({ handleToggle, sidebar }) => {
  return (
    <aside
      className={`md:hidden fixed top-0 right-0 h-[600px] z-20 transition bg-sidebar w-56 pt-28 pb-4 px-8 ease-in-out duration-300 ${
        sidebar ? 'translate-x-0' : 'translate-x-full'
      } `}
    >
      <button
        onClick={() => handleToggle()}
        className='absolute top-8 text-2xl text-white right-4'
      >
        <BiX />
      </button>
      <div className='flex space-y-8  flex-col  w-sm  justify-between'>
        <ul className='flex flex-col  space-y-8 text-white'>
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
            className='px-6 rounded-full py-2 border-[2px] border-white text-white'
            to={'/contact'}
          >
            contact us
          </Link>
        </li>
      </div>
    </aside>
  )
}
export default Sidebar
