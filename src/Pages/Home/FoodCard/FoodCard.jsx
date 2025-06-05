import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FoodCard = ({ food }) => {
  const { img, des, oldPrice, newPrice, discount } = food;

  return (
    <div className="group relative bg-white rounded border border-gray-200 hover:border hover:border-gray-300 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
      {/* Image with zoom on hover */}
      <img
        src={img}
        alt={des}
        className="w-full h-24 lg:h-36 object-cover p-2 lg:p-5 transition-transform duration-300 group-hover:scale-105"
      />

      {/* Content */}
      <div className=" px-2 py-1 lg:py-0 lg:p-5">
        <p className="text-gray-800 font-semibold hidden lg:block text-sm mb-2">{des}</p>
        <p className="text-gray-800 font-semibold lg:hidden text-sm mb-2">{des.slice(0, 26)}...</p>
        <p className="text-green-400 text-xs pb-2 hidden lg:block font-semibold uppercase">in stock</p>

        {/* Star Rating */}
        <div className="flex items-center text-yellow-400 text-xs mb-1 transition-colors duration-300 group-hover:text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center font-bold gap-4">
          <p className="text-gray-400 text-xs lg:text-base line-through">{oldPrice}</p>
          <p className="text-gray-600 text-xs lg:text-base">{newPrice}</p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="flex items-center justify-center lg:justify-start  mx-2 lg:mx-5 mb-3 lg:mb-3 lg:my-3">
        <Link to={`/card/${food.id}`}>
          <button className="text-sm text-[#51A2FF] font-medium border border-[#51A2FF] hover:bg-[#51A2FF] hover:text-white transition-colors duration-300 rounded-full w-full py-1 mt-1 lg:mt-0 lg:py-2 px-3 lg:px-4">
          View Details
        </button></Link>
      </div>

      {/* Discount Badge */}
      <div className="absolute top-3 left-3 bg-[#2BBEF9] rounded w-fit">
        <p className="py-1 px-2 text-xs font-bold text-white">{discount}</p>
      </div>
    </div>
  );
};

export default FoodCard;
