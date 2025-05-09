import React from 'react';
import sell_1 from '../../../assets/sell_1.webp'
import sell_2 from '../../../assets/sell_2.webp'
import { CiMobile4 } from 'react-icons/ci';
import { CiStopwatch } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiHouseLineThin } from "react-icons/pi";

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
            <div className=' mt-10'>
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
            {/* card 3 */}
            <div className='relative mt-12  border rounded border-gray-300'>
                {/* card-1 */}
                <div className='flex items-center gap-5  px-3 py-5'>
                    <CiMobile4 className='text-5xl' />
                    <div className='text-sm'>Download the Bacola App to your phone</div>
                </div>
                {/* card-2 */}
                <div className='flex items-center gap-5 border-t border-gray-300 px-3 py-5 '>
                    <CiDeliveryTruck className='text-5xl' />
                    <div className='text-sm'>Track the Bacola App to your phone</div>
                </div>
                {/* card-3 */}
                <div className='flex items-center gap-5 border-t border-gray-300 px-3 py-5'>
                    <CiStopwatch className='text-5xl' />
                    <div className='text-sm'>Watch the Bacola App to your phone</div>
                </div>
                {/* card-4 */}
                <div className='flex items-center gap-5 border-t border-gray-300 px-3 py-5'>
                    <CiLocationOn className='text-5xl' />
                    <div className='text-sm'>Location the Bacola App to your phone</div>
                </div>
                {/* card-5 */}
                <div className='flex items-center gap-5 border-t border-gray-300 px-3 py-5'>
                    <PiHouseLineThin className='text-5xl' />
                    <div className='text-sm'>House the Bacola App to your phone</div>
                </div>
            </div>
        </div>
    );
};

export default LeftSell;