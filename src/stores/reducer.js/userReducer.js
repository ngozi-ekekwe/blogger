import * as types from '../actionTypes';
import initialState from './intialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.CREATE_USER_SUCCESS: {
      return {
        ...state,
        user: action.user
      }
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true
      }
    }

    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isAuthenticated: false
      }
    }
    default: {
      return state;
    }
  }
}
