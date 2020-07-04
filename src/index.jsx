// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// initial state
const initialState = {
  messages: [],
  channels: ['general', 'tokyo', 'random'],
  selectedChannel: 'general',
  username: prompt("What's your username?")
};

// State and reducers
const reducers = combineReducers({
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
