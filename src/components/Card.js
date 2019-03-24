import React from 'react';
import Profile from '../components/Profile'
import { Link } from '../routes';

const Card = (props) => {
  const { title, content, slug, userId } = props;
  return (
    <Link href={`/blog/${slug}`}>
      <div className="col-12 col-lg-6 card">
        <div className="row">
          <div className="col-7 mr-1" style={{border: '1px solid black'}}>
            <h2 className="card-title">{title}</h2>
            <p className="card-subtitle">{content} </p>
            <Profile userId={userId} />
          </div>
          <div className="col-4 card-image" style={{backgroundImage: `url(https://source.unsplash.com/random)`}}></div>
        </div>
      </div>
    </Link>
  );
};

export default Card;