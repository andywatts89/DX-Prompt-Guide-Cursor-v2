import React from 'react';
import './FilterChips.css';

const FilterChips = () => {
  const phases = [
    'All Prompts',
    'Define',
    'Discover & Research',
    'Ideate',
    'Launch & Measure',
    'Prototype',
    'Test'
  ];

  return (
    <div className="filter-chips">
      {phases.map((phase, index) => (
        <button
          key={index}
          className={`filter-chip ${index === 0 ? 'active' : ''}`}
        >
          {phase}
        </button>
      ))}
    </div>
  );
};

export default FilterChips; 