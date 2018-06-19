import React, { Component } from 'react';
import { View } from 'react-native';

import HomeComponent from '../components/Home';

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
		this.props.navigation.navigate('Signup');
	}

	navigateToLoginScreen() {
		this.props.navigation.navigate('Login');
	}
}

export default Home;
