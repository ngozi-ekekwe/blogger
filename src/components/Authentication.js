import React, { Component } from 'react';
import Button from './Button';

class Authentication extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { title } = this.props;
    return (
      <div className="row landing-section">
        <div className="col-12 col-lg-6 landing-image"></div>
        <div className="col-12 col-lg-6">
          <div className="landing-content">
            <h1>{title}</h1>
            <p>We'll deliver the best stories amd the ideas on the topics you care about most straight to your homepage, app or inbox</p>
          </div>
            <Button title="Get Started" />          
        </div>
      </div>
    );
  }
}

export default Authentication;