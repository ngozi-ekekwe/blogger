import React, { Component } from 'react';
import Button from './Button';

class Authentication extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { title, buttonText, children, onButtonClick } = this.props;
    return (
      <div className="row authentication-section">
        <div className="col-12 col-lg-6 authentication-image"></div>
        <div className="col-12 col-lg-6">
          <div className="authentication-content">
            <h1>{title}</h1>
            {children}
          </div>
          <div className="button-container">
            <Button title={buttonText} onClick={onButtonClick} />   
          </div>       
        </div>
      </div>
    );
  }
}

export default Authentication;