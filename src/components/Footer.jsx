import React, { useEffect, useRef, useState } from "react";
import BookCallModal from "./Form/BookCallModal";
import "./Footer.css";

// SVG icons — no external font dependency
const Icons = {
  instagram: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  linkedin: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.4 9 4.5-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  behance: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7h7a3 3 0 0 1 0 6H3z" />
      <path d="M3 13h8a3 3 0 0 1 0 6H3z" />
      <line x1="14" y1="7" x2="21" y2="7" />
      <path d="M21 12c0-3-2-5-4-5s-4 2-4 5 2 5 4 5c1.5 0 2.8-.8 3.5-2" />
    </svg>
  ),
  mail: (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  phone: (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.18h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 5.38 5.38l.88-.88a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.07z" />
    </svg>
  ),
  mapPin: (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

const Footer = () => {
  const trackRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = [
      "Design",
      "Development",
      "Strategy",
      "Branding",
      "Growth",
      "Innovation",
      "Results",
    ];
    const full = [...items, ...items, ...items, ...items];
    full.forEach((txt, i) => {
      const el = document.createElement("div");
      el.className = "ft-marquee-item" + (i % 3 === 1 ? " red" : "");
      el.innerHTML = `<span class="dot"></span>${txt}`;
      track.appendChild(el);
    });
  }, []);

  return (
    <div>
      <footer className="ft-root">
        {/* Diagonal BG Lines */}
        <div className="ft-bg">
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="ftdiag"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(-45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="60"
                  stroke="#E24B4A"
                  strokeWidth="0.5"
                  strokeOpacity="0.06"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ftdiag)" />
          </svg>
        </div>

        {/* Marquee */}
        <div className="ft-marquee-wrap">
          <div className="ft-marquee-track" ref={trackRef}></div>
        </div>

        {/* Body */}
        <div className="ft-body">
          {/* CTA */}
          <div className="ft-cta">
            <div className="ft-cta-left">
              <h2>
                Let's Build <span>Together.</span>
              </h2>
              <p className="ft-cta-sub">
                Your next big project deserves the right partner.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="book-call-btn"
            >
              Book Call →
            </button>
          </div>

          {/* Columns */}
          <div className="ft-cols">
            {/* Brand */}
            <div className="ft-brand-col">
              <div>
                <div className="ft-logo">
                  Social<span>.</span>Pillers
                </div>
                <p className="ft-tagline">
                  We craft bold digital experiences that drive results.
                  Strategy, design &amp; development — all under one roof.
                </p>
                <div className="ft-pulse">
                  <div className="ft-pulse-dot"></div>
                  Available for new projects
                </div>
              </div>
              <div className="ft-socials">
                <a className="ft-social-icon" href="#" aria-label="Instagram">
                  {Icons.instagram}
                </a>
              </div>
            </div>

            {/* Nav */}
            <div>
              <p className="ft-col-title">Navigate</p>
              <ul className="ft-col-links">
                {["Home", "About Us", "Services" ,  "Our Work", "Contact Us"].map(
                  (link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="ft-col-title">Services</p>
              <ul className="ft-col-links">
                {[
                  "Web Design",
                  "Development",
                  "Brand Identity",
                  "SEO & Growth",
                  "Consultation",
                ].map((s) => (
                  <li key={s}>
                    <a href="#">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="ft-contact-col">
              <p className="ft-col-title">Contact</p>
              <div className="ft-contact-item">
                <div className="ft-contact-icon">{Icons.mail}</div>
                <div className="ft-contact-text">
                  socialpillersbusiness@gmail.com
                </div>
              </div>
              <div className="ft-contact-item">
                <div className="ft-contact-icon">{Icons.phone}</div>
                <div className="ft-contact-text">
                  +91 9644398243 , 
                  <br />
                  +91 9425169209
                </div>
              </div>
              <div className="ft-contact-item">
                <div className="ft-contact-icon">{Icons.mapPin}</div>
                <div className="ft-contact-text">Ratlam, India</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="ft-bottom">
          <div className="ft-bottom-left">
            © 2025 <span>SocialPillers</span> — All rights reserved.
          </div>
        </div>
      </footer>

      <BookCallModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Footer;
