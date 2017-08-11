import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; // redux-form handles all the state that is being produced by the form. it saves us from having to wire up a bunch of manual action creators
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
