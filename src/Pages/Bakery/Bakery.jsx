import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const bakeryItems = [
  {
    id: 1,
    name: 'Chocolate Croissant',
    image: 'https://img.freepik.com/free-vector/vector-3d-splashes-melted-chocolate-milk-with-falling-pieces-chocolate-bars_1441-492.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$2.99',
    description: 'Flaky, buttery croissant filled with rich chocolate.',
    rating: 4,
    category: 'Pastry'
  },
  {
    id: 2,
    name: 'Strawberry Tart',
    image: 'https://img.freepik.com/free-photo/tart-with-strawberries-whipped-cream-decorated-with-mint-leaves_2829-19894.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$3.49',
    description: 'Crispy tart shell with fresh strawberries & cream.',
    rating: 5,
    category: 'Tart'
  },
  {
    id: 3,
    name: 'Blueberry Muffin',
    image: 'https://img.freepik.com/free-photo/beautiful-delicious-dessert-with-blueberries_23-2148718712.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$1.99',
    description: 'Soft muffin bursting with juicy blueberries.',
    rating: 4,
    category: 'Muffin'
  },
  {
    id: 4,
    name: 'Lemon Cake',
    image: 'https://img.freepik.com/free-photo/homemade-newyork-cheesecake-with-lemon-mint-healthy-organic-dessert-top-view_114579-8869.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$4.25',
    description: 'Moist lemon cake topped with zesty icing.',
    rating: 5,
    category: 'Cake'
  },
  {
    id: 5,
    name: 'Banana Bread',
    image: 'https://img.freepik.com/free-photo/view-delicious-cake-dessert-with-bananas_23-2150822885.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$3.75',
    description: 'Homestyle banana bread with walnuts.',
    rating: 4,
    category: 'Bread'
  },
  {
    id: 6,
    name: 'Almond Danish',
    image: 'https://img.freepik.com/free-photo/top-view-homemade-cinnamon-roll-plate_23-2148543674.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$2.50',
    description: 'Buttery Danish topped with toasted almonds.',
    rating: 4,
    category: 'Danish'
  },
    {
    id: 7,
    name: 'Chocolate Croissant',
    image: 'https://img.freepik.com/free-vector/vector-3d-splashes-melted-chocolate-milk-with-falling-pieces-chocolate-bars_1441-492.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$2.99',
    description: 'Flaky, buttery croissant filled with rich chocolate.',
    rating: 4,
    category: 'Pastry'
  },
    {
    id: 8,
    name: 'Banana Bread',
    image: 'https://img.freepik.com/free-photo/view-delicious-cake-dessert-with-bananas_23-2150822885.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$3.75',
    description: 'Homestyle banana bread with walnuts.',
    rating: 4,
    category: 'Bread'
  },
];

const Bakery = () => {
  return (
    <div className='container mx-auto px-5 lg:px-10 py-10'>
      <h2 className='text-3xl font-bold text-center mb-8 text-orange-600'>Our Bakery Items</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {bakeryItems.map((item) => (
          <div key={item.id} className='bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition relative'>
            <img src={item.image} alt={item.name} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold text-gray-800'>{item.name}</h3>
              <p className='text-sm text-gray-500 mt-1'>{item.category}</p>
              <div className='flex items-center mt-2'>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < item.rating ? <FaStar /> : <FaRegStar />}
                  </span>
                ))}
              </div>
              <p className='text-gray-700 text-sm mt-2'>{item.description}</p>
              <div className='flex items-center justify-between mt-4'>
                <span className='text-xl font-bold text-orange-500'>{item.price}</span>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bakery;
