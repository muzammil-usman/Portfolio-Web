// pages/About.jsx
import React, { useEffect, useRef } from "react";
import {
  Code2,
  Palette,
  Zap,
  Users,
  Sparkles,
  Target,
  Clock,
  Award,
} from "lucide-react";
import gsap from "gsap";
import CustomCursor from "../components/CustomCursor";

const About = () => {
  const heroRef = useRef();
  const titleRefs = useRef([]);
  const statsRefs = useRef([]);
  const servicesRefs = useRef([]);
  const imageRef = useRef();

  const stats = [
    { number: "2+", label: "Years Experience", icon: Clock },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "20+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Technologies", icon: Award },
  ];

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building responsive and scalable web applications using React, JavaScript, and modern frameworks.",
      color: "#777C6D",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces with Tailwind CSS and modern design principles.",
      color: "#B7B89F",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, SEO, and better user experience.",
      color: "#CBCBCB",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in teams using Git, Agile methodologies, and clear communication.",
      color: "#777C6D",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // Background shapes animation
    gsap.fromTo(
      ".bg-shape-about",
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
        statsRefs.current,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .fromTo(
        servicesRefs.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        imageRef.current,
        { x: 100, opacity: 0, rotationY: 90 },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=0.8"
      );

    // Continuous floating animation for shapes
    gsap.to(".bg-shape-about", {
      y: "+=15",
      rotation: "+=5",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    });

    // Stats counter animation
    statsRefs.current.forEach((stat, index) => {
      if (stat) {
        gsap.fromTo(
          stat,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "elastic.out(1, 0.5)",
          }
        );
      }
    });
  }, []);

  const addToTitleRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  const addToStatsRefs = (el) => {
    if (el && !statsRefs.current.includes(el)) {
      statsRefs.current.push(el);
    }
  };

  const addToServicesRefs = (el) => {
    if (el && !servicesRefs.current.includes(el)) {
      servicesRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden pt-20">
      <CustomCursor />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape-about absolute w-96 h-96 -top-48 -right-48 bg-[#777C6D] rounded-full"></div>
        <div className="bg-shape-about absolute w-80 h-80 -bottom-40 -left-40 bg-[#B7B89F] rounded-full"></div>
        <div className="bg-shape-about absolute w-64 h-64 top-1/4 right-1/4 bg-[#CBCBCB] rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#777C6D] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div ref={heroRef} className="container mx-auto px-6 relative z-10">
        {/* About Hero */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-[#222222] px-6 py-3 rounded-2xl border border-[#777C6D]/20">
                <div className="w-2 h-2 bg-[#777C6D] rounded-full animate-pulse"></div>
                <span className="text-[#B7B89F] text-sm font-medium tracking-wide">
                  Passionate Developer
                </span>
                <Sparkles className="w-4 h-4 text-[#777C6D]" />
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1
                  ref={(el) => addToTitleRefs(el)}
                  className="text-4xl lg:text-6xl font-bold text-[#EEEEEE] leading-tight"
                >
                  About{" "}
                  <span className="shimmer-text bg-linear-to-r from-[#777C6D] via-[#B7B89F] to-[#CBCBCB] bg-size-[200%_auto] bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>

                <p
                  ref={(el) => addToTitleRefs(el)}
                  className="text-xl text-[#CBCBCB] leading-relaxed mt-6"
                >
                  I'm a passionate frontend developer with over 2 years of
                  experience creating digital experiences that are both
                  beautiful and functional. I love turning complex problems into
                  simple, elegant solutions.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    ref={addToStatsRefs}
                    className="bg-[#222222] p-6 rounded-3xl border border-[#777C6D]/10 hover:border-[#777C6D]/30 transition-all duration-500 hover:scale-105 group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#777C6D] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-5 h-5 text-[#1a1a1a]" />
                      </div>
                      <div className="text-2xl font-bold text-[#EEEEEE]">
                        {stat.number}
                      </div>
                    </div>
                    <div className="text-[#CBCBCB] text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Services */}
            <div ref={imageRef} className="relative">
              <div className="bg-[#222222] rounded-3xl p-8 border border-[#777C6D]/20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute w-32 h-32 -top-8 -right-8 bg-[#777C6D] rounded-full"></div>
                  <div className="absolute w-24 h-24 -bottom-6 -left-6 bg-[#B7B89F] rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-8 bg-[#777C6D] rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[#1a1a1a]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#EEEEEE]">
                      What I Do
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        ref={addToServicesRefs}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-[#2a2a2a] border border-[#777C6D]/10 hover:border-[#777C6D]/30 transition-all duration-500 hover:scale-105 group"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <service.icon
                            className="w-6 h-6"
                            style={{ color: service.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <h4
                            className="text-lg font-semibold mb-2 group-hover:scale-105 transition-transform duration-300"
                            style={{ color: service.color }}
                          >
                            {service.title}
                          </h4>
                          <p className="text-[#CBCBCB] text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#777C6D] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#B7B89F] rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
