/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

import { RootNavigation } from './routes/navigation';
import configureStore from './config/configureStore';
import * as NavigatorService from './service/NavigatorService';

const store = configureStore(); // You can also pass in an initialState here

export default class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<Root>
					<RootNavigation ref={navRef => {
						NavigatorService.setContainer(navRef);
					}}/>
				</Root>
			</Provider>
		);
	}
}
