import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface Product {
  name: string;
  icon: string;
  Policy: string;
  description: string;
}

const products: Product[] = [
  {
    name: "Xproguard Firewall",
    icon: "/icons/appicon/firewall.svg",
    Policy: "xproguard-firewall",
    description: "Advanced network protection and traffic monitoring system",
  },
  {
    name: "Xproguard PhotoVault",
    icon: "/icons/appicon/photovault.svg",
    Policy: "xproguard-photovault",
    description: "Secure encrypted storage for your private photos and videos",
  },
  {
    name: "Xproguard AppLock",
    icon: "/icons/appicon/Applock.svg",
    Policy: "xproguard-applock",
    description: "Biometric security for your sensitive applications",
  },
  {
    name: "Xproguard AntiTheft",
    icon: "/icons/appicon/antitheft.svg",
    Policy: "xproguard-antitheft",
    description: "Device tracking and remote wipe capabilities",
  },
  {
    name: "Xproguard VPN",
    icon: "/icons/appicon/photovault.svg",
    Policy: "xproguard-vpn",
    description: "Secure encrypted internet connection worldwide",
  },
  {
    name: "Xproguard Password Manager",
    icon: "/icons/appicon/passwordManager.svg",
    Policy: "xproguard-password-manager",
    description: "Military-grade password storage and auto-fill",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 0.5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#0F52BA] border border-black/10 rounded-2xl p-6 text-white w-full sm:w-[300px] h-[400px] flex flex-col justify-between shadow-lg hover:shadow-xl hover:bg-[#144bb8] transition-all"
    >
      <div className="flex flex-col items-center space-y-4">
        <img
          src={product.icon}
          alt={`${product.name} icon`}
          className="w-20 h-20 rounded-full bg-white p-2"
        />
        <h2 className="text-2xl font-bold text-center">{product.name}</h2>
        <p className="text-sm text-center text-neutral-200 min-h-[72px]">
          {product.description}
        </p>
      </div>
      <Link
        to={`/privacy-policy/${product.Policy}`}
        className="mt-6 w-full text-center py-3 bg-white/20 rounded-xl text-white hover:bg-white/30 transition-colors"
      >
        Learn More →
      </Link>
    </motion.div>
  );
};

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="px-5 py-10 min-h-screen bg-[#020c1b]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Glowing heading container */}
        <div className="relative mb-12 h-[20vh] flex items-center justify-center overflow-hidden rounded-xl">
          <div className="absolute top-10 inset-0 flex justify-center items-center pointer-events-none z-0">
            <div className="w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-gradient-to-br from-purple-500 to-fuchsia-600 blur-[100px] opacity-40 rounded-full"></div>
          </div>
          <motion.h1
            className="relative text-5xl font-extrabold text-white z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Privacy Policy
          </motion.h1>
        </div>

        <div className="flex flex-wrap justify-left gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
