import React from 'react';
import Profile from './Profile';

const BlogHeader = () => {
  return (
    <div className="row blog-section">
      <div className="col-12">
        <div className="blog-content">
          <h1>Taking Sides Is Not Good</h1>
          <Profile />
        </div>
          {/* <Button title="Get Started" />           */}
      </div>
      <div className="col-12 blog-image"></div>
    </div>
  );
};

export default BlogHeader;