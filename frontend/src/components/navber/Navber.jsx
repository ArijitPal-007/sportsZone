import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navber.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">SportsZone</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li 
          className="dropdown" 
          onMouseEnter={() => setIsOpen(true)} 
          onMouseLeave={() => setIsOpen(false)}
        >
          <Link to="#">Category</Link>
          {isOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/category/cricket">Cricket</Link></li>
              <li><Link to="/category/football">Football</Link></li>
              <li><Link to="/category/tennis">Tennis</Link></li>
              <li><Link to="/category/kabaddi">Kabaddi</Link></li>
            </ul>
          )}
        </li>
      </ul>
      <Link to="/register" className="signup-btn">Sign Up</Link>
    </nav>
  );
};

export default Navbar;
