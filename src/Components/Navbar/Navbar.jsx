import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-9/12 mx-auto py-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <p className='flex text-xl rounded-md  text-white bg-gray-500 py-4 px-6'>All Categories  <MdOutlineKeyboardArrowDown className='text-2xl' /></p>
                </div>
                <div className='flex gap-8 text-lg font-semibold'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/storeSingle'>Store Single</NavLink>
                    <NavLink to='/bakery'>Bakery</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <div className='text-lg font-semibold text-white bg-gray-500 py-2 px-4 rounded-md'>
                    <button> Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;