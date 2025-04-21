"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-20 text-center relative font-roboto">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('/aboutusPageImg.svg')` }}
      ></div>

      {/* Heading */}
      <h2 className="text-6xl md:text-6xl bg-clip-text text-transparent font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 mb-16 tracking-wide relative z-10">
        About Us
      </h2>

      {/* Card Container */}
      <div className="flex justify-center gap-12 flex-wrap relative z-10">
        {[
          {
            title: "Secure your data",
            text: "Protect sensitive information from cyber threats with top-tier security.",
            img: "https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e15e786fc39a3ee83aff1f_icon-04.svg",
          },
          {
            title: "Stay ahead of attacks",
            text: "Get proactive protection against evolving cyber threats.",
            img: "https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e15e78cc629ecd762b5eaf_icon-05.svg",
          },
          {
            title: "Keep operations running",
            text: "Ensure smooth business continuity with robust cybersecurity.",
            img: "https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e15e78b3c13d6aa826c732_icon-06.svg",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 15px rgba(0, 91, 128, 0.5)",
              transition: { duration: 0.2 },
            }}
            className="w-full sm:w-[320px] md:w-[340px] lg:w-[350px] bg-gradient-to-r from-[#003366] to-[#005b80] p-6 rounded-3xl shadow-lg relative overflow-hidden group transition-all duration-200"
          >
            {/* Circular Image with Fixed Centering & Smaller Size on Large Screens */}
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto mb-6 overflow-hidden rounded-full border-4 border-[#d1d1d1] flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-3/4 h-3/4 object-contain" // Adjusted size for centering
              />
            </div>

            {/* Card Title */}
            <h3 className="text-3xl font-semibold mt-4 text-white tracking-wide">
              {item.title}
            </h3>

            {/* Card Description */}
            <p className="text-lg mt-4 text-[#d1d1d1]">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 flex flex-col md:flex-row justify-center items-center relative z-10">
        <h3 className="text-3xl md:text-4xl font-semibold text-white text-center md:text-left mb-4 md:mb-0 md:mr-4">
          Ready to experience the difference?
        </h3>
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
          onClick={() => navigate("/products")}
        >
          Get started
        </button>
      </div>
    </section>
  );
}
