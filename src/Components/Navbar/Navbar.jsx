import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full md:w-[70%]  lg:w-[80%] xl:w-[90%] mx-auto py-6'>
            <div className=' hidden lg:flex items-center justify-between'>
                <div>
                    <p className='flex items-center gap-2  font-semibold rounded-md  text-white  bg-[#2BBEF9] py-3 px-6'><RxHamburgerMenu className='text-xl '/>
                        All Categories  <MdOutlineKeyboardArrowDown className='text-2xl' /></p>
                </div>
                <div className='flex gap-8 hover font-semibold'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/storeSingle'>Store Single</NavLink>
                    <NavLink to='/bakery'>Bakery</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <NavLink to='/about'>About</NavLink>
                </div>
                <div className='font-semibold text-white bg-blue-400 py-2 px-4 rounded-md'>
                    <button> Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;