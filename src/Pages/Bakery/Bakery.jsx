import React from 'react';

const bakeryItems = [
  {
    id: 1,
    name: 'Chocolate Croissant',
    image: 'https://source.unsplash.com/300x200/?croissant',
    price: '$2.99',
  },
  {
    id: 2,
    name: 'Strawberry Tart',
    image: 'https://source.unsplash.com/300x200/?tart',
    price: '$3.49',
  },
  {
    id: 3,
    name: 'Blueberry Muffin',
    image: 'https://source.unsplash.com/300x200/?muffin',
    price: '$1.99',
  },
  {
    id: 4,
    name: 'Lemon Cake',
    image: 'https://source.unsplash.com/300x200/?lemon-cake',
    price: '$4.25',
  },
  {
    id: 5,
    name: 'Banana Bread',
    image: 'https://source.unsplash.com/300x200/?banana-bread',
    price: '$3.75',
  },
  {
    id: 6,
    name: 'Almond Danish',
    image: 'https://source.unsplash.com/300x200/?danish',
    price: '$2.50',
  },
];

const Bakery = () => {
  return (
    <div className='container mx-auto px-5 lg:px-10 py-10'>
      <h2 className='text-3xl font-bold text-center mb-8 text-orange-600'>Our Bakery Items</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {bakeryItems.map((item) => (
          <div key={item.id} className='bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition'>
            <img src={item.image} alt={item.name} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-semibold text-gray-800'>{item.name}</h3>
              <p className='text-orange-500 font-bold mt-2'>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bakery;
