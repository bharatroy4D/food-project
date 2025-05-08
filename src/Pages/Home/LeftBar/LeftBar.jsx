import React from 'react';
import { CiApple, } from 'react-icons/ci';
const fruitsItems = [

    {
        id: 1,
        icon: <CiApple />,
        name: 'Fruits & Vegetables'
    },
    {
        id: 2,
        icon: <CiApple />,
        name: 'Meats & Seafood'
    },
    {
        id: 3,
        icon: <CiApple />,
        name: 'Breakfast'
    },
    {
        id: 4,
        icon: <CiApple />,
        name: 'Beverages'
    },
    {
        id: 5,
        icon: <CiApple />,
        name: 'Brreads & Bakery'
    },
    {
        id: 6,
        icon: <CiApple />,
        name: 'Frozen Foods'
    },
    {
        id: 7,
        icon: <CiApple />,
        name: 'Biscuits & Snacks'
    },
    {
        id: 8,
        icon: <CiApple />,
        name: 'Grocery & Staples'
    },

]

const LeftBar = () => {
    return (
        <div>
            <div>
                <div className='flex flex-col gap-5 p-6 border border-gray-300 rounded shadow-md w-[25%]'>
                    {
                        fruitsItems.map(fruit => (
                            <div className='flex items-center gap-3  font-semibold'>
                                <p className='text-2xl'>{fruit.icon}</p>
                                <p>{fruit.name}</p>
                            </div>
                        ))
                    }
                </div>
               
            </div>
        </div>
    );
};

export default LeftBar;