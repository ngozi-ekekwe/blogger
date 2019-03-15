import React from 'react';
import { Link } from '../routes';

const Profile = () => {
  return (
    <div className="user-profile">
      <div className="flex-0">
        <Link>
          <div className="avatar"></div>
        </Link>
      </div>
      <div className="flex-1 profile-details">
          <p className="profile-name">Ngozi Ekekwe</p>
          <div className="date">March 11, 2018 15 mins read</div>
      </div>
    </div>
  );
};

export default Profile;