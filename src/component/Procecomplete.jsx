import React from 'react'
import { Link } from 'react-router-dom'

const Procecomplete = () => {
  return (
    <div className='bg-blue-400 h-full'>
        <h1 className='flex justify-center text-3xl underline pt-8'>You'r process successful complete</h1>
        <img src="./thum.jpg" className='flex justify-center items-center ml-96 pt-10 ' />
        <div className='flex justify-center items-center pt-8'>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to={'/StudentDashboard'}>Skip</Link>
            </span>
            </button>
        </div>
    </div>
  )
}

export default Procecomplete