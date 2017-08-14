import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions/index';

export default function (state = {}, action) { // the data should return an object with a id # as the key and the actual post as an obect, like this { 2: {post} }
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); // converts array or data to an object with a id as key and post as value
    case FETCH_POST:
      // this is es5 syntax
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // this is es6 syntax and is doing the exact same thing as above
      return { ...state, [action.payload.data.id]: action.payload.data }; // this is creating a key-value pair(id-post)
    default:
      return state;
  }
}

// { ...state } means to take all existing posts we have, take them out of the state object that we already have and put include it into this new object (...state esentially means existing application state)

// lodash _.mapKeys:
// const posts = [
//   { id: 4, title: 'Hi' },
//   { id: 25, title: 'Goodbye' },
//   { id: 26, title: 'How are you?' }
// ];

// const state =_.mapKeys(posts, 'id')
// // this turns posts into:
// { '4': { id: 4, title: 'Hi' } },
// { '25': { id: 25, title: 'Goodbye' } }
// { '26': { id: 26, title: 'How are you?' } }
// state['4'] would return { id: 4, title: 'Hi' }
