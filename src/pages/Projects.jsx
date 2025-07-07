import React, { useState } from "react";
import "./Projects.css";

const projects = [
  {
    image: require("../images/Services/P1.jpg"),
    title: "My Home, Pamuru",
    type: "Residential",
    description: "A beautifully crafted residential villa designed with sustainability in mind, featuring smart automation and serene landscaping.",
  },
  {
    image: require("../images/Services/P2.jpg"),
    title: "Corporate Office Complex",
    type: "Commercial",
    description: "An iconic commercial landmark with modern architecture, collaborative workspaces, and energy-efficient systems.",
  },
  {
    image: require("../images/Services/P3.jpg"),
    title: "Commercial Complex",
    type: "Commercial",
    description: "A vibrant urban retail and business hub with ample parking, high-speed connectivity, and customer-centric design.",
  },
  {
    image: require("../images/Services/P4.jpg"),
    title: "Residential Buildings",
    type: "Residential",
    description: "Multi-storey residential towers offering a blend of affordability and luxury, built with earthquake-resistant technology.",
  },
  {
    image: require("../images/Services/P5.jpg"),
    title: "Gated Communities",
    type: "Residential",
    description: "Secure and lush living communities with landscaped parks, clubhouses, and smart access systems for families.",
  },
  {
    image: require("../images/Services/P6.jpg"),
    title: "Farm Houses",
    type: "Farm",
    description: "Nature-inspired farm retreats with modern interiors, organic farming zones, and weekend relaxation amenities.",
  },
];

function Projects() {
  return (
    <div className="projects-root">
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="projects-hero-flex">
          <div className="projects-hero-left">
            <h1 className="projects-title">Our Projects</h1>
            <p className="projects-subtitle">
            We don’t just construct buildings — we craft experiences rooted in innovation, sustainability, and trust. From luxury residences and gated communities to smart commercial complexes, each project showcases our commitment to quality, aesthetics, and future-ready design. With end-to-end turnkey execution, we ensure every space delivers value, efficiency, and long-term impact.
            </p>
          </div>
          <ul className="projects-hero-points">
            <li>🏗️ 50+ Completed Projects across Residential and Commercial sectors</li>
            <li>🌿 Focus on eco-friendly and sustainable architecture</li>
            <li>💡 Integrated smart technology in modern developments</li>
            <li>📍 Located in key urban and suburban growth areas</li>
          </ul>
        </div>
      </section>

      {/* Project Grid */}
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
