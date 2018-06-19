/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { RootNavigation } from './src/routes/navigation';
import configureStore from './src/config/configureStore';

const store = configureStore(); // You can also pass in an initialState here

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<RootNavigation />
			</Provider>
		);
	}
}
