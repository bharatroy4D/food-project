import { FaEnvelope } from "react-icons/fa";
import couponImg from '../..//assets/coupon.webp' // Replace with your image path

const NewsLatter = () => {
  return (
    <section className="bg-blue-800  text-white ">
      <div className="container w-full md:max-w-5xl lg:max-w-7xl px-5 lg:px-10 mx-auto h-[311px] grid md:grid-cols-2 items-center justify-between gap-10">
        {/* Text and Form */}
        <div className="py-7">
          <p className="text-lg text-gray-200 mb-2">$20 discount for your first order</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Join our newsletter and get...
          </h2>
          <p className="text-gray-300 mb-6">
            Join our email subscription now to get updates on promotions and coupons.
          </p>

          <form className="flex flex-col sm:flex-row items-center w-96 bg-white rounded-lg overflow-hidden">
            <div className="flex items-center justify-between  sm:w-auto px-4 py-3">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Your email address"
                className="w-full outline-none text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 my-1 rounded w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src={couponImg}
            alt="Discount Coupon "
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
