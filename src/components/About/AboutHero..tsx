"use client";
import React, { useEffect, useState } from "react";
import { FaShieldAlt, FaHeadset, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(darkModePreference);

    const listener = (e: MediaQueryListEvent): void => setIsDarkMode(e.matches);
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-6 md:px-16 py-20 min-h-screen font-roboto">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-16">
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-10 pt-10 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 tracking-wide leading-tight">
            Total Xproguard Pvt. Ltd.
          </h1>

          <div className="bg-gradient-to-r from-blue-700 to-cyan-600 p-6 rounded-2xl shadow-2xl mt-6">
            <p className="text-2xl md:text-3xl font-serif font-medium text-white">
              A premier mobile security organization dedicated to safeguarding
              your digital world.
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
            Xproguard leads the charge in mobile security. We deliver
            cutting-edge data safety and privacy protection to ensure your
            digital life remains safe.
          </p>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { icon: FaShieldAlt, text: "Tailored Solutions" },
              { icon: FaHeadset, text: "24/7 Support" },
              { icon: FaChartLine, text: "Expert Analysis" },
            ].map(({ icon: Icon, text }, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-3 group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                  <Icon className="text-2xl text-white" />
                </div>
                <span className="text-lg font-medium text-gray-100">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e2a4b2387f378691019c8b_about-image-06.avif"
              alt="About Us"
              className="w-full h-auto rounded-3xl object-cover transform hover:scale-105 transition-all duration-300 -hue-rotate-90"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-full h-[2px] bg-gradient-to-r from-cyan-300 to-blue-500 mt-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
      />

      <motion.div className="max-w-6xl w-full py-10 text-white mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1,200+", label: "Clients Protected" },
            { number: "30", label: "Countries with Global Reach" },
            { number: "250+", label: "Cyber Security Experts" },
            { number: "15+", label: "Years of Experience" },
          ].map(({ number, label }, index) => (
            <motion.div key={index} className="space-y-3">
              <h4 className="text-5xl sm:text-4xl md:text-6xl font-bold text-gray-400">
                {number}
              </h4>
              <p className="text-base sm:text-sm md:text-lg text-gray-300">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
