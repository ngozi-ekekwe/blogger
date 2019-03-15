import React from 'react';
import { Link } from '../routes';

const Card = () => {
  return (
    <Link route="/blog/hello">
      <div className="col-12 col-lg-6 card">
        <div className="row">
          <div className="col-6">
            <h2 className="card-title">Taking Sides Is Not Good</h2>
            <p className="card-subtitle">Challenging Amy Chua's warning about </p>
          </div>
          <div className="col-6 card-image"></div>
        </div>
      </div>
    </Link>
  );
};

export default Card;