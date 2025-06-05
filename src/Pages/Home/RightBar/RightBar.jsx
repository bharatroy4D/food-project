// RightBar.jsx
import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowRoundForward } from 'react-icons/io';
import slider from '../../../assets/slider-image-1.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RightBar = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {[1, 2].map((_, index) => (
          <div key={index}>
            <div className="relative h-[400px] sm:h-[450px] rounded-lg overflow-hidden max-w-full mx-auto">
              {/* Background Image */}
              <img
                src={slider}
                alt="slider"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-start gap-2 z-10 text-gray-700 px-4 sm:px-8 lg:px-16 pt-6">
                <div className="flex items-center gap-3">
                  <p className="text-xs sm:text-sm uppercase">exclusive offer</p>
                  <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-green-400 to-green-300 px-3 py-1 rounded-full text-black">
                    -20% OFF
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-md leading-snug">
                  Specialist in the grocery store
                </h1>
                <p className="text-sm sm:text-base">Only this week. Don't miss...</p>
                <p className="text-sm sm:text-base">
                  from <span className="text-xl sm:text-3xl text-red-400 font-semibold">$7.99</span>
                </p>
                <button className="flex items-center gap-2 text-white font-semibold bg-[#51A2FF] hover:bg-[#3c8ee0] transition px-4 sm:px-5 py-2 rounded-full w-fit">
                  Shop Now <IoIosArrowRoundForward className="text-lg sm:text-xl" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RightBar;
