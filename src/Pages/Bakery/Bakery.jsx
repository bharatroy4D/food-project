import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const bakeryItems = [
  {
    id: 1,
    name: 'Chocolate Croiss',
    image:
      'https://img.freepik.com/free-vector/vector-3d-splashes-melted-chocolate-milk-with-falling-pieces-chocolate-bars_1441-492.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$2.99',
    description: 'Flaky, buttery croissant filled with rich chocolate.',
    rating: 4,
    category: 'Pastry',
  },
  {
    id: 2,
    name: 'Strawberry Tart',
    image:
      'https://img.freepik.com/free-photo/tart-with-strawberries-whipped-cream-decorated-with-mint-leaves_2829-19894.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$3.49',
    description: 'Crispy tart shell with fresh strawberries & cream.',
    rating: 5,
    category: 'Tart',
  },
  {
    id: 3,
    name: 'Blueberry Muffin',
    image:
      'https://img.freepik.com/free-photo/beautiful-delicious-dessert-with-blueberries_23-2148718712.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$1.99',
    description: 'Soft muffin bursting with juicy blueberries.',
    rating: 4,
    category: 'Muffin',
  },
  {
    id: 4,
    name: 'Lemon Cake',
    image:
      'https://img.freepik.com/free-photo/homemade-newyork-cheesecake-with-lemon-mint-healthy-organic-dessert-top-view_114579-8869.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$4.25',
    description: 'Moist lemon cake topped with zesty icing.',
    rating: 5,
    category: 'Cake',
  },
  {
    id: 5,
    name: 'Banana Bread',
    image:
      'https://img.freepik.com/free-photo/view-delicious-cake-dessert-with-bananas_23-2150822885.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$3.75',
    description: 'Homestyle banana bread with walnuts.',
    rating: 4,
    category: 'Bread',
  },
  {
    id: 6,
    name: 'Almond Danish',
    image:
      'https://img.freepik.com/free-photo/top-view-homemade-cinnamon-roll-plate_23-2148543674.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$2.50',
    description: 'Buttery Danish topped with toasted almonds.',
    rating: 4,
    category: 'Danish',
  },
  {
    id: 7,
    name: 'Chocolate Croissant',
    image:
      'https://img.freepik.com/free-vector/vector-3d-splashes-melted-chocolate-milk-with-falling-pieces-chocolate-bars_1441-492.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$2.99',
    description: 'Flaky, buttery croissant filled with rich chocolate.',
    rating: 4,
    category: 'Pastry',
  },
  {
    id: 8,
    name: 'Banana Bread',
    image:
      'https://img.freepik.com/free-photo/view-delicious-cake-dessert-with-bananas_23-2150822885.jpg?uid=R180858093&semt=ais_hybrid&w=740',
    price: '$3.75',
    description: 'Homestyle banana bread with walnuts.',
    rating: 4,
    category: 'Bread',
  },
];

// Loader
const SimpleLoader = () => (
  <div className="flex flex-col justify-center items-center min-h-[300px]">
    <div className="flex space-x-2">
      <span className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-150"></span>
      <span className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-300"></span>
      <span className="w-4 h-4 bg-orange-500 rounded-full animate-bounce"></span>
    </div>
    <p className="mt-4 text-gray-700 font-medium">Loading ...</p>
  </div>
);

const Bakery = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <SimpleLoader />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-10 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-orange-600">Our Bakery Items</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {bakeryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={item.image} alt={item.name} className="w-full  h-24 lg:h-44 object-cover" />
            <div className="p-2 lg:p-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800">{item.name}</h3>
              <p className="text-xs sm:text-sm hidden lg:block text-gray-500">{item.category}</p>

              <div className="flex items-center  mt-1 sm:mt-2 text-xs text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < item.rating ? <FaStar /> : <FaRegStar />}</span>
                ))}
                <span className="text-xs  lg:hidden ml-5 font-bold text-orange-500">{item.price}</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 mt-2 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-2 lg:mt-3 sm:mt-4">
                <span className="text-sm sm:text-lg font-bold hidden lg:block text-orange-500">{item.price}</span>
                <button className="bg-orange-500 text-white text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-xl hover:bg-orange-600 transition">
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
