import { put, take, call } from 'redux-saga/effects';

import * as userActions from '../stores/actions/userActions';

import { createUser, listAllUsers, loginUser} from '../services/api';


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
    yield put(userActions.loginUserSuccess())
  }
  catch(err) {
    yield put(userActions.loginUserFailure(err))
  }
}

export function* createUserSaga(action) {
  console.log(action, 'this is action')
  try {
    const user = yield call(createUser, action)
    console.log(user)
    const newUser = user.token ? user : []
    yield put(userActions.createUserSuccess, newUser)
  }
  catch(err) {
    yield put(userActions.createUserFailure(err))
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