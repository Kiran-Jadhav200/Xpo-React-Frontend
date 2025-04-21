import React from "react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"]
});

const Results = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`container max-w-24/25 mx-auto px-px py-12 sm:py-20 lg:py-28 sm:justify-center sm:align-middle ${roboto.className}`}
      style={{ width: "100%", height: "120%" }}
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-37 lg:gap-24">
        {/* Left section: Full image coverage */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full md:w-1/2 relative"
        >
          <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[90vh] lg:h-[75vh] flex justify-center px-4 sm:px-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-30 blur-3xl rounded-full z-0"></div>
            <motion.img
              whileHover={{ scale: 1.05 }} // Slightly bigger on hover
              transition={{ duration: 0.2 }}
              src="/SecurityIllustration.svg"
              alt="Security illustration"
              className="w-full h-full object-cover relative z-10 cursor-pointer"
            />
          </div>
        </motion.div>

        {/* Right section: Updated content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 mt-8 md:mt-16 lg:mt-24 flex flex-col justify-start items-start pr-0 md:pr-12 lg:pr-16 xl:pr-20 sm:justify-center sm:align-middle"
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center lg:text-left"
          >
            <h2 className="font-bold text-gray-300 text-lg sm:text-2xl mb-6">
              Why Choose Xproguard?
            </h2>
            <h1 className="text-3xl sm:text-3xl md:text-6xl font-extrabold mb-6">
              Your {" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
                Digital Safety
              </span>{" "}
              is Our Priority
            </h1>
            <p className="text-gray-300 text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0">
              Xproguard provides a suite of security apps designed to safeguard
              your personal and professional data from online threats. Whether
              it's firewall protection, secure browsing, or data privacy, we’ve
              got you covered.
            </p>
          </motion.div>

          {/* List of Features */}
          <div className="mt-8 flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full text-center lg:text-left">
              <div className="text-gray-300 text-base sm:text-lg mx-auto lg:mx-0">
                <ul className="flex flex-col justify-center items-center lg:items-start">
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">✅</span> Advanced
                    Encryption Technology
                  </li>
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">✅</span> Fast &
                    Reliable Performance
                  </li>
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">✅</span> 100M+ Users
                    Worldwide
                  </li>
                </ul>
              </div>
              <div className="text-gray-300 text-base sm:text-lg mx-auto lg:mx-0">
                <ul className="flex flex-col justify-center items-center lg:items-start">
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">✅</span> AI-Powered
                    Security
                  </li>
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">✅</span>{" "}
                    Cross-Platform Compatibility
                  </li>
                  <li className="flex items-center mb-4">
                    <span className="text-green-500 mr-2">✅</span> 100M+ Users
                    Worldwide
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Results;
