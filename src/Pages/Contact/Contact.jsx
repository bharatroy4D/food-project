import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-orange-600">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Our Restaurant</h3>
            <p className="text-gray-600">123 Foodie Street, Flavor Town, USA</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">support@fooddelivery.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+1 (234) 567-8901</p>
          </div>

          {/* Optional Map */}
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 rounded-lg shadow"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 bg-white p-6 shadow rounded-lg">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-orange-400"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-orange-400"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
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
  );
};

export default Contact;
