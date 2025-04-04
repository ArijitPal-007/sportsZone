import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>SportsZone</strong>, your go-to platform for all things sports! 
        We are passionate about bringing the latest updates, news, and analysis on various sports like 
        Cricket, Football, Tennis, and more.
      </p>
      <p>
        Our mission is to keep sports enthusiasts informed and engaged. Whether you're a casual fan or a 
        hardcore sports lover, we have something for everyone.
      </p>
      <h3>Why Choose Us?</h3>
      <ul>
        <li>Latest sports updates and news</li>
        <li>Detailed match analysis</li>
        <li>Expert opinions and insights</li>
        <li>Community-driven discussions</li>
      </ul>
      <p>Join us and stay updated with the world of sports!</p>
    </div>
  );
};

export default About;
