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
    default: {
      return state;
    }
  }
}
