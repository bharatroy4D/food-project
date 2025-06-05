import React, { useState } from 'react';
import banco from '../../assets/bacola-logo.webp';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoSearchOutline } from 'react-icons/io5';
import { CiUser } from 'react-icons/ci';
import { AiOutlineShopping } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const SecondMiddle = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className='relative container lg:py-4 lg:px-10 mx-auto'>
            {/* Desktop layout */}
            <div className='hidden lg:flex justify-between items-center'>
                <div>
                    <img src={banco} alt="logo" className='w-48' />
                </div>

                <div className='border border-gray-300 rounded py-2 px-6'>
                    <p className='text-sm text-gray-500'>Your Location</p>
                    <p className='font-semibold flex items-center text-[#233A95]'>
                        Select a Location <MdOutlineKeyboardArrowDown />
                    </p>
                </div>

                <div className='flex justify-between bg-gray-200 rounded py-3 px-6 w-96'>
                    <input
                        type="text"
                        placeholder='Search your product..'
                        className='bg-transparent outline-none w-full'
                    />
                    <IoSearchOutline className='text-2xl' />
                </div>

                <div className='flex items-center gap-4'>
                    <div className='border border-gray-300 shadow rounded-full p-1'>
                        <CiUser className='text-2xl' />
                    </div>
                    <p className='font-semibold text-lg'>$0.00</p>
                    <div className='bg-gray-300 p-1 rounded-full relative'>
                        <AiOutlineShopping className='text-3xl' />
                        <p className='text-white text-[8px] bg-red-500 rounded-full py-1 px-2 absolute -top-3 -right-2'>1</p>
                    </div>
                </div>
            </div>

            {/* Mobile layout */}
            <div className='flex justify-between px-4 py-2 shadow-2xl w-full items-center lg:hidden'>
                <button onClick={toggleMenu}>
                    <HiOutlineMenuAlt3 className='text-2xl' />
                </button>

                <img src={banco} alt="logo" className='w-28' />

                <div className='bg-gray-300 p-1 rounded-full relative'>
                    <AiOutlineShopping className='text-3xl' />
                    <p className='text-white text-[8px] bg-red-500 rounded-full py-1 px-2 absolute -top-3 -right-2'>1</p>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {/* Drawer Header */}
                <div className='flex justify-between items-center p-4 border-b border-gray-300'>
                    <img src={banco} alt="logo" className='w-24' />
                    <button onClick={closeMenu}>
                        <IoMdClose className='text-2xl' />
                    </button>
                </div>

                <div className='p-4'>
                    <p className='flex text-xl rounded-md text-white bg-[#2BBEF9] py-3 px-6 w-fit'>
                        All Categories <MdOutlineKeyboardArrowDown className='text-2xl' />
                    </p>
                </div>

                {/* Drawer Menu */}
                <div className='flex flex-col gap-3 font-semibold px-4'>
                    <NavLink to='/' onClick={closeMenu}>Home</NavLink>
                    <NavLink to='/shop' onClick={closeMenu}>Shop</NavLink>
                    <NavLink to='/storeSingle' onClick={closeMenu}>Store Single</NavLink>
                    <NavLink to='/bakery' onClick={closeMenu}>Bakery</NavLink>
                    <NavLink to='/blog' onClick={closeMenu}>Blog</NavLink>
                    <NavLink to='/contact' onClick={closeMenu}>Contact</NavLink>
                </div>
            </div>

            {/* Backdrop */}
            {isMenuOpen && (
                <div
                    className='fixed inset-0 bg-black opacity-40 z-40'
                    onClick={closeMenu}
                />
            )}
        </div>
    );
};

export default SecondMiddle;
