import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

class BlogHeader extends Component {
  render() {
    const { story } = this.props;
    return (
      <div className="row blog-section">
        <div className="col-12">
          <div className="blog-content">
            {
              story[0] &&<h1>{story[0].title}</h1>
            }
            { story[0]  && <Profile userId={story[0].userId }/>}
          </div>
        </div>
        <div className="col-12 blog-image"></div>
      </div>
    );
  }
}

export default BlogHeader;