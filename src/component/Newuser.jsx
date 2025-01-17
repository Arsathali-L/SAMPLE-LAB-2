import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import  axios  from 'axios';
import { useFormik } from 'formik';

const Newuser = () => {
        const navigate = useNavigate();
        const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validate: (values) => {
          let error = {};
    
          if (!values.email) {
            error.email = "Please Enter the email";
          }
          if (!values.password){
            error.password = "please enter the correct password"
          }
    
          return error;
        },
        onSubmit: async (values) => {
          try {
            const resp = await axios.post("https://sample-backend-noqp.onrender.com/login", values);
            // const resp = await axios.post("http://localhost:3000/login", values);
            if (resp.status == 200) {
              window.localStorage.setItem("mytoken",resp.data.message)
              navigate("/Roonstep");
            }
          } catch (error) {
            alert(error.response.data.message);
          }
        },
      });
  return (
    <div className='bg-stone-50 h-screen'>
        <div className='flex justify-center items-center mt-8 text-3xl pt-8'>
            <h1 className='underline'>Log In </h1>
        </div>
        <form onSubmit={formik.handleSubmit}>
            <div className='w-6/12 bg-sky-200 h-96 ml-80 mt-8 rounded-lg ring-2 ring-blue-900 shadow-xl'>
                <div class="relative z-0 top-16 ml-32">
                    <input type="text" id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    class="block py-2.5 px-0 w-9/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Email</label>
                </div>
                <div class="relative z-0 ml-32 top-28">
                    <input type="password" id="password" 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    class="block py-2.5 px-0 w-9/12 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Password</label>
                </div>
                <div className='mt-44 flex justify-center items-center'>
                    <button 
                    type='submit'
                    value={"Log In"}
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Log In 
                    </span>
                    </button>
                </div>
                <div className='flex justify-center items-center pt-8'>
                    <p> create a registration complete <Link to={"/Register"}><span className='text-red-800'>"New User!"</span> </Link></p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Newuser