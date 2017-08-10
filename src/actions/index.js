import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const API_KEY = '?key=test123';

export function fetchPosts() {
  const request = axios.get(`http://reduxblog.herokuapp.com/api/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
