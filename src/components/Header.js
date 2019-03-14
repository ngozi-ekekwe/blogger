import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/style.scss';

const Header = () => {
  return (
    <header>
        <div className="nav-brand">BLOGGER</div>
        <nav>
          <ul className="nav-item"><li>Become a member</li></ul>
          <ul className="nav-item"><li>Sign in</li></ul>
          <ul className="nav-item active"><li>Get Started</li></ul>
        </nav>
    </header>
  );
};

export default Header;