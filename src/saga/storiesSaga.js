import { put, take, call } from 'redux-saga/effects';
import Router from 'next/router'

import * as storiesActions from '../stores/actions/storyActions';

import { getAllStories, createStory, getSingleStory } from '../services/api';


export function* getAllStoriesSaga() {
  try {
    const stories = yield call(getAllStories);
    const data = stories ? stories.data : [];
    yield put(storiesActions.getAllStoriesSuccess(data))
  }catch(err) {
    yield put(storiesActions.getAllStoriesFaiLure(err))
  }
}

export function* createStorySaga(action) {
  try{
    const story = yield call(createStory, action);
    const newStory = story.title ? story : [];
    yield put(Router.push('/blogs'))
  }catch(err) {
    yield put(storiesActions.createStoryFailure(err))
  }
}


export function* getStorySaga(slug) {
  try{
    const story = yield call(getSingleStory, slug);
    const newStory = story.blog ? story.blog : [];
    yield put(storiesActions.getSingleStorySuccess(newStory))
  }catch(err) {
    yield put(storiesActions.createStoryFailure(err))
  }
}


// watch getAllStoriesSaga
export function* watchGetStorySaga() {
  while (true) {
    const action = yield take('GET_STORY');
    yield call(getStorySaga, action.slug);
  }
}


// watch getAllStoriesSaga
export function* watchListAllStories() {
  while (true) {
    yield take('GET_ALL_STORIES');
    yield call(getAllStoriesSaga);
  }
}

// watch getAllStoriesSaga
export function* watchCreateStories() {
  while (true) {
    const action = yield take('CREATE_STORY');
    yield call(createStorySaga, action.story);
  }
}