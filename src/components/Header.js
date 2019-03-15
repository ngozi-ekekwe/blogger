import React, { Component } from 'react';
import { Link } from '../routes';
import '../styles/style.scss';

class Header extends Component {


  render() {
    return (
      <header>
        <div className="nav-brand">FOOD BLOGGER</div>
        <nav>
          <ul className="nav-item">
            <Link route='home'>
              <a> Become a member </a>
            </Link>
          </ul>
          <ul className="nav-item">
            <Link route='login'><a>Sign in</a></Link>
          </ul>
          <ul className="nav-item active">
            <Link route='signup'><a>Get Started</a></Link>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;