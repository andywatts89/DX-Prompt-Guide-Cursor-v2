import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>DX Prompting Guide</h3>
          <p>Your comprehensive library of AI prompts for product design. Streamline your workflow and enhance your design process.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Supported Tools</h3>
          <ul>
            <li>ChatGPT</li>
            <li>Gemini</li>
            <li>UX Pilot</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DX Prompting Guide. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 