import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">SEVEN PEAKS DX Prompt Library</Link>
        <ul className="nav-links">
          <li><Link to="/">All Prompts</Link></li>
          <li><Link to="/writing-guide">Writing Guide</Link></li>
          <li><Link to="/submit-prompt">Submit Prompt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 