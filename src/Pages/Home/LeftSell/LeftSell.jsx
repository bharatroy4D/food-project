import React from 'react';
import sell_1 from '../../../assets/sell_1.webp'
import sell_2 from '../../../assets/sell_2.webp'

const LeftSell = () => {
    return (
        <div>
            {/* sell card one */}
            <div className='relative'>
                <div className='w-60 rounded shadow'>
                    <img src={sell_1} alt="" className='rounded' />
                    <div className='flex flex-col gap-2 absolute top-0 left-0 justify-center p-5'>
                        <p className='text-sm font-semibold text-white'>Bacola Natural Foods</p>
                        <p className='text-xl'>Special Organic</p>
                        <h1 className='text-2xl font-bold'>Roats Burger</h1>
                        <p className='text-xs '>only from</p>
                        <p className='text-3xl font-bold text-red-500'>$14.99</p>
                    </div>
                </div>
            </div>
            {/* sell card 2 */}
            <div className='relative mt-10'>
                <div className='w-60 rounded shadow'>
                    <img src={sell_2} alt="" className='rounded' />
                    <div className='flex flex-col gap-2 absolute top-0 left-0 justify-center p-5'>
                        <p className='text-sm font-semibold text-gray-500'>Best Bakery Products</p>
                        <p className='text-xl'>Fresh Products</p>
                        <h1 className='text-2xl font-bold'>Every hours</h1>
                        <p className='text-xs '>only from</p>
                        <p className='text-3xl font-bold text-red-500'>$24.99</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSell;