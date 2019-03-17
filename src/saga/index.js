import { all, fork } from 'redux-saga/effects';
import { watchLoginUser, watchCreateUser } from './customerSaga'
import { watchListAllStories, watchCreateStories } from './storiesSaga';



export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchListAllStories),
    fork(watchCreateUser),
    fork(watchCreateStories)
  ]);
}
