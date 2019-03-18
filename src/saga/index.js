import { all, fork } from 'redux-saga/effects';
import { watchLoginUser, watchCreateUser, watchGetUserSaga } from './customerSaga'
import { watchListAllStories, watchCreateStories, watchGetStorySaga } from './storiesSaga';



export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchListAllStories),
    fork(watchCreateUser),
    fork(watchCreateStories),
    fork(watchGetStorySaga),
    fork(watchGetUserSaga)
  ]);
}
