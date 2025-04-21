import React from "react";
import { Rating } from "@mui/material";

export default function MidSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen max-w-screen-xl mx-auto px-4">
      {/* Left Section */}
      <div className="relative flex items-center justify-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3 scale-100 sm:scale-110 md:scale-125 lg:scale-125 mb-8 md:mb-0">
        {/* Outer Glass Circular Video with Continuous Rotation */}
        <div className="relative w-60 sm:w-72 md:w-80 lg:w-96 h-60 sm:h-72 md:h-80 lg:h-96 rounded-full overflow-hidden border border-white/30 backdrop-blur-lg animate-spin-smooth will-change-transform">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://cdn.prod.website-files.com/643e232532628100299bd644/643fab8549cdbd50f4dd95db_pexels-artem-podrez-5725961-3840x2160-30fps-poster-00001.jpg"
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.prod.website-files.com/643e232532628100299bd644/643fab8549cdbd50f4dd95db_pexels-artem-podrez-5725961-3840x2160-30fps-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.prod.website-files.com/643e232532628100299bd644/643fab8549cdbd50f4dd95db_pexels-artem-podrez-5725961-3840x2160-30fps-transcode.webm"
              type="video/webm"
            />
          </video>
          {/* Dark Overlay for Glass Effect */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Inner Rotating Disk with Thin Whitish Ring Inside the Blue Area */}
        <div className="absolute flex items-center justify-center">
          <div className="relative w-48 sm:w-56 md:w-64 lg:w-80 h-48 sm:h-56 md:h-64 lg:h-80 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 bg-opacity-100 flex items-center justify-center animate-counter-rotate will-change-transform">
            {/* Whitish Thin Ring Inside the Blue Area */}
            <div className="absolute w-44 sm:w-52 md:w-60 lg:w-72 h-44 sm:h-52 md:h-60 lg:h-72 rounded-full border-2 border-white/30"></div>

            {/* Counter-Rotating Text */}
            <div className="absolute transform animate-text-counter text-white text-center font-bold text-xl lg:text-2xl sm:text-sm">
              9.9K
              <br />
              Joined our team
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (More Width) */}
      <div className="w-full sm:w-1/2 md:w-1/2 lg:w-2/3 flex-grow lg:p-20 h-fit flex flex-col items-start text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          We invite new <span className="block">workers to the team!</span>
        </h2>
        <p className="mb-5 text-sm text-gray-400 sm:text-base">
          Predictive analytics is the practice of using data, statistical
          algorithms, and machine learning techniques to identify the likelihood
          of future outcomes based on historical data. With predictive
          analytics, businesses can improve performance.
        </p>
        {/* Divider */}
        <div className="w-full border-t border-gray-300 my-4"></div>
        {/* Star Rating */}
        <Rating name="read-only" value={5} readOnly />
        {/* Review Count */}
        <p className="mt-2 text-yellow-500 text-xs sm:text-sm">
          Based on 10,000+ reviews
        </p>
      </div>

      {/* Tailwind CSS Animations */}
      <style jsx>{`
        @keyframes spin-smooth {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes counter-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes text-counter {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-smooth {
          animation: spin-smooth 45s linear infinite;
        }
        .animate-counter-rotate {
          animation: counter-rotate 10s linear infinite;
        }
        .animate-text-counter {
          animation: text-counter 10s linear infinite;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
