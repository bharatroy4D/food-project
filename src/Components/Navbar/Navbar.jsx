import React from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    // function for NavLink class
    const navLinkClass = ({ isActive }) =>
        isActive ? 'underline underline-offset-4 text-blue-600' : '';

    return (
        <div className='container px-5 py-4 lg:px-10 mx-auto'>
            <div className='hidden lg:flex items-center justify-between'>
                <div>
                    <p className='flex items-center gap-2 font-semibold rounded-md text-white bg-[#2BBEF9] py-3 px-6'>
                        <RxHamburgerMenu className='text-xl' />
                        All Categories
                        <MdOutlineKeyboardArrowDown className='text-2xl' />
                    </p>
                </div>

                <div className='flex gap-8  poppins-thin'>
                    <NavLink to='/' className={navLinkClass}>Home</NavLink>
                    <NavLink to='/shop' className={navLinkClass}>Shop</NavLink>
                    <NavLink to='/storeSingle' className={navLinkClass}>Store Single</NavLink>
                    <NavLink to='/bakery' className={navLinkClass}>Bakery</NavLink>
                    <NavLink to='/blog' className={navLinkClass}>Blog</NavLink>
                    <NavLink to='/contact' className={navLinkClass}>Contact</NavLink>
                </div>

                <div className='font-semibold text-white bg-blue-400 hover:bg-blue-600 py-2 px-4 rounded-md'>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
