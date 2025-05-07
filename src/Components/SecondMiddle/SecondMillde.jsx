import React from 'react';
import banco from '../../assets/bacola-logo.webp'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { AiOutlineShopping } from 'react-icons/ai';

const SecondMillde = () => {
    return (
        <div className='w-9/12 mx-auto py-3'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={banco} alt="" className='w-48' />
                </div>
                <div className='border border-gray-300 rounded py-2 px-6'>
                    <p className='text-sm text-gray-500 '>your Location</p>
                    <p className='font-semibold flex items-center text-[#233A95]'>Select a Location <MdOutlineKeyboardArrowDown /></p>
                </div>
                <div className='flex justify-between bg-gray-200 rounded py-3 px-6 w-96'>
                    <input type="text" placeholder='Search your product..' />
                    <IoSearchOutline className='text-2xl' />

                </div>
                <div className='flex items-center gap-5'>
                    <div className='border border-gray-300 shadow rounded-full p-1'>
                        <CiUser className='text-xl' />
                    </div>
                    <p className='font-semibold text-lg'>$0.00</p>
                    <div className='bg-gray-300 p-1 rounded-full'>
                        <AiOutlineShopping className='text-2xl' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SecondMillde;