import { FaEnvelope } from "react-icons/fa";
import couponImg from "../../assets/coupon.webp"; // ensure this path is correct

const NewsLatter = () => {
  return (
    <section className="bg-blue-800 w-full mx-auto">
      <div className="container mx-auto px-5 lg:px-10 pt-3  text-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-10 gap-y-10">
          {/* Text + Form */}
          <div>
            <p className="text-lg text-gray-200 mb-2">
              $20 discount for your first order
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Join our newsletter and get...
            </h2>
            <p className="text-gray-300 mb-6">
              Join our email subscription now to get updates on promotions and coupons.
            </p>

            <form className="flex flex-col sm:flex-row items-center max-w-md bg-white rounded-lg overflow-hidden shadow-md transition-shadow duration-300">
              <div className="flex items-center w-full sm:w-auto px-4  border border-transparent focus-within:border-blue-600 transition-all duration-300">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full outline-none text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-600 hover:shadow-lg transition-all duration-300 text-white font-semibold px-6 py-3 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Image with proper spacing */}
          <div className="w-full flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={couponImg}
              alt="Discount Coupon"
              className="max-w-sm sm:max-w-sm md:max-w-md lg:max-w-xl w-full h-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLatter;
