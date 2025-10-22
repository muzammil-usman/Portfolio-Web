// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-green-500/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-green-500" />
            <span className="text-white font-semibold">Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="text-white font-semibold">by Your Name</span>
          </div>

          <div className="text-gray-400">
            © {currentYear} All rights reserved.
          </div>

          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-green-500 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
