import React from 'react';

const RoomDetail = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 underline ml-24">Room Information</h1>
      <div>
        <div>
        <div className='pt-8 flex justify-center items-center'>
                    <h1 className=' text-2xl'>Room Detail:-</h1>
                </div>
                <div className='flex justify-center items-center pt-8 '>
                    <ul className=''>
                        <li className='list-disc'>Plug socket</li>
                        <li className='list-disc'>Free Wifi</li>
                        <li className='list-disc'>Cleaning services</li>
                        <li className='list-disc'>Fan</li>
                        <li className='list-disc'>4 Bath and wash room</li>
                        <li className='list-disc'>Budget frindly</li>
                        <li className='list-disc'>Total stay-24</li>
                        {/* <li className='pt-6 text-2xl font-bold'>$-300 per month</li> */}
                    </ul>
                </div>
        </div>
        <div>
        <div className='pt-8 flex justify-center items-center'>
                    <h1 className=' text-2xl'>Room Detail:-</h1>
                </div>
                <div className='flex justify-center items-center pt-8 '>
                    <ul className=''>
                        <li className='list-disc'>Plug socket</li>
                        <li className='list-disc'>Free Wifi</li>
                        <li className='list-disc'>Cleaning services</li>
                        <li className='list-disc'>Fan</li>
                        <li className='list-disc'>Each bath and wash room  </li>
                        <li className='list-disc'>Business class</li>
                        <li className='list-disc'>Total stay-2 in room</li>
                        {/* <li className='pt-6 text-2xl font-bold'>$-400 per month</li> */}
                    </ul>
                </div>
        </div>
      </div>
      
    </div>
  );
};

export default RoomDetail;
