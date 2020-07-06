// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// reducers
import messagesReducer from './reducers/messages_reducer';
import selectChannelReducer from './reducers/select_channel_reducer';

const identityReducer = (state = null) => state;

// initial state
const messages = [
  {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }
];

const initialState = {
  messages,
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  // username: prompt("What's your username?")
  username: "test"
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  selectedChannel: selectChannelReducer,
  channels: identityReducer,
  username: identityReducer
});

// middlewares
const middlewares = applyMiddleware(logger, reduxPromise);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
