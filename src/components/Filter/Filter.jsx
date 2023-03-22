import React from 'react';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label>
      Filter by name
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  );
};