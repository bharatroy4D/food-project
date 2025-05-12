import React from 'react';
import { IoHandLeftSharp } from 'react-icons/io5';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Middle = () => {
    return (
        <div className='hidden lg:block border-b border-gray-300'>
            <div className='container px-5 lg:px-10 mx-auto'>
                <div className='flex justify-between text-sm  items-center py-3 text-gray-600'>
                    <div className='flex gap-4'>
                        <p>About us</p>
                        <p>Vendor Dashboard</p>
                        <p>Wishlist
                        </p>
                        <p>Order Tracking</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoHandLeftSharp className='text-xl text-green-300' />
                        100% Secure delivery without contacting the courier
                    </div>
                    <div>
                        Need help? Call Us: <a href="#"> <span className='text-[#233A95] font-semibold hover:underline'>+ 0020 500</span></a>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex items-center '>English <MdOutlineKeyboardArrowDown />
                        </div>
                        <div className='flex items-center '>USD <MdOutlineKeyboardArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;