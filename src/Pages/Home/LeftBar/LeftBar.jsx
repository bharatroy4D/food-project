import React from 'react';
import {
    GiFruitBowl,
    GiMeat,
    GiCroissant,
    GiGlassCelebration,
    GiBread,
    GiFrozenOrb,
    GiFrenchFries,
    GiShoppingCart,
  } from 'react-icons/gi';
  
  const fruitsItems = [
    {
      id: 1,
      icon: <GiFruitBowl />,
      name: 'Fruits & Vegetables',
    },
    {
      id: 2,
      icon: <GiMeat />,
      name: 'Meats & Seafood',
    },
    {
      id: 3,
      icon: <GiCroissant />,
      name: 'Breakfast',
    },
    {
      id: 4,
      icon: <GiGlassCelebration />,
      name: 'Beverages',
    },
    {
      id: 5,
      icon: <GiBread />,
      name: 'Breads & Bakery',
    },
    {
      id: 6,
      icon: <GiFrozenOrb />,
      name: 'Frozen Foods',
    },
    {
      id: 7,
      icon: <GiFrenchFries />,
      name: 'Biscuits & Snacks',
    },
    {
      id: 8,
      icon: <GiShoppingCart />,
      name: 'Grocery & Staples',
    },
  ];
  

const LeftBar = () => {
    return (
        <div>
            <div className='hidden lg:block'>
                <div className='flex flex-col gap-5 p-4 border-gray-300 rounded shadow w-64 flex-shrink-0 border'>
                    {
                        fruitsItems.map(fruit => (
                            <div key={fruit.id} className='flex items-center gap-3  font-semibold'>
                                <p className='text-lg text-gray-400'>{fruit.icon}</p>
                                <p className='text-sm text-gray-600 hover:text-green-500'>{fruit.name}</p>
                            </div>
                        ))
                    }
                </div>
               <div className='flex flex-col gap-3  text-sm font-semibold text-gray-600 px-4 py-3 mt-2 border-gray-300 rounded shadow  border'>
                <p>value of the Day</p>
                <p>Top 100 Offers</p>
                <p>new Arrivals</p>
               </div>
            </div>
        </div>
    );
};

export default LeftBar;