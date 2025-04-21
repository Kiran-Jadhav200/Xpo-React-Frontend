import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MissionandVision() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 min-h-[40vh] text-white rounded-lg font-roboto">
      <div className="container mx-auto p-6 md:p-8 rounded-lg flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 w-full">
        
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-left space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">Our Mission</h2>
          <p className="text-xl md:text-2xl text-gray-200 hover:text-white transition duration-300">
            To provide top-tier cybersecurity solutions that protect businesses and individuals from evolving digital threats.
          </p>
        </motion.div>

        {/* Middle Section (Images) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-60 h-60 md:w-80 md:h-80 flex items-center justify-center flex-1"
        >
          <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full"></div>
          <img 
            src="https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e42412a75f0eb7e72b5d14_pattern-01.svg" 
            alt="Background Pattern" 
            className="absolute w-full h-full object-cover opacity-50"
            style={{ filter: "hue-rotate(240deg)" }}
          />              

          <img 
            src="https://cdn.prod.website-files.com/66de97f960472d67e55ab299/66e1342a1eebb38571fd4f9a_pattern-03.svg" 
            alt="Foreground Pattern" 
            className="relative w-3/4 h-3/4 object-contain hover:scale-105 transition-transform duration-500"
            style={{ filter: "hue-rotate(280deg)" }}
          />          
          
        </motion.div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: loaded ? 1 : 0, x: loaded ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center md:text-right space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide">Our Vision</h2>
          <p className="text-xl md:text-2xl text-gray-200 hover:text-white transition duration-300">
            A world where every organization operates securely, free from cyber risks and vulnerabilities.
          </p>
        </motion.div>
        
      </div>
    </div>
  );
}
