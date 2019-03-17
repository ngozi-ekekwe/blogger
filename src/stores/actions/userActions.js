import * as types from '../actionTypes';

export const createUser = () => {
  return {
    type: types.CREATE_USER
  }
}

export const createUserSuccess = (user) => {
  return {
    type: types.CREATE_USER_SUCCESS, user
  }
}

export const createUserFailure = (error) => {
  return {
    type: types.CREATE_USER_FAILURE, error
  }
}

export const listAllUsers = () => {
  return {
    type: types.LIST_ALL_USERS
  }
}

export const listAllUsersSuccess = (users) => {
  return {
    type: types.LIST_ALL_USERS_SUCCESS,
    users
  }
}

export const listAllUsersFailure = (error) => {
  return {
    type: types.LIST_ALL_USERS_FAILURE,
    error
  }
}


export const loginUser = (user) => {
  return {
    type: types.LOGIN_USER, user
  }
}

export const loginUserSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS,
  }
}

export const loginUserFailure = (error) => {
  return {
    type: types.LOGIN_FAILURE
  }
}
