import React, { useState } from "react";
import "./BookCallModal.css";
import emailjs from "@emailjs/browser";

import social from "../../assets/social.png";

const SERVICE_ID = "service_tih7i1m";
const TEMPLATE_ID = "template_0vxarbn";
const PUBLIC_KEY = "Dcl6Wh0Aa3T9lxJHY";

export default function BookCallModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    purpose: "Social Media Handling",
    contact: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.fullName,
          company: formData.company,
          purpose: formData.purpose,
          contact: formData.contact,
        },
        PUBLIC_KEY
      );

      alert("Request received! We'll contact you soon.");
      setFormData({ fullName: "", company: "", purpose: "Social Media Handling", contact: "" });
      onClose();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <img
            src={social}
            alt="SocialMafia"
            className="modal-logo"
          />

          <button
            className="modal-close"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <h2 className="modal-title">
          Book a Call
        </h2>

        <p className="modal-subtitle">
          Fill in your details and we'll reach out shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="modal-form"
        >
          <div className="modal-field">
            <label>Full Name</label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Rahul Sharma"
            />
          </div>

          <div className="modal-field">
            <label>Business / Company Name</label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="TechVenture Pvt. Ltd."
            />
          </div>

          <div className="modal-field">
            <label>Purpose</label>

            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option>Social Media Handling</option>
              <option>For Content Creation</option>
              <option>Posters, Post, flex Design</option>
              <option>Seo And Meta Ads</option>
              <option>Website design And Develop</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div className="modal-field">
            <label>Contact Number</label>

            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="+91 9644398243"
            />
          </div>

          <button
            type="submit"
            className="modal-submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Request →"}
          </button>
        </form>
      </div>
    </div>
  );
}
