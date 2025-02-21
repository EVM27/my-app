import React from 'react';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          style={{ fontWeight: selected === filter ? 'bold' : 'normal' }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;