// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Code2, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#777C6D]/30 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-40 h-40 -top-20 -left-20 bg-[#777C6D] rounded-full opacity-5"></div>
        <div className="absolute w-32 h-32 -bottom-16 -right-16 bg-[#B7B89F] rounded-full opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Made with love section */}
          <div className="flex items-center gap-3 bg-[#222222] px-4 py-2 rounded-2xl border border-[#777C6D]/20">
            <Code2 className="w-5 h-5 text-[#777C6D]" />
            <span className="text-[#CBCBCB] font-medium text-sm">
              Made with
            </span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            <span className="text-[#CBCBCB] font-medium text-sm">by</span>
            <span className="text-[#B7B89F] font-semibold text-sm">
              Muzammil Usman
            </span>
            <Sparkles className="w-4 h-4 text-[#777C6D]" />
          </div>

          {/* Copyright */}
          <div className="text-[#CBCBCB] text-sm bg-[#222222] px-4 py-2 rounded-2xl border border-[#777C6D]/10">
            © {currentYear} All rights reserved.
          </div>

          {/* Navigation Links */}
          <div className="flex gap-4 bg-[#222222] px-4 py-2 rounded-2xl border border-[#777C6D]/20">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/projects", label: "Projects" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[#CBCBCB] hover:text-[#777C6D] transition-all duration-300 hover:scale-110 text-sm font-medium px-2 py-1 rounded-lg hover:bg-[#777C6D]/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-6 pt-6 border-t border-[#777C6D]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <div className="text-[#CBCBCB] text-xs opacity-70">
              Crafting beautiful digital experiences
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[#CBCBCB] text-xs opacity-70">
                <div className="w-2 h-2 bg-[#777C6D] rounded-full animate-pulse"></div>
                Available for freelance work
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
