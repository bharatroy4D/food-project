import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import slider from '../../../assets/slider-image-1.webp';

const RightBar = () => {
    return (
        <div className='container w-screen h-[450px] relative overflow-hidden rounded'>
            {/* Slider Image */}
            <img src={slider} alt="slider" className='w-full h-full object-cover' />

            {/* Overlay Text Content */}
            <div className='container absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-5 p-15  text-black'>
                <div className='flex items-center gap-4'>
                    <p className='text-sm uppercase'>exclusive offer</p>
                    <button className='text-sm font-semibold bg-gradient-to-r from-green-400  px-4 rounded-full text-black'>-20% OFF</button>
                </div>
                <h1 className='text-4xl md:text-5xl font-bold max-w-md'>Specialist in the grocery store</h1>
                <p className='text-lg'>only this week. Don't miss...</p>
                <div>
                    <p className='text-lg'>from <span className='text-3xl text-red-500 font-medium'>$7.99</span></p>
                </div>
                <button className='flex items-center gap-2 text-white font-semibold bg-[#51A2FF] rounded-full px-5 py-2 w-fit'>
                    Shop Now <IoIosArrowRoundForward className='text-xl' />
                </button>
            </div>
        </div>
    );
};

export default RightBar;
