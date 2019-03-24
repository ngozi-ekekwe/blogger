import * as types from '../actionTypes';

export const createStory  = () => {
  return {
    type: types.CREATE_STORY
  }
}

export const createStorySuccess  = (story) => {
  return {
    type: types.CREATE_STORY_SUCCESS, story
  }
}

export const createStoryFailure = (error) => {
  return {
    type: types.CREATE_STORY_FAILURE, error
  }
}

export const getAllStories = () => {
  return {
    type: types.GET_ALL_STORIES
  }
}

export const getAllStoriesSuccess  = (stories) => {
  return {
    type: types.GET_ALL_STORIES_SUCCESS, stories
  }
}

export const getAllStoriesFaiLure  = (error) => {
  return {
    type: types.GET_ALL_STORIES_FAILURE, error
  }
}

export const getSingleStorySuccess = (story) => {
  return {
    type: types.GET_STORY_SUCCESS, story
  }
}