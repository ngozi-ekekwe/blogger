import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from '../routes';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { userId, getUser } = this.props;
    userId && getUser(userId)
  }

  render() {
    const { user } = this.props;
    return (
      <div className="user-profile">
        <div className="flex-0">
          <Link>
            <div className="avatar"></div>
          </Link>
        </div>
       { user && <div className="flex-1 profile-details">
            <p className="profile-name">{`${user.firstName} ${user.lastName}`}</p>
            <div className="date">{`${moment(user.createdAt).format('MMMM Do YYYY')}  - ${10} mins read`}</div>
        </div>}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    user: state.userReducer.user[0]
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getUser: (userId) => {
      return dispatch({ type: 'GET_USER', userId })
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
