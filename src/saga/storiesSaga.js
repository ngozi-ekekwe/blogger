import { put, take, call } from 'redux-saga/effects';

import * as storiesActions from '../stores/actions/storyActions';

import { getAllStories } from '../services/api';


export function* getAllStoriesSaga() {
  try {
    const stories = yield call(getAllStories);
    console.log(stories, '=================>')
    const data = users ? stories.body : [];
    yield put(storiesActions.getAllStoriesSuccess(data))
  }catch(err) {
    console.log(err, '===========> erro')
    yield put(storiesActions.getAllStoriesFaiLure(err))
  }
}

// watch getAllStoriesSaga
export function* watchListAllStories() {
  while (true) {
    yield take('GET_ALL_STORIES');
    yield call(getAllStoriesSaga);
  }
}