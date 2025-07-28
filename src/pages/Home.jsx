import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../images/Services/project2.jpg";
import processImg from "../images/Services/project4.jpg";
import aboutUsImage from "../images/Services/ourteam.jpg";
import "./Home.css";

const homeCards = [
    {
        title: "Building Your Dreams, Brick by Brick",
        img: heroBg,
        desc: "Gajulapalli Infra and Constructions - Trusted for Quality, Timely Delivery, and Innovation.",
        cta: true,
    },
    {
        title: "Our Process",
        img: processImg,
        desc: "Consultation, Planning, Execution, and Delivery. We ensure quality and efficiency at every step.",
    },
];

function Home() {
    const cardRefs = useRef([]);
    const [visibleCards, setVisibleCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setVisibleCards(Array(homeCards.length).fill(false));
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const idx = Number(entry.target.getAttribute("data-index"));
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => {
                            if (!prev[idx]) {
                                const updated = [...prev];
                                updated[idx] = true;
                                return updated;
                            }
                            return prev;
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );
        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-root">
            <div className="home-bg" />
            <div className="home-overlay" />
            <div className="home-content">

                {/* ========== ABOUT US SECTION ========== */}
                <div className="home-aboutus-container">
                    <div className="aboutus-content">
                        <div className="aboutus-left">
                            <div className="aboutus-heading">
                                <div className="aboutus-highlight-bar"></div>
                                <h2>Welcome to <br />GAJULAPALLI INFRA and CONSTRUCTIONS</h2>
                            </div>
                            <p className="aboutus-subheading">
                                Your Vision. Our Expertise. <br /> Perfect Interiors & Construction.
                            </p>
                            <p>
                                Welcome to <strong>GAJULAPALLI INFRA and CONSTRUCTIONS</strong>, your one-stop
                                destination for complete construction solutions. We specialize in
                                residential and commercial projects including <strong>architectural planning, 3D elevation,
                                    interior design, government approvals,</strong> and <strong>turnkey execution</strong>.
                            </p>
                            <p>We ensure full transparency and quality through:</p>
                            <ul className="aboutus-list">
                                <li>✅ Smart planning and accurate budgeting</li>
                                <li>✅ Weekly site progress reports with visuals</li>
                                <li>✅ Vastu-compliant and smart home-ready designs</li>
                                <li>✅ Customized interiors and high-end finishes</li>
                                <li>✅ On-time delivery with quality you can trust</li>
                            </ul>
                            <p>
                                Whether you're building your dream home or a modern commercial space,
                                <strong> GAJULAPALLI INFRA and CONSTRUCTIONS</strong> is your trusted partner from
                                start to finish.
                            </p>
                            <p className="aboutus-cta">📞 Let's Build It Right — Contact us today!</p>
                        </div>
                        <div className="aboutus-right">
                            <img src={aboutUsImage} alt="About Us" className="aboutus-image" />
                        </div>
                    </div>
                </div>

                {/* ========== HOME CARDS SECTION ========== */}
                <div className="home-section-cards-grid">
                    {homeCards.map((card, idx) => {
                        const isImageRight = idx % 2 === 0;
                        const isTransparent = idx % 2 === 1;
                        const cardClass = `home-square-card ${isImageRight ? "even" : "odd"}${isTransparent ? " transparent-bg" : ""
                            } ${visibleCards[idx] ? "card-visible" : "card-hidden"}`;
                        return (
                            <div
                                className={cardClass}
                                key={idx}
                                ref={(el) => (cardRefs.current[idx] = el)}
                                data-index={idx}
                            >
                                {isImageRight ? (
                                    <>
                                        <div className="home-square-card-content">
                                            <div className="home-square-card-title">{card.title}</div>
                                            <div className="home-square-card-desc">{card.desc}</div>
                                            {card.cta && null}
                                        </div>
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="home-square-card-img"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <img
                                            src={card.img}
                                            alt={card.title}
                                            className="home-square-card-img"
                                        />
                                        <div className="home-square-card-content">
                                            <div className="home-square-card-title">{card.title}</div>
                                            <div className="home-square-card-desc">{card.desc}</div>
                                            {card.cta && null}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* ========== SERVICES PREVIEW SECTION ========== */}
                <div className="home-services-preview">
                    <div className="services-preview-left">
                        <div className="services-preview-subtitle">OUR SERVICE</div>
                        <div className="services-preview-title">Solutions for every corner</div>
                        <div className="services-preview-description">
                            We provide end-to-end construction & interior solutions including planning,
                            architecture, false ceilings, modular kitchens, and custom execution.
                            Whether it's your home or workspace, we deliver functionality with aesthetics.
                        </div>
                        <button
                            className="services-preview-btn"
                            onClick={() => navigate("/services")}
                        >
                            Discover More
                        </button>
                    </div>
                    <div className="services-preview-right">
                        <div className="services-grid">
                            {[
                                {
                                    title: "Residential Construction",
                                    description: "Custom homes, apartments, and villas built to your specifications.",
                                },
                                {
                                    title: "Commercial Construction",
                                    description: "Office buildings, retail spaces, and commercial complexes.",
                                },
                                {
                                    title: "Industrial Projects",
                                    description: "Factories, warehouses, and large-scale industrial facilities.",
                                },
                                {
                                    title: "Renovation & Remodeling",
                                    description: "Upgrades, expansions, and modernizations for existing structures.",
                                },
                            ].map((service, idx) => (
                                <div className="service-card-preview" key={idx}>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <button
                                        className="view-details-btn"
                                        onClick={() => navigate("/services")}
                                    >
                                        View Details →
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ========== HOW WE WORK SECTION ========== */}
                <div className="how-we-work-section">
                    <h2 className="how-we-work-title">How We Work</h2>
                    <p className="how-we-work-subtitle">
                        From concept to completion, we follow a simple, transparent process:
                        <br />
                        <strong>
                            We understand your vision, design with creativity and precision, and
                            execute with care and quality
                        </strong>{" "}
                        — delivering beautiful, functional spaces you'll love.
                    </p>

                    <div className="how-we-work-steps">
                        {[
                            {
                                number: "01",
                                title: "Concept & Consultation",
                                desc: "We begin with a detailed consultation to understand your vision, lifestyle, space requirements, and budget. This is where we get to know you — your tastes, preferences, and how you want your space to feel and function.",
                            },
                            {
                                number: "02",
                                title: "Design & Planning",
                                desc: "Once we have clarity, our designers create a detailed plan. This includes layout drawings, 3D visualizations, material selection, and color schemes. Every element is curated to match your taste while ensuring functionality and balance.",
                            },
                            {
                                number: "03",
                                title: "Execution & Development",
                                desc: "After your approval, our project team steps in to bring the design to life. We manage everything — from civil work and carpentry to painting, lighting, and décor installation — with quality control and timely updates.",
                            },
                            {
                                number: "04",
                                title: "Final Handover & Support",
                                desc: "Before handover, we do a thorough quality check to ensure every detail is perfect. We also provide post-completion support to ensure you're 100% satisfied with your new space.",
                            },
                        ].map((step, idx) => (
                            <div className="how-we-work-step" key={idx}>
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <div className="step-title">{step.title}</div>
                                    <div className="step-desc">{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
