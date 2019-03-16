import { all, fork } from 'redux-saga/effects';
import { watchListAllUsers } from './customerSaga'
import { watchListAllStories } from './storiesSaga';



export default function* rootSaga() {
  yield all([
    fork(watchListAllUsers),
    fork(watchListAllStories)
  ]);
}
