import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import FoodCard from '../FoodCard/FoodCard';
import care from '../../../assets/care.webp';
import container from '../../../assets/container.webp';
import discount_1 from '../../../assets/discount_1.webp'
import discount_2 from '../../../assets/discount_2.webp'

const RightSell = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    return (
        <div>
            {/*sell text content */}
            <div>
                <div className='flex justify-between items-start '>
                    {/* Left text content */}
                    <div className='space-y-1'>
                        <h1 className='text-xl font-medium uppercase'>new products</h1>
                        <p className='text-sm font-semibold text-gray-600'>
                            New products with updated stocks.
                        </p>
                    </div>

                    {/* Right button */}
                    <button className='flex items-center gap-1 border border-gray-400 rounded-full py-2 px-6 text-sm'>
                        View All <IoIosArrowRoundForward className='text-xl' />
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food} ></FoodCard>)
                }
            </div>
            {/* carefully banner */}
            <div className='bg-[#F8EFEA] flex justify-between items-center px-5 my-7 rounded'>
                <div>
                    <h3 className='text-gray-400'>Always Taking Care</h3>
                    <h1 className='text-xl text-gray-500 font-bold'>in store or online your health & safety is our top priority</h1>
                </div>
                <img src={care} alt="" className='h-36' />
            </div>
            {/* hot product demo */}
            <div className='flex justify-between items-start my-6'>
                {/* Left text content */}
                <div className='space-y-1'>
                    <h1 className='text-xl font-medium uppercase'>hot products for this week</h1>
                    <p className='text-sm font-semibold text-gray-600'>
                        Don't miss this opportunity at a special discount just for this week
                    </p>
                </div>

                {/* Right button */}
                <button className='flex items-center gap-1 border border-gray-400 rounded-full py-2 px-6 text-sm'>
                    View All <IoIosArrowRoundForward className='text-xl' />
                </button>
            </div>
            <div className='flex items-center gap-10 border border-gray-500 rounded p-10 '>
                <div className='relative'>
                    <img src={container} alt="" className='h-40' />
                    <div className='flex items-center justify-center absolute top-0 left-0 text-white text-xl font-medium bg-red-500 w-16 h-16 rounded-full'>
                        19%
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl font-bold text-red-500'>$4.55</p>
                    <h1 className='text-xl font-bold'>Chobani Complete Vanilla Greek Yogurt</h1>
                    <p className='text-xs text-gray-400'>1 kg <span className='text-xs text-green-600 font-semibold uppercase'>in stock</span></p>
                    <div className=' bg-gradient-to-r from-red-500 to-orange-400 h-3 w-full rounded-full'>

                    </div>
                    {/* countdown */}
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-4">
                        <div className="flex flex-col p-2 bg-gray-200 text-black">
                            <span className="countdown font-mono text-sm">
                                <span style={{ "--value": 15 }}>15</span>
                            </span>
                        </div>
                        <div className="flex flex-col p-2 bg-gray-200 text-black">
                            <span className="countdown font-mono text-sm">
                                <span style={{ "--value": 10 }}>10</span>
                            </span>
                        </div>
                        <div className="flex flex-col p-2 bg-gray-200 text-black">
                            <span className="countdown font-mono text-sm">
                                <span style={{ "--value": 24 }}>24</span>
                            </span>
                        </div>
                        <div className="flex flex-col p-2 bg-gray-200 text-black">
                            <span className="countdown font-mono text-sm">
                                <span style={{ "--value": 59 }}>59</span>
                            </span>
                        </div>
                    </div>
                </div>
              
            </div>
              {/* discount demo card */}
                <div className='flex gap-5 mt-6'>
                    {/* card-1 */}
                    <div className='relative overflow-hidden rounded-lg'>
                        {/* Slider Image */}
                        <img src={discount_1} alt="slider" className='' />

                        {/* Overlay Text Content */}
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-2 px-8  text-black'>
                            <div className='flex items-center'>
                                <p className='text-green-600 text-sm font-semibold uppercase'>weekend discount 40%</p>
                            </div>
                            <h1 className='text-xl md:text-2xl  font-medium max-w-md'>Legumes & Cereals</h1>
                            <p className='text-gray-500'>Feed your family the best</p>
                            <div>
                                <p className='text-lg'>from <span className='text-xl text-red-500 font-medium'>$7.99</span></p>
                            </div>
                            <button className='flex items-center gap-2 text-white font-semibold bg-gray-500 rounded-full px-5 py-2 w-fit'>
                                Shop Now <IoIosArrowRoundForward className='text-sm' />
                            </button>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className='relative overflow-hidden rounded-lg'>
                        {/* Slider Image */}
                        <img src={discount_2} alt="slider" className='' />

                        {/* Overlay Text Content */}
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-2 px-8  text-black'>
                            <div className='flex items-center '>
                                <p className='text-green-600 text-sm font-semibold uppercase'>weekend discount 40%</p>
                            </div>
                            <h1 className='text-2xl md:text-2xl  font-medium max-w-md'>Legumes & Cereals</h1>
                            <p className='text-gray-500'>Feed your family the best</p>
                            <div>
                                <p className='text-lg'>from <span className='text-xl text-red-500 font-medium'>$7.99</span></p>
                            </div>
                            <button className='flex items-center gap-2 text-white font-semibold bg-gray-500 rounded-full px-5 py-2 w-fit'>
                                Shop Now <IoIosArrowRoundForward className='text-xl' />
                            </button>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default RightSell;
