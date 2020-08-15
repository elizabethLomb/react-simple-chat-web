import React from 'react';

export const Input = (
  { type, id, name, labelText, placeholder, sizeInput }
) => (
  <div className="form-group">
    {labelText && <label for={id}>{labelText}</label>}
    <input 
      type={type}
      className={`form-control ${sizeInput}`}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  </div>
);