import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">SportsZone</div>
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Cricket</a></li>
          <li><a href="#">Football</a></li>
          <li><a href="#">Tennis</a></li>
          <li><a href="#">Kabaddi</a></li>
        </ul>
      </div>
      <p className="footer-text">© 2025 SportsZone. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
