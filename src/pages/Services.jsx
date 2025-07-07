import React from "react";
import ServiceCard from "../components/ServiceCard";
import "./Services.css";

import ModularKitchen from "../images/Services/modularkitchen.jpg";
import FalseCeiling from "../images/Services/falseCeiling.jpg";
import TVUnit from "../images/Services/Tvunits.jpg";
import Wardrobe from "../images/Services/wardrobs.jpg";
import OfficeSpace from "../images/Services/officespaces.jpg";
import Bedroom from "../images/Services/bedroom.jpg";
import ExternalArchitecture from "../images/Services/ExternalArc.jpg";
import Project1 from "../images/Services/P1.jpg";
import Project2 from "../images/Services/P2.jpg";
import Project3 from "../images/Services/P3.jpg";
import Project4 from "../images/Services/P4.jpg";
import Project5 from "../images/Services/P5.jpg";
import Project6 from "../images/Services/P6.jpg";
import ProjectManagement from "../images/Services/ProjectManagement.jpg";

const services = [
  {
    id: 1,
    title: "Residential Construction",
    description: "We design and construct custom homes, villas, and apartments tailored to your lifestyle. From blueprint to final finish, our team ensures seamless execution, structural integrity, and modern living standards with a focus on energy efficiency and space optimization.",
    image: Project1,
    category: "Construction",
    slug: "residential-construction",
    altText: "Residential home construction project",
  },
  {
    id: 2,
    title: "Commercial Construction",
    description: "Build your business on a strong foundation. We deliver high-performance commercial spaces including office complexes, retail outlets, showrooms, and industrial units, combining durability, modern design, and scalability for long-term success.",
    image: Project2,
    category: "Construction",
    slug: "commercial-construction",
    altText: "Commercial building construction",
  },
  {
    id: 3,
    title: "Renovation & Remodeling",
    description: "Give your old spaces a fresh identity. Whether it’s your home, office, or commercial property, we revamp interiors and exteriors to bring contemporary appeal, better utility, and improved functionality — all while respecting existing architectural elements.",
    image: Project4,
    category: "Renovation",
    slug: "renovation-remodeling",
    altText: "Renovated living room",
  },
  {
    id: 4,
    title: "Project Management",
    description: "Our expert project managers oversee every phase of construction or design — from budgeting and vendor coordination to timelines and quality checks. With precision-driven execution, we ensure that your project is delivered on time and within budget.",
    image: ProjectManagement,
    category: "Management",
    slug: "project-management",
    altText: "Project planning and execution",
  },
  {
    id: 5,
    title: "Modular Kitchen",
    description: "Transform your cooking experience with modern modular kitchens. We design layouts that maximize efficiency and storage, featuring top-tier materials, soft-close drawers, ergonomic design, and aesthetic finishes that complement your home.",
    image: ModularKitchen,
    category: "Interior",
    slug: "modular-kitchen",
    altText: "Modern modular kitchen",
  },
  {
    id: 6,
    title: "False Ceiling",
    description: "Our false ceiling solutions enhance acoustic comfort, lighting distribution, and the overall ambiance of your space. Whether you prefer gypsum, POP, or wooden designs, we offer customized ceiling concepts for homes and offices.",
    image: FalseCeiling,
    category: "Interior",
    slug: "false-ceiling",
    altText: "False ceiling with LED lighting",
  },
  {
    id: 7,
    title: "TV Units",
    description: "Make your entertainment center the centerpiece of your room. Our custom TV units combine storage, display, lighting, and design elements that suit your space and complement your interior style — from minimal to luxurious.",
    image: TVUnit,
    category: "Interior",
    slug: "tv-units",
    altText: "TV unit interior design",
  },
  {
    id: 8,
    title: "Wardrobes",
    description: "Organize your wardrobe the smart way. We design and install space-saving sliding or hinged wardrobes, walk-in closets, and modular storage units that blend functionality with fashion. Fully customizable in design, finish, and layout.",
    image: Wardrobe,
    category: "Interior",
    slug: "wardrobes",
    altText: "Custom built wardrobe",
  },
  {
    id: 9,
    title: "Office Spaces",
    description: "We design professional office interiors that reflect your brand and improve productivity. Our ergonomic layouts, acoustic control, and contemporary design elements help create a workplace that inspires teams and impresses clients.",
    image: OfficeSpace,
    category: "Interior",
    slug: "office-spaces",
    altText: "Stylish office workspace",
  },
  {
    id: 10,
    title: "Bedrooms",
    description: "Your bedroom should be your sanctuary. We create calm, elegant, and space-efficient bedroom interiors that blend lighting, furniture, and finishes to offer unmatched comfort, style, and restful sleep.",
    image: Bedroom,
    category: "Interior",
    slug: "bedrooms",
    altText: "Modern bedroom design",
  },
  {
    id: 11,
    title: "External Architecture",
    description: "Make a bold first impression. Our external architectural solutions include façade enhancements, entrance upgrades, cladding, lighting, and landscaping to boost curb appeal and property value while reflecting your design identity.",
    image: ExternalArchitecture,
    category: "Exterior",
    slug: "external-architecture",
    altText: "External facade design",
  },
];


function Services() {
  return (

    
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-header">
        <h1 className="services-heading">Transforming Spaces with Precision & Elegance</h1>
        <h2 className="services-subheading">Comprehensive Interior Design & Construction Solutions</h2>
        <p className="services-description">
          At Gajulapalli Infra and Construction Pvt. Ltd., we specialize in delivering end-to-end interior design and construction services that blend functionality with aesthetic excellence. From bespoke modular kitchens and stylish wardrobes to large-scale residential and commercial developments, our team ensures every detail is handled with care — from concept to completion. Discover how our expert craftsmanship can turn your vision into reality.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            description={service.description}
            image={service.image}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
