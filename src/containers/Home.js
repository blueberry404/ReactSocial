import React, { Component } from 'react';
import { View } from 'react-native';

import HomeComponent from '../components/Home';
import * as NavigatorService from '../service/NavigatorService';

class Home extends Component {
	constructor(props) {
		super(props);
		this.navigateToRegisterScreen = this.navigateToRegisterScreen.bind(this);
		this.navigateToLoginScreen = this.navigateToLoginScreen.bind(this);
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<HomeComponent
					onLogin={this.navigateToLoginScreen}
					onRegister={this.navigateToRegisterScreen}
				/>
			</View>
		);
	}

	navigateToRegisterScreen() {
		NavigatorService.navigate('Signup');
	}

	navigateToLoginScreen() {
		NavigatorService.navigate('Login');
	}
}

export default Home;
