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
import channelsReducer from './reducers/channels_reducer';
import messagesReducer from './reducers/messages_reducer';
import selectChannelReducer from './reducers/select_channel_reducer';
import usernameReducer from './reducers/username_reducer';

// initial state
const initialState = {
  messages: [],
  channels: ['general', 'tokyo', 'random'],
  selectedChannel: 'general',
  username: prompt("What's your username?")
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectChannelReducer,
  username: usernameReducer
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
