import React from "react";
import "./Navbar.css";
import logo from "./logo.png"; // Import your logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/ContactForm">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
