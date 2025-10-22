// src/components/Header.jsx
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, Sparkles } from "lucide-react";
import gsap from "gsap";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();
  const headerRef = useRef();
  const logoRef = useRef();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    // Header animations
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 1, delay: 0.2, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      ".nav-item",
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  // Inline styles object
  const styles = {
    header: {
      background: "rgba(26, 26, 26, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(119, 124, 109, 0.15)",
    },
    logoGradient: {
      background: "linear-gradient(135deg, #777C6D 0%, #B7B89F 100%)",
    },
    navUnderline: {
      background: "linear-gradient(90deg, #777C6D 0%, #B7B89F 100%)",
    },
    mobileNav: {
      background: "rgba(26, 26, 26, 0.98)",
      backdropFilter: "blur(25px)",
    },
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={styles.header}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5 h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" ref={logoRef}>
            <div className="relative">
              <div
                className="p-3 rounded-2xl group-hover:scale-110 transition-transform duration-500"
                style={styles.logoGradient}
              >
                <Code2 className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <Sparkles className="w-3 h-3 text-[#B7B89F] absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span
                className="font-bold text-xl text-[#EEEEEE] tracking-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Muzammil Usman
              </span>
              <span
                className="text-xs text-[#B7B89F]"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                Frontend Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex list-none gap-10">
              {navItems.map((item, index) => (
                <li key={item.name} className="nav-item">
                  <Link
                    to={item.path}
                    className="relative py-2 group transition-all duration-500"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "500",
                      color:
                        location.pathname === item.path ? "#777C6D" : "#CBCBCB",
                    }}
                  >
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full transform origin-left transition-all duration-500"
                      style={{
                        ...styles.navUnderline,
                        transform:
                          location.pathname === item.path
                            ? "scaleX(1)"
                            : "scaleX(0)",
                      }}
                    ></span>
                    <style jsx>{`
                      .group:hover span {
                        transform: scaleX(1) !important;
                      }
                      .group:hover {
                        color: #b7b89f !important;
                      }
                    `}</style>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex flex-col gap-1 bg-transparent border-none cursor-pointer p-2 md:hidden nav-item transition-colors duration-300"
            style={{ color: "#CBCBCB" }}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden absolute top-18 left-0 right-0 border-b"
            style={{
              ...styles.mobileNav,
              borderColor: "rgba(119, 124, 109, 0.15)",
            }}
          >
            <nav className="container mx-auto px-6 py-6">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-4 transition-all duration-500 border-l-4 pl-6"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: "500",
                        color:
                          location.pathname === item.path
                            ? "#777C6D"
                            : "#CBCBCB",
                        borderLeftColor:
                          location.pathname === item.path
                            ? "#777C6D"
                            : "transparent",
                        backgroundColor:
                          location.pathname === item.path
                            ? "rgba(119, 124, 109, 0.05)"
                            : "transparent",
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #222222;
        }
        ::-webkit-scrollbar-thumb {
          background: #777c6d;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #b7b89f;
        }

        /* Selection Color */
        ::selection {
          background: #b7b89f;
          color: #1a1a1a;
        }

        /* Floating Animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        /* Pulse Animation */
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
