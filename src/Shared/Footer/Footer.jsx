import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10">
      <div className="container w-full md:max-w-5xl lg:max-w-7xl px-5 lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">FoodieHub</h2>
          <p className="mt-3 text-sm">
            Taste the best dishes from our handpicked chefs and local restaurants. Delivered hot & fresh!
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">Menu</a></li>
            <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-yellow-300">Online Order</a></li>
            <li><a href="#" className="hover:text-yellow-300">Fast Delivery</a></li>
            <li><a href="#" className="hover:text-yellow-300">Reservation</a></li>
            <li><a href="#" className="hover:text-yellow-300">Catering</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="text-sm mb-3">Get the latest food news & offers.</p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} FoodieHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
