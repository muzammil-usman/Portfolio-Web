import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import gsap from "gsap";
import CustomCursor from "../components/CustomCursor";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const heroRef = useRef();
  const titleRefs = useRef([]);
  const contactInfoRefs = useRef([]);
  const formRefs = useRef([]);
  const socialRefs = useRef([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp message format
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}

*Time:* ${new Date().toLocaleString()}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Your WhatsApp number (country code ke saath)
    const phoneNumber = "923299287028"; // Example: 92 for Pakistan + 3001234567

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    // Success animation
    gsap.to(".success-message", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "back.out(1.7)",
    });

    // Form reset
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Hide success message after 3 seconds
    setTimeout(() => {
      gsap.to(".success-message", {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "uraza2520@gmail.com",
      href: "mailto:uraza2520@gmail.com",
      color: "#777C6D",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 329 928 7028",
      href: "tel:+923299287028",
      color: "#B7B89F",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: "#",
      color: "#CBCBCB",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "#777C6D",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "#B7B89F",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "#CBCBCB",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/923299287028",
      label: "WhatsApp",
      color: "#25D366",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // Background shapes animation
    gsap.fromTo(
      ".bg-shape-contact",
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
        contactInfoRefs.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .fromTo(
        formRefs.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .fromTo(
        socialRefs.current,
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.2"
      );

    // Continuous floating animation for shapes
    gsap.to(".bg-shape-contact", {
      y: "+=15",
      rotation: "+=8",
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
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

  const addToContactInfoRefs = (el) => {
    if (el && !contactInfoRefs.current.includes(el)) {
      contactInfoRefs.current.push(el);
    }
  };

  const addToFormRefs = (el) => {
    if (el && !formRefs.current.includes(el)) {
      formRefs.current.push(el);
    }
  };

  const addToSocialRefs = (el) => {
    if (el && !socialRefs.current.includes(el)) {
      socialRefs.current.push(el);
    }
  };

  // Input focus animations
  const handleInputFocus = (e) => {
    gsap.to(e.target.parentElement, {
      scale: 1.02,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  };

  const handleInputBlur = (e) => {
    gsap.to(e.target.parentElement, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden pt-20">
      <CustomCursor />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape-contact absolute w-96 h-96 -top-48 -right-48 bg-[#777C6D] rounded-full"></div>
        <div className="bg-shape-contact absolute w-80 h-80 -bottom-40 -left-40 bg-[#B7B89F] rounded-full"></div>
        <div className="bg-shape-contact absolute w-64 h-64 top-1/4 left-1/3 bg-[#CBCBCB] rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#777C6D] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Success Message */}
      <div className="success-message fixed top-8 left-1/2 transform -translate-x-1/2 scale-0 opacity-0 z-50">
        <div className="bg-[#222222] border border-[#777C6D] text-[#B7B89F] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">Opening WhatsApp...</span>
        </div>
      </div>

      <div ref={heroRef} className="container mx-auto px-6 relative z-10 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-[#222222] px-6 py-3 rounded-2xl border border-[#777C6D]/20 mb-8">
            <div className="w-2 h-2 bg-[#777C6D] rounded-full animate-pulse"></div>
            <span className="text-[#B7B89F] text-sm font-medium tracking-wide">
              Available on WhatsApp
            </span>
            <Sparkles className="w-4 h-4 text-[#777C6D]" />
          </div>

          <h1
            ref={(el) => addToTitleRefs(el)}
            className="text-4xl lg:text-6xl font-bold text-[#EEEEEE] mb-6"
          >
            Get In{" "}
            <span className="shimmer-text bg-linear-to-r from-[#777C6D] via-[#B7B89F] to-[#CBCBCB] bg-size-[200%_auto] bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p
            ref={(el) => addToTitleRefs(el)}
            className="text-xl text-[#CBCBCB] max-w-2xl mx-auto leading-relaxed"
          >
            Fill the form and connect with me directly on WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2
              ref={(el) => addToTitleRefs(el)}
              className="text-2xl lg:text-3xl font-bold text-[#EEEEEE]"
            >
              Let's chat on WhatsApp!
            </h2>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  ref={addToContactInfoRefs}
                  href={info.href}
                  className="group flex items-center gap-4 p-6 bg-[#222222] rounded-3xl border border-[#777C6D]/10 hover:border-[#777C6D]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, {
                      y: -5,
                      duration: 0.3,
                      ease: "back.out(1.7)",
                    });
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, {
                      y: 0,
                      duration: 0.3,
                      ease: "power2.out",
                    });
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                    style={{
                      backgroundColor: `${info.color}20`,
                      border: `2px solid ${info.color}30`,
                    }}
                  >
                    <info.icon
                      className="w-6 h-6 transition-colors duration-500"
                      style={{ color: info.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-[#CBCBCB] text-sm font-medium mb-1">
                      {info.label}
                    </div>
                    <div
                      className="text-lg font-semibold transition-colors duration-500 group-hover:scale-105"
                      style={{ color: info.color }}
                    >
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Direct WhatsApp Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/923299287028"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "back.out(1.7)",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }}
              >
                <MessageCircle className="w-5 h-5" />
                Message Directly on WhatsApp
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-xl font-bold text-[#EEEEEE] mb-6">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    ref={addToSocialRefs}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-14 h-14 bg-[#222222] rounded-2xl flex items-center justify-center border border-[#777C6D]/10 transition-all duration-500 hover:scale-110 hover:shadow-lg relative overflow-hidden"
                    aria-label={social.label}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        rotation: 5,
                        duration: 0.3,
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        rotation: 0,
                        duration: 0.3,
                      });
                    }}
                  >
                    <social.icon
                      className="w-5 h-5 z-10 transition-colors duration-500"
                      style={{ color: social.color }}
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{ backgroundColor: `${social.color}10` }}
                    ></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={addToFormRefs}
            className="bg-[#222222] rounded-3xl p-8 border border-[#777C6D]/20 relative overflow-hidden"
          >
            {/* Form Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute w-32 h-32 -top-8 -right-8 bg-[#777C6D] rounded-full"></div>
              <div className="absolute w-24 h-24 -bottom-6 -left-6 bg-[#B7B89F] rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div ref={addToFormRefs}>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#CBCBCB] mb-3"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                    className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#777C6D]/20 rounded-2xl text-[#EEEEEE] placeholder-[#CBCBCB] focus:outline-none focus:border-[#777C6D] focus:ring-2 focus:ring-[#777C6D]/30 transition-all duration-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div ref={addToFormRefs}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#CBCBCB] mb-3"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    required
                    className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#777C6D]/20 rounded-2xl text-[#EEEEEE] placeholder-[#CBCBCB] focus:outline-none focus:border-[#B7B89F] focus:ring-2 focus:ring-[#B7B89F]/30 transition-all duration-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div ref={addToFormRefs}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#CBCBCB] mb-3"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                  className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#777C6D]/20 rounded-2xl text-[#EEEEEE] placeholder-[#CBCBCB] focus:outline-none focus:border-[#CBCBCB] focus:ring-2 focus:ring-[#CBCBCB]/30 transition-all duration-500"
                  placeholder="Enter subject"
                />
              </div>

              <div ref={addToFormRefs}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#CBCBCB] mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  required
                  rows="6"
                  className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#777C6D]/20 rounded-2xl text-[#EEEEEE] placeholder-[#CBCBCB] focus:outline-none focus:border-[#777C6D] focus:ring-2 focus:ring-[#777C6D]/30 transition-all duration-500 resize-none"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                ref={addToFormRefs}
                className="group w-full inline-flex items-center justify-center gap-3 bg-linear-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden relative"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "back.out(1.7)",
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }}
              >
                <MessageCircle className="w-5 h-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <span className="relative z-10">Send via WhatsApp</span>
                <div className="absolute inset-0 bg-linear-to-r from-[#128C7E] to-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
