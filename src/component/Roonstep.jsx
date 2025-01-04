import React from 'react'
import { Link } from 'react-router-dom'

const Roonstep = () => {
  return (
    <div className='bg-slate-500 h-full'>
        <div className='flex justify-center items-center pt-8'>
            <h1 className='text-3xl font-bold underline' >Hello my dear friend follow the below steps !</h1>
        </div>
        <div className='flex justify-center item-center pt-8 w-2/4 text-2xl text-justify ml-80'>
            <p className='flex justify-center items-center'>Our hostel is not just a place to stay; it's a nurturing community designed especially for students who find themselves far from their homes. Our mission is to make this new chapter of your life as comfortable and enriching as possible.</p>
        </div>
        <div>
            <h1 className='text-4xl flex justify-center pt-8 underline'>Room registration step</h1>
        </div>
        <div>
            <h1 className='flex justify-center items-center text-2xl font-bold pt-6'>Step:1 = Register:-</h1>
        </div>
        <div>
            <p className='flex justify-center items-center text-1xl pt-4'>"Create an account and login to our Hostel Hub portal"</p>
        </div>
        <div>
            <h1 className='flex justify-center items-center text-2xl font-bold pt-6'>Step 2 = Choose a room:-</h1>
        </div>
        <div>
            <p className='flex justify-center items-center text-1xl pt-4'>"Browse through all our available rooms and pick one that suits you"</p>
        </div>
        <div>
            <h1 className='flex justify-center items-center text-2xl font-bold pt-6'>Step:3 = Make payment:-</h1>
        </div>
        <div>
            <p className='flex justify-center items-center text-1xl pt-4'>"Pay the rent along with a refundable safety deposit fee"</p>
        </div>
        <div>
            <h1 className='flex justify-center items-center text-2xl font-bold pt-6'>Step:4 = Enjoy your stay:-</h1>
        </div>
        <div>
            <p className='flex justify-center items-center text-1xl pt-4'>"Go to your selected branch and our receptionist will guide you to your room"</p>
        </div>
        <div className='flex justify-center pt-8'>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <Link to={'/Roombook'}>BookRoom Click ME! </Link>
            </span>
            </button>
        </div>
    </div>
  )
}

export default Roonstep