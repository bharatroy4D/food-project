import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      {/* === Contact Header === */}
      <div className=" flex flex-col items-center justify-center text-center h-screen py-12 bg-orange-100">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Have a question or need help? We’re always here to assist you.
        </p>
      </div>

      {/* === Contact Section === */}
      <div className="container mx-auto px-5 lg:px-10 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Get in Touch
            </h2>
            {/* Info Items */}
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    123 Foodie Street, Flavor Town, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+880 1234-567890</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-orange-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">support@fooddelivery.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaClock className="text-orange-500 text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600">Sat - Thu: 9:00 AM - 9:00 PM</p>
                  <p className="text-gray-600">Friday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-lg shadow"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white p-6 shadow-md rounded-xl">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-orange-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-orange-400"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-orange-400"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
