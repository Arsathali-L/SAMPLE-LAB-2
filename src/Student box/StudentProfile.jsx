import React from 'react';

const StudentProfile = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ml-16">Student Profile</h1>
      <p className='ml-16'>Here is the student profile Data</p>
      <div className='flex justify-center pt-8'>
      
        <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Student Email</time>
                
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">arsath@gmail.com</p>
         
          
            </li>
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mobile number</time>
                
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">9363225477</p>
            </li>
            <li class=" mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Studentname Name</time>
                
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Tony stark</p>
            </li>
            <li class="ms-4 mb-10">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Role</time>
                
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Guest</p>
            </li>
            <li class="ms-4 mb-10">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Emergency Number</time>
                
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Father: 9994223686</p>
            </li>
        </ol>
      </div>
    </div>
  );
};

export default StudentProfile;
