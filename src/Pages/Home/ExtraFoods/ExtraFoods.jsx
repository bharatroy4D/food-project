import React from 'react';

const ExtraFoods = () => {
  const foods = [
    {
      id: 1,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/baverages-1.jpg",
      name: "Beverages",
      items: "12 items"
    },
    {
      id: 2,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/biscuitssnacks-1.jpg",
      name: "Biscuits & Snacks",
      items: "8 items"
    },
    {
      id: 3,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/breadbakery-1.jpg",
      name: "Breads & Bakery",
      items: "15 items"
    },
    {
      id: 4,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/dairy-1.jpg",
      name: "Breakfast & Dairy",
      items: "10 items"
    },
    {
      id: 5,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image4.png",
      name: "Frozen Foods",
      items: "7 items"
    },
    {
      id: 6,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/fruitvegetables-1.jpg",
      name: "Daisy Fruits & Vegetables",
      items: "9 items"
    },
    {
      id: 7,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/04/category-image2.png",
      name: "Grocery &Staples",
      items: "11 items"
    },
    {
      id: 8,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/household-1.jpg",
      name: "Household Needs",
      items: "13 items"
    },
    {
      id: 9,
      img: "https://klbtheme.com/bacola/wp-content/uploads/2021/05/meat-1.jpg",
      name: "Meats & Seafood",
      items: "6 items"
    }
  ];

  return (
    <div className='pb-10 px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 lg:grid-rows-2 gap-4'>
        {foods.map((food, index) => (
          <div
            key={food.id}
            className={`group border border-gray-200 p-5 rounded transition-transform duration-300 hover:scale-105 hover:shadow-md ${
              index === 0
                ? 'row-span-2 flex flex-col items-center text-center bg-gray-50'
                : 'flex items-center gap-3'
            }`}
          >
            <img
              src={food.img}
              alt={`Category: ${food.name}`}
              className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
                index === 0 ? 'w-40 h-40 mb-3' : 'w-24 h-24'
              }`}
            />
            <div>
              <h1 className={`font-semibold ${index === 0 ? 'text-xl' : 'text-sm'}`}>
                {food.name}
              </h1>
              <p className='text-gray-600'>{food.items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraFoods;
