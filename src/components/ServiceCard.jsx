import React, { useRef, useEffect, useState } from "react";
import "./ServiceCard.css";

function ServiceCard({ service, index, title, description, image }) {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const cardTitle = title || (service && service.title);
  const cardDescription = description || (service && service.description);
  const cardImage = image || (service && service.image);

  return (
    <div ref={cardRef} className={`service-card ${inView ? "in-view" : ""}`}>
      <img src={cardImage} alt={cardTitle} className="service-card-image" />
      <div className="service-card-content">
        <h2 className="service-card-title">{cardTitle}</h2>
        <p className="service-card-description">{cardDescription}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
