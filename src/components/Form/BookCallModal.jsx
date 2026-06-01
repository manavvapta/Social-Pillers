import React from "react";
import "./BookCallModal.css";

import social from "../../assets/social.png";

export default function BookCallModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Request received! We'll contact you soon.");

    onClose();
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
              required
              placeholder="Rahul Sharma"
            />
          </div>

          <div className="modal-field">
            <label>Business / Company Name</label>

            <input
              type="text"
              required
              placeholder="TechVenture Pvt. Ltd."
            />
          </div>

          <div className="modal-field">
            <label>Purpose</label>

            <select required>
              <option value="">
                Select a purpose...
              </option>

              <option>
                Business Consultation
              </option>

              <option>
                Partnership Opportunity
              </option>

              <option>
                Product Demo
              </option>

              <option>
                General Inquiry
              </option>
            </select>
          </div>

          <div className="modal-field">
            <label>Contact Number</label>

            <input
              type="tel"
              required
              placeholder="+91 98765 43210"
            />
          </div>

          <button
            type="submit"
            className="modal-submit"
          >
            Submit Request →
          </button>
        </form>
      </div>
    </div>
  );
}