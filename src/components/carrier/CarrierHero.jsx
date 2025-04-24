import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';

export default function CarrierHero() {
  // This function will smoothly scroll to the element with the name "jobListings"
  const scrollToJobs = () => {
    scroller.scrollTo('jobListings', {
      duration: 500,
      smooth: true,
      offset: -70, // Adjust this offset as needed (e.g. for fixed headers)
    });
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center text-center text-white overflow-hidden px-6 sm:px-12 lg:px-24">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/643e232532628163609bd651/645936d4b68c6362cf107667_mapbase%20(1).png')",
          transform: `scale(1.1) translateY(${offset}px)`,
        }}
      ></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 opacity-60 animate-gradientMove"></div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-0 animate-twinkle"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl animate-fadeIn font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
          Join Our Team
        </h1>
        <p className="mt-4 text-lg sm:text-xl animate-fadeIn delay-200">
          Be part of a team that's shaping the future of Security Applications.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToJobs}
          className="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 sm:text-lg transition-all duration-200"
        >
          View Open Positions
        </motion.button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
