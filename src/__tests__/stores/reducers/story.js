import reducer from '../../../stores/reducer/storyReducer';
import * as types from '../../../stores/actionTypes';


describe('story reducer', () => {
  test('get al stories', () => {
    const stories = 'stories'
    expect(
      reducer({}, { type: types.GET_ALL_STORIES_SUCCESS, stories} )).toEqual({stories: "stories",})
  })

  test('it gets story on success', () => {
    const stories = [{id: '1', story: 'story'}]
    expect(reducer({}, {type: types.GET_ALL_STORIES_SUCCESS, stories})).toEqual({
      "stories": [{id: '1', story: 'story'}]
    })
  })
})