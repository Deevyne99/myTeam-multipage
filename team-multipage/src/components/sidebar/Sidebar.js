import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data'
import { BiX } from 'react-icons/bi'
import group44 from '../../assets/group-44.png'
const Sidebar = ({ handleToggle, sidebar }) => {
  return (
    <aside
      className={`md:hidden absolute top-0 right-0 h-[580px] z-20 transition bg-sidebar w-56 pt-28 pb-4 px-8  duration-500 drop-shadow-2xl ${
        sidebar ? 'w-56' : 'w-0'
      } `}
    >
      <img className='absolute bottom-0 right-0 w-16' src={group44} alt='' />

      <button
        onClick={() => handleToggle()}
        className='absolute top-8 cursor-pointer text-2xl text-white right-4'
      >
        <BiX />
      </button>
      <div className='flex space-y-8  flex-col  w-sm  justify-between'>
        <ul className='flex flex-col  space-y-8 text-white cursor-pointer font-sans font-semibold'>
          {data.map((links) => {
            const { url, id, name } = links
            return (
              <li key={id}>
                <Link onClick={() => handleToggle()} to={url}>
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
            className='px-6 rounded-full py-2 border-[2px] border-white text-white hover:text-darkGreen hover:bg-white font-semibold'
            to={'/contact'}
            onClick={() => handleToggle()}
          >
            contact us
          </Link>
        </li>
      </div>
    </aside>
  )
}
export default Sidebar
