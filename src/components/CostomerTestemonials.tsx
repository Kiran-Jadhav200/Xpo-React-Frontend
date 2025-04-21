import React from "react";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export default function CustomerTestimonials() {
  return (
    <div className={`${roboto.className} w-full text-white py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl sm:text-3xl font-bold">
            Customer Testimonials
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mt-4">
            Xproguard has transformed my mobile security experience!
          </p>
        </div>
        <div className="flex justify-start gap-14 flex-wrap lg:flex-nowrap">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-[#45acf1] rounded-2xl p-8 bg-[#0d1a2b] hover:bg-[#112240] transition-colors duration-300 shadow-lg hover:shadow-xl w-full lg:w-[65%] xl:w-[58%] 2xl:w-[45%] min-h-[250px]"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={starIndex < testimonial.rating ? "#1fb6ff" : "#374151"}
                    className="w-6 h-6"
                  >
                    <path d="M12 2.25l3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.38 2 9.5l6.91-1L12 2.25z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.message}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#45acf1]"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    rating: 4,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://s3-alpha-sig.figma.com/img/1627/f3a8/70e9b56d751d07f53392d7a84aa55817",
    name: "Jane Doe",
    position: "Security Analyst, TechCorp",
  },
  {
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://s3-alpha-sig.figma.com/img/4cb0/f7aa/5245236365452657ee64b1d5dea36b96",
    name: "John Smith",
    position: "IT Director, SecureTech",
  },
  {
    rating: 5,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    image: "https://s3-alpha-sig.figma.com/img/a2ae/545b/bbfab5469bc6fad04c1f335d46af7d36",
    name: "Name Surname",
    position: "Position, Company Name",
  },
];
