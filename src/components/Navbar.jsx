// Navbar.jsx

import React, { useState } from "react";
import "./Navbar.css";
import BookCallModal from "./Form/BookCallModal";
import social from "../assets/social.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  const handleBookCall = () => {
    setModalOpen(true);
    setMenuOpen(false);
  };

  return (
    <>
      <svg style={{ display: "none" }}>
        <defs>
          <filter
            id="liquid-glass"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.05 0.05"
              numOctaves="1"
              seed="2"
              result="turbulence"
            />
            <feGaussianBlur
              in="turbulence"
              stdDeviation="2"
              result="blurredNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurredNoise"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="B"
              result="displaced"
            />
            <feGaussianBlur
              in="displaced"
              stdDeviation="3"
              result="finalBlur"
            />
            <feComposite in="finalBlur" in2="finalBlur" operator="over" />
          </filter>
        </defs>
      </svg>
      <nav className="glass-navbar">
        {/* LOGO */}

        <div className="nav-logo">
          <img src={social} alt="SocialMafia" className="logo-img" />
        </div>

        {/* NAV LINKS */}

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li onClick={() => scrollToSection("home")}>Home</li>

          <li onClick={() => scrollToSection("about")}>About Us</li>

          <li onClick={() => scrollToSection("services")}>Services</li>

          <li onClick={() => scrollToSection("projects")}>Our Work</li>

          <li onClick={() => scrollToSection("contact")}>Contact Us</li>
        </ul>

        {/* BOOK CALL BUTTON - CENTER POSITION */}

        <button className="book-call-btn" onClick={handleBookCall}>
          <span className="book-call-text">Book Call</span>
        </button>

        {/* HAMBURGER */}

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <BookCallModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
