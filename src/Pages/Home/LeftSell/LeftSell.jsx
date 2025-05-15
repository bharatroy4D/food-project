import React from 'react';
import sell_1 from '../../../assets/sell_1.webp'
import sell_2 from '../../../assets/sell_2.webp'
import avatar from '../../../assets/avatar-3.webp'
import { CiMobile4 } from 'react-icons/ci';
import { CiStopwatch } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { PiHouseLineThin } from "react-icons/pi";

const trendingProducts = [
    {
        id: 1,
        img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46.jpg",
        title: "Field Roast Chao Cheese",
        oldPrice: "$6.99",
        newPrice: "$5.49",
    },
    {
        id: 2,
        img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-5.jpg",
        title: "Vital Farms Pasture",
        oldPrice: "$7.99",
        newPrice: "$6.29",
    },
    {
        id: 3,
        img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-48.jpg",
        title: "Encore Seafoods Stuffed Alaskan Salmon",
        oldPrice: "$9.49",
        newPrice: "$7.99",
    },
    {
        id: 4,
        img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-4.jpg",
        title: "Field Roast Chao Cheese Creamy Original",
        oldPrice: "$2.99",
        newPrice: "$1.99",
    },
    {
        id: 5,
        img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-7.jpg",
        title: "Vital Farms Pasture-Raised ",
        oldPrice: "$4.49",
        newPrice: "$3.49",
    },
];



const LeftSell = () => {
    return (
        <div className='w-64 rounded hidden lg:block '>
            {/* sell card one */}
            <div className='relative'>
                <div className=''>
                    <img src={sell_1} alt="" className='rounded' />
                    <div className='flex flex-col gap-2 absolute top-0 left-0 justify-center p-10'>
                        <p className='text-sm font-semibold text-white'>Bacola Natural Foods</p>
                        <p className='text-xl'>Special Organic</p>
                        <h1 className='text-2xl font-bold'>Roats Burger</h1>
                        <p className='text-base '>only from</p>
                        <p className='text-3xl font-bold text-red-500'>$14.99</p>
                    </div>
                </div>
            </div>
            {/* sell card 2 */}
            <div className='relative mt-10'>
                <div>
                    <img src={sell_2} alt="" className='rounded' />
                    <div className='flex flex-col gap-2 absolute top-0 left-0 justify-center p-10'>
                        <p className='text-sm font-semibold text-gray-500'>Best Bakery Products</p>
                        <p className='text-xl'>Fresh Products</p>
                        <h1 className='text-2xl font-bold'>Every hours</h1>
                        <p className='text-base '>only from</p>
                        <p className='text-3xl font-bold text-red-500'>$24.99</p>
                    </div>
                </div>
            </div>
            {/* card 3 */}
            <div className='relative mt-12  border rounded border-gray-300'>
                {/* card-1 */}
                <div className='flex items-center gap-5  p-5'>
                    <CiMobile4 className='text-4xl' />
                    <div className='text-sm'>Download the Bacola App to your phone</div>
                </div>
                {/* card-2 */}
                <div className='flex items-center gap-5 border-t border-gray-300 p-5 '>
                    <CiDeliveryTruck className='text-4xl' />
                    <div className='text-sm'>Track the Bacola App to your phone</div>
                </div>
                {/* card-3 */}
                <div className='flex items-center gap-5 border-t border-gray-300 p-5'>
                    <CiStopwatch className='text-4xl' />
                    <div className='text-sm'>Watch the Bacola App to your phone</div>
                </div>
                {/* card-4 */}
                <div className='flex items-center gap-5 border-t border-gray-300 p-5'>
                    <CiLocationOn className='text-4xl' />
                    <div className='text-sm'>Location the Bacola App to your phone</div>
                </div>             
            </div>
            {/* container -4  trending products*/}
            <div className='border rounded border-gray-300 my-13'>
                {
                    trendingProducts.map(product => (
                        <div key={product.id} className='flex items-center py-4 px-2'>
                            <img src={product.img} alt="" className='w-20' />
                            <div className='flex flex-col gap-1'>
                                <h1 className='text-sm font-semibold text-gray-600'>{product.title}</h1>
                                <div className='flex gap-3 font-semibold' >
                                    <span className='text-gray-400 line-through'>{product.oldPrice}</span>
                                    <span className='text-gray-600'>{product.oldPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/*comment card 5 */}
            <div className='mt-10'>
                <h1 className='text-xl font-semibold pb-4 text-center'>customer comment</h1>

                <div className='  rounded bg-[#FFFBEC] p-6 w-64'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl font-semibold'>The Best Marketplace</h1>
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at ex quam repellat distinctio.</p>
                        <div className='flex items-center gap-5'>
                            <img src={avatar} alt="avatar" className='w-14 rounded-full' />
                            <div>
                                <h1 className=' font-bold'>
                                    Tina Mcdonnell
                                </h1>
                                <p className='text-xs text-gray-500'>Sales Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LeftSell;