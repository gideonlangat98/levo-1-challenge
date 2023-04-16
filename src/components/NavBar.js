import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="border-solid border-2 border-pink-400 bg-gray-400 pb-4 pt-7 border-x-transparent">
      <div className='flex justify-evenly mx-10'>
        <div><h4 className='text-xl text-pink-600'>Counter APP</h4></div>
        <ul>
            <div>
                <li>
                    <Link className='text-white' to='/home'>{'Home'}</Link>
                </li>
            </div>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
