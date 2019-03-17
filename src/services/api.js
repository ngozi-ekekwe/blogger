import { agent } from 'superagent';
import Settings from '../config/settings';

const apiEndpoint = 'https://blogger-server.herokuapp.com'

export const endpoint = (path) => {
  if (path) {
    return `${apiEndpoint}/api${path}`
  }
  return apiEndpoint;
}

const setHeaderMethod = (requestType, requestBody, token) => {
  const newBody = JSON.stringify(requestBody)
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