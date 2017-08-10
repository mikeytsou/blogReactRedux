import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import PostIndex from './components/PostIndex';
import PostNew from './components/PostNew';

import reducers from './reducers';

// middlewares block, modify, or let actions pass through as theyre created, before they hit a reducer. sort of like a gate keeper
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  // Provider makes the Redux store available to the connect() calls in the component hierarchy below. Normally, you can’t use connect() without wrapping a parent or ancestor component in <Provider>.
  // Switch component takes in a collection of different routes and renders the first route that matches the url(put your most specific routes at the top)
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="ui main text container">
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route exact path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
