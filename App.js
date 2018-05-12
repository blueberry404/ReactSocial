/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './src/reducers';
import { RootNavigation } from './src/routes/navigation';

const store = createStore(rootReducer);

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}
