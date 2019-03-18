import { put, take, call } from 'redux-saga/effects';
import Router from 'next/router';


import * as userActions from '../stores/actions/userActions';

import { createUser, listAllUsers, loginUser, getUser} from '../services/api';


export function* listAllUsersSaga() {
  try {
    yield put(userActions.listAllUsers());
    const users = yield call(listAllUsers);
    const data = users ? users.body : [];
    yield put(userActions.listAllUsersSuccess(data))
  }catch(err) {
    yield put(userActions.listAllUsersFailure(err))
  }
}

export function* loginUserSaga(action) {
  try {
    const userInfo = yield call(loginUser, action.user)
    userInfo.token && localStorage.setItem('token', userInfo.token)
    yield put(Router.push('/new-story'));
  }
  catch(err) {
    yield put(userActions.loginUserFailure(err))
  }
}

export function* createUserSaga(action) {
  try {
    const user = yield call(createUser, action)
    const newUser = user.token ? user : []
    yield put(Router.push('/login'))
  }
  catch(err) {
    yield put(userActions.createUserFailure(err))
  }
}

export function* getUserSaga(userId) {
  try {
    const user = yield call(getUser, userId);
    const newUser = user ? user.user : [];
    yield put(userActions.getUserSuccess(newUser))
  }
  catch(err) {
    yield put(userActions.createUserFailure(err))
  }
}

export function* watchGetUserSaga() {
  while (true) {
    const action = yield take('GET_USER');
    yield call(getUserSaga, action.userId);
  }
}


export function* watchCreateUser() {
  while (true) {
    const action = yield take('CREATE_USER');
    yield call(createUserSaga, action.user);
  }
}



export function* watchLoginUser() {
  while (true) {
    const action = yield take('LOGIN_USER');
    yield call(loginUserSaga, action);
  }
}