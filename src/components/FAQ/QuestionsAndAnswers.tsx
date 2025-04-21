"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function QuestionsAndAnswers() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.2);
    window.scrollTo(0,0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is the Intelligent Analytics Suite?",
      answer:
        "The Intelligent Analytics Suite is a software solution that offers advanced analytics capabilities to businesses, allowing them to collect, analyze, and visualize data from various sources to gain insights and intelligence for informed decision-making.",
    },
    {
      question: "How does the Intelligent Analytics Suite work?",
      answer:
        "The Intelligent Analytics Suite collects data from multiple sources, such as customer data, sales data, and operational data, and uses advanced analytics algorithms to analyze and derive insights from the data. The insights are then visualized through reports and dashboards for easy interpretation and decision-making.",
    },
    {
      question: "What types of data can the IAS analyze?",
      answer:
        "The Intelligent Analytics Suite can analyze a wide range of data, including structured and unstructured data from various sources, such as databases, spreadsheets, CRM systems, social media, and more.",
    },
    {
      question: "What industries can benefit from the IAS?",
      answer:
        "The Intelligent Analytics Suite can benefit businesses in various industries, including but not limited to retail, e-commerce, finance, healthcare, manufacturing, telecommunications, and more.",
    },
    {
      question: "What are the key benefits of using the IAS?",
      answer:
        "The key benefits of using the Intelligent Analytics Suite include data-driven decision-making, improved operational efficiency, enhanced customer understanding, competitive advantage, real-time monitoring and alerts, and customization and scalability.",
    },
    {
      question: "Is the Intelligent Analytics Suite scalable?",
      answer:
        "Yes, the Intelligent Analytics Suite is scalable, allowing businesses to easily scale the solution as their business grows. This makes it a flexible and adaptable solution that can evolve with the changing needs of the business.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 text-white overflow-hidden pt-16"> {/* Added pt-16 for space from the top */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 text-center max-w-6xl px-4"
      >
        <h2 className="text-4xl sm:text-5xl text-center mb-10 font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text max-w-3xl mx-auto">
          We're the best and we can explain why
        </h2>
        <p className="text-center text-xl sm:text-2xl font-medium text-blue-200 mb-12">
          The Smart Sales Assistant provides insights into customer behavior and preferences, allowing you to optimize marketing and sales strategies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl shadow-lg bg-gray-900 hover:bg-gray-800 transition duration-300 p-6 w-full"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3
                className={`font-semibold text-lg sm:text-xl transition-colors duration-300 ${
                  openIndex === index ? "text-blue-500" : "text-blue-200"
                }`}
              >
                {item.question}
              </h3>
              <span
                className={`text-3xl transition-transform duration-300 transform ${
                  openIndex === index ? "text-blue-500" : "text-blue-400"
                }`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <div className="mt-4 p-4 border-t border-gray-600 rounded-lg transition-opacity duration-500 opacity-100">
                <p className="text-blue-200 text-lg leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Background Image Below Content with Twinkling Stars */}
      <div className="relative mt-12 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-80 sm:h-96 bg-cover bg-center rounded-lg overflow-hidden" style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/643e232532628163609bd651/645936d4b68c6362cf107667_mapbase%20(1).png')",
          filter: "hue-rotate(300deg)",
        }}>
        {/* Twinkling Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
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
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.2; transform: scale(1); }
        }
        .animate-twinkle {
          animation: twinkle 3s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
}
