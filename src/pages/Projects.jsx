// pages/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Filter,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import CustomCursor from "../components/CustomCursor";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const heroRef = useRef();
  const titleRefs = useRef([]);
  const filterRefs = useRef([]);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with React, Redux, and Firebase with real-time inventory management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&auto=format&q=80",
      technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "#777C6D",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&auto=format&q=80",
      technologies: ["React", "Context API", "Axios", "CSS3"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "#B7B89F",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts and interactive charts.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop&auto=format&q=80",
      technologies: ["JavaScript", "API Integration", "Chart.js", "HTML5"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "#CBCBCB",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing my projects and skills with modern animations.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&auto=format&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "#777C6D",
    },
    {
      id: 5,
      title: "Finance Tracker",
      description:
        "A comprehensive personal finance tracking application with analytics and reporting.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&auto=format&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "#B7B89F",
    },
    {
      id: 6,
      title: "Social Media App",
      description:
        "A modern social media platform with real-time messaging and media sharing.",
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop&auto=format&q=80",
      technologies: ["React", "Firebase", "Tailwind", "WebSockets"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      accentColor: "#CBCBCB",
    },
  ];

  const filters = [
    { name: "All Projects", value: "all" },
    { name: "Web Apps", value: "web" },
    { name: "Mobile", value: "mobile" },
    { name: "UI/UX", value: "design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const tl = gsap.timeline();

    // Background shapes animation
    gsap.fromTo(
      ".bg-shape-projects",
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
        filterRefs.current,
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
      );

    // Continuous floating animation for shapes
    gsap.to(".bg-shape-projects", {
      y: "+=20",
      rotation: "+=10",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.4,
    });

    // Text shimmer effect
    gsap.to(".shimmer-text", {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "none",
    });
  }, []);

  // Animate projects when filtered
  useEffect(() => {
    gsap.fromTo(
      projectRefs.current,
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );
  }, [activeFilter]);

  const addToTitleRefs = (el) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current.push(el);
    }
  };

  const addToFilterRefs = (el) => {
    if (el && !filterRefs.current.includes(el)) {
      filterRefs.current.push(el);
    }
  };

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] relative overflow-hidden pt-20">
      <CustomCursor />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bg-shape-projects absolute w-96 h-96 -top-48 -left-48 bg-[#777C6D] rounded-full"></div>
        <div className="bg-shape-projects absolute w-80 h-80 -bottom-40 -right-40 bg-[#B7B89F] rounded-full"></div>
        <div className="bg-shape-projects absolute w-64 h-64 top-1/2 right-1/3 bg-[#CBCBCB] rounded-full"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#777C6D] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div ref={heroRef} className="container mx-auto px-6 relative z-10 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-[#222222] px-6 py-3 rounded-2xl border border-[#777C6D]/20 mb-8">
            <div className="w-2 h-2 bg-[#777C6D] rounded-full animate-pulse"></div>
            <span className="text-[#B7B89F] text-sm font-medium tracking-wide">
              Featured Projects
            </span>
            <Sparkles className="w-4 h-4 text-[#777C6D]" />
          </div>

          <h1
            ref={(el) => addToTitleRefs(el)}
            className="text-4xl lg:text-6xl font-bold text-[#EEEEEE] mb-6"
          >
            My{" "}
            <span className="shimmer-text bg-linear-to-r from-[#777C6D] via-[#B7B89F] to-[#CBCBCB] bg-size-[200%_auto] bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p
            ref={(el) => addToTitleRefs(el)}
            className="text-xl text-[#CBCBCB] max-w-2xl mx-auto leading-relaxed"
          >
            Here are some of my recent projects that showcase my skills and
            experience in modern web development
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter, index) => (
            <button
              key={filter.value}
              ref={addToFilterRefs}
              onClick={() => setActiveFilter(filter.value)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-500 ${
                activeFilter === filter.value
                  ? "bg-[#777C6D] text-[#1a1a1a] shadow-lg shadow-[#777C6D]/20"
                  : "bg-[#222222] text-[#CBCBCB] border border-[#777C6D]/10 hover:border-[#777C6D]/30 hover:scale-105"
              }`}
            >
              <Filter className="w-4 h-4 transition-transform group-hover:scale-110" />
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={addToProjectRefs}
              className="group bg-[#222222] rounded-3xl overflow-hidden border border-[#777C6D]/10 hover:border-[#777C6D]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>

                {/* Hover Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#777C6D] rounded-xl flex items-center justify-center text-[#1a1a1a] hover:scale-110 transition-transform duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#222222] rounded-xl flex items-center justify-center text-[#CBCBCB] border border-[#777C6D]/20 hover:scale-110 transition-transform duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                    style={{
                      backgroundColor: `${project.accentColor}20`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}30`,
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-[#EEEEEE] mb-3 group-hover:scale-105 transition-transform duration-300"
                  style={{ color: project.accentColor }}
                >
                  {project.title}
                </h3>

                <p className="text-[#CBCBCB] mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#2a2a2a] text-[#CBCBCB] rounded-full text-xs border border-[#777C6D]/10 hover:border-[#777C6D]/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-[#777C6D]/10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#777C6D] hover:text-[#B7B89F] transition-all duration-300 hover:gap-3 font-medium text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#CBCBCB] hover:text-[#EEEEEE] transition-all duration-300 hover:gap-3 font-medium text-sm"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-[#222222] rounded-3xl border border-[#777C6D]/20 flex items-center justify-center mx-auto mb-6">
              <Filter className="w-8 h-8 text-[#777C6D]" />
            </div>
            <h3 className="text-2xl font-bold text-[#EEEEEE] mb-3">
              No projects found
            </h3>
            <p className="text-[#CBCBCB] max-w-md mx-auto">
              We couldn't find any projects matching your selected filter. Try
              selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
