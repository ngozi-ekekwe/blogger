import React, { Component } from 'react';
import { Link } from '../routes';
import '../styles/style.scss';

class Header extends Component {
  state = {
    isAuthenticated: false
  }
  
  logout = () => {
    const token = localStorage.removeItem('token');
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if(token) {
      this.setState({
        isAuthenticated: true
      })
    }
  }
  render() {
    const { isAuthenticated } = this.state;
    return (
      <header>
        <div className="nav-brand">
          <Link route='/home'>STORY</Link>
        </div>
        {!isAuthenticated && <nav>
          <ul className="nav-item">
            <Link route='/login'><a>Sign in</a></Link>
          </ul>
          <ul className="nav-item active">
            <Link route='/signup'><a>Get Started</a></Link>
          </ul>
        </nav>}
        {isAuthenticated && <nav>
          <ul className="nav-item">
            <Link route='/new-story'><a>Create</a></Link>
          </ul>
          <ul className="nav-item">
            <Link route='/blogs'><a>Stories</a></Link>
          </ul>
          <ul className="nav-item active">
            <Link route='/signup'><a onClick={this.logout}>Logout</a></Link>
          </ul>
          <Link>
          <div className="avatar ml-5"></div>
        </Link>
        </nav>}
      </header>
    );
  }
}

export default Header;