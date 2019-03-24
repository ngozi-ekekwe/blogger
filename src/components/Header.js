import React, { Component } from 'react';
import { Link } from '../routes';

class Header extends Component {
  state = {
    isAuthenticated: false
  }

  logout = () => {
    const token = localStorage.removeItem('token');
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.setState({
        isAuthenticated: true
      })
    }
  }

  getRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
      return [{ route: "/new-story", label: "Create" }, { route: "/blogs", label: "Stories" }];
    }
    return [{ route: "/login", label: "Sign in" }, { route: "/signup", label: "Get Started" }];
  }
  render() {
    const { isAuthenticated } = this.state;
    const routes = this.getRoutes(isAuthenticated);
    return (
      <header>
        <div className="nav-brand">
          <Link route='/home'>STORY</Link>
        </div>
        <nav>{routes.map((route, i) => {
          return (
          <ul className="nav-item" key={`nav-item-${i}`}>
            <Link route={route.route}><a>{route.label}</a></Link>
          </ul>          
        )
        })}
        { isAuthenticated && <ul className="nav-item active">
            <a href="/login" onClick={this.logout}>Logout</a>
          </ul>
        }
        </nav>
        
      </header>
    );
  }
}

export default Header;