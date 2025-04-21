"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    imgSrc: "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/ic_new_logo_round.png",
    text: "Best alternative to Norton App Lock I've found. Offers everything except a widget. Biggest difference is responsive support; Norton appears essentially abandoned. Configuration is fairly easy.",
    title: "Xproguard AppLock",
    reviewer: "Klaatu58 - 11/2/2024",
    rating: 5,
  },
  {
    imgSrc: "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/ic_logo_round.png",
    text: "Really appreciate this firewall because it works properly. Excellent!",
    title: "Xproguard Firewall",
    reviewer: "Arnav Pawar - 6/3/2023",
    rating: 5,
  },
  {
    imgSrc: "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/ic_new_logo_round-fc83c10.png",
    text: "Thanks for the other programs you gave away at Christmas time, your company makes excellent products so I bought your VPN.",
    title: "Xproguard Photo Vault",
    reviewer: "Rakesh Kumar (Bablu) - 6/7/2022",
    rating: 5,
  },
  {
    imgSrc: "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/ic_vpn_logo_new_round.png",
    text: "Awesome",
    title: "Xproguard VPN",
    reviewer: "David Johnson - 11/1/2024",
    rating: 5,
  },
  {
    imgSrc: "https://img1.wsimg.com/isteam/ip/d8a1fe46-25ab-411f-a23b-59d13ffd48db/ic_new_logo_round-fc83c10.png",
    text: "Fully secured app with various features, easy to use. Highly recommend.",
    title: "Xproguard Password Manager",
    reviewer: "Saurabh Salunke - 14/10/2023",
    rating: 5,
  },
  {
    imgSrc: "https://play-lh.googleusercontent.com/VVRbgo9SNGQ2sPGFVl2WwUanNAZfRgRyUXhpw2-Iypb_L3OTCESH6bOvhkbStj110AQ=w240-h480-rw",
    text: "Exactly what I've been waiting for. No ads, does exactly what it says it does ,and gives me the peace of mind I need after having the last 2 phones stolen. Thank you!!!",
    title: "Xproguard Anti Theft",
    reviewer: "Usha - 19/03/2024",
    rating: 5,
  }
];

export default function HearFromCustomers() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerPage);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const currentReviews = reviews.slice(index * itemsPerPage, (index + 1) * itemsPerPage);

  return (
    <div className="relative w-full flex flex-col items-center p-8 bg-gray-900 text-white font-roboto">
      <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text mb-8">
        What Our Users Say?
      </h2>

      {/* Slider Container */}
      <div className="relative flex items-center justify-center w-full max-w-6xl px-4">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition"
        >
          <ChevronLeft size={32} className="text-white" />
        </button>

        {/* Reviews Display */}
        <div className="overflow-hidden w-full">
          <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap">
            {currentReviews.map((review, idx) => (
              <div
                key={idx}
                className="relative bg-gray-800 shadow-xl rounded-lg p-6 w-[300px] sm:w-[350px] h-[450px] sm:h-[500px] flex flex-col items-center justify-between border border-gray-700 overflow-hidden transition-all duration-500 group"
              >
                {/* Card Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                  <img
                    className="w-[80px] h-[80px] rounded-full object-cover mb-3"
                    src={review.imgSrc}
                    alt="Review"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{review.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">
                    {review.text.slice(0, review.text.length / 2)}...
                  </p>
                  <p className="text-xs mt-3 text-gray-500">{review.reviewer}</p>
                  <div className="mt-3 text-yellow-400 text-lg">
                    {"★".repeat(review.rating)}
                  </div>
                </div>

                {/* Full text visible on hover with background color change */}
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-blue-600 text-white opacity-0 transition-all duration-500 transform translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-delay-150">
                  <p className="text-sm">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition"
        >
          <ChevronRight size={32} className="text-white" />
        </button>
      </div>

      {/* Pagination Indicator */}
      <div className="mt-4 text-center text-gray-400">
        <span>{index + 1} / {totalSlides}</span>
      </div>
    </div>
  );
}
