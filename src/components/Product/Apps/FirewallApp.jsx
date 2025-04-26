import React from "react";
import { motion } from "framer-motion";
import firewall1 from "../../../assets/images/Firewall_1.png";
import firewall2 from "../../../assets/images/Firewall_2.png";
import encrypted from "../../../assets/images/encrypted.png";
import onboard from "../../../assets/images/onboard.png";
import firewall3 from "../../../assets/Products/Firewall/firewall_Image3.svg"
import googlePlay from "../../../assets/appicon/Google_Play_Store_badge_EN.svg";


// Product data
const productData = {
  id: "firewall",
  name: "Xproguard Firewall",
  shortDescription:
    "Xproguard Firewall is an internet security app that restricts apps' access to the internet.",
  detailedDescription:
    "Xproguard Firewall lets you control app access to the internet with whitelist and blacklist options. It blocks hackers, prevents unauthorized access, and safeguards your device from online threats.",
  title2: "Explore the Essential Features of Xproguard Firewall",
  icon: firewall1,
  icon2: firewall2,
  features: [
    {
      title: "Complete Internet Control",
      description:
        "Manage app access to the internet with whitelist and blacklist options.",
    },
    {
      title: "Strong Security & Privacy",
      description:
        "Blocks hackers and safeguards your device from online threats.",
    },
    {
      title: "No-Root Firewall Solution",
      description:
        "Works without root using VPN interface to filter traffic locally.",
    },
    {
      title: "User-Friendly & Ad-Free",
      description:
        "Clean interface, dark mode support, and no ads for smooth experience.",
    },
  ],
  stats: {
    downloads: "1000+",
    playstoreRating: "4.4",
  },
  playStoreLink:
    "https://play.google.com/store/apps/details?id=com.xproguard.firewall&hl=en",
  // appStoreLink: "#",
};

const FeatureCard = ({ feature }) => (
  <div className="w-full max-w-xs bg-transparent p-4">
    <div className="flex flex-col items-start gap-y-4">
      <img src={encrypted} alt="Feature" className="w-8 h-8 object-contain" />
      <h1 className="text-xl font-bold text-white break-words">
        {feature.title}
      </h1>
      <p className="text-sm text-gray-400">{feature.description}</p>
    </div>
  </div>
);

function FirewallApp() {
  const product = productData;

  return (
    <div className="min-h-screen w-full bg-[#020c1b] text-white flex flex-col items-center px-6 py-20">
      {/* Desktop View */}
      <motion.div
        className="hidden lg:block bg-[#06152B] p-10 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-8 flex flex-col items-center justify-center gap-y-20">
          <div>
            <h1 className="text-6xl font-extrabold">{product.name}</h1>
            <p className="text-sm w-[40vw] text-gray-300 mt-2">
              {product.detailedDescription || product.shortDescription}
            </p>
          </div>

          {/* Product Showcase */}
          <div className="relative w-[60vw] h-auto flex justify-center items-center mb-4">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="rounded-full bg-[#43B5D3] opacity-10 w-[50vw] h-[50vw] blur-3xl">
                {" "}
              </div>
              <img
                src={onboard}
                alt="Background"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-70 w-[20vw]"
              />
            </div>
            <img
              src={product.icon}
              alt={product.name}
              className="relative z-10 w-[20vw] h-auto object-contain rounded-[50px] border-2 border-black/90"
            />
          </div>
        </div>

        {/* Stats */}
        {(product.stats?.downloads || product.stats?.playstoreRating) && (
          <motion.div
            className="flex justify-center gap-8 text-gray-300 text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {product.stats.downloads && (
              <div>
                <p className="font-semibold text-white">Downloads</p>
                <p>{product.stats.downloads}</p>
              </div>
            )}
            {product.stats.playstoreRating && (
              <div>
                <p className="font-semibold text-white">Rating</p>
                <p>⭐ {product.stats.playstoreRating}</p>
              </div>
            )}
          </motion.div>
        )}

        {/* Features Section */}
        <div className="text-center mt-16">
          <h1 className="text-5xl font-bold mb-4">{product.title2}</h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            {product.detailedDescription}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="flex flex-col items-end gap-6">
            <FeatureCard feature={product.features[0]} />
            <FeatureCard feature={product.features[1]} />
          </div>

          <div className="flex justify-center items-center">
            <img
              src={product.icon2}
              alt={product.name}
              className="w-full h-full object-contain rounded-[50px]"
            />
          </div>

          <div className="flex flex-col items-start gap-6">
            <FeatureCard feature={product.features[2]} />
            <FeatureCard feature={product.features[3]} />
          </div>
        </div>
      </motion.div>

      {/* Mobile View */}
      <div className="block lg:hidden px-4 py-10">
        <h1 className="text-3xl font-bold text-center mb-4">{product.name}</h1>
        <p className="text-sm text-gray-300 text-center mb-6">
          {product.shortDescription}
        </p>
        <div className="w-full flex justify-center mb-6">
          <img
            src={product.icon}
            alt={product.name}
            className="w-[60%] h-auto object-contain rounded-3xl border border-black/80"
          />
        </div>

        {(product.stats?.downloads || product.stats?.playstoreRating) && (
          <div className="flex justify-around text-gray-300 text-sm mb-8">
            {product.stats.downloads && (
              <div className="text-center">
                <p className="font-semibold text-white">Downloads</p>
                <p>{product.stats.downloads}</p>
              </div>
            )}
            {product.stats.playstoreRating && (
              <div className="text-center">
                <p className="font-semibold text-white">Rating</p>
                <p>⭐ {product.stats.playstoreRating}</p>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col items-center gap-6">
          {product.features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} />
          ))}
        </div>

        {/* Store Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {product.playStoreLink && (
            <a
              href={product.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlePlay} alt="Google Play" className="h-10" />
            </a>
          )}
          {product.appStoreLink && (
            <a
              href={product.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
          )}
        </div>
      </div>

      {/* Protect Your Digital Life Section */}
      <div className="w-full bg-[#06152B] mt-32 py-20 px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl">
        {/* Text Content */}
        <div className="flex flex-col items-start max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Protect Your Digital Life Today
          </h1>
          <p className="text-gray-400 text-base mb-8">
            Download our top-rated security apps and stay safe online with
            Xproguard's powerful solutions.
          </p>
          <div className="flex gap-4">
            <a
              href={product.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlePlay} alt="Google Play" className="h-12" />
            </a>
            {/* IN future if you devlop appstore app you can add link here */}
            {/* <a
              href={product.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12"
              />
            </a> */}
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={firewall3}
            alt="Digital Protection"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="w-full bg-[#06152B] mt-20 py-20 px-6 flex flex-col items-center gap-10 rounded-3xl">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-center">
          What Our Customers Say
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          {[...Array(3)].map((_, idx) => {
            const testimonials = [
              {
                quote:
                  "Xproguard Firewall has made my phone much safer and faster! Highly recommend.",
                author: "- Rahul S.",
              },
              {
                quote:
                  "I love how simple and effective this app is. No ads, no nonsense!",
                author: "- Priya D.",
              },
              {
                quote:
                  "The best firewall app I have ever used. It just works perfectly!",
                author: "- Arjun M.",
              },
            ];

            const testimonial = testimonials[idx];

            return (
              <motion.div
                key={idx}
                className="bg-[#0a1a30] p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="text-white font-bold">{testimonial.author}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FirewallApp;
