import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <h1>Welcome to TaxIQ</h1>
      <p>AI-powered tax guidance for businesses and individuals in India.</p>
      <a href="/features" className="btn">
        Learn More
      </a>
    </div>
  );
}

export default Hero;
