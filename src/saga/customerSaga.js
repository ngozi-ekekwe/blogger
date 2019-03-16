import { put, take, call } from 'redux-saga/effects';

import * as userActions from '../stores/actions/userActions';

import { createUser, listAllUsers } from '../services/api';


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

// watch fetch orders
export function* watchListAllUsers() {
  while (true) {
    yield take('LIST_ALL_USERS');
    yield call(listAllUsersSaga);
  }
}