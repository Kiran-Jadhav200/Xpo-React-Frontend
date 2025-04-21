import { useScroll, useTransform, } from "framer-motion";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Montserrat } from "next/font/google";
// import { Playfair_Display } from "next/font/google";
// import Image from "next/image";

// Font instances
// const montserrat = Montserrat({ subsets: ["latin"] });
// const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(17, 24, 39, 0)", "rgba(17, 24, 39, 0.95)"]
  );

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (value) => {
      setIsScrolled(value > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Support", href: "/feedback" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`w-full z-50 transition-shadow duration-500 ${
        isScrolled ? "shadow-lg backdrop-blur-sm" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center space-x-1"
          >
            <Link to="/" className="flex items-center space-x-1">
              <Image src="/logo.svg" alt="Logo" width={54} height={49} />
              {/* <span
                className={`${playfair.className} w-[195px] h-[36px] font-extrabold text-custom-font md:text-3xl`}
              >
                XPROGUARD
              </span> */}
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-5">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.7 }}
                >
                  <Link
                    to={item.href}
                    className={`text-gray-300 hover:text-white transition-colors duration-300 ${
                      location.pathname === item.href ? "text-blue-400" : ""
                    } hover:bg-blue-500 hover:bg-opacity-25 px-3 py-2 rounded-md`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-[112px] h-[40px] px-4 py-2 rounded-xl border-[1px] border-[#52CDDD] text-white bg-transparent hover:bg-[#00102E] transition-all duration-300"
              >
                Download
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: isMenuOpen ? 0 : "-100%" }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 w-full h-full bg-gray-800 z-50 p-6 md:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={toggleMenu}
                className={`text-gray-300 hover:text-white text-xl ${
                  location.pathname === item.href ? "text-blue-400" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="px-4 py-2 rounded-full border-2 border-[#52CDDD] text-white bg-transparent hover:bg-[#52CDDD] transition-all duration-300">
              Download
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
