import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className='bg-teal-200 h-screen flex justify-center items-center '>
        <div className='bg-white h-3/4 w-2/5  ring-2 ring-gray-700 rounded-lg drop-shadow-lg '>
            <div className='flex justify-center items-center pt-8 font-bold underline'>
                <h1>HELLO VIEWER's</h1>
            </div>
            <div className='flex justify-center items-center pt-8 font-bold underline'>
                <h1>WELCOME TO MY = ARSH BOYS HOSTEL </h1>
            </div>
            <div className='flex justify-center items-center pt-8 font-bold underline'>
                <h1>CHOOSE YOUR STAGE</h1>
            </div>
            <div className='flex justify-center items-center pt-8'>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <Link to={"/register"}> NewUser's </Link>
                </span> 
                </button>
            </div>
            <div className='flex justify-center items-center pt-8'>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <Link to={"/Sign"}>SignUp</Link>
                </span>
                </button>
            </div>
            <div className='flex justify-center items-center pt-8'>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <Link to={"/Admin"}>Admin Login </Link>
                </span> 
                </button>
            </div>
            
        </div>
                      
    </div>
  )
}

export default Welcome