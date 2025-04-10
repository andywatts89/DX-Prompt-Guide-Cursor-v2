import React from 'react';
import './SearchSection.css';

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="search-content">
        <h1>Supercharge your design process with AI-powered prompts</h1>
        <p>A curated library of prompts to help product designers, researchers, and writers work faster—across every phase of the design process.</p>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search prompts..." 
            className="search-input"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchSection; 