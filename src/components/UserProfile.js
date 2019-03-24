import React from 'react';
import { Link } from '../routes';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div>
        <Link>
          <div className="avatar"></div>
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default UserProfile;