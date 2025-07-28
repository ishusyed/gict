import React, { useRef, useEffect, useState } from "react";
import aboutImg1 from "../images/Services/ourteam.jpg";
import aboutImg2 from "../images/Services/project4.jpg";
import aboutImg3 from "../images/Services/project5.jpg";
import "./About.css";

const aboutSections = [
    {
        title: "About Gajulapalli Infra",
        image: aboutImg1,
        description: "Gajulapalli Infra and Constructions has been a leader in the construction industry for over 20 years, delivering high-quality residential, commercial, and industrial projects across the region."
    },
    {
        title: "Our Mission",
        image: aboutImg2,
        description: "To build lasting relationships with our clients by delivering exceptional construction solutions with integrity, innovation, and excellence."
    },
    {
        title: "Our Values",
        image: aboutImg3,
        description: `We believe in:
    • Quality Craftsmanship
    • Customer Satisfaction
    • Timely Delivery
    • Safety First
    • Innovation
    • Transparency`
    }
];

function AboutRow({ section, index }) {
    const rowRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );
        if (rowRef.current) {
            observer.observe(rowRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={rowRef}
            className={`about-card ${index % 2 === 1 ? "reverse" : ""} ${inView ? "in-view" : ""}`}
        >
            <div className="about-card-content">
                <div className="about-image-half">
                    <img
                        src={section.image}
                        alt={section.title}
                        className="about-card-img"
                    />
                </div>
                <div className="about-content-half">
                    <h2 className="about-title">{section.title}</h2>
                    <p className="about-description" style={{ whiteSpace: 'pre-line' }}>{section.description}</p>
                </div>
            </div>
        </div>
    );
}

function About() {
    return (
        <div className="about-root">
            <div className="about-hero-section">
                <div className="about-hero-flex">
                    <div className="about-hero-left">
                        <h1 className="about-hero-title">About Gajulapalli Infra & Constructions</h1>
                        <p className="about-hero-description">
                            We are a trusted name in infrastructure development, providing expert solutions in residential, commercial, and industrial construction.
                        </p>
                    </div>
                    <ul className="about-hero-points">
                        <li>🏗️ 20+ Years of Industry Leadership</li>
                        <li>🧱 Residential & Commercial Expertise</li>
                        <li>📐 Architectural Precision</li>
                        <li>🔒 Transparent Process & Timely Delivery</li>
                        <li>💡 Innovation-Driven Approach</li>
                    </ul>
                </div>
            </div>

            <div className="about-bg"></div>
            <div className="about-overlay"></div>
            <div className="about-content">
                <div className="about-sections-list">
                    {aboutSections.map((section, index) => (
                        <AboutRow key={index} section={section} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
