import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './ducks/Reducer';
import AppNavigator from './components/AppNavigator';
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios';

const store = createStore(reducer, applyMiddleware(thunkMiddleware.withExtraArgument({axios}),
loggingMiddleware));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNavigator />
      </Provider>
    );
  }
}
