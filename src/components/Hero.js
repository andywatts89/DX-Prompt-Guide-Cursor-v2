import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Accelerate Your Design Workflow with AI</h1>
        <p className="hero-subtitle">Discover, filter, and use high-quality AI prompts tailored for product designers. Streamline your design process with our comprehensive prompt library.</p>
        <div className="hero-features">
          <div className="feature">
            <i className="fas fa-search"></i>
            <span>Search & Filter Prompts</span>
          </div>
          <div className="feature">
            <i className="fas fa-tags"></i>
            <span>Organized by Design Phase</span>
          </div>
          <div className="feature">
            <i className="fas fa-copy"></i>
            <span>One-Click Copy</span>
          </div>
        </div>
        <div className="cta-container">
          <button className="cta-button primary">Explore Prompts</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://placehold.co/600x400" alt="Prompt Library Interface" />
      </div>
    </section>
  );
};

export default Hero; 