import _ from 'lodash';
import { FETCH_POSTS } from '../actions/index';

export default function (state = {}, action) { // the data should return an object with a id # as the key and the actual post as an obect, like this { 2: {post} }
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id'); // converts array or data to an object with a id as key and post as value
    default:
      return state;
  }
}

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
