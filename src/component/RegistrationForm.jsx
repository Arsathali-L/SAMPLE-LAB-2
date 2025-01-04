import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
const RegistrationForm  = () => {
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        number:"",
        date:"",
        state:"",
        district:"",
      },
      validate: (values) => {
        let error = {};
  
        if (!values.username) {
          error.username = "Please enter the username";
        }
  
        if (!values.email) {
          error.email = "Please enter the email";
        }
  
        if (!values.password || values.password.length < 3) {
          error.password = "Please enter the valid password";
        }
  
        return error;
      },
      onSubmit: async (values) => {
        try {
          // await axios.post("http://localhost:3000/register", values);
          await axios.post("https://sample-backend-noqp.onrender.com/",values);
          navigate('/Newuser');
        } catch (error) {
          console.log(error);
        }
      },
    });


    
    return (
        <div className='bg-orange-100 h-full '>
            <div className='flex justify-center items-center text-4xl pt-8 pb-8'>
                <h1>Fill your Detail!</h1>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className='bg-stone-100 w-2/3 max-h-fit ml-48 ring-2 ring-yellow-950 pt-8'>
                    <div class="relative z-0 ml-48 scroll-mt-8 gap-8  ">
                        <input type="text" id="username"
                        value={formik.values.username}
                        required
                        onChange={formik.handleChange}
                        class="block py-2.5 px-0 w-8/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">User Name</label>
                        <span>{formik.errors.username}</span>
                    </div>
                    <div class="relative z-0 ml-48  mt-6 ">
                        <input type="date" id="date" 
                        value={formik.values.date}
                        required
                        onChange={formik.handleChange}
                        class="block py-2.5 px-0 w-8/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Date of Birth</label>
                    </div>
                    <div class="relative z-0 ml-48  mt-6">
                        <input type="email" id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        class="block py-2.5 px-0 w-8/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Email</label>
                        <span>{formik.errors.password}</span>
                    </div>
                    <div class="relative z-0 ml-48 mt-6">
                        <input type="password" id="password" 
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        class="block py-2.5 px-0 w-8/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Password</label>
                        <span>{formik.errors.password}</span>
                    </div>
                    <div class="relative z-0 w-full mb-5 group ml-48  mt-6">
                        <input type="number" name="number" id="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        class="block py-2.5 px-0 w-8/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group ml-48  mt-6">
                        <input type="number" min="10" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-8/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div class="relative z-0 ml-48  mt-6">
                        <input type="text" id="state" 
                        value={formik.values.state}
                        required
                        onChange={formik.handleChange}
                        class="block py-2.5 px-0 w-8/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter State</label>
                    </div>
                    <div class="relative z-0 ml-48  mt-6">
                        <input type="text" id="district" 
                        value={formik.values.district}
                        required
                        onChange={formik.handleChange}
                        class="block py-2.5 px-0 w-8/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Distric</label>
                    </div>
                    <div className='flex justify-center items-center mt-8'>
                        <button type='submit' value={"Register"} class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                {/* <Link to={"/Newuser"}>Register</Link> */}
                                Register
                            </span>
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default RegistrationForm