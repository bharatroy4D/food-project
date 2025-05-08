import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from 'react-icons/io';
import FoodCard from '../FoodCard/FoodCard';

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
                        <h1 className='text-xl font-semibold uppercase'>best sellers</h1>
                        <p className='text-sm font-semibold text-gray-500'>
                            New products with updated stocks.
                        </p>
                    </div>

                    {/* Right button */}
                    <button className='flex items-center gap-1 border border-gray-400 rounded-full py-2 px-4 text-sm'>
                        View All <IoIosArrowRoundForward className='text-xl' />
                    </button>
                </div>
            </div>
            {/*food product map thru */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-2'>
                {
                    foods.map(food=><FoodCard key={food.id} food={food} ></FoodCard>)
            }
            </div>
        </div>
    );
};

export default RightSell;
