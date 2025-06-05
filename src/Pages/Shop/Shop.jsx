import React, { useState, useEffect } from 'react';

const categories = ["All", "Fast Food", "Vegan", "Dessert", "Seafood"];

const SimpleLoader = () => (
  <div className="flex flex-col justify-center items-center min-h-[300px]">
    <div className="flex space-x-2">
      <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-150"></span>
      <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce delay-300"></span>
      <span className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></span>
    </div>
    <p className="mt-4 text-gray-700 font-medium">Loading ...</p>
  </div>
);

const Shop = () => {
  const foods = [
    {
      id: 1,
      name: "Beef Burger",
      price: 180,
      category: "Fast Food",
      image:
        "https://img.freepik.com/free-photo/hamburger-juice-jar-tomatoes-avocado-sprout-digital-tablet-wooden-table_23-2148165611.jpg",
      description:
        "Juicy beef patty served with lettuce, tomato, and cheese in a toasted bun.",
    },
    {
      id: 2,
      name: "Hummus Plate",
      price: 120,
      category: "Vegan",
      image:
        "https://img.freepik.com/premium-photo/hummus-plate-with-copyspace-tablet-top-view_116547-2292.jpg",
      description: "Creamy chickpea hummus drizzled with olive oil, served with warm pita.",
    },
    {
      id: 3,
      name: "Chicken Wrap",
      price: 150,
      category: "Fast Food",
      image:
        "https://img.freepik.com/free-photo/healthy-influencer-host-channel-taste-chicken-meat-surmise_31965-369821.jpg",
      description: "Grilled chicken, fresh veggies, and sauce wrapped in a soft tortilla.",
    },
    {
      id: 4,
      name: "Avocado Toast",
      price: 100,
      category: "Vegan",
      image:
        "https://img.freepik.com/free-photo/nutrition-healthy-diet-plan-concept_53876-125013.jpg",
      description: "Toasted sourdough topped with mashed avocado and seasoning.",
    },
    {
      id: 5,
      name: "Chocolate Brown",
      price: 80,
      category: "Dessert",
      image:
        "https://img.freepik.com/free-photo/homemade-chocolate-brownies_140725-3184.jpg",
      description: "Rich, fudgy brownie with a gooey chocolate center.",
    },
    {
      id: 6,
      name: "Cheesecake Slice",
      price: 95,
      category: "Dessert",
      image:
        "https://img.freepik.com/free-photo/slice-cheesecake-with-fruit_144627-29923.jpg",
      description: "Classic New York-style cheesecake topped with fresh berries.",
    },
    {
      id: 7,
      name: "Grilled Salmon",
      price: 320,
      category: "Seafood",
      image:
        "https://img.freepik.com/free-photo/grilled-salmon-with-vegetables_2829-16962.jpg",
      description: "Tender salmon fillet grilled to perfection with lemon butter.",
    },
    {
      id: 8,
      name: "Shrimp Pasta",
      price: 260,
      category: "Seafood",
      image:
        "https://img.freepik.com/free-photo/spaghetti-pasta-with-shrimps_2829-19034.jpg",
      description: "Al dente pasta tossed with garlic shrimp and fresh herbs.",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

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
    <div className="container mx-auto px-5 lg:px-10 py-8">
      <h1 className="text-2xl font-bold mb-6">🍽️ Food Shop</h1>

      {/* Category Filter */}
      <div className="mb-6 flex justify-center lg:justify-start flex-wrap gap-3 lg:gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4  py-1 lg:py-2 rounded-full border transition-colors
              ${
                selectedCategory === cat
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoods.map((food) => (
          <div
            key={food.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-24 lg:h-36  object-cover"
            />
            <div className="p-2 lg:p-4">
              <h2 className="text-sm sm:text-base font-semibold text-gray-800">{food.name}</h2>
              <p className="text-xs hidden lg:block sm:text-sm text-gray-500 mt-1">{food.category}</p>
              <p className="text-xs sm:text-sm text-gray-700 mt-2 line-clamp-2">
                {food.description}
              </p>
              <p className="text-sm sm:text-base text-green-600 font-bold pt-2 lg:mt-4">
                ৳{food.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
