import React from 'react';

export const Button = (type, btnColor, onClick, text) => (
  <button
    type={type}
    className={`btn ${btnColor}`}
    onClick={onClick}>
      {text}
    </button>
);