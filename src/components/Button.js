import React from 'react';

const Button = ({ title, action, variant, onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;