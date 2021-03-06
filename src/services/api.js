import { agent } from 'superagent';
import Settings from '../config/settings';

const apiEndpoint = Settings.apiEndpoint;
export const endpoint = (path) => {
  if (path) {
    return `${apiEndpoint}/api/v1${path}`
  }
  return apiEndpoint;
}

const setHeaderMethod = (requestType, requestBody) => {
  const newBody = JSON.stringify(requestBody)
  const token = localStorage.getItem('token')
  return {
    method: requestType,
    headers: new Headers({
      'Authorization': token,
      'Content-Type': 'application/json'
    }),
    body: newBody
  }
}

// Request methods helpers
export const apiGetRequest = (path) =>
  fetch(endpoint(path), setHeaderMethod('GET')).then((res) => {
    return res.json()
  })
export const apiPostRequest = (path, body) =>
  fetch(endpoint(path), setHeaderMethod('POST', body))
    .then((res) => res.json())


export function createUser(user) {
  const path = '/user';
  return apiPostRequest(path, user)
}

export function loginUser(user) {
  const path = '/login';
  return apiPostRequest(path, user)
}

export function listAllUsers() {
  const path = '/users';
  return apiGetRequest(path)
}

export function getUser(userId) {
  const path = `/users/${userId}`;
  return apiGetRequest(path);
}


export function getAllStories() {
  const path = '/stories';
  return apiGetRequest(path);
}

export function createStory(story) {
  const path = '/new-story';
  return apiPostRequest(path, story)
}

export function getSingleStory(slug) {
  const path = `/story/${slug}`;
  return apiGetRequest(path)
}