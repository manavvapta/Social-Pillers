import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* ===== Hero Content ===== */}

      <div className="hero-content">

        <p className="hero-tag">
          WELCOME TO SOCIALPILLERS
        </p>

        <h1>
          WE ARE <span>PILLERS</span>
          <br />
          OF YOUR <span>BRAND</span>
        </h1>

       
        <div className="hero-buttons">
          <button className="primary-btn">
            Intragram
          </button>

          <button className="secondary-btn">
            View Projects
          </button>
        </div>

      </div>

    </section>
  );
};

export default Hero;