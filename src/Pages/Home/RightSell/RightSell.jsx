import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import FoodCard from '../FoodCard/FoodCard';
import care from '../../../assets/care.webp';
import container from '../../../assets/container.webp';
import discount_1 from '../../../assets/discount_1.webp';
import discount_2 from '../../../assets/discount_2.webp';

const RightSell = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, []);

    return (
        <div className='w-screen'>
            {/* Sell text content */}
            <div>
                <div className='flex justify-between items-start flex-wrap gap-4'>
                    <div className='space-y-1'>
                        <h1 className='text-xl font-medium uppercase poppins'>Best Sellers</h1>
                        <p className='hidden lg:block text-sm font-semibold text-gray-600'>
                            Do not miss the current offers until the end of March..
                        </p>
                    </div>
                    <button className='hidden lg:inline-flex items-center gap-1 border border-gray-400 rounded-full py-2 px-6 text-sm'>
                        View All <IoIosArrowRoundForward className='text-xl' />
                    </button>
                </div>
            </div>
            {/* Best sellers */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                {foods.slice(0, 4).map(food => <FoodCard key={food.id} food={food} />)}
            </div>

            {/* Carefully banner */}
            <div className='bg-[#F8EFEA] flex flex-col md:flex-row justify-between items-center px-6 py-4 my-7 rounded'>
                <div className='mb-4 md:mb-0'>
                    <h3 className='text-gray-400'>Always Taking Care</h3>
                    <h1 className='text-xl text-gray-500 font-bold'>in store or online your health & safety is our top priority</h1>
                </div>
                <img src={care} alt="Care" className='h-36' />
            </div>

            {/* Hot product demo */}
            <div className='flex justify-between items-start flex-wrap gap-4 my-6 border-t pt-4 lg:border-none lg:pt'>
                <div className='space-y-1'>
                    <h1 className='lg:text-xl font-medium uppercase'>hot products for this week</h1>
                    <p className='hidden lg:block text-sm font-semibold text-gray-600'>
                        Don't miss this opportunity at a special discount just for this week
                    </p>
                </div>
                <button className='hidden lg:inline-flex items-center gap-1 border border-gray-400 rounded-full py-2 px-6 text-sm'>
                    View All <IoIosArrowRoundForward className='text-xl' />
                </button>
            </div>

            <div className='flex flex-col lg:flex-row items-start gap-10 border border-gray-300 rounded p-6'>
                <div className='relative'>
                    <img src={container} alt="Product Container" className='h-40' />
                    <div className='flex items-center justify-center absolute top-0 left-0 text-white text-xl font-medium bg-red-500 w-16 h-16 rounded-full'>
                        19%
                    </div>
                </div>
                <div className='flex flex-col gap-2 flex-1'>
                    <p className='text-xl font-bold text-red-500'>$4.55</p>
                    <h1 className='text-xl font-bold'>Chobani Complete Vanilla Greek Yogurt</h1>
                    <p className='text-xs text-gray-400'>1 kg <span className='text-xs text-green-600 font-semibold uppercase'>in stock</span></p>
                    <div className='bg-gradient-to-r from-red-500 to-orange-400 h-3 w-full rounded-full'></div>

                    <div className='grid grid-flow-col gap-4 text-center auto-cols-max mt-4'>
                        {[15, 10, 24, 59].map((val, idx) => (
                            <div key={idx} className='flex flex-col p-2 bg-gray-200 text-black'>
                                <span className='countdown font-mono text-sm'>
                                    <span style={{ '--value': val }}>{val}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* New product */}
            <div className='py-10'>
                {/* New product text content */}
                <div>
                    <div className='flex justify-between items-start flex-wrap gap-4'>
                        <div className='space-y-1'>
                            <h1 className='text-xl font-medium uppercase poppins'>New Products</h1>
                            <p className='hidden lg:block text-sm font-semibold text-gray-600'>
                                Do not miss the current offers until the end of March..
                            </p>
                        </div>
                        <button className='hidden lg:inline-flex items-center gap-1 border border-gray-400 rounded-full py-2 px-6 text-sm'>
                            View All <IoIosArrowRoundForward className='text-xl' />
                        </button>
                    </div>
                </div>
                {/* Best sellers */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
                    {foods.map(food => <FoodCard key={food.id} food={food} />)}
                </div>
            </div>


            {/* Discount demo cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mt-6'>
                {[{ img: discount_1, title: "Legumes & Cereals" }, { img: discount_2, title: "Dairy & Eggs" }].map((item, idx) => (
                    <div
                        key={idx}
                        className='relative overflow-hidden rounded-xl shadow transition-transform duration-300 hover:scale-[1.02]'
                    >
                        <img
                            src={item.img}
                            alt="slider"
                            className='w-full h-56 sm:h-64 md:h-44 lg:h-56 object-cover'
                        />
                        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-2 px-4 sm:px-6 lg:px-8 text-black bg-gradient-to-t from-white/80 via-white/60 to-transparent backdrop-blur-[2px]'>
                            <p className='text-xs sm:text-sm text-green-600 font-semibold uppercase'>Weekend Discount 40%</p>
                            <h1 className='text-lg sm:text-xl md:text-2xl font-semibold'>{item.title}</h1>
                            <p className='text-xs sm:text-sm text-gray-600'>Feed your family the best</p>
                            <p className='text-sm sm:text-base'>
                                from <span className='text-lg sm:text-xl text-red-500 font-bold'>$7.99</span>
                            </p>
                            <button className='flex items-center text-xs sm:text-sm gap-2 text-white font-semibold bg-gray-700 hover:bg-gray-900 transition-colors rounded-full px-4 sm:px-5 py-1.5 sm:py-2 w-fit mt-2'>
                                Shop Now <IoIosArrowRoundForward className='text-base' />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default RightSell;
