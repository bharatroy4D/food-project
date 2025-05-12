import React, { useState } from 'react';

const categories = ["All", "Fast Food", "Vegan"];

const Shop = () => {
  // Food data directly inside the component
  const foods = [
    {
      id: 1,
      name: "Beef Burger",
      price: 180,
      category: "Fast Food",
      image: "https://img.freepik.com/free-photo/hamburger-juice-jar-tomatoes-avocado-sprout-digital-tablet-wooden-table_23-2148165611.jpg"
    },
    {
      id: 2,
      name: "Hummus Plate",
      price: 120,
      category: "Vegan",
      image: "https://img.freepik.com/premium-photo/hummus-plate-with-copyspace-tablet-top-view_116547-2292.jpg"
    },
    {
      id: 3,
      name: "Chicken Wrap",
      price: 150,
      category: "Fast Food",
      image: "https://img.freepik.com/free-photo/healthy-influencer-host-channel-taste-chicken-meat-surmise_31965-369821.jpg"
    },
    {
      id: 4,
      name: "Avocado Toast",
      price: 100,
      category: "Vegan",
      image: "https://img.freepik.com/free-photo/nutrition-healthy-diet-plan-concept_53876-125013.jpg"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFoods = selectedCategory === "All"
    ? foods
    : foods.filter(food => food.category === selectedCategory);

  return (
    <div className="container mx-auto px-5 lg:px-10 py-8">
      <h1 className="text-2xl font-bold mb-6">🍽️ Food Shop</h1>

      {/* Category Filter */}
      <div className="mb-6 flex gap-4 ">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat ? "bg-green-600 text-white" : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredFoods.map(food => (
          <div
            key={food.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{food.name}</h2>
              <p className="text-sm text-gray-500">{food.category}</p>
              <p className="text-green-600 font-bold mt-2">৳{food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
