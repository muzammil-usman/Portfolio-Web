// src/pages/Home.jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/image.jpg";

import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import CustomCursor from "../components/CustomCursor";

const Home = () => {
  const heroRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();
  const titleRefs = useRef([]);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background shapes animation
    gsap.fromTo(
      ".bg-shape",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.03, duration: 2, stagger: 0.2, ease: "power2.out" }
    );

    // Main content animation
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .fromTo(
        titleRefs.current,
        { y: 100, opacity: 0, rotationX: 90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=1"
      )
      .fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { scale: 0, rotationY: 180 },
        { scale: 1, rotationY: 0, duration: 1.5, ease: "elastic.out(1, 0.5)" },
        "-=0.3"
      )
      .fromTo(
        buttonRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

    // Continuous floating animation for shapes
    gsap.to(".bg-shape", {
      y: "+=20",
      rotation: "+=10",
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.5,
    });

    // Text shimmer effect
    gsap.to(".shimmer-text", {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const addToTitleRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  const addToButtonRefs = (el) => {
    if (el && !buttonRefs.current.includes(el)) {
      buttonRefs.current.push(el);
    }
  };

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-[#1a1a1a] relative overflow-hidden"
    >
      <CustomCursor />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape absolute w-96 h-96 -top-48 -left-48 bg-[#777C6D] rounded-full"></div>
        <div className="bg-shape absolute w-80 h-80 -bottom-40 -right-40 bg-[#B7B89F] rounded-full"></div>
        <div className="bg-shape absolute w-64 h-64 top-1/2 left-1/3 bg-[#CBCBCB] rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#777C6D] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-[#222222] px-6 py-3 rounded-2xl border border-[#777C6D]/20">
                <div className="w-2 h-2 bg-[#777C6D] rounded-full animate-pulse"></div>
                <span className="text-[#B7B89F] text-sm font-medium tracking-wide">
                  Available for freelance work
                </span>
                <Sparkles className="w-4 h-4 text-[#777C6D]" />
              </div>

              {/* Main Title - Better Styling */}
              <div className="space-y-2">
                <h1
                  ref={(el) => addToTitleRefs(el)}
                  className="text-2xl lg:text-3xl font-light text-[#CBCBCB] tracking-wide"
                >
                  Hello, I am
                </h1>

                <h1
                  ref={(el) => addToTitleRefs(el)}
                  className="shimmer-text text-4xl lg:text-6xl font-bold bg-linear-to-r from-[#777C6D] via-[#B7B89F] to-[#CBCBCB] bg-size-[200%_auto] bg-clip-text text-transparent leading-tight"
                >
                  Muzammil Usman
                </h1>

                <h1
                  ref={(el) => addToTitleRefs(el)}
                  className="text-2xl lg:text-4xl font-semibold text-[#EEEEEE] leading-relaxed"
                >
                  Frontend Web Developer
                </h1>
              </div>

              {/* Description */}
              <p
                ref={textRef}
                className="text-lg text-[#CBCBCB] leading-relaxed max-w-2xl mt-6"
              >
                I specialize in creating{" "}
                <span className="text-[#777C6D] font-semibold">beautiful</span>,
                <span className="text-[#B7B89F] font-semibold">
                  {" "}
                  functional
                </span>
                , and
                <span className="text-[#CBCBCB] font-semibold">
                  {" "}
                  responsive
                </span>{" "}
                web experiences using React, JavaScript, and modern
                technologies.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <Link
                  ref={addToButtonRefs}
                  to="/projects"
                  className="group relative inline-flex items-center gap-3 bg-linear-to-r from-[#777C6D] to-[#B7B89F] text-[#1a1a1a] px-8 py-4 rounded-2xl font-semibold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-linear-to-r from-[#B7B89F] to-[#777C6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>

                <a
                  ref={addToButtonRefs}
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center gap-3 bg-transparent text-[#EEEEEE] px-8 py-4 rounded-2xl font-semibold border-2 border-[#777C6D]/30 transition-all duration-500 hover:border-[#777C6D] hover:bg-[#777C6D]/10 hover:scale-105"
                >
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
                {[
                  {
                    icon: Github,
                    href: "https://github.com",
                    color: "hover:text-[#777C6D]",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    color: "hover:text-[#B7B89F]",
                  },
                  {
                    icon: Mail,
                    href: "mailto:muzammilusman@example.com",
                    color: "hover:text-[#CBCBCB]",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    ref={addToButtonRefs}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-[#222222] rounded-2xl flex items-center justify-center text-[#CBCBCB] border border-[#777C6D]/10 transition-all duration-500 hover:scale-110 hover:border-[#777C6D]/30 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Image/Visual */}
            <div className="relative">
              <div
                ref={imageRef}
                className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto"
              >
                {/* Main Image Container */}
                <div className="absolute inset-0 bg-linear-to-br from-[#777C6D] to-[#B7B89F] rounded-3xl opacity-20 animate-pulse"></div>

                <div className="absolute inset-4 bg-[#222222] rounded-3xl flex items-center justify-center border border-[#777C6D]/20 overflow-hidden">
                  {/* Your Image - Full Cover */}
                  <div className="w-full h-full relative group">
                    <img
                      src={myImage}
                      alt="Muzammil Usman"
                      className=" object-contain group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-[#EEEEEE] text-sm font-semibold bg-[#1a1a1a]/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        Muzammil Usman
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <FloatingBadge
                  text="React"
                  position="top"
                  side="right"
                  color="#777C6D"
                />
                <FloatingBadge
                  text="JavaScript"
                  position="bottom"
                  side="left"
                  color="#B7B89F"
                />
                <FloatingBadge
                  text="Firebase"
                  position="middle"
                  side="left"
                  color="#CBCBCB"
                />
                <FloatingBadge
                  text="Tailwind"
                  position="middle"
                  side="right"
                  color="#777C6D"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Skills Section */}
      <SkillsSection />
    </div>
  );
};

// Floating Badge Component
const FloatingBadge = ({ text, position, side, color }) => {
  const badgeRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      badgeRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: Math.random() * 1,
        ease: "back.out(1.7)",
      }
    );

    gsap.to(badgeRef.current, {
      y: "+=15",
      duration: 2 + Math.random(),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  const getPositionClasses = () => {
    const vertical =
      position === "top"
        ? "-top-6"
        : position === "bottom"
        ? "-bottom-6"
        : "top-1/2 -translate-y-1/2";
    const horizontal = side === "left" ? "-left-8" : "-right-8";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div
      ref={badgeRef}
      className={`absolute ${getPositionClasses()} bg-[#222222] px-4 py-2 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg`}
      style={{ borderColor: `${color}30`, color }}
    >
      <span className="font-semibold text-sm whitespace-nowrap">{text}</span>
    </div>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skillsRef = useRef();
  const skillItemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      skillItemsRef.current,
      { y: 60, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const skills = [
    { name: "React Development", level: 95, color: "#777C6D" },
    { name: "JavaScript", level: 90, color: "#B7B89F" },
    { name: "Smooth Animations", level: 88, color: "#CBCBCB" },
    { name: "Tailwind CSS", level: 92, color: "#777C6D" },
    { name: "Responsive Design", level: 94, color: "#B7B89F" },
    { name: "UI/UX Design", level: 85, color: "#CBCBCB" },
  ];

  const addToSkillRefs = (el) => {
    if (el && !skillItemsRef.current.includes(el)) {
      skillItemsRef.current.push(el);
    }
  };

  return (
    <section ref={skillsRef} className="py-24 bg-[#222222] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#EEEEEE] mb-6">
            My{" "}
            <span className="shimmer-text bg-linear-to-r from-[#777C6D] via-[#B7B89F] to-[#CBCBCB] bg-size-[200%_auto] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-[#CBCBCB] max-w-2xl mx-auto">
            Technologies and tools I use to create amazing web experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={addToSkillRefs}
              className="group bg-[#2a2a2a] p-6 rounded-3xl border border-[#777C6D]/10 hover:border-[#777C6D]/30 transition-all duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-4">
                <span
                  className="font-semibold text-lg group-hover:scale-105 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </span>
                <span className="text-[#B7B89F] bg-[#222222] px-3 py-1 rounded-full text-sm">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-[#222222] rounded-full h-2 overflow-hidden">
                <div
                  className="h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                  style={{
                    backgroundColor: skill.color,
                    width: "0%",
                  }}
                  ref={(el) => {
                    if (el) {
                      setTimeout(() => {
                        gsap.to(el, {
                          width: `${skill.level}%`,
                          duration: 2,
                          delay: index * 0.2,
                          ease: "power2.out",
                        });
                      }, 800);
                    }
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
