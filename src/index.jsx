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


const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  selectedChannel: 'general',
  username: prompt("What's your username?", 'username')
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
