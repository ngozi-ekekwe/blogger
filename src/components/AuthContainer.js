import React, { Component } from 'react';
import Button from './Button';

const AuthContainer = (
  { title, buttonText, children, onButtonClick, loading }
) => {
  return (
    <div className="row authentication-section">
      <div className="col-12 col-lg-6 authentication-image"></div>
      <div className="col-12 col-lg-6">
        <div className="authentication-content">
          <h1>{title}</h1>
          {children}
        </div>
        <div className="button-container">
          <Button title={buttonText} onClick={onButtonClick} loading={loading} />  
        </div>       
      </div>
    </div>
  );
}

export default AuthContainer;