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

// watch fetch orders
export function* watchLoginUser() {
  while (true) {
    const action = yield take('LOGIN_USER');
    yield call(loginUserSaga, action);
  }
}