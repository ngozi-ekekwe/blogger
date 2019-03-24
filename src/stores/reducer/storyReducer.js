import * as types from '../actionTypes';
import initialState from './intialState';

export default function storyReducer(state = initialState.stories, action) {
  switch (action.type) {
    case types.GET_ALL_STORIES_SUCCESS: {
      return {
        ...state,
        stories: action.stories
      }
    }

    case types.GET_STORY_SUCCESS: {
      return {
        ...state,
        story: action.story
      }
    }
    default: {
      return state;
    }
  }
}
