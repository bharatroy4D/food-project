import React from 'react';
import { FaStar } from 'react-icons/fa';

const FoodCard = ({ food }) => {
    const { img, des, oldPrice, newPrice, discount } = food;

    return (
        <div className="relative bg-white rounded border border-gray-200 overflow-hidden">
            <img
                src={img}
                alt={des}
                className="w-full h-36 object-cover p-5"
            />
            <div className="p-5">
                <p className="text-gray-800 font-semibold mb-2">{des}</p>
                <p className='text-green-400 text-xs pb-2 font-semibold uppercase'>in stock</p>
                {/* ⭐ 5 star */}
                <div className="flex items-center text-yellow-400 text-xs mb-1">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                </div>
                <div className='flex items-center text-sm py-2 gap-4'>
                    <p className="text-gray-400 font-semibold line-through">{oldPrice}</p>
                    <p className="text-green-500 font-semibold">{newPrice}</p>
                </div>
            </div>
            {/* button */}
            <div className='flex items-center mx-5 mb-3'>
                <button className='text-sm text-[#51A2FF] border border-[#51A2FF] hover:bg-[#51A2FF] hover:text-[#51A2FF] rounded-full w-full py-2 px-4'>Add to card</button>
            </div>
            {/* discount badge */}
            <div className='absolute top-3 left-3 bg-[#2BBEF9] rounded w-fit'>
                <p className='py-1 px-2 text-xs font-bold text-white'>{discount}</p>
            </div>
        </div>
    );
};

export default FoodCard;
