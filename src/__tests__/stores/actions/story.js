import * as types from '../../../stores/actionTypes';
import * as storyActions from '../../../stores/actions/storyActions';

describe('story Actions', () => {
  test('get all stories success', () => {
    const action = storyActions.createStorySuccess('story');
    expect(action.type).toEqual(types.CREATE_STORY_SUCCESS)
  });

  test('get all stories action', () => {
    const action = storyActions.getAllStories();
    expect(action.type).toEqual('GET_ALL_STORIES');
  })

})