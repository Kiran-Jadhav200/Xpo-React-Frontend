import { Link } from "react-router-dom";
import React from "react";
// import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import Logo from "../assets/icons";
import Facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/instagram.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import X from "../assets/icons/x.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/xproguard",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/xproguard/#",
    },
    { name: "X", icon: X, href: "https://x.com/xproguard" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/company/xproguard",
    },
  ];

  return (
    <footer className="w-full text-white px-10 md:px-20 py-14">
      {/* Main Footer Layout */}
      <div className="w-full flex flex-col lg:flex-row justify-between">
        {/* Left Section - Brand and Newsletter */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center mb-4">
            <img src={Logo} alt="Xproguard Logo" className="h-10 mr-2" />
            <h3 className="text-xl font-bold">XPROGUARD</h3>
          </div>
          <p className="text-gray-400">Stay updated with our Products</p>
          <div className="flex mt-4 gap-2 mb-2">
            <input
              type="email"
              placeholder="Your email here"
              className="w-full md:w-[65%] h-[48px] rounded-[10px] border border-[#52CDDD] bg-transparent text-white p-3 focus:outline-none"
            />
            <button className="px-8 rounded-[10px] text-white border border-[#52CDDD] hover:bg-blue-700 transition-colors">
              Join
            </button>
          </div>
          <p className="text-sm w-[80%] text-gray-500  mr-5">
            By subscribing you agree to our{" "}
            <a href="/privacy-policy" className="underline">
              Privacy Policy
            </a>{" "}
            and provide consent to receive updates from our company.
          </p>
        </div>

        {/* Right Section - Quick Links, Resources, and Social Links */}
        <div className="w-full lg:w-1/2 flex justify-around mt-10 lg:mt-0 ml-auto">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#52CDDD] mb-4">
              Quick Links
            </h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/support">Support Center</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-[#52CDDD] mb-4">
              Resources
            </h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/feedback">Feedback</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#52CDDD] mb-4">
              Follow Us
            </h3>
            <div className="flex flex-col space-y-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center cursor-pointer transition-colors group"
                >
                  <Icon className="w-6 h-6 mr-2 text-blue-600 group-hover:text-blue-600" />
                  <span className="text-sm group-hover:text-white">{name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">
          © {currentYear} Total Xproguard. All rights reserved.
        </p>
        <div className="flex space-x-6 text-gray-400">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-white">
            Terms of Service
          </a>
          <a href="/cookies-settings" className="hover:text-white">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
