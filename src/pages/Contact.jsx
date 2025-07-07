import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mzzgylaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-root">
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-flex">
          <div className="contact-hero-left">
            <h1 className="contact-hero-title">Connect With Us</h1>
            <p className="contact-hero-description">
              Have a question, project, or just want to chat? Our team is here to help you bring your ideas to life.
              Reach out through the form or find us on the map—we’re just a message away.
            </p>
          </div>
          <ul className="contact-hero-points">
            <li>📍 Pinpoint location on Google Maps</li>
            <li>📧 Quick form to get in touch</li>
            <li>🤝 Personalized assistance</li>
            <li>💼 For project inquiries & partnerships</li>
          </ul>
        </div>
      </section>


      {/* Contact Form & Map */}
      <div className="contact-container">
        <div className="contact-card">
          {submitted ? (
            <div className="contact-success">Thank you for reaching out! We will get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div>
                <label className="contact-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label className="contact-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>
              <div>
                <label className="contact-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="contact-textarea"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="contact-button"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        <div className="contact-map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=Google+India,+Pamuru&output=embed"
            className="contact-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
