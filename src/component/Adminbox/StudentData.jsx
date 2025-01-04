import React from 'react';


const StudentData = ({data}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">Submitted Data</h2>
      

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    student name
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    number
                </th>
                <th scope="col" class="px-6 py-3">
                    payment
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Arsathali.L
                </th>
                <td class="px-6 py-4">
                    arsath@gmail.com
                </td>
                <td class="px-6 py-4">
                    9363225477
                </td>
                <td class="px-6 py-4">
                    paid
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Dheena
                </th>
                <td class="px-6 py-4">
                    Dheena@gmail.com
                </td>
                <td class="px-6 py-4">
                    9994223686
                </td>
                <td class="px-6 py-4">
                    PAID
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Siva.M
                </th>
                <td class="px-6 py-4">
                    siva@gmail.com
                </td>
                <td class="px-6 py-4">
                    9543983319                </td>
                <td class="px-6 py-4">
                    PAID
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  );
};

export default StudentData;