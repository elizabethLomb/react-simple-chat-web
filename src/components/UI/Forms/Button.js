import React from 'react';

export const Button = ({
  type, btnColor, onClick, text, btnSize
}) => (
  <button
      type={type}
      className={`btn ${btnColor} ${btnSize}`}
      onClick={onClick}
    >
      {text}
    </button>
);