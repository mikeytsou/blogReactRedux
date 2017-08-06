import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


// import App from './components/App';
// import reducers from './reducers';

// middlewares block, modify, or let actions pass through as theyre created, before they hit a reducer. sort of like a gate keeper
// const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  // <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  // </Provider>
  , document.querySelector('.container'));
