'use client';
import React, { useState } from 'react';
import './Dropdown.scss';

export const Dropdown = ({ options, defaultValue = '', onChange, name }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = event => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    onChange(name, newValue);
  };

  return (
    <select
      value={selectedValue}
      onChange={handleChange}
      className="dropdown"
      name={name}
    >
      <option value="">None</option>
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
