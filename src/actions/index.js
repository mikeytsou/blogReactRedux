import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_posts';

const API_KEY = '?key=test123';

export function fetchPosts() {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values) {
  const request = axios.post(`http://reduxblog.herokuapp.com/api/posts${API_KEY}`, values); // values is the title, categories, and content of the blog post

  return {
    type: CREATE_POST,
    payload: request
  };
}
