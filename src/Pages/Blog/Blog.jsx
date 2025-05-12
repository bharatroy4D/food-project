import React from 'react';

const blogPosts = [
  {
    "id": 1,
    "title": "Top 5 Street Foods in Dhaka",
    "excerpt": "Explore the best street foods in Dhaka city that you must try once in your lifetime.",
    "image": "https://img.freepik.com/free-photo/hamburger-juice-jar-tomatoes-avocado-sprout-digital-tablet-wooden-table_23-2148165611.jpg?uid=R180858093&semt=ais_hybrid&w=740",
    "category": "Street Food",
    "author": "Tanvir Hossain",
    "date": "2025-05-01"
  },
  {
    "id": 2,
    "title": "Why You Should Try Traditional Bengali Breakfast",
    "excerpt": "From luchi to shingara — discover the tastes of a classic Bengali morning.",
    "image": "https://img.freepik.com/premium-photo/hummus-plate-with-copyspace-tablet-top-view_116547-2292.jpg?uid=R180858093&semt=ais_hybrid&w=740",
    "category": "Breakfast",
    "author": "Farzana Rahman",
    "date": "2025-04-25"
  },
  {
    "id": 3,
    "title": "Healthy Eating: 7 Local Vegetables You Should Include in Your Diet",
    "excerpt": "Local Bangladeshi vegetables that are not just healthy but also delicious.",
    "image": "https://img.freepik.com/free-photo/couple-cafe-looking-smartphone-screen_23-2147826834.jpg?uid=R180858093&semt=ais_hybrid&w=740",
    "category": "Health",
    "author": "Dr. Mahmud",
    "date": "2025-04-20"
  },
  {
    "id": 4,
    "title": "The Art of Making Perfect Kacchi Biryani",
    "excerpt": "Learn the secrets behind mouth-watering kacchi biryani preparation.",
    "image": "https://img.freepik.com/free-photo/nutrition-healthy-diet-plan-concept_53876-125013.jpg?uid=R180858093&semt=ais_hybrid&w=740",
    "category": "Traditional",
    "author": "Chef Riaz",
    "date": "2025-04-15"
  },
  {
    "id": 5,
    "title": "Top 3 Dessert Places in Dhaka",
    "excerpt": "Got a sweet tooth? Don’t miss these heavenly dessert spots in the city.",
    "image": "https://img.freepik.com/free-photo/portrait-attractive-young-woman-recording-cooking-tutorial-her-video-blog_662251-2386.jpg?uid=R180858093&semt=ais_hybrid&w=740",
    "category": "Dessert",
    "author": "Sadia Jahan",
    "date": "2025-04-10"
  },
  {
    "id": 6,
    "title": "Quick & Easy Snacks for Evening Tea",
    "excerpt": "Tired after work? Enjoy these light and tasty snacks with a cup of cha.",
    "image": "https://img.freepik.com/premium-photo/healthy-influencer-host-channel-taste-chicken-meat-surmise_31965-369821.jpg?uid=R180858093&semt=ais_hybrid&w=740",
    "category": "Snacks",
    "author": "Nayeem Islam",
    "date": "2025-03-30"
  }
];



const Blog = () => {
  return (
    <div className="container mx-auto px-5 lg:px-10 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-10">
        Latest Food Blogs
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <a
                href={post.link}
                className="inline-block text-orange-500 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
