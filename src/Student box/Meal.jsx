import React from 'react';

const Meal = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Meal Information</h1>
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
    </div>
  );
};

export default Meal;
