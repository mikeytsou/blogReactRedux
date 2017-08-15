import axios from 'axios';

// type definitions
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

const API_KEY = '?key=test123';

export function fetchPosts() {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios.post(`http://reduxblog.herokuapp.com/api/posts${API_KEY}`, values) // values is the title, categories, and content of the blog post
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`http://reduxblog.herokuapp.com/api/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
