import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-banner">
        <h1>Start Crafting Your</h1>
        <h1 className="coloured-hero">Next Great Idea</h1>
      </div>
      <p>Simplifying creation of landing pages, blog pages,</p>
      <p>application pages and much more</p>
      <button className="purchase-btn">Purchase Now</button>
      <a href="#" alt="just a linke to another page">
        Learn more
      </a>
    </div>
  );
};

export default Hero;
