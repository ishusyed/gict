import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./WhatsAppCallFloating.css";

const WHATSAPP_NUMBER = "919347556512"; // Replace with your WhatsApp number (country code + number, no +)
const CALL_NUMBER = "9347556512"; // Replace with your phone number

function WhatsAppCallFloating() {
  return (
    <div className="floating-action-container">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="floating-action-btn whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href={`tel:${CALL_NUMBER}`}
        className="floating-action-btn call"
        aria-label="Call us"
      >
        <FaPhoneAlt size={22} />
      </a>
    </div>
  );
}

export default WhatsAppCallFloating; 