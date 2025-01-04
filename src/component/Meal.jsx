import React from 'react'
import { Link } from 'react-router-dom'

const Meal = () => {
  return (
    <div className='bg-emerald-200 h-full'>
        <div>
            <h1 className='text-4xl flex justify-center items-center pt-8 text-green-900 font-serif'>Meal For Student</h1>
        </div>
        <div>
            <h1 className='text-3xl flex justify-center items-center underline pt-8 text-red-800 font-bold'>"Food is common for every student!" </h1>
        </div>
        <div className='text-2xl flex justify-center items-center w-9/12 pt-8'>
            <h1 className='flex justify-center items-center text-justify ml-72 font-serif'>In our canteen is given below food menu is shuffle for every day .in the food menu created by our side management we create six-6 food menu for week days and the last day is some thing special for our student monday to saturday it cook in our menu the last day sunday is ask by each student what ever you want every sunday we ask every single student what ever they ask. that day our chef do it. asusual the global ate Break fast , Lunch , Diner    </h1>
        </div>
        <div className='flex justify-around pt-8'>
            <div>
                <h1 className='font-bold text-2xl underline'>Break Fast</h1>
                <li>dosa</li>
                <li>Idli sambar</li>
                <li>puri</li>
                <li>Khichdi</li>
                <li>Moong dal cheela</li>
                <li>French toast</li>
            </div>
            <div>
                <h1 className='font-bold text-2xl underline'>Lunch</h1>
                <li>Soya Chunks Biryani </li>
                <li>Corn Fried Rice</li>
                <li>Tawa Pulao Recipe</li>
                <li>Veg Noodles</li>
                <li>Sambar rice</li>
                <li>Briyani</li>
            </div>
            <div>
                <h1 className='font-bold text-2xl underline'>Dinner</h1>
                <li>Idle Sambar</li>
                <li>Chapati-Chana Masala</li>
                <li>Naan-Jeera Aloo</li>
                <li>Naan-Chicken Tikka Masala</li>
                <li>chicken fried rice</li>
                <li>Tomato Rice</li>

            </div>
        </div>
        <div>
            <h1 className='flex justify-center items-center text-4xl pt-8'> cost = $-350</h1>
        </div>
        <div className='flex justify-center items-center pt-8'>
            <button type="button" class=" text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> <Link to={'/CreditCardPayment3'}>Payment</Link></button>

        </div>
    </div>
  )
}

export default Meal