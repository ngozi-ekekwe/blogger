import React from 'react';

const Button = ({ title, action, variant }) => {
  return (
    <button className={`btn btn-${variant}`}>
      {title}
    </button>
  );
};

export default Button;