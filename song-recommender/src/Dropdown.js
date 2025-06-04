import React from 'react';

function Dropdown({ label, options, value, onChange }) {
  return (
    <div className="dropdown">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
