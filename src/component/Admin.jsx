// import { useState } from "react"
import React ,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom';

const Admin = () => {
    const navigate = useNavigate();
    const allowedEmail = 'adminuser@gmail.com'; // The only email ID allowed
    const allowedPassword = 'admin'; // The only password allowed
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        
        e.preventDefault();

        if (email === allowedEmail && password === allowedPassword) {
            setMessage('Login successful!');
            navigate("/AdminDashboard");
            // Add logic to navigate or load the next page
        } else {
            setMessage('Access denied. Invalid email or password.');

        }
    };
  return (
    <div className='bg-stone-50 h-screen'>
        <div className='flex justify-center items-center mt-8'>
            <h1 className='text-3xl underline'>Admin Sign In </h1>
        </div>
        <form onSubmit={handleLogin}>
            <div className='w-6/12 bg-sky-200 h-96 ml-80 mt-8 rounded-lg ring-2 ring-blue-900 shadow-xl'>
                <div class="relative z-0 top-16 ml-32">
                    <input type="text" id="email"
                     value={email} onChange={(e) => setEmail(e.target.value)} required 
                     class="block py-2.5 px-0 w-9/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_standard" class="absolute text-sm text-blue-950 dark:text-blue-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter your Email</label>
                </div>
                <div class="relative z-0 ml-32 top-28">
                    <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required class="block py-2.5 px-0 w-9/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label for="floating_standard" class="absolute text-sm text-blue-950 dark:text-blue-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter your Password</label>
                </div>
                
                <div className='mt-44 ml-64'>
                    <button type='submit' class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Login
                    </span>
                    </button>
                </div>
                
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
            
        </form>
            
        

    </div>
  )
}

export default Admin