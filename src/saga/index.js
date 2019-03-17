import { all, fork } from 'redux-saga/effects';
import { watchLoginUser } from './customerSaga'
import { watchListAllStories } from './storiesSaga';



export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchListAllStories)
  ]);
}
