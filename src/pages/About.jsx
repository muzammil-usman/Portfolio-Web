// pages/About.jsx
import React from "react";
import { Code2, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "10+", label: "Technologies" },
  ];

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building responsive and scalable web applications using React, JavaScript, and modern frameworks.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating beautiful and intuitive user interfaces with Tailwind CSS and modern design principles.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing web applications for speed, SEO, and better user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively in teams using Git, Agile methodologies, and clear communication.",
    },
  ];

  return (
    <div className="pt-20">
      {/* About Hero */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-green-500">Me</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                I'm a passionate frontend developer with over 2 years of
                experience creating digital experiences that are both beautiful
                and functional. I love turning complex problems into simple,
                elegant solutions.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-800 rounded-2xl p-8 border border-green-500/30">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  What I Do
                </h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
