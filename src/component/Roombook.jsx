import React from 'react'
import { Link } from 'react-router-dom'

const Roombook = () => {
  return (
    <div className='bg-orange-200 h-full '>
        <div>
            <h1 className='text-3xl flex justify-center items-center pt-8 underline '>Room Menu</h1>
        </div>
        <div className='flex'>
            <div className='pl-8 pt-8 '>
                <img src="/room1.jpg" className='rounded-xl ring-2 ring-orange-600' />
                <button class=" mt-8 ml-56 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Link to={'/CreditCardPayment1'}>Payment</Link>
                    </span>
                    </button>
            </div>
            <div>
            <div className=''>
                <div className='pt-10 flex justify-center items-center'>
                    <h1 className='pl-44 text-2xl'>Room Detail:-</h1>
                </div>
                <div className='flex justify-center items-center pt-8 pl-72'>
                    <ul className=''>
                        <li className='list-disc'>Plug socket</li>
                        <li className='list-disc'>Free Wifi</li>
                        <li className='list-disc'>Cleaning services</li>
                        <li className='list-disc'>Fan</li>
                        <li className='list-disc'>Each bath and wash room  </li>
                        <li className='list-disc'>Business class</li>
                        <li className='list-disc'>Total stay-2 in room</li>
                        <li className='pt-6 text-2xl font-bold'>$-400 per month</li>
                    </ul>
                </div>
            </div>

        </div>
        </div>
        <div className='flex'>
            <div className='pl-8 pt-8 '>
                <img src="/room2.webp" alt="" className='rounded-xl ring-2 ring-orange-600'/>
                <div>
                    <button class=" mt-8 ml-56 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Link to={'/CreditCardPayment2'}>Payment</Link>
                    </span>
                    </button>
                </div>
            </div>
            <div>
                <div className='pt-8 flex justify-center items-center'>
                    <h1 className='pl-44 text-2xl'>Room Detail:-</h1>
                </div>
                <div className='flex justify-center items-center pt-8 pl-72'>
                    <ul className=''>
                        <li className='list-disc'>Plug socket</li>
                        <li className='list-disc'>Free Wifi</li>
                        <li className='list-disc'>Cleaning services</li>
                        <li className='list-disc'>Fan</li>
                        <li className='list-disc'>4 Bath and wash room</li>
                        <li className='list-disc'>Budget frindly</li>
                        <li className='list-disc'>Total stay-24</li>
                        <li className='pt-6 text-2xl font-bold'>$-300 per month</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Roombook