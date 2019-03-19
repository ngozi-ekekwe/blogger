import {
  getAllStoriesSaga, createStorySaga, getStorySaga
} from '../../saga/storiesSaga';

jest.mock('../../services/api.js', () => ({
  getAllStories: jest.fn(),
}));

describe('getAllStoriesSaga', () => {
  test('return a list of stories', () => {
    const gen = getAllStoriesSaga();
    expect(gen.next().value.done).toBeFalsy();
    expect(gen.next(['data']).value.payload.action.type).toEqual('GET_ALL_STORIES_SUCCESS');
  });
});


describe('create story saga', () => {
  test('create a story', () => {
    const story = {id: 1, title: 'my test', content: 'hello world'}
    const gen = createStorySaga(story);
    expect(gen.next().value.type).toEqual('PUT');
    expect(gen.next().done).toBeTruthy();
  });
});

describe('get story saga', () => {
  test('gets a single story', () => {
    const slug = 'slug';
    const gen = getStorySaga(slug);
    expect(gen.next().value.type).toEqual('PUT');
    expect(gen.next().done).toBeTruthy();

  })
})